// Mandatory
import { useEffect, useState } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";

// Scroll and animation stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger);

export default function SubsidioSPPO() {
  const [location, setLocation] = useState(chapterMap.Capa().location);

  const [layers, setLayers] = useState(chapterMap.Capa().layers);
  // console.log("ChapterLayers", layers);

  const [chartProgress, setChartProgress] = useState(0);

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
      case "capa":
        setPosition(chapterMap.Capa().location);
        setLayers(chapterMap.Capa().layers);
        break;
      case "intro":
        setPosition(chapterMap.Capa().location);
        setLayers(chapterMap.Capa().layers);
        break;
      case "sepetiba-bairro":
        setPosition(chapterMap.SepetibaBairro().location);
        setLayers(chapterMap.SepetibaBairro().layers);
        break;
      case "sepetiba-linhas":
        setPosition(chapterMap.SepetibaLinhas().location);
        setLayers(chapterMap.SepetibaLinhas().layers);
        break;
      case "cx-grafico-1":
        setPosition(chapterMap.CxGrafico1().location);
        setLayers(chapterMap.CxGrafico1().layers);
        break;
      case "creditos":
        setPosition(chapterMap.Creditos().location);
        setLayers(chapterMap.Creditos().layers);
        break;
      default:
        break;
    }
  }, [chapterNumberMap]);

  const vh = (coef) => window.innerHeight * (coef / 100);
  const vw = (coef) => window.innerWidth * (coef / 100);

  useEffect(() => {
    gsap.defaults({ ease: "none" });

    ScrollTrigger.defaults({
      start: "top center",
      end: "bottom center",
      markers: false,
      scrub: true,
      // toggleActions: "play reverse play reverse",
    });

    ScrollTrigger.create({
      trigger: "#capa",
      onToggle: () => {
        setChapterNumberMap("capa");
      },
    });

    const tl2 = gsap.timeline();
    tl2
      .set("#intro", { opacity: 0 })
      .to("#intro", { opacity: 0, duration: 30 })
      .to("#intro", { opacity: 1, duration: 6 })
      .to("#intro", { opacity: 1, duration: 20 })
      .to("#intro", { opacity: 0, duration: 6 })
      .to("#intro", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl2,
      trigger: "#intro",
      onToggle: () => {
        setChapterNumberMap("intro");
      },
    });

    ScrollTrigger.create({
      trigger: "#sepetiba-bairro",
      onToggle: () => {
        setChapterNumberMap("sepetiba-bairro");
      },
    });

    ScrollTrigger.create({
      trigger: "#sepetiba-linhas",
      onToggle: () => {
        setChapterNumberMap("sepetiba-linhas");
      },
    });

    const tl7 = gsap.timeline();
    tl7
      .set("#cx-intro", { opacity: 0 })
      .to("#cx-intro", { opacity: 0, duration: 30 })
      .to("#cx-intro", { opacity: 1, duration: 6 })
      .to("#cx-intro", { opacity: 1, duration: 20 })
      .to("#cx-intro", { opacity: 0, duration: 6 })
      .to("#cx-intro", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl7,
      trigger: "#cx-intro",
      onToggle: () => {
        setChapterNumberMap("cx-intro");
      },
    });

    ScrollTrigger.create({
      trigger: "#cx-grafico-1",
      scrub: true,
      onEnter: (self) => {
        setChartProgress(self.progress + 0.47);
      },
      // onUpdate: (self) => console.log("progress:", self.progress),
    });

    const tl9 = gsap.timeline();
    tl9
      .set("#cx-creditos", { opacity: 0 })
      .to("#cx-creditos", { opacity: 0, duration: 30 })
      .to("#cx-creditos", { opacity: 1, duration: 6 })
      .to("#cx-creditos", { opacity: 1, duration: 20 })
      .to("#cx-creditos", { opacity: 1, duration: 6 })
      .to("#cx-creditos", { opacity: 1, duration: 28 });

    ScrollTrigger.create({
      animation: tl9,
      trigger: "#cx-creditos",
      onToggle: () => {
        setChapterNumberMap(6);
      },
    });
  }, []);

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
          width: "100%",
          height: "100%",
          // maxWidth: "100%",
          zIndex: "-9999",
        }}
        animationLoopLength={21600}
        animationSpeed={1}
      />
      <chapterDiv.Capa id={"capa"} />
      <chapterDiv.Intro id={"intro"} />
      <chapterDiv.SepetibaBairro id={"sepetiba-bairro"} />
      <chapterDiv.SepetibaLinhas id={"sepetiba-linhas"} />
      <chapterDiv.CxIntro id={"cx-intro"} />
      {/* <chapterDiv.CxGrafico1 id={"cx-grafico-1"} /> */}
      <chapterDiv.Creditos id={"cx-creditos"} />
    </>
  );
}
