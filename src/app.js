// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import TripsMap from "./pages/especial-sppo/tripsmap";
import ScrollSPPO from "./pages/especial-sppo/scroll-sppo/scrollmagic";
import StorySPPO from "./pages/especial-sppo/story";
import StorySample from "./stories/sample";
import Teste from "./pages/sandbox/teste";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories/sample" element={<StorySample />} />
          <Route path="/especial-sppo/trips" element={<TripsMap />} />
          <Route path="/especial-sppo/scroll" element={<ScrollSPPO />} />
          <Route path="/especial-sppo/scrollmapbox" element={<StorySPPO />} />
          <Route path="/sandbox/teste" element={<Teste />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
