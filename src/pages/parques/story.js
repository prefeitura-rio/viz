// Mandatory
import { useEffect, useState, useRef } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";
import { Controller, Scene } from "react-scrollmagic";

// Chapters
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
      markers: true,
      scrub: true,
      toggleActions: "play reverse play reverse",
    });

    ScrollTrigger.create({
      trigger: "#parte_video",
      onUpdate: (self) => {
        const video = document.getElementById("quadro_video");
        let frameNumber = Math.floor(self.progress * 121) + 1;
        if (frameNumber > 121) {
          frameNumber = 121;
        }
        const imageUrl = `https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/${frameNumber}.jpg`;
        video.src = imageUrl;
      },
    });

    const tl_parte_um = gsap.timeline();
    tl_parte_um
      .set("#quadro_video", { opacity: 1 })
      .to("#quadro_video", { opacity: 1, duration: 49 })
      .to("#quadro_video", { opacity: 0, duration: 1 })
      .to("#quadro_video", { opacity: 0, duration: 50 });

    ScrollTrigger.create({
      animation: tl_parte_um,
      trigger: "#parte_um",
    });

    const tl_animation_um = gsap.timeline();
    tl_animation_um
      .set("#animacao_image_1", { opacity: 1 })
      .to("#animacao_image_2", { opacity: 1, duration: 7 })
      .to("#animacao_image_2", { opacity: 1, duration: 7 })
      .to("#animacao_image_21", { opacity: 1, duration: 6 })
      .to("#animacao_image_21", { opacity: 1, duration: 7 })
      .to("#animacao_image_2", { opacity: 0, duration: 1 })
      .to("#animacao_image_21", { opacity: 0, duration: 1 })
      .to("#animacao_image_3", { opacity: 1, duration: 7 })
      .to("#animacao_image_3", { opacity: 1, duration: 7 })
      .to("#animacao_image_31", { opacity: 1, duration: 6 })
      .to("#animacao_image_31", { opacity: 1, duration: 7 })
      .to("#animacao_image_3", { opacity: 0, duration: 1 })
      .to("#animacao_image_31", { opacity: 0, duration: 1 })
      .to("#animacao_image_4", { opacity: 1, duration: 7 })
      .to("#animacao_image_4", { opacity: 1, duration: 7 })
      .to("#animacao_image_41", { opacity: 1, duration: 6 })
      .to("#animacao_image_41", { opacity: 1, duration: 7 })
      .to("#animacao_image_4", { opacity: 0, duration: 1 })
      .to("#animacao_image_41", { opacity: 1, duration: 1 })
      .to("#test_animation", { opacity: 0, duration: 13 });

    const getVhValueUm = () => {
      const screenHeight = window.innerHeight;
      console.log(screenHeight);
      if (screenHeight <= 768) {
        return vh(50);
      } else if (screenHeight <= 1080) {
        return vh(50);
      } else {
        return vh(50);
      }
    };

    const animation_um_vh = getVhValueUm();
    ScrollTrigger.create({
      animation: tl_animation_um,
      trigger: "#animation_um",
      pin: "#test_animation",
      start: `top center-=${animation_um_vh}`,
    });

    const tl_animation_dois = gsap.timeline();
    tl_animation_dois
      .set("#animacao_image_m1", { opacity: 1 })
      .to("#animacao_image_m2", { opacity: 1, duration: 15 })
      .to("#animacao_image_m2", { opacity: 1, duration: 5 })
      .to("#animacao_image_m3", { opacity: 1, duration: 15 })
      .to("#animacao_image_m3", { opacity: 1, duration: 5 })
      .to("#animacao_image_m4", { opacity: 1, duration: 15 })
      .to("#animacao_image_m4", { opacity: 1, duration: 10 })
      .to("#test_animation_dois", { opacity: 0, duration: 10 })
      .to("#test_animation_dois", { opacity: 0, duration: 5 });

    const getVhValueDois = () => {
      const screenHeight = window.innerHeight;
      if (screenHeight <= 768) {
        return vh(29);
      } else if (screenHeight <= 1080) {
        return vh(40);
      } else {
        return vh(25);
      }
    };

    const animation_dois_vh = getVhValueDois();
    ScrollTrigger.create({
      animation: tl_animation_dois,
      trigger: "#animation_dois",
      pin: "#test_animation_dois",
      start: `top center-=${animation_dois_vh}`,
    });
  }, []);

  return (
    <>
      {/* define the video canvas */}
      <div className="fixed -z-[100] flex flex-col items-center justify-center h-[100vh] w-[100vw]  bg-[#fbfaef]">
        <img
          id={"quadro_video"}
          src={
            "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/1.jpg"
          }
          className="object-cover w-full h-screen "
        ></img>
      </div>
      <chapterDiv.Capa id={"capa"} />
      <chapterDiv.ContextoHistorico id={"contexto_historico"} />
      {/* adjust the start of the video scroll */}
      <div className="h-[50vh] w-full bg-transparent"></div>
      {/* define the height of the video scroll */}
      <div id={"parte_video"} className="h-[400vh]" />
      <chapterDiv.ParteUm id={"parte_um"} />
      <chapterDiv.AnimacaoDois id={"animation_dois"} />
      <chapterDiv.ParteTres id={"parte_tres"} />
      <chapterDiv.AnimacaoUm id={"animation_um"} />
      <chapterDiv.Creditos id={"creditos"} />
    </>
  );
}
