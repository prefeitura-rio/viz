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

export const Exemplo7 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.20346,
          lat: -22.91209,
        },
        zoom: 17.38,
        pitch: 90.0,
        bearing: 0,
        duration: 5000,
      },
      mobile: {
        center: {
          lon: -43.20346,
          lat: -22.91209,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [

    ],
  };
};

export const Exemplo6 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.28141,
          lat: -22.90345,
        },
        zoom: 15.38,
        pitch: 45.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.28141,
          lat: -22.90345,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
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
        layerType: "mapbox",
        targetOpacity: 0.8,
        layer: {
          ...{

            "id": "mapa-4zkq0r",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "line",
            "paint": {
              "line-width": 3,
              "line-opacity": 0,
              "line-color": "hsl(56, 95%, 71%)"
            },
            "layout": {
              "line-join": "round"
            },
            "source": "composite",
            "source-layer": "mapa-4zkq0r"

          },
        },
      },
    ],
  };
};
export const Seop7 = () => {
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
        layerType: "mapbox",
        targetOpacity: 0.8,
        layer: {
          ...{

            "id": "mapa-4zkq0r",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "line",
            "paint": {
              "line-width": 3,
              "line-opacity": 0,
              "line-color": "hsl(56, 95%, 71%)"
            },
            "layout": {
              "line-join": "round"
            },
            "source": "composite",
            "source-layer": "mapa-4zkq0r"

          },
        },
      },
    ],
  };
};
export const DrawMap = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.35808542573136,
          lat: -22.86497771755093,
        },
        zoom: 14,
        pitch: 50,
        bearing: -45.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.41124038272067,
          lat: -22.999586702947127,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
    ],
  };
};
export const Seop8 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.340530629055735,
          lat: -23.000114890524202,
        },
        zoom: 14,
        pitch: 50,
        bearing: -45.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.41124038272067,
          lat: -22.999586702947127,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
    ],
  };
};
export const Seop9 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.41124038272067,
          lat: -22.999586702947127,
        },
        zoom: 13.38,
        pitch: 34.0,
        bearing: -45.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.41124038272067,
          lat: -22.999586702947127,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [

    ],
  };
};
export const Seop10 = () => {
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


export const Seop1 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.20346,
          lat: -22.91209,
        },
        zoom: 17.38,
        pitch: 135.0,
        bearing: 45,
        duration: 5000,
      },
      mobile: {
        center: {
          lon: -43.20346,
          lat: -22.91209,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [

    ],
  };
};

export const Seop2 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.20346,
          lat: -22.91209,
        },
        zoom: 17.38,
        pitch: 135.0,
        bearing: 45,
        duration: 5000,
      },
      mobile: {
        center: {
          lon: -43.20346,
          lat: -22.91209,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [

    ],
  };
};

export const Seop3 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.20708,
          lat: -22.91430,
        },
        zoom: 17.38,
        pitch: 135.0,
        bearing: -45,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.20708,
          lat: -22.91430,
        },
        zoom: 14.71,
        pitch: 52.5,
        bearing: -53.6,
        duration: 4000,
      },
    },
    layers: [
    ],
  };
};
export const Seop3_2 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.20708,
          lat: -22.91430,
        },
        zoom: 17.6,
        pitch: 150.0,
        bearing: -3,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.20708,
          lat: -22.91430,
        },
        zoom: 14.71,
        pitch: 52.5,
        bearing: -53.6,
        duration: 4000,
      },
    },
    layers: [
    ],
  };
};

