import React, { useRef, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Map, Layer } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { TripsLayer } from "@deck.gl/geo-layers";
import {MapboxOverlay as DeckOverlay, MapboxLayer} from '@deck.gl/mapbox'; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w";
const MAP_STYLE = "mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b";

const DURATION = 400;
const OFFSET = -450;
const TOP_SCENE = "-1vh";
// animation configs
const TRAIL_LENGTH = 500;
const ANIMATION_SPEED = 3;
const LOOP_LENGTH = 28000;

const TRIPS = require("../data/trips.json");

const cities = {
  sp: { lat: -23.5691, lon: -46.6474 },
  rj: { lat: -22.9121089, lon: -43.2301558 },
};

const initialViewState = {
  latitude: cities.rj.lat,
  longitude: cities.rj.lon,
  zoom: 9,
  bearing: 0,
  pitch: 0,
};

const TweenStyled = styled.div`
.section {
  height: 50vh;
  background-color: #87c5f5;
}

.black-box {
  height: 100px;
  background-color: black;
}
`;

export default function ScrollMapboxGL() {
  const [time, setTime] = useState(0);
  const [animation] = useState({});

  const [settings, setSettings] = useState({
    scrollZoom: false,
    mapboxAccessToken: MAPBOX_TOKEN,
    mapStyle: MAP_STYLE,
    interactive: false,

    style: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
    },
  });

  const updateSettings = useCallback(
    (name, value) =>
      setSettings((s) => ({
        ...s,
        [name]: value,
      })),
    []
  );

  const mapRef = useRef();
  const flyToNextStep = (viewState) => {
    mapRef.current?.flyTo(viewState);
  };

  const layers = [
    new MapboxLayer({
      id: "my-trips-layer",
      type: TripsLayer,
      data: TRIPS,
      getPath: (d) => d.path,
      getTimestamps: (d) => d.timestamps,
      getColor: [0, 200, 236],
      widthMinPixels: 5,
      fadeTrail: true,
      currentTime: time,
      opacity: 0,
      rounded: true,
      trailLength: TRAIL_LENGTH,
      shadowEnabled: false,
    }),
    null,
    new MapboxLayer({
      id: "my-trips-layer2",
      type: TripsLayer,
      data: TRIPS,
      getPath: (d) => d.path,
      getTimestamps: (d) => d.timestamps,
      getColor: [0, 200, 236],
      widthMinPixels: 5,
      fadeTrail: true,
      currentTime: time,
      opacity: 0,
      rounded: true,
      trailLength: TRAIL_LENGTH,
      shadowEnabled: false,
    }),
    null,
    new MapboxLayer({
      id: "my-trips-layer3",
      type: TripsLayer,
      data: TRIPS,
      getPath: (d) => d.path,
      getTimestamps: (d) => d.timestamps,
      getColor: [0, 200, 236],
      widthMinPixels: 5,
      fadeTrail: true,
      currentTime: time,
      opacity: 0,
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

  const setLayerOpacity = (index) => {
    const mapInstance = mapRef.current?.getMap();
    if (!mapInstance) return;
    for (let i = 0; i < layers.length; i++) {
      if (!layers[i]) continue;
      if (i === index) {
        mapInstance.getLayer(layers[i].id)?.implementation.setProps({
          opacity: 1,
        });
      } else {
        mapInstance.getLayer(layers[i].id)?.implementation.setProps({
          opacity: 0,
        });
      }
    }
  };

  useEffect(
    () => {
      const animate = () => {
        setTime(t => (t + ANIMATION_SPEED) % LOOP_LENGTH);
        animation.id = window.requestAnimationFrame(animate);
      };
      animation.id = window.requestAnimationFrame(animate);
      return () => window.cancelAnimationFrame(animation.id);
    },
    [animation]
  );

  return (
    <div id="main-container">
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        {...settings}
        onLoad={
          ({target}) => {
            layers.forEach((layer) => {
              if (layer) {
                target.addLayer(layer);
              }
            });
          }
        }
        onRender={
          ({target}) => {
            layers.forEach((layer) => {
              if (layer) {
                const currentLayer = target.getLayer(layer.id);
                if (currentLayer) {
                  currentLayer.implementation.setProps({
                    currentTime: time,
                  });
                }
              }
            });
          }
        }
      >
        <Layer {...building3d} />
      </Map>
      <TweenStyled {... {id: "main-div"}}>
        <div className="section" />
        <Controller>
          <Scene
            triggerElement="#t1"
            indicators={true}
            pin={true}
            duration={DURATION}
            offset={OFFSET}
          >
            {(progress, event) => (
              <h1 style={{ color: "#FFF", top: TOP_SCENE }}>
                {" Scene 1 | Progress: "}
                {progress}
                {event.type === "enter" &&
                  flyToNextStep({
                    center: [cities.rj.lon, cities.rj.lat],
                    zoom: 9,
                    bearing: 0,
                    pitch: 0,
                    duration: 4000,
                  })
                }
                {event.type === "enter" && setLayerOpacity(0)}
              </h1>
            )}
          </Scene>
          <div id="t1" />
          <Scene
            triggerElement="#t2"
            indicators={true}
            pin={{
              pushFollowers: false,
            }}
            duration={DURATION}
            offset={OFFSET}
          >
            {(progress, event) => (
              <h1 style={{ color: "#FFF", top: TOP_SCENE }}>
                {" Scene 2 | Progress: "}
                {progress}
                {event.type === "enter" &&
                  flyToNextStep({
                    center: [-43.54516, -22.98354],
                    zoom: 10.67,
                    pitch: 7.0,
                    bearing: 0.0,
                    duration: 4000,
                  })}
                {event.type === "enter" && setLayerOpacity(1)}
              </h1>
            )}
          </Scene>
          <div id="t2" />
          <Scene
            triggerElement="#t3"
            indicators={true}
            pin={{
              pushFollowers: false,
            }}
            duration={DURATION}
            offset={OFFSET}
          >
            {(progress, event) => (
              <h1 style={{ color: "#FFF", top: TOP_SCENE }}>
                {" Scene 3 | Progress: "}
                {progress}
                {event.type === "enter" &&
                  flyToNextStep({
                    center: [-43.66089, -22.92225],
                    zoom: 13.36,
                    pitch: 60.0,
                    bearing: 0.0,
                    duration: 4000,
                  })}
                {event.type === "enter" && setLayerOpacity(2)}
              </h1>
            )}
          </Scene>
          <div id="t3" />
          <Scene
            triggerElement="#t4"
            indicators={true}
            pin={{
              pushFollowers: false,
            }}
            duration={DURATION}
            offset={OFFSET}
          >
            {(progress, event) => (
              <h1 style={{ color: "#FFF", top: TOP_SCENE }}>
                {" Scene 4 | Progress: "}
                {progress}
                {event.type === "enter" &&
                  flyToNextStep({
                    center: [-43.35712, -22.8334],
                    zoom: 13.26,
                    pitch: 60.0,
                    bearing: -151.9,
                    duration: 4000,
                  })}
                {event.type === "enter" && setLayerOpacity(3)}
              </h1>
            )}
          </Scene>
          <div id="t4" />
          <Scene
            triggerElement="#t5"
            indicators={true}
            pin={{
              pushFollowers: false,
            }}
            duration={DURATION}
            offset={OFFSET}
          >
            {(progress, event) => (
              <h1 style={{ color: "#FFF", top: TOP_SCENE }}>
                {" Scene 5 | Progress: "}
                {progress}
                {event.type === "enter" &&
                  flyToNextStep({
                    center: [-43.24732, -22.9526],
                    zoom: 12.33,
                    pitch: 60.0,
                    bearing: -51.24,
                    duration: 4000,
                  })}
                {event.type === "enter" && setLayerOpacity(4)}
              </h1>
            )}
          </Scene>
          <div id="t5" />
        </Controller>
        <div className="section" />
      </TweenStyled>
    </div>
  );
}
