// Mandatory
import { useEffect, useState, useRef } from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { H3HexagonLayer } from "@deck.gl/geo-layers";
import DeckGL from "@deck.gl/react";
import { Oval } from "react-loader-spinner";
import { isMobile } from "react-device-detect";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function PainelChuva() {
  const mapRef = useRef();

  const [viewport, setViewport] = useState({
    longitude: isMobile ? -43.47398 : -43.46398,
    latitude: isMobile ? -22.95157 : -22.95157,
    zoom: isMobile ? 8.5 : 10.2,
    minZoom: isMobile ? 8.5 : 10.2
  });

  const [data, setData] = useState([]);
  const ref = useRef(null);

  const updateData = () => {
    let apiUrl =
      "https://api.dados.rio/v2/clima_pluviometro/precipitacao_15min/";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    ref.current = setInterval(updateData, 5 * 60 * 1000); // 5 minutes
    updateData();
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  const getTooltip = ({ object }) => {
    let qtyText = "";
    if (object && object.chuva_15min != 0) {
      qtyText = `<p><b>Chuva </b> ${object.chuva_15min} mm</p>`;
    }
    return (
      object && {
        html: `<div>
        <h4><b>Bairro </b> ${object.bairro}</h4>
        <p><b>Status </b> ${object.status}</p>
        ${qtyText}
      </div>`
      }
    );
  };

  const hexToRgb = (hex) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  };

  const H3layer = new H3HexagonLayer({
    id: "h3-layer",
    data: data,
    pickable: true,
    wireframe: false,
    filled: true,
    extruded: false,
    elevationScale: 0,
    getHexagon: (d) => d.id_h3,
    getFillColor: (d) => [
      hexToRgb(d.color).r,
      hexToRgb(d.color).g,
      hexToRgb(d.color).b
    ],
    getElevation: (d) => d.chuva_15min,
    getLineColor: [255, 255, 255, 100],
    getLineWidth: 120
  });
  return (
    <div>
      {data && data.length === 0 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <Oval height={100} width={100} color="#00BFFF" visible={true} />
        </div>
      )}
      {data && data.length > 0 && (
        <DeckGL
          ref={mapRef}
          initialViewState={viewport}
          controller={true}
          onViewportChange={({ target }) => {
            setViewport;
          }}
          layers={[H3layer]}
          getTooltip={getTooltip}
        >
          <Map
            style={{ width: "100vw", height: "100vh" }}
            mapStyle="mapbox://styles/escritoriodedados/cldyqygrt001d01pf2s06r10y"
            mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
          ></Map>{" "}
        </DeckGL>
      )}
      ;
    </div>
  );
}
