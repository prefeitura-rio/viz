// https://staging.api.civitas.dados.rio/cars/path?placa=SQZ8B08&start_time=2024-05-30%2021%3A34:09&end_time=2024-05-30%2022%3A34:09'
// https://staging.api.civitas.dados.rio/cars/path?placa=SQZ8B08&start_time=2024-05-30%2000%3A00%3A00&end_time=2024-05-31%2000%3A00%3A00
import { useEffect, useState, useRef } from "react";
import { Map } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // do not remove this line
import { GeoJsonLayer } from "@deck.gl/layers";
import DATA from "./data/path_data.json";

import DeckGL from "@deck.gl/react";
import { Oval } from "react-loader-spinner";
import { isMobile } from "react-device-detect";

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

  const [data, setData] = useState([]);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [clickedChunkIndex, setClickedChunkIndex] = useState(null);
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
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e) => {
    console.log("Submit button clicked");

    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    if (data.length === 0) {
      console.log("Initial data fetch");
      fetchData();
    }
  }, [data]);

  const layers = [];

  if (clickedChunkIndex === null) {
    // Render all layers if no chunk is clicked
    layers.push(
      new GeoJsonLayer({
        id: "path",
        data: data.polylineChunksGeojson,
        pickable: true,
        stroked: true,
        filled: false,
        lineWidthMinPixels: 3,
        getLineColor: [255, 255, 255, 255],
        onHover: (info) => setHoverInfo(info),
        onClick: (info) => setClickedChunkIndex(info.index),
      })
    );
    if (data.locationsChunksGeojson) {
      data.locationsChunksGeojson.forEach((chunk, chunkIndex) => {
        layers.push(
          new GeoJsonLayer({
            id: `locations-${chunkIndex}`,
            data: chunk,
            pickable: true,
            stroked: false,
            filled: true,
            pointRadiusMinPixels: 10,
            getFillColor: (d, { index }) => {
              if (index === 0) {
                return [0, 255, 0, 200]; // Green for the first location
              } else if (index === chunk.features.length - 1) {
                return [255, 0, 0, 200]; // Red for the last location
              } else {
                return [255, 140, 0, 200]; // Orange for other locations
              }
            },
            onHover: (info) => setHoverInfo(info),
            onClick: (info) => setClickedChunkIndex(chunkIndex),
          })
        );
      });
    }
  } else {
    // Render only the clicked chunk
    layers.push(
      new GeoJsonLayer({
        id: `path-${clickedChunkIndex}`,
        data: data.polylineChunksGeojson[clickedChunkIndex],
        pickable: true,
        stroked: true,
        filled: false,
        lineWidthMinPixels: 3,
        getFillColor: [0, 0, 0, 255],
        onHover: (info) => setHoverInfo(info),
        onClick: () => setClickedChunkIndex(null), // Reset on click
      })
    );
    if (
      data.locationsChunksGeojson &&
      data.locationsChunksGeojson[clickedChunkIndex]
    ) {
      const chunk = data.locationsChunksGeojson[clickedChunkIndex];
      layers.push(
        new GeoJsonLayer({
          id: `locations-${clickedChunkIndex}`,
          data: chunk,
          pickable: true,
          stroked: false,
          filled: true,
          pointRadiusMinPixels: 10,
          getFillColor: (d, { index }) => {
            if (index === 0) {
              return [0, 255, 0, 200]; // Green for the first location
            } else if (index === chunk.features.length - 1) {
              return [255, 0, 0, 200]; // Red for the last location
            } else {
              return [255, 140, 0, 200]; // Orange for other locations
            }
          },
          onHover: (info) => setHoverInfo(info),
          onClick: () => setClickedChunkIndex(null), // Reset on click
        })
      );
    }
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <label>
            Select Chunk Index:
            <select
              value={clickedChunkIndex !== null ? clickedChunkIndex : ""}
              onChange={(e) =>
                setClickedChunkIndex(
                  e.target.value === "" ? null : Number(e.target.value)
                )
              }
              style={{ marginLeft: "10px" }}
            >
              <option value="">All chunks</option>
              {data.polylineChunksGeojson &&
                data.polylineChunksGeojson.map((_, index) => (
                  <option key={index} value={index}>
                    Chunk {index}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <button type="submit">Fetch Data</button>
      </form>
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
      {data && (
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
      )}
    </div>
  );
}
