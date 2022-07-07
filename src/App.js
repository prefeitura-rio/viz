import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import TripsMap from "./pages/especial-sppo/tripsmap";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/especial-sppo" element={<TripsMap />} />
      </Routes>
    </Router>
  );
}
export default App;
