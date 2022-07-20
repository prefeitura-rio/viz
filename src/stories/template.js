import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { Timeline } from "react-gsap";

import ScrollMapboxGL from "../components/engine/scroll-mapbox-gl";
import busao from "../pages/especial-sppo/scroll-sppo/school-bus.png";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w";
const MAP_STYLE = "mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b";
const INTERACTIVE = false;
const windowWidth = window.innerWidth;

const MAP_CSS = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  zIndex: "-1",
};

const story = {
  chapters: [
    {
      id: "chapter-1",
      chapterType: "scrollmagic",
      text: "chapter-1",
      sectionDuration: 400,
      sectionOffset: -0,
      sectionPin: false,
      animation: {
        tween: (
          <Tween from={{ x: "0px" }} to={{ x: windowWidth * 0.97 }}>
            <img src={busao} alt="" />
          </Tween>
        ),
        divStyle: {
          marginTop: "50vh",
          height: "400px",
          backgroundColor: "gray",
          width: "100%",
          zIndex: "-1",
        },
      },
      //
      map: {
        desktop: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 9,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
        mobile: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 9,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
      },
    },
    {
      id: "chapter-2",
      chapterType: "scrollmagic",
      text: "chapter-2",
      sectionDuration: 400,
      sectionOffset: 0,
      sectionPin: false,
      animation: {
        tween: (
          <Tween from={{ x: "0px" }} to={{ x: windowWidth * 0.97 }}>
            <img src={busao} alt="" />
          </Tween>
        ),
        divStyle: {
          height: "400px",
          backgroundColor: "gray",
          width: "100%",
          // marginTop: "-50vh",
        },
      },
    },
  ],
};

export default function StorySample() {
  return (
    <ScrollMapboxGL
      interactive={INTERACTIVE}
      indicators={true}
      mapboxAccessToken={MAPBOX_TOKEN}
      mapStyle={MAP_STYLE}
      mapCSS={MAP_CSS}
      scrollZoom={false}
      story={story}
    />
  );
}
