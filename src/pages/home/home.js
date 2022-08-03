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
          <Link to="/especial-sppo/interactive">
            Especial SPPO | Interactive
          </Link>
        </li>

        <li>
          <Link to="/especial-seop/demolicoes">Especial SEOP | Demolicoes</Link>
        </li>

        <li>
          <Link to="/sandbox/test"> Sandbox | Test </Link>
        </li>
        <li>
          <Link to="/sandbox/sample"> Sandbox | Sample </Link>
        </li>
        <li>
          <Link to="/sandbox/d3"> Sandbox | Test D3 </Link>
        </li>
        <li>
          <Link to="/sandbox/d3-react"> Sandbox | Test D3 React </Link>
        </li>
        <li>
          <Link to="/sandbox/test-linechart"> Sandbox | Test Line Chart </Link>
        </li>
        <li>
          <Link to="/sandbox/test-map"> Sandbox | Test Map </Link>
        </li>
      </lu>
    </div>
  );
}
