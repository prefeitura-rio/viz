import React, { useState, useEffect } from "react";
import { Map, Layer } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import DeckGL from "@deck.gl/react";
import { TripsLayer } from "@deck.gl/geo-layers";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// Source data CSV: https://jupyter.dados.rio/lab/tree/dataviz/dataviz-subsidio
const TRIPS = require("./data/trips.json");

// Mapbox configs
const MAP_STYLE = "mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b";
const MAPBOX_API_TOKEN =
  "pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w";

// animation configs
const ANIMATION_SPEED = 4;
const LOOP_LENGTH = 28000;
const TRAIL_LENGTH = 500;

// //initial map position
// const INITIAL_VIEW_STATE = {
// longitude: -43.45938,
// latitude: -22.94232,
// zoom: 10.67,
// pitch: 7.0,
// bearing: 0.0,
// };

export default function TripsMap({
  INITIAL_VIEW_STATE = {
    longitude: -43.45938,
    latitude: -22.94232,
    zoom: 10.67,
    pitch: 7.0,
    bearing: 0.0,
  },
}) {
  const [time, setTime] = useState(0);
  const [animation] = useState({});

  useEffect(() => {
    const animate = () => {
      setTime((t) => (t + ANIMATION_SPEED) % LOOP_LENGTH);
      animation.id = window.requestAnimationFrame(animate);
    };
    animation.id = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animation.id);
  }, [animation]);

  const layers = [
    new TripsLayer({
      id: "trips",
      data: TRIPS,
      getPath: (d) => d.path,
      getTimestamps: (d) => d.timestamps,
      getColor: [0, 200, 236],
      widthMinPixels: 5,
      fadeTrail: true,
      currentTime: time,
      opacity: 0.5,
      rounded: true,
      trailLength: TRAIL_LENGTH,
      shadowEnabled: false,
    }),
  ];

  const [building3d, setBuilding] = useState({
    id: "add-3d-buildings",
    source: "composite",
    "source-layer": "building",
    filter: ["==", "extrude", "true"],
    type: "fill-extrusion",
    minzoom: 5,
    paint: {
      "fill-extrusion-color": "#aaa",
      "fill-extrusion-height": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0,
        10.05,
        ["get", "height"],
      ],
      "fill-extrusion-base": [
        "interpolate",
        ["linear"],
        ["zoom"],
        5,
        0,
        10.05,
        ["get", "min_height"],
      ],
      "fill-extrusion-opacity": 0.9,
    },
  });

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={false}
      layers={layers}
    >
      <Map mapStyle={MAP_STYLE} mapboxAccessToken={MAPBOX_API_TOKEN}>
        <Layer {...building3d} />
      </Map>
    </DeckGL>
  );
}
