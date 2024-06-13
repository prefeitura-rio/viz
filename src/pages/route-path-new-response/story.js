// import React, { useEffect, useState, useRef } from "react";
// import DeckGL from "@deck.gl/react";
// import { Map } from "react-map-gl";
// import mapboxgl from "mapbox-gl"; // do not remove this line
// import { GeoJsonLayer } from "@deck.gl/layers";
// import { Oval } from "react-loader-spinner";
// import { isMobile } from "react-device-detect";
// import DATA from "./data/route_trips.json";

// // The following is required to stop "npm build" from transpiling mapbox code.
// // notice the exclamation point in the import.
// // @ts-ignore
// // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
// mapboxgl.workerClass =
//   require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

// export default function RoutePath() {
//   const mapRef = useRef();

//   const [viewport, setViewport] = useState({
//     longitude: isMobile ? -43.47398 : -43.50398,
//     latitude: isMobile ? -22.95157 : -22.92957,
//     zoom: isMobile ? 8.5 : 10.3,
//   });

//   const [data, setData] = useState({
//     locationsChunks: [],
//     polylineChunks: [],
//   });
//   const [hoverInfo, setHoverInfo] = useState(null);
//   const [selectedTrip, setSelectedTrip] = useState(null);
//   const [placa, setPlaca] = useState("SQZ8B08");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleTripSelect = (event) => {
//     const selectedTripIndex = event.target.value;
//     setSelectedTrip(DATA[selectedTripIndex]);
//   };

//   useEffect(() => {
//     if (selectedTrip) {
//       // Update data and layers based on the selected trip
//       const locations = selectedTrip.locations;
//       const polyline = selectedTrip.polyline;

//       setData({
//         locationsChunks: locations,
//         polylineChunks: polyline,
//       });
//     }
//   }, [selectedTrip]);
//   const getPointLayerData = () => {
//     return {
//       type: "FeatureCollection",
//       features: data.locationsChunks.flat().map((location) => ({
//         type: "Feature",
//         geometry: {
//           type: "Point",
//           coordinates: [location.longitude, location.latitude],
//         },
//         properties: {
//           datahora: location.datahora,
//           camera_numero: location.camera_numero,
//           bairro: location.bairro,
//           localidade: location.localidade,
//         },
//       })),
//     };
//   };

//   const getPolylineLayerData = () => {
//     return {
//       type: "FeatureCollection",
//       features: data.polylineChunks.flatMap((route) =>
//         route.routes.flatMap((route) =>
//           route.legs.flatMap((leg) => ({
//             type: "Feature",
//             geometry: {
//               type: "LineString",
//               coordinates: leg.polyline.geoJsonLinestring.coordinates,
//             },
//             properties: {
//               distanceMeters: leg.distanceMeters,
//               duration: leg.duration,
//             },
//           }))
//         )
//       ),
//     };
//   };

//   const layers = [];
//   layers.push(
//     new GeoJsonLayer({
//       id: "polylines-layer",
//       data: getPolylineLayerData(),
//       pickable: true,
//       stroked: true,
//       filled: true,
//       lineWidthScale: 2,
//       lineWidthMinPixels: 2,
//       getLineColor: [255, 255, 255, 255],
//       getRadius: 100,
//       getLineWidth: 5,
//       getElevation: 30,
//       onHover: (info) => setHoverInfo(info),
//     })
//   );

//   layers.push(
//     new GeoJsonLayer({
//       id: "locations-layer",
//       data: getPointLayerData(),
//       getFillColor: (d, { index }) => {
//         const features = getPointLayerData().features;
//         if (index === 0) {
//           return [0, 255, 0, 200]; // Verde para o primeiro ponto
//         } else if (index === features.length - 1) {
//           return [255, 0, 0, 200]; // Vermelho para o último ponto
//         } else {
//           return [255, 165, 0, 200]; // Laranja para os demais pontos
//         }
//       },
//       getRadius: (d, { index }) => {
//         const features = getPointLayerData().features;
//         if (index === 0 || index === features.length - 1) {
//           return 6; // 2x o tamanho dos demais pontos
//         } else {
//           return 2; // Tamanho normal para os demais pontos
//         }
//       },
//       onHover: (info) => setHoverInfo(info),
//       pickable: true,
//       pointRadiusMinPixels: 2,
//       pointRadiusScale: 40,
//     })
//   );

//   return (
//     <div>
//       <div style={{ margin: "10px" }}>
//         <select onChange={handleTripSelect}>
//           <option value="">Select a trip</option>
//           {DATA.map((trip, index) => (
//             <option key={index} value={index}>
//               {`Trip ${index + 1}`}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         <Oval height={100} width={100} color="#00BFFF" visible={true} />
//       </div>
//       <DeckGL
//         ref={mapRef}
//         initialViewState={viewport}
//         controller={true}
//         onViewportChange={({ target }) => {
//           setViewport(target);
//         }}
//         layers={layers}
//         style={{ position: "relative", height: "calc(100vh - 100px)" }} // Adjust map height
//       >
//         <Map
//           style={{ width: "100vw", height: "100%" }}
//           mapStyle="mapbox://styles/escritoriodedados/clgfevcvc009101p9ax017bah"
//           mapboxAccessToken="pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w"
//         />
//         {hoverInfo && hoverInfo.object && (
//           <div
//             style={{
//               position: "absolute",
//               zIndex: 1,
//               pointerEvents: "none",
//               left: hoverInfo.x,
//               top: hoverInfo.y,
//               backgroundColor: "white",
//               padding: "5px",
//               borderRadius: "3px",
//               boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
//             }}
//           >
//             <div>
//               {Object.keys(hoverInfo.object.properties).map((key) => (
//                 <div key={key}>
//                   <strong>{key}: </strong>
//                   {hoverInfo.object.properties[key]}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </DeckGL>
//     </div>
//   );
// }
