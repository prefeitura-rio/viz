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
    let playbackConst = window.innerHeight / 2; // Dynamic calculation
    const startOffset = 3 * window.innerHeight; // Starting offset remains the same

    const setVideoHeight = () => {
      if (vid && setHeight) {
        playbackConst = window.innerHeight / 2; // Re-calculate on screen changes
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

    // Event listener for resizing the window
    const onResize = () => {
      setVideoHeight();
    };

    vid.addEventListener("loadedmetadata", setVideoHeight);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      vid.removeEventListener("loadedmetadata", setVideoHeight);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);


  return (
    <>
      <div className="containerr" style={{ backgroundColor: "#dce0ea" }}>
        <chapterDiv.Capa id={"capa"} />


        {/* ******************************** Video Scrolling ********************************  */}

        {/* <div ref={setHeightRef}> */}
        <div style={{ display: "flex", flexDirection: "column", height: "6200vh", width: "100%", alignItems: "center" }}>
          <video
            ref={videoRef}
            src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/supercentro/supercentrofinal.mp4"
            type="video/mp4"
            style={{
              position: "sticky",
              top: "50%",
              transform: "translateY(-50%)",
              maxHeight: "100vh",
              margin: "0 auto",
              display: "block",
            }}
          />
          {/* </div> */}
          <chapterDiv.QuadroUm id={"quadro"} />
        </div>
        <chapterDiv.ParteUm id={"parteum"} />
        <chapterDiv.Creditos id={"creditos"} />
      </div>
    </>
  );
}
