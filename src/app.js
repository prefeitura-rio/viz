// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import TripsMap from "./pages/especial-sppo/tripsmap";
import ScrollSPPO from "./pages/especial-sppo/scroll-sppo/scrollmagic";
import ScrollMap from "./pages/especial-sppo/scroll-sppo/scrollmap";
import ScrollMapboxGL from "./pages/especial-sppo/scroll-sppo/scrollmagic-mapboxgl";
import Sandbox from "./pages/sandbox/sandbox";

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
            element={<ScrollMapboxGL />}
          />
          <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
