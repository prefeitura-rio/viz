import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
const TRIPS = require("./data/trips.json");

// For some custom layers
import { buildings3d } from "../../components/layers/buildings3d";

export const One = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.17672,
          lat: -22.90574,
        },
        zoom: 15.2,
        pitch: 60.0,
        bearing: -151.1,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.17704,
          lat: -22.8965,
        },
        zoom: 15.63,
        pitch: 60.0,
        bearing: 139.3,
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
          getColor: [244, 144, 44],
          widthMinPixels: 5,
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

export const Two = () => {
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
        duration: 4000,
      },
      desktop: {
        center: {
          lon: -43.69475,
          lat: -22.96915,
        },
        zoom: 13.26,
        pitch: 36.5,
        bearing: 45.45,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "sepetiba" },
      },
      {
        layerType: "mapbox-style",
        layer: { id: "sepetiba-linha" },
      },
    ],
  };
};

export const Three = () => {
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
        duration: 4000,
      },
      desktop: {
        center: {
          lon: -43.67922,
          lat: -22.96874,
        },
        zoom: 12.33,
        pitch: 55.0,
        bearing: 70.51,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: { id: "sepetiba" },
      },
      {
        layerType: "mapbox-style",
        layer: { id: "sepetiba-linha" },
      },
      {
        layerType: "mapbox",
        layer: {
          ...{
            id: "linha-sepetiba-blue",
            type: "line",
            source: "composite",
            "source-layer": "linha-sepetiba-30dnx7",
            paint: {
              "line-color": "#18b4c9",
              "line-width": 2,
              "line-opacity": 1,
            },
          },
        },
      },
    ],
  };
};

export const Four = () => {
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
        zoom: 10.7,
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
            id: "linhas-novas-azul",
            type: "line",
            source: "composite",
            "source-layer": "linhas-novas-9sfk6t",
            paint: {
              "line-color": "#18b4c9",
              "line-opacity": 0,
              "line-width": 1,
            },
          },
        },
      },
    ],
  };
};

export const Five = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.17224,
          lat: -22.90651,
        },
        zoom: 12.51,
        pitch: 60.0,
        bearing: -70.4,
        duration: 2000,
      },
      desktop: {
        center: {
          lon: -43.44949,
          lat: -22.94796,
        },
        zoom: 11.5,
        pitch: 6.0,
        bearing: 0.03,
        duration: 2000,
      },
    },
    layers: [
      {
        layerType: "reuse",
        layer: {
          id: "linhas-novas-azul",
        },
      },
      {
        layerType: "mapbox",
        layer: {
          ...{
            id: "linhas-antigas-cor",
            type: "line",
            source: "composite",
            "source-layer": "todas-linhas-bc14o2",
            paint: {
              "line-opacity": 1,
              "line-color": "#fff",
              "line-width": 1,
            },
          },
        },
      },
    ],
  };
};

export const Six = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.34443,
          lat: -22.85287,
        },
        zoom: 15.94,
        pitch: 60.0,
        bearing: 85.53,
        duration: 2000,
      },
      desktop: {
        center: {
          lon: -43.34443,
          lat: -22.85287,
        },
        zoom: 13.94,
        pitch: 60.0,
        bearing: 85.53,
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

export const Seven = () => {
  return {
    location: {
      mobile: {
        center: {
          lon: -43.24732,
          lat: -22.9526,
        },
        zoom: 10.33,
        pitch: 60.0,
        bearing: -51.24,
        duration: 2000,
      },
      desktop: {
        center: {
          lon: -43.24732,
          lat: -22.9526,
        },
        zoom: 12.33,
        pitch: 60.0,
        bearing: -51.24,
        duration: 2000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: {
          id: "pontosantigos",
        },
      },
    ],
  };
};

export const Eight = () => {
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

export const Nine = () => {
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
