import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";

const TRAIL_LENGTH = 500;
const TRIPS = require("../pages/especial-sppo/data/trips.json");

const buildings3d = {
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
    "fill-extrusion-opacity": 1,
  },
};

// Use to discover the layer properties
// console.log("sources", mapInstance.getStyle().sources);
// console.log("layers", mapInstance.getStyle().layers);
const linhasAntigas = {
  id: "linhasantigas",
  paint: { "line-opacity": 0, "line-color": "#3289a9" },
  source: "composite",
  "source-layer": "linhas-0pmlqw",
  type: "line",
};

const story = {
  animationSpeed: 3,
  animationLoopLength: 28000,
  chapters: [
    {
      id: "chapter-1",
      text: "chapter-1",
      sectionDuration: 400,
      sectionOffset: -500,
      layers: [
        {
          layerType: "deckgl",
          layer: new MapboxLayer({
            id: "my-trips-layer",
            type: TripsLayer,
            data: TRIPS,
            getPath: (d) => d.path,
            getTimestamps: (d) => d.timestamps,
            getColor: [0, 200, 236],
            widthMinPixels: 5,
            fadeTrail: true,
            currentTime: 0,
            opacity: 0,
            rounded: true,
            trailLength: TRAIL_LENGTH,
            shadowEnabled: false,
          }),
          opacityProperty: "",
        },
        {
          layerType: "mapbox",
          layer: { ...linhasAntigas },
          opacityProperty: "line-opacity",
        },
      ],
      map: {
        center: {
          lat: -22.9121089,
          lon: -43.2301558,
        },
        zoom: 9,
        bearing: 0,
        pitch: 0,
        duration: 4000,
      },
    },
    {
      id: "chapter-2",
      text: "chapter-2",
      sectionDuration: 400,
      sectionOffset: -500,
      layers: [
        {
          layerType: "mapbox",
          layer: { ...buildings3d },
          opacityProperty: "fill-extrusion-opacity",
        },
      ],
      map: {
        center: {
          lat: -22.9121089,
          lon: -43.2301558,
        },
        zoom: 15,
        bearing: 0,
        pitch: 0,
        duration: 4000,
      },
    },
    {
      id: "chapter-3",
      text: "chapter-3",
      sectionDuration: 400,
      sectionOffset: -500,
      layers: [
        {
          layerType: "deckgl",
          layer: new MapboxLayer({
            id: "my-trips-layer3",
            type: TripsLayer,
            data: TRIPS,
            getPath: (d) => d.path,
            getTimestamps: (d) => d.timestamps,
            getColor: [0, 200, 236],
            widthMinPixels: 5,
            fadeTrail: true,
            currentTime: 0,
            opacity: 0,
            rounded: true,
            trailLength: TRAIL_LENGTH,
            shadowEnabled: false,
          }),
          opacityProperty: "",
        },
      ],
      map: {
        center: {
          lat: -22.9121089,
          lon: -43.2301558,
        },
        zoom: 12,
        bearing: 0,
        pitch: 0,
        duration: 4000,
      },
    },
  ],
};

export default story;
