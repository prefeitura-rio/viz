import styled from "styled-components";
import logo1 from "../images/logo1.png";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// TODO: REMOVE
import LineChart from "./line.chart";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Capa(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.CapaDiv id={props.id} ref={props.ref}>
      <img src={logo1} className="h-16 mt-[2vh]  lg:h-16"></img>
      <styles.Title>
        Um ponto de virada na história do transporte municipal do Rio de Janeiro
      </styles.Title>
      <styles.AuthorText>
        Desenvolvido por{" "}
        <a
          className="underline decoration-1 underline-offset-1"
          href="https://www.dados.rio/"
          target="_blank"
          rel="noreferrer"
        >
          Escritório de Dados{" "}
        </a>
        e{" "}
        <a
          className="underline decoration-1 underline-offset-1"
          href="http://www.rio.rj.gov.br/web/smtr"
          target="_blank"
          rel="noreferrer"
        >
          Secretaria Municipal de Transportes
        </a>
      </styles.AuthorText>
      <styles.Interactive>
        Para navegar pelo mapa{" "}
        <a
          className="underline decoration-1 underline-offset-1 font-bold"
          href="https://viz.dados.rio/#/especial-sppo/interactive"
          target="_blank"
          rel="noreferrer"
        >
          clique aqui
        </a>
      </styles.Interactive>
    </styles.CapaDiv>
  );
}

