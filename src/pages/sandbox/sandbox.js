import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import DeckGL from "@deck.gl/react";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const INITIAL_VIEW_STATE = {
  longitude: -43.45938,
  latitude: -22.94232,
  zoom: 10.67,
  pitch: 7.0,
  bearing: 0.0,
};
const MAP_STYLE = "mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b";
const MAPBOX_API_TOKEN =
  "pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w";

const TweenStyled = styled.div`
  .section {
    height: 50vh;
  }
`;

export default function Sandbox() {
  return (
    <TweenStyled>
      <Controller>
        <div className="section" id="section" />
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
          }}
        >
          <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={false}>
            <Map mapStyle={MAP_STYLE} mapboxAccessToken={MAPBOX_API_TOKEN} />
          </DeckGL>
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
