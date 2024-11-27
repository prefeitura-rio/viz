import React, { useEffect, useRef } from "react";
import * as chapterDiv from "./components/chapters";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css";
import thumb from "./images/thumb.png";
gsap.registerPlugin(ScrollTrigger);

export default function SuperCentro() {
  const videoRef = useRef(null);
  const videoScrollRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.pause(); // Ensure the video is paused initially

      // Wait until the video metadata is loaded to get the duration
      video.addEventListener("loadedmetadata", () => {
        const totalFrames = 24 * video.duration;

        gsap.to(video, {
          currentTime: totalFrames / 24,
          scrollTrigger: {
            trigger: videoScrollRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              // Calculate the frame based on scroll progress
              const frame = Math.round(self.progress * totalFrames);
              video.currentTime = frame / 24; // Set the current video time
            },
          },
        });
      });
    }
  }, []);

  return (
    <>
      <div className="containerr" style={{ backgroundColor: "#dce0ea" }}>
        <chapterDiv.Capa id={"capa"} />
        <div className="contentContainer">
          <div
            ref={videoScrollRef}
            style={{
              display: "flex",
              flexDirection: "column",
              height: "6200vh",
              width: "100%",
              alignItems: "center",
            }}
          >
            <video
              ref={videoRef}
              src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/supercentro/supercentrofinal.mp4"
              type="video/mp4"
              className="responsive-video"
              playsInline
              muted
              preload="auto"
              controls={false}
              poster={thumb}
            />
            <chapterDiv.QuadroUm id={"quadro"} />
          </div>
          <chapterDiv.ParteUm id={"parteum"} />
          <chapterDiv.Creditos id={"creditos"} />
        </div>
      </div>
    </>
  );
}