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
    mapStyle: "mapbox://styles/mapbox/light-v9",
    style: { width: "100%", height: "500px" },
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

    .map-container {
      height: 400px;
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
      <div className="section" />
      <Map
        ref={mapRef}
        initialViewState={initialViewState}
        {...settings}
        onLoad={flyToNextStep}
      />
      <Controller>
        <div id="t1" />
        <Scene
          triggerElement="#t1"
          duration={500}
          indicators={true}
          pin={true}
          offset={-500}
        >
          {(progress) => (
            <Timeline totalProgress={progress} paused>
              {/* <Tween>to={flyToNextStep}</Tween> */}
            </Timeline>
          )}
        </Scene>

        <div className="black-box" />
        <div className="section" />
      </Controller>
    </TweenStyled>
  );
}
