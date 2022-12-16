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
      case "mapa_capitulo":
        setPosition(chapterMap.IntroMapa().location);
        setLayers(chapterMap.IntroMapa().layers);
        break;
      case "mapa_zero":
        setPosition(chapterMap.IntroMapa().location);
        setLayers(chapterMap.IntroMapa().layers);
        break;
      case "mapa_um":
        setPosition(chapterMap.IntroMapa().location);
        setLayers(chapterMap.IntroMapa().layers);
        break;
      case "mapa_mais_um":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "mapa_dois":
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
      markers: true,
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
      trigger: "#mapa_capitulo",
      onToggle: () => {
        setChapterNumberMap("mapa_capitulo");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_zero",
      onToggle: () => {
        setChapterNumberMap("mapa_zero");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_um",
      onToggle: () => {
        setChapterNumberMap("mapa_um");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_mais_um",
      onToggle: () => {
        setChapterNumberMap("mapa_mais_um");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_dois",
      onToggle: () => {
        setChapterNumberMap("mapa_dois");
      },
    });

    ScrollTrigger.create({
      trigger: "#cep_capitulo",
    });

    ScrollTrigger.create({
      trigger: "#cep_um",
    });

    ScrollTrigger.create({
      trigger: "#cep_dois",
    });

    ScrollTrigger.create({
      trigger: "#vigilancia_capitulo",
    });

    ScrollTrigger.create({
      trigger: "#vigilancia_um",
    });

    ScrollTrigger.create({
      trigger: "#vigilancia_dois",
    });

    ScrollTrigger.create({
      trigger: "#ativacao_capitulo",
    });

    ScrollTrigger.create({
      trigger: "#ativacao_um",
    });

    ScrollTrigger.create({
      trigger: "#ativacao_dois",
    });

    ScrollTrigger.create({
      trigger: "#conservacao_capitulo",
    });

    ScrollTrigger.create({
      trigger: "#conservacao_um",
    });

    ScrollTrigger.create({
      trigger: "#conservacao_dois",
    });

    ScrollTrigger.create({
      trigger: "#acolhimento_capitulo",
    });

    ScrollTrigger.create({
      trigger: "#acolhimento_um",
    });

    ScrollTrigger.create({
      trigger: "#acolhimento_dois",
    });

    ScrollTrigger.create({
      trigger: "#resultados",
    });

    ScrollTrigger.create({
      trigger: "#creditos",
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
      {/* <chapterDiv.Capa id={"capa"} />
      <chapterDiv.MapaCapitulo id={"mapa_capitulo"} />
      <chapterDiv.MapaZero id={"mapa_zero"} />
      <chapterDiv.MapaUm id={"mapa_um"} />
      <chapterDiv.MapaMaisum id={"mapa_mais_um"} />
      <chapterDiv.MapaDois id={"mapa_dois"} /> */}
      <chapterDiv.CepCapitulo id={"cep_capitulo"} />
      <chapterDiv.CepUm id={"cep_um"} />
      <chapterDiv.CepDois id={"cep_dois"} />
      <chapterDiv.VigilanciaCapitulo id={"vigilancia_capitulo"} />
      <chapterDiv.VigilanciaUm id={"vigilancia_um"} />
      <chapterDiv.VigilanciaDois id={"vigilancia_dois"} />
      <chapterDiv.AtivacaoCapitulo id={"ativacao_capitulo"} />
      <chapterDiv.AtivacaoUm id={"ativacao_um"} />
      <chapterDiv.AtivacaoDois id={"ativacao_dois"} />
      <chapterDiv.ConservacaoCapitulo id={"consevacaocapitulo"} />
      <chapterDiv.ConservacaoUm id={"consevacaoum"} />
      <chapterDiv.ConservacaoDois id={"consevacaodois"} />
      <chapterDiv.AcolhimentoCapitulo id={"acolhimento_capitulo"} />
      <chapterDiv.AcolhimentoUm id={"acolhimento_um"} />
      <chapterDiv.AcolhimentoDois id={"acolhimento_dois"} />
      <chapterDiv.Resultados id={"resultados"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}
