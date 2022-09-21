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
      case "vazio":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "historia-1":
        setPosition(chapterMap.Historia1().location);
        setLayers(chapterMap.Historia1().layers);
        break;
      case "historia-foto":
        setPosition(chapterMap.Historia1().location);
        setLayers(chapterMap.Historia1().layers);
        break;
      case "historia-2":
        setPosition(chapterMap.Historia1().location);
        setLayers(chapterMap.Historia1().layers);
        break;
      case "pandemia":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "grafico-passageiros":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "grafico-dolar":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "grafico-diesel":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "virada":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "caixa":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "foco":
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
      case "graficos":
        setPosition(chapterMap.Depois().location);
        setLayers(chapterMap.Depois().layers);
        break;
      case "saude":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "educacao":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "trabalho":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "passagem":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "fluxo":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
        break;
      case "fim":
        setPosition(chapterMap.Vazio().location);
        setLayers(chapterMap.Vazio().layers);
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

    const tl2 = gsap.timeline();
    tl2
      .set("#intro", { opacity: 0 })
      .to("#intro", { opacity: 0, duration: 30 })
      .to("#intro", { opacity: 1, duration: 5 })
      .to("#intro", { opacity: 1, duration: 20 })
      .to("#intro", { opacity: 0, duration: 5 })
      .to("#intro", { opacity: 0, duration: 30 });

    ScrollTrigger.create({
      animation: tl2,
      trigger: "#intro",
      onToggle: () => {
        setChapterNumberMap("intro");
      },
    });

    const tl10 = gsap.timeline();
    tl10
      .set("#vazio", { opacity: 0 })
      .to("#vazio", { opacity: 0, duration: 30 })
      .to("#vazio", { opacity: 1, duration: 6 })
      .to("#vazio", { opacity: 1, duration: 20 })
      .to("#vazio", { opacity: 0, duration: 6 })
      .to("#vazio", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl10,
      trigger: "#vazio",
      onToggle: () => {
        setChapterNumberMap("vazio");
      },
    });

    ScrollTrigger.create({
      trigger: "#historia-1",
      onToggle: () => {
        setChapterNumberMap("historia-1");
      },
    });

    ScrollTrigger.create({
      trigger: "#historia-foto",
      onToggle: () => {
        setChapterNumberMap("historia-foto");
      },
    });

    ScrollTrigger.create({
      trigger: "#historia-2",
      onToggle: () => {
        setChapterNumberMap("historia-2");
      },
    });

    const tl15 = gsap.timeline();
    tl15
      .set("#pandemia", { opacity: 0 })
      .to("#pandemia", { opacity: 0, duration: 30 })
      .to("#pandemia", { opacity: 1, duration: 6 })
      .to("#pandemia", { opacity: 1, duration: 20 })
      .to("#pandemia", { opacity: 0, duration: 6 })
      .to("#pandemia", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl15,
      trigger: "#pandemia",
      onToggle: () => {
        setChapterNumberMap("pandemia");
      },
    });

    ScrollTrigger.create({
      trigger: "#grafico-passageiros",
      onToggle: () => {
        setChapterNumberMap("grafico-passageiros");
      },
    });

    ScrollTrigger.create({
      trigger: "#grafico-dolar",
      onToggle: () => {
        setChapterNumberMap("grafico-dolar");
      },
    });

    ScrollTrigger.create({
      trigger: "#grafico-diesel",
      onToggle: () => {
        setChapterNumberMap("grafico-diesel");
      },
    });

    const tl20 = gsap.timeline();
    tl20
      .set("#virada", { opacity: 0 })
      .to("#virada", { opacity: 0, duration: 30 })
      .to("#virada", { opacity: 1, duration: 6 })
      .to("#virada", { opacity: 1, duration: 20 })
      .to("#virada", { opacity: 0, duration: 6 })
      .to("#virada", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl20,
      trigger: "#virada",
      onToggle: () => {
        setChapterNumberMap("virada");
      },
    });

    ScrollTrigger.create({
      trigger: "#caixa",
      onToggle: () => {
        setChapterNumberMap("caixa");
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
      trigger: "#graficos",
      onToggle: () => {
        setChapterNumberMap("graficos");
      },
    });

    ScrollTrigger.create({
      trigger: "#saude",
      onToggle: () => {
        setChapterNumberMap("saude");
      },
    });

    ScrollTrigger.create({
      trigger: "#educacao",
      onToggle: () => {
        setChapterNumberMap("educacao");
      },
    });

    ScrollTrigger.create({
      trigger: "#trabalho",
      onToggle: () => {
        setChapterNumberMap("trabalho");
      },
    });

    const tl25 = gsap.timeline();
    tl25
      .set("#passagem", { opacity: 0 })
      .to("#passagem", { opacity: 0, duration: 30 })
      .to("#passagem", { opacity: 1, duration: 6 })
      .to("#passagem", { opacity: 1, duration: 20 })
      .to("#passagem", { opacity: 0, duration: 6 })
      .to("#passagem", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl25,
      trigger: "#passagem",
      onToggle: () => {
        setChapterNumberMap("passagem");
      },
    });

    ScrollTrigger.create({
      trigger: "#fluxo",
      onToggle: () => {
        setChapterNumberMap("fluxo");
      },
    });

    const tl30 = gsap.timeline();
    tl30
      .set("#fim", { opacity: 0 })
      .to("#fim", { opacity: 0, duration: 30 })
      .to("#fim", { opacity: 1, duration: 6 })
      .to("#fim", { opacity: 1, duration: 20 })
      .to("#fim", { opacity: 0, duration: 6 })
      .to("#fim", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl30,
      trigger: "#fim",
      onToggle: () => {
        setChapterNumberMap("fim");
      },
    });

    const tl9 = gsap.timeline();
    tl9
      .set("#creditos", { opacity: 0 })
      .to("#creditos", { opacity: 0, duration: 30 })
      .to("#creditos", { opacity: 1, duration: 6 })
      .to("#creditos", { opacity: 1, duration: 20 })
      .to("#creditos", { opacity: 1, duration: 6 })
      .to("#creditos", { opacity: 1, duration: 28 });

    ScrollTrigger.create({
      animation: tl9,
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
      <chapterDiv.Vazio id={"vazio"} />
      <chapterDiv.Historia1 id={"historia-1"} />
      <chapterDiv.HistoriaFoto id={"historia-foto"} />
      <chapterDiv.Historia2 id={"historia-2"} />
      <chapterDiv.Pandemia id={"pandemia"} />
      <chapterDiv.GraficoPassageiros id={"grafico-passageiros"} />
      <chapterDiv.GraficoDolar id={"grafico-dolar"} />
      <chapterDiv.GraficoDiesel id={"grafico-diesel"} />
      <chapterDiv.Virada id={"virada"} />
      <chapterDiv.Caixa id={"caixa"} />
      <chapterDiv.Foco id={"foco"} />
      <chapterDiv.Antes id={"antes"} />
      <chapterDiv.Depois id={"depois"} />
      <chapterDiv.Graficos id={"graficos"} />
      <chapterDiv.Saude id={"saude"} />
      <chapterDiv.Educacao id={"educacao"} />
      <chapterDiv.Trabalho id={"trabalho"} />
      <chapterDiv.Passagem id={"passagem"} />
      <chapterDiv.Fluxo id={"fluxo"} />
      <chapterDiv.Fim id={"fim"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}
