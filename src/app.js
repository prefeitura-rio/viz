// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import TripsMap from "./pages/especial-sppo/tripsmap";
import StorySPPO from "./pages/especial-sppo/story";
import StorySample from "./stories/sample";
import Test from "./pages/sandbox/test";
import TestMap from "./pages/sandbox/test_map";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/especial-sppo/trips" element={<TripsMap />} />
          <Route path="/especial-sppo/scrollmapbox" element={<StorySPPO />} />
          <Route path="/stories/sample" element={<StorySample />} />
          <Route path="/sandbox/test" element={<Test />} />
          <Route path="/sandbox/test_map" element={<TestMap />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
