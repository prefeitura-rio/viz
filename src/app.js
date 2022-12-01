// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Loading } from "./components/loading/loading";
import { LoadingSubsidioSPPO } from "./pages/subsidio-sppo/loading";

import style, { createGlobalStyle } from "styled-components";
import mapboxCss from "mapbox-gl/dist/mapbox-gl.css";
import "./tailwind.css";

const Home = lazy(() => import("./pages/home/home"));
const StorySample = lazy(() => import("./pages/sandbox/sample"));
const SubsidioSPPO = lazy(() => import("./pages/subsidio-sppo/story"));
const Interactive = lazy(() => import("./pages/subsidio-sppo/interactive"));

const TestLineChart = lazy(() => import("./pages/sandbox/test_linechart"));
const TestMap = lazy(() => import("./pages/sandbox/test_map"));
const DemolicoesSEOP = lazy(() => import("./pages/demolicoes-seop/story"));
const CepSEOP = lazy(() => import("./pages/seop-cep/story"));

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  .mapboxgl-control-container {
    display: none !important;
  } 
`;

DemolicoesSEOP;
CepSEOP;
function App() {
  return (
    <div id={"main"}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/especial-seop/demolicoes"
              element={<DemolicoesSEOP />}
            ></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/especial-seop/cep" element={<CepSEOP />}></Route>
          </Routes>
        </Suspense>
        <Suspense fallback={<LoadingSubsidioSPPO />}>
          <Routes>
            <Route path="/especial-sppo/subsidio" element={<SubsidioSPPO />} />
          </Routes>
        </Suspense>
        <Suspense fallback={<></>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sandbox/sample" element={<StorySample />} />
            <Route
              path="/especial-sppo/interactive"
              element={<Interactive />}
            ></Route>
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
