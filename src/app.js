// gh-pages route for deployment
// https://stackoverflow.com/questions/40776651/can-i-create-routes-with-react-router-for-a-github-pages-site

import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import TripsMap from "./pages/especial-sppo/tripsmap";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} />
        <Route path={process.env.PUBLIC_URL + "/especial-sppo"} element={<TripsMap />} />
      </Routes>
    </Router>
  );
}
export default App;
