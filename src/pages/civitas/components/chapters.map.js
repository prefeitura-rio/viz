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
        zoom: 18.5,
        pitch: 120.0,
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
      {
        layerType: "mapbox",
        targetOpacity: 0.8,
        layer: {
          ...{

            "id": "cor-909lki",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "fill",
            "paint": {
              "fill-emissive-strength": 1,
              "fill-opacity": 0,
              "fill-color": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                0,
                "hsl(195, 100%, 50%)",
                22,
                "hsl(195, 100%, 50%)"
              ]
            },
            "layout": {},
            "source": "composite",
            "source-layer": "cor-909lki"
          },
        },
      },
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

            "id": "percurso-carro-v2-24pm81",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "line",
            "paint": {
              "line-emissive-strength": 1,
              "line-opacity": 0,
              "line-color": "hsl(195, 100%, 50%)"
            },
            "layout": {},
            "source": "composite",
            "source-layer": "percurso_carro_v2-24pm81"

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

            "id": "percurso-carro-v2-24pm81",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "line",
            "paint": {
              "line-emissive-strength": 1,
              "line-opacity": 0,
              "line-color": "hsl(195, 100%, 50%)"
            },
            "layout": {},
            "source": "composite",
            "source-layer": "percurso_carro_v2-24pm81"

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
          lon: -43.57055476830868,
          lat: -22.911240842215918
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
          lon: -43.33157970337831,
          lat: -23.003932747780283
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
        zoom: 18.5,
        pitch: 120.0,
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
      {
        layerType: "mapbox",
        targetOpacity: 0.8,
        layer: {
          ...{

            "id": "cor-909lki",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "fill",
            "paint": {
              "fill-emissive-strength": 1,
              "fill-opacity": 0,
              "fill-color": [
                "interpolate",
                [
                  "linear"
                ],
                [
                  "zoom"
                ],
                0,
                "hsl(195, 100%, 50%)",
                22,
                "hsl(195, 100%, 50%)"
              ]
            },
            "layout": {},
            "source": "composite",
            "source-layer": "cor-909lki"
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
          lon: -43.55502657577313,
          lat: -22.87620428625697,
        },
        zoom: 20.0,
        pitch: 59.0,
        bearing: 250.47,
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
        layerType: "mapbox",
        targetOpacity: 0.5,
        layer: {
          ...{
            "id": "40batalhao-2af7w6",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "fill",
            "paint": {
              "fill-emissive-strength": 1,
              "fill-color": "hsl(195, 100%, 50%)",
              "fill-opacity": 0
            },
            "layout": {},
            "source": "composite",
            "source-layer": "40batalhao-2af7w6"
          },
        },
      },
    ],
  };
};
export const Seop5 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.3605,
          lat: -22.8648,
        },
        zoom: 16.5,
        pitch: 59.0,
        bearing: 100.47,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.361335152023315,
          lat: -22.867618828789663,
        },
        zoom: 16.14,
        pitch: 52.5,
        bearing: 160.03,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
          ...{

            "id": "bentoribeiro-as8oj1",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "symbol",
            "paint": {
              "icon-opacity": 0
            },
            "layout": {
              "icon-image": "laundry",
              "icon-size": 2.7
            },
            "source": "composite",
            "source-layer": "bentoribeiro-as8oj1"
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
          lon: -43.3605,
          lat: -22.8648,
        },
        zoom: 16.65,
        pitch: 59.0,
        bearing: 120.47,
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

            "id": "geoimg-dhj13l",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "symbol",
            "paint": {
              "icon-opacity": 0
            },
            "layout": {
              "icon-image": "laundry",
              "icon-size": 2.9
            },
            "source": "composite",
            "source-layer": "geoimg-dhj13l"

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
          lon: -43.3605,
          lat: -22.8648,
        },
        zoom: 16.5,
        pitch: 59.0,
        bearing: 100.47,
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

            "id": "percurso-carro-v2-24pm81",
            "minzoom": 0,
            "maxzoom": 22,
            "type": "line",
            "paint": {
              "line-emissive-strength": 1,
              "line-opacity": 0,
              "line-color": "hsl(195, 100%, 50%)"
            },
            "layout": {},
            "source": "composite",
            "source-layer": "percurso_carro_v2-24pm81"

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
