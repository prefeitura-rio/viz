// gh-pages route for deployment
// https://stackoverflow.com/questions/41325890/indexroute-not-showing-when-pushing-to-gh-pages

import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import TripsMap from "./pages/especial-sppo/tripsmap";
import Scrollytelling from "./pages/especial-sppo/scrollytelling";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/especial-sppo/trips" element={<TripsMap />} />
        <Route path="/especial-sppo/scroll" element={<Scrollytelling />} />
      </Routes>
    </Router>
  );
}
export default App;
