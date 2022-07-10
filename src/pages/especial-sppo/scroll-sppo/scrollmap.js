// https://stackoverflow.com/questions/70666753/how-to-update-progress
import React, { Component, useState } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import TripsMap from "../tripsmap";

const windowWidth = window.innerWidth;
const const_duration = 400;

export default function ScrollMap() {
  const TweenStyled = styled.div`
    .section {
      height: 50vh;
      background-color: #87c5f5;
    }

    .black-box {
      height: 100px;
      background-color: black;
    }

    .busao {
      height: ${const_duration}px;
      // height: 100vh;
      background-color: #d5e8f7;
    }
    .map {
      height: 50vh;
    }
  }
  `;
  const [currentZoom, setCurrentZoon] = useState(10);

  const setZoom = (progress, initialZoom, finalZoom) => {
    var step = finalZoom - initialZoom;
    setCurrentZoon(initialZoom + step * progress);
  };

  const updateZoom = (progress, initialZoom, finalZoom) => {
    var step = finalZoom - initialZoom;
    return initialZoom + step * progress;
  };
  return (
    <TweenStyled>
      <div className="section" />
      <Controller>
        {/* first scene */}
        <div id="t1" />
        <Scene triggerElement="#t1" duration={const_duration} indicators={true}>
          {(progress, event) => (
            <TripsMap
              INITIAL_VIEW_STATE={{
                longitude: updateZoom(progress, -43.45938, -43.2301558),
                latitude: updateZoom(progress, -22.94232, -22.9121089),
                zoom: updateZoom(progress, 10, 15),
                pitch: updateZoom(progress, 7, 50),
                bearing: updateZoom(progress, 0, 30),
              }}
            />
          )}
        </Scene>
        <div className="black-box" />
        <div className="section" />
        <div className="section" />
        <div className="section" />
      </Controller>
    </TweenStyled>
  );
}