export function Intro(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv id={props.id}>
      {/* <styles.IntroTitle id={"intro"}>Introdução</styles.IntroTitle> */}
      <styles.IntroText>
      Desde o dia 1º de junho deste ano, quando o acordo entre Prefeitura, Ministério Público e empresas de ônibus entrou em vigor, os cariocas puderam ver, assim como no mapa acima, a volta de 40 linhas de ônibus nas ruas da capital fluminense.
      <br />
      <br />
      Isso só foi possível graças a um acordo judicial, estabelecido entre a Prefeitura, consórcios de ônibus e o Ministério Público. Graças a ele, a cidade terá a regularização das linhas operantes, a retomada das inoperantes e a implementação dos serviços noturnos.
      <br />
      <br />
      Isto, sem o aumento da passagem de R$ 4,05, que será subsidiada pelo município com base no serviço e quilômetro rodado. 
      <br />
      <br />
      Os cariocas sabem bem quais são os problemas cotidianos enfrentados no transporte público da cidade do Rio de Janeiro. E é por isso que a Prefeitura está trabalhando para melhorar a mobilidade na nossa cidade maravilhosa!
      <br />
      <br />
      Nesta reportagem especial, feita pelo Escritório de Dados, explicaremos como já estamos fazendo isso.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function SepetibaBairro(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard>
        <styles.TextCard>
        Desde os anos 60, o sistema de transporte por ônibus na cidade do Rio de Janeiro funcionava por meio de permissões dadas às empresas. Entretanto, sem contratos ou licitações, o processo era feito sem muito controle público ou monitoramento do serviço pela cidade.
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function SepetibaLinhas(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
        Foi em 2010, que a Secretaria Municipal de Transportes do Rio de Janeiro realizou a primeira licitação para a prestação do serviço na cidade. A partir de então, os consórcios selecionados passaram a operar as linhas de ônibus do município, em regime de concessão. 
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function LinhasBairros(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
        As empresas vencedoras tinham então a responsabilidade pelo transporte, ficando não só responsáveis pela a operação de todas as linhas municipais, como também da fonte de renda do sistema, o Bilhete Único Carioca (BUC).
        </styles.TextCard>
      </styles.ContainerCard>{" "}
    </styles.ChapterGenericDiv>
  );
}

export function SistemaAtual(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
        Após anos em vigor, a concessão, entretanto, apresentou problemas: a má gestão dos concessionários com o serviço oferecido e uma grande crise reputacional do sistema, envolvida em diversos escândalos. 
        <br />
        <br />
        Além disso, havia a falta de transparência da arrecadação do sistema de bilhete único. Uma verdadeira caixa-preta era formada com os dados de arrecadação e distribuição dos lucros adquiridos pelas empresas. 
        <br />
        <br />
        Os valores não tinham publicidade, mesmo com os recorrentes pedidos da Prefeitura para ter acesso às quantias ganhas pelos concessionários nas operações
 </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function CxIntro(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv id={props.id}>
      {/* <styles.IntroTitle id={"intro"}>O fim da Caixa Preta</styles.IntroTitle> */}
      <styles.IntroText>
        Em 2010, a Secretaria Municipal de Transportes do Rio de Janeiro licitou
        a prestação de serviço de transportes na cidade.{" "}
        Com isso, toda a responsabilidade pelo transporte por ônibus ficou com
        os consórcios.
        Isso incluía não só a operação de todas as linhas municipais, como
        também a fonte de renda do sistema, o Bilhete Único Carioca (BUC).
        <br />
        <br />
        Após anos em vigor, a concessão, entretanto, apresentou problemas: a má
        gestão dos concessionários com o serviço oferecido e uma grande crise
        reputacional do sistema, envolvida em diversos escândalos.
        <br />
        <br />A falta de transparência da bilhetagem do sistema de bilhete único
        também era um problema.{" "}
        Uma verdadeira caixa-preta era formada com os dados de arrecadação e
        distribuição dos lucros da bilhetagem.
        <br />
        <br />
        Com um transporte público sofrido, de ônibus depredados e superlotados,
        somou-se o fator pandemia e inflação. Historicamente, o número de
        passageiros já vinha diminuindo. Com a chegada da Covid-19, a situação
        se agravou.
        <br />
        <br />
        Além disso, o preço do diesel apresentou um aumento de quase 131% em
        dois anos, segundo dados da Agência Nacional do Petróleo, Gás Natural e
        Biocombustíveis (ANP). O preço de peças para reposição nos veículos
        também sofreu inflação, com a desvalorização do real frente a moeda
        americana. Com isso, as empresas responsáveis pelo transporte optaram
        por diminuir a frota em lugares que sem muitos passageiros, chegando a
        cancelar a circulação de algumas linhas.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function CxGrafico1(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);
  return (
    <>
      <styles.ChapterLineChart id={props.id}>
        <LineChart
          id="line-chart"
          canvasId="line-chart"
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 16 },
            { x: 5, y: 25 },
            { x: 6, y: 36 },
            { x: 7, y: 49 },
            { x: 8, y: 64 },
            { x: 9, y: 81 },
            { x: 10, y: 100 },
            { x: 11, y: 121 },
            { x: 12, y: 144 },
            { x: 13, y: 169 },
            { x: 14, y: 196 },
            { x: 15, y: 225 },
            { x: 16, y: 256 },
            { x: 17, y: 289 },
            { x: 18, y: 324 },
            { x: 19, y: 361 },
            { x: 20, y: 400 },
            { x: 21, y: 441 },
            { x: 22, y: 484 },
            { x: 23, y: 529 },
            { x: 24, y: 576 },
            { x: 25, y: 625 },
          ]}
          style={{
            margin: {
              top: 20,
              right: 20,
              bottom: 50,
              left: 70,
            },
            width: 960,
            height: 500,
            lineColor: "steelblue",
            lineWidth: 1.5,
            axisColor: "white",
            axisFontSize: "15px",
          }}
        />
      </styles.ChapterLineChart>
    </>
  );
}

export function Creditos(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.CreditosDiv id={props.id}>
      <styles.IntroTitle id={"intro"}>
        Autores
        <br />
        <br />
        <br />
        <br />
        Agradecimentos
        <br />
        <br />
        <br />
        <br />
        Prefeito
      </styles.IntroTitle>
      <styles.IntroText>
        Caio Jacintho
        <br />
        Diego Oliveira
        <br />
        Gabriel Gazola
        <br />
        João Carabetta
        <br />
        <br />
        <br />
        Fernanda Scovino
        <br />
        Guilherme Braga
        <br />
        Bernardo Serra
        <br />
        Lauro Silvestre
        <br />
        <br />
        <br />
        Eduardo Paes
      </styles.IntroText>
    </styles.CreditosDiv>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
