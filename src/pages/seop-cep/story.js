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
  // console.log(chapterNumberMap);
  useEffect(() => {
    switch (chapterNumberMap) {
      case "capa":
        setPosition(chapterMap.Capa().location);
        setLayers(chapterMap.Capa().layers);
        break;
      case "mapa_capitulo":
        setPosition(chapterMap.IntroMapa().location);
        setLayers(chapterMap.IntroMapa().layers);
        break;
      case "mapa_zero":
        setPosition(chapterMap.IntroMapa().location);
        setLayers(chapterMap.IntroMapa().layers);
        break;
      case "mapa_um":
        setPosition(chapterMap.IntroMapa().location);
        setLayers(chapterMap.IntroMapa().layers);
        break;
      case "mapa_mais_um":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      case "mapa_dois":
        setPosition(chapterMap.IntroMapaUm().location);
        setLayers(chapterMap.IntroMapaUm().layers);
        break;
      default:
        break;
    }
  }, [chapterNumberMap]);

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
      onToggle: () => {
        setChapterNumberMap("capa");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_capitulo",
      onToggle: () => {
        setChapterNumberMap("mapa_capitulo");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_zero",
      onToggle: () => {
        setChapterNumberMap("mapa_zero");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_um",
      onToggle: () => {
        setChapterNumberMap("mapa_um");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_mais_um",
      onToggle: () => {
        setChapterNumberMap("mapa_mais_um");
      },
    });

    ScrollTrigger.create({
      trigger: "#mapa_dois",
      onToggle: () => {
        setChapterNumberMap("mapa_dois");
      },
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

    const tl_vigilancia_capitulo = gsap.timeline();
    tl_vigilancia_capitulo
      .set("#vigilancia_image_1", { opacity: 0 })
      .to("#vigilancia_image_1", { opacity: 0, duration: 30 })
      .to("#vigilancia_image_1", { opacity: 1, duration: 70 });

    ScrollTrigger.create({
      animation: tl_vigilancia_capitulo,
      trigger: "#vigilancia_capitulo",
    });

    ScrollTrigger.create({
      trigger: "#vigilancia_um",
    });

    const tl_vigilancia_dois = gsap.timeline();
    tl_vigilancia_dois
      .set("#vigilancia_image_2", { opacity: 0 })
      .to("#vigilancia_image_2", { opacity: 0, duration: 9 })
      .to("#vigilancia_image_2", { opacity: 1, duration: 40 })
      .to("#vigilancia_image_2", { opacity: 1, duration: 50 });

    ScrollTrigger.create({
      animation: tl_vigilancia_dois,
      trigger: "#vigilancia_dois",
    });

    const tl_vigilancia_tres = gsap.timeline();
    tl_vigilancia_tres
      .set("#vigilancia_image_3", { opacity: 0 })
      .to("#vigilancia_image_3", { opacity: 0, duration: 10 })
      .to("#vigilancia_image_3", { opacity: 1, duration: 40 })
      .to("#vigilancia_image_3", { opacity: 1, duration: 50 });

    ScrollTrigger.create({
      animation: tl_vigilancia_tres,
      trigger: "#vigilancia_tres",
    });

    const tl_ativacao_capitulo = gsap.timeline();
    tl_ativacao_capitulo
      .set("#ativacao_image_1", { opacity: 0 })
      .to("#ativacao_image_1", { opacity: 0, duration: 30 })
      .to("#ativacao_image_1", { opacity: 1, duration: 70 });

    ScrollTrigger.create({
      animation: tl_ativacao_capitulo,
      trigger: "#ativacao_capitulo",
    });

    ScrollTrigger.create({
      trigger: "#ativacao_um",
    });

    const tl_ativacao_dois = gsap.timeline();
    tl_ativacao_dois
      .set("#ativacao_image_2", { opacity: 0 })
      .to("#ativacao_image_2", { opacity: 0, duration: 9 })
      .to("#ativacao_image_2", { opacity: 1, duration: 40 })
      .to("#ativacao_image_2", { opacity: 1, duration: 50 });

    ScrollTrigger.create({
      animation: tl_ativacao_dois,
      trigger: "#ativacao_dois",
    });

    const tl_ativacao_tres = gsap.timeline();
    tl_ativacao_tres
      .set("#ativacao_image_3", { opacity: 0 })
      .to("#ativacao_image_3", { opacity: 0, duration: 10 })
      .to("#ativacao_image_3", { opacity: 1, duration: 40 })
      .to("#ativacao_image_3", { opacity: 1, duration: 50 });

    ScrollTrigger.create({
      animation: tl_ativacao_tres,
      trigger: "#ativacao_tres",
    });

    const tl_conservacao_capitulo = gsap.timeline();
    tl_conservacao_capitulo
      .set("#conservacao_image_1", { opacity: 0 })
      .to("#conservacao_image_1", { opacity: 0, duration: 30 })
      .to("#conservacao_image_1", { opacity: 1, duration: 70 });

    ScrollTrigger.create({
      animation: tl_conservacao_capitulo,
      trigger: "#conservacao_capitulo",
    });

    ScrollTrigger.create({
      trigger: "#conservacao_um",
    });

    const tl_conservacao_dois = gsap.timeline();
    tl_conservacao_dois
      .set("#conservacao_image_2", { opacity: 0 })
      .to("#conservacao_image_2", { opacity: 0, duration: 9 })
      .to("#conservacao_image_2", { opacity: 1, duration: 40 })
      .to("#conservacao_image_2", { opacity: 1, duration: 50 });

    ScrollTrigger.create({
      animation: tl_conservacao_dois,
      trigger: "#conservacao_dois",
    });

    const tl_conservacao_tres = gsap.timeline();
    tl_conservacao_tres
      .set("#conservacao_image_3", { opacity: 0 })
      .to("#conservacao_image_3", { opacity: 0, duration: 10 })
      .to("#conservacao_image_3", { opacity: 1, duration: 40 })
      .to("#conservacao_image_3", { opacity: 1, duration: 50 });

    ScrollTrigger.create({
      animation: tl_conservacao_tres,
      trigger: "#conservacao_tres",
    });

    const tl_acolhimento_capitulo = gsap.timeline();
    tl_acolhimento_capitulo
      .set("#acolhimento_image_1", { opacity: 0 })
      .to("#acolhimento_image_1", { opacity: 0, duration: 30 })
      .to("#acolhimento_image_1", { opacity: 1, duration: 70 });

    ScrollTrigger.create({
      animation: tl_acolhimento_capitulo,
      trigger: "#acolhimento_capitulo",
    });

    ScrollTrigger.create({
      trigger: "#acolhimento_um",
    });

    const tl_acolhimento_dois = gsap.timeline();
    tl_acolhimento_dois
      .set("#acolhimento_image_2", { opacity: 0 })
      .to("#acolhimento_image_2", { opacity: 0, duration: 9 })
      .to("#acolhimento_image_2", { opacity: 1, duration: 40 })
      .to("#acolhimento_image_2", { opacity: 1, duration: 50 });

    ScrollTrigger.create({
      animation: tl_acolhimento_dois,
      trigger: "#acolhimento_dois",
    });

    const tl_acolhimento_tres = gsap.timeline();
    tl_acolhimento_tres
      .set("#acolhimento_image_3", { opacity: 0 })
      .to("#acolhimento_image_3", { opacity: 0, duration: 10 })
      .to("#acolhimento_image_3", { opacity: 1, duration: 40 })
      .to("#acolhimento_image_3", { opacity: 1, duration: 50 });

    ScrollTrigger.create({
      animation: tl_acolhimento_tres,
      trigger: "#acolhimento_tres",
    });

    const tl_resultados_capitulo = gsap.timeline();
    tl_resultados_capitulo.set("#acolhimento_image_3", { opacity: 0 });

    ScrollTrigger.create({
      trigger: "#resultados",
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
      <chapterDiv.MapaCapitulo id={"mapa_capitulo"} />
      <chapterDiv.MapaZero id={"mapa_zero"} />
      <chapterDiv.MapaUm id={"mapa_um"} />
      <chapterDiv.MapaMaisum id={"mapa_mais_um"} />
      <chapterDiv.MapaDois id={"mapa_dois"} />
      <chapterDiv.CepCapitulo id={"cep_capitulo"} />
      <chapterDiv.CepImages id={"cep_images"} />
      <chapterDiv.CepUm id={"cep_um"} />
      <chapterDiv.CepDois id={"cep_dois"} />
      <chapterDiv.CepTres id={"cep_tres"} />
      <chapterDiv.VigilanciaCapitulo id={"vigilancia_capitulo"} />
      <chapterDiv.VigilanciaImages id={"vigilancia_images"} />
      <chapterDiv.VigilanciaUm id={"vigilancia_um"} />
      <chapterDiv.VigilanciaDois id={"vigilancia_dois"} />
      <chapterDiv.VigilanciaTres id={"vigilancia_tres"} />
      <chapterDiv.AtivacaoCapitulo id={"ativacao_capitulo"} />
      <chapterDiv.AtivacaoImages id={"ativacao_images"} />
      <chapterDiv.AtivacaoUm id={"ativacao_um"} />
      <chapterDiv.AtivacaoDois id={"ativacao_dois"} />
      <chapterDiv.AtivacaoTres id={"ativacao_tres"} />
      <chapterDiv.ConservacaoCapitulo id={"conservacao_capitulo"} />
      <chapterDiv.ConservacaoImages id={"conservacao_images"} />
      <chapterDiv.ConservacaoUm id={"conservacao_um"} />
      <chapterDiv.ConservacaoDois id={"conservacao_dois"} />
      <chapterDiv.ConservacaoTres id={"conservacao_tres"} />
      <chapterDiv.AcolhimentoCapitulo id={"acolhimento_capitulo"} />
      <chapterDiv.AcolhimentoImages id={"acolhimento_images"} />
      <chapterDiv.AcolhimentoUm id={"acolhimento_um"} />
      <chapterDiv.AcolhimentoDois id={"acolhimento_dois"} />
      <chapterDiv.AcolhimentoTres id={"acolhimento_tres"} />
      <chapterDiv.Resultados id={"resultados"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}
