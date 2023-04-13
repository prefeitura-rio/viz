// Mandatory
import { useEffect, useState, useRef } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";

// Scroll and animation  stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Enchentes() {
  const [location, setLocation] = useState(chapterMap.Capa().location);
  const [layers, setLayers] = useState(chapterMap.Capa().layers);

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
      markers: false,
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
      <MultilayerMap
        interactive={true}
        scrollZoom={true}
        showLayers={true}
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        mapStyle="mapbox://styles/escritoriodedados/clb5mnbms001z14o76898gh5c"
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
