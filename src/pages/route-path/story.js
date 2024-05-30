import { useEffect, useState, useRef } from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { H3HexagonLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer, TextLayer } from "@deck.gl/layers";

import DeckGL from "@deck.gl/react";
import { Oval } from "react-loader-spinner";
import { isMobile } from "react-device-detect";
import DATA from "./data/path_data.json";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function RoutePath() {
  const mapRef = useRef();

  const [viewport, setViewport] = useState({
    longitude: isMobile ? -43.47398 : -43.50398,
    latitude: isMobile ? -22.95157 : -22.92957,
    zoom: isMobile ? 8.5 : 10.3,
  });

  const [data, setData] = useState([]);
  const [hoverInfo, setHoverInfo] = useState(null);

  useEffect(() => {
    setData(DATA);
  }, []);

  const layers = [
    new GeoJsonLayer({
      id: "path",
      data: data.polylineGeojson,
      pickable: true,
      stroked: true,
      filled: false,
      lineWidthMinPixels: 3,
      getLineColor: [0, 0, 255, 255],
      onHover: (info) => setHoverInfo(info),
    }),
    new GeoJsonLayer({
      id: "locations",
      data: data.locationsGeojson,
      pickable: true,
      stroked: false,
      filled: true,
      pointRadiusMinPixels: 10,
      getFillColor: (d, { index }) => {
        if (index === 0) {
          return [0, 255, 0, 200]; // Verde para a primeira localização
        } else if (index === data.locationsGeojson.features.length - 1) {
          return [255, 0, 0, 200]; // Vermelho para a última localização
        } else {
          return [255, 140, 0, 200]; // Laranja para as outras localizações
        }
      },
      onHover: (info) => setHoverInfo(info),
    }),
  ];
  console.log(layers);
  return (
    <div>
      {data && data.length === 0 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Oval height={100} width={100} color="#00BFFF" visible={true} />
        </div>
      )}
      {data && (
        <DeckGL
          ref={mapRef}
          initialViewState={viewport}
          controller={true}
          onViewportChange={({ target }) => {
            setViewport;
          }}
          layers={layers}
        >
          <Map
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="mapbox://styles/escritoriodedados/clgfevcvc009101p9ax017bah"
            mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
          />
          {hoverInfo && hoverInfo.object && (
            <div
              style={{
                position: "absolute",
                zIndex: 1,
                pointerEvents: "none",
                left: hoverInfo.x,
                top: hoverInfo.y,
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "3px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div>
                {Object.keys(hoverInfo.object.properties).map((key) => (
                  <div key={key}>
                    <strong>{key}: </strong>
                    {hoverInfo.object.properties[key]}
                  </div>
                ))}
              </div>
            </div>
          )}
        </DeckGL>
      )}
    </div>
  );
}
