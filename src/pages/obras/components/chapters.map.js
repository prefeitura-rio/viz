import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
// For some custom layers
// import LINHAS_ANTIGAS from "./data/linhas_antigas.json";
import { isMobile } from "react-device-detect";

export const Capa = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
    ],
  };
};

export const Intro = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
    ],
  };
};

export const Mapaconjuntomaravilha = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32608,
          lat: -22.82234,
        },
        zoom: 18.34,
        pitch: 51.0,
        bearing: 28.82,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.7,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.2,
        layer: {
          ...{
            id: "bairros",
            type: "fill",
            source: "composite",
            "source-layer": "novoiraja-5cvglw",
            paint: {
              "fill-color": "#1adb00",
            },
          },
        },
      },
    ],
  };
};

export const Mapaconjuntomaravilhaum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32588,
          lat: -22.82189,
        },
        zoom: 17.6,
        pitch: 47.0,
        bearing: 67.26,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.7,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.2,
        layer: {
          ...{
            id: "bairros",
            type: "fill",
            source: "composite",
            "source-layer": "novoiraja-5cvglw",
            paint: {
              "fill-color": "#1adb00",
            },
          },
        },
      },
    ],
  };
};

export const Mapacasacarioca = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.38,
        pitch: 80.0,
        bearing: 30.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.26868,
          lat: -22.87955,
        },
        zoom: 9.8,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
    ],
  };
};

export const Mapacasacariocaum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.98,
        pitch: 80.0,
        bearing: 10.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.26868,
          lat: -22.87955,
        },
        zoom: 9.8,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
    ],
  };
};

export const Mapaavancacampogrande = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.98,
        pitch: 80.0,
        bearing: 10.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.26868,
          lat: -22.87955,
        },
        zoom: 9.8,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
    ],
  };
};

export const Mapaavancacampograndeum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.98,
        pitch: 80.0,
        bearing: 10.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.26868,
          lat: -22.87955,
        },
        zoom: 9.8,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
    ],
  };
};

export const Mapabairromaravilha = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.98,
        pitch: 80.0,
        bearing: 10.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.26868,
          lat: -22.87955,
        },
        zoom: 9.8,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
    ],
  };
};

export const Mapabairromaravilhaum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.98,
        pitch: 80.0,
        bearing: 10.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.26868,
          lat: -22.87955,
        },
        zoom: 9.8,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
    ],
  };
};

export const Fim = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "predios" },
      },
    ],
  };
};
