import React, { useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import Map from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w";
const cities = {
  sp: { lat: -23.5691, lon: -46.6474 },
  rj: { lat: -22.9121089, lon: -43.2301558 },
};

const initialViewState = {
  latitude: cities.sp.lat,
  longitude: cities.sp.lon,
  zoom: 9,
  bearing: 0,
  pitch: 0,
};

export default function ScrollMapboxGL() {
  const TweenStyled = styled.div`
    .section {
      height: 50vh;
      background-color: #87c5f5;
    }

    .black-box {
      height: 100px;
      background-color: black;
    }
  `;
  const [settings, setSettings] = useState({
    scrollZoom: false,
    mapboxAccessToken: MAPBOX_TOKEN,
    mapStyle: "mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b",
    style: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
    },
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    touchPitch: true,
  });

  const updateSettings = useCallback(
    (name, value) =>
      setSettings((s) => ({
        ...s,
        [name]: value,
      })),
    []
  );

  const mapRef = useRef();
  const flyToNextStep = (viewState) => {
    mapRef.current?.flyTo(viewState);
  };

  return (
    <TweenStyled>
      <div className="section" id="section" />
      <Map ref={mapRef} initialViewState={initialViewState} {...settings} />
      <Controller>
        <Scene
          triggerElement="#t1"
          indicators={true}
          pin={{
            pushFollowers: false,
          }}
          duration={400}
        >
          {(progress, event) => (
            <h1 style={{ color: "#FFF", top: "50vh" }}>
              {progress}
              {" Scene 1"}
              {flyToNextStep({
                center: [cities.sp.lon, cities.sp.lat],
                zoom: 9,
                pitch: 0,
                bearing: 0,
                duration: 1000,
              })}
            </h1>
          )}
        </Scene>
        <div id="t1" />
        <Scene
          triggerElement="#t2"
          indicators={true}
          pin={{
            pushFollowers: false,
          }}
          duration={400}
        >
          {(progress, event) => (
            <h1 style={{ color: "#FFF", top: "50vh" }}>
              {progress}
              {" Scene 2"}
              {flyToNextStep({
                center: [cities.rj.lon, cities.rj.lat],
                zoom: 9,
                pitch: 40,
                bearing: 180,
                duration: 2000,
              })}
            </h1>
          )}
        </Scene>
        <div id="t2" />
        <Scene
          triggerElement="#t3"
          indicators={true}
          pin={{
            pushFollowers: false,
          }}
          duration={400}
        >
          {(progress, event) => (
            <h1 style={{ color: "#FFF", top: "50vh" }}>
              {progress}
              {" Scene 3"}
              {flyToNextStep({
                center: [cities.rj.lon, cities.rj.lat],
                zoom: 10,
                pitch: 30,
                bearing: 0,
                duration: 2000,
              })}
            </h1>
          )}
        </Scene>
        <div id="t3" />
        <Scene
          triggerElement="#t4"
          indicators={true}
          pin={{
            pushFollowers: false,
          }}
          duration={400}
        >
          {(progress, event) => (
            <h1 style={{ color: "#FFF", top: "50vh" }}>
              {progress}
              {" Scene 4"}
              {flyToNextStep({
                center: [cities.rj.lon, cities.rj.lat],
                zoom: 11,
                pitch: 0,
                duration: 2000,
              })}
            </h1>
          )}
        </Scene>
        <div id="t4" />
        <Scene
          triggerElement="#t5"
          indicators={true}
          pin={{
            pushFollowers: false,
          }}
          duration={400}
        >
          {(progress, event) => (
            <h1 style={{ color: "#FFF", top: "50vh" }}>
              {progress}
              {" Scene 5"}
              {flyToNextStep({
                center: [cities.sp.lon, cities.sp.lat],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                duration: 2000,
              })}
            </h1>
          )}
        </Scene>
        <div id="t5" className="section" />
        <div className="section" />
      </Controller>
      <div className="section" />{" "}
    </TweenStyled>
  );
}
