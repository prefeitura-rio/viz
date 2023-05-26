// Mandatory
import { useEffect, useState, useRef } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";

// Scroll and animation  stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

gsap.registerPlugin(ScrollTrigger);

export default function Enchentes() {
  const [location, setLocation] = useState(chapterMap.Capa().location);
  const [layers, setLayers] = useState(chapterMap.Capa().layers);
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

    ScrollTrigger.defaults({
      start: "top center",
      end: "bottom center",
      markers: true,
      scrub: true,
      // toggleActions: "play reverse play reverse",
    });
    ScrollTrigger.create({
      trigger: "#capa",
    });

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
