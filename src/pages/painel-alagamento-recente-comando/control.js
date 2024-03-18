import "../painel-monitoramento-wrapper/ControlPanel.css";
import React, { useEffect, useState } from "react";

import logo from "./images/logo.png";

export const ControlPanel = ({update}) => {

  useEffect(() => {
    console.log(update);
  }, [update]);
  
  return (
    <>
      <img src={logo} className="logo"></img>
    <div className="container">

      <div className="main_text">
        Onde está alagado agora?
      </div>

      <div className="secundary_text">
        Pontos de lâmina d'água, bolsão d'água e alagamento em ocorrência
      </div>

      <div className="fonte_cor_last_update">
        <div className="fonte_cor">
          <div id="fonte">Fonte</div>
          <div id="cor">Centro de Operações Rio</div>
        </div>
        <div className="last_update">
          <div id="last_update">Última atualização</div>
          <div id="last_update_info">{update}</div>
        </div>
      </div>
    </div>
    <div className="container_legenda">
        <div className="legenda">
          <div className="retangulo1"></div>
          <p>sem alagamento</p>
        </div>
        <div className="legenda">
          <div className="retangulo2"></div>
          <p>lâmina d'água </p>
          <p className="sub_legenda">pouco crítico</p>
        </div>
        <div className="legenda">
          <div className="retangulo3"></div>
          <p>bolsão d'água</p>
          <p className="sub_legenda">crítico</p>
        </div>
        <div className="legenda">
          <div className="retangulo4"></div>
          <p>alagamento</p>
          <p className="sub_legenda">extremamente crítico</p>
        </div>
      </div>
    </>
  );
}
