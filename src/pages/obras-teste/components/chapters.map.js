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

export const Mapaconjuntomaravilha = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32442,
          lat: -22.82234,
        },
        zoom: 16.5,
        pitch: 30.0,
        bearing: 50.0,
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
      
    ],
  };
};

export const Mapaavancacampogrande = () => {
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

export const Mapabairromaravilha = () => {
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
