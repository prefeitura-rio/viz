import React from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { isMobile } from "react-device-detect";
// Theis 3 types of layers, mapbox, mapbox-style and deckgl

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

class MultilayerMap extends React.Component {
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
  componentDidMount() {}
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
    layers.forEach((layerDict) => {
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
    });
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
          this.state.mapLoaded = true;
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
      />
    );
  }
}

MultilayerMap.defaultProps = {
  interactive: false,
  scrollZoom: false,
  showLayers: false,
  animationSpeed: 3,
  animationLoopLength: 28000,
  animated: true,
  mapboxAccessToken: "",
  mapStyle: "",
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
};

export default MultilayerMap;
