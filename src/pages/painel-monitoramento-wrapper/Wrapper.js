import React, { useEffect, useRef, useState } from 'react';
import PainelAlagamentoRecenteComando from '../painel-alagamento-recente-comando/story';
import PainelChuvaRecentePluviometroAlertario from '../painel-chuva-recente-pluviometro-alertario/story';
import "./ControlPanel.css";
import DropDown from './Dropdown';

function PainelMonitoramentoWrapper() {

  // Para lidar com a API fora do ar
  const [error, setError] = useState(false);

  //
  const [precip_acumulada_ultimos_t_min, set_precip_acumulada_ultimos_t_min] = useState(15);

  //1° dropdown = opções de dados
  const [data, setData] = useState();
  const [dropDownDataOption, setDropDownDataOption] = useState(1);
  const handleChangeData = (event) => {
    setDropDownDataOption(event.target.value);
    updateData();
  };

  //2° dropdown = opções de tempo
  const [update, setUpdate] = useState();
  const [dropDownLastUpdateOption, setDropDownLastUpdateOption] = useState(1);
  const handleChangeUpdate = (event) => {
    setDropDownLastUpdateOption(event.target.value);
  };

  useEffect(() => {
    updateData();
  }, [dropDownDataOption, dropDownLastUpdateOption]);

  const updateData = async () => {
    try {
      let apiUrlData;
      let apiUrlLastUpdate;
      console.log("dropDownDataOption: ", dropDownDataOption);
      console.log("dropDownLastUpdateOption: ", dropDownLastUpdateOption);
      
      if (dropDownDataOption === 1 && dropDownLastUpdateOption === 1) {
        apiUrlData = "https://api.dados.rio/v2/clima_alagamento/alagamento_15min/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_alagamento/ultima_atualizacao_alagamento_15min/";
      }
      else if (dropDownDataOption === 1 && dropDownLastUpdateOption !== 1) {
        apiUrlData = "https://api.dados.rio/v2/clima_alagamento/alagamento_15min/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_alagamento/ultima_atualizacao_alagamento_15min/";
        setDropDownLastUpdateOption(1);
      }

      else if (dropDownDataOption === 2 && dropDownLastUpdateOption === 1) {
        apiUrlData = "https://api.dados.rio/v2/clima_radar/precipitacao_15min/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_radar/ultima_atualizacao_precipitacao_15min/";
        set_precip_acumulada_ultimos_t_min(15);
      }
      else if (dropDownDataOption === 2 && dropDownLastUpdateOption === 2) {
        apiUrlData = "https://api.dados.rio/v2/clima_pluviometro/precipitacao_30min/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_pluviometro/ultima_atualizacao_precipitacao_30min/";
        set_precip_acumulada_ultimos_t_min(30);
      }
      else if (dropDownDataOption === 2 && dropDownLastUpdateOption === 3) {
        apiUrlData = "https://api.dados.rio/v2/clima_pluviometro/precipitacao_60min/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_pluviometro/ultima_atualizacao_precipitacao_60min/";
        set_precip_acumulada_ultimos_t_min(60);
      }
      else if (dropDownDataOption === 2 && dropDownLastUpdateOption === 4) {
        apiUrlData = "https://api.dados.rio/v2/clima_pluviometro/precipitacao_120min/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_pluviometro/ultima_atualizacao_precipitacao_120min/";
        set_precip_acumulada_ultimos_t_min(120);
      }
      else if (dropDownDataOption === 2 && dropDownLastUpdateOption === 5) {
        apiUrlData = "https://api.dados.rio/v2/clima_pluviometro/precipitacao_3h/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_pluviometro/ultima_atualizacao_precipitacao_3h/";
        set_precip_acumulada_ultimos_t_min(180);
      }
      else if (dropDownDataOption === 2 && dropDownLastUpdateOption === 6) {
        apiUrlData = "https://api.dados.rio/v2/clima_pluviometro/precipitacao_6h/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_pluviometro/ultima_atualizacao_precipitacao_6h/";
        set_precip_acumulada_ultimos_t_min(360);

      }
      else if (dropDownDataOption === 2 && dropDownLastUpdateOption === 7) {
        apiUrlData = "https://api.dados.rio/v2/clima_pluviometro/precipitacao_12h/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_pluviometro/ultima_atualizacao_precipitacao_12h/";
        set_precip_acumulada_ultimos_t_min(720);

      }
      else if (dropDownDataOption === 2 && dropDownLastUpdateOption === 8) {
        apiUrlData = "https://api.dados.rio/v2/clima_pluviometro/precipitacao_24h/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_pluviometro/ultima_atualizacao_precipitacao_24h/";
        set_precip_acumulada_ultimos_t_min(1440);

      }
      else if (dropDownDataOption === 2 && dropDownLastUpdateOption === 9) {
        apiUrlData = "https://api.dados.rio/v2/clima_pluviometro/precipitacao_96h/";
        apiUrlLastUpdate = "https://api.dados.rio/v2/clima_pluviometro/ultima_atualizacao_precipitacao_96h/";
        set_precip_acumulada_ultimos_t_min(5760);

      }

      // Com Promise.all as chamadas de API são feitas em paralelo.
      // Isso define os estados  após ambas as respostas serem recebidas. 
      // Garante q os estados sejam atualizados simultaneamente.
      const [dataResponse, updateResponse] = await Promise.all([
        fetch(apiUrlData).then(res => res.json()),
        fetch(apiUrlLastUpdate).then(res => res.json())
      ]);

      // Atualiza os estados ao mesmo tempo
      setData(dataResponse);
      setUpdate(updateResponse);
   
      // Deu bom ;)
      setError(false);

    } catch (error) {
      // Deu ruim ;(
      setError(true);
    }

  };

  // const ref = useRef(null);
  // useEffect(() => {
  //   ref.current = setInterval(updateData, 1 * 60 * 1000); // every minute
  //   updateData();
  //   return () => {
  //     clearInterval(ref.current);
  //   };
  // }, []);

  const intervalRef = useRef(null);

  useEffect(() => {
    // Configura o intervalo
    intervalRef.current = setInterval(() => {
      updateData(dropDownDataOption, dropDownLastUpdateOption);
    }, 60000); // 60000 ms = 1 minuto

    // Chama updateData inicialmente
    updateData(dropDownDataOption, dropDownLastUpdateOption);

    // Função de limpeza
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [dropDownDataOption, dropDownLastUpdateOption]); // Dependências do useEffect

  
  return (
    <>
      {dropDownDataOption == 1 ? <PainelAlagamentoRecenteComando data={data} update={update} /> : <PainelChuvaRecentePluviometroAlertario precip_acumulada_ultimos_t_min={precip_acumulada_ultimos_t_min} data={data} update={update} />}

      {error ? (
       <div style={{
        position: 'fixed', // Fixa a div em toda a tela
        top: 0, // Inicia no topo
        left: 0, // Inicia à esquerda
        width: '100vw', // Largura de 100% da viewport
        height: '100vh', // Altura de 100% da viewport
        backgroundColor: 'black', // Cor de fundo preta com 50% de opacidade
        opacity: 0.8,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2em',
      }}>
        <span style={{
        maxWidth: "80vw",
        textAlign: "center",
        }}>
        Enfrentamos interrupções técnicas.<br></br> Estamos atuando para restaurar o serviço completo em breve. <br></br><br></br>Agradecemos sua compreensão.
        </span>
      </div> 
      ) : (
      <div className="dropdown" style={{ display: 'flex', justifyContent: 'center' }} >
        <DropDown
          value={dropDownDataOption}
          handleChange={handleChangeData}
          items={[
            { key: "Alagado agora", value: 1 },
            { key: "Chovendo agora", value: 2 }
          ]}
        />
        <span style={{ paddingRight: "20px" }}></span>
        <DropDown
          dropDownValue={dropDownDataOption}
          data={dropDownDataOption}
          value={dropDownLastUpdateOption}
          handleChange={handleChangeUpdate}
          items={[
            { key: "Últimos 15 minutos", value: 1, disabled: () => false },
            { key: "Últimos 30 minutos", value: 2, disabled: (firstDropdownValue) => firstDropdownValue === 1 },
            { key: "Últimos 60 minutos", value: 3, disabled: (firstDropdownValue) => firstDropdownValue === 1 },
            { key: "Últimos 120 minutos", value: 4, disabled: (firstDropdownValue) => firstDropdownValue === 1 },
            { key: "Últimas 3 horas", value: 5, disabled: (firstDropdownValue) => firstDropdownValue === 1 },
            { key: "Últimas 6 horas", value: 6, disabled: (firstDropdownValue) => firstDropdownValue === 1 },
            { key: "Últimas 12 horas", value: 7, disabled: (firstDropdownValue) => firstDropdownValue === 1 },
            { key: "Últimas 24 horas", value: 8, disabled: (firstDropdownValue) => firstDropdownValue === 1 },
            { key: "Últimas 96 horas", value: 9, disabled: (firstDropdownValue) => firstDropdownValue === 1 },
          ]}
        />
      </div>
      )}
    </>
  );
}
export default PainelMonitoramentoWrapper;