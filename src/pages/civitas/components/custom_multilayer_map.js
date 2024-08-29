import React from "react";
import { Map, Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { isMobile } from "react-device-detect";
import { useState } from "react";
import dialogBallon from "../images/ballon.png"
import dois_caras_numa_moto from "../images/dois_caras_numa_moto.png"
import imagem16 from "../images/imagem16.png"
import locationpin from "../images/locationpin.gif"
import { zoom } from "d3";
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
      console.log("allLyaers", mapInstance.getStyle().layers);
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
                        display: `${videoInfo.chapterNumberMap == chapterNumberMap && chapterNumberMap != "exemplo7" || chapterNumberMap == "exemplo1" || chapterNumberMap == "exemplo11" ? "flex" : "none"}`,
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
                        }} src={dois_caras_numa_moto}></img>}
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
                  chapterNumberMap == "exemplo4" && (
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
                          width: '150px', // Ensures the text stays within the bounds of the image
                        }}>
                          <img src={dialogBallon} alt="Text Background" style={{
                            width: '150px',
                            height: 'auto',
                            display: 'block',
                          }} />

                          <div style={{
                            position: 'absolute',
                            top: '20px', // Adjust this value to fine-tune the positioning of the text
                            left: '20px',
                            right: '0',
                            padding: '5px',
                            textAlign: "left",
                            fontSize: '13.5px', // Adjust the font size as needed
                            color: 'white', // Assuming black text color, change as necessary
                          }}>
                            <div>6h55 AM</div>
                            <div>Placa XXXX</div>
                            <div>Rua João Vicente</div>
                            <div>Sentido Centro</div>
                          </div>
                        </div>
                      </div>


                    </Marker>
                  )
                }
                {
                  (chapterNumberMap == "exemplo7" || chapterNumberMap == "seop3" || chapterNumberMap == "seop1") && (
                    <Marker
                      latitude="-22.91213" // quando diminuo em modulo vai pra cima
                      longitude="-43.2033150" // quando aumento em modulo vai pra esquerda
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
                  (chapterNumberMap === "seop5_2" || chapterNumberMap === "seop6") && (
                    <Marker
                      latitude="-22.8648"
                      longitude="-43.3605"
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
                            height: "40px",
                            backgroundColor: "black",
                            zIndex: "0",
                          }}
                        ></div>

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
