import { Fragment } from "react";
import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { Tween } from "react-gsap";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import ScrollMapboxGL from "../components/engine/scroll-mapbox-gl";
import busao from "../pages/especial-sppo/scroll-sppo/school-bus.png";

gsap.registerPlugin(TextPlugin);

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

const block = (
  <div
    style={{
      display: "inline-block",
      width: "50px",
      height: "50px",
      background: "#FFFFFF",
      borderRadius: "12px",
      margin: "10px",
    }}
  ></div>
);

const getTweenBlock = (position) => {
  return (
    <Tween
      from={{ x: windowWidth * 0.07, y: 0, opacity: 0 }}
      to={{ opacity: 1 }}
      position={position}
      duration={0.1}
    >
      {block}
    </Tween>
  );
};

const textStyle = {
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "1.4rem",
  fontStyle: "normal",
  color: "#FFFFFF",
};

const story = {
  chapters: [
    {
      id: "chapter-1",
      chapterType: "scrollmagic",
      text: "",
      sectionDuration: 2000,
      sectionOffset: 200,
      sectionPin: true,
      sectionReverse: true,
      divStyle: {
        marginTop: "50vh",
        height: "3000px",
        backgroundColor: "#232323",
        width: "100%",
      },
      animation: {
        targets: [<div style={textStyle}>1 minuto</div>],

        tweens: [
          getTweenBlock(0),
          <Tween
            from={{ x: windowWidth * 0.5, y: 200, opacity: 0 }}
            to={{ opacity: 1 }}
            target={0}
            duration={0.25}
            position={0}
          ></Tween>,
        ]
          .concat([
            // 5 minutes
            getTweenBlock(0.1),
            getTweenBlock(0.1),
            getTweenBlock(0.1),
            getTweenBlock(0.1),
            <Tween
              // from={{ x: windowWidth * 0.5, y: 180, opacity: 0 }}
              to={{ text: "5 minutos" }}
              target={0}
              position={0.1}
              duration={0}
            ></Tween>,
          ])
          .concat([
            // 10 minutes
            getTweenBlock(0.2),
            getTweenBlock(0.2),
            getTweenBlock(0.2),
            getTweenBlock(0.2),
            getTweenBlock(0.2),
            <Tween
              // from={{ x: windowWidth * 0.5, y: 180, opacity: 0 }}
              to={{ text: "10 minutos" }}
              target={0}
              position={0.2}
              duration={0}
            ></Tween>,
          ])
          .concat([
            // 20 minutes
            getTweenBlock(0.3),
            getTweenBlock(0.3),
            getTweenBlock(0.3),
            getTweenBlock(0.3),
            getTweenBlock(0.3),
            getTweenBlock(0.3),
            getTweenBlock(0.3),
            getTweenBlock(0.3),
            getTweenBlock(0.3),
            getTweenBlock(0.3),

            <Tween
              // from={{ x: windowWidth * 0.5, y: 180, opacity: 0 }}
              to={{ text: "20 minutos" }}
              target={0}
              position={0.3}
              duration={0}
            ></Tween>,
          ])
          .concat([
            <Tween
              // from={{ x: windowWidth * 0.5, y: 180, opacity: 0 }}
              to={{ text: "20 minutos = 20 sinais" }}
              target={0}
              position={0.4}
              duration={0.05}
            ></Tween>,
          ])
          .concat([
            <Tween
              // from={{ x: windowWidth * 0.5, y: 180, opacity: 0 }}
              to={{ text: "50% dos sinais = 10 sinais" }}
              target={0}
              position={0.5}
              duration={0.1}
            ></Tween>,
          ])
          .concat([
            <Tween
              // from={{ x: windowWidth * 0.5, y: 180, opacity: 0 }}
              to={{ text: "menos de 50% dos sinais" }}
              target={0}
              position={0.6}
              duration={0.1}
            ></Tween>,
          ])
          .concat([
            <Tween
              from={{ x: windowWidth * 0.5, y: 180, opacity: 0 }}
              to={{ text: "" }}
              target={0}
              position={0.7}
              duration={0.1}
            ></Tween>,
          ])
          .concat([
            <Tween
              from={{ x: windowWidth * 0.5, y: 180, opacity: 0 }}
              to={{ text: "500 metros" }}
              target={0}
              position={0.8}
              duration={0.1}
            ></Tween>,
          ])
          .concat([
            <Tween
              from={{ x: windowWidth * 0.5, y: 180, opacity: 0 }}
              to={{ text: "80% dos sianais = 16 sinais" }}
              target={0}
              position={0.9}
              duration={0.1}
            ></Tween>,
          ])
          .concat([
            <Tween
              from={{ x: windowWidth * 0.5, y: 180, opacity: 0 }}
              to={{ text: "menos de 80% dos sinais" }}
              target={0}
              position={1}
              duration={0.1}
            ></Tween>,
          ]),
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
