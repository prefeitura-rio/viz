// Mandatory
import { useEffect, useState, useRef } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";
import { Controller, Scene } from "react-scrollmagic";

// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";
import first_frame from "./videos/mapas/1.jpg";

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
      markers: true,
      scrub: true,
      toggleActions: "play reverse play reverse",
    });

    ScrollTrigger.create({
      trigger: "#quadro_um",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video");
        const frameNumber = Math.floor(self.progress * 497) + 1;
        video.src =
          require(`./videos/mapas/${frameNumber.toString()}.jpg`).default;
      },
    });
  }, []);

  return (
    <>
      <img
        id={"quadro_video"}
        src={first_frame}
        className="fixed -z-10 h-[50vh]  w-full lg:p-[34px] top-[15vh]"
      ></img>
      <chapterDiv.Capa id={"capa"} />
      <chapterDiv.ContextoHistorico id={"contexto_historico"} />
      <chapterDiv.QuadroUm id={"quadro_um"} />
      <chapterDiv.Impermeabilidade id={"impermeabilidade"} />
      <chapterDiv.Lixo id={"lixo"} />
      <chapterDiv.Vandalismo id={"vandalismo"} />
      <chapterDiv.Clandestino id={"clandestino"} />
      <chapterDiv.ContextoMundial id={"contexto_mundial"} />
      <chapterDiv.Prefeitura id={"prefeitura"} />
      <chapterDiv.Rotina id={"rotina"} />
      <chapterDiv.ObrasProjetos id={"obras_projetos"} />
      <chapterDiv.Cor id={"cor"} />
      <chapterDiv.Futuro id={"futuro"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}
