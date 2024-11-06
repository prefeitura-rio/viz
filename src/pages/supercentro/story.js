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
import arrowdown from "../supercentro/images/arrowdown.png";
gsap.registerPlugin(ScrollTrigger);

export default function SuperCentro() {
  const vh = (coef) => window.innerHeight * (coef / 100);
  const vw = (coef) => window.innerWidth * (coef / 100);

  const videoRef = useRef(null);
  const setHeightRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    const setHeight = setHeightRef.current;
    const playbackConst = 500;

    const setVideoHeight = () => {
      if (vid && setHeight) {
        setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
      }
    };

    let ticking = false;

    const scrollPlay = () => {
      const frameNumber = window.pageYOffset / playbackConst;
      vid.currentTime = frameNumber;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(scrollPlay);
        ticking = true;
      }
    };

    vid.addEventListener("loadedmetadata", setVideoHeight);
    window.addEventListener("scroll", onScroll);

    return () => {
      vid.removeEventListener("loadedmetadata", setVideoHeight);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="containerr" style={{ backgroundColor: "#dee2ed", backgroundImage: "radial-gradient(circle, rgba(211, 211, 211, 0.4) 20%, transparent 20%)", backgroundSize: "10px 10px" }}>
        {/* <chapterDiv.Capa style={{ display: "none" }} id={"capa"} /> */}
        {/* <chapterDiv.ContextoHistorico id={"contexto_historico"} /> */}

        {/* ******************************** Video Scrolling ********************************  */}

        {/* <div ref={setHeightRef}> */}
        <div style={{ display: "flex", flexDirection: "column", height: "4200vh", width: "100%", alignItems: "center" }}>
          <video
            ref={videoRef}
            src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/supercentro/SUPERCENTRO%20-%20DATA%20VIZ.mp4"
            type="video/mp4"
            style={{
              position: "sticky",
              top: 0,
              maxHeight: "100vh",
              margin: "0 auto",
              display: "block",
            }}
          />
          {/* </div> */}
          <chapterDiv.QuadroUm id={"quadro"} />
        </div>
        <chapterDiv.ParteUm id={"parteum"} />
        {/* ******************************** Video Scrolling 1 Fim ********************************  */}

        <chapterDiv.Creditos id={"creditos"} />
      </div>
    </>
  );
}
