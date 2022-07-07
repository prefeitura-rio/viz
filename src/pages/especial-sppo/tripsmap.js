import React, { useState, useEffect } from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import DeckGL from "@deck.gl/react";
import { TripsLayer } from "@deck.gl/geo-layers";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// Source data CSV
const TRIPS = require("./trips.json");

// Mapbox configs
const MAP_STYLE = "mapbox://styles/mapbox/dark-v9";
const MAPBOX_API_TOKEN = "pk.eyJ1IjoiZDExNjYyNiIsImEiOiJjazM1ODVoZ3MxNjJoM21vcWMwZmhycHVvIn0.7hxPP_9w7z8QAVc2nStP6w";

// animation configs
const ANIMATION_SPEED = 5;
const LOOP_LENGTH = 10800;
const TRAIL_LENGTH = 600;

//initial map position
const INITIAL_VIEW_STATE = {
  longitude: -43.41211,
  latitude: -22.92192,
  zoom: 10.7,
  pitch: 0,
  bearing: 0,
};

export default function TripsMap() {
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
      getColor: [253, 128, 93],
      widthMinPixels: 5,
      fadeTrail: true,
      currentTime: time,
      opacity: 0.3,
      rounded: true,
      trailLength: TRAIL_LENGTH,
      shadowEnabled: false,
    }),
  ];

  return (
    <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={false} layers={layers}>
      <Map mapStyle={MAP_STYLE} mapboxAccessToken={MAPBOX_API_TOKEN} />
    </DeckGL>
  );
}
