import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { GeoJsonLayer } from "@deck.gl/layers";
const TRIPS = require("./data/trips.json");
import Map, { Source, Layer } from "react-map-gl";
// For some custom layers
import { buildings3d } from "../../components/layers/buildings3d";
// import LINHAS_ANTIGAS from "./data/linhas_antigas.json";

export const One = () => {
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

export const Four = () => {
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

export const Five = () => {
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
            id: "linhas-novas-azul",
            type: "line",
            source: "composite",
            "source-layer": "linhas-novas-9sfk6t",
            paint: {
              "line-color": "#18b4c9",
              "line-opacity": 0,
              "line-width": 1.3,
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
      // {
      //   layerType: "deckgl",
      //   layer: new MapboxLayer({
      //     id: "deck-linhas-antigas",
      //     data: LINHAS_ANTIGAS,
      //     type: GeoJsonLayer,
      //     opacity: 1,
      //     getLineColor: [0, 45, 90],
      //     getLineWidth: 200,
      //   }),
      // },
      {
        layerType: "mapbox",
        layer: {
          ...{
            id: "linhas-novas-azul-2",
            type: "line",
            source: "composite",
            "source-layer": "linhas-novas-9sfk6t",
            paint: {
              "line-color": "#18b4c9",
              "line-opacity": 0,
              "line-width": 1.3,
            },
          },
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
