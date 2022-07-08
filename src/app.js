// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import TripsMap from "./pages/especial-sppo/tripsmap";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/especial-sppo/trips" element={<TripsMap />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
