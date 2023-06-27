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
          lon: -43.32508,
          lat: -22.82234,
        },
        zoom: 16.84,
        pitch: 51.0,
        bearing: 28.82,
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
              "fill-color": "#a9d3a2", 
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
        zoom: 17.60,
        pitch: 47.0,
        bearing: 67.26,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.32588,
          lat: -22.82259,
        },
        zoom: 16.90,
        pitch: 47.0,
        bearing: 67.26,
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
              "fill-color": "#a9d3a2", 
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
          lon: -43.26384,
          lat: -22.88746,
        },
        zoom: 16.43,
        pitch: 49.13,
        bearing: 23.20,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.26084,
          lat: -22.88746,
        },
        zoom: 15.23,
        pitch: 49.13,
        bearing: 23.20,
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
            id: "jacare",
            type: "fill",
            source: "composite",
            "source-layer": "jacare-dtd2tk",
            paint: {
              "fill-color": "#dab68a", 
            },
          },
        },
      },
    ],
  };
};

export const Mapacasacariocaum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26292,
          lat: -22.88424,
        },
        zoom: 15.30,
        pitch: 5.67,
        bearing: 53.73,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.26092,
          lat: -22.88774,
        },
        zoom: 15.00,
        pitch: 5.67,
        bearing: 53.73,
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
            id: "jacare",
            type: "fill",
            source: "composite",
            "source-layer": "jacare-dtd2tk",
            paint: {
              "fill-color": "#dab68a", 
            },
          },
        },
      },
    ],
  };
};

export const Mapaavancacampogrande = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.55065,
          lat: -22.89748,
        },
        zoom: 17.04,
        pitch: 53.0,
        bearing: 0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.54899,
          lat: -22.89748,
        },
        zoom: 16.04,
        pitch: 53.0,
        bearing: 0,
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
            id: "campogrande",
            type: "fill",
            source: "composite",
            "source-layer": "campogrande-1krk7d",
            paint: {
              "fill-color": "#639ed8", 
            },
          },
        },
      },
    ],
  };
};

export const Mapaavancacampograndeum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.55213,
          lat: -22.89680,
        },
        zoom: 16.22,
        pitch: 0,
        bearing: 0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.54913,
          lat: -22.89680,
        },
        zoom: 16.22,
        pitch: 0,
        bearing: 0,
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
            id: "campogrande",
            type: "fill",
            source: "composite",
            "source-layer": "campogrande-1krk7d",
            paint: {
              "fill-color": "#639ed8", 
            },
          },
        },
      },
    ],
  };
};

export const Mapabairromaravilha = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.30860,
          lat: -22.89879,
        },
        zoom: 15.54,
        pitch: 55.50,
        bearing: 8,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.30560,
          lat: -22.89879,
        },
        zoom: 15.30,
        pitch: 55.50,
        bearing: 8,
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
            id: "encantado",
            type: "fill",
            source: "composite",
            "source-layer": "Limite_de_Bairros-216nrn",
            paint: {
              "fill-color": "#d66262", 
            },
          },
        },
      },
    ],
  };
};

export const Mapabairromaravilhaum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.31588,
          lat: -22.89812,
        },
        zoom: 14.50,
        pitch: 0,
        bearing: 0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.30488,
          lat: -22.89812,
        },
        zoom: 14.00,
        pitch: 0,
        bearing: 0,
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
            id: "encantado",
            type: "fill",
            source: "composite",
            "source-layer": "Limite_de_Bairros-216nrn",
            paint: {
              "fill-color": "#d66262", 
            },
          },
        },
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
