import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <lu>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/stories/sample"> Scroll Map Engine | Sample </Link>
        </li>
        <li>
          <Link to="/especial-sppo/trips"> Especial SPPO | Trips </Link>
        </li>
        <li>
          <Link to="/especial-sppo/scroll"> Especial SPPO | Scroll </Link>
        </li>
        <li>
          <Link to="/especial-sppo/scrollmapbox">
            Especial SPPO | ScrollMapboxGL
          </Link>
        </li>
      </lu>
    </div>
  );
}
