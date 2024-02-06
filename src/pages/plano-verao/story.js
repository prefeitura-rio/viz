// Mandatory.
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
        setPosition(chapterMap.Capa().location);
        setLayers(chapterMap.Capa().layers);
        break;
      case "exemplo0":
        setPosition(chapterMap.Exemplo0().location);
        setLayers(chapterMap.Exemplo0().layers);
        break;
      case "exemplo0um":
        setPosition(chapterMap.Exemplo0().location);
        setLayers(chapterMap.Exemplo0().layers);
        break;
      case "exemplo1":
        setPosition(chapterMap.Exemplo2().location);
        setLayers(chapterMap.Exemplo2().layers);
        break;
      case "exemplo2":
        setPosition(chapterMap.Exemplo2().location);
        setLayers(chapterMap.Exemplo2().layers);
        break;
      case "exemplo2um":
        setPosition(chapterMap.Exemplo2().location);
        setLayers(chapterMap.Exemplo2().layers);
        break;
      case "exemplo3":
        setPosition(chapterMap.Exemplo3().location);
        setLayers(chapterMap.Exemplo3().layers);
        break;
      case "exemplo3um":
      setPosition(chapterMap.Exemplo3().location);
      setLayers(chapterMap.Exemplo3().layers);
      break;
      case "mapa":
        setPosition(chapterMap.Mapa().location);
        setLayers(chapterMap.Mapa().layers);
        break;
      case "solucao":
        setPosition(chapterMap.Solucao().location);
        setLayers(chapterMap.Solucao().layers);
        break;
      case "prejuizo":
        setPosition(chapterMap.Prejuizo().location);
        setLayers(chapterMap.Prejuizo().layers);
        break;
      case "cor":
        setPosition(chapterMap.Prejuizo().location);
        setLayers(chapterMap.Prejuizo().layers);
        break;
      case "corum":
        setPosition(chapterMap.Prejuizo().location);
        setLayers(chapterMap.Prejuizo().layers);
        break;
      case "grafico":
        setPosition(chapterMap.Grafico().location);
        setLayers(chapterMap.Grafico().layers);
        break;
      case "fim":
        setPosition(chapterMap.Fim().location);
        setLayers(chapterMap.Fim().layers);
        break;
      case "bairromaravilha":
        setPosition(chapterMap.BairroMaravilha().location);
        setLayers(chapterMap.BairroMaravilha().layers);
        break;
      case "bairromaravilhaum":
        setPosition(chapterMap.BairroMaravilha().location);
        setLayers(chapterMap.BairroMaravilha().layers);
        break;
      case "seop2":
        setPosition(chapterMap.Capa().location);
        setLayers(chapterMap.Capa().layers);
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
      trigger: "#zoom",
      onToggle: () => {
        setChapterNumberMap("zoom");
      },
    });

    ScrollTrigger.create({
      trigger: "#exemplo0",
      onToggle: () => {
        setChapterNumberMap("exemplo0");
      },
    });

    ScrollTrigger.create({
      trigger: "#cor",
      onToggle: () => {
        setChapterNumberMap("cor");
      },
    });

    ScrollTrigger.create({
      trigger: "#corum",
      onToggle: () => {
        setChapterNumberMap("corum");
      },
    });

    ScrollTrigger.create({
      trigger: "#exemplo0um",
      onToggle: () => {
        setChapterNumberMap("exemplo0um");
      },
    });

    ScrollTrigger.create({
      trigger: "#exemplo1",
      onToggle: () => {
        setChapterNumberMap("exemplo1");
      },
    });

    ScrollTrigger.create({
      trigger: "#exemplo2",
      onToggle: () => {
        setChapterNumberMap("exemplo2");
      },
    });

    ScrollTrigger.create({
      trigger: "#exemplo2um",
      onToggle: () => {
        setChapterNumberMap("exemplo2um");
      },
    });

    ScrollTrigger.create({
      trigger: "#exemplo3",
      onToggle: () => {
        setChapterNumberMap("exemplo3");
      },
    });

    ScrollTrigger.create({
      trigger: "#exemplo3um",
      onToggle: () => {
        setChapterNumberMap("exemplo3um");
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

    ScrollTrigger.create({
      trigger: "#mapa",
      onToggle: () => {
        setChapterNumberMap("mapa");
      },
    });

    const tl14 = gsap.timeline();
    tl14
      .set("#solucao", { opacity: 0 })
      .to("#solucao", { opacity: 0, duration: 30 })
      .to("#solucao", { opacity: 1, duration: 6 })
      .to("#solucao", { opacity: 1, duration: 20 })
      .to("#solucao", { opacity: 0, duration: 6 })
      .to("#solucao", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl14,
      trigger: "#solucao",
      onToggle: () => {
        setChapterNumberMap("solucao");
      },
    });

    var startCount = 0,
      num = { var: startCount };
    function changeNumber() {
      // id of the element you want to change
      number.innerHTML = `${num.var.toFixed(1)}`;
    }
    const tl4 = gsap.timeline();
    tl4.to(num, {
      var: 2.1, 
      duration: 1,
      onUpdate: changeNumber,
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

    ScrollTrigger.create({
      trigger: "#grafico",
      scrub: false,
      toggleActions: "play reverse play reverse",
      onToggle: () => {
        setChapterNumberMap("grafico");
      },
    });

    const tl12 = gsap.timeline();
    tl12
      .set("#acompanhe", { opacity: 0 })
      .to("#acompanhe", { opacity: 0, duration: 30 })
      .to("#acompanhe", { opacity: 1, duration: 6 })
      .to("#acompanhe", { opacity: 1, duration: 20 })
      .to("#acompanhe", { opacity: 0, duration: 6 })
      .to("#acompanhe", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl12,
      trigger: "#acompanhe",
      onToggle: () => {
        setChapterNumberMap("acompanhe");
      },
    });

    ScrollTrigger.create({
      trigger: "#bairromaravilha",
      onToggle: () => {
        setChapterNumberMap("bairromaravilha");
      },
    });

    ScrollTrigger.create({
      trigger: "#bairromaravilhaum",
      onToggle: () => {
        setChapterNumberMap("bairromaravilhaum");
      },
    });

    const tl16 = gsap.timeline();
    tl16
      .set("#seop2", { opacity: 0 })
      .to("#seop2", { opacity: 0, duration: 30 })
      .to("#seop2", { opacity: 1, duration: 6 })
      .to("#seop2", { opacity: 1, duration: 20 })
      .to("#seop2", { opacity: 1, duration: 6 })
      .to("#seop2", { opacity: 1, duration: 28 });


    ScrollTrigger.create({
      animation: tl16,
      trigger: "#seop2",
      onToggle: () => {
        setChapterNumberMap("seop2");
      },
    });

    ScrollTrigger.create({
      trigger: "#seop3",
      onToggle: () => {
        setChapterNumberMap("seop3");
      },
    });

    ScrollTrigger.create({
      trigger: "#seop4",
      onToggle: () => {
        setChapterNumberMap("seop4");
      },
    });

    const tl11 = gsap.timeline();
    tl11
      .set("#fim", { opacity: 1 })
      .to("#fim", { opacity: 1, duration: 30 })
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
        mapStyle="mapbox://styles/escritoriodedados/cls259dkn01tx01nlbomw7vn7"
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
      <chapterDiv.Prejuizo id={"prejuizo"} />
      <chapterDiv.Cor id={"cor"} />
      <chapterDiv.CorUm id={"corum"} />
      <chapterDiv.Exemplo0 id={"exemplo0"} />
      <chapterDiv.Exemplo0um id={"exemplo0um"} />
      <chapterDiv.Exemplo1 id={"exemplo1"} />
      <chapterDiv.Exemplo2 id={"exemplo2"} />
      <chapterDiv.Exemplo2um id={"exemplo2um"} />
      <chapterDiv.Exemplo3 id={"exemplo3"} />
      <chapterDiv.Exemplo3um id={"exemplo3um"} />
      <chapterDiv.BairroMaravilha id={"bairromaravilha"} />
      <chapterDiv.BairroMaravilhaUm id={"bairromaravilhaum"} />
      <chapterDiv.Seop2 id={"seop2"} />
      <chapterDiv.Fim id={"fim"} />
    </>
  );
}
