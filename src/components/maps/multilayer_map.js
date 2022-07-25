import React from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { isMobile } from "react-device-detect";

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
        style: props.mapCSS
      },
      mapRef: React.createRef(),
      layerTypes: {
        fill: ["fill-opacity"],
        line: ["line-opacity"],
        circle: ["circle-opacity", "circle-stroke-opacity"],
        symbol: ["icon-opacity", "text-opacity"],
        raster: ["raster-opacity"],
        "fill-extrusion": ["fill-extrusion-opacity"],
        heatmap: ["heatmap-opacity"]
      }
    };
  }
  // Chamado após o componente ser montado.
  componentDidMount() {}
  // Função auxiliar para montar o view state do mapa.
  getViewState(location) {
    let viewState = isMobile
      ? {
          center: [location.mobile.center.lon, location.mobile.center.lat],
          zoom: location.mobile.zoom,
          bearing: location.mobile.bearing,
          pitch: location.mobile.pitch,
          duration: location.mobile.duration
        }
      : {
          center: [location.desktop.center.lon, location.desktop.center.lat],
          zoom: location.desktop.zoom,
          bearing: location.desktop.bearing,
          pitch: location.desktop.pitch,
          duration: location.desktop.duration
        };
    if (!viewState.duration) {
      viewState.duration = 4000;
    }
    return viewState;
  }
  // Chamado quando o componente for atualizado.
  componentDidUpdate(prevProps) {
    console.log("prevProps", prevProps);
    console.log("this.props", this.props);
    const viewState = this.getViewState(this.props.location);
    console.log("viewState", viewState);
    this.state.mapRef.current?.flyTo(viewState);
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
                pitch: this.props.location.mobile.pitch
              }
            : {
                latitude: this.props.location.desktop.center.lat,
                longitude: this.props.location.desktop.center.lon,
                zoom: this.props.location.desktop.zoom,
                bearing: this.props.location.desktop.bearing,
                pitch: this.props.location.desktop.pitch
              }
        }
        {...this.state.mapSettings}
        onLoad={({ target }) => {
          this.props.layers.forEach((layerDict) => {
            if (
              layerDict.layerType === "mapbox" ||
              layerDict.layerType.startsWith("deckgl")
            ) {
              target.addLayer(layerDict.layer);
            }
          });
          for (let i = 0; i < this.props.layers.length; i++) {
            // layers from story
            var layerId = this.props.layers[i].layer.id;
            var layerType = this.props.layers[i].layerType;

            // layers from map style
            var mapLayer = target.getLayer(layerId);

            // set opacity
            if (layerType.startsWith("deckgl")) {
              mapLayer?.implementation.setProps({
                opacity: 1
              });
            } else if (layerType.startsWith("mapbox")) {
              if (mapLayer) {
                this.state.layerTypes[mapLayer.type].forEach((paintType) => {
                  target.setPaintProperty(layerId, paintType, 1);
                });
              }
            }
          }
        }}
        onRender={({ target }) => {
          this.props.layers.forEach((layerDict) => {
            if (layerDict.layerType === "deckgl-trips") {
              const currentLayer = target.getLayer(layerDict.layer.id);
              if (currentLayer) {
                currentLayer.implementation.setProps({
                  currentTime: time
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
  mapboxAccessToken: "",
  mapStyle: "",
  mapCSS: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "-1"
  },
  layers: [],
  location: {
    desktop: {
      center: {
        lat: 0,
        lon: 0
      },
      zoom: 0,
      bearing: 0,
      pitch: 0,
      duration: 4000
    },
    mobile: {
      center: {
        lat: 0,
        lon: 0
      },
      zoom: 0,
      bearing: 0,
      pitch: 0,
      duration: 4000
    }
  }
};

export default MultilayerMap;
