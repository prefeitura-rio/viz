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
        lon: -43.18228,
        lat: -22.90825,
      },
      zoom: 14.96,
      pitch: 60.0,
      bearing: -146.41,
      duration: 2000,
    },
    mobile: {
      center: {
        lon: -43.18228,
        lat: -22.90825,
      },
      zoom: 14.96,
      pitch: 60.0,
      bearing: -146.41,
      duration: 2000,
    },
  });

  const [layers, setLayers] = useState(chapterMap.One().layers);

  const [chartProgress, setChartProgress] = useState(0);

  const animateChart = () => {
    setChartProgress(0);
    var growProgress = setInterval(() => {
      setChartProgress((progress) => progress + 0.01);
    }, 20); // increase 1% every 20ms
    setTimeout(() => {
      clearInterval(growProgress);
    }, 5000); // 5 seconds (make sure it's over)
  };

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
  console.log(chapterNumberMap, layers);
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
        interactive={true}
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
            <chapterDiv.Six id={"chapter-6"} progress={progress}>
              <>{event.type === "enter" && setChapterNumberMap(6)}</>
            </chapterDiv.Six>
          )}
        </Scene>

        <Scene
          triggerElement={"#chapter-7"}
          indicators={true}
          pin={false}
          duration={"100%"}
          offset={0}
          reverse={true}
        >
          {(progress, event) => (
            <>
              {/* Para crescer o gráfico com scroll */}
              {/* <chapterDiv.Seven
                id={"chapter-7"}
                progress={progress + 0.5}
              ></chapterDiv.Seven> */}
              {/* Para crescer o gráfico de uma vez */}
              <>{event.type === "enter" && animateChart()}</>
              <chapterDiv.Seven
                id={"chapter-7"}
                progress={chartProgress}
              ></chapterDiv.Seven>{" "}
            </>
          )}
        </Scene>
      </Controller>
    </>
  );
}
