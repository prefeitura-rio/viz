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
        zoom: 8.68,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [

    ],
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
        zoom: 8.68,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};

export const Prejuizo = () => {
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
        zoom: 8.68,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "georio-geral",
            type: "circle",
            source: "composite",
            "source-layer": "obras-alag-geo-rio_-_obras-al-27j534",
            paint: {
              "circle-radius": 10,
              "circle-color": "#06639d",
              "circle-opacity": 0
          }
          },
        },
      }, 
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "rioaguas-geral",
            type: "circle",
            source: "composite",
            "source-layer": "obras-alag-rio-aguas_-_obras--8kwpcs",
            paint: {
              "circle-radius": 10,
              "circle-color": "#da8216",
              "circle-opacity": 0
          }
          },
        },
      }, 
    ],
  };
};

export const BairroMaravilha = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.30880,
          lat: -22.88922,
        },
        zoom: 14.20,
        pitch: 48.08,
        bearing: 43.25,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.30598,
          lat: -22.89756,
        },
        zoom: 14.40,
        pitch: 48.08,
        bearing: 43.25,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "bairromaravilha",
            type: "line",
            source: "composite",
            "source-layer": "bairromaravilha-ahcqjy",
            paint: {
              "line-width": 15,
              "line-color": "#003b66",
              "line-blur": 5,
              "line-opacity": 0
          }
          },
        },
      }, 
      {
        layerType: "mapbox",
        targetOpacity: .15,
        layer: {
          ...{
            id: "encantando",
            type: "fill",
            source: "composite",
            "source-layer": "encantando-7qeijp",
            paint: {
              "fill-color": "#06639d",
              "fill-opacity": 0
          }
          },
        },
      }, 
      {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
            id: "static-text3",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.30583, -22.89469] // Replace with desired coordinates
                        },
                        properties: {
                            title: "Rua Francisco Fragoso"
                        }
                    }]
                }
            },
            layout: {
                "text-field": "{title}",
                "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
                "text-size": 24
            },
            paint: {
                "text-color": "#06639d",
                // "text-halo-color": "#ffffff",
                // "text-halo-width": 3,  // Adjust the width as needed
                // "text-halo-blur": 0
            }
        },
     },
     {
      layerType: "mapbox",
      targetOpacity: .6,
      layer: {
          id: "static-text6",
          type: "symbol",
          source: {
              type: "geojson",
              data: {
                  type: "FeatureCollection",
                  features: [{
                      type: "Feature",
                      geometry: {
                          type: "Point",
                          coordinates: [-43.30567, -22.90101] // Replace with desired coordinates
                      },
                      properties: {
                          title: "Encantado"
                      }
                  }]
              }
          },
          layout: {
              "text-field": "{title}",
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 16
          },
          paint: {
              "text-color": "#06639d",
              // "text-halo-color": "#ffffff",
              // "text-halo-width": 3,  // Adjust the width as needed
              // "text-halo-blur": 0
          }
      },
    },
    {
      layerType: "mapbox",
      targetOpacity: 1,
      layer: {
          id: "static-text171",
          type: "symbol",
          source: {
              type: "geojson",
              data: {
                  type: "FeatureCollection",
                  features: [{
                      type: "Feature",
                      geometry: {
                          type: "Point",
                          coordinates: [-43.31067, -22.90155] // Replace with desired coordinates
                      },
                      properties: {
                        title: "43.839"
                    }
                }]
            }
        },
        layout: {
            "text-field": "{title}",
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
            "text-size": 60
        },
        paint: {
            "text-color": "#06639d",
            "text-halo-color": "#ffffff",
            "text-halo-width": 3,  // Adjust the width as needed
            "text-halo-blur": 0
        }
      },
     },
     {
      layerType: "mapbox",
      targetOpacity: 1,
      layer: {
          id: "static-text181",
          type: "symbol",
          source: {
              type: "geojson",
              data: {
                  type: "FeatureCollection",
                  features: [{
                      type: "Feature",
                      geometry: {
                          type: "Point",
                          coordinates: [-43.31316, -22.90336] // Replace with desired coordinates
                      },
                      properties: {
                        title: "pessoas beneficiadas"
                    }
                }]
            }
        },
        layout: {
            "text-field": "{title}",
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
            "text-size": 20
        },
        paint: {
            "text-color": "#06639d",
            "text-halo-color": "#ffffff",
            "text-halo-width": 3,  // Adjust the width as needed
            "text-halo-blur": 0
        }
      },
     },
    ],  
  };
};

