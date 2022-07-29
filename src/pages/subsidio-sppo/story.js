// Mandatory
import { useEffect, useState } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
// Scrollmagic
import { Controller, Scene } from "react-scrollmagic";

// Chapters
import * as chapterMap from "./chapters.map";
import * as chapterDiv from "./components/chapters";

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

  const [layers, setLayers] = useState(chapterMap.One().layers);

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
        setPosition(chapterMap.One().location);
        setLayers(chapterMap.One().layers);
        break;
      case 2:
        setPosition(chapterMap.Two().location);
        setLayers(chapterMap.Two().layers);
        break;
      case 3:
        setPosition(chapterMap.Three().location);
        setLayers(chapterMap.Three().layers);
        break;
      case 4:
        setPosition(chapterMap.Four().location);
        setLayers(chapterMap.Four().layers);
        break;
      case 5:
        setPosition(chapterMap.Five().location);
        setLayers(chapterMap.Five().layers);
        break;
      case 6:
        setPosition(chapterMap.Six().location);
        setLayers(chapterMap.Six().layers);
        break;
      case 7:
        setPosition(chapterMap.Seven().location);
        setLayers(chapterMap.Seven().layers);
        break;
      case 8:
        setPosition(chapterMap.Eight().location);
        setLayers(chapterMap.Eight().layers);
        break;
      case 9:
        setPosition(chapterMap.Nine().location);
        setLayers(chapterMap.Nine().layers);
        break;
      case 10:
        setPosition(chapterMap.Ten().location);
        setLayers(chapterMap.Ten().layers);
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
              <chapterDiv.One id={"chapter-1"} />
            </>
          )}
        </Scene>

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
              <chapterDiv.Two id={"chapter-2"} />
            </>
          )}
        </Scene>

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
              <chapterDiv.Three id={"chapter-3"} />
            </>
          )}
        </Scene>

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
              <chapterDiv.Four id={"chapter-4"} />
            </>
          )}
        </Scene>

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
              <chapterDiv.Five id={"chapter-5"} />
            </>
          )}
        </Scene>

        <Scene
          triggerElement={"#chapter-6"}
          indicators={true}
          pin={false}
          duration={"100%"}
          offset={0}
          reverse={true}
        >
          {(progress, event) => (
            <Timeline totalProgress={progress} paused>
              <Tween
                // ease={"power4.out"}
                from={{ opacity: 1 }}
                to={{ opacity: 0 }}
                position={0}
                duration={1}
              >
                <chapterDiv.Six id={"chapter-6"}>
                  <>{event.type === "enter" && setChapterNumberMap(6)}</>
                </chapterDiv.Six>
              </Tween>
            </Timeline>
          )}
        </Scene>
      </Controller>
    </>
  );
}
