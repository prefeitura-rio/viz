// TODO: implement global layers

import React, { useRef, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { isMobile } from "react-device-detect";
import { Timeline } from "react-gsap";
// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;
const TOP_SCENE = "-1vh";

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

export default function ScrollMapboxGL(
  props = {
    interactive: false,
    indicators: true,
    mapboxAccessToken: "",
    mapStyle: "",
    mapCSS: {},
    scrollZoom: false,
    story: {
      animationSpeed: 3,
      animationLoopLength: 28000,
      animations: "",
      chapters: [
        {
          id: "chapter-1",
          chapterType: "", // map, animation, etc.
          text: "",
          sectionDuration: 0,
          sectionOffset: 0,
          sectionPin: false,
          layers: [{ layerType: "", layer: {}, opacityProperty: "" }],
          map: {
            desktop: {
              center: {
                lat: 0,
                lon: 0,
              },
              zoom: 0,
              bearing: 0,
              pitch: 0,
              duration: 4000,
            },
            mobile: {
              center: {
                lat: 0,
                lon: 0,
              },
              zoom: 0,
              bearing: 0,
              pitch: 0,
              duration: 4000,
            },
          },
        },
      ],
    },
  }
) {
  /* Map configurations */
  const [settings] = useState({
    scrollZoom: props.scrollZoom,
    mapboxAccessToken: props.mapboxAccessToken,
    mapStyle: props.mapStyle,
    interactive: props.interactive,
    style: props.mapCSS,
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
  const showLayers = () => {
    console.log("layers", mapRef.current?.getMap().getStyle().layers);
  };

  function getLayerPaintType(layer) {
    return layerTypes[layer.type];
  }

  function setOpacityDeckglLayer(mapLayer, opacity) {
    mapLayer?.implementation.setProps({
      opacity: opacity,
    });
  }

  function setOpacityMapboxLayer(mapInstance, layerId, mapLayer, opacity) {
    getLayerPaintType(mapLayer).forEach((paintType) => {
      mapInstance.setPaintProperty(layerId, paintType, opacity);
    });
  }

  // This will set the opacity of a layer while fading all other layers
  const setLayerOpacity = (index) => {
    const mapInstance = mapRef.current?.getMap();
    let startIndex = 0;
    for (let i = 0; i < layersPerChapter.length; i++) {
      if (i === index) {
        break;
      }
      startIndex += layersPerChapter[i];
    }
    if (!mapInstance) return;

    var currentLayerIds = [];

    for (let i = 0; i < layers.length; i++) {
      // layers from story
      var layerId = layers[i].layer.id;
      var layerType = layers[i].layerType;

      // layers from map style
      var mapLayer = mapInstance.getLayer(layerId);

      // set opacity
      if (i >= startIndex && i < startIndex + layersPerChapter[index]) {
        currentLayerIds.push(layerId);
        if (layerType.startsWith("deckgl")) {
          setOpacityDeckglLayer(mapLayer, 1);
        } else if (layerType.startsWith("mapbox")) {
          if (mapLayer) {
            setOpacityMapboxLayer(mapInstance, layerId, mapLayer, 1);
          }
        } else if (layerType === "reuse") {
          // Look for layer in `layers`
          const reusableLayer = layers.find((l) => l.layer.id === layerId);
          const reusableLayerId = reusableLayer.layer.id;
          const reusableLayerType = reusableLayer.layerType;
          const reusableMapLayer = mapInstance.getLayer(layerId);
          if (reusableMapLayer) {
            if (reusableLayerType.startsWith("deckgl")) {
              setOpacityDeckglLayer(reusableMapLayer, 1);
            } else if (reusableLayerType.startsWith("mapbox")) {
              if (reusableMapLayer) {
                setOpacityMapboxLayer(
                  mapInstance,
                  reusableLayerId,
                  reusableMapLayer,
                  1
                );
              }
            }
          }
        }
      } else {
        if (layerType.startsWith("deckgl")) {
          setOpacityDeckglLayer(mapLayer, 0);
        } else if (layerType.startsWith("mapbox")) {
          if (mapLayer) {
            setOpacityMapboxLayer(mapInstance, layerId, mapLayer, 0);
          }
        } else if (
          layerType === "reuse" &&
          !currentLayerIds.includes(layerId)
        ) {
          // Look for layer in `layers`
          const reusableLayer = layers.find((l) => l.layer.id === layerId);
          const reusableLayerId = reusableLayer.layer.id;
          const reusableLayerType = reusableLayer.layerType;
          const reusableMapLayer = mapInstance.getLayer(layerId);
          if (reusableMapLayer) {
            if (reusableLayerType.startsWith("deckgl")) {
              setOpacityDeckglLayer(reusableMapLayer, 0);
            } else if (reusableLayerType.startsWith("mapbox")) {
              if (reusableMapLayer) {
                setOpacityMapboxLayer(
                  mapInstance,
                  reusableLayerId,
                  reusableMapLayer,
                  0
                );
              }
            }
          }
        }
      }
    }
  };

  // Generate layers list based on input file
  const layers = [];
  const layersPerChapter = [];
  props.story.chapters.forEach((chapter) => {
    let nLayers = 0;
    if (chapter.layers) {
      chapter.layers.forEach((layer) => {
        layers.push(layer);
        nLayers++;
      });
    }
    layersPerChapter.push(nLayers);
  });

  return (
    <div id="main-container">
      <Map
        ref={mapRef}
        cont
        initialViewState={
          isMobile
            ? {
                latitude: props.story.chapters[0].map.mobile.center.lat,
                longitude: props.story.chapters[0].map.mobile.center.lon,
                zoom: props.story.chapters[0].map.mobile.zoom,
                bearing: props.story.chapters[0].map.mobile.bearing,
                pitch: props.story.chapters[0].map.mobile.pitch,
              }
            : {
                latitude: props.story.chapters[0].map.desktop.center.lat,
                longitude: props.story.chapters[0].map.desktop.center.lon,
                zoom: props.story.chapters[0].map.desktop.zoom,
                bearing: props.story.chapters[0].map.desktop.bearing,
                pitch: props.story.chapters[0].map.desktop.pitch,
              }
        }
        {...settings}
        onLoad={({ target }) => {
          layers.forEach((layerDict) => {
            if (
              layerDict.layerType.startsWith("mapbox") ||
              layerDict.layerType.startsWith("deckgl")
            ) {
              target.addLayer(layerDict.layer);
            }
          });
          showLayers();
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
      ></Map>
      <Controller>
        {props.story.chapters.map((chapter, index) => {
          if (chapter.chapterType === "map") {
            return (
              <span key={index}>
                <div id={chapter.id} style={chapter.divStyle}>
                  <Scene
                    triggerElement={"#" + chapter.id}
                    indicators={props.indicators}
                    pin={chapter.sectionPin}
                    duration={chapter.sectionDuration}
                    offset={chapter.sectionOffset}
                  >
                    {(progress, event) => (
                      <div style={{ color: "#FFF", top: TOP_SCENE }}>
                        {chapter.text}
                        {event.type === "enter" &&
                          isMobile &&
                          flyToNextStep({
                            center: [
                              chapter.map.mobile.center.lon,
                              chapter.map.mobile.center.lat,
                            ],
                            zoom: chapter.map.mobile.zoom,
                            bearing: chapter.map.mobile.bearing,
                            pitch: chapter.map.mobile.pitch,
                            duration: chapter.map.mobile.duration,
                          })}
                        {event.type === "enter" &&
                          !isMobile &&
                          flyToNextStep({
                            center: [
                              chapter.map.desktop.center.lon,
                              chapter.map.desktop.center.lat,
                            ],
                            zoom: chapter.map.desktop.zoom,
                            bearing: chapter.map.desktop.bearing,
                            pitch: chapter.map.desktop.pitch,
                            duration: chapter.map.desktop.duration,
                          })}
                        {event.type === "enter" && setLayerOpacity(index)}
                      </div>
                    )}
                  </Scene>
                </div>
              </span>
            );
          } else if (chapter.chapterType === "scrollmagic") {
            return (
              <span key={index}>
                <div id={chapter.id} style={chapter.divStyle}>
                  <Scene
                    triggerElement={"#" + chapter.id}
                    indicators={props.indicators}
                    pin={chapter.sectionPin}
                    duration={chapter.sectionDuration}
                    offset={chapter.sectionOffset}
                  >
                    {(progress, event) => (
                      <div style={{ color: "#FFF", top: TOP_SCENE }}>
                        {chapter.text}
                        <Timeline totalProgress={progress} paused>
                          {chapter.animation.tween}
                        </Timeline>
                      </div>
                    )}
                  </Scene>
                </div>
              </span>
            );
          }
        })}
      </Controller>
    </div>
  );
}
