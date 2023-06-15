// Mandatory
import { useEffect, useState, useRef } from "react";
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
  const [chapterNumberMap, setChapterNumberMap] = useState("capa");
  // console.log(chapterNumberMap);
  useEffect(() => {
    switch (chapterNumberMap) {
      case "capa":
        setPosition(chapterMap.Capa().location);
        setLayers(chapterMap.Capa().layers);
        break;
      case "intro":
        setPosition(chapterMap.Intro().location);
        setLayers(chapterMap.Intro().layers);
        break;
      case "mapaobras":
        setPosition(chapterMap.Mapaobras().location);
        setLayers(chapterMap.Mapaobras().layers);
        break;
      case "textoobras":
        setPosition(chapterMap.Mapaobras().location);
        setLayers(chapterMap.Mapaobras().layers);
        break;
      case "mapanorte":
        setPosition(chapterMap.Mapanorte().location);
        setLayers(chapterMap.Mapanorte().layers);
        break;
      case "textonorte":
        setPosition(chapterMap.Mapanorte().location);
        setLayers(chapterMap.Mapanorte().layers);
        break;
      case "mapaoeste":
        setPosition(chapterMap.Mapaoeste().location);
        setLayers(chapterMap.Mapaoeste().layers);
        break;
      case "textooeste":
        setPosition(chapterMap.Mapaoeste().location);
        setLayers(chapterMap.Mapaoeste().layers);
        break;
      case "oeste":
        setPosition(chapterMap.Oeste().location);
        setLayers(chapterMap.Oeste().layers);
        break;
      case "prejuizo":
        setPosition(chapterMap.Prejuizo().location);
        setLayers(chapterMap.Prejuizo().layers);
        break;
      case "fim":
        setPosition(chapterMap.Fim().location);
        setLayers(chapterMap.Fim().layers);
        break;
      case "creditos":
        setPosition(chapterMap.Fim().location);
        setLayers(chapterMap.Fim().layers);
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
      .set("#intro", { opacity: 1 })
      .to("#intro", { opacity: 1, duration: 30 })
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
      trigger: "#mapaobras",
      onToggle: () => {
        setChapterNumberMap("mapaobras");
      },
    });

    ScrollTrigger.create({
      trigger: "#textoobras",
      onToggle: () => {
        setChapterNumberMap("textoobras");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapanorte",
      onToggle: () => {
        setChapterNumberMap("mapanorte");
      },
    });

    ScrollTrigger.create({
      trigger: "#textonorte",
      onToggle: () => {
        setChapterNumberMap("textonorte");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapaoeste",
      onToggle: () => {
        setChapterNumberMap("mapaoeste");
      },
    });

    ScrollTrigger.create({
      trigger: "#textooeste",
      onToggle: () => {
        setChapterNumberMap("textooeste");
      },
    });

    ScrollTrigger.create({
      animation: tl4,
      trigger: "#prejuizo",
      scrub: false,
      toggleActions: "play reverse play reverse",
      onToggle: () => {
        setChapterNumberMap("prejuizo");
      },
    });

    const tl13 = gsap.timeline();
    tl13
      .set("#oeste", { opacity: 0 })
      .to("#oeste", { opacity: 0, duration: 30 })
      .to("#oeste", { opacity: 1, duration: 6 })
      .to("#oeste", { opacity: 1, duration: 20 })
      .to("#oeste", { opacity: 0, duration: 6 })
      .to("#oeste", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl13,
      trigger: "#oeste",
      onToggle: () => {
        setChapterNumberMap("oeste");
      },
    });

    var startCount = 0,
      num = { var: startCount };
    function changeNumber() {
      // id of the element you want to change
      number.innerHTML = num.var.toFixed();
    }
    const tl4 = gsap.timeline();
    tl4.to(num, {
      var: 646,
      duration: 1,
      onUpdate: changeNumber,
    });

    const tl11 = gsap.timeline();
    tl11
      .set("#fim", { opacity: 0 })
      .to("#fim", { opacity: 0, duration: 30 })
      .to("#fim", { opacity: 1, duration: 6 })
      .to("#fim", { opacity: 1, duration: 20 })
      .to("#fim", { opacity: 1, duration: 6 })
      .to("#fim", { opacity: 1, duration: 28 });

    ScrollTrigger.create({
      animation: tl11,
      trigger: "#fim",
      onToggle: () => {
        setChapterNumberMap("fim");
      },
    });

    ScrollTrigger.create({
      trigger: "#creditos",
      onToggle: () => {
        setChapterNumberMap("creditos");
      },
    });
  }, []);

  return (
    <>
      <MultilayerMap
        interactive={false}
        scrollZoom={false}
        showLayers={true}
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        mapStyle="mapbox://styles/escritoriodedados/cliw11vdn027l01qh0pbe5l8w"
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
      <chapterDiv.MapaObras id={"mapaobras"} />
      <chapterDiv.TextoObras id={"textoobras"} />
      <chapterDiv.MapaNorte id={"mapanorte"} />
      <chapterDiv.TextoNorte id={"textonorte"} />
      <chapterDiv.MapaOeste id={"mapaoeste"} />
      <chapterDiv.TextoOeste id={"textooeste"} />
      <chapterDiv.Oeste id={"oeste"} />
      <chapterDiv.Prejuizo id={"prejuizo"} />
      <chapterDiv.Fim id={"fim"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}
