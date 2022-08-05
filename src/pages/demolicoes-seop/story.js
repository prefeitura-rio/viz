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
  const [location, setLocation] = useState(chapterMap.One().location);

  const [layers, setLayers] = useState(chapterMap.One().layers);
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
      case 1:
        setPosition(chapterMap.One().location);
        setLayers(chapterMap.One().layers);
        break;
      case 2:
        setPosition(chapterMap.One().location);
        setLayers(chapterMap.One().layers);
        break;
      case "prejuizo":
        setPosition(chapterMap.Prejuizo().location);
        setLayers(chapterMap.Prejuizo().layers);
        break;
      case "grafico":
        setPosition(chapterMap.Grafico().location);
        setLayers(chapterMap.Grafico().layers);
        break;
      case "exemplo1":
        setPosition(chapterMap.Exemplo1().location);
        setLayers(chapterMap.Exemplo1().layers);
        break;
      case "exemplo2":
        setPosition(chapterMap.Exemplo2().location);
        setLayers(chapterMap.Exemplo2().layers);
        break;
      case "exemplo3":
        setPosition(chapterMap.Exemplo3().location);
        setLayers(chapterMap.Exemplo3().layers);
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
      markers: true,
      scrub: true,
      // toggleActions: "play reverse play reverse",
    });

    ScrollTrigger.create({
      trigger: "#chapter-1",
      onToggle: () => {
        setChapterNumberMap(1);
      },
    });

    const tl2 = gsap.timeline();
    tl2
      .set("#chapter-2", { opacity: 1 })
      .to("#chapter-2", { opacity: 1, duration: 30 })
      .to("#chapter-2", { opacity: 1, duration: 6 })
      .to("#chapter-2", { opacity: 1, duration: 20 })
      .to("#chapter-2", { opacity: 0, duration: 6 })
      .to("#chapter-2", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl2,
      trigger: "#chapter-2",
      onToggle: () => {
        setChapterNumberMap(1);
      },
    });

    ScrollTrigger.create({
      trigger: "#chapter-prejuizo",
      onToggle: () => {
        setChapterNumberMap("prejuizo");
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
      var: 150,
      duration: 2,
      onUpdate: changeNumber,
    });

    ScrollTrigger.create({
      animation: tl4,
      trigger: "#chapter-4",
      scrub: false,
      toggleActions: "play reverse play reverse",
      onToggle: () => {
        setChapterNumberMap("grafico");
      },
    });

    ScrollTrigger.create({
      trigger: "#chapter-exemplo1",
      onToggle: () => {
        setChapterNumberMap("exemplo1");
      },
    });

    ScrollTrigger.create({
      trigger: "#chapter-exemplo2",
      onToggle: () => {
        setChapterNumberMap("exemplo2");
      },
    });

    ScrollTrigger.create({
      trigger: "#chapter-exemplo3",
      onToggle: () => {
        setChapterNumberMap("exemplo3");
      },
    });

    const tl13 = gsap.timeline();
    tl13
      .set("#chapter-oeste", { opacity: 0 })
      .to("#chapter-oeste", { opacity: 0, duration: 30 })
      .to("#chapter-oeste", { opacity: 1, duration: 6 })
      .to("#chapter-oeste", { opacity: 1, duration: 20 })
      .to("#chapter-oeste", { opacity: 0, duration: 6 })
      .to("#chapter-oeste", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl13,
      trigger: "#chapter-oeste",
      onToggle: () => {
        setChapterNumberMap("oeste");
      },
    });

    const tl12 = gsap.timeline();
    tl12
      .set("#chapter-acompanhe", { opacity: 0 })
      .to("#chapter-acompanhe", { opacity: 0, duration: 30 })
      .to("#chapter-acompanhe", { opacity: 1, duration: 6 })
      .to("#chapter-acompanhe", { opacity: 1, duration: 20 })
      .to("#chapter-acompanhe", { opacity: 0, duration: 6 })
      .to("#chapter-acompanhe", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl12,
      trigger: "#chapter-acompanhe",
      onToggle: () => {
        setChapterNumberMap("acompanhe");
      },
    });

    const tl11 = gsap.timeline();
    tl11
      .set("#chapter-fim", { opacity: 0 })
      .to("#chapter-fim", { opacity: 0, duration: 30 })
      .to("#chapter-fim", { opacity: 1, duration: 6 })
      .to("#chapter-fim", { opacity: 1, duration: 20 })
      .to("#chapter-fim", { opacity: 1, duration: 6 })
      .to("#chapter-fim", { opacity: 1, duration: 28 });

    ScrollTrigger.create({
      animation: tl11,
      trigger: "#chapter-fim",
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
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        mapStyle="mapbox://styles/escritoriodedados/cl6e3p6as001814qxcun8bjo1"
        layers={layers}
        location={location}
        mapCSS={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100vh",
          // maxWidth: "100%",
          zIndex: "-9999",
        }}
        animationLoopLength={21600}
        animationSpeed={1}
      />
      <chapterDiv.One id={"chapter-1"} />
      <chapterDiv.Two id={"chapter-2"} />
      <chapterDiv.Exemplo1 id={"chapter-exemplo1"} />
      <chapterDiv.Exemplo2 id={"chapter-exemplo2"} />
      <chapterDiv.Exemplo3 id={"chapter-exemplo3"} />
      <chapterDiv.Oeste id={"chapter-oeste"} />
      <chapterDiv.Prejuizo id={"chapter-prejuizo"} />
      <chapterDiv.Grafico id={"chapter-grafico"} />
      <chapterDiv.Acompanhe id={"chapter-acompanhe"} />
      <chapterDiv.Seop1 id={"chapter-seop1"} />
      <chapterDiv.Seop2 id={"chapter-seop2"} />
      <chapterDiv.Fim id={"chapter-fim"} />
    </>
  );
}