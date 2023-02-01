import { useState, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import video from "./video_sample.mp4";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const VIDEO_CSS = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  zIndex: "-1"
};

export default function VideoSample() {
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
  return (
    <div>
      <video muted style={VIDEO_CSS} ref={handleVideoMounted}>
        <source src={video} type="video/mp4" />
      </video>
      <Controller>
        <Scene duration={windowDimensions.height / 2} pin>
          <h1></h1>
        </Scene>
        <Scene duration={10000} indicators={true} pin>
          {(progress, event) => (
            <div>
              <h1>Progresso:</h1>
              <h2>{Math.round(progress * 100) + "%"}</h2>
              {setVideoCurrentTime(progress * 24)}
            </div>
          )}
        </Scene>
        <Scene duration={windowDimensions.height / 2} pin>
          <h1></h1>
        </Scene>
      </Controller>
    </div>
  );
}
