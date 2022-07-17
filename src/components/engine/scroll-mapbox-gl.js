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

const TweenStyled = styled.div`
  .section {
    height: 60vh;
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
          layers: [{ layerType: null, layer: null }],
          sectionDuration: null,
          sectionOffset: null,
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
        pitch: 0,
      },
    },
  }
) {
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

  /* Animation stuff */
  const [time, setTime] = useState(0);
  const [animation] = useState({});
  useEffect(() => {
    const animate = () => {
      setTime(
        (t) =>
          (t + props.story.animationSpeed) % props.story.animationLoopLength
      );
      animation.id = window.requestAnimationFrame(animate);
    };
    animation.id = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animation.id);
  }, [animation]);

  /* Map utilities */
  const mapRef = useRef();

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

  // Generate layers list based on input file
  const layers = [];
  props.story.chapters.forEach((chapter) => {
    if (chapter.layers) {
      layers.push(
        chapter.layers.forEach((layer) => {
          return layer.layerType;
        })
      );
    } else {
      layers.push(null);
    }
  });

  console.log(layers);

  return (
    <div id="main-container">
      <Map
        ref={mapRef}
        cont
        initialViewState={{
          latitude: props.story.chapters[0].map.center.lat,
          longitude: props.story.chapters[0].map.center.lon,
          zoom: props.story.chapters[0].map.zoom,
          bearing: props.story.chapters[0].map.bearing,
          pitch: props.story.chapters[0].map.pitch,
        }}
        {...settings}
        onLoad={({ target }) => {
          layers.forEach((layerDict) => {
            if (layerDict.layerType === "deckgl-trips") {
              target.addLayer(layerDict.layer);
            }
          });
        }}
        onRender={({ target }) => {
          layers.forEach((layerDict) => {
            if (layerDict.layerType === "deckgl-trips") {
              const currentLayer = target.getLayer(layerDict.layer.id);
              if (currentLayer) {
                currentLayer.implementation.setProps({
                  currentTime: time,
                });
              }
            }
          });
        }}
      >
        # Mapbox Layers
        {/* {props.story.chapters.layers.map((layerDict, index) => {
          if (layerDict.layerType === "mapbox") {
            return <Layer>{...layerDict.layer}</Layer>;
          }
        })} */}
      </Map>
      <TweenStyled>
        <div className="section" />
        <Controller>
          {props.story.chapters.map((chapter, index) => {
            return (
              <span key={index}>
                <Scene
                  triggerElement={"#" + chapter.id}
                  indicators={true}
                  pin={true}
                  duration={chapter.sectionDuration}
                  offset={chapter.sectionOffset}
                >
                  {(progress, event) => (
                    <h1 style={{ color: "#FFF", top: TOP_SCENE }}>
                      {chapter.text}
                      {event.type === "enter" &&
                        flyToNextStep({
                          center: [
                            chapter.map.center.lon,
                            chapter.map.center.lat,
                          ],
                          zoom: chapter.map.zoom,
                          bearing: chapter.map.bearing,
                          pitch: chapter.map.pitch,
                          duration: chapter.map.duration,
                        })}
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
