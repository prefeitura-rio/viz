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

export const IntroMapa = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.46431,
          lat: -22.93342,
        },
        zoom: 10.0,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.46431,
          lat: -22.93342,
        },
        zoom: 8.57,
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
            id: "roubos",
            type: "heatmap",
            source: "composite",
            "source-layer": "roubos_rj_grade_id26_25_perce-4afqa0",
            paint: {},
          },
        },
      },
    ],
  };
};

export const IntroMapaUm = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.29912,
          lat: -22.90287,
        },
        zoom: 13.85,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.28312,
          lat: -22.90287,
        },
        zoom: 12.6,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 0.2,
        layer: {
          ...{
            id: "bairros",
            type: "fill",
            source: "composite",
            "source-layer": "bairros-4ldjs3",
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 0.8,
        layer: {
          ...{
            id: "perimetro-2lxj6v",
            type: "fill",
            source: "composite",
            "source-layer": "perimetro-2lxj6v",
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
