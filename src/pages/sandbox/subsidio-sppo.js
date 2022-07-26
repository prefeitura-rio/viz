// Mandatory
import { useState } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

// CSS
import styled from "styled-components";

// Scrollmagic
import { Controller, Scene } from "react-scrollmagic";

// For some custom layers
import { buildings3d } from "../../components/layers/buildings3d";
import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
const TRIPS = require("../especial-sppo/data/trips.json");

export default function SubsidioSPPO() {
  const [location, setLocation] = useState({
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
  });

  const [layers, setLayers] = useState([]);

  const setPosition = (position) => {
    const desktopPosition = position.desktop ? position.desktop : position;
    const mobilePosition = position.mobile ? position.mobile : position;

    setLocation({
      ...location,
      desktop: {
        ...desktopPosition,
      },
      mobile: {
        ...mobilePosition,
      },
    });
  };

  const ChapterOneDiv = styled.div`
    margin-top: 500px;
    height: 700px;
    width: 100%;
    background: #ffff;
    opacity: 0.3;
  `;
  const chapterOne = () => {
    setPosition({
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
          widthMinPixels: 5,
          fadeTrail: true,
          currentTime: 0,
          opacity: 1,
          rounded: true,
          trailLength: 500,
          shadowEnabled: false,
        }),
      },
    ]);
  };

  const chapterTwo = () => {
    setPosition({
      center: { lon: -43.20881, lat: -22.90198 },
      zoom: 16.74,
      pitch: 0.0,
      bearing: 0.0,
    });
    setLayers([
      {
        layerType: "mapbox",
        layer: { ...buildings3d },
      },
    ]);
  };

  const chapterThree = () => {
    setPosition({
      center: { lon: -43.39513, lat: -22.97986 },
      zoom: 12.5,
      pitch: 0.0,
      bearing: 0.0,
    });
    setLayers([
      {
        layerType: "mapbox-style",
        layer: {
          id: "linhasantigas",
        },
      },
    ]);
  };

  const chapterFour = () => {
    setPosition({
      center: { lon: -43.32934, lat: -22.87653 },
      zoom: 9.86,
      pitch: 0.0,
      bearing: 0.0,
      duration: 15000,
    });
    setLayers([
      {
        layerType: "reuse",
        layer: {
          id: "my-trips-layer",
        },
      },
    ]);
  };

  return (
    <div id="main-container">
      <MultilayerMap
        interactive={false}
        scrollZoom={true}
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        mapStyle="mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b"
        layers={layers}
        location={location}
        mapCSS={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          zIndex: "-1",
        }}
      />
      <Controller>
        <ChapterOneDiv id={"chapter-1"}>
          <Scene
            triggerElement={"#chapter-1"}
            indicators={true}
            pin={false}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => <>{event.type === "enter" && chapterOne()}</>}
          </Scene>
        </ChapterOneDiv>
      </Controller>
      {/* <button onClick={chapterOne}>Chapter 1</button>
      <button onClick={chapterTwo}>Chapter 2</button>
      <button onClick={chapterThree}>Chapter 3</button>
      <button onClick={chapterFour}>Chapter 4</button> */}
    </div>
  );
}
