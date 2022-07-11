import React, {
  Component,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Map from "react-map-gl";

const windowWidth = window.innerWidth;
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w";
export default function ScrollMapboxGL() {
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

  const TweenStyled = styled.div`
    .section {
      height: 50vh;
      background-color: #87c5f5;
    }

    .black-box {
      height: 100px;
      background-color: black;
    }

    .map {
      position: fixed,
      top: 0,
      left: 0,
      width: 100vw,
      height: 100vh
    }
  `;

  const cities = {
    sp: { lat: -23.5691, lon: -46.6474 },
    rj: { lat: -22.9121089, lon: -43.2301558 },
  };
  console.log(cities.sp.lon);

  const initialViewState = {
    latitude: cities.sp.lat,
    longitude: cities.sp.lon,
    zoom: 10,
    bearing: 0,
    pitch: 0,
  };

  const mapRef = useRef();

  const flyToNextStep = useCallback(() => {
    mapRef.current?.flyTo({
      center: [cities.rj.lon, cities.rj.lat],
      duration: 2000,
    });
  }, []);

  return (
    <TweenStyled>
      <Controller>
        <div className="section" id="section" />
        <div>
          <Map ref={mapRef} initialViewState={initialViewState} {...settings} />
        </div>
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
