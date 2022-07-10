import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import busao from "./school-bus.png";
import TripsMap from "../tripsmap";

const windowWidth = window.innerWidth;
const const_duration = 400;

export default class ScrollSPPO extends Component {
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
            pin={true}
          >
            {(progress) => (
              <Timeline
                totalProgress={progress}
                paused
                wrapper={<div className="busao" />}
              >
                <Tween
                  from={{ x: "0px" }}
                  to={{ x: windowWidth }}
                  stagger={0.2}
                >
                  <img src={busao} alt="" />
                </Tween>
              </Timeline>
            )}
          </Scene>
          <div className="black-box" />
          {/* Second Scene */}
          <div id="t2" />
          <Scene
            triggerElement="#t2"
            duration={const_duration}
            indicators={true}
            pin={true}
          >
            {(progress) => (
              <Timeline
                totalProgress={progress}
                paused
                wrapper={<div className="busao" />}
              >
                <Tween from={{ x: "0px" }} to={{ x: windowWidth }}>
                  <img src={busao} alt="" />
                </Tween>
              </Timeline>
            )}
          </Scene>
          <div className="black-box" />

          <div className="section" />
        </Controller>
      </TweenStyled>
    );
  }
}