export const Seop4 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.543917233799284,
          lat: -22.86300034959031,
        },
        zoom: 15.77,
        pitch: 59.0,
        bearing: 124.47,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.543917233799284,
          lat: -22.86300034959031,
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
export const Seop5 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.361335152023315,
          lat: -22.867618828789663,
        },
        zoom: 15.77,
        pitch: 59.0,
        bearing: 124.47,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.361335152023315,
          lat: -22.867618828789663,
        },
        zoom: 16.14,
        pitch: 52.5,
        bearing: 127.03,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
          ...{

            "id": "bentor-cmvxk1",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "symbol",
            "layout": {
              "icon-image": [
                "step",
                [
                  "zoom"
                ],
                "attraction",
                22,
                "attraction"
              ],
              "icon-size": 2
            },
            "source": "composite",
            "source-layer": "bentor-cmvxk1",

          },
        },
      },
    ],
  };
};
export const Seop5_2 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.361403212469696,
          lat: -22.86599669984288,
        },
        zoom: 16.77,
        pitch: 135.0,
        bearing: 124.47,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.361403212469696,
          lat: -22.86599669984288,
        },
        zoom: 16.14,
        pitch: 52.5,
        bearing: 127.03,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
          ...{

            "id": "bentor1only-6d5ivl",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "symbol",
            "layout": {
              "icon-image": [
                "step",
                [
                  "zoom"
                ],
                "attraction",
                22,
                "attraction"
              ],
              "icon-size": 2
            },
            "source": "composite",
            "source-layer": "bentor1only-6d5ivl",

          },
        },
      },
    ],
  };
};
export const Seop6 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.361403212469696,
          lat: -22.86599669984288,
        },
        zoom: 16.77,
        pitch: 135.0,
        bearing: 124.47,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.361403212469696,
          lat: -22.86599669984288,
        },
        zoom: 16.14,
        pitch: 52.5,
        bearing: 127.03,
        duration: 4000,
      },
    },
    layers: [

    ],
  };
};

export const Exemplo8 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.20346,
          lat: -22.91209,
        },
        zoom: 15.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.20346,
          lat: -22.91209,
        },
        zoom: 8.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 0.8,
        layer: {
          ...{

            "id": "mapa-4zkq0r",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "line",
            "paint": {
              "line-width": 3,
              "line-opacity": 0,
              "line-color": "hsl(56, 95%, 71%)"
            },
            "layout": {
              "line-join": "round"
            },
            "source": "composite",
            "source-layer": "mapa-4zkq0r"

          },
        },
      },
    ],
  };
};

export const Exemplo4 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.36001,
          lat: -22.86610,
        },
        zoom: 16.38,
        pitch: 45,
        bearing: -45,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.36001,
          lat: -22.86610,
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

export const Exemplo2 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.53625,
          lat: -22.89389,
        },
        zoom: 13.85,
        pitch: 44.5,
        bearing: 46.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.53625,
          lat: -22.89389,
        },
        zoom: 15.85,
        pitch: 44.5,
        bearing: 46.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 0.5,
        layer: {
          ...{

            "id": "senadorv-8m3es0",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "fill",
            "paint": {
              "fill-emissive-strength": 1,
              "fill-color": "hsl(60, 86%, 62%)",
              "fill-opacity": 0
            },
            "layout": {},
            "source": "composite",
            "source-layer": "senadorv-8m3es0"

          },
        },
      },
    ],
  };
};

export const Exemplo3 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.53625,
          lat: -22.89389,
        },
        zoom: 15.85,
        pitch: 44.5,
        bearing: -46.0,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.53625,
          lat: -22.89389,
        },
        zoom: 15.85,
        pitch: 44.5,
        bearing: 46.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 0.5,
        layer: {
          ...{

            "id": "senadorv-8m3es0",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "fill",
            "paint": {
              "fill-emissive-strength": 1,
              "fill-color": "hsl(60, 86%, 62%)",
              "fill-opacity": 0
            },
            "layout": {},
            "source": "composite",
            "source-layer": "senadorv-8m3es0"

          },
        },
      },
    ],
  };
};

export const Zoom = () => {
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

export const Exemplo5 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.36001,
          lat: -22.86610,
        },
        zoom: 16.38,
        pitch: 45,
        bearing: -45,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.36001,
          lat: -22.86610,
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
