import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer } from "@deck.gl/layers";
const TRIPS = require("../data/trips.json");
// import LINHAS_ANTIGAS from "./data/linhas_antigas.json";

export const Capa = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.18213,
          lat: -22.90645,
        },
        zoom: 15.51,
        pitch: 60.0,
        bearing: -146.41,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.18213,
          lat: -22.90645,
        },
        zoom: 15.11,
        pitch: 60.0,
        bearing: -146.41,
        duration: 4000,
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
          getColor: [214, 142, 0],
          widthMinPixels: 8,
          fadeTrail: true,
          currentTime: 0,
          opacity: 1,
          rounded: true,
          trailLength: 500,
          shadowEnabled: true,
        }),
      },
      {
        layerType: "mapbox-style",
        layer: { id: "building-extrusion-red" },
      },
      {
        layerType: "mapbox-style",
        layer: { id: "building-extrusion" },
      },
    ],
  };
};

export const Historia1 = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.45317,
          lat: -22.9158,
        },
        zoom: 8.51,
        pitch: 1.5,
        bearing: -0.0,
        duration: 4000,
      },
      desktop: {
        center: {
          lon: -43.45317,
          lat: -22.9158,
        },
        zoom: 10.51,
        pitch: 1.5,
        bearing: -0.0,
        duration: 4000,
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
          getColor: [214, 142, 0],
          widthMinPixels: 10,
          fadeTrail: true,
          currentTime: 0,
          opacity: 1,
          rounded: true,
          trailLength: 500,
          shadowEnabled: true,
        }),
      },
    ],
  };
};

export const Vazio = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.45317,
          lat: -22.9158,
        },
        zoom: 8.51,
        pitch: 1.5,
        bearing: -0.0,
        duration: 4000,
      },
      desktop: {
        center: {
          lon: -43.45317,
          lat: -22.9158,
        },
        zoom: 10.51,
        pitch: 1.5,
        bearing: -0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};

export const Cheio = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.45317,
          lat: -22.9158,
        },
        zoom: 8.51,
        pitch: 1.5,
        bearing: -0.0,
        duration: 4000,
      },
      desktop: {
        center: {
          lon: -43.45317,
          lat: -22.9158,
        },
        zoom: 10.51,
        pitch: 1.5,
        bearing: -0.0,
        duration: 4000,
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
          getColor: [214, 142, 0],
          widthMinPixels: 8,
          fadeTrail: true,
          currentTime: 0,
          opacity: 1,
          rounded: true,
          trailLength: 500,
          shadowEnabled: true,
        }),
      },
    ],
  };
};

export const Aereo = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.45317,
          lat: -22.9158,
        },
        zoom: 8.51,
        pitch: 1.5,
        bearing: -0.0,
        duration: 4000,
      },
      desktop: {
        center: {
          lon: -43.45317,
          lat: -22.9158,
        },
        zoom: 10.51,
        pitch: 1.5,
        bearing: -0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};

export const Antes = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.67832,
          lat: -22.92352,
        },
        zoom: 12.76,
        pitch: 0.0,
        bearing: -7.72,
        duration: 4000,
      },
      desktop: {
        center: {
          lon: -43.67832,
          lat: -22.92352,
        },
        zoom: 12.76,
        pitch: 0.0,
        bearing: -7.72,
        duration: 4000,
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
          getColor: [214, 142, 0],
          widthMinPixels: 10,
          fadeTrail: true,
          currentTime: 0,
          opacity: 1,
          rounded: true,
          trailLength: 500,
          shadowEnabled: true,
        }),
      },
    ],
  };
};

export const Depois = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.64105,
          lat: -22.92778,
        },
        zoom: 12.02,
        pitch: 0.0,
        bearing: -7.72,
        duration: 4000,
      },
      desktop: {
        center: {
          lon: -43.64105,
          lat: -22.92778,
        },
        zoom: 12.02,
        pitch: 0.0,
        bearing: -7.72,
        duration: 4000,
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
          getColor: [214, 142, 0],
          widthMinPixels: 10,
          fadeTrail: true,
          currentTime: 0,
          opacity: 1,
          rounded: true,
          trailLength: 500,
          shadowEnabled: true,
        }),
      },
    ],
  };
};

export const Pontos = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.45317,
          lat: -22.9158,
        },
        zoom: 8.51,
        pitch: 1.5,
        bearing: -0.0,
        duration: 4000,
      },
      desktop: {
        center: {
          lon: -43.45317,
          lat: -22.9158,
        },
        zoom: 10.51,
        pitch: 1.5,
        bearing: -0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};

// {
//   layerType: "mapbox",
//   targetOpacity: 1,
//   layer: {
//     ...{
//       id: "demolicao-icone",
//       type: "symbol",
//       source: "composite",
//       "source-layer": "demolicao-ar7k7f",
//       layout: {
//         "icon-image": "hospital",
//         "icon-rotate": 45,
//         "icon-allow-overlap": true,
//         "icon-size": 2,
//       },
//       paint: {
//         "icon-opacity": 0,
//       },
//     },
//   },
// },

export const Creditos = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.54516,
          lat: -22.98354,
        },
        zoom: 9.86,
        pitch: 60.0,
        bearing: 38.08,
        duration: 2000,
      },
      desktop: {
        center: {
          lon: -43.54516,
          lat: -22.98354,
        },
        zoom: 11.86,
        pitch: 60.0,
        bearing: 38.08,
        duration: 2000,
      },
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
