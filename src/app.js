// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import TripsMap from "./pages/especial-sppo/tripsmap";
import StorySample from "./pages/sandbox/sample";
import Test from "./pages/sandbox/test";
import SubsidioSPPO from "./pages/subsidio-sppo/story";
import BarChart from "./pages/test-d3/d3.animation";
import Chart from "./pages/test-d3/react-d3-test";
import TestLineChart from "./pages/sandbox/test_linechart";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/especial-sppo/trips" element={<TripsMap />} />
          <Route path="/especial-sppo/subsidio" element={<SubsidioSPPO />} />
          <Route path="/sandbox/sample" element={<StorySample />} />
          <Route path="/sandbox/test" element={<Test />} />
          <Route path="/sandbox/d3" element={<BarChart />} />
          <Route path="/sandbox/d3-react" element={<Chart />}></Route>
          <Route
            path="/sandbox/test-linechart"
            element={<TestLineChart />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
