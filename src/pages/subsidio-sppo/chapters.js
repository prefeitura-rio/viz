import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
const TRIPS = require("../especial-sppo/data/trips.json");

// For some custom layers
import { buildings3d } from "../../components/layers/buildings3d";

export const chapterOne = () => {
  return {
    location: {
      desktop: {
        center: { lon: -43.19415, lat: -22.9795 },
        zoom: 15.0,
        pitch: 60.0,
        bearing: -37.07,
        duration: 2000,
      },
      mobile: {
        center: {
          lat: -22.9121089,
          lon: -43.2301558,
        },
        zoom: 15,
        bearing: 0,
        pitch: 0,
        duration: 2000,
      },
    },
    layers: [
      {
        layerType: "deckgl-trips",
        layer: new MapboxLayer({
          id: "my-trips-layer",
          type: TripsLayer,
          data: TRIPS,
          getPath: (d) => d.path,
          getTimestamps: (d) => d.timestamps,
          getColor: [244, 144, 44],
          widthMinPixels: 5,
          fadeTrail: true,
          currentTime: 0,
          opacity: 1,
          rounded: true,
          trailLength: 500,
          shadowEnabled: false,
        }),
      },
      {
        layerType: "mapbox",
        layer: { ...buildings3d },
      },
    ],
  };
};

export const chapterTwo = () => {
  return {
    location: {
      center: { lon: -43.20881, lat: -22.90198 },
      zoom: 16.74,
      pitch: 0.0,
      bearing: 0.0,
      duration: 2000,
    },
    layers: [
      {
        layerType: "reuse",
        layer: { id: "3d-buildings" },
      },
    ],
  };
};

export const chapterThree = () => {
  return {
    location: {
      center: { lon: -43.39513, lat: -22.97986 },
      zoom: 12.5,
      pitch: 0.0,
      bearing: 0.0,
      duration: 2000,
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: {
          id: "linhasantigas",
        },
      },
    ],
  };
};

export const chapterFour = () => {
  return {
    location: {
      center: { lon: -43.32934, lat: -22.87653 },
      zoom: 9.86,
      pitch: 0.0,
      bearing: 0.0,
      duration: 4000,
    },
    layers: [
      {
        layerType: "reuse",
        layer: {
          id: "my-trips-layer",
        },
      },
    ],
  };
};
