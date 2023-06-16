import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer } from "@deck.gl/layers";
import Map, { Source, Layer } from "react-map-gl";
// For some custom layers
import { buildings3d } from "../../../components/layers/buildings3d";
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
    layers: [],
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
    layers: [],
  };
};

export const Mapaobras = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.45632,
          lat: -22.92106,
        },
        zoom: 10.5,
        pitch: 0.0,
        bearing: 0.0,
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
        layerType: "mapbox",
        targetOpacity: .7,
        layer: {
          ...{
            id: "ap-fill",
            type: "fill",
            source: "composite",
            paint: {
            },
            "source-layer": "ap-6ynwru",
          },
        },
      },
    ],
  };
};

export const Mapanorte = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.30868,
          lat: -22.87955,
        },
        zoom: 11.38,
        pitch: 0.0,
        bearing: 0.0,
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
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
          ...{
            id: "zona norte",
            type: "circle",
            source: "composite",
            paint: {
              "circle-color": "#db7500",
              "circle-opacity": 0,
            },
            "source-layer": "obrasqgiz-6vyzdl",
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.05,
        layer: {
          ...{
            id: "zona norte fill",
            type: "fill",
            source: "composite",
            paint: {
              "fill-opacity": 0,
              "fill-color": "#db7500",
            },
            "source-layer": "zonas-3rtoyn",
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.2,
        layer: {
          ...{
            id: "zona norte big",
            type: "circle",
            source: "composite",
            paint: {
              "circle-color": "#db7500",
              "circle-opacity": 0,
            },
            "source-layer": "obrasqgiz-6vyzdl",
          },
        },
      },
    ],
  };
};

export const Obranorte = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.30660,
          lat: -22.89799,
        },
        zoom: 16.15,
        pitch: 62.50,
        bearing: 54.40,
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
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
          ...{
            id: "zona norte",
            type: "circle",
            source: "composite",
            paint: {
              "circle-color": "#db7500",
              "circle-opacity": 0,
            },
            "source-layer": "obrasqgiz-6vyzdl",
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.05,
        layer: {
          ...{
            id: "zona norte fill",
            type: "fill",
            source: "composite",
            paint: {
              "fill-opacity": 0,
              "fill-color": "#db7500",
            },
            "source-layer": "zonas-3rtoyn",
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.2,
        layer: {
          ...{
            id: "zona norte big",
            type: "circle",
            source: "composite",
            paint: {
              "circle-color": "#db7500",
              "circle-opacity": 0,
            },
            "source-layer": "obrasqgiz-6vyzdl",
          },
        },
      },
    ],
  };
};

export const Obranorteum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.30379,
          lat: -22.84584,
        },
        zoom: 16.61,
        pitch: 55.84,
        bearing: -63.44,
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
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
          ...{
            id: "zona norte",
            type: "circle",
            source: "composite",
            paint: {
              "circle-color": "#db7500",
              "circle-opacity": 0,
            },
            "source-layer": "obrasqgiz-6vyzdl",
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.05,
        layer: {
          ...{
            id: "zona norte fill",
            type: "fill",
            source: "composite",
            paint: {
              "fill-opacity": 0,
              "fill-color": "#db7500",
            },
            "source-layer": "zonas-3rtoyn",
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.2,
        layer: {
          ...{
            id: "zona norte big",
            type: "circle",
            source: "composite",
            paint: {
              "circle-color": "#db7500",
              "circle-opacity": 0,
            },
            "source-layer": "obrasqgiz-6vyzdl",
          },
        },
      },
    ],
  };
};

export const Mapaoeste = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.53129,
          lat: -22.94568,
        },
        zoom: 10.8,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.53129,
          lat: -22.94568,
        },
        zoom: 9.1,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
          ...{
            id: "zona oeste",
            type: "circle",
            source: "composite",
            paint: {
              "circle-color": "#1adb00",
              "circle-opacity": 0,
            },
            "source-layer": "obrasqgiz-6vyzdl",
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.05,
        layer: {
          ...{
            id: "zona oeste fill",
            type: "fill",
            source: "composite",
            paint: {
              "fill-opacity": 0,
              "fill-color": "#1adb00",
            },
            "source-layer": "zonas-3rtoyn",
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.2,
        layer: {
          ...{
            id: "zona oeste big",
            type: "circle",
            source: "composite",
            paint: {
              "circle-color": "#1adb00",
              "circle-opacity": 0,
            },
            "source-layer": "obrasqgiz-6vyzdl",
          },
        },
      },
    ],
  };
};

