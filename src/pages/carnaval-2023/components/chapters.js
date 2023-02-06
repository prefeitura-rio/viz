import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";
import { isMobile } from "react-device-detect";

// IMAGENS
import logo1 from "../images/logo1.png";
import scroll from "../images/scroll.gif";

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
      <img
        src={logo1}
        className=" selection:bg-[#ef4444] selection:text-white lg:mt-[7%] mt-[32px] w-[280px] h-auto lg:w-[300px] lg:h-auto"
      ></img>{" "}
      <styles.CapaAutor>
        <styles.Title>
          SEU RIO
          <br />
          SUA RUA
        </styles.Title>
        <styles.Subtitle>
          O papel da Prefeitura na Segurança Pública. Entendendo o programa CEP
          na Prefeitura da Cidade do Rio de Janeiro.
        </styles.Subtitle>
        <styles.Scroll>
          {/* <styles.AuthorText>
            Desenvolvido por{" "}
            <a
              className="font-bold underline"
              href="https://www.dados.rio/"
              target="_blank"
              rel="noreferrer"
            >
              Escritório de Dados
            </a>{" "}
            <br />e{" "}
            <a
              className="font-bold underline"
              href="http://www.rio.rj.gov.br/web/seop"
              target="_blank"
              rel="noreferrer"
            >
              Secretaria Municipal de Ordem Pública
            </a>{" "}
          </styles.AuthorText>{" "} */}
          <img
            src={scroll}
            className="lg:mb-[16px] w-[10px] h-auto lg:w-[12px] lg:h-auto"
          ></img>{" "}
        </styles.Scroll>
      </styles.CapaAutor>
    </styles.CapaDiv>
  );
}

export function CepCapitulo(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.ContainerCard1>
          <styles.NewsTitle>
            Conjunto de Estratégias de Prevenção, o CEP
          </styles.NewsTitle>
          <styles.TextCard1>
            Entender a distribuição dos crimes na cidade e identificar locais
            historicamente vulneráveis permite traçar estratégias mais eficazes
            para melhorar a segurança da população carioca. Foi assim que a
            Prefeitura criou o Programa Conjunto de Estratégias de Prevenção
            (CEP) - Seu Rio, Sua Rua.
            <br /> <br />
            O projeto mapeia os fatores ambientais relevantes a serem
            considerados quando se pensa em estratégias de ações para reduzir o
            risco das ocorrências criminais. O foco sempre está apontado para
            regiões de alta concentração de delitos. A partir do mapeamento, a
            prefeitura passa a agir de forma integrada no ambiente.
            <br /> <br />
            Um dos locais selecionados como plano-piloto do projeto foi a região
            no entorno do Jardim do Méier, por concentrar uma série de fatores
            criminogênicos e situacionais passíveis de intervenção do Poder
            Público.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={capa5}
          className="w-auto h-[200px] mt-[40px] mr-[40px] lg:w-auto lg:h-[330px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
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
      <styles.ChapterGenericDiv10
        ref={props.chapRef}
        id={props.id}
      ></styles.ChapterGenericDiv10>
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
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"text_cep_dois"}>
        <styles.TextCard>
          Com base em evidências científicas, uma série de ações específicas, de
          baixo custo e focalizadas, foram estrategicamente pensadas para
          contribuir para a redução dos fatores de risco mapeados e,
          consequentemente, para a redução do crime e da sensação de insegurança
          no local.
          <br /> <br />
          Estratégias como aumentar a disponibilidade de árvores e espaços
          verdes, reduzir a presença de lixo e pichação, mudar o planejamento de
          habitação e aprimorar a iluminação pública podem, segundo
          especialistas, levar a reduções importantes no crime e na desordem.
          <br /> <br />A seguir, explicaremos como elas mudaram a vida dos
          moradores da região.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
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
    <styles.ChapterGenericDiv10
      ref={props.chapRef}
      id={props.id}
    ></styles.ChapterGenericDiv10>
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
    <styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.ContainerCardCreditos>
          <styles.NewsTitle1>Autores</styles.NewsTitle1>
          <styles.TextCard1>
            Caio Jacintho <br />
            Diego Oliveira <br />
            Judite Cypreste <br />
            Maria Eduarda Couto
          </styles.TextCard1>
          <styles.NewsTitle1 className=" lg:mt-[40px] mt-[60px] ">
            Agradecimentos
          </styles.NewsTitle1>
          <styles.TextCard1>
            Brenno Carnevale
            <br />
            Clara de Lernia <br />
            Izabel Rizzo <br />
            João Carabetta <br />
            Paulo Mac Culloch <br />
            Rodrigo Abreu
          </styles.TextCard1>
          <styles.NewsTitle1 className=" lg:mt-[40px] mt-[60px]">
            Parceria
          </styles.NewsTitle1>
          <styles.TextCard1>
            Escritório de Dados
            <br />
            Secretaria de Ordem Pública{" "}
          </styles.TextCard1>
          <styles.NewsTitle1 className=" lg:mt-[40px] mt-[60px]">
            Prefeito
          </styles.NewsTitle1>
          <styles.TextCard1>Eduardo Paes</styles.TextCard1>
        </styles.ContainerCardCreditos>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv4>
  );
}
