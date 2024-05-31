import React, { useEffect, useState, useRef } from "react";
import DeckGL from "@deck.gl/react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { GeoJsonLayer } from "@deck.gl/layers";
import { Oval } from "react-loader-spinner";
import { isMobile } from "react-device-detect";
import DATA from "./data/path_data.json";

// The following is required to stop "npm build" from transpiling mapbox code.
// notice the exclamation point in the import.
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass =
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

export default function RoutePath() {
  const mapRef = useRef();

  const [viewport, setViewport] = useState({
    longitude: isMobile ? -43.47398 : -43.50398,
    latitude: isMobile ? -22.95157 : -22.92957,
    zoom: isMobile ? 8.5 : 10.3,
  });

  const [data, setData] = useState({
    locationsChunksGeojson: [],
    polylineChunksGeojson: [],
  });
  const [hoverInfo, setHoverInfo] = useState(null);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedChunk, setSelectedChunk] = useState(null);
  const [placa, setPlaca] = useState("SQZ8B08");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getCurrentDate = () => {
    const today = new Date();
    const offset = -3; // Offset para Brasília (GMT-3)
    const localDate = new Date(today.getTime() + offset * 60 * 60 * 1000);
    return localDate.toISOString().split("T")[0];
  };

  const getCurrentTime = () => {
    const today = new Date();
    return today.toTimeString().split(" ")[0];
  };

  const getCurrentTimeOffset = () => {
    const today = new Date();
    const localTime = new Date(today.getTime() - 1 * 60 * 60 * 1000);
    return localTime.toTimeString().split(" ")[0];
  };

  const [startTime, setStartTime] = useState(
    `${getCurrentDate()}T${getCurrentTimeOffset()}`
  );
  const [endTime, setEndTime] = useState(
    `${getCurrentDate()}T${getCurrentTime()}`
  );

  const fetchData = async () => {
    try {
      console.log("Fetching token...");
      // Get the bearer token
      const tokenResponse = await fetch(
        "https://staging.api.civitas.dados.rio/auth/token",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "",
            username: username,
            password: password,
            scope: "",
            client_id: "",
            client_secret: "",
          }),
        }
      );

      const tokenResult = await tokenResponse.json();
      const token = tokenResult.access_token;

      // Use the token to fetch the data
      console.log("Fetching data...");

      function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
      }

      function replaceAll(str) {
        const newStr = str.replace(new RegExp(escapeRegExp("T"), "g"), "%20");
        return newStr.replace(new RegExp(escapeRegExp(":"), "g"), "%3A");
      }

      const startTimeFormated = replaceAll(startTime);
      const endTimeFormated = replaceAll(endTime);

      const response = await fetch(
        `https://staging.api.civitas.dados.rio/cars/path?placa=${placa}&start_time=${startTimeFormated}&end_time=${endTimeFormated}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();
      console.log("Data fetched:", result);
      // console.log("Data local:", DATA);

      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    // console.log("Data local:", DATA);
    // setData(DATA);
  };

  const handleSubmit = (e) => {
    console.log("Submit button clicked");

    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    if (data.locationsChunksGeojson) {
      console.log("Initial data fetch");
      fetchData();
    }
  }, [data]);

  const getLineLayerData = () => {
    if (selectedTrip !== null) {
      if (selectedChunk !== null) {
        return {
          type: "FeatureCollection",
          features: [data.polylineChunksGeojson[selectedTrip][selectedChunk]],
        };
      } else {
        return {
          type: "FeatureCollection",
          features: data.polylineChunksGeojson[selectedTrip],
        };
      }
    } else {
      return {
        type: "FeatureCollection",
        features: data.polylineChunksGeojson.flat(),
      };
    }
  };

  const getPointLayerData = () => {
    if (selectedTrip !== null) {
      if (selectedChunk !== null) {
        return {
          type: "FeatureCollection",
          features:
            data.locationsChunksGeojson[selectedTrip][selectedChunk].features,
        };
      } else {
        return {
          type: "FeatureCollection",
          features: data.locationsChunksGeojson[selectedTrip]
            .flat()
            .map((chunk) => chunk.features)
            .flat(),
        };
      }
    } else {
      return {
        type: "FeatureCollection",
        features: data.locationsChunksGeojson
          .flat()
          .map((chunk) => chunk.features)
          .flat(),
      };
    }
  };

  const layers = [];

  // if data have polylineChunksGeojson then push the lineLayer to layers

  if (data.polylineChunksGeojson) {
    layers.push(
      new GeoJsonLayer({
        id: "geojson-line-layer",
        data: getLineLayerData(),
        pickable: true,
        stroked: true,
        filled: true,
        lineWidthScale: 2,
        lineWidthMinPixels: 2,
        getLineColor: [255, 255, 255, 255],
        getRadius: 100,
        getLineWidth: 5,
        getElevation: 30,
        onHover: setHoverInfo,
      })
    );
  }

  if (data.locationsChunksGeojson) {
    layers.push(
      new GeoJsonLayer({
        id: "geojson-point-layer",
        data: getPointLayerData(),
        pickable: true,
        stroked: false,
        filled: true,
        getFillColor: (d, { index }) => {
          const features = getPointLayerData().features;
          if (index === 0) {
            return [0, 255, 0, 200]; // Verde para o primeiro ponto
          } else if (index === features.length - 1) {
            return [255, 0, 0, 200]; // Vermelho para o último ponto
          } else {
            return [255, 165, 0, 200]; // Laranja para os demais pontos
          }
        },
        getRadius: (d, { index }) => {
          const features = getPointLayerData().features;
          if (index === 0 || index === features.length - 1) {
            return 6; // 2x o tamanho dos demais pontos
          } else {
            return 2; // Tamanho normal para os demais pontos
          }
        },
        pointRadiusMinPixels: 2,
        pointRadiusScale: 40,
        onHover: setHoverInfo,
      })
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "10px",
          background: "white",
          zIndex: 1000,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Placa:
            <input
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Start Time:
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            End Time:
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Select Trip:
            <select
              value={selectedTrip !== null ? selectedTrip : ""}
              onChange={(e) => {
                setSelectedTrip(
                  e.target.value === "" ? null : Number(e.target.value)
                );
                setSelectedChunk(null); // Reset chunk selection
              }}
              style={{ marginLeft: "10px" }}
            >
              <option value="">All Trips</option>
              {data.polylineChunksGeojson &&
                data.polylineChunksGeojson.map((_, index) => (
                  <option key={index} value={index}>
                    Trip {index}
                  </option>
                ))}
            </select>
          </label>
        </div>
        {selectedTrip !== null && (
          <div>
            <label>
              Select Chunk:
              <select
                value={selectedChunk !== null ? selectedChunk : ""}
                onChange={(e) =>
                  setSelectedChunk(
                    e.target.value === "" ? null : Number(e.target.value)
                  )
                }
                style={{ marginLeft: "10px" }}
              >
                <option value="">All Chunks</option>
                {data.polylineChunksGeojson[selectedTrip] &&
                  data.polylineChunksGeojson[selectedTrip].map((_, index) => (
                    <option key={index} value={index}>
                      Chunk {index}
                    </option>
                  ))}
              </select>
            </label>
          </div>
        )}
        <button type="submit">Fetch Data</button>
      </form>
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
      <DeckGL
        ref={mapRef}
        initialViewState={viewport}
        controller={true}
        onViewportChange={({ target }) => {
          setViewport(target);
        }}
        layers={layers}
        style={{ position: "relative", height: "calc(100vh - 100px)" }} // Adjust map height
      >
        <Map
          style={{ width: "100vw", height: "100%" }}
          mapStyle="mapbox://styles/escritoriodedados/clgfevcvc009101p9ax017bah"
          mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
        />
        {hoverInfo && hoverInfo.object && (
          <div
            style={{
              position: "absolute",
              zIndex: 1,
              pointerEvents: "none",
              left: hoverInfo.x,
              top: hoverInfo.y,
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "3px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div>
              {Object.keys(hoverInfo.object.properties).map((key) => (
                <div key={key}>
                  <strong>{key}: </strong>
                  {hoverInfo.object.properties[key]}
                </div>
              ))}
            </div>
          </div>
        )}
      </DeckGL>
    </div>
  );
}
