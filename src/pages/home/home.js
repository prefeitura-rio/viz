import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <lu>
        <li>
          <Link to="/chuva">Painel Chuvas</Link>
        </li>
        <li>
          <Link to="/especial-seop/demolicoes">Especial SEOP | Demolicoes</Link>
        </li>
        <li>
          <Link to="/especial-carnaval/2023">Especial Carnaval | 2023</Link>
        </li>
        <li>
          <Link to="/especial-seop/cep">Especial SEOP | CEP</Link>
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
          <Link to="/sandbox/sample"> Sandbox | Sample </Link>
        </li>
        <li>
          <Link to="/sandbox/video"> Sandbox | Video </Link>
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
