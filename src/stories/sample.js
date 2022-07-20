import { Fragment } from "react";
import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { Tween } from "react-gsap";

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
      sectionDuration: "50%",
      sectionOffset: -0,
      sectionPin: false,
      divStyle: {
        marginTop: "50vh",
        height: "50vh",
        backgroundColor: "#232323",
        width: "100%",
      },
      animation: {
        targets: [],
        tweens: [
          <Tween to={{ x: windowWidth * 0.5 }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                background: "#FFFFFF",
                borderRadius: "12px",
                margin: "10px",
              }}
            ></div>
            <div
              style={{
                width: "50px",
                height: "50px",
                background: "#FFFFFF",
                borderRadius: "12px",
                margin: "10px",
              }}
            ></div>
            <div
              style={{
                width: "50px",
                height: "50px",
                background: "#FFFFFF",
                borderRadius: "12px",
                margin: "10px",
              }}
            ></div>
          </Tween>,
        ],
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
      sectionOffset: -0,
      sectionPin: false,
      divStyle: {
        height: "400px",
        backgroundColor: "gray",
        width: "100%",
      },
      animation: {
        targets: [],
        tweens: [
          <div
            style={{
              width: "200px",
              height: "200px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Tween
              from={{ scale: 0.1 }}
              stagger={{ from: "center", amount: 1, grid: [3, 3] }}
              duration={1}
              ease="elastic.out(2, 0.5)"
            >
              <div
                style={{
                  width: "33.33%",
                  height: "33.33%",
                  background: "#ccc",
                }}
              />
              <div
                style={{
                  width: "33.33%",
                  height: "33.33%",
                  background: "#ccc",
                }}
              />
              <div
                style={{
                  width: "33.33%",
                  height: "33.33%",
                  background: "#ccc",
                }}
              />
              <div
                style={{
                  width: "33.33%",
                  height: "33.33%",
                  background: "#ccc",
                }}
              />
              <div
                style={{
                  width: "33.33%",
                  height: "33.33%",
                  background: "#ccc",
                }}
              />
              <div
                style={{
                  width: "33.33%",
                  height: "33.33%",
                  background: "#ccc",
                }}
              />
              <div
                style={{
                  width: "33.33%",
                  height: "33.33%",
                  background: "#ccc",
                }}
              />
              <div
                style={{
                  width: "33.33%",
                  height: "33.33%",
                  background: "#ccc",
                }}
              />
              <div
                style={{
                  width: "33.33%",
                  height: "33.33%",
                  background: "#ccc",
                }}
              />
            </Tween>
          </div>,
        ],
      },
    },
    {
      id: "chapter-3",
      chapterType: "scrollmagic",
      text: "chapter-3",
      sectionDuration: 400,
      sectionOffset: 0,
      sectionPin: false,
      divStyle: {
        height: "400px",
        backgroundColor: "gray",
        width: "100%",
        marginTop: "50vh",
      },
      animation: {
        targets: [],
        tweens: [
          <Tween from={{ x: "0px" }} to={{ x: windowWidth * 0.97 }}>
            <img src={busao} alt="" />
          </Tween>,
        ],
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
