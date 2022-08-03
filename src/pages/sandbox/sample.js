import { Fragment } from "react";
import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";
import { Tween } from "react-gsap";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import styled from "styled-components";

import ScrollMapboxGL from "../../components/engine/scroll-mapbox-gl";
import busao from "../subsidio-sppo/images/school-bus.png";

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

const DivChapter2 = styled.div`
  height: 1900px;
  width: 100 %;
  // text-align: center;
  // font-weight: 700;
  // font-size: 1.9rem;
`;

const chapterIndicator = styled.div`
  position: absolute;
  background: #01baef;
  text-align: "left";
  font-size: 1.5rem;
  color: #cfe795;
  z-index: 1;
  // top: 0;
  // left: 0;
`;

const getTweenBlock = (props = { nBlocks: 1, duration: 0.01, position: 0 }) => {
  // iterate over the number of blocks and return a tween for each one
  const { nBlocks, duration, position } = props;
  const tweenBlocks = [];
  for (let i = 0; i < nBlocks; i++) {
    tweenBlocks.push(
      <Tween
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        position={position}
        duration={duration}
      >
        <Block>{i}</Block>
      </Tween>
    );
  }
  return tweenBlocks;
};

const Block = styled.div`
  // text-align: center;
  width: 50px;
  height: 50px;
  background: #ffffff;
  color: #000000;
  border-radius: 10px;
  margin: 5px;
`;

const DivChapter1 = styled.div`
  margin-top: 50vh;
  height: 1200px;
  width: 100%;
  background: #232323;

  // align-items: center;
  // justify-content: center;
  text-align: center;
  // display: inline-block;

  // font-weight: 700;
  // font-size: 1.9rem;
  color: #e2856e;
`;

const MinutesText = styled.h1`
  // justify-content: center;
  // text-align: center;
  // font-family: Poppins;
  // position: absolute;
  // display: inline-block;
  font-weight: 1000;
  font-size: 4.5rem;
  color: #f6ae2d;
  background: #7f96ff;
`;

const story = {
  chapters: [
    {
      id: "chapter-1",
      chapterType: "scrollmagic",
      text: {
        value: "CHAPTER 1",
        style: chapterIndicator,
        sectionDuration: 1000,
        sectionPin: true,
        sectionOffset: 100,
      },
      sectionDuration: 300,
      sectionOffset: 100,
      sectionPin: true,
      sectionReverse: true,
      chapterDiv: DivChapter1,
      animation: {
        targets: [
          <MinutesText>1 minuto</MinutesText>,
          // <MinutesText>092309 minutos</MinutesText>,
        ],
        tweens: [
          <Tween duration={100}></Tween>,
          <Tween
            target={0}
            // ease={"power4.out"}
            from={{ opacity: 0, y: 0 }}
            to={{ opacity: 1, y: 0 }}
            position={0}
            duration={1}
          ></Tween>,
          ...getTweenBlock({ nBlocks: 1, position: 0, duration: 10 }),
        ]
          .concat([
            // 5 minutes
            ...getTweenBlock({ nBlocks: 1, position: 10, duration: 30 }),
            <Tween
              text={"5 minutos"}
              // ease={"power4.out"}
              from={{ opacity: 0, y: 0 }}
              to={{ opacity: 1, y: 0 }}
              // target={1}
              position={10}
              duration={30}
            ></Tween>,
          ])
          .concat([
            // 5 minutes
            ...getTweenBlock({ nBlocks: 1, position: 20, duration: 20 }),
            // <Tween
            //   text={"10 minutos"}
            //   // ease={"power4.out"}
            //   from={{ opacity: 0, y: 0 }}
            //   to={{ opacity: 1, y: 0 }}
            //   // target={1}
            //   position={20}
            //   duration={0}
            // ></Tween>,
          ])
          .concat([
            // 5 minutes
            ...getTweenBlock({ nBlocks: 1, position: 10, duration: 30 }),
            // <Tween
            //   text={"20 minutos"}
            //   // ease={"power4.out"}
            //   from={{ opacity: 0, y: 0 }}
            //   to={{ opacity: 1, y: 0 }}
            //   // target={0}
            //   position={10}
            //   duration={0}
            // ></Tween>,
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
    {
      id: "chapter-2",
      chapterType: "map",
      text: {
        value: "CHAPTER 2",
        style: chapterIndicator,
        sectionDuration: 600,
        sectionPin: true,
        sectionOffset: 0,
      },
      sectionDuration: 600,
      sectionOffset: 0,
      sectionPin: true,
      chapterDiv: DivChapter2,
      layers: [
        {
          layerType: "reuse",
          layer: {
            id: "linhasantigas",
          },
        },
      ],
      map: {
        desktop: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 15,
          bearing: 0,
          pitch: 0,
          duration: 4000,
        },
        mobile: {
          center: {
            lat: -22.9121089,
            lon: -43.2301558,
          },
          zoom: 15,
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
