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

gsap.registerPlugin(ScrollTrigger);

export default function Enchentes() {
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
        const video = document.getElementById("quadro_video");
        let frameNumber = Math.floor(self.progress * 497) + 1;
        if (frameNumber > 450) {
          frameNumber = 450;
        }
        const imageUrl = `https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/enchentes/quadro_um/${frameNumber}.jpg`;
        video.src = imageUrl;
      },
    });
    

    ScrollTrigger.create({
      trigger: "#parteum",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video");
        const progress = self.progress;
        const imageUrl =
          progress < 0.5
            ? "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/enchentes/quadro_um/450.jpg"
            : "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/enchentes/quadro_dois/1.jpg"
        video.src = imageUrl;
      },
    });

    ScrollTrigger.create({
      trigger: "#quadro_dois",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video");
        let frameNumber = Math.floor(self.progress * 1150) + 1;
        if (frameNumber > 1124) {
          frameNumber = 1124;
        }
        const imageUrl = `https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/enchentes/quadro_dois/${frameNumber}.jpg`;
        console.log(imageUrl)
        video.src = imageUrl;
      },
    });
  }, []);

  return (
    <>
      <div className="fixed -z-10 flex flex-col items-center justify-center h-[100vh] w-[100vw]">
        <img
          id={"quadro_video"}
          src={"https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/enchentes/quadro_um/1.jpg"}
          className="lg:h-auto lg:w-[700px] border-4 border-black"
        ></img>
      </div>
      <chapterDiv.Capa id={"capa"} />
      <chapterDiv.ContextoHistorico id={"contexto_historico"} />
      <div className="h-[95vh] w-full bg-transparent"></div>
      <chapterDiv.QuadroUm id={"quadro_um"} />
      <chapterDiv.ParteUm id={"parteum"} />
      <div className="h-[95vh] w-full bg-transparent"></div>
      <chapterDiv.QuadroDois id={"quadro_dois"} />
      <chapterDiv.ParteDois id={"partedois"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}
