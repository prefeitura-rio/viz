import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer } from "@deck.gl/layers";
import Map, { Source, Layer } from "react-map-gl";
// For some custom layers
import { buildings3d } from "../../../components/layers/buildings3d";
// import LINHAS_ANTIGAS from "./data/linhas_antigas.json";

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
        zoom: 10.38,
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
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};

export const Prejuizo = () => {
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
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 0.4,
        layer: {
          ...{
            id: "mapa-zonas-cor",
            type: "fill",
            source: "composite",
            "source-layer": "mapa-geral-2l3yzm",
            filter: [
              "all",
              [
                "match",
                ["get", "acoes_demo"],
                [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "9",
                  "10",
                  "13",
                  "14",
                  "190",
                  "178",
                  "90",
                  "44",
                  "42",
                  "38",
                  "32",
                  "25",
                  "30",
                  "24",
                  "23",
                  "22",
                  "21",
                  "16",
                  "18",
                  "19",
                ],
                true,
                false,
              ],
              ["match", ["get", "Zona"], ["Oeste"], true, false],
            ],
            paint: {
              "fill-color": [
                "match",
                ["get", "acoes_demo"],
                [
                  "1",
                  "2",
                  "3",
                  "4",
                  "6",
                  "5",
                  "7",
                  "9",
                  "10",
                  "13",
                  "14",
                  "18",
                  "16",
                  "19",
                ],
                "#f1d6a5",
                ["21", "22", "23", "24", "25", "30", "32", "38", "42", "44"],
                "#d5aa5d",
                ["90", "178", "190"],
                "#a96e04",
                "#000000",
              ],
              "fill-opacity": 0,
            },
          },
        },
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
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 0.4,
        layer: {
          ...{
            id: "mapa-zonas-cor",
            type: "fill",
            source: "composite",
            "source-layer": "mapa-geral-2l3yzm",
            filter: [
              "all",
              [
                "match",
                ["get", "acoes_demo"],
                [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "9",
                  "10",
                  "13",
                  "14",
                  "190",
                  "178",
                  "90",
                  "44",
                  "42",
                  "38",
                  "32",
                  "25",
                  "30",
                  "24",
                  "23",
                  "22",
                  "21",
                  "16",
                  "18",
                  "19",
                ],
                true,
                false,
              ],
              ["match", ["get", "Zona"], ["Oeste"], true, false],
            ],
            paint: {
              "fill-color": [
                "match",
                ["get", "acoes_demo"],
                [
                  "1",
                  "2",
                  "3",
                  "4",
                  "6",
                  "5",
                  "7",
                  "9",
                  "10",
                  "13",
                  "14",
                  "18",
                  "16",
                  "19",
                ],
                "#f1d6a5",
                ["21", "22", "23", "24", "25", "30", "32", "38", "42", "44"],
                "#d5aa5d",
                ["90", "178", "190"],
                "#a96e04",
                "#000000",
              ],
              "fill-opacity": 0,
            },
          },
        },
      },
    ],
  };
};

export const Seop1 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32127,
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
          lon: -43.4785,
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
          lon: -43.4785,
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
          lon: -43.3214,
          lat: -22.98621,
        },
        zoom: 15.32,
        pitch: 60.0,
        bearing: 66.07,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.3214,
          lat: -22.98621,
        },
        zoom: 15.32,
        pitch: 60.0,
        bearing: 66.07,
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
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};

export const Oeste = () => {
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
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 0.4,
        layer: {
          ...{
            id: "mapa-zonas-cor",
            type: "fill",
            source: "composite",
            "source-layer": "mapa-geral-2l3yzm",
            filter: [
              "all",
              [
                "match",
                ["get", "acoes_demo"],
                [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "9",
                  "10",
                  "13",
                  "14",
                  "190",
                  "178",
                  "90",
                  "44",
                  "42",
                  "38",
                  "32",
                  "25",
                  "30",
                  "24",
                  "23",
                  "22",
                  "21",
                  "16",
                  "18",
                  "19",
                ],
                true,
                false,
              ],
              ["match", ["get", "Zona"], ["Oeste"], true, false],
            ],
            paint: {
              "fill-color": [
                "match",
                ["get", "acoes_demo"],
                [
                  "1",
                  "2",
                  "3",
                  "4",
                  "6",
                  "5",
                  "7",
                  "9",
                  "10",
                  "13",
                  "14",
                  "18",
                  "16",
                  "19",
                ],
                "#f1d6a5",
                ["21", "22", "23", "24", "25", "30", "32", "38", "42", "44"],
                "#d5aa5d",
                ["90", "178", "190"],
                "#a96e04",
                "#000000",
              ],
              "fill-opacity": 0,
            },
          },
        },
      },
    ],
  };
};

export const Exemplo1 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32127,
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
          lon: -43.33913,
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

export const Zoom = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32838,
          lat: -22.98401,
        },
        zoom: 13.6,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.32838,
          lat: -22.98401,
        },
        zoom: 13.6,
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
            id: "desabamento-icone",
            type: "symbol",
            source: "composite",
            "source-layer": "desabamento-1f3n6k",
            layout: {
              "icon-image": "hospital",
              "icon-size": 2,
              "icon-rotate": 45,
              "icon-allow-overlap": true,
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
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 0.4,
        layer: {
          ...{
            id: "mapa-zonas-cor",
            type: "fill",
            source: "composite",
            "source-layer": "mapa-geral-2l3yzm",
            filter: [
              "all",
              [
                "match",
                ["get", "acoes_demo"],
                [
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "9",
                  "10",
                  "13",
                  "14",
                  "190",
                  "178",
                  "90",
                  "44",
                  "42",
                  "38",
                  "32",
                  "25",
                  "30",
                  "24",
                  "23",
                  "22",
                  "21",
                  "16",
                  "18",
                  "19",
                ],
                true,
                false,
              ],
              ["match", ["get", "Zona"], ["Oeste"], true, false],
            ],
            paint: {
              "fill-color": [
                "match",
                ["get", "acoes_demo"],
                [
                  "1",
                  "2",
                  "3",
                  "4",
                  "6",
                  "5",
                  "7",
                  "9",
                  "10",
                  "13",
                  "14",
                  "18",
                  "16",
                  "19",
                ],
                "#f1d6a5",
                ["21", "22", "23", "24", "25", "30", "32", "38", "42", "44"],
                "#d5aa5d",
                ["90", "178", "190"],
                "#a96e04",
                "#000000",
              ],
              "fill-opacity": 0,
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
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};
