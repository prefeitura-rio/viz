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
      case "numeraoum":
        setPosition(chapterMap.Mapaconjuntomaravilha().location);
        setLayers(chapterMap.Mapaconjuntomaravilha().layers);
        break;
      case "mapaconjuntomaravilha":
        setPosition(chapterMap.Mapaconjuntomaravilha().location);
        setLayers(chapterMap.Mapaconjuntomaravilha().layers);
        break;
      case "textoconjuntomaravilha":
        setPosition(chapterMap.Mapaconjuntomaravilha().location);
        setLayers(chapterMap.Mapaconjuntomaravilha().layers);
        break;
      case "mapacasacarioca":
        setPosition(chapterMap.Mapacasacarioca().location);
        setLayers(chapterMap.Mapacasacarioca().layers);
        break;
      case "textocasacarioca":
        setPosition(chapterMap.Mapacasacarioca().location);
        setLayers(chapterMap.Mapacasacarioca().layers);
        break;
      case "numeraodois":
        setPosition(chapterMap.Mapacasacarioca().location);
        setLayers(chapterMap.Mapacasacarioca().layers);
        break;
      case "mapaavancacampogrande":
        setPosition(chapterMap.Mapaavancacampogrande().location);
        setLayers(chapterMap.Mapaavancacampogrande().layers);
        break;
      case "textoavancacampogrande":
        setPosition(chapterMap.Mapaavancacampogrande().location);
        setLayers(chapterMap.Mapaavancacampogrande().layers);
        break;
      case "numeraotres":
        setPosition(chapterMap.Mapabairromaravilha().location);
        setLayers(chapterMap.Mapabairromaravilha().layers);
        break;
      case "mapabairromaravilha":
        setPosition(chapterMap.Mapabairromaravilha().location);
        setLayers(chapterMap.Mapabairromaravilha().layers);
        break;
      case "textobairromaravilha":
        setPosition(chapterMap.Mapabairromaravilha().location);
        setLayers(chapterMap.Mapabairromaravilha().layers);
        break; 
      case "videoum":
        setPosition(chapterMap.Mapabairromaravilha().location);
        setLayers(chapterMap.Mapabairromaravilha().layers);
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
      trigger: "#numeraoum",
      onToggle: () => {
        setChapterNumberMap("numeraoum");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapaconjuntomaravilha",
      onToggle: () => {
        setChapterNumberMap("mapaconjuntomaravilha");
      },
    });

    ScrollTrigger.create({
      trigger: "#textoconjuntomaravilha",
      onToggle: () => {
        setChapterNumberMap("textoconjuntomaravilha");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapacasacarioca",
      onToggle: () => {
        setChapterNumberMap("mapacasacarioca");
      },
    });

    ScrollTrigger.create({
      trigger: "#textocasacarioca",
      onToggle: () => {
        setChapterNumberMap("textocasacarioca");
      },
    });

    ScrollTrigger.create({
      trigger: "#numeraodois",
      onToggle: () => {
        setChapterNumberMap("numeraodois");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapaavancacampogrande",
      onToggle: () => {
        setChapterNumberMap("mapaavancacampogrande");
      },
    });

    ScrollTrigger.create({
      trigger: "#textoavancacampogrande",
      onToggle: () => {
        setChapterNumberMap("textoavancacampogrande");
      },
    });

    ScrollTrigger.create({
      trigger: "#numeraotres",
      onToggle: () => {
        setChapterNumberMap("numeraotres");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapabairromaravilha",
      onToggle: () => {
        setChapterNumberMap("mapabairromaravilha");
      },
    });

    ScrollTrigger.create({
      trigger: "#textobairromaravilha",
      onToggle: () => {
        setChapterNumberMap("textobairromaravilha");
      },
    });

    const tl15 = gsap.timeline();
    tl15
      .set("#videoum", { opacity: 0 })
      .to("#videoum", { opacity: 0, duration: 30 })
      .to("#videoum", { opacity: 1, duration: 6 })
      .to("#videoum", { opacity: 1, duration: 20 })
      .to("#videoum", { opacity: 0, duration: 6 })
      .to("#videoum", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl15,
      trigger: "#videoum",
      onToggle: () => {
        setChapterNumberMap("videoum");
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

      <chapterDiv.NumeraoUm id={"numeraoum"} />
      <chapterDiv.MapaConjuntoMaravilha id={"mapaconjuntomaravilha"} />
      <chapterDiv.TextoConjuntoMaravilha id={"textoconjuntomaravilha"} />
      <chapterDiv.MapaCasaCarioca id={"mapacasacarioca"} />
      <chapterDiv.TextoCasaCarioca id={"textocasacarioca"} />

      <chapterDiv.NumeraoDois id={"numeraodois"} />
      <chapterDiv.MapaAvancaCampoGrande id={"mapaavancacampogrande"} />
      <chapterDiv.TextoAvancaCampoGrande id={"textoavancacampogrande"} />

      <chapterDiv.NumeraoTres id={"numeraotres"} />
      <chapterDiv.MapaBairroMaravilha id={"mapabairromaravilha"} />
      <chapterDiv.TextoBairroMaravilha id={"textobairromaravilha"} />
      
      <chapterDiv.VideoUm id={"videoum"} />

      <chapterDiv.Fim id={"fim"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}