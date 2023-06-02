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
  // console.log(chapterNumberMap);-
  useEffect(() => {
    switch (chapterNumberMap) {
      case "capa":
        setPosition(chapterMap.Capa().location);
        setLayers(chapterMap.Capa().layers);
        break;
      case "intro":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "mapalinhas":
        setPosition(chapterMap.Linhas().location);
        setLayers(chapterMap.Linhas().layers);
        break;
      case "textomapalinhas":
        setPosition(chapterMap.Linhas().location);
        setLayers(chapterMap.Linhas().layers);
        break;
      case "historia-1":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "mapaum":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "textomapaum":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "mapadois":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "textomapadois":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "mapatres":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "textomapatres":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "antes":
        setPosition(chapterMap.Antes().location);
        setLayers(chapterMap.Antes().layers);
        break;
      case "depois":
        setPosition(chapterMap.Depois().location);
        setLayers(chapterMap.Depois().layers);
        break;
      case "mapapontos":
        setPosition(chapterMap.Pontos().location);
        setLayers(chapterMap.Pontos().layers);
        break;
      case "textomapapontos":
        setPosition(chapterMap.Pontos().location);
        setLayers(chapterMap.Pontos().layers);
        break;
      case "fim":
        setPosition(chapterMap.Depois().location);
        setLayers(chapterMap.Depois().layers);
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
      markers: true,
      scrub: true,
      // toggleActions: "play reverse play reverse",
    });

    const tl00 = gsap.timeline();
    tl00
      .set("#capa", { opacity: 0.9 })
      .to("#capa", { opacity: 0.9, duration: 30 })
      .to("#capa", { opacity: 0.9, duration: 6 })
      .to("#capa", { opacity: 0.9, duration: 10 })
      .to("#capa", { opacity: 0, duration: 6 })
      .to("#capa", { opacity: 0, duration: 38 });

    ScrollTrigger.create({
      animation: tl00,
      trigger: "#capa",
      onToggle: () => {
        setChapterNumberMap("capa");
      },
    });

    ScrollTrigger.create({
      trigger: "#intro",
      onToggle: () => {
        setChapterNumberMap("intro");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapalinhas",
      onToggle: () => {
        setChapterNumberMap("mapalinhas");
      },
    });

    ScrollTrigger.create({
      trigger: "#textomapalinhas",
      onToggle: () => {
        setChapterNumberMap("textomapalinhas");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapaum",
      onToggle: () => {
        setChapterNumberMap("mapaum");
      },
    });

    ScrollTrigger.create({
      trigger: "#textomapaum",
      onToggle: () => {
        setChapterNumberMap("textomapaum");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapadois",
      onToggle: () => {
        setChapterNumberMap("mapadois");
      },
    });

    ScrollTrigger.create({
      trigger: "#textomapadois",
      onToggle: () => {
        setChapterNumberMap("textomapadois");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapatres",
      onToggle: () => {
        setChapterNumberMap("mapatres");
      },
    });

    ScrollTrigger.create({
      trigger: "#textomapatres",
      onToggle: () => {
        setChapterNumberMap("textomapatres");
      },
    });

    ScrollTrigger.create({
      trigger: "#historia-1",
      onToggle: () => {
        setChapterNumberMap("historia-1");
      },
    });

    ScrollTrigger.create({
      trigger: "#virada",
      onToggle: () => {
        setChapterNumberMap("virada");
      },
    });

    ScrollTrigger.create({
      trigger: "#foco",
      onToggle: () => {
        setChapterNumberMap("foco");
      },
    });

    ScrollTrigger.create({
      trigger: "#antes",
      onToggle: () => {
        setChapterNumberMap("antes");
      },
    });

    ScrollTrigger.create({
      trigger: "#depois",
      onToggle: () => {
        setChapterNumberMap("depois");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapapontos",
      onToggle: () => {
        setChapterNumberMap("mapapontos");
      },
    });

    ScrollTrigger.create({
      trigger: "#textomapapontos",
      onToggle: () => {
        setChapterNumberMap("textomapapontos");
      },
    });

    ScrollTrigger.create({
      trigger: "#fim",
      onToggle: () => {
        setChapterNumberMap("fim");
      },
    });
  }, []);

  return (
    <>
      <MultilayerMap
        interactive={false}
        showLayers={true}
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
      <chapterDiv.Mapalinhas id={"mapalinhas"} />
      <chapterDiv.Textomapalinhas id={"textomapalinhas"} />
      <chapterDiv.Historia1 id={"historia-1"} />
      {/* <chapterDiv.Mapaum id={"mapaum"} />
      <chapterDiv.Textomapaum id={"textomapaum"} />
      <chapterDiv.Mapadois id={"mapadois"} />
      <chapterDiv.Textomapadois id={"textomapadois"} />
      <chapterDiv.Mapatres id={"mapatres"} />
      <chapterDiv.Textomapatres id={"textomapatres"} /> */}
      <chapterDiv.Virada id={"virada"} />
      <chapterDiv.Foco id={"foco"} />
      <chapterDiv.Antes id={"antes"} />
      <chapterDiv.Depois id={"depois"} />
      <chapterDiv.Mapapontos id={"mapapontos"} />
      <chapterDiv.Textomapapontos id={"textomapapontos"} />
      <chapterDiv.Fim id={"fim"} />
    </>
  );
}
