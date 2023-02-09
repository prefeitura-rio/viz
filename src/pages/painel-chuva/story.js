// Mandatory
import { useEffect, useState, useRef, useCallback } from "react";
import { MapboxLayer } from "@deck.gl/mapbox";
import { Map, Popup } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { H3HexagonLayer } from "@deck.gl/geo-layers";
import DATA from "./data/chuva_15min.json";

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
    zoom: 10,
  });

  const H3layer = new MapboxLayer({
    id: "h3-layer",
    type: H3HexagonLayer,
    data: DATA,
    pickable: true,
    wireframe: false,
    filled: true,
    extruded: true,
    elevationScale: 0,
    getHexagon: (d) => d.id_h3,
    getFillColor: (d) => [255, (1 - d.chuva_15min / 50) * 255, 150],
    getElevation: (d) => d.chuva_15min,
  });

  const [hoverInfo, setHoverInfo] = useState(null);

  const onHover = useCallback((event) => {
    const {
      features,
      point: { x, y },
    } = event;
    const hoveredFeature = features && features[0];
    console.log(event);
    // prettier-ignore
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
  }, []);

  return (
    <div>
      <Map
        ref={mapRef}
        initialViewState={viewport}
        onViewportChange={({ target }) => {
          setViewport;
        }}
        onLoad={({ target }) => {
          target.addLayer(H3layer);
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/escritoriodedados/clb5mnbms001z14o76898gh5c"
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        onMouseMove={onHover}
      >
        {hoverInfo && (
          <div
            className="tooltip"
            style={{ left: hoverInfo.x, top: hoverInfo.y }}
          >
            <div>Status: {hoverInfo.feature.properties.status}</div>
          </div>
        )}
      </Map>
      ;
    </div>
  );
}
