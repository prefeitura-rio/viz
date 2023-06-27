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

export default function ObrasZO() {
  const [location, setLocation] = useState(chapterMap.Capa().location);
  const [layers, setLayers] = useState(chapterMap.Capa().layers);
  // console.log("ChapterLayers", layers);

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
      case "nacasa":
        setPosition(chapterMap.Mapaconjuntomaravilha().location);
        setLayers(chapterMap.Mapaconjuntomaravilha().layers);
        break;
      case "mapaconjuntomaravilha":
        setPosition(chapterMap.Mapaconjuntomaravilha().location);
        setLayers(chapterMap.Mapaconjuntomaravilha().layers);
        break;
      case "numeraoconjuntomaravilha":
        setPosition(chapterMap.Mapaconjuntomaravilha().location);
        setLayers(chapterMap.Mapaconjuntomaravilha().layers);
        break;
      case "numeraoconjuntomaravilhaum":
        setPosition(chapterMap.Mapaconjuntomaravilhaum().location);
        setLayers(chapterMap.Mapaconjuntomaravilhaum().layers);
        break;
      case "sliderconjuntomaravilha":
        setPosition(chapterMap.Mapaconjuntomaravilhaum().location);
        setLayers(chapterMap.Mapaconjuntomaravilhaum().layers);
        break;
      case "textoconjuntomaravilha":
        setPosition(chapterMap.Mapaconjuntomaravilhaum().location);
        setLayers(chapterMap.Mapaconjuntomaravilhaum().layers);
        break;
      case "mapacasacarioca":
        setPosition(chapterMap.Mapacasacarioca().location);
        setLayers(chapterMap.Mapacasacarioca().layers);
        break;
      case "numeraocasacarioca":
        setPosition(chapterMap.Mapacasacarioca().location);
        setLayers(chapterMap.Mapacasacarioca().layers);
        break;
      case "numeraocasacariocaum":
        setPosition(chapterMap.Mapacasacariocaum().location);
        setLayers(chapterMap.Mapacasacariocaum().layers);
        break;
      case "slidercasacarioca":
        setPosition(chapterMap.Mapacasacariocaum().location);
        setLayers(chapterMap.Mapacasacariocaum().layers);
        break;
      case "textocasacarioca":
        setPosition(chapterMap.Mapacasacariocaum().location);
        setLayers(chapterMap.Mapacasacariocaum().layers);
        break;
      case "narua":
        setPosition(chapterMap.Mapaavancacampogrande().location);
        setLayers(chapterMap.Mapaavancacampogrande().layers);
        break;
      case "mapaavancacampogrande":
        setPosition(chapterMap.Mapaavancacampogrande().location);
        setLayers(chapterMap.Mapaavancacampogrande().layers);
        break;
      case "numeraoavancacampogrande":
        setPosition(chapterMap.Mapaavancacampogrande().location);
        setLayers(chapterMap.Mapaavancacampogrande().layers);
        break;
      case "numeraoavancacampograndeum":
        setPosition(chapterMap.Mapaavancacampograndeum().location);
        setLayers(chapterMap.Mapaavancacampograndeum().layers);
        break;
      case "slideravancacampogrande":
        setPosition(chapterMap.Mapaavancacampograndeum().location);
        setLayers(chapterMap.Mapaavancacampograndeum().layers);
        break;
      case "textoavancacampogrande":
        setPosition(chapterMap.Mapaavancacampograndeum().location);
        setLayers(chapterMap.Mapaavancacampograndeum().layers);
        break;
      case "nobairro":
        setPosition(chapterMap.Mapabairromaravilha().location);
        setLayers(chapterMap.Mapabairromaravilha().layers);
        break;
      case "mapabairromaravilha":
        setPosition(chapterMap.Mapabairromaravilha().location);
        setLayers(chapterMap.Mapabairromaravilha().layers);
        break;
      case "numeraobairromaravilha":
        setPosition(chapterMap.Mapabairromaravilha().location);
        setLayers(chapterMap.Mapabairromaravilha().layers);
        break;
      case "numeraobairromaravilhaum":
        setPosition(chapterMap.Mapabairromaravilhaum().location);
        setLayers(chapterMap.Mapabairromaravilhaum().layers);
        break;
      case "sliderbairromaravilha":
        setPosition(chapterMap.Mapabairromaravilhaum().location);
        setLayers(chapterMap.Mapabairromaravilhaum().layers);
        break;
      case "textobairromaravilha":
        setPosition(chapterMap.Mapabairromaravilhaum().location);
        setLayers(chapterMap.Mapabairromaravilhaum().layers);
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

    ScrollTrigger.create({
      trigger: "#intro",
      onToggle: () => {
        setChapterNumberMap("intro");
      },
    });

    ScrollTrigger.create({
      trigger: "#nacasa",
      onToggle: () => {
        setChapterNumberMap("nacasa");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapaconjuntomaravilha",
      onToggle: () => {
        setChapterNumberMap("mapaconjuntomaravilha");
      },
    });

    ScrollTrigger.create({
      trigger: "#numeraoconjuntomaravilha",
      onToggle: () => {
        setChapterNumberMap("numeraoconjuntomaravilha");
      },
    });

    ScrollTrigger.create({
      trigger: "#numeraoconjuntomaravilhaum",
      onToggle: () => {
        setChapterNumberMap("numeraoconjuntomaravilhaum");
      },
    });

    ScrollTrigger.create({
      trigger: "#sliderconjuntomaravilha",
      onToggle: () => {
        setChapterNumberMap("sliderconjuntomaravilha");
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
      trigger: "#numeraocasacarioca",
      onToggle: () => {
        setChapterNumberMap("numeraocasacarioca");
      },
    });

    ScrollTrigger.create({
      trigger: "#numeraocasacariocaum",
      onToggle: () => {
        setChapterNumberMap("numeraocasacariocaum");
      },
    });

    ScrollTrigger.create({
      trigger: "#slidercasacarioca",
      onToggle: () => {
        setChapterNumberMap("slidercasacarioca");
      },
    });

    ScrollTrigger.create({
      trigger: "#textocasacarioca",
      onToggle: () => {
        setChapterNumberMap("textocasacarioca");
      },
    });

    ScrollTrigger.create({
      trigger: "#narua",
      onToggle: () => {
        setChapterNumberMap("narua");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapaavancacampogrande",
      onToggle: () => {
        setChapterNumberMap("mapaavancacampogrande");
      },
    });

    ScrollTrigger.create({
      trigger: "#numeraoavancacampogrande",
      onToggle: () => {
        setChapterNumberMap("numeraoavancacampogrande");
      },
    });

    ScrollTrigger.create({
      trigger: "#numeraoavancacampograndeum",
      onToggle: () => {
        setChapterNumberMap("numeraoavancacampograndeum");
      },
    });

    ScrollTrigger.create({
      trigger: "#slideravancacampogrande",
      onToggle: () => {
        setChapterNumberMap("slideravancacampogrande");
      },
    });

    ScrollTrigger.create({
      trigger: "#textoavancacampogrande",
      onToggle: () => {
        setChapterNumberMap("textoavancacampogrande");
      },
    });

    ScrollTrigger.create({
      trigger: "#nobairro",
      onToggle: () => {
        setChapterNumberMap("nobairro");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapabairromaravilha",
      onToggle: () => {
        setChapterNumberMap("mapabairromaravilha");
      },
    });

    ScrollTrigger.create({
      trigger: "#numeraobairromaravilha",
      onToggle: () => {
        setChapterNumberMap("numeraobairromaravilha");
      },
    });

    ScrollTrigger.create({
      trigger: "#numeraobairromaravilhaum",
      onToggle: () => {
        setChapterNumberMap("numeraobairromaravilhaum");
      },
    });

    ScrollTrigger.create({
      trigger: "#sliderbairromaravilha",
      onToggle: () => {
        setChapterNumberMap("sliderbairromaravilha");
      },
    });

    ScrollTrigger.create({
      trigger: "#textobairromaravilha",
      onToggle: () => {
        setChapterNumberMap("textobairromaravilha");
      },
    });

    ScrollTrigger.create({
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

      <chapterDiv.NaCasa id={"nacasa"} />
      <chapterDiv.MapaConjuntoMaravilha id={"mapaconjuntomaravilha"} />
      <chapterDiv.NumeraoConjuntoMaravilha id={"numeraoconjuntomaravilha"} />
      <chapterDiv.NumeraoConjuntoMaravilhaUm
        id={"numeraoconjuntomaravilhaum"}
      />
      <chapterDiv.SliderConjuntoMaravilha
        id={"sliderconjuntomaravilha"}
      />

      <chapterDiv.TextoConjuntoMaravilha id={"textoconjuntomaravilha"} />

      <chapterDiv.MapaCasaCarioca id={"mapacasacarioca"} />
      <chapterDiv.NumeraoCasaCarioca id={"numeraocasacarioca"} />
      <chapterDiv.NumeraoCasaCariocaUm id={"numeraocasacariocaum"} />
      <chapterDiv.SliderCasaCarioca
        id={"slidercasacarioca"}
      />

      <chapterDiv.TextoCasaCarioca id={"textocasacarioca"} />

      <chapterDiv.NaRua id={"narua"} />
      <chapterDiv.MapaAvancaCampoGrande id={"mapaavancacampogrande"} />
      <chapterDiv.NumeraoAvancaCampoGrande id={"numeraoavancacampogrande"} />
      <chapterDiv.NumeraoAvancaCampoGrandeUm
        id={"numeraoavancacampograndeum"}
      />
      <chapterDiv.SliderAvancaCampoGrande
        id={"slideravancacampogrande"}
      />

      <chapterDiv.TextoAvancaCampoGrande id={"textoavancacampogrande"} />

      <chapterDiv.NoBairro id={"nobairro"} />
      <chapterDiv.MapaBairroMaravilha id={"mapabairromaravilha"} />
      <chapterDiv.NumeraoBairroMaravilha id={"numeraobairromaravilha"} />
      <chapterDiv.NumeraoBairroMaravilhaUm id={"numeraobairromaravilhaum"} />
      <chapterDiv.SliderBairroMaravilha
        id={"sliderbairromaravilha"}
      />

      <chapterDiv.TextoBairroMaravilha id={"textobairromaravilha"} />

      <chapterDiv.Fim id={"fim"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}
