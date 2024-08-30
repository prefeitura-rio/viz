// Mandatory.
import { useEffect, useState, useRef } from "react";
import CustomMultilayerMap from "../civitas/components/custom_multilayer_map";
import MapboxElevationApp from "./MapboxElevationApp";
import "./style.css";
// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";

// Scroll and animation stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as styles from "./components/chapters.style";
import logo from "./images/logo.png";
import moto_loading from "./images/moto_loading.gif";
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
  console.log(chapterNumberMap);
  useEffect(() => {
    switch (chapterNumberMap) {
      case "capa":
        setPosition(chapterMap.Capa().location);
        setLayers(chapterMap.Capa().layers);
        break;
      // case "intro":
      //   setPosition(chapterMap.Intro().location);
      //   setLayers(chapterMap.Intro().layers);
      //   break;
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
      case "exemplo3":
        setPosition(chapterMap.Exemplo3().location);
        setLayers(chapterMap.Exemplo3().layers);
        break;
      // case "exemplo5":
      //   setPosition(chapterMap.Exemplo5().location);
      //   setLayers(chapterMap.Exemplo5().layers);
      //   break;
      case "exemplo6":
        setPosition(chapterMap.Exemplo6().location);
        setLayers(chapterMap.Exemplo6().layers);
        break;
      case "exemplo7":
        setPosition(chapterMap.Exemplo7().location);
        setLayers(chapterMap.Exemplo7().layers);
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
        // case "seop3":
        //   setPosition(chapterMap.Seop3().location);
        //   setLayers(chapterMap.Seop3().layers);
        break;
      case "seop3_2":
        setPosition(chapterMap.Seop3_2().location);
        setLayers(chapterMap.Seop3_2().layers);
        break;
      case "seop4":
        setPosition(chapterMap.Seop4().location);
        setLayers(chapterMap.Seop4().layers);
        break;
      case "seop5":
        setPosition(chapterMap.Seop5().location);
        setLayers(chapterMap.Seop5().layers);
        break;
      case "seop5_2":
        setPosition(chapterMap.Seop5_2().location);
        setLayers(chapterMap.Seop5_2().layers);
        break;
      case "seop6":
        setPosition(chapterMap.Seop6().location);
        setLayers(chapterMap.Seop6().layers);
        break;
      case "seop7":
        setPosition(chapterMap.Seop7().location);
        setLayers(chapterMap.Seop7().layers);
        break;
      case "drawMap":
        setPosition(chapterMap.DrawMap().location);
        setTimeout(() => { setPosition(chapterMap.Seop8().location) }, 3100);
        // setLayers(chapterMap.DrawMap().layers);
        break;
      case "seop8":
        setPosition(chapterMap.Seop8().location);
        setLayers(chapterMap.Seop8().layers);
        break;
      case "seop9":
        setPosition(chapterMap.Seop9().location);
        setLayers(chapterMap.Seop9().layers);
        break;
      case "seop10":
        setPosition(chapterMap.Seop10().location);
        setLayers(chapterMap.Seop10().layers);
        break;
      case "exemplo8":
        setPosition(chapterMap.Exemplo8().location);
        setLayers(chapterMap.Exemplo8().layers);
        break;
      case "exemplo4":
        setPosition(chapterMap.Exemplo4().location);
        setLayers(chapterMap.Exemplo4().layers);
        break;
      default:
        break;
    }
  }, [chapterNumberMap]);

  const vh = (coef) => window.innerHeight * (coef / 100);
  const vw = (coef) => window.innerWidth * (coef / 100);
  const [cardHeight, setCardHeight] = useState(1);
  const [currentHour, setCurrentHour] = useState("00:00");
  const [currentBairro, setCurrentBairro] = useState("");
  const [loadingDrawMap, setLoadingDrawMap] = useState(false);

  useEffect(() => {
    gsap.defaults({ ease: "none" });

    ScrollTrigger.defaults({
      start: "top center",
      end: "bottom center",
      markers: false,
      scrub: true,
      // toggleActions: "play reverse play reverse",
    });

    const tl2 = gsap.timeline();
    tl2
      .set("#capa", { opacity: 1 })
      .to("#capa", { opacity: 0.9, duration: 30 })
      .to("#capa", { opacity: 10, duration: 6 })
      .to("#capa", { opacity: 1, duration: 20 })
      .to("#capa", { opacity: 0, duration: 6 })
      .to("#capa", { opacity: 0, duration: 28 })
      .to("#capa", { opacity: 0, duration: 6 });

    ScrollTrigger.create({
      animation: tl2,
      trigger: "#capa",
      onToggle: () => {
        setChapterNumberMap("capa");
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
      trigger: "#exemplo11",
      onToggle: () => {
        setChapterNumberMap("exemplo11");
      },
    });

    ScrollTrigger.create({
      trigger: "#exemplo2",
      onToggle: () => {
        setChapterNumberMap("exemplo2");
        setCurrentBairro("Senador Vasconcelos");
      },
      onEnter: () => {
        startHourCounter(0, 343);
      },
      onEnterBack: () => {
        startHourCounter(0, 343);
      },

    });


    ScrollTrigger.create({
      trigger: "#exemplo3",
      onToggle: () => {
        setChapterNumberMap("exemplo3");
        setCurrentBairro("Senador Vasconcelos");
      },
      onEnter: () => {
        startHourCounter(343, 343);
      },
      onEnterBack: () => {
        startHourCounter(343, 343);
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const elementHeightPercent = 1 + progress * 1.8;
        if (elementHeightPercent > 1.6) {
          setCardHeight(elementHeightPercent);
        } else {
          setCardHeight(1);
        }
        // console.log(elementHeightPercent);
      }
    });

    // const tl13 = gsap.timeline();
    // tl13
    //   .set("#exemplo4", { opacity: 0 })
    //   .to("#exemplo4", { opacity: 0, duration: 30 })
    //   .to("#exemplo4", { opacity: 1, duration: 6 })
    //   .to("#exemplo4", { opacity: 1, duration: 20 })
    //   .to("#exemplo4", { opacity: 0, duration: 6 })
    //   .to("#exemplo4", { opacity: 0, duration: 28 });

    const flicker = () => {
      const clockElement = document.querySelector('.clock');
      if (clockElement) {
        clockElement.classList.add('flicker');

        // Remove the flicker class after the animation completes
        setTimeout(() => {
          clockElement.classList.remove('flicker');
        }, 1500); // Match the duration of the CSS animation
      }
    }

    ScrollTrigger.create({
      // animation: tl13,
      trigger: "#exemplo4",
      onToggle: () => {
        setChapterNumberMap("exemplo4");
        setCurrentBairro("Bento Ribeiro");
        flicker();
      },
      onEnter: () => {
        startHourCounter(343, 415);
      },
      onEnterBack: () => {
        startHourCounter(343, 415);
      },
    });

    // ScrollTrigger.create({
    //   trigger: "#exemplo5",
    //   onToggle: () => {
    //     setChapterNumberMap("exemplo5");
    //   },
    // });

    // const tl14 = gsap.timeline();
    // tl14
    //   .set("#exemplo6", { opacity: 0 })
    //   .to("#exemplo6", { opacity: 0, duration: 30 })
    //   .to("#exemplo6", { opacity: 1, duration: 6 })
    //   .to("#exemplo6", { opacity: 1, duration: 20 })
    //   .to("#exemplo6", { opacity: 0, duration: 6 })
    //   .to("#exemplo6", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      // animation: tl14,
      trigger: "#exemplo6",
      onToggle: () => {
        setChapterNumberMap("exemplo6");
        setCurrentBairro("Méier");
        flicker();
      },
      onEnter: () => {
        startHourCounter(415, 617);
      },
      onEnterBack: () => {
        startHourCounter(415, 617);
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const elementHeightPercent = 1 + progress * 1.8;
        if (elementHeightPercent > 1.6) {
          setCardHeight(elementHeightPercent);
        } else {
          setCardHeight(1);
        }
        // console.log(elementHeightPercent);
      }
    });

    var startCount = 0,
      num = { var: startCount };
    // function changeNumber() {
    //   // id of the element you want to change
    //   number.innerHTML = num.var.toFixed();
    // }
    const tl4 = gsap.timeline();
    tl4.to(num, {
      var: 646,
      duration: 1,
      // onUpdate: changeNumber,
    });
    ScrollTrigger.create({
      animation: tl4,
      trigger: "#exemplo7",
      scrub: false,
      toggleActions: "play reverse play reverse",
      onToggle: () => {
        setChapterNumberMap("exemplo7");
        setCurrentBairro("Centro de Operações");
      },
      onEnter: () => {
        startHourCounterShort(617, 628);
      },
      onEnterBack: () => {
        startHourCounterShort(617, 628);
      },
    });
    ScrollTrigger.create({
      animation: tl4,
      trigger: "#exemplo72",
      scrub: false,
      toggleActions: "play reverse play reverse",
      onToggle: () => {
        flicker();
        setChapterNumberMap("exemplo7");
        setCurrentBairro("Centro de Operações");
      },
      onEnter: () => {
        startHourCounterShort(628, 630);
      },
      onEnterBack: () => {
        startHourCounterShort(628, 630);
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
      .set("#exemplo8", { opacity: 0 })
      .to("#exemplo8", { opacity: 0, duration: 30 })
      .to("#exemplo8", { opacity: 1, duration: 6 })
      .to("#exemplo8", { opacity: 1, duration: 20 })
      .to("#exemplo8", { opacity: 0, duration: 6 })
      .to("#exemplo8", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl12,
      trigger: "#exemplo8",
      onToggle: () => {
        setChapterNumberMap("exemplo8");
        flicker();
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const elementHeightPercent = 1 + progress * 1.8;
        if (elementHeightPercent > 1.6) {
          setCardHeight(elementHeightPercent);
        } else {
          setCardHeight(1);
        }
        // console.log(elementHeightPercent);
      }
    });

    ScrollTrigger.create({
      trigger: "#seop1",
      onToggle: () => {
        setChapterNumberMap("seop1");
        setCurrentBairro("Centro de Operações");
        flicker();
      },
      onEnter: () => {
        startHourCounterShort(635, 636);
      },
      onEnterBack: () => {
        startHourCounterShort(635, 636);
      },
    });

    const tl14 = gsap.timeline();
    tl14
      .set("#seop2", { opacity: 0 })
      .to("#seop2", { opacity: 0, duration: 30 })
      .to("#seop2", { opacity: 1, duration: 6 })
      .to("#seop2", { opacity: 1, duration: 20 })
      .to("#seop2", { opacity: 0, duration: 6 })
      .to("#seop2", { opacity: 0, duration: 28 });

    ScrollTrigger.create({
      animation: tl14,
      trigger: "#seop2",
      onToggle: () => {
        setCurrentBairro("Estácio");
      },
      onEnter: () => {
        startHourCounterShort(630, 635);
        setChapterNumberMap("seop2");
      },
      onEnterBack: () => {
        startHourCounterShort(630, 635);
      },
    });

    ScrollTrigger.create({
      trigger: "#seop3",
      onToggle: () => {
        setChapterNumberMap("seop3");
        setCurrentBairro("Estácio");
        flicker();
      },
      onEnter: () => {
        startHourCounterShort(635, 635);
      },
      onEnterBack: () => {
        startHourCounterShort(635, 635);
      },
    });

    ScrollTrigger.create({
      trigger: "#seop3_2",
      onToggle: () => {
        setChapterNumberMap("seop3_2");
        setCurrentBairro("Estácio");
        flicker();
      },
      onEnter: () => {
        startHourCounterShort(636, 645);
      },
      onEnterBack: () => {
        startHourCounterShort(636, 645);
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const elementHeightPercent = 1 + progress * 1.8;
        if (elementHeightPercent > 1.6) {
          setCardHeight(elementHeightPercent);
        } else {
          setCardHeight(1);
        }
        // console.log(elementHeightPercent);
      }
    });

    ScrollTrigger.create({
      trigger: "#seop4",
      onToggle: () => {
        setChapterNumberMap("seop4");
        setCurrentBairro("Campo Grande");
        flicker();
      },
      onEnter: () => {
        startHourCounterShort(651, 662);
      },
      onEnterBack: () => {
        startHourCounterShort(651, 662);
      },
    });
    ScrollTrigger.create({
      trigger: "#seop5",
      onToggle: () => {
        setChapterNumberMap("seop5");
      },
    });
    ScrollTrigger.create({
      trigger: "#seop5_2",
      onToggle: () => {
        setChapterNumberMap("seop5_2");
      },
    });
    ScrollTrigger.create({
      trigger: "#seop6",
      onToggle: () => {
        setChapterNumberMap("seop6");
      },
    });
    ScrollTrigger.create({
      trigger: "#seop7",
      onToggle: () => {
        setChapterNumberMap("seop7");
      },
    });
    ScrollTrigger.create({
      trigger: "#drawMap",
      start: "top bottom",
      onEnter: () => {
        setChapterNumberMap("drawMap");
        setLoadingDrawMap(true);
      },
    });
    ScrollTrigger.create({
      trigger: "#seop8",
      onToggle: () => {
        setChapterNumberMap("seop8");
        setCurrentBairro("Barra da Tijuca");
        flicker();
      },
      onEnter: () => {
        startHourCounter(662, 775);
      },
      onEnterBack: () => {
        startHourCounter(662, 775);
      },
    });
    // ScrollTrigger.create({
    //   trigger: "#seop9",
    //   onToggle: () => {
    //     setChapterNumberMap("seop9");
    //   },
    // });
    ScrollTrigger.create({
      trigger: "#seop10",
      onToggle: () => {
        setChapterNumberMap("seop10");
        setCurrentBairro("Bandidos presos");
        flicker();
      },
      onEnter: () => {
        startHourCounter(775, 813);
      },
      onEnterBack: () => {
        startHourCounter(775, 813);
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
  const startHourCounter = (initMinutes, targetMinutes) => {
    let minutes = initMinutes;
    // Target is 5 hours and 43 minutes
    const totalTransitionTime = 1000; // 1 second in milliseconds
    const steps = Math.ceil((targetMinutes - initMinutes) / 10); // Calculate steps with increments of 10
    const intervalTime = totalTransitionTime / steps; // Calculate interval time

    const interval = setInterval(() => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const formattedTime = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
      setCurrentHour(formattedTime);

      if (minutes >= targetMinutes) {
        clearInterval(interval);
        setCurrentHour(formattedTime); // Ensure it stops exactly at 05:43
      } else {
        minutes += 20;
        if (minutes > targetMinutes) {
          minutes = targetMinutes; // Ensure it doesn't go past the target
        }
      }
    }, intervalTime);
  };
  // for small intervals
  const startHourCounterShort = (initMinutes, targetMinutes) => {
    let minutes = initMinutes;
    // Target is 5 hours and 43 minutes
    const totalTransitionTime = 1; // 1 second in milliseconds
    const steps = Math.ceil((targetMinutes - initMinutes) / 10); // Calculate steps with increments of 10
    const intervalTime = totalTransitionTime / steps; // Calculate interval time

    const interval = setInterval(() => {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const formattedTime = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
      setCurrentHour(formattedTime);

      if (minutes >= targetMinutes) {
        clearInterval(interval);
        setCurrentHour(formattedTime); // Ensure it stops exactly at 05:43
      } else {
        minutes++;
        if (minutes > targetMinutes) {
          minutes = targetMinutes; // Ensure it doesn't go past the target
        }
      }
    }, intervalTime);
  };

  useEffect(() => {
    if (loadingDrawMap) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";

      // Hide the layer after 3 seconds
      const timer = setTimeout(() => {
        setLoadingDrawMap(false);
        document.body.style.overflow = "auto";
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [loadingDrawMap]);


  return (
    <>
      {loadingDrawMap && (
        <div className="overlay">
          <div className="overlay-content">
            <img
              src={moto_loading}
              alt="Loading"
              className="overlay-gif"
            />
            <h1 className="overlay-title">Siga os suspeitos!</h1>
          </div>
        </div>
      )}
      <CustomMultilayerMap
        interactive={false}
        scrollZoom={false}
        showLayers={false}
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        mapStyle="mapbox://styles/escritoriodedados/clzu707th00ro01pc69du960f"
        layers={layers}
        location={location}
        chapterNumberMap={chapterNumberMap}
        cardHeight={cardHeight}
        videoInfoArray={[
          {
            lat: -22.89389,
            lon: -43.53625,
            src: "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/CIVITAS/V%C3%ADdeo%20capa%20moto%20meier%20cortado.mp4",
            chapterNumberMap: "exemplo2",
            ehImagem: true,
            srcImagem: "dois_caras_numa_moto",
            ehPin: false
          },
          {
            lat: -22.89389,
            lon: -43.53625,
            src: "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/CIVITAS/V%C3%ADdeo%20capa_historia%20carro%20radar%20cortado.mp4",
            ehImagem: true,
            srcImagem: "imagem16.png",
            chapterNumberMap: "exemplo3",
            ehPin: false
          },
          {
            lat: -22.86589,
            lon: -43.35988,
            src: "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/CIVITAS/V%C3%ADdeo%20furto%20santa%20barbara%20cortado%20pb.mp4",
            chapterNumberMap: "exemplo4",
            ehRadar: true,
            ehPin: false
          },
          {
            lat: -22.90345,
            lon: -43.28141,
            src: "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/CIVITAS/CENA_02.mp4",
            chapterNumberMap: "exemplo6",
            ehImagem: true,
            srcImagem: "assalto",
            ehPin: false
          },
          {
            lat: -22.99386,
            lon: -43.27872,
            src: "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/CIVITAS/16.%20Video%20moto%20andando%20cortad.mp4",
            chapterNumberMap: "exemplo2",
            ehPin: false
          },
          // {
          //   lat: -22.87866,
          //   lon: -43.27090,
          //   src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
          //   chapterNumberMap: "exemplo5",
          //   ehPin: false
          // },
          // {
          //   lat: -22.90345,
          //   lon: -43.28141,
          //   src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
          //   chapterNumberMap: "exemplo6",
          //   ehPin: false
          // },
          // {
          //   lat: -22.91209,
          //   lon: -43.20346,
          //   src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
          //   chapterNumberMap: "exemplo7",
          //   ehPin: true
          // },
          {
            lat: -22.916717828353868,
            lon: -43.2044788025955,
            src: "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/CIVITAS/CENA_011.mp4",
            chapterNumberMap: "exemplo8",
            ehPin: false
          },
          {
            lat: -22.870894075477764,
            lon: -43.36705499276124,
            src: "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/CIVITAS/CENA_011.mp4",
            chapterNumberMap: "seop3",
            ehPin: false
          },
          // {
          //   lat: -22.91430,
          //   lon: -43.20708,
          //   src: "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/CIVITAS/CENA_02.mp4",
          //   chapterNumberMap: "seop3",
          //   ehPin: false
          // },
          {
            lat: -22.91430,
            lon: -43.20708,
            src: "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/CIVITAS/CENA_02.mp4",
            chapterNumberMap: "seop3_2",
            ehPin: false
          },
          // {
          //   lat: -22.86300034959031,
          //   lon: -43.543917233799284,
          //   src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
          //   chapterNumberMap: "seop4",
          //   ehPin: true
          // },

          // {
          //   lat: -22.86599669984288,
          //   lon: -43.361403212469696,
          //   src: "imagem16.png",
          //   ehImagem: true,
          //   chapterNumberMap: "seop5_2",
          //   ehPin: false
          // },
        ]}
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
      <styles.Logo src={logo}></styles.Logo>
      {(chapterNumberMap !== "capa" && chapterNumberMap !== "zoom" && chapterNumberMap !== "exemplo1" && chapterNumberMap !== "exemplo1" && chapterNumberMap !== "seop7" && chapterNumberMap !== "drawMap" && chapterNumberMap !== "fim") &&
        <div className="clock">
          {currentHour} AM
          <div className="clock-description">{currentBairro}</div>
        </div>
      }
      <chapterDiv.Capa id={"capa"} />
      {/* <chapterDiv.Intro id={"intro"} /> */}
      <chapterDiv.Zoom id={"zoom"} />
      <chapterDiv.Exemplo1 id={"exemplo1"} />
      <chapterDiv.Exemplo11 id={"exemplo11"} />
      <chapterDiv.Exemplo2 id={"exemplo2"} />
      <chapterDiv.Exemplo3 id={"exemplo3"} />
      <chapterDiv.Exemplo4 id={"exemplo4"} />
      <chapterDiv.Exemplo5 id={"exemplo5"} />
      <chapterDiv.Exemplo6 id={"exemplo6"} />
      <chapterDiv.Exemplo7 id={"exemplo7"} />
      <chapterDiv.Exemplo72 id={"exemplo72"} />
      <chapterDiv.Grafico id={"grafico"} />
      <chapterDiv.Seop2 id={"seop2"} />
      <chapterDiv.Exemplo8 id={"exemplo8"} />
      <chapterDiv.Seop1 id={"seop1"} />
      <chapterDiv.Seop3_2 id={"seop3_2"} />
      <chapterDiv.Seop4 id={"seop4"} />
      <chapterDiv.Seop5 id={"seop5"} />
      <chapterDiv.Seop5_2 id={"seop5_2"} />
      <chapterDiv.Seop6 id={"seop6"} />
      <chapterDiv.Seop7 id={"seop7"} />
      <chapterDiv.DrawMap chapterNumberMap={chapterNumberMap} id={"drawMap"} />
      <chapterDiv.Seop8 id={"seop8"} />
      <chapterDiv.Seop9 id={"seop9"} />
      <chapterDiv.Seop10 id={"seop10"} />
      <chapterDiv.Fim id={"fim"} />
    </>
  );
}
