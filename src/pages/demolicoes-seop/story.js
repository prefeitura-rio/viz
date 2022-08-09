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
        break;
      case "zoom":
        setPosition(chapterMap.Zoom().location);
        setLayers(chapterMap.Zoom().layers);
        break;
      case "exemplo1":
        setPosition(chapterMap.Exemplo1().location);
        setLayers(chapterMap.Exemplo1().layers);
        break;
      case "exemplo2":
        setPosition(chapterMap.Exemplo2().location);
        setLayers(chapterMap.Exemplo2().layers);
        break;
      // case "exemplo3":
      //   setPosition(chapterMap.Exemplo3().location);
      //   setLayers(chapterMap.Exemplo3().layers);
      //   break;
      case "mapa":
        setPosition(chapterMap.Mapa().location);
        setLayers(chapterMap.Mapa().layers);
        break;
      case "prejuizo":
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
      case "seop1":
        setPosition(chapterMap.Seop1().location);
        setLayers(chapterMap.Seop1().layers);
        break;
      case "seop2":
        setPosition(chapterMap.Seop2().location);
        setLayers(chapterMap.Seop2().layers);
        break;
      case "seop3":
        setPosition(chapterMap.Seop3().location);
        setLayers(chapterMap.Seop3().layers);
        break;
      case "seop4":
        setPosition(chapterMap.Seop4().location);
        setLayers(chapterMap.Seop4().layers);
        break;
      case "acompanhe":
        setPosition(chapterMap.Acompanhe().location);
        setLayers(chapterMap.Acompanhe().layers);
        break;
      case "oeste":
        setPosition(chapterMap.Oeste().location);
        setLayers(chapterMap.Oeste().layers);
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

    // ScrollTrigger.create({
    //   trigger: "#exemplo3",
    //   onToggle: () => {
    //     setChapterNumberMap("exemplo3");
    //   },
    // });

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
      trigger: "#seop1",
      onToggle: () => {
        setChapterNumberMap("seop1");
      },
    });

    ScrollTrigger.create({
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
        interactive={false}
        scrollZoom={false}
        showLayers={false}
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        mapStyle="mapbox://styles/escritoriodedados/cl6e3p6as001814qxcun8bjo1"
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
      <chapterDiv.Zoom id={"zoom"} />
      <chapterDiv.Exemplo1 id={"exemplo1"} />
      <chapterDiv.Exemplo2 id={"exemplo2"} />
      {/* <chapterDiv.Exemplo3 id={"exemplo3"} /> */}
      <chapterDiv.Oeste id={"oeste"} />
      <chapterDiv.Mapa id={"mapa"} />
      <chapterDiv.Prejuizo id={"prejuizo"} />
      <chapterDiv.Grafico id={"grafico"} />
      <chapterDiv.Acompanhe id={"acompanhe"} />
      <chapterDiv.Seop1 id={"seop1"} />
      <chapterDiv.Seop2 id={"seop2"} />
      <chapterDiv.Seop3 id={"seop3"} />
      <chapterDiv.Seop4 id={"seop4"} />
      <chapterDiv.Fim id={"fim"} />
    </>
  );
}
