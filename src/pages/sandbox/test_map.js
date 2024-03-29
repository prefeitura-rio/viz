// Mandatory
import { useEffect, useState } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";
// Scrollmagic
import { Controller, Scene } from "react-scrollmagic";

// Chapters
import * as chapterMap from "../subsidio-sppo/components/chapters.map";
import * as chapterDiv from "../subsidio-sppo/components/chapters";

export default function SubsidioSPPO() {
  const [animatedMap, setAnimatedMap] = useState(true);

  const [location, setLocation] = useState({
    desktop: {
      center: {
        lon: -43.17672,
        lat: -22.90574,
      },
      zoom: 14.57,
      pitch: 60.0,
      bearing: -151.1,
      duration: 2000,
    },
    mobile: {
      center: {
        lat: -22.9121089,
        lon: -43.2301558,
      },
      zoom: 15,
      bearing: 0,
      pitch: 0,
      duration: 2000,
    },
  });

  const [layers, setLayers] = useState(chapterMap.Capa().layers);

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
  const [chapterNumberMap, setChapterNumberMap] = useState(0);

  useEffect(() => {
    switch (chapterNumberMap) {
      case 1:
        setPosition(chapterMap.Capa().location);
        setLayers(chapterMap.Capa().layers);
        break;
      case 2:
        setPosition(chapterMap.Capa().location);
        setLayers(chapterMap.Capa().layers);
        break;
      case 3:
        setPosition(chapterMap.Historia1().location);
        setLayers(chapterMap.Historia1().layers);
        break;
      default:
        break;
    }
  }, [chapterNumberMap]);

  const mapValue = (startValue, endValue, progress) => {
    return startValue + (endValue - startValue) * progress;
  };

  const mapLocation = (startLocation, endLocation, progress) => {
    return {
      desktop: {
        center: {
          lon: mapValue(
            startLocation.desktop.center.lon,
            endLocation.desktop.center.lon,
            progress
          ),
          lat: mapValue(
            startLocation.desktop.center.lat,
            endLocation.desktop.center.lat,
            progress
          ),
        },
        zoom: mapValue(
          startLocation.desktop.zoom,
          endLocation.desktop.zoom,
          progress
        ),
        pitch: mapValue(
          startLocation.desktop.pitch,
          endLocation.desktop.pitch,
          progress
        ),
        bearing: mapValue(
          startLocation.desktop.bearing,
          endLocation.desktop.bearing,
          progress
        ),
        duration: mapValue(
          startLocation.desktop.duration,
          endLocation.desktop.duration,
          progress
        ),
      },
      mobile: {
        center: {
          lon: mapValue(
            startLocation.mobile.center.lon,
            endLocation.mobile.center.lon,
            progress
          ),
          lat: mapValue(
            startLocation.mobile.center.lat,
            endLocation.mobile.center.lat,
            progress
          ),
        },
        zoom: mapValue(
          startLocation.mobile.zoom,
          endLocation.mobile.zoom,
          progress
        ),
        pitch: mapValue(
          startLocation.mobile.pitch,
          endLocation.mobile.pitch,
          progress
        ),
        bearing: mapValue(
          startLocation.mobile.bearing,
          endLocation.mobile.bearing,
          progress
        ),
        duration: mapValue(
          startLocation.mobile.duration,
          endLocation.mobile.duration,
          progress
        ),
      },
    };
  };

  const fadeMapLocation = (startLocation, endLocation, progress) => {
    if (Math.floor(progress * 10000) % 1 === 0) {
      setTimeout(() => {
        setPosition(mapLocation(startLocation, endLocation, progress));
      }, 100);
    }
  };

  return (
    <>
      <MultilayerMap
        animated={animatedMap}
        interactive={false}
        scrollZoom={true}
        mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        mapStyle="mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b"
        layers={layers}
        location={location}
        mapCSS={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
        animationLoopLength={21600}
        animationSpeed={1}
      />
      <Controller>
        <Scene
          triggerElement={"#chapter-1"}
          indicators={true}
          pin={false}
          duration={"100%"}
          offset={0}
          reverse={true}
        >
          {(progress, event) => (
            <>
              {event.type === "enter" && setChapterNumberMap(1)}
              <chapterDiv.Capa id={"chapter-1"} />
            </>
          )}
        </Scene>

        <Scene
          triggerElement={"#chapter-2"}
          indicators={true}
          pin={false}
          duration={"100%"}
          offset={0}
          reverse={true}
        >
          {(progress, event) => (
            <>
              <>
                {/* When entering this scene, */}
                {/* set map not to animate (this ensures the scroll moves the map) */}
                {event.type === "enter" && setAnimatedMap(false)}
                {/* When leaving this scene, */}
                {/* set map to animate (this ensures other scenes will work as expected) */}
                {event.type === "leave" && setAnimatedMap(true)}
                {/* Meanwhile in this scene, */}
                {/* set the map to the interpolated location */}
                {event.state === "DURING" &&
                  fadeMapLocation(
                    chapterMap.Capa().location,
                    chapterMap.Historia1().location,
                    progress
                  )}
              </>
              <chapterDiv.Intro id={"chapter-2"} />
            </>
          )}
        </Scene>

        <Scene
          triggerElement={"#chapter-3"}
          indicators={true}
          pin={false}
          duration={"100%"}
          offset={0}
          reverse={true}
        >
          {(progress, event) => (
            <>
              <>{event.type === "enter" && setChapterNumberMap(3)}</>
              <chapterDiv.Historia1 id={"chapter-3"} />
            </>
          )}
        </Scene>
      </Controller>
      <div style={{ height: "50vh" }} />
    </>
  );
}
