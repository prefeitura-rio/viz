import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
const TRIPS = require("../especial-sppo/data/trips.json");

// For some custom layers
import { buildings3d } from "../../components/layers/buildings3d";

export const One = () => {
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
        layerType: "reuse",
        layer: { id: "3d-buildings" },
      },
      {
        layerType: "mapbox-style",
        layer: { id: "linhasantigas" },
      },
    ],
  };
};

export const Three = () => {
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

export const Four = () => {
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
          lon: -43.17224,
          lat: -22.90651,
        },
        zoom: 14.51,
        pitch: 60.0,
        bearing: -70.4,
        duration: 2000,
      },
    },
    layers: [
      {
        layerType: "mapbox-style",
        layer: {
          id: "unicalinha",
        },
      },
      {
        layerType: "reuse",
        layer: {
          id: "3d-buildings",
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
          lon: -43.34443,
          lat: -22.85287,
        },
        zoom: 11.94,
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
          id: "unicalinha1",
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

export const Seven = () => {
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
          id: "pontosantigos1",
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
