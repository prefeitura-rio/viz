// Mandatory
import { useEffect, useState, useRef } from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { H3HexagonLayer } from "@deck.gl/geo-layers";
import DeckGL from "@deck.gl/react";
import { Oval } from "react-loader-spinner";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// Chapters

export default function PainelChuva() {
  const mapRef = useRef();

  const [viewport, setViewport] = useState({
    longitude: -43.41103,
    latitude: -22.9342,
    zoom: 10
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    let apiUrl =
      "https://api.dados.rio/v2/clima_pluviometro/precipitacao_15min/";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const getTooltip = ({ object }) => {
    let qtyText = "";
    if (object && object.status !== "SEM CHUVA") {
      qtyText = `<p><b>Chuva:</b> ${object.chuva_15min} mm</p>`;
    }
    return (
      object && {
        html: `<div>
        <h4><b>Bairro:</b> ${object.bairro}</h4>
        <p><b>Status:</b> ${object.status}</p>
        ${qtyText}
      </div>`
      }
    );
  };

  const H3layer = new H3HexagonLayer({
    id: "h3-layer",
    data: data,
    pickable: true,
    wireframe: false,
    filled: true,
    extruded: true,
    elevationScale: 0,
    getHexagon: (d) => d.id_h3,
    getFillColor: (d) => [255, (1 - d.chuva_15min / 50) * 255, 150],
    getElevation: (d) => d.chuva_15min
  });

  return (
    <div>
      {data && data.length === 0 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Oval height={100} width={100} color="#00BFFF" visible={true} />
        </div>
      )}
      {data && data.length > 0 && (
        <DeckGL
          ref={mapRef}
          initialViewState={viewport}
          controller={true}
          onViewportChange={({ target }) => {
            setViewport;
          }}
          layers={[H3layer]}
          getTooltip={getTooltip}
        >
          <Map
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="mapbox://styles/escritoriodedados/clb5mnbms001z14o76898gh5c"
            mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
          ></Map>
        </DeckGL>
      )}
      ;
    </div>
  );
}