// "circle-radius": [
//   "match",
//   ["get", "total_demolicoes"],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 16],
//   isMobile ? 3 : 7,
//   [21, 23, 24, 27, 25, 29, 31, 38, 44, 54, 33],
//   isMobile ? 10 : 25,
//   isMobile ? 20 : 50,
// ],

// {
//     "circle-color": "#1adb00",
//     "circle-opacity": 0.2,
//     "circle-radius": 20,
//     "circle-stroke-opacity": 0.2
// }

export const Numeraoum = () => {
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
        layerType: "reuse",
        targetOpacity: 0.5,
        layer: { id: "consolidado-cor" },
      },
    ],
  };
};

export const Solucao = () => {
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
        layerType: "reuse",
        targetOpacity: 0.5,
        layer: { id: "consolidado-cor" },
      },
    ],
  };
};

export const Grafico = () => {
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
        layerType: "reuse",
        targetOpacity: 0.5,
        layer: { id: "consolidado-cor" },
      },
    ],
  };
};

export const Seop1 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32527,
          lat: -22.9864,
        },
        zoom: 15.85,
        pitch: 41.0,
        bearing: 17.2,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.32127,
          lat: -22.9864,
        },
        zoom: 15.85,
        pitch: 41.0,
        bearing: 17.2,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
          ...{
            id: "demolicao-icone",
            type: "symbol",
            source: "composite",
            "source-layer": "demolicao-ar7k7f",
            layout: {
              "icon-image": "hospital",
              "icon-rotate": 45,
              "icon-allow-overlap": true,
              "icon-size": 2,
            },
            paint: {
              "icon-opacity": 0,
            },
          },
        },
      },
    ],
  };
};

export const Seop2 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.4885,
          lat: -23.02842,
        },
        zoom: 14.71,
        pitch: 51.0,
        bearing: 11.2,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.4785,
          lat: -23.02842,
        },
        zoom: 14.71,
        pitch: 51.0,
        bearing: 11.2,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 1,
        layer: { id: "demolicao-icone" },
      },
    ],
  };
};

export const Seop3 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.4885,
          lat: -23.02842,
        },
        zoom: 14.71,
        pitch: 52.5,
        bearing: -53.6,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.4785,
          lat: -23.02842,
        },
        zoom: 14.71,
        pitch: 52.5,
        bearing: -53.6,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 1,
        layer: { id: "demolicao-icone" },
      },
    ],
  };
};

export const Seop4 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.31816,
          lat: -22.99102,
        },
        zoom: 15.77,
        pitch: 59.0,
        bearing: 124.47,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.32128,
          lat: -22.99349,
        },
        zoom: 16.14,
        pitch: 52.5,
        bearing: 127.03,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 1,
        layer: { id: "demolicao-icone" },
      },
    ],
  };
};

export const Acompanhe = () => {
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
    layers: [],
  };
};

export const Exemplo1 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32527,
          lat: -22.9864,
        },
        zoom: 15.85,
        pitch: 41.0,
        bearing: 17.2,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.32127,
          lat: -22.9864,
        },
        zoom: 15.85,
        pitch: 41.0,
        bearing: 17.2,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 1,
        layer: { id: "desabamento-icone" },
      },
    ],
  };
};

export const Exemplo2 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.34213,
          lat: -22.98032,
        },
        zoom: 15.85,
        pitch: 44.5,
        bearing: 46.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.33913,
          lat: -22.98032,
        },
        zoom: 15.85,
        pitch: 44.5,
        bearing: 46.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        targetOpacity: 1,
        layer: { id: "desabamento-icone" },
      },
    ],
  };
};

// export const Exemplo3 = () => {
//   return {
//     location: {
//       desktop: {
//         center: {
//           lon: -43.22925,
//           lat: -22.93012,
//         },
//         zoom: 15.72,
//         pitch: 45.5,
//         bearing: 12.4,
//         duration: 4000,
//       },
//       mobile: {
//         center: {
//           lon: -43.22925,
//           lat: -22.93012,
//         },
//         zoom: 15.72,
//         pitch: 45.5,
//         bearing: 12.4,
//         duration: 4000,
//       },
//     },
//     layers: [
//       {
//         layerType: "reuse",
//         targetOpacity: 1,
//         layer: { id: "desabamento-icone" },
//       },
//     ],
//   };
// };

export const Mapa = () => {
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
        layerType: "reuse",
        targetOpacity: 0.5,
        layer: { id: "consolidado-cor" },
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
    layers: [],
  };
};
