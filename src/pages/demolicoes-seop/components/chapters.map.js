import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer } from "@deck.gl/layers";
import Map, { Source, Layer } from "react-map-gl";
// For some custom layers
import { buildings3d } from "../../../components/layers/buildings3d";
// import LINHAS_ANTIGAS from "./data/linhas_antigas.json";

export const One = () => {
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

// export const Geral = () => {
//   return {
//     location: {
//       desktop: {
//         center: {
//           lon: -43.45632,
//           lat: -22.92106,
//         },
//         zoom: 10.38,
//         pitch: 0.0,
//         bearing: 0.0,
//         duration: 4000,
//       },
//       mobile: {
//         center: {
//           lon: -43.18213,
//           lat: -22.90645,
//         },
//         zoom: 15.11,
//         pitch: 60.0,
//         bearing: -146.41,
//         duration: 4000,
//       },
//     },
//     layers: [
//       {
//         layerType: "mapbox",
//         targetOpacity: 0.4,
//         layer: {
//           ...{
//             id: "mapa-geral-cor",
//             type: "fill",
//             source: "composite",
//             "source-layer": "mapa-geral-2l3yzm",
//             filter: [
//               "match",
//               ["get", "acoes_demo"],
//               [
//                 "1",
//                 "2",
//                 "3",
//                 "4",
//                 "5",
//                 "6",
//                 "7",
//                 "9",
//                 "10",
//                 "13",
//                 "14",
//                 "190",
//                 "178",
//                 "90",
//                 "44",
//                 "42",
//                 "38",
//                 "32",
//                 "25",
//                 "30",
//                 "24",
//                 "23",
//                 "22",
//                 "21",
//                 "16",
//                 "18",
//                 "19",
//               ],
//               true,
//               false,
//             ],
//             paint: {
//               "fill-color": [
//                 "match",
//                 ["get", "acoes_demo"],
//                 [
//                   "1",
//                   "2",
//                   "3",
//                   "4",
//                   "6",
//                   "5",
//                   "7",
//                   "9",
//                   "10",
//                   "13",
//                   "14",
//                   "18",
//                   "16",
//                   "19",
//                 ],
//                 "#6998AB",
//                 ["21", "22", "23", "24", "25", "30", "32", "38", "42", "44"],
//                 "#406882",
//                 ["90", "178", "190"],
//                 "#19364D",
//                 "#000000",
//               ],
//               "fill-opacity": 0,
//             },
//           },
//         },
//       },
//     ],
//   };
// };

export const Prejuizo = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.18213,
          lat: -22.90645,
        },
        zoom: 15.11,
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
                "#6998AB",
                ["21", "22", "23", "24", "25", "30", "32", "38", "42", "44"],
                "#406882",
                ["90", "178", "190"],
                "#19364D",
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
          lon: -43.18213,
          lat: -22.90645,
        },
        zoom: 15.11,
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

export const Exemplo1 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32192,
          lat: -22.98894,
        },
        zoom: 16.82,
        pitch: 44.0,
        bearing: 0.0,
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

export const Seop1 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32192,
          lat: -22.98894,
        },
        zoom: 16.82,
        pitch: 44.0,
        bearing: 0.0,
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

export const Seop2 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32192,
          lat: -22.98894,
        },
        zoom: 16.82,
        pitch: 44.0,
        bearing: 0.0,
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

export const Acompanhe = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32192,
          lat: -22.98894,
        },
        zoom: 16.82,
        pitch: 44.0,
        bearing: 0.0,
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

export const Oeste = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32192,
          lat: -22.98894,
        },
        zoom: 16.82,
        pitch: 44.0,
        bearing: 0.0,
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

export const Exemplo2 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.33404,
          lat: -22.97523,
        },
        zoom: 16.69,
        pitch: 52.5,
        bearing: 91.61,
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

export const Exemplo3 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.22702,
          lat: -22.93045,
        },
        zoom: 17.19,
        pitch: 51.0,
        bearing: 113.23,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.22711,
          lat: -22.93024,
        },
        zoom: 17.35,
        pitch: 52.0,
        bearing: 109.23,
        duration: 4000,
      },
    },
    layers: [],
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
          lon: -43.18213,
          lat: -22.90645,
        },
        zoom: 15.11,
        pitch: 60.0,
        bearing: -146.41,
        duration: 4000,
      },
    },
    layers: [],
  };
};
