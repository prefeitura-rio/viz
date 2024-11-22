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
  const videoRef = useRef(null);
  const setHeightRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    const setHeight = setHeightRef.current;
    const playbackConst = 500;
    const startOffset = 3 * window.innerHeight; // 100vh

    const setVideoHeight = () => {
      if (vid && setHeight) {
        setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
      }
    };

    const scrollPlay = () => {
      const frameNumber = (window.pageYOffset - startOffset) / playbackConst;
      if (frameNumber >= 0) {
        vid.currentTime = frameNumber;
      }
    };

    const onScroll = () => {
      requestAnimationFrame(scrollPlay);
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
      <div className="containerr" style={{ backgroundColor: "#dce0ea" }}>
        <chapterDiv.Capa id={"capa"} />


        {/* ******************************** Video Scrolling ********************************  */}

        {/* <div ref={setHeightRef}> */}
        <div style={{ display: "flex", flexDirection: "column", height: "8300vh", width: "100%", alignItems: "center" }}>
          <video
            ref={videoRef}
            src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/supercentro/supercentrofinal.mp4"
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
        {/* <chapterDiv.ParteUm id={"parteum"} /> */}
        {/* ******************************** Video Scrolling 1 Fim ********************************  */}

        <chapterDiv.Creditos id={"creditos"} />
      </div>
    </>
  );
}
