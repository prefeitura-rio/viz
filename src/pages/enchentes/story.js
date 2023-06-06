// Mandatory
import { useEffect, useState, useRef } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";
import { Controller, Scene } from "react-scrollmagic";

// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";
import first_frame from "./videos/quadro_um/1.jpg";

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
        const frameNumber = Math.floor(self.progress * 497) + 1;
        video.src =
          require(`./videos/quadro_um/${frameNumber.toString()}.jpg`).default;
      },
    });

    ScrollTrigger.create({
      trigger: "#parteum",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video");
        const progress = self.progress;
        const imageSource =
          progress < 0.5
            ? require("./videos/quadro_um/450.jpg").default
            : require("./videos/quadro_dois/1.jpg").default;
        video.src = imageSource;
      },
    });

    ScrollTrigger.create({
      trigger: "#quadro_dois",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video");
        const frameNumber = Math.floor(self.progress * 1150) + 1;
        console.log(`./videos/quadro_dois/${frameNumber.toString()}.jpg`);
        video.src =
          require(`./videos/quadro_dois/${frameNumber.toString()}.jpg`).default;
      },
    });
  }, []);

  return (
    <>
      <div className="fixed -z-10 flex flex-col items-center justify-center h-[100vh] w-[100vw]">
        <img
          id={"quadro_video"}
          src={first_frame}
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
