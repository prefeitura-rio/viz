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
      case "mapacapitulo":
        setPosition(chapterMap.IntroMapa().location);
        setLayers(chapterMap.IntroMapa().layers);
        break;
      case "mapaum":
        setPosition(chapterMap.IntroMapa().location);
        setLayers(chapterMap.IntroMapa().layers);
        break;
      case "mapazero":
        setPosition(chapterMap.IntroMapa().location);
        setLayers(chapterMap.IntroMapa().layers);
        break;
      case "mapadois":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "cepcapitulo":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "cepum":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "cepdois":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "vigilanciacapitulo":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "vigilanciaum":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "vigilanciadois":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "ativacaocapitulo":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "ativacaoum":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "ativacaodois":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "conservacaocapitulo":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "conservacaoum":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "conservacaodois":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "acolhimentocapitulo":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "acolhimentoum":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "acolhimentodois":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "resultados":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "fim":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
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

    ScrollTrigger.create({
      trigger: "#mapacapitulo",
      onToggle: () => {
        setChapterNumberMap("mapacapitulo");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapaum",
      onToggle: () => {
        setChapterNumberMap("mapaum");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapazero",
      onToggle: () => {
        setChapterNumberMap("mapazero");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapadois",
      onToggle: () => {
        setChapterNumberMap("mapadois");
      },
    });

    ScrollTrigger.create({
      trigger: "#cepcapitulo",
      onToggle: () => {
        setChapterNumberMap("cepcapitulo");
      },
    });

    ScrollTrigger.create({
      trigger: "#cepum",
      onToggle: () => {
        setChapterNumberMap("cepum");
      },
    });

    ScrollTrigger.create({
      trigger: "#cepdois",
      onToggle: () => {
        setChapterNumberMap("cepdois");
      },
    });

    ScrollTrigger.create({
      trigger: "#vigilanciacapitulo",
      onToggle: () => {
        setChapterNumberMap("vigilanciacapitulo");
      },
    });

    ScrollTrigger.create({
      trigger: "#vigilanciaum",
      onToggle: () => {
        setChapterNumberMap("vigilanciaum");
      },
    });

    ScrollTrigger.create({
      trigger: "#vigilanciadois",
      onToggle: () => {
        setChapterNumberMap("vigilanciadois");
      },
    });

    ScrollTrigger.create({
      trigger: "#ativacaocapitulo",
      onToggle: () => {
        setChapterNumberMap("ativacaocapitulo");
      },
    });

    ScrollTrigger.create({
      trigger: "#ativacaoum",
      onToggle: () => {
        setChapterNumberMap("ativacaoum");
      },
    });

    ScrollTrigger.create({
      trigger: "#ativacaodois",
      onToggle: () => {
        setChapterNumberMap("ativacaodois");
      },
    });

    ScrollTrigger.create({
      trigger: "#conservacaocapitulo",
      onToggle: () => {
        setChapterNumberMap("conservacaocapitulo");
      },
    });

    ScrollTrigger.create({
      trigger: "#conservacaoum",
      onToggle: () => {
        setChapterNumberMap("conservacaoum");
      },
    });

    ScrollTrigger.create({
      trigger: "#conservacaodois",
      onToggle: () => {
        setChapterNumberMap("conservacaodois");
      },
    });

    ScrollTrigger.create({
      trigger: "#acolhimentocapitulo",
      onToggle: () => {
        setChapterNumberMap("acolhimentocapitulo");
      },
    });

    ScrollTrigger.create({
      trigger: "#acolhimentoum",
      onToggle: () => {
        setChapterNumberMap("acolhimentoum");
      },
    });

    ScrollTrigger.create({
      trigger: "#acolhimentodois",
      onToggle: () => {
        setChapterNumberMap("acolhimentodois");
      },
    });

    ScrollTrigger.create({
      trigger: "#resultados",
      onToggle: () => {
        setChapterNumberMap("resultados");
      },
    });

    ScrollTrigger.create({
      trigger: "#creditos",
      onToggle: () => {
        setChapterNumberMap("creditos");
      },
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
  }, []);

  return (
    <>
      <MultilayerMap
        interactive={true}
        scrollZoom={true}
        showLayers={true}
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        mapStyle="mapbox://styles/escritoriodedados/clb5mnbms001z14o76898gh5c"
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
      <chapterDiv.MapaCapitulo id={"mapacapitulo"} />
      <chapterDiv.MapaZero id={"mapazero"} />
      <chapterDiv.MapaUm id={"mapaum"} />
      <chapterDiv.MapaDois id={"mapadois"} />
      <chapterDiv.CepCapitulo id={"cepcapitulo"} />
      <chapterDiv.CepUm id={"cepum"} />
      <chapterDiv.CepDois id={"cepdois"} />
      <chapterDiv.VigilanciaCapitulo id={"vigilanciacapitulo"} />
      <chapterDiv.VigilanciaUm id={"vigilanciaum"} />
      <chapterDiv.VigilanciaDois id={"vigilanciadois"} />
      <chapterDiv.AtivacaoCapitulo id={"ativacaocapitulo"} />
      <chapterDiv.AtivacaoUm id={"ativacaoum"} />
      <chapterDiv.AtivacaoDois id={"ativacaodois"} />
      <chapterDiv.ConservacaoCapitulo id={"consevacaocapitulo"} />
      <chapterDiv.ConservacaoUm id={"consevacaoum"} />
      <chapterDiv.ConservacaoDois id={"consevacaodois"} />
      <chapterDiv.AcolhimentoCapitulo id={"acolhimentocapitulo"} />
      <chapterDiv.AcolhimentoUm id={"acolhimentoum"} />
      <chapterDiv.AcolhimentoDois id={"acolhimentodois"} />
      <chapterDiv.Resultados id={"resultados"} />
      <chapterDiv.Creditos id={"creditos"} />
      {/* <chapterDiv.Fim id={"fim"} /> */}
    </>
  );
}
