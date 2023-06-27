import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <lu>
        <li>
          <Link to="/painel-investimentos">Painel | Investimentos</Link>
        </li>
        <li>
          <Link to="/enchentes">Especial | Enchentes</Link>
        </li>
        <li>
          <Link to="/obras">Especial | Obras</Link>
        </li>
        <li>
          <Link to="/obras-teste">Especial | Obras Teste</Link>
        </li>
        <li>
          <Link to="/alagamento-passado-comando">
            Painel Alagamento Passado Comando
          </Link>
        </li>
        <li>
          <Link to="/alagamento-recente-comando">
            Painel Alagamento Recente Comando
          </Link>
        </li>
        <li>
          <Link to="/chuva">Painel Chuvas</Link>
        </li>
        <li>
          <Link to="/chuva-passado-pluviometro-alertario">
            Painel Chuvas Passado Alertario
          </Link>
        </li>
        <li>
          <Link to="/chuva-recente-pluviometro-alertario">
            Painel Chuvas Recente Alertario
          </Link>
        </li>
        <li>
          <Link to="/chuva-passado-radar-inea">
            Painel Chuvas Passado Radar
          </Link>
        </li>
        <li>
          <Link to="/chuva-recente-radar-inea">
            Painel Chuvas Recente Radar
          </Link>
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
