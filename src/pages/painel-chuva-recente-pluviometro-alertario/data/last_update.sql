SELECT
    MAX(
      DATETIME(
        CONCAT(data_particao," ", horario)
      )
    ) AS last_update
FROM `rj-cor.clima_pluviometro.taxa_precipitacao_alertario`
WHERE data_particao> DATE_SUB(CURRENT_DATE('America/Sao_Paulo'), INTERVAL 2 DAY)