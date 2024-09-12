import React from "react";
import { Map, Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { isMobile } from "react-device-detect";
import { useState } from "react";
import dialogBallon from "../images/ballon.png"
import dois_caras_numa_moto from "../images/dois_caras_numa_moto.png"
import assalto from "../images/assalto.png"
import imagem16 from "../images/imagem16.png"
import camera_icon from "../images/camera_icon.png"
import locationpin from "../images/locationpin.gif"
import { zoom } from "d3";
import "../style.css"
// Theis 3 types of layers, mapbox, mapbox-style and deckgl

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

class CustomMultilayerMap extends React.Component {
  // Construtor: Chamado antes do componente ser montado.
  constructor(props) {
    super(props);
    this.state = {
      mapSettings: {
        scrollZoom: props.scrollZoom,
        mapboxAccessToken: props.mapboxAccessToken,
        mapStyle: props.mapStyle,
        interactive: props.interactive,
        showLayers: props.showLayers,
        style: props.mapCSS,
      },
      mapRef: React.createRef(),
      layerTypes: {
        fill: ["fill-opacity"],
        line: ["line-opacity"],
        circle: ["circle-opacity", "circle-stroke-opacity"],
        symbol: ["icon-opacity", "text-opacity"],
        raster: ["raster-opacity"],
        "fill-extrusion": ["fill-extrusion-opacity"],
        heatmap: ["heatmap-opacity"],
      },
      time: 0,
      allLayers: [],
      mapLoaded: false,
    };
  }

  // Chamado após o componente ser montado.
  componentDidMount() { }
  // CUSTOM: Função auxiliar para montar o view state do mapa.
  getViewState(location) {
    let viewState = isMobile
      ? {
        center: [location.mobile.center.lon, location.mobile.center.lat],
        zoom: location.mobile.zoom,
        bearing: location.mobile.bearing,
        pitch: location.mobile.pitch,
        duration: location.mobile.duration,
      }
      : {
        center: [location.desktop.center.lon, location.desktop.center.lat],
        zoom: location.desktop.zoom,
        bearing: location.desktop.bearing,
        pitch: location.desktop.pitch,
        duration: location.desktop.duration,
      };
    if (!viewState.duration) {
      viewState.duration = 4000;
    }
    return viewState;
  }

  // CUSTOM: Função auxiliar para exibir ou esconder layers.
  toggleLayers(layers, show) {
    if (!this.state.mapLoaded) return;
    const mapInstance = this.state.mapRef.current?.getMap();
    if (!mapInstance) return;

    if (this.props.showLayers) {
      // console.log("allLyaers", mapInstance.getStyle().layers);
    }
    for (let i = 0; i < layers.length; i++) {
      const layerDict = layers[i];

      if (
        //mapbox layers
        layerDict.layerType === "mapbox" ||
        //deckgl layers
        layerDict.layerType.startsWith("deckgl")
      ) {
        const mapLayer = mapInstance.getLayer(layerDict.layer.id);
        if (!mapLayer) {
          mapInstance.addLayer(layerDict.layer);
          this.state.allLayers.push(layerDict);
        }
      }

      // Move layer to the desired position defined in the layers array
      const layerId = layerDict.layer.id;
      const beforeLayerId = i > 0 ? layers[i - 1].layer.id : undefined;
      mapInstance.moveLayer(layerId, beforeLayerId);

      // Rest of your code...
    }
    let opacity = 0;
    for (let i = 0; i < layers.length; i++) {
      // layers from story
      var layerId = layers[i].layer.id;
      var layerType = layers[i].layerType;
      if (layers[i].targetOpacity !== undefined) {
        opacity = show ? layers[i].targetOpacity : 0;
      } else {
        opacity = show ? 1 : 0;
      }

      // layers from map style (mapbox-style)
      var mapLayer = mapInstance.getLayer(layerId);

      // set opacity
      if (layerType.startsWith("deckgl")) {
        mapLayer?.implementation.setProps({
          opacity: opacity,
        });
      } else if (layerType.startsWith("mapbox")) {
        if (mapLayer) {
          this.state.layerTypes[mapLayer.type].forEach((paintType) => {
            mapInstance.setPaintProperty(layerId, paintType, opacity);
          });
        }
      } else if (layerType === "reuse") {
        // Look for layer in `layers`
        const reusableLayer = this.state.allLayers.find(
          (l) => l.layer.id === layerId
        );
        if (!reusableLayer) {
          break;
        }
        const reusableLayerId = reusableLayer.layer.id;
        const reusableLayerType = reusableLayer.layerType;
        const reusableMapLayer = mapInstance.getLayer(layerId);
        if (reusableMapLayer) {
          if (reusableLayerType.startsWith("deckgl")) {
            reusableMapLayer?.implementation.setProps({
              opacity: opacity,
            });
          } else if (reusableLayerType.startsWith("mapbox")) {
            this.state.layerTypes[reusableMapLayer.type].forEach(
              (paintType) => {
                mapInstance.setPaintProperty(layerId, paintType, opacity);
              }
            );
          }
        }
      }
    }
  }
  // CUSTOM: inicia a animação do mapa.
  startAnimation() {
    if (!this.state.mapLoaded) return;
    const animate = () => {
      let t = this.state.time;
      t = (t + this.props.animationSpeed) % this.props.animationLoopLength;
      this.setState({ ...this.state, time: t });
      requestAnimationFrame(animate); // queue request for next frame
    };
    requestAnimationFrame(animate);
  }
  // Chamado quando o componente for atualizado.
  componentDidUpdate(prevProps) {
    // If view state has been modified, update map view state.
    if (prevProps.location !== this.props.location) {
      // Change view state
      const viewState = this.getViewState(this.props.location);
      let map = this.state.mapRef.current;
      if (map) {
        if (this.props.animated) {
          map.flyTo(viewState);
        } else {
          map.setCenter(viewState.center);
          map.setZoom(viewState.zoom);
          map.setBearing(viewState.bearing);
          map.setPitch(viewState.pitch);
        }
      }
    }

    // If layers have been modified, update map layers.
    if (prevProps.layers !== this.props.layers) {
      // Hide old layers
      this.toggleLayers(prevProps.layers, false);
      // Show new layers
      this.toggleLayers(this.props.layers, true);
    }
  }

  // Render
  render() {
    const { videoInfoArray, chapterNumberMap, cardHeight } = this.props;
    const coordinatesCarro = [
      { latitude: "-22.864784742263154", longitude: "-43.36105513587367" },
      { latitude: "-22.905126493488567", longitude: "-43.2772921379854" },
      { latitude: "-22.888917477677793", longitude: "-43.31705582150667" },
      { latitude: "-22.90901575450762", longitude: "-43.29103115426432" },
      { latitude: "-22.87433241197097", longitude: "-43.342067801950435" },
      { latitude: "-22.89560679783915", longitude: "-43.30057249822963" },
      // Adicione mais coordenadas conforme necessário
    ];
    const gridStyle = {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gap: "0",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 2
    };
    const coordinatesCamera = [
      { latitude: "-22.90345", longitude: "-43.28141" },
      { latitude: "-22.903337731427072", longitude: "-43.283053488586575" },
      { latitude: "-22.903083636860444", longitude: "-43.28263430709228" },
      { latitude: "-22.90320667471427", longitude: "-43.28290423833883" },
      { latitude: "-22.903341033487465", longitude: "-43.28329631632525" },
      { latitude: "-22.903454290058093", longitude: "-43.283695347592015" },
      { latitude: "-22.903533329880688", longitude: "-43.28402647601584" },
      { latitude: "-22.90361736496473", longitude: "-43.28389423199664" },
      { latitude: "-22.903492634205833", longitude: "-43.283507755138146" },
      { latitude: "-22.90337402163334", longitude: "-43.283121591427715" },
      { latitude: "-22.903261893874046", longitude: "-43.282774079423376" },
      { latitude: "-22.90350203550139", longitude: "-43.282960236184095" },
      { latitude: "-22.903822686544743", longitude: "-43.28279549240847" }
    ];
    const coordinatesCarro2 = [
      { latitude: "-22.881095445621", longitude: "-43.511137976488385", hora: "5h55", from: "top", side: "left" },
      { latitude: "-22.920709471646703", longitude: "-43.21791865468742", hora: "10h07", from: "top", side: "left" },
      { latitude: "-22.87566923436411", longitude: "-43.46206227641403", hora: "6h03", from: "bottom", side: "right" },
      { latitude: "-22.88176861362919", longitude: "-43.32981961339644", hora: "7h45", from: "top", side: "left" },
      { latitude: "-22.881271662429967", longitude: "-43.41336772903023", hora: "6h10", from: "top", side: "left" },
      { latitude: "-22.878727578454146", longitude: "-43.374656426499826", hora: "6h21", from: "bottom", side: "right" },
      { latitude: "-22.91236193778326", longitude: "-43.26788724472604", hora: "9h32", from: "bottom", side: "right" },
    ];
    const coordinatesCasosResolvidos = [
      { latitude: "-22.8968", longitude: "-43.5103", t1: "Enfrent. às Milicias", t2: "Camp.Grande e St Cruz", from: "top", side: "left" },
      { latitude: "-23.0034", longitude: "-43.4224", t1: "Roubo a Ciclistas", t2: "Recreio", from: "top", side: "left" },
      { latitude: "	-23.0003", longitude: "-43.3369", t1: "Sequesto", t2: "Barra", from: "bottom", side: "right" },
      { latitude: "	-22.9495", longitude: "	-43.3712", t1: "Hom. de Pol. Civil", t2: "CDD", from: "top", side: "left" },
      { latitude: "	-22.9034", longitude: "	-43.2834", t1: "Seq. Relâmpago", t2: "Méier", from: "top", side: "left" },
      { latitude: "	-22.9239", longitude: "	-43.2324", t1: "Roubos - 6° BPM", t2: "Tijuca", from: "bottom", side: "right" },
    ];
    const coordinatesCasosResolvidosMobile = [
      { latitude: "-22.8368", longitude: "-43.5003", t1: "Enfrent. às Milicias", t2: "Camp.Grande e St Cruz", from: "top", side: "left" },
      { latitude: "-23.0034", longitude: "-43.4224", t1: "Roubo a Ciclistas", t2: "Recreio", from: "top", side: "left" },
      { latitude: "	-23.0003", longitude: "-43.3669", t1: "Sequesto", t2: "Barra", from: "bottom", side: "right" },
      { latitude: "	-22.9495", longitude: "	-43.3712", t1: "Hom. de Pol. Civil", t2: "CDD", from: "top", side: "left" },
      { latitude: "	-22.8834", longitude: "	-43.2634", t1: "Seq. Relâmpago", t2: "Méier", from: "top", side: "left" },
    ];
    const coordinatesCasosResolvidosMobileTijuca = [
      { latitude: "	-22.9239", longitude: "	-43.2324", t1: "Roubos", t2: "Tijuca", from: "bottom", side: "right" },
    ];
    return (
      <Map
        ref={this.state.mapRef}
        initialViewState={
          isMobile
            ? {
              latitude: this.props.location.mobile.center.lat,
              longitude: this.props.location.mobile.center.lon,
              zoom: this.props.location.mobile.zoom,
              bearing: this.props.location.mobile.bearing,
              pitch: this.props.location.mobile.pitch,
            }
            : {
              latitude: this.props.location.desktop.center.lat,
              longitude: this.props.location.desktop.center.lon,
              zoom: this.props.location.desktop.zoom,
              bearing: this.props.location.desktop.bearing,
              pitch: this.props.location.desktop.pitch,
            }
        }
        {...this.state.mapSettings}
        onLoad={({ target }) => {
          this.setState({ mapLoaded: true });
          this.toggleLayers(this.props.layers, true);
          this.startAnimation();
        }}
        onRender={({ target }) => {
          this.state.allLayers.forEach((layerDict) => {
            if (layerDict.layerType === "deckgl-trips") {
              const currentLayer = target.getLayer(layerDict.layer.id);
              if (currentLayer) {
                currentLayer.implementation.setProps({
                  currentTime: this.state.time,
                });
              }
            }
          });
        }}
      >
        <div>


          {chapterNumberMap == "capa" || chapterNumberMap == "zoom" ? (
            <div style={gridStyle}>
              {videoInfoArray.map((videoInfo, index) => (
                <div key={index} style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
                  <video
                    loop
                    playsInline
                    src={videoInfo.src}
                    controls={false}
                    autoPlay
                    muted
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: index,
                      border: "1px solid black",
                      // borderRadius: "5px",
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            videoInfoArray.map((videoInfo, index) => (
              <>
                {!videoInfo.ehRadar && !videoInfo.ehPin && (
                  <Marker
                    key={index}
                    latitude={videoInfo.lat}
                    longitude={videoInfo.lon}
                  >
                    <div
                      style={{
                        display: `${videoInfo.chapterNumberMap == chapterNumberMap && chapterNumberMap != "exemplo7" && chapterNumberMap != "exemplo1" && chapterNumberMap != "exemplo10" || chapterNumberMap == "exemplo11" ? "flex" : "none"}`,
                        position: "relative",
                        flexDirection: "column",
                        alignItems: "center",
                        top: "-50px",
                      }}
                    >
                      {!videoInfo.ehImagem ? (
                        <video
                          src={videoInfo.src}
                          controls={false}
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{
                            // transform: `scale(${chapterNumberMap == "exemplo3" || chapterNumberMap == "exemplo6" ? cardHeight : ((chapterNumberMap == "exemplo8" || chapterNumberMap == "seop3_2") && cardHeight < 2) ? cardHeight * 1.1 : 1})`,
                            width: `${isMobile ? cardHeight * 1.5 * 70 : cardHeight * 1.5 * 200}px`,
                            maxWidth: `${isMobile ? 70 : 50}vw`,
                            minWidth: `${isMobile ? 100 : 300}px`,
                            zIndex: "1",
                            border: "2.5px solid black",
                            // borderRadius: "5px",
                            transition: "transform 0.5s",
                          }}
                        />) : <img style={{
                          // transform: `scale(${chapterNumberMap == "exemplo3" || chapterNumberMap == "exemplo6" ? cardHeight : ((chapterNumberMap == "exemplo8" || chapterNumberMap == "seop3_2") && cardHeight < 2) ? cardHeight * 1.1 : 1})`,
                          width: `${isMobile ? cardHeight * 1.5 * 50 : cardHeight * 200}px`,
                          zIndex: "1",
                          border: "2.5px solid black",
                          // borderRadius: "5px",
                          transition: "transform 0.5s",
                        }} src={videoInfo.srcImagem == "assalto" ? assalto : dois_caras_numa_moto}></img>}
                      <div
                        style={{
                          width: "2px",
                          height: "20px",
                          backgroundColor: "black",
                          zIndex: "0",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          backgroundColor: "black",
                          zIndex: "0",
                        }}
                      ></div>
                    </div>


                  </Marker>
                )}
                {
                  (chapterNumberMap == "exemplo4" || chapterNumberMap == "exemplo41") && (
                    <Marker
                      latitude="-22.86610"
                      longitude="-43.36001"
                    >
                      <div style={{
                        position: 'relative',
                      }}>

                        <svg id="radar-circle">
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite"></animate>
                          </circle>
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="0.75s" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="0.75s"></animate>
                          </circle>
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="1.5s" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="1.5s"></animate>
                          </circle>
                          <circle cx="50%" cy="50%" r="10" fill="#00BFFF" stroke="#00BFFF"></circle>
                        </svg>

                        <div style={{
                          position: 'absolute',
                          top: '-90px',
                          right: '-15px',
                          textAlign: 'center',
                          width: '160px', // Ensures the text stays within the bounds of the image
                        }}>
                          <img src={dialogBallon} alt="Text Background" style={{
                            width: '160px',
                            height: 'auto',
                            display: 'block',
                          }} />

                          <div className="radar" style={{
                            position: 'absolute',
                            top: '24px', // Adjust this value to fine-tune the positioning of the text
                            left: '10px',
                            right: '0',
                            padding: '5px',
                            textAlign: "left",
                            fontSize: '10px', // Adjust the font size as needed
                            color: 'white', // Assuming black text color, change as necessary
                          }}>
                            <div className="content">
                              <div>5h55 AM</div>
                              <div>
                                Placa <span style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", filter: "blur(2px)", padding: "5px", borderRadius: "5px" }}>FBR2A23</span>
                              </div>
                              <div>Rua Sapopemba</div>
                              <div>Sentido Centro</div>
                            </div>
                          </div>
                        </div>
                      </div>


                    </Marker>
                  )
                }
                {
                  chapterNumberMap == "exemplo42" && coordinatesCarro.map((coord, index) => (
                    <Marker
                      key={index}
                      latitude={coord.latitude}
                      longitude={coord.longitude}
                    >
                      <div style={{
                        position: 'relative',
                      }}>

                        <svg id="radar-circle">
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite"></animate>
                          </circle>
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="0.75s" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="0.75s"></animate>
                          </circle>
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="1.5s" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="1.5s"></animate>
                          </circle>
                          <circle cx="50%" cy="50%" r="10" fill="#00BFFF" stroke="#00BFFF"></circle>
                        </svg>
                      </div>


                    </Marker>
                  ))
                }
                {
                  chapterNumberMap == "seop2" &&
                  <Marker
                    key={index}
                    latitude={-22.916717828353868}
                    longitude={-43.2044788025955}
                  >
                    <div style={{
                      position: 'relative',
                    }}>

                      <svg id="radar-circle">
                        <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                          <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                          <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="0.75s" />
                          <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="0.75s"></animate>
                        </circle>
                        <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                          <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="1.5s" />
                          <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="1.5s"></animate>
                        </circle>
                        <circle cx="50%" cy="50%" r="10" fill="red" stroke="red"></circle>
                      </svg>
                    </div>


                  </Marker>

                }
                {
                  (chapterNumberMap == "seop8" || chapterNumberMap == "seop81") &&
                  <Marker
                    key={index}
                    latitude={-23.003932747780283}
                    longitude={-43.33157970337831}
                  >
                    <div style={{
                      position: 'relative',
                    }}>

                      <svg id="radar-circle">
                        <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                          <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                          <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="0.75s" />
                          <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="0.75s"></animate>
                        </circle>
                        <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                          <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="1.5s" />
                          <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="1.5s"></animate>
                        </circle>
                        <circle cx="50%" cy="50%" r="10" fill="red" stroke="red"></circle>
                      </svg>
                    </div>


                  </Marker>

                }
                {
                  (chapterNumberMap === "grafico" || chapterNumberMap === "grafico1") && coordinatesCarro2.map((coord, index) => (
                    <Marker
                      key={index}
                      latitude={coord.latitude}
                      longitude={coord.longitude}
                    >
                      <div style={{ position: 'relative' }}>
                        <svg id="radar-circle">
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite"></animate>
                          </circle>
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="0.75s" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="0.75s"></animate>
                          </circle>
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="1.5s" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="1.5s"></animate>
                          </circle>
                          <circle cx="50%" cy="50%" r="10" fill="#00BFFF" stroke="#00BFFF"></circle>

                          <g >
                            {coord.from === "top" ? (
                              <>
                                <line x1="40%" y1="0" x2="50%" y2="50%" stroke="#00BFFF" strokeWidth="2px" />
                                {coord.side === "left" ? (
                                  <line x1="40%" y1="0" x2="20%" y2="0" stroke="#00BFFF" strokeWidth="2px" />
                                ) : (
                                  <line x1="40%" y1="0" x2="80%" y2="0" stroke="#00BFFF" strokeWidth="2px" />
                                )}
                              </>
                            ) : (
                              <>
                                <line x1="50%" y1="50%" x2="60%" y2="100%" stroke="#00BFFF" strokeWidth="2px" />
                                {coord.side === "left" ? (
                                  <line x1="60%" y1="100%" x2="20%" y2="100%" stroke="#00BFFF" strokeWidth="2px" />
                                ) : (
                                  <line x1="60%" y1="100%" x2="80%" y2="100%" stroke="#00BFFF" strokeWidth="2px" />
                                )}
                              </>
                            )}
                          </g>
                        </svg>
                        <h1 className="radar" style={{
                          color: "white",
                          fontWeight: "lighter",
                          fontSize: "14px",
                          position: 'absolute',
                          top: `${coord.from === 'top' ? "-20px" : "130px"}`,  // Adjust as needed
                          left: `${coord.from === 'top' ? "65px" : "186px"}`, // Adjust as needed
                          // transform: 'translate(-50%, -50%)',
                          zIndex: 10
                        }}>
                          {coord.hora}
                        </h1>
                      </div>
                    </Marker>
                  ))
                }
                {
                  (chapterNumberMap === "beforeFim") && !isMobile && coordinatesCasosResolvidos.map((coord, index) => (
                    <Marker
                      key={index}
                      latitude={coord.latitude}
                      longitude={coord.longitude}
                    >
                      <div style={{ position: 'relative' }}>
                        <svg id="radar-circle">

                          <circle cx="50%" cy="50%" r="8" fill="#00BFFF" stroke="#00BFFF"></circle>
                          <circle cx="50%" cy="50%" r="14" fill="none" stroke="white" strokeWidth="2"></circle>

                          <g >
                            {coord.from === "top" ? (
                              <>
                                <line x1="40%" y1="0" x2="50%" y2="50%" stroke="#00BFFF" strokeWidth="2px" />
                                {coord.side === "left" ? (
                                  <line x1="40%" y1="0" x2="-20%" y2="0" stroke="#00BFFF" strokeWidth="2px" />
                                ) : (
                                  <line x1="40%" y1="0" x2="80%" y2="0" stroke="#00BFFF" strokeWidth="2px" />
                                )}
                              </>
                            ) : (
                              <>
                                <line x1="50%" y1="50%" x2="60%" y2="100%" stroke="#00BFFF" strokeWidth="2px" />
                                {coord.side === "left" ? (
                                  <line x1="60%" y1="100%" x2="20%" y2="100%" stroke="#00BFFF" strokeWidth="2px" />
                                ) : (
                                  <line x1="60%" y1="100%" x2="100%" y2="100%" stroke="#00BFFF" strokeWidth="2px" />
                                )}
                              </>
                            )}
                          </g>
                        </svg>
                        <h1 style={{
                          color: "white",
                          fontWeight: "lighter",
                          fontSize: "13px",
                          position: 'absolute',
                          top: `${coord.from === 'top' ? "-18px" : "131px"}`,  // Adjust as needed
                          left: `${coord.from === 'top' ? "5px" : "186px"}`, // Adjust as needed
                          // transform: 'translate(-50%, -50%)',
                          zIndex: 10
                        }}>
                          {coord.t1}
                        </h1>
                        <h1 style={{
                          color: "white",
                          fontWeight: "lighter",
                          fontSize: "11px",
                          position: 'absolute',
                          top: `${coord.from === 'top' ? "-1px" : "148px"}`,  // Adjust as needed
                          left: `${coord.from === 'top' ? "5px" : "186px"}`, // Adjust as needed
                          // transform: 'translate(-50%, -50%)',
                          zIndex: 10
                        }}>
                          {coord.t2}
                        </h1>
                      </div>
                    </Marker>
                  ))
                }
                {
                  (chapterNumberMap === "beforeFim") && isMobile && coordinatesCasosResolvidosMobile.map((coord, index) => (
                    <Marker
                      key={index}
                      latitude={coord.latitude}
                      longitude={coord.longitude}
                    >
                      <div style={{ position: 'relative' }}>
                        <svg id="radar-circle">

                          <circle cx="50%" cy="50%" r="8" fill="#00BFFF" stroke="#00BFFF"></circle>
                          <circle cx="50%" cy="50%" r="14" fill="none" stroke="white" strokeWidth="2"></circle>

                          <g >
                            {coord.from === "top" ? (
                              <>
                                <line x1="40%" y1="20%" x2="50%" y2="50%" stroke="#00BFFF" strokeWidth="2px" />
                                {coord.side === "left" ? (
                                  <line x1="40%" y1="20%" x2="-20%" y2="20%" stroke="#00BFFF" strokeWidth="2px" />
                                ) : (
                                  <line x1="40%" y1="0" x2="80%" y2="0" stroke="#00BFFF" strokeWidth="2px" />
                                )}
                              </>
                            ) : (
                              <>
                                <line x1="50%" y1="50%" x2="60%" y2="100%" stroke="#00BFFF" strokeWidth="2px" />
                                {coord.side === "left" ? (
                                  <line x1="60%" y1="100%" x2="20%" y2="100%" stroke="#00BFFF" strokeWidth="2px" />
                                ) : (
                                  <line x1="60%" y1="100%" x2="100%" y2="100%" stroke="#00BFFF" strokeWidth="2px" />
                                )}
                              </>
                            )}
                          </g>
                        </svg>
                        <h1 style={{
                          color: "white",
                          fontWeight: "lighter",
                          fontSize: "13px",
                          position: 'absolute',
                          top: `${coord.from === 'top' ? "10px" : "131px"}`,  // Adjust as needed
                          left: `${coord.from === 'top' ? "5px" : "186px"}`, // Adjust as needed
                          // transform: 'translate(-50%, -50%)',
                          zIndex: 10
                        }}>
                          {coord.t1}
                        </h1>
                        <h1 style={{
                          color: "white",
                          fontWeight: "lighter",
                          fontSize: "11px",
                          position: 'absolute',
                          top: `${coord.from === 'top' ? "30px" : "148px"}`,  // Adjust as needed
                          left: `${coord.from === 'top' ? "5px" : "186px"}`, // Adjust as needed
                          // transform: 'translate(-50%, -50%)',
                          zIndex: 10
                        }}>
                          {coord.t2}
                        </h1>
                      </div>
                    </Marker>
                  ))
                }
                {
                  (chapterNumberMap === "beforeFim") && isMobile && coordinatesCasosResolvidosMobileTijuca.map((coord, index) => (
                    <Marker
                      key={index}
                      latitude={coord.latitude}
                      longitude={coord.longitude}
                    >
                      <div style={{ position: 'relative' }}>
                        <svg id="radar-circle">

                          <circle cx="50%" cy="50%" r="8" fill="#00BFFF" stroke="#00BFFF"></circle>
                          <circle cx="50%" cy="50%" r="14" fill="none" stroke="white" strokeWidth="2"></circle>
                          <line x1="50%" y1="50%" x2="22%" y2="50%" stroke="#00BFFF" strokeWidth="2px" />                        </svg>
                        <h1 style={{
                          color: "white",
                          fontWeight: "lighter",
                          fontSize: "13px",
                          position: 'absolute',
                          top: `${coord.from === 'top' ? "0px" : "55px"}`,  // Adjust as needed
                          left: `${coord.from === 'top' ? "5px" : "65px"}`, // Adjust as needed
                          // transform: 'translate(-50%, -50%)',
                          zIndex: 10
                        }}>
                          {coord.t1}
                        </h1>
                        <h1 style={{
                          color: "white",
                          fontWeight: "lighter",
                          fontSize: "11px",
                          position: 'absolute',
                          top: `${coord.from === 'top' ? "30px" : "75px"}`,  // Adjust as needed
                          left: `${coord.from === 'top' ? "5px" : "70px"}`, // Adjust as needed
                          // transform: 'translate(-50%, -50%)',
                          zIndex: 10
                        }}>
                          {coord.t2}
                        </h1>
                      </div>
                    </Marker>
                  ))
                }

                {
                  (chapterNumberMap == "exemplo7" || chapterNumberMap == "seop3" || chapterNumberMap == "exemplo71" || chapterNumberMap == "exemplo72" || chapterNumberMap == "exemplo73" || chapterNumberMap == "seop1") && (
                    <Marker
                      latitude="-22.91213" // quando diminuo em modulo vai pra cima
                      longitude="-43.2033150" // quando diminuo em modulo vai pra direita
                    >
                      <div style={{
                        position: 'relative',
                      }}>

                        <svg id="radar-circle">
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite"></animate>
                          </circle>
                          <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="0.75s" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="0.75s"></animate>
                          </circle>
                          {/* <circle cx="50%" cy="50%" r="0" fillOpacity="0" stroke="white" strokeWidth="2px" strokeOpacity="1">
                            <animate attributeName="r" from="0" to="30" dur="3s" repeatCount="indefinite" begin="1.5s" />
                            <animate attributeName="stroke-opacity" from="1" to="0" dur="3s" repeatCount="indefinite" begin="1.5s"></animate>
                          </circle> */}
                          {/* <circle cx="50%" cy="50%" r="10" fill="#00BFFF" stroke="#00BFFF"></circle> */}
                        </svg>
                      </div>


                    </Marker>
                  )
                }


                {
                  (chapterNumberMap === "seop5") && (
                    coordinatesCamera.map((coord, index) => (
                      <Marker
                        key={index}
                        latitude={coord.latitude}
                        longitude={coord.longitude}
                      >
                        <img width={33} src={camera_icon}></img>
                      </Marker>
                    ))
                  )
                }
                {
                  (chapterNumberMap === "seop5_2" || chapterNumberMap === "seop6") && (
                    <Marker
                      latitude="-22.9035"
                      longitude="-43.2837"
                    >

                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          top: "-90px",
                        }}
                      >
                        <img
                          style={{
                            transform: `scale(${chapterNumberMap === "exemplo3" || chapterNumberMap === "exemplo6"
                              ? cardHeight
                              : (chapterNumberMap === "exemplo8" || chapterNumberMap === "seop3_2") && cardHeight < 2
                                ? cardHeight * 1.1
                                : 1
                              })`,
                            width: `${(chapterNumberMap === "exemplo8" || chapterNumberMap === "seop3_2") && cardHeight > 2
                              ? "100vw"
                              : "200px"
                              }`,
                            zIndex: "1",
                            border: "2.5px solid black",
                            // borderRadius: "5px",
                            transition: "transform 0.5s",
                          }}
                          src={imagem16}
                        />
                        <div
                          style={{
                            width: "2px",
                            height: "50px",
                            backgroundColor: "black",
                            zIndex: "0",
                          }}
                        ></div>
                        <div

                        > <img width={33} src={camera_icon}></img></div>

                      </div>
                    </Marker>
                  )
                }



              </>
            ))
          )}
        </div>
      </Map>
    );
  }
}

CustomMultilayerMap.defaultProps = {
  interactive: false,
  scrollZoom: false,
  showLayers: false,
  animationSpeed: 3,
  animationLoopLength: 28000,
  animated: true,
  mapboxAccessToken: "",
  mapStyle: "",
  chapterNumberMap: "",
  mapCSS: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "-1",
  },
  layers: [],
  location: {
    desktop: {
      center: {
        lat: 0,
        lon: 0,
      },
      zoom: 0,
      bearing: 0,
      pitch: 0,
      duration: 4000,
    },
    mobile: {
      center: {
        lat: 0,
        lon: 0,
      },
      zoom: 0,
      bearing: 0,
      pitch: 0,
      duration: 4000,
    },
  },
  videoInfoArray: [],
};

export default CustomMultilayerMap;
