import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";

// IMAGENS
import logo1 from "../images/logo1.png";
import seop1 from "../images/seop1.png";
import seop2 from "../images/seop2.png";
import seop3 from "../images/seop3.png";
import seop4 from "../images/seop4.png";
import grafico from "../images/grafico.png";
import legenda from "../images/legenda.png";
import logoed from "../images/logoed.png";

// TODO: REMOVE
import LineChart from "../../../components/charts/line_chart";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Capa(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.CapaDiv id={props.id} ref={props.chapRef}>
      <img src={logo1} className="absolute top-3 w-24 mt-[2vh]  lg:w-32"></img>
      <styles.Title>A Serviço de Todo Carioca</styles.Title>
      <styles.Subtitle>Pra quem Mais Precisa</styles.Subtitle>
      <div>
        <styles.AuthorText>
          Desenvolvido pela equipe de visualização de dados do{" "}
          <a
            className="font-bold underline"
            href="https://www.dados.rio/"
            target="_blank"
            rel="noreferrer"
          >
            Escritório de Dados
          </a>
        </styles.AuthorText>
      </div>
    </styles.CapaDiv>
  );
}

export function Intro(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      {/* <styles.IntroTitle id={"intro"}>Como tudo começou</styles.IntroTitle> */}
      <div className="max-w-[80%]">
        {" "}
        <styles.IntroText>
        Após longos 4 anos de descaso, o Rio de Janeiro finalmente está recebendo a atenção que ele merece. Mas calma, não estamos falando daquele Rio distante que você não frequenta ou nem conhece. 
        <br /><br />Estamos falando do <styles.TextHighlightBold>seu Rio.</styles.TextHighlightBold>
        <br /><br />
        Nesta visualização mostraremos como a Prefeitura está levando grandes obras de infraestrutura para as Zona Oeste e Zona Norte da cidade, garantindo a dignidade e qualidade de vida aos cariocas.

        </styles.IntroText>
      </div>
    </styles.IntroDiv>
  );
}

export function MapaObras(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterMapDiv
      ref={props.chapRef}
      id={props.id}
    ></styles.ChapterMapDiv>
  );
}

export function TextoObras(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard1>
        São XX obras localizadas nas regiões da <styles.TextHighlightGreen>Zona Oeste</styles.TextHighlightGreen> e <styles.TextHighlightOrange>Zona Norte</styles.TextHighlightOrange> da
        cidade, um investimento de mais de R$ XXX bilhões. O nosso principal
        objetivo é direcionar essas melhorias para onde os cariocas mais
        necessitam: na <styles.TextHighlightBold>educação</styles.TextHighlightBold>,
        no <styles.TextHighlightBold>lazer</styles.TextHighlightBold>,
        na <styles.TextHighlightBold>saúde</styles.TextHighlightBold> e na criação de <styles.TextHighlightBold>oportunidades.</styles.TextHighlightBold>
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function MapaNorte(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterMapDiv
      ref={props.chapRef}
      id={props.id}
    ></styles.ChapterMapDiv>
  );
}

export function TextoNorte(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard1>
          A Prefeitura trabalha no seu Rio, na sua rua (não naquele outro Rio
          que você não frequenta ou nem conhece) pra levar dignidade e qualidade
          de vida aos cariocas que mais precisam, principalmente na Zona Oeste,
          maior região da cidade e onde fica o maior bairro do Brasil
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function MapaOeste(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterMapDiv
      ref={props.chapRef}
      id={props.id}
    ></styles.ChapterMapDiv>
  );
}

export function TextoOeste(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard1>
          A Prefeitura trabalha no seu Rio, na sua rua (não naquele outro Rio
          que você não frequenta ou nem conhece) pra levar dignidade e qualidade
          de vida aos cariocas que mais precisam, principalmente na Zona Oeste,
          maior região da cidade e onde fica o maior bairro do Brasil
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Oeste(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      {/* <styles.IntroTitle id={"zonaOesteTitle"}>
        Onde estão localizadas as construções irregulares
      </styles.IntroTitle> */}
      <styles.IntroText>
        Apesar de estarem presentes em todas as regiões da cidade, as{" "}
        <styles.Textyellow>
          construções irregulares têm maior incidência na Zona Oeste do
          município.
        </styles.Textyellow>{" "}
        De todas as demolições realizadas pela atual gestão da Prefeitura, mais
        de 70% estavam localizadas nesta região. Rio das Pedras, Muzema e
        Recreio dos Bandeirantes, por exemplo, são locais em que são registradas
        constantemente estas irregularidades.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Prejuizo(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.Grid>
          <styles.Grid1>
            <styles.BigNumber>R$</styles.BigNumber>
            <styles.BigNumber id="number">0</styles.BigNumber>
            <styles.BigNumber1>milhões</styles.BigNumber1>
          </styles.Grid1>
          <styles.TextCard>
            Graças as operações realizadas pela Prefeitura, essas organizações
            ilegais também sentiram no bolso.{" "}
            <styles.Textyellow>
              Desde 2021, as operações da secretaria acarretaram um prejuízo
              estimado em R$646 milhões para os cofres do crime organizado.
            </styles.Textyellow>{" "}
          </styles.TextCard>
        </styles.Grid>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Fim(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      <styles.IntroText>
        A marca de <styles.Textyellow>1.313 demolições,</styles.Textyellow> em
        apenas <styles.Textyellow>um ano e meio de gestão,</styles.Textyellow> é
        extremamente importante para a cidade.
        <br /> <br />
        Para continuar seu trabalho, a Prefeitura do Rio de Janeiro vem
        investindo na melhoria da capacidade de identificação de novas
        construções, por meio de denúncias recebidas, e também através do{" "}
        <styles.Textyellow>
          uso de novas tecnologias, como o uso de drones, fotografias aéreas
          (ortofotos) e imagens de satélites.
          <br /> <br />
        </styles.Textyellow>{" "}
        A Prefeitura, juntamente com as secretarias de Ordem Pública e Meio
        Ambiente da Cidade, seguem atentas, colocando abaixo aquelas estruturas
        erguidas irregularmente em nosso município. Continuaremos atuantes e
        firmes no combate à ocupação desordenada na cidade e no asfixiamento
        financeiro do crime organizado.
        <br /> <br />{" "}
        <styles.Textyellow>
          A preservação de vidas é, e sempre será, o nosso objetivo.
        </styles.Textyellow>{" "}
      </styles.IntroText>
    </styles.IntroDiv>
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
    <styles.FimDiv ref={props.chapRef} id={props.id}>
      <styles.FimTitle>Autores</styles.FimTitle>
      <styles.FimText>
        Caio Jacintho <br />
        Judite Cypreste
      </styles.FimText>
      <styles.FimTitle className="mt-[60px]">Agradecimentos</styles.FimTitle>
      <styles.FimText>
        Alfredo Junqueira <br />
        João Carabetta <br />
        Joice Nascimento <br />
        Pedro Lerner <br />
        Tiago Peregrino
      </styles.FimText>
      <styles.FimTitle className="mt-[60px]">Prefeito</styles.FimTitle>
      <styles.FimText>Eduardo Paes</styles.FimText>
      <a href={"https://www.dados.rio/"}>
        <img
          src={logo1}
          className="w-44 mt-[100px] lg:mt-[100px] lg:w-[8rem]"
        ></img>
      </a>
    </styles.FimDiv>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
