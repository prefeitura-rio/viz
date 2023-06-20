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

export const Mapaconjuntomaravilhaum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.32442,
          lat: -22.82234,
        },
        zoom: 16.9,
        pitch: 30.0,
        bearing: 73.0,
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

export const Mapacasacariocaum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.98,
        pitch: 80.0,
        bearing: 10.0,
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
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.98,
        pitch: 80.0,
        bearing: 10.0,
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

export const Mapaavancacampograndeum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.98,
        pitch: 80.0,
        bearing: 10.0,
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

export const Mapabairromaravilha = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.98,
        pitch: 80.0,
        bearing: 10.0,
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

export const Mapabairromaravilhaum = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.26232,
          lat: -22.88882,
        },
        zoom: 16.98,
        pitch: 80.0,
        bearing: 10.0,
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
