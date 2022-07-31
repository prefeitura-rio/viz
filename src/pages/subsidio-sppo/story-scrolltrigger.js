// Mandatory
import { useEffect, useState, useRef } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

// Chapters
import * as chapterMap from "./chapters.map";
import * as chapterDiv from "./components/chapters";

// Scroll and animation stuff
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollTriggerSubsidioSPPO() {
  const [location, setLocation] = useState(chapterMap.One().location);

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
  // console.log(chapterNumberMap);
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

  const vh = (coef) => window.innerHeight * (coef / 100);
  const vw = (coef) => window.innerWidth * (coef / 100);

  useEffect(() => {
    ScrollTrigger.defaults({
      start: "top center",
      end: "bottom center",
      markers: true,
      scrub: true,
      // toggleActions: "play reverse play reverse",
    });
    ScrollTrigger.create({
      trigger: "#chapter-1",
      onToggle: () => {
        setChapterNumberMap(1);
      },
    });

    ScrollTrigger.create({
      trigger: "#chapter-2",
      onToggle: () => {
        setChapterNumberMap(2);
      },
    });

    ScrollTrigger.create({
      trigger: "#chapter-3",
      onToggle: () => {
        setChapterNumberMap(3);
      },
    });

    ScrollTrigger.create({
      trigger: "#chapter-4",
      onToggle: () => {
        setChapterNumberMap(4);
      },
    });

    ScrollTrigger.create({
      trigger: "#chapter-5",
      onToggle: () => {
        setChapterNumberMap(5);
      },
    });

    const tl6 = gsap.timeline();
    tl6
      .set("#chapter-6", { opacity: 0 })
      .to("#chapter-6", { opacity: 0, duration: 10 })
      .to("#chapter-6", { opacity: 1, duration: 30 })
      .to("#chapter-6", { opacity: 1, duration: 20 })
      .to("#chapter-6", { opacity: 0, duration: 30 })
      .to("#chapter-6", { opacity: 0, duration: 10 });

    ScrollTrigger.create({
      animation: tl6,
      trigger: "#chapter-6",
      onToggle: () => {
        setChapterNumberMap(6);
      },
      onUpdate: (self) => console.log("progress:", self.progress),
    });

    ScrollTrigger.create({
      trigger: "#chapter-7",
      // onUpdate: (self) => {
      //   animateChart();
      // },
    });
  }, []);

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
          // maxWidth: "100%",
          zIndex: "-1",
        }}
        animationLoopLength={21600}
        animationSpeed={1}
      />
      <chapterDiv.One id={"chapter-1"} />
      <chapterDiv.Two id={"chapter-2"} />
      <chapterDiv.Three id={"chapter-3"} />
      <chapterDiv.Four id={"chapter-4"} />
      <chapterDiv.Five id={"chapter-5"} />
      <chapterDiv.Six id={"chapter-6"} />
      <chapterDiv.Seven id={"chapter-7"} />
    </>
  );
}
