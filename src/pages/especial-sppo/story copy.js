import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import ScrollMapboxGL from "../../components/engine/scroll-mapbox-gl";
import { Tween } from "react-gsap";
import busao from "./scroll-sppo/school-bus.png";
import styled from "styled-components";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w";
const MAP_STYLE = "mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b";

const TRIPS = require("./data/trips.json");
const TRAIL_LENGTH = 400;
const windowWidth = window.innerWidth;

const buildings3d = {
  id: "3d-buildings",
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
      ["get", "height"],
    ],
    "fill-extrusion-base": [
      "interpolate",
      ["linear"],
      ["zoom"],
      5,
      0,
      10.05,
      ["get", "min_height"],
    ],
    "fill-extrusion-opacity": 1,
  },
};

const MAP_CSS = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  zIndex: "-1",
};

const textStyleIndicator = styled.div`
  position: absolute;
  background: #01baef;
  text-align: "left";
  font-size: 1.5rem;
  color: #cfe795;
  opacity: 1;
  z-index: 1;
  // top: 0;
  // left: 0;
`;

const story = {
  animationSpeed: 3,
  animationLoopLength: 28000,
  chapters: [
    {
      id: "chapter-1",
      chapterType: "map",
      text: {
        value: "CHAPTER 1",
        style: textStyleIndicator,
        sectionDuration: 700,
        sectionPin: true,
        sectionOffset: 0,
      },
      sectionDuration: 600,
      sectionOffset: 0,
      sectionPin: false,
      chapterDiv: styled.div`
        margin-top: 400px;
        height: 700px;
        width: 100%;
        background: #000000;
        opacity: 0.3;
      `,
      layers: [
        {
          layerType: "mapbox",
          layer: { ...buildings3d },
        },
      ],
      map: {
        desktop: {
          center: {
            lon: -43.19101,
            lat: -22.89337,
          },
          zoom: 15.82,
          pitch: 60.0,
          bearing: 117.58,
          duration: 4000,
        },
        mobile: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 15,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
      },
    },
    {
      id: "chapter-2",
      chapterType: "map",
      text: {
        value: "CHAPTER 2",
        style: textStyleIndicator,
        sectionDuration: "100%",
        sectionPin: true,
        sectionOffset: 0,
      },
      sectionDuration: "100%",
      sectionOffset: 0,
      sectionPin: false,
      chapterDiv: styled.div`
        height: 100vh;
        width: 100%;
      `,

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
            trailLength: TRAIL_LENGTH,
            shadowEnabled: false,
          }),
        },
        {
          layerType: "reuse",
          layer: {
            id: "3d-buildings",
          },
        },
      ],
      map: {
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
    },
    {
      id: "chapter-3",
      chapterType: "map",
      text: {
        value: "CHAPTER 3",
        style: textStyleIndicator,
        sectionDuration: 400,
        sectionPin: true,
        sectionOffset: 0,
      },
      sectionDuration: 400,
      sectionOffset: 0,
      sectionPin: false,
      chapterDiv: styled.div`
        height: 400px;
        width: 100%;
      `,
      layers: [
        {
          layerType: "reuse",
          layer: {
            id: "3d-buildings",
          },
        },
      ],
      map: {
        desktop: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 15,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
        mobile: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 15,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
      },
    },
    {
      id: "chapter-4",
      chapterType: "map",
      text: {
        value: "CHAPTER 4",
        style: textStyleIndicator,
        sectionDuration: 600,
        sectionPin: true,
        sectionOffset: 0,
      },
      sectionDuration: 600,
      sectionOffset: 0,
      sectionPin: false,
      chapterDiv: styled.div`
        height: 600px;
        width: 100%;
      `,
      layers: [
        {
          layerType: "mapbox-style",
          layer: { id: "linhasantigas" },
        },
      ],
      map: {
        desktop: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 15,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
        mobile: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 15,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
      },
    },
    {
      id: "chapter-5",
      chapterType: "map",
      text: {
        value: "CHAPTER 5",
        style: textStyleIndicator,
        sectionDuration: 400,
        sectionPin: true,
        sectionOffset: 0,
      },
      sectionDuration: 400,
      sectionOffset: 0,
      sectionPin: false,
      chapterDiv: styled.div`
        height: 900px;
        width: 100%;
      `,
      layers: [
        {
          layerType: "reuse",
          layer: {
            id: "my-trips-layer",
          },
        },
      ],
      map: {
        desktop: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 12,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
        mobile: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 12,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
      },
    },
  ],
};

export default function StorySPPO() {
  return (
    <ScrollMapboxGL
      interactive={true}
      indicators={true}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle={MAP_STYLE}
      mapCSS={MAP_CSS}
      scrollZoom={true}
      story={story}
    />
  );
}
