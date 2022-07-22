import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <lu>
        <li>
          <Link to="/"> Home </Link>
          <br />
        </li>
        <li>
          <Link to="/especial-sppo/trips"> Especial SPPO | Trips </Link>
          <br />
          <Link to="/especial-sppo/scrollmapbox">
            Especial SPPO | ScrollMapboxGL
          </Link>
        </li>
        <li>
          <Link to="/sandbox/test"> Sandbox | Test </Link>
          <br />
          <Link to="/stories/sample"> Stories | Sample </Link>
        </li>
        <li></li>
      </lu>
    </div>
  );
}
