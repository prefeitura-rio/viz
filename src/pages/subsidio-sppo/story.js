// Mandatory
import { useEffect, useState } from "react";
import MultilayerMap from "../../components/maps/multilayer_map";

// Scrollmagic
import { Controller, Scene } from "react-scrollmagic";

// Chapters
import { chapterOne, chapterTwo, chapterThree, chapterFour } from "./chapters";
// import * from "./chapters.style";
import * as styles from "./chapters.style";

import TextDiv from "./components/text_div";

export default function SubsidioSPPO() {
  const [location, setLocation] = useState({
    desktop: {
      center: { lon: -43.19415, lat: -22.9795 },
      zoom: 15.0,
      pitch: 60.0,
      bearing: -37.07,
      duration: 2000
    },
    mobile: {
      center: {
        lat: -22.9121089,
        lon: -43.2301558
      },
      zoom: 15,
      bearing: 0,
      pitch: 0,
      duration: 2000
    }
  });

  const [layers, setLayers] = useState(chapterOne().layers);

  const setPosition = (position) => {
    const desktopPosition = position.desktop ? position.desktop : position;
    const mobilePosition = position.mobile ? position.mobile : position;

    setLocation({
      ...location,
      desktop: {
        ...desktopPosition
      },
      mobile: {
        ...mobilePosition
      }
    });
  };

  const [chapterNumber, setChapterNumber] = useState(0);

  useEffect(() => {
    switch (chapterNumber) {
      case 1:
        setPosition(chapterOne().location);
        setLayers(chapterOne().layers);
        break;
      case 2:
        setPosition(chapterTwo().location);
        setLayers(chapterTwo().layers);
        break;
      case 3:
        setPosition(chapterThree().location);
        setLayers(chapterThree().layers);
        break;
      case 4:
        setPosition(chapterFour().location);
        setLayers(chapterFour().layers);
        break;
      default:
        break;
    }
  }, [chapterNumber]);

  return (
    <>
      <MultilayerMap
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
          width: "100vw",
          height: "100vh",
          zIndex: "-1"
        }}
      />
      <Controller>
        <styles.ChapterOneDiv id={"chapter-1"}>
          <Scene
            triggerElement={"#chapter-1"}
            indicators={true}
            pin={"#chapter-1-text"}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>
                {event.type === "enter" && setChapterNumber(1)}
                <TextDiv
                  id={"chapter-1-text"}
                  textH1="300"
                  textH2="ÔNIBUS"
                  textParagraph="Com o acordo uma frota maior de veículos será necessária. A estimativa é que até o final do ano sejam adquiridos 300 ônibus."
                  textAlign="right"
                />
              </>
            )}
          </Scene>
        </styles.ChapterOneDiv>
        <styles.ChapterTwoDiv id={"chapter-2"}>
          <Scene
            triggerElement={"#chapter-2"}
            indicators={true}
            pin={false}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>{event.type === "enter" && setChapterNumber(2)}</>
            )}
          </Scene>
          <Scene
            triggerElement={"#chapter-2"}
            indicators={true}
            pin={true}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <styles.TextStyleIndicator>CAPITULO 2</styles.TextStyleIndicator>
            )}
          </Scene>
        </styles.ChapterTwoDiv>

        <styles.ChapterThreeDiv id={"chapter-3"}>
          <Scene
            triggerElement={"#chapter-3"}
            indicators={true}
            pin={false}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>{event.type === "enter" && setChapterNumber(3)}</>
            )}
          </Scene>
          <Scene
            triggerElement={"#chapter-3"}
            indicators={true}
            pin={true}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <styles.TextStyleIndicator>CAPITULO 3</styles.TextStyleIndicator>
            )}
          </Scene>
        </styles.ChapterThreeDiv>

        <styles.ChapterFourDiv id={"chapter-4"}>
          <Scene
            triggerElement={"#chapter-4"}
            indicators={true}
            pin={false}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <>{event.type === "enter" && setChapterNumber(4)}</>
            )}
          </Scene>
          <Scene
            triggerElement={"#chapter-4"}
            indicators={true}
            pin={true}
            duration={600}
            offset={0}
            reverse={true}
          >
            {(progress, event) => (
              <styles.TextStyleIndicator>CAPITULO 4</styles.TextStyleIndicator>
            )}
          </Scene>
        </styles.ChapterFourDiv>
      </Controller>
    </>
  );
}