export const Exemplo0 = () => {
  return {
    location: {
      desktop: {
        center: {
          lon: -43.35344,
          lat: -22.82684,
        },
        zoom: 13.00,
        pitch: 36.75,
        bearing: -8,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.33490,
          lat: -22.82426,
        },
        zoom: 12.95,
        pitch: 36.75,
        bearing: -8,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "rioacari1",
            type: "line",
            source: "composite",
            "source-layer": "rioacari111-9ilmw9",
            paint: {
              "line-color": "#06639d",
              "line-width": 10,
              "line-opacity": 0
          }
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: .15,
        layer: {
          ...{
            id: "bairrosrioacari",
            type: "fill",
            source: "composite",
            "source-layer": "bairrosrioacari-bmo9od",
            paint: {
              "fill-color": "#06639d",
              "fill-opacity": 0
          }
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
            id: "static-text4",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.34849, -22.81192] // Replace with desired coordinates
                        },
                        properties: {
                            title: "Rio Acarí"
                        }
                    }]
                }
            },
            layout: {
                "text-field": "{title}",
                "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
                "text-size": 24
            },
            paint: {
                "text-color": "#06639d",
                // "text-halo-color": "#ffffff",
                // "text-halo-width": 3,  // Adjust the width as needed
                // "text-halo-blur": 0
            }
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: .6,
        layer: {
            id: "static-text2",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.34084, -22.82420] // Replace with desired coordinates
                        },
                        properties: {
                          title: "Acari"
                      }
                  }]
              }
          },
          layout: {
              "text-field": "{title}",
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 16
          },
          paint: {
              "text-color": "#06639d",
              // "text-halo-color": "#ffffff",
              // "text-halo-width": 3,  // Adjust the width as needed
              // "text-halo-blur": 0
          }
        },
       },
       {
        layerType: "mapbox",
        targetOpacity: .6,
        layer: {
            id: "static-text7",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.34751, -22.83278] // Replace with desired coordinates
                        },
                        properties: {
                          title: "Coelho Neto"
                      }
                  }]
              }
          },
          layout: {
              "text-field": "{title}",
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 16
          },
          paint: {
              "text-color": "#06639d",
              // "text-halo-color": "#ffffff",
              // "text-halo-width": 3,  // Adjust the width as needed
              // "text-halo-blur": 0
          }
        },
       },
       {
        layerType: "mapbox",
        targetOpacity: .6,
        layer: {
            id: "static-text8",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.32063, -22.81041] // Replace with desired coordinates
                        },
                        properties: {
                          title: "Jardim América"
                      }
                  }]
              }
          },
          layout: {
              "text-field": "{title}",
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 16
          },
          paint: {
              "text-color": "#06639d",
              // "text-halo-color": "#ffffff",
              // "text-halo-width": 3,  // Adjust the width as needed
              // "text-halo-blur": 0
          }
        },
       },
       {
        layerType: "mapbox",
        targetOpacity: .6,
        layer: {
            id: "static-text9",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.32321, -22.81916] // Replace with desired coordinates
                        },
                        properties: {
                          title: "Irajá"
                      }
                  }]
              }
          },
          layout: {
              "text-field": "{title}",
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 16
          },
          paint: {
              "text-color": "#06639d",
              // "text-halo-color": "#ffffff",
              // "text-halo-width": 3,  // Adjust the width as needed
              // "text-halo-blur": 0
          }
        },
       },
       {
        layerType: "mapbox",
        targetOpacity: .6,
        layer: {
            id: "static-text10",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.33710, -22.81086] // Replace with desired coordinates
                        },
                        properties: {
                          title: "Parque Colúmbia"
                      }
                  }]
              }
          },
          layout: {
              "text-field": "{title}",
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 16
          },
          paint: {
              "text-color": "#06639d",
              // "text-halo-color": "#ffffff",
              // "text-halo-width": 3,  // Adjust the width as needed
              // "text-halo-blur": 0
          }
        },
       },
       {
        layerType: "mapbox",
        targetOpacity: .6,
        layer: {
            id: "static-text12",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.35789, -22.81773] // Replace with desired coordinates
                        },
                        properties: {
                          title: "Pavuna"
                      }
                  }]
              }
          },
          layout: {
              "text-field": "{title}",
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 16
          },
          paint: {
              "text-color": "#06639d",
              // "text-halo-color": "#ffffff",
              // "text-halo-width": 3,  // Adjust the width as needed
              // "text-halo-blur": 0
          }
        },
       },
       {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
            id: "static-text13",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.33398, -22.83601] // Replace with desired coordinates
                        },
                        properties: {
                          title: "29.230"
                      }
                  }]
              }
          },
          layout: {
              "text-field": "{title}",
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 60
          },
          paint: {
              "text-color": "#06639d",
              "text-halo-color": "#ffffff",
              "text-halo-width": 3,  // Adjust the width as needed
              "text-halo-blur": 0
          }
        },
       },
       {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
            id: "static-text14",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.33452, -22.84348] // Replace with desired coordinates
                        },
                        properties: {
                          title: "pessoas beneficiadas"
                      }
                  }]
              }
          },
          layout: {
              "text-field": "{title}",
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 20
          },
          paint: {
              "text-color": "#06639d",
              "text-halo-color": "#ffffff",
              "text-halo-width": 3,  // Adjust the width as needed
              "text-halo-blur": 0
          }
        },
       },
    ],
  };
};

