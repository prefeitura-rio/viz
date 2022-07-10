import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import TripsMap from "../tripsmap";

const windowWidth = window.innerWidth;
const const_duration = 400;

export default class ScrollMap extends Component {
  render() {
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
    `;

    return (
      <TweenStyled>
        <div className="section" />
        <Controller>
          {/* first scene */}
          <div id="t1" />
          <Scene
            triggerElement="#t1"
            duration={const_duration}
            indicators={true}
          >
            {(progress, event) => (
              <TripsMap
                INITIAL_VIEW_STATE={{
                  longitude: -43.45938,
                  latitude: -22.94232,
                  zoom: 13 * progress,
                  pitch: 7.0,
                  bearing: 0.0,
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
}
