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
          <Link to="/especial-sppo/trips"> Especial SPPO | Trips </Link>
        </li>
        <li>
          <Link to="/especial-sppo/subsidio">Especial SPPO | Subsidio</Link>
        </li>
        <li>
          <Link to="/sandbox/test"> Sandbox | Test </Link>
        </li>
        <li>
          <Link to="/sandbox/test_map"> Sandbox | TestMap </Link>
        </li>
        <li>
          <Link to="/stories/sample"> Stories | Sample </Link>
        </li>
        <li></li>
      </lu>
    </div>
  );
}
