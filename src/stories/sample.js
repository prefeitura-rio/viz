import { MapboxLayer } from "@deck.gl/mapbox"; // Ref: https://deck.gl/docs/api-reference/mapbox/mapbox-layer
import { TripsLayer } from "@deck.gl/geo-layers";

const TRAIL_LENGTH = 500;
const TRIPS = require("../pages/especial-sppo/data/trips.json");

const story = {
  animationSpeed: 3,
  animationLoopLength: 28000,
  chapters: [
    {
      id: "chapter-1",
      layer: new MapboxLayer({
        id: "my-trips-layer",
        type: TripsLayer,
        data: TRIPS,
        getPath: d => d.path,
        getTimestamps: d => d.timestamps,
        getColor: [0, 200, 236],
        widthMinPixels: 5,
        fadeTrail: true,
        currentTime: 0,
        opacity: 0,
        rounded: true,
        trailLength: TRAIL_LENGTH,
        shadowEnabled: false
      }),
      map: {
        center: {
          lat: -22.9121089,
          lon: -43.2301558
        },
        zoom: 9,
        bearing: 0,
        pitch: 0,
        duration: 4000
      },
      text: ""
    },
    {
      id: "chapter-2",
      layer: null,
      map: {
        center: {
          lat: -22.9121089,
          lon: -43.2301558
        },
        zoom: 15,
        bearing: 0,
        pitch: 0,
        duration: 4000
      },
      text: ""
    },
    {
      id: "chapter-3",
      layer: new MapboxLayer({
        id: "my-trips-layer3",
        type: TripsLayer,
        data: TRIPS,
        getPath: d => d.path,
        getTimestamps: d => d.timestamps,
        getColor: [0, 200, 236],
        widthMinPixels: 5,
        fadeTrail: true,
        currentTime: 0,
        opacity: 0,
        rounded: true,
        trailLength: TRAIL_LENGTH,
        shadowEnabled: false
      }),
      map: {
        center: {
          lat: -22.9121089,
          lon: -43.2301558
        },
        zoom: 12,
        bearing: 0,
        pitch: 0,
        duration: 4000
      },
      text: ""
    }
  ],
  sectionDuration: 400,
  sectionOffset: -450
};

export default story;
