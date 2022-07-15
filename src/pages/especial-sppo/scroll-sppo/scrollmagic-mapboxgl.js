import React, { useRef, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Map, Layer } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;


const TOP_SCENE = "-1vh";

const cities = {
  sp: { lat: -23.5691, lon: -46.6474 },
  rj: { lat: -22.9121089, lon: -43.2301558 },
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

export default function ScrollMapboxGL(
  props = {
    interactive: false,
    mapboxAccessToken: "",
    mapStyle: "",
    scrollZoom: false,
    story: {
      animationSpeed: 3,
      animationLoopLength: 28000,
      chapters: [
        {
          id: "chapter-1",
          layer: null,
          map: {
            center: {
              lat: 0,
              lon: 0,
            },
            zoom: 0,
            bearing: 0,
            pitch: 0,
            duration: 4000,
          },
          text: "",
        },
      ],
      initialViewState: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
        bearing: 0,
        pitch: 0
      },
      sectionDuration: 400,
      sectionOffset: -450,
    }
  }
) {
  /* Animation stuff */
  const [time, setTime] = useState(0);
  const [animation] = useState({});

  useEffect(
    () => {
      const animate = () => {
        setTime(t => (t + props.story.animationSpeed) % props.story.animationLoopLength);
        animation.id = window.requestAnimationFrame(animate);
      };
      animation.id = window.requestAnimationFrame(animate);
      return () => window.cancelAnimationFrame(animation.id);
    },
    [animation]
  );

  /* Map configurations */
  const [settings] = useState({
    scrollZoom: props.scrollZoom,
    mapboxAccessToken: props.mapboxAccessToken,
    mapStyle: props.mapStyle,
    interactive: props.interactive,
    style: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
    },
  });
  const mapRef = useRef();

  /* Map utilities */

  // This will make the map fly to another location
  const flyToNextStep = (viewState) => {
    mapRef.current?.flyTo(viewState);
  };

  // This will set the opacity of a layer while fading all other layers
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

  /* 3D buildings configuration, activation is optional */
  const [building3d] = useState({
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

  // Generate layers list based on input file 
  const layers = []
  props.story.chapters.forEach(chapter => {
    if (chapter.layer) {
      layers.push(chapter.layer);
    }
    else {
      layers.push(null);
    }
  });

  return (
    <div id="main-container">
      <Map
        ref={mapRef}
        initialViewState={{
          latitude: props.story.chapters[0].map.center.lat,
          longitude: props.story.chapters[0].map.center.lon,
          zoom: props.story.chapters[0].map.zoom,
          bearing: props.story.chapters[0].map.bearing,
          pitch: props.story.chapters[0].map.pitch,
        }}
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
          {props.story.chapters.map((chapter, index) => {
            return (
              <span key={index}>
                <Scene
                  triggerElement={"#" + chapter.id}
                  indicators={true}
                  pin={true}
                  duration={props.story.sectionDuration}
                  offset={props.story.sectionOffset}
                >
                  {(progress, event) => (
                    <h1 style={{ color: "#FFF", top: TOP_SCENE }}>
                      {chapter.text}
                      {event.type === "enter" &&
                        flyToNextStep({
                          center: [chapter.map.center.lon, chapter.map.center.lat],
                          zoom: chapter.map.zoom,
                          bearing: chapter.map.bearing,
                          pitch: chapter.map.pitch,
                          duration: chapter.map.duration,
                        })
                      }
                      {event.type === "enter" && setLayerOpacity(index)}
                    </h1>
                  )}
                </Scene>
                <div id={chapter.id} />
              </span>
            );
          })}
        </Controller>
        <div className="section" />
      </TweenStyled>
    </div>
  );
}
