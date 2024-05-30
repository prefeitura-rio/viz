import "../painel-monitoramento-wrapper/ControlPanel.css";
import React, { useEffect, useState } from "react";

import logo from "./images/logo.png";

export const ControlPanel = ({update,precip_acumulada_ultimos_t_min}) => {

  useEffect(() => {
    console.log(update);
  }, [update]);
  
  return (
    <>
      <img src={logo} className="logo"></img>
    <div className="container">

      <div className="main_text">
      Onde está chovendo agora?
      </div>

      <div className="secundary_text">
      Precipitação acumulada {precip_acumulada_ultimos_t_min<=120?"dos últimos " + precip_acumulada_ultimos_t_min + " minutos" : "das últimas " + precip_acumulada_ultimos_t_min/60 + " horas"}
      </div>

      <div className="fonte_cor_last_update">
        <div className="fonte_cor">
          <div id="fonte">Fonte</div>
          <div id="cor">Alerta Rio</div>
        </div>
        <div className="last_update">
          <div id="last_update">Última atualização</div>
          <div id="last_update_info">{update}</div>
        </div>
      </div>
    </div>
    <div className="container_legenda_chuva">
        <div className="legenda">
          <div className="retangulo1"></div>
          <p>sem chuva</p>
          <p className="sub_legenda">0 mm</p>
        </div>
        <div className="legenda">
          <div className="retangulo2"></div>
          <p>chuva fraca</p>
          <p className="sub_legenda"> &lt;{(1.25*precip_acumulada_ultimos_t_min)/15}mm </p>
        </div>
        <div className="legenda">
          <div className="retangulo3"></div>
          <p>chuva moderada</p>
          <p className="sub_legenda">{(1.25*precip_acumulada_ultimos_t_min)/15} a {(6.25*precip_acumulada_ultimos_t_min)/15}mm</p>
        </div>
        <div className="legenda">
          <div className="retangulo4_chuva"></div>
          <p>chuva forte</p>
          <p className="sub_legenda">{(6.25*precip_acumulada_ultimos_t_min)/15} a {(12.25*precip_acumulada_ultimos_t_min)/15}mm</p>
        </div>
        <div className="legenda">
          <div className="retangulo5_chuva"></div>
          <p>chuva muito forte</p>
          <p className="sub_legenda">&gt;{(12.25*precip_acumulada_ultimos_t_min)/15}mm</p>
        </div>
      </div>
    </>
  );
}
