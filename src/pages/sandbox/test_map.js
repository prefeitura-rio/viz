// Mandatory
import { useState } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

// For some custom layers
import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
const TRIPS = require("../especial-sppo/data/trips.json");
const TRAIL_LENGTH = 400;

// 3D buildings layer
const buildings3d = {
  id: "add-3d-buildings",
  source: "composite",
  "source-layer": "building",
  filter: ["==", "extrude", "true"],
  type: "fill-extrusion",
  minzoom: 5,
  paint: {
    "fill-extrusion-color": "#aaa",
    "fill-extrusion-height": [
      "interpolate",
      ["linear"],
      ["zoom"],
      5,
      0,
      10.05,
      ["get", "height"]
    ],
    "fill-extrusion-base": [
      "interpolate",
      ["linear"],
      ["zoom"],
      5,
      0,
      10.05,
      ["get", "min_height"]
    ],
    "fill-extrusion-opacity": 1
  }
};

export default function TestMap() {
  const [location, setLocation] = useState({
    desktop: {
      center: {
        lat: -22.9121089,
        lon: -43.2301558
      },
      zoom: 15,
      bearing: 0,
      pitch: 0,
      duration: 4000
    },
    mobile: {
      center: {
        lat: -22.9121089,
        lon: -43.2301558
      },
      zoom: 15,
      bearing: 0,
      pitch: 0,
      duration: 4000
    }
  });

  const [layers, setLayers] = useState([]);

  const setPosition = (position) => {
    setLocation({
      ...location,
      desktop: {
        ...position
      },
      mobile: {
        ...position
      }
    });
  };

  const chapterOne = () => {
    setPosition({
      center: { lon: -43.32934, lat: -22.87653 },
      zoom: 10.36,
      pitch: 0.0,
      bearing: 0.0
    });
    setLayers([
      {
        layerType: "deckgl-trips",
        layer: new MapboxLayer({
          id: "my-trips-layer",
          type: TripsLayer,
          data: TRIPS,
          getPath: (d) => d.path,
          getTimestamps: (d) => d.timestamps,
          getColor: [244, 144, 44],
          widthMinPixels: 20,
          fadeTrail: true,
          currentTime: 0,
          opacity: 1,
          rounded: true,
          trailLength: TRAIL_LENGTH,
          shadowEnabled: false
        })
      }
    ]);
  };

  const chapterTwo = () => {
    setPosition({
      center: { lon: -43.20881, lat: -22.90198 },
      zoom: 16.74,
      pitch: 0.0,
      bearing: 0.0
    });
    setLayers([
      {
        layerType: "mapbox",
        layer: { ...buildings3d }
      }
    ]);
  };

  const chapterThree = () => {
    setPosition({
      center: { lon: -43.39513, lat: -22.97986 },
      zoom: 12.5,
      pitch: 0.0,
      bearing: 0.0
    });
    setLayers([
      {
        layerType: "mapbox-style",
        layer: {
          id: "linhasantigas"
        }
      }
    ]);
  };

  return (
    <div>
      <button onClick={chapterOne}>Chapter 1</button>
      <button onClick={chapterTwo}>Chapter 2</button>
      <button onClick={chapterThree}>Chapter 3</button>
      <MultilayerMap
        interactive={true}
        scrollZoom={true}
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        mapStyle="mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b"
        layers={layers}
        location={location}
      />
    </div>
  );
}
