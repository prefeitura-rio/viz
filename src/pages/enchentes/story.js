// Mandatory
import { useEffect, useState, useRef } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

// Chapters
import * as chapterMap from "./components/chapters.map";
import * as chapterDiv from "./components/chapters";

// Scroll and animation stuff
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Enchentes() {
  const [location, setLocation] = useState(chapterMap.Capa().location);
  const [layers, setLayers] = useState(chapterMap.Capa().layers);

  useEffect(() => {
    document.title = "Carnaval 2023";
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

    const tl_cep_capitulo = gsap.timeline();
    tl_cep_capitulo
      .set("#cep_image_1", { opacity: 0 })
      .to("#cep_image_1", { opacity: 0, duration: 30 })
      .to("#cep_image_1", { opacity: 1, duration: 70 });

    ScrollTrigger.create({
      animation: tl_cep_capitulo,
      trigger: "#cep_capitulo",
    });

    ScrollTrigger.create({
      trigger: "#cep_um",
    });

    const tl_cep_dois = gsap.timeline();
    tl_cep_dois
      .set("#cep_image_2", { opacity: 0 })
      .to("#cep_image_2", { opacity: 0, duration: 9 })
      .to("#cep_image_2", { opacity: 1, duration: 40 })
      .to("#cep_image_2", { opacity: 1, duration: 50 });

    ScrollTrigger.create({
      animation: tl_cep_dois,
      trigger: "#cep_dois",
    });

    const tl_cep_tres = gsap.timeline();
    tl_cep_tres
      .set("#cep_image_3", { opacity: 0 })
      .to("#cep_image_3", { opacity: 0, duration: 10 })
      .to("#cep_image_3", { opacity: 1, duration: 40 })
      .to("#cep_image_3", { opacity: 1, duration: 50 });

    ScrollTrigger.create({
      animation: tl_cep_tres,
      trigger: "#cep_tres",
    });

    ScrollTrigger.create({
      trigger: "#creditos",
    });
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
      <chapterDiv.Capa id={"capa"} />
      <chapterDiv.CepCapitulo id={"cep_capitulo"} />
      <chapterDiv.CepImages id={"cep_images"} />
      <chapterDiv.CepUm id={"cep_um"} />
      <chapterDiv.CepDois id={"cep_dois"} />
      <chapterDiv.CepTres id={"cep_tres"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}
