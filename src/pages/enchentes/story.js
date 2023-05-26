// Mandatory
import { useEffect, useState, useRef } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";
import { Controller, Scene } from "react-scrollmagic";

// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";

// Scroll and animation  stuff
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

import videoMapas from "./videos/mapas.mp4";

// gsap.registerPlugin(ScrollTrigger);

export default function Enchentes() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleVideoMounted = (element) => {
    if (element !== null) {
      element.currentTime = videoCurrentTime;
    }
  };
  useEffect(() => {
    document.title = "E as chuvas castigam os cariocas";
  }, []);

  const vh = (coef) => window.innerHeight * (coef / 100);
  const vw = (coef) => window.innerWidth * (coef / 100);

  useEffect(() => {
    // gsap.defaults({ ease: "none" });
    // ScrollTrigger.defaults({
    //   start: "top center",
    //   end: "bottom center",
    //   markers: true,
    //   scrub: true,
    //   // toggleActions: "play reverse play reverse",
    // });
    // ScrollTrigger.create({
    //   trigger: "#capa",
    // });
    // ScrollTrigger.create({
    //   trigger: "#quadro_um",
    //   onUpdate: (self) => {
    //     const video = document.getElementById("video_mapas");
    //     console.log(video);
    //   },
    // });
    // const tl_cep_capitulo = gsap.timeline();
    // tl_cep_capitulo
    //   .set("#cep_image_1", { opacity: 0 })
    //   .to("#cep_image_1", { opacity: 0, duration: 30 })
    //   .to("#cep_image_1", { opacity: 1, duration: 70 });
    // ScrollTrigger.create({
    //   animation: tl_cep_capitulo,
    //   trigger: "#cep_capitulo",
    // });
  }, []);

  return (
    <>
      {/* <chapterDiv.CepImages id={"cep_images"} /> */}
      {/* <chapterDiv.CepCapitulo id={"cep_capitulo"} /> */}
      <div
        className="fixed -z-10 h-[50vh]  w-full lg:p-[34px]"
        id={"quadro_video"}
      >
        <video
          muted
          className="w-full h-full"
          id="video_mapas"
          ref={handleVideoMounted}
        >
          <source src={videoMapas} type="video/mp4" />
        </video>
      </div>
      {/* <Controller>
        <Scene duration={windowDimensions.height / 2} pin>
          <h1></h1>
        </Scene>
        <Scene duration={10000} indicators={true} pin>
          {(progress, event) => (
            <div>
              <h1>Progresso:</h1>
              <h2>{Math.round(progress * 100) + "%"}</h2>
              {setVideoCurrentTime(progress * 24)}
            </div>
          )}
        </Scene>
        <Scene duration={windowDimensions.height / 2} pin>
          <h1></h1>
        </Scene>
      </Controller> */}
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
