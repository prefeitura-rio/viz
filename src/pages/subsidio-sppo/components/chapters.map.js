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

export const Antes = () => {
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

export const Depois = () => {
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

// export const HistoriaFoto = () => {
//   return {
//     location: {
//       mobile: {
//         center: {
//           lon: -43.45938,
//           lat: -22.94232,
//         },
//         zoom: 8.67,
//         pitch: 7.0,
//         bearing: 0.0,
//         duration: 4000,
//       },
//       desktop: {
//         center: {
//           lon: -43.69475,
//           lat: -22.96915,
//         },
//         zoom: 13.26,
//         pitch: 36.5,
//         bearing: 45.45,
//         duration: 4000,
//       },
//     },
//     layers: [
//       {
//         layerType: "mapbox-style",
//         layer: { id: "sepetiba" },
//       },
//     ],
//   };
// };

// export const Historia2 = () => {
//   return {
//     location: {
//       mobile: {
//         center: {
//           lon: -43.45938,
//           lat: -22.94232,
//         },
//         zoom: 8.67,
//         pitch: 7.0,
//         bearing: 0.0,
//         duration: 4000,
//       },
//       desktop: {
//         center: {
//           lon: -43.67922,
//           lat: -22.96874,
//         },
//         zoom: 12.33,
//         pitch: 55.0,
//         bearing: 70.51,
//         duration: 4000,
//       },
//     },
//     layers: [
//       {
//         layerType: "mapbox-style",
//         layer: { id: "sepetiba" },
//       },
//       {
//         layerType: "mapbox",
//         layer: {
//           ...{
//             id: "linha870-cor",
//             type: "line",
//             source: "composite",
//             "source-layer": "linha870-byrh8i",
//             paint: {
//               "line-color": "#c36a2d",
//               "line-width": 2,
//               "line-opacity": 1,
//             },
//           },
//         },
//       },
//       {
//         layerType: "mapbox",
//         layer: {
//           ...{
//             id: "linha871-cor",
//             type: "line",
//             source: "composite",
//             "source-layer": "linha871-9h5hot",
//             paint: {
//               "line-color": "#dd9f75",
//               "line-width": 2,
//               "line-opacity": 1,
//             },
//           },
//         },
//       },
//     ],
//   };
// };

/*
export const LinhasBairros = () => {
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
        duration: 4000,
      },
      desktop: {
        center: {
          lon: -43.44949,
          lat: -22.94796,
        },
        zoom: 10.3,
        pitch: 6.0,
        bearing: 0.03,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "bairros" },
      },
      {
        layerType: "mapbox-style",
        layer: { id: "bairros-linha" },
      },
      {
        layerType: "mapbox",
        layer: {
          ...{
            id: "linhas-novas-oranje",
            type: "line",
            source: "composite",
            "source-layer": "linhas-novas-9sfk6t",
            paint: {
              "line-color": "#c36a2d",
              "line-opacity": 0,
              "line-width": 1.7,
            },
          },
        },
      },
    ],
  };
};

export const SistemaAtual = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.17224,
          lat: -22.90651,
        },
        zoom: 10.51,
        pitch: 60.0,
        bearing: -70.4,
        duration: 2000,
      },
      desktop: {
        center: {
          lon: -43.44949,
          lat: -22.94796,
        },
        zoom: 10.3,
        pitch: 6.0,
        bearing: 0.03,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        layer: {
          ...{
            id: "final-linhas-cor",
            type: "line",
            source: "composite",
            "source-layer": "final-linhas-24q8pr",
            paint: {
              "line-color": "#18b4c9",
              "line-opacity": 0.5,
              "line-width": 0.8,
            },
          },
        },
      },
      {
        layerType: "mapbox",
        layer: {
          ...{
            id: "linhas-novas-azul-2",
            type: "line",
            source: "composite",
            "source-layer": "linhas-novas-9sfk6t",
            paint: {
              "line-color": "#c36a2d",
              "line-opacity": 0,
              "line-width": 1.7,
            },
          },
        },
      },
    ],
  };
};
*/

export const CxGrafico1 = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.45938,
          lat: -22.94232,
        },
        zoom: 8.67,
        pitch: 7.0,
        bearing: 0.0,
        duration: 2000,
      },
      desktop: {
        center: {
          lon: -43.45938,
          lat: -22.94232,
        },
        zoom: 10.67,
        pitch: 7.0,
        bearing: 0.0,
        duration: 2000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: {
          id: "municipios",
        },
      },
    ],
  };
};

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

export const Ten = () => {
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

// export const Ten = () => {
//   return {
//     location: {
//       mobile: {
//         center: {
//           lon: -43.54516,
//           lat: -22.98354,
//         },
//         zoom: 9.86,
//         pitch: 60.0,
//         bearing: 38.08,
//         duration: 2000,
//       },
//       desktop: {
//         center: {
//           lon: -43.54516,
//           lat: -22.98354,
//         },
//         zoom: 11.86,
//         pitch: 60.0,
//         bearing: 38.08,
//         duration: 2000,
//       },
//     },
//     layers: [
//       {
//         layerType: "mapbox-style",
//         layer: {
//           id: "linhasantigas",
//         },
//       },
//     ],
//   };
// };
