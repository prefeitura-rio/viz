import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";
import { isMobile } from "react-device-detect";

// IMAGENS
import logoed from "../images/logoed.png";
import capa from "../images/capa.gif";

// CAPA DOS CAPITULOS

import capa5 from "../images/capa5.png";

// DESKTOP IMAGENS
import cep1 from "../images/cep1.png";
import cep2 from "../images/cep2.png";
import cep3 from "../images/cep3.gif";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};

export function Capa(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.CapaDiv id={props.id} ref={props.chapRef}>
      {" "}
      <styles.CapaAutor>
        <img
          src={logoed}
          className="absolute mt-[20px] lg:mt-[60px] top-0 w-[100px] lg:w-[120px] h-auto lg:h-auto"
        ></img>{" "}
        <styles.Title>Por que o Rio de Janeiro alaga?</styles.Title>
        <styles.Subtitle>
          E como a prefeitura trabalha para que a chuva não castigue os cariocas
        </styles.Subtitle>
      </styles.CapaAutor>
    </styles.CapaDiv>
  );
}

export function CepImages(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"cep_image_1"}
        src={isMobile ? m_cep1 : cep1}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"cep_image_2"}
        src={isMobile ? m_cep2 : cep2}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"cep_image_3"}
        src={isMobile ? m_cep3 : cep3}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
  );
}

export function CepUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <>
      <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
        <styles.ContainerCard id={"text_cep_dois"}>
          <styles.AuthorText className="lg:w-[460px]">
            ▌ Desenvolvido pela Equipe de Visualização de Dados do{" "}
            <a
              className="font-bold underline"
              href="https://www.dados.rio/"
              target="_blank"
              rel="noreferrer"
            >
              Escritório de Dados
            </a>{" "}
            da Prefeitura da Cidade do Rio de Janeiro
          </styles.AuthorText>{" "}
          <styles.TextCard>Contexto histórico dos alagamentos</styles.TextCard>
          <styles.TextCard1>
            Uma análise feita com base nos dados de ocorrências registradas pelo
            COR desde 2018, mostra que a cidade já registrou pelo menos 3.937
            incidentes causados pelas chuvas. Destes, 428 foram alagamentos e
            enchentes.
            <br /> <br />
            Existem diversos motivos pelos quais uma cidade como a nossa sofre
            com estes problemas. Seja por eventos naturais ou pela ação humana,
            a função de uma boa gestão pública é de mitigar estes problemas e
            evitar que eles interrompam o funcionamento das atividades.
            <br /> <br />A seguir, explicaremos para você alguns dos principais
            motivos pelos quais a nossa cidade é um território propenso para que
            este tipo de incidente ocorra de forma tão frequente.
          </styles.TextCard1>
        </styles.ContainerCard>
      </styles.ChapterGenericDiv>
    </>
  );
}

export function CepDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1 id={"text_cep_dois"}>
        <styles.ContainerCard3>
          <styles.TextCard3>
            Com base em evidências científicas, uma série de ações específicas,
            de baixo custo e focalizadas, foram estrategicamente pensadas para
            contribuir para a redução dos fatores de risco mapeados e,
            consequentemente, para a redução do crime e da sensação de
            insegurança no local.
          </styles.TextCard3>
        </styles.ContainerCard3>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function CepTres(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard id={"text_cep_dois"}>
        <styles.TextCard>
          Vandalismo e roubo de lixeiras e bueiros
        </styles.TextCard>
        <styles.TextCard1>
          No Rio de Janeiro, mesmo com lixeiras espalhadas pelas ruas, ainda há
          pessoas que insistem em jogar lixo no chão. E se isso já é
          preocupante, imagine como seria se não houvesse onde descartar o lixo.
          <br /> <br />
          E é isso que ocorre quando há o furto e o vandalismo de lixeiras. De
          acordo com dados da Comlurb, em média, 500 a 600 unidades de
          papeleiras são furtadas ou danificadas mensalmente, totalizando cerca
          de 6.000 ao ano.
          <br /> <br />O prejuízo para os cofres públicos é significativo.
          Segundo a companhia, o valor chega a aproximadamente R$ 900 mil por
          ano, considerando o valor da última compra de lixeiras (R$149,77 a
          unidade). Só durante o Réveillon deste ano, a Comlurb constatou que
          cerca de 20% dos 1.000 contêineres de 240 litros disponibilizados na
          Praia de Copacabana foram furtados
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
  );
}

export function Creditos(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCreditos2>Créditos</styles.TextCreditos2>
        <styles.TextCreditos>Autores</styles.TextCreditos>
        <styles.TextCreditos1>
          Caio Jacintho <br />
          Diego Oliveira <br />
          Judite Cypreste <br />
        </styles.TextCreditos1>
        <styles.TextCreditos className=" lg:mt-[40px] mt-[60px] ">
          Agradecimentos
        </styles.TextCreditos>
        <styles.TextCreditos1>
          Alexandre Reis <br />
          Ana Carla Badaro <br />
          Ana Rebouças <br />
          Flavio Lopes <br />
          Gabriel Gazola Milan
          <br />
          João Carabetta <br />
          Wanderson José dos Santos <br />
        </styles.TextCreditos1>
        <styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
          Parceria
        </styles.TextCreditos>
        <styles.TextCreditos1>
          Centro de Operações Rio <br />
          Companhia Municipal de Limpeza Urbana <br />
          Fundação Instituto das Águas do Município do Rio de Janeiro <br />
          Secretaria Municipal de Conservação <br />
        </styles.TextCreditos1>
        <styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
          Prefeito
        </styles.TextCreditos>
        <styles.TextCreditos1>Eduardo Paes</styles.TextCreditos1>
        <img
          src={logoed}
          className="mt-[100px] w-[120px] h-auto lg:w-[120px] lg:h-auto"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}
