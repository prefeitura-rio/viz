// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/home/home"));
const TripsMap = lazy(() => import("./pages/especial-sppo/tripsmap"));
const StorySample = lazy(() => import("./pages/sandbox/sample"));
const Test = lazy(() => import("./pages/sandbox/test"));
const SubsidioSPPO = lazy(() => import("./pages/subsidio-sppo/story"));
const BarChart = lazy(() => import("./pages/test-d3/d3.animation"));
const Chart = lazy(() => import("./pages/test-d3/react-d3-test"));
const TestLineChart = lazy(() => import("./pages/sandbox/test_linechart"));
const TestMap = lazy(() => import("./pages/sandbox/test_map"));

function App() {
  return (
    <div id={"main"}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="/sandbox/test-map" element={<TestMap />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}
export default App;
