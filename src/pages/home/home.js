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
          <Link to="/especial-sppo/scroll"> Especial SPPO | Scroll </Link>
        </li>
      </lu>
    </div>
  );
}
