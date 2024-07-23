// Mandatory
import { useEffect, useState, useRef } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";
import { Controller, Scene } from "react-scrollmagic";

// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";

// Scroll and animation  stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//style css
import "./style.css";
import { isMobile } from "react-device-detect";

gsap.registerPlugin(ScrollTrigger);

export default function MegaEventos() {
  const vh = (coef) => window.innerHeight * (coef / 100);
  const vw = (coef) => window.innerWidth * (coef / 100);

  useEffect(() => {
    gsap.defaults({ ease: "none" });
    ScrollTrigger.defaults({
      start: "top center",
      end: "bottom center",
      markers: false,
      scrub: true,
      toggleActions: "play reverse play reverse",
    });

    ScrollTrigger.create({
      trigger: "#quadro_um",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video_um");
        let frameNumber = Math.floor(self.progress * 548) + 1;
        if (frameNumber > 548) {
          frameNumber = 548;
        }

        const imageUrl = `https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_um/${frameNumber}.jpg`;
        video.src = imageUrl;
        console.log("frameNumber", frameNumber);
      },
    });
    ScrollTrigger.create({
      trigger: "#quadro_dois",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video_um");
        let frameNumber = Math.floor(self.progress * 493) + 1;
        if (frameNumber > 493) {
          frameNumber = 493;
        }
        const imageUrl = `https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_um/${548 + frameNumber}.jpg`;
        video.src = imageUrl;
        console.log("frameNumber2", frameNumber);
      },
    });
    ScrollTrigger.create({
      trigger: "#quadro_tres",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video_um");
        let frameNumber = Math.floor(self.progress * 191) + 1;
        if (frameNumber > 191) {
          frameNumber = 191;
        }
        const imageUrl = `https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_um/${548 + 493 + frameNumber}.jpg`;
        video.src = imageUrl;
        console.log("frameNumber3", frameNumber);
      },
    });
    ScrollTrigger.create({
      trigger: "#quadro_quatro",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video_um");
        let frameNumber = Math.floor(self.progress * 268) + 1;
        if (frameNumber > 268) {
          frameNumber = 268;
        }
        const imageUrl = `https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_um/${548 + 493 + 191 + frameNumber}.jpg`;
        video.src = imageUrl;
        console.log("frameNumber3", frameNumber);
      },
    });
    ScrollTrigger.create({
      trigger: "#quadro_cinco",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video_um");
        let frameNumber = Math.floor(self.progress * 187) + 1;
        if (frameNumber > 187) {
          frameNumber = 187;
        }
        const imageUrl = `https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_um/${548 + 493 + 191 + 268 + frameNumber}.jpg`;
        video.src = imageUrl;
        console.log("frameNumber3", frameNumber);
      },
    });
    ScrollTrigger.create({
      trigger: "#quadro_seis",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video_um");
        let frameNumber = Math.floor(self.progress * 188) + 1;
        if (frameNumber > 188) {
          frameNumber = 188;
        }
        const imageUrl = `https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_um/${548 + 493 + 191 + 268 + 187 + frameNumber}.jpg`;
        video.src = imageUrl;
        console.log("frameNumber3", frameNumber);
      },
    });

  }, []);

  return (
    <>
      <div className="containerr" style={{ backgroundColor: "beige", backgroundImage: "radial-gradient(circle, rgba(211, 211, 211, 0.4) 20%, transparent 20%)", backgroundSize: "10px 10px" }}>
        <chapterDiv.Capa style={{ display: "none" }} id={"capa"} />
        <chapterDiv.ContextoHistorico id={"contexto_historico"} />

        {/* ******************************** Video Scrolling 1 ********************************  */}

        <div style={{ display: "flex", flexDirection: "column", height: "4200vh", width: "100%", alignItems: "center" }}>
          <img
            style={{ position: "sticky", top: `${isMobile ? 'calc(50vh - 225px)' : 'calc(50vh - 45vh)'}` }}
            id={"quadro_video_um"}
            src={
              "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_um/1.jpg"
            }
            className="h-[450px] w-[360px] lg:h-auto lg:w-[72%] lg:max-h-[90vh] lg:max-w-[72vh] border-4 border-black"
          ></img>
          <chapterDiv.QuadroUm id={"quadro_um"} />
          <chapterDiv.QuadroDois id={"quadro_dois"} />
          <chapterDiv.QuadroTres id={"quadro_tres"} />
          <chapterDiv.QuadroQuatro id={"quadro_quatro"} />
          <chapterDiv.QuadroCinco id={"quadro_cinco"} />
          <chapterDiv.QuadroSeis id={"quadro_seis"} />
          {/* <chapterDiv.QuadroTres id={"quadro_seis"} /> */}
        </div>
        <chapterDiv.ParteUm id={"parteum"} />
        {/* ******************************** Video Scrolling 1 Fim ********************************  */}

        {/* ******************************** Video Scrolling 2 ********************************  */}
        {/* <div style={{ display: "flex", flexDirection: "column", height: "700vh", width: "100%", alignItems: "center" }}>
          <img
            style={{ position: "sticky", top: `${isMobile ? 'calc(50vh - 225px)' : 'calc(50vh - 45vh)'}` }}
            id={"quadro_video_dois"}
            src={
              "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_dois/1.jpg"
            }
            className="h-[450px] w-[360px] lg:h-auto lg:w-[72%] lg:max-h-[90vh] lg:max-w-[72vh] border-4 border-black"
          ></img>
          <chapterDiv.QuadroDois id={"quadro_dois"} />
        </div>
        <chapterDiv.ParteDois id={"partedois"} /> */}
        {/* ******************************** Video Scrolling 2 Fim ********************************  */}

        {/* ******************************** Video Scrolling 3 ********************************  */}
        {/* <div style={{ display: "flex", flexDirection: "column", height: "700vh", width: "100%", alignItems: "center" }}>
          <img
            style={{ position: "sticky", top: `${isMobile ? 'calc(50vh - 225px)' : 'calc(50vh - 45vh)'}` }}
            id={"quadro_video_tres"}
            src={
              "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_tres/1.jpg"
            }
            className="h-[450px] w-[360px] lg:h-auto lg:w-[72%] lg:max-h-[90vh] lg:max-w-[72vh] border-4 border-black"
          ></img>
          <chapterDiv.QuadroTres id={"quadro_tres"} />
        </div>
        <chapterDiv.ParteTres id={"partetres"} /> */}
        {/* ******************************** Video Scrolling 3 Fim ********************************  */}

        {/* ******************************** Video Scrolling 4 ********************************  */}
        {/* <div style={{ display: "flex", flexDirection: "column", height: "720vh", width: "100%", alignItems: "center" }}>
          <img
            style={{ position: "sticky", top: `${isMobile ? 'calc(50vh - 225px)' : 'calc(50vh - 45vh)'}` }}
            id={"quadro_video_quatro"}
            src={
              "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_quatro/1.jpg"
            }
            className="h-[450px] w-[360px] lg:h-auto lg:w-[72%] lg:max-h-[90vh] lg:max-w-[72vh] border-4 border-black"
          ></img>
          <chapterDiv.QuadroQuatro id={"quadro_quatro"} />
        </div>
        <chapterDiv.ParteQuatro id={"partequatro"} /> */}
        {/* ******************************** Video Scrolling 4 Fim ********************************  */}

        {/* ******************************** Video Scrolling 5 ********************************  */}
        {/* <div style={{ display: "flex", flexDirection: "column", height: "680vh", width: "100%", alignItems: "center" }}>
          <img
            style={{ position: "sticky", top: `${isMobile ? 'calc(50vh - 225px)' : 'calc(50vh - 45vh)'}` }}
            id={"quadro_video_cinco"}
            src={
              "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_cinco/1.jpg"
            }
            className="h-[450px] w-[360px] lg:h-auto lg:w-[72%] lg:max-h-[90vh] lg:max-w-[72vh] border-4 border-black"
          ></img>
          <chapterDiv.QuadroCinco id={"quadro_cinco"} />
        </div>
        <chapterDiv.ParteCinco id={"partecinco"} /> */}
        {/* ******************************** Video Scrolling 5 Fim ********************************  */}

        {/* ******************************** Video Scrolling 6 ********************************  */}
        {/* <div style={{ display: "flex", flexDirection: "column", height: "680vh", width: "100%", alignItems: "center" }}>
          <img
            style={{ position: "sticky", top: `${isMobile ? 'calc(50vh - 225px)' : 'calc(50vh - 45vh)'}` }}
            id={"quadro_video_seis"}
            src={
              "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/megaeventos/quadro_seis/1.jpg"
            }
            className="h-[450px] w-[360px] lg:h-auto lg:w-[72%] lg:max-h-[90vh] lg:max-w-[72vh] border-4 border-black"
          ></img>
          <chapterDiv.QuadroSeis id={"quadro_seis"} />
        </div>
        <chapterDiv.ParteSeis id={"parteseis"} /> */}
        {/* ******************************** Video Scrolling 6 Fim ********************************  */}



        <chapterDiv.Creditos id={"creditos"} />
      </div>
    </>
  );
}
