// Mandatory
import { useEffect, useState, useRef } from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { H3HexagonLayer } from "@deck.gl/geo-layers";
import DeckGL from "@deck.gl/react";
import { Oval } from "react-loader-spinner";
import { isMobile } from "react-device-detect";
// import DATA from "./data/chuva_15min.json";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function PainelChuva() {
  const mapRef = useRef();

  const [viewport, setViewport] = useState({
    longitude: isMobile ? -43.47398 : -43.50398,
    latitude: isMobile ? -22.95157 : -22.92957,
    zoom: isMobile ? 8.5 : 10.3,
    minZoom: isMobile ? 8.5 : 10.3,
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
    ref.current = setInterval(updateData, 1 * 60 * 1000); // every minute
    updateData();
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  const getTooltip = ({ object }) => {
    let qtyText = "";
    if (object && object.qnt_alagamentos != 0) {
      qtyText = `<p><b>Alagamentos </b> ${object.qnt_alagamentos} </p>`;
    }
    return (
      object && {
        html: `<div>
        <h4><b>Bairro </b> ${object.bairro}</h4>
        <p><b>Status </b> ${object.status}</p>
        ${qtyText}
      </div>`,
      }
    );
  };

  const hexToRgb = (hex) => {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    if (hex) {
      hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
      });
    } else {
      hex = "#FFFFFF";
    }

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };
  const getColor = (status) => {
    switch (status) {
      case "sem chuva":
        return "#8fdac7";
      case "chuva fraca":
        return "#35a98c";
      case "chuva moderada":
        return "#e9c46a";
      case "chuva forte":
        return "#f4a261";
      case "chuva muito forte":
        return "#e76f51";
      default:
        return "#000000"; // Black (default color if status is unknown)
    }
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
      hexToRgb(getColor(d.status)).r,
      hexToRgb(getColor(d.status)).g,
      hexToRgb(getColor(d.status)).b,
      255,
    ],
    getElevation: (d) => d.chuva_15min,
    getLineColor: [255, 255, 255, 0],
    getLineWidth: 120,
  });
  return (
    <div>
      {data && data.length === 0 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
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
            mapStyle="mapbox://styles/escritoriodedados/clgfevcvc009101p9ax017bah"
            mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
          ></Map>{" "}
        </DeckGL>
      )}
      ;
    </div>
  );
}
