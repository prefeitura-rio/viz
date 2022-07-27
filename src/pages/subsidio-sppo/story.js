// Mandatory
import { useEffect, useState } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

// Scrollmagic
import { Controller, Scene } from "react-scrollmagic";

import { chapterOne, chapterTwo, chapterThree, chapterFour } from "./chapters";
import {
  ChapterOneDiv,
  ChapterTwoDiv,
  ChapterThreeDiv,
  ChapterFourDiv,
  TextStyleIndicator,
} from "./chapters.style";

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

  const [chapterNumber, setChapterNumber] = useState(0);

  useEffect(() => {
    switch (chapterNumber) {
      case 1:
        setPosition(chapterOne().location);
        setLayers(chapterOne().layers);
        break;
      case 2:
        setPosition(chapterTwo().location);
        setLayers(chapterTwo().layers);
        break;
      case 3:
        setPosition(chapterThree().location);
        setLayers(chapterThree().layers);
        break;
      case 4:
        setPosition(chapterFour().location);
        setLayers(chapterFour().layers);
        break;
      default:
        break;
    }
  }, [chapterNumber]);

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
            pin={true}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>{event.type === "enter" && setChapterNumber(1)}</>
            )}
          </Scene>
          <Scene
            triggerElement={"#chapter-1"}
            indicators={true}
            pin={true}
            duration={700}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <TextStyleIndicator>CAPITULO 1</TextStyleIndicator>
            )}
          </Scene>
        </ChapterOneDiv>
        <ChapterTwoDiv id={"chapter-2"}>
          <Scene
            triggerElement={"#chapter-2"}
            indicators={true}
            pin={false}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>{event.type === "enter" && setChapterNumber(2)}</>
            )}
          </Scene>
          <Scene
            triggerElement={"#chapter-2"}
            indicators={true}
            pin={true}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <TextStyleIndicator>CAPITULO 2</TextStyleIndicator>
            )}
          </Scene>
        </ChapterTwoDiv>

        <ChapterThreeDiv id={"chapter-3"}>
          <Scene
            triggerElement={"#chapter-3"}
            indicators={true}
            pin={false}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>{event.type === "enter" && setChapterNumber(3)}</>
            )}
          </Scene>
          <Scene
            triggerElement={"#chapter-3"}
            indicators={true}
            pin={true}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <TextStyleIndicator>CAPITULO 3</TextStyleIndicator>
            )}
          </Scene>
        </ChapterThreeDiv>

        <ChapterFourDiv id={"chapter-4"}>
          <Scene
            triggerElement={"#chapter-4"}
            indicators={true}
            pin={false}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>{event.type === "enter" && setChapterNumber(4)}</>
            )}
          </Scene>
          <Scene
            triggerElement={"#chapter-4"}
            indicators={true}
            pin={true}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <TextStyleIndicator>CAPITULO 4</TextStyleIndicator>
            )}
          </Scene>
        </ChapterFourDiv>
      </Controller>
    </div>
  );
}
