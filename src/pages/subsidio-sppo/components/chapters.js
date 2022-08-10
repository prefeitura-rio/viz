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
          className="text-sm font-bold text-white lg:text-base"
          href="https://www.dados.rio/"
          target="_blank"
          rel="noreferrer"
        >
          Escritório de Dados{" "}
        </a>
        e{" "}
        <a
          className="text-sm font-bold text-white lg:text-base"
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
          className="text-sm font-bold text-white lg:text-base"
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
      <styles.IntroTitle id={"intro"}>Introdução</styles.IntroTitle>
      <styles.IntroText>
        Os cariocas sabem bem quais os problemas enfrentados todos os dias no
        transporte público da cidade do Rio de Janeiro. E é preciso reconhecer
        que o sistema por ônibus está ruim e precisa de ajuda. <br />
        <br />
        Uma série de fatores levou a este colapso, o que só resultou no
        sofrimento da população que depende do transporte público da cidade para
        se locomover. Por isso,{" "}
        <styles.TextOrange>
          a Prefeitura vai regularizar as linhas operantes,
        </styles.TextOrange>{" "}
        <styles.TextOrange>retomar as inoperantes</styles.TextOrange> e{" "}
        <styles.TextOrange>implementar serviços noturnos.</styles.TextOrange>
        <br />
        <br />
        Por meio de um acordo judicial, estabelecido entre a Prefeitura,
        consórcios e o Ministério Público, linhas de ônibus serão retomadas e
        criadas na capital fluminense. A partir de agora, o transporte público
        por ônibus será subsidiado pelo município. As empresas, além da tarifa
        de R$ 4,05, vão receber um valor adicional pelo serviço efetivamente
        prestado com base no quilômetro rodado. <br />
        <br />
        Nesta reportagem especial explicaremos como a Prefeitura fará isso.{" "}
        <br />
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Three(
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
          O restabelecimento das linhas será feito com prioridade nas áreas mais
          necessitadas. O bairro de <styles.TextRed>Sepetiba,</styles.TextRed>{" "}
          um dos mais afastados do centro da cidade, começa a ter as primeiras
          linhas reestabelecidas do sistema.
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Four(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          Podemos ver como exemplo as linhas{" "}
          <styles.TextOrange> 870</styles.TextOrange> e{" "}
          <styles.TextOrange1>871</styles.TextOrange1> que voltaram no início do
          mês de junho. Elas conectam o bairro com o BRT. O cronograma com as
          novas linhas e os novos horários de circulação será lançado em breve e
          poderá ser acompanhado pelas redes sociais da Prefeitura.
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Five(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          Os <styles.TextRed>bairros</styles.TextRed> em destaque já estão vendo
          suas <styles.TextOrange>linhas</styles.TextOrange> voltarem. Esses
          bairros são os que mais receberam novas linhas desde do início do
          acordo. Até o momento 43 linhas ja foram reestabelecidas ou
          incorporadas ao novo sistema de transporte.
        </styles.TextCard>
      </styles.ContainerCard>{" "}
    </styles.ChapterGenericDiv>
  );
}

export function Six(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          É possível comparar nesse mapa as{" "}
          <styles.TextOrange>novas linhas</styles.TextOrange> com o{" "}
          <styles.TextBlue>sistema de transporte atual.</styles.TextBlue> Vale
          lembrar que com o plano devidamente implementado - e isso não acontece
          do dia para a noite - vai permitir um transporte com qualidade e
          transparência para a população carioca.
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Seven(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv id={props.id}>
      <styles.IntroTitle id={"intro"}>O fim da Caixa Preta</styles.IntroTitle>
      <styles.IntroText>
        Em 2010, a Secretaria Municipal de Transportes do Rio de Janeiro licitou
        a prestação de serviço de transportes na cidade.{" "}
        <styles.TextOrange>
          Com isso, toda a responsabilidade pelo transporte por ônibus ficou com
          os consórcios.
        </styles.TextOrange>
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
        <styles.TextOrange>
          Uma verdadeira caixa-preta era formada com os dados de arrecadação e
          distribuição dos lucros da bilhetagem.
        </styles.TextOrange>
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

export function Eight(
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
