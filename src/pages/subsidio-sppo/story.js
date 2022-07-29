// Mandatory
import { useEffect, useState } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

// Scrollmagic
import { Controller, Scene } from "react-scrollmagic";

// Chapters
import * as chapter from "./chapters.map";
import * as card from "./components/cards";
import * as styles from "./chapters.style";

export default function SubsidioSPPO() {
  const [location, setLocation] = useState({
    desktop: {
      center: {
        lon: -43.17672,
        lat: -22.90574,
      },
      zoom: 14.57,
      pitch: 60.0,
      bearing: -151.1,
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

  const [layers, setLayers] = useState(chapter.One().layers);

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
  const [chapterNumberMap, setChapterNumberMap] = useState(0);

  useEffect(() => {
    switch (chapterNumberMap) {
      case 1:
        setPosition(chapter.One().location);
        setLayers(chapter.One().layers);
        break;
      case 2:
        setPosition(chapter.Two().location);
        setLayers(chapter.Two().layers);
        break;
      case 3:
        setPosition(chapter.Three().location);
        setLayers(chapter.Three().layers);
        break;
      case 4:
        setPosition(chapter.Four().location);
        setLayers(chapter.Four().layers);
        break;
      case 5:
        setPosition(chapter.Five().location);
        setLayers(chapter.Five().layers);
        break;
      case 6:
        setPosition(chapter.Six().location);
        setLayers(chapter.Six().layers);
        break;
      case 7:
        setPosition(chapter.Seven().location);
        setLayers(chapter.Seven().layers);
        break;
      case 8:
        setPosition(chapter.Eight().location);
        setLayers(chapter.Eight().layers);
        break;
      case 9:
        setPosition(chapter.Nine().location);
        setLayers(chapter.Nine().layers);
        break;
      case 10:
        setPosition(chapter.Ten().location);
        setLayers(chapter.Ten().layers);
        break;
      default:
        break;
    }
  }, [chapterNumberMap]);

  return (
    <>
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
        animationLoopLength={21600}
        animationSpeed={1}
      />
      <Controller>
        <styles.ChapterOneDiv id={"chapter-1"}>
          <Scene
            triggerElement={"#chapter-1"}
            indicators={true}
            pin={false}
            duration={"100%"}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>
                {event.type === "enter" && setChapterNumberMap(1)}
                <card.One id={"card-1"} />
              </>
            )}
          </Scene>
        </styles.ChapterOneDiv>

        <styles.ChapterGenericDiv id={"chapter-2"}>
          <Scene
            triggerElement={"#chapter-2"}
            indicators={true}
            pin={false}
            duration={"100%"}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>
                <>{event.type === "enter" && setChapterNumberMap(2)}</>
                <card.Two id={"card-2"} />
              </>
            )}
          </Scene>
        </styles.ChapterGenericDiv>

        <styles.ChapterGenericDiv id={"chapter-3"}>
          <Scene
            triggerElement={"#chapter-3"}
            indicators={true}
            pin={false}
            duration={"100%"}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>
                <>{event.type === "enter" && setChapterNumberMap(3)}</>
                <card.Three id={"card-3"} />
              </>
            )}
          </Scene>
        </styles.ChapterGenericDiv>

        <styles.ChapterGenericDiv id={"chapter-4"}>
          <Scene
            triggerElement={"#chapter-4"}
            indicators={true}
            pin={false}
            duration={"100%"}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>
                <>{event.type === "enter" && setChapterNumberMap(4)}</>
                <card.Four id={"card-4"} />
              </>
            )}
          </Scene>
        </styles.ChapterGenericDiv>

        <styles.ChapterGenericDiv id={"chapter-5"}>
          <Scene
            triggerElement={"#chapter-5"}
            indicators={true}
            pin={false}
            duration={"100%"}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>
                <>{event.type === "enter" && setChapterNumberMap(5)}</>
                <card.Five id={"card-5"} />
              </>
            )}
          </Scene>
        </styles.ChapterGenericDiv>

        <styles.ChapterSixDiv id={"chapter-6"}>
          <Scene
            triggerElement={"#chapter-6"}
            indicators={true}
            pin={false}
            duration={"100%"}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>
                <card.Six id={"card-6"} />
              </>
            )}
          </Scene>
        </styles.ChapterSixDiv>
      </Controller>
    </>
  );
}
