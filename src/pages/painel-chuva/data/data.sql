WITH alertario AS (
  SELECT 
    id_estacao, 
    MAX(acumulado_chuva_15_min) AS acumulado_chuva_15_min, 
    MAX(acumulado_chuva_1_h) AS acumulado_chuva_1_h
  FROM `rj-cor.clima_pluviometro.taxa_precipitacao_alertario` t1
  WHERE TRUE 
      AND DATE_TRUNC(t1.data_particao, day) = '2023-02-09'
      AND acumulado_chuva_1_h > 0
  GROUP BY id_estacao
),

last_measurements AS (
  SELECT 
    a.id_estacao, 
    "alertario" AS sistema, 
    a.acumulado_chuva_15_min, 
    a.acumulado_chuva_1_h
  FROM alertario a
),

h3_chuvas AS (
  SELECT 
    h3.*, 
    lm.acumulado_chuva_15_min, 
    lm.acumulado_chuva_1_h,
    lm.acumulado_chuva_15_min/power(h3.dist,5) AS p1_15min, 
    lm.acumulado_chuva_1_h/power(h3.dist,5) AS p1_1h, 
    1/power(h3.dist,5) AS inv_dist
  FROM (
    WITH centroid_h3 AS (
      SELECT 
        *, 
        ST_CENTROID(geometry) AS geom 
      FROM `rj-cor.dados_mestres.h3_grid_res8`
    ),

    estacoes_pluviometricas AS (
      SELECT 
        id_estacao AS id, 
        "alertario" AS sistema, 
        ST_GEOGPOINT(CAST(longitude AS FLOAT64), 
        CAST(latitude AS FLOAT64)) AS geom 
        FROM `rj-cor.clima_pluviometro.estacoes_alertario`
    ),

    estacoes_mais_proximas AS (
      SELECT AS VALUE s
      FROM (
          SELECT 
            ARRAY_AGG(
                STRUCT<id_h3 STRING, 
                id_estacao STRING, 
                dist FLOAT64, 
                sistema STRING>(
                  a.id, b.id, 
                  ST_DISTANCE(a.geom, b.geom), 
                  b.sistema
                )
                ORDER BY ST_DISTANCE(a.geom, b.geom)
            ) AS ar
          FROM (SELECT id, geom FROM centroid_h3) a 
          CROSS JOIN(
              SELECT id, sistema, geom 
              FROM estacoes_pluviometricas 
              WHERE geom is not null
              ) b 
          WHERE a.id <> b.id
          GROUP BY a.id
        ) ab CROSS JOIN
        UNNEST(ab.ar) s 
    )

    SELECT 
      *, 
      row_number() OVER (PARTITION BY id_h3 ORDER BY dist) AS ranking 
    FROM estacoes_mais_proximas
    ORDER BY id_h3, ranking
    ) h3
    LEFT JOIN last_measurements 
      lm ON lm.id_estacao=h3.id_estacao AND lm.sistema=h3.sistema
    ),

h3_media AS (
  SELECT 
    id_h3,
    CAST(sum(p1_15min)/sum(inv_dist) AS DECIMAL) AS chuva_15min,
    CAST(sum(p1_1h)/sum(inv_dist) AS DECIMAL) AS chuva_1h,
  FROM h3_chuvas 
  GROUP BY id_h3
)

SELECT
  h3_media.id_h3,
  nome AS bairro,
  cast(round(h3_media.chuva_15min,2) AS decimal) AS chuva_15min,
  cast(round(h3_media.chuva_1h,2) AS decimal) AS chuva_1h
FROM h3_media
LEFT JOIN `rj-cor.dados_mestres.h3_grid_res8` h3_grid 
  ON h3_grid.id=h3_media.id_h3
INNER JOIN `rj-cor.dados_mestres.bairro` 
  ON ST_CONTAINS(`rj-cor.dados_mestres.bairro`.geometry, ST_CENTROID(h3_grid.geometry))