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

      // Function to handle video control with scroll
      const handleLoadedMetadata = () => {
        const totalFrames = 24 * video.duration;

        // Pause video to start from frame 0
        video.pause();
        video.currentTime = 0;

        gsap.to(video, {
          currentTime: totalFrames / 24, // Set the video to max duration for scrub effect
          scrollTrigger: {
            trigger: videoScrollRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              const frame = Math.round(self.progress * totalFrames);
              video.currentTime = frame / 24; // Set the current time based on scroll
            },
          },
        });
      };

      // iOS handling to ensure video respects controls
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

      if (isIOS) {
        video.muted = true; // iOS requires muted for autoplay
        video.playsInline = true; // Required for inline playback
        video.pause(); // Pause initially
      }

      // Add metadata event listener
      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      // Clean up on component unmount
      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
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
              src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/supercentro/SUPERCENTRO2.mp4"
              type="video/mp4"
              className="responsive-video"
              playsInline
              muted
              autoPlay
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
