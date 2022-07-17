// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import TripsMap from "./pages/especial-sppo/tripsmap";
import ScrollSPPO from "./pages/especial-sppo/scroll-sppo/scrollmagic";
import ScrollMap from "./pages/especial-sppo/scroll-sppo/scrollmap";
import ScrollMapboxGL from "./components/engine/scroll-mapbox-gl";
import Sandbox from "./pages/sandbox/sandbox";
import story from "./stories/sample";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w";
const MAP_STYLE = "mapbox://styles/escritoriodedados/cl5b8ea0s002915qtaaxvxz8b";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/especial-sppo/trips" element={<TripsMap />} />
          <Route path="/especial-sppo/scroll" element={<ScrollSPPO />} />
          <Route path="/especial-sppo/scrollmap" element={<ScrollMap />} />
          <Route
            path="/especial-sppo/scrollmapbox"
            element={
              <ScrollMapboxGL
                interactive={true}
                mapboxAccessToken={MAPBOX_TOKEN}
                mapStyle={MAP_STYLE}
                scrollZoom={false}
                story={story}
              />
            }
          />
          <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