export const Exemplo2 = () => {
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
        zoom: 8.68,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "rioaguas-drenagem",
            type: "circle",
            source: "composite",
            "source-layer": "obras-alag-rio-aguas_-_obras--8kwpcs",
            paint: {
              "circle-radius": 3,
              "circle-color": "#da8216",
              "circle-opacity": 0
          }
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "georio-drenagem",
            type: "circle",
            source: "composite",
            "source-layer": "obras-alag-geo-rio_-_obras-al-27j534",
            paint: {
              "circle-radius": 3,
              "circle-color": "#06639d",
              "circle-opacity": 0
          }
          },
        },
      },
    ],
  };
};

export const Desassoreamento = () => {
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
        zoom: 8.68,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "rioaguas-desassoreamento",
            type: "circle",
            source: "composite",
            "source-layer": "obras-alag-rio-aguas_-_obras--8kwpcs",
            paint: {
              "circle-radius": 3,
              "circle-color": "#da8216",
              "circle-opacity": 0
          }
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
          lon: -43.32992,
          lat: -22.87291,
        },
        zoom: 14.14,
        pitch: 36.08,
        bearing: 9.6,
        duration: 4000,
      },
      mobile: {
        center: {
          lon: -43.33758,
          lat: -22.87176,
        },
        zoom: 14.14,
        pitch: 36.08,
        bearing: 9.6,
        duration: 4000,
      },
    },
    layers: [
      {
        layerType: "mapbox",
        targetOpacity: .75,
        layer: {
          ...{
            id: "madureira",
            type: "fill",
            source: "composite",
            "source-layer": "madureira-dh4t8l",
            paint: {
              "fill-color": "#06639d",
              "fill-opacity": 0
          }
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: .15,
        layer: {
          ...{
            id: "madureira1",
            type: "fill",
            source: "composite",
            "source-layer": "madureira1-4gonbw",
            paint: {
              "fill-color": "#06639d",
              "fill-opacity": 0
          }
          },
        },
      },
      {
        layerType: "mapbox",
        targetOpacity: 1,
        layer: {
            id: "static-text",
            type: "symbol",
            source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [{
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [-43.33919, -22.86645] // Replace with desired coordinates
                        },
                        properties: {
                            title: "Mercadão de Madureira"
                        }
                    }]
                }
            },
            layout: {
                "text-field": "{title}",
                "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
                "text-size": 24
            },
            paint: {
                "text-color": "#06639d",
                // "text-halo-color": "#ffffff",
                // "text-halo-width": 3,  // Adjust the width as needed
                // "text-halo-blur": 0
            }
        },
    },
    {
      layerType: "mapbox",
      targetOpacity: .6,
      layer: {
          id: "static-text22",
          type: "symbol",
          source: {
              type: "geojson",
              data: {
                  type: "FeatureCollection",
                  features: [{
                      type: "Feature",
                      geometry: {
                          type: "Point",
                          coordinates: [-43.33601, -22.87430] // Replace with desired coordinates
                      },
                      properties: {
                        title: "Madureira"
                    }
                }]
            }
        },
        layout: {
            "text-field": "{title}",
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
            "text-size": 16
        },
        paint: {
            "text-color": "#06639d",
            // "text-halo-color": "#ffffff",
            // "text-halo-width": 3,  // Adjust the width as needed
            // "text-halo-blur": 0
        }
      },
     },
     {
      layerType: "mapbox",
      targetOpacity: 1,
      layer: {
          id: "static-text15",
          type: "symbol",
          source: {
              type: "geojson",
              data: {
                  type: "FeatureCollection",
                  features: [{
                      type: "Feature",
                      geometry: {
                          type: "Point",
                          coordinates: [-43.34171, -22.87680] // Replace with desired coordinates
                      },
                      properties: {
                        title: "38.366"
                    }
                }]
            }
        },
        layout: {
            "text-field": "{title}",
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
            "text-size": 60
        },
        paint: {
            "text-color": "#06639d",
            "text-halo-color": "#ffffff",
            "text-halo-width": 3,  // Adjust the width as needed
            "text-halo-blur": 0
        }
      },
     },
     {
      layerType: "mapbox",
      targetOpacity: 1,
      layer: {
          id: "static-text16",
          type: "symbol",
          source: {
              type: "geojson",
              data: {
                  type: "FeatureCollection",
                  features: [{
                      type: "Feature",
                      geometry: {
                          type: "Point",
                          coordinates: [-43.34166, -22.87949] // Replace with desired coordinates
                      },
                      properties: {
                        title: "pessoas beneficiadas"
                    }
                }]
            }
        },
        layout: {
            "text-field": "{title}",
            "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
            "text-size": 20
        },
        paint: {
            "text-color": "#06639d",
            "text-halo-color": "#ffffff",
            "text-halo-width": 3,  // Adjust the width as needed
            "text-halo-blur": 0
        }
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
        zoom: 10.38,
        pitch: 0.0,
        bearing: 0.0,
        duration: 4000,
      },
    },
    layers: [],
  };
};
