import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";

// IMAGENS
import logo from "../images/logo.png";
import riodaspedras from "../images/riodaspedras.png";
import muzema from "../images/muzema.png";
import salgueiro from "../images/salgueiro.png";
import seop1 from "../images/seop1.png";
import seop2 from "../images/seop2.png";
import grafico from "../images/grafico.png";

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
      <img src={logo} className="w-24 mt-[2vh]  lg:w-55"></img>
      <styles.Title>1.000 demolições de construções irregulares</styles.Title>
      <styles.AuthorText>
        Desenvolvido por <br />
        <a
          className="font-bold"
          href="https://www.dados.rio/"
          target="_blank"
          rel="noreferrer"
        >
          Escritório de Dados
        </a>{" "}
        <br />
        <a
          className="font-bold"
          href="http://www.rio.rj.gov.br/web/seop"
          target="_blank"
          rel="noreferrer"
        >
          Secretaria Municipal de Ordem Pública
        </a>
        <br />
        <a
          className="font-bold"
          href="http://www.rio.rj.gov.br/web/smac"
          target="_blank"
          rel="noreferrer"
        >
          Secretaria Municipal de Meio Ambiente e Cidade
        </a>
      </styles.AuthorText>
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
      <styles.IntroTitle id={"intro"}>Como tudo começou</styles.IntroTitle>
      <styles.IntroText>
        A proliferação de construções irregulares é um problema que tomou conta
        da cidade do Rio há algumas décadas. Em áreas sob influência do crime
        organizado a preocupação é ainda maior. <br /> <br />
        Estudos apontam que{" "}
        <styles.TextBlue>
          a atividade imobiliária se tornou uma das principais fontes
          financeiras de alguns grupos criminosos.
        </styles.TextBlue>{" "}
        Essas construções são realizadas sem autorização da Prefeitura, em áreas
        públicas, e erguidas sem nenhum acompanhamento técnico. <br /> <br />{" "}
        Por trás de cada prédio construído ilegalmente, e sem fiscalização, há
        inúmeras famílias que vivendo sob o risco de perderem, a qualquer
        momento, suas casas, sua história e também suas vidas.
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
            <styles.BigNumber id="number">0</styles.BigNumber>
            <styles.BigNumber1>milhões</styles.BigNumber1>
          </styles.Grid1>
          <styles.TextCard>
            Por trás de tanta construção ilegal em área sob influência do crime
            organizado, há um grande interesse econômico. Estudos apontam que{" "}
            <styles.TextBlue>
              os grupos criminais, principalmente as milícias, obtiveram um
              aumento de seus ganhos através do mercado imobiliário,
            </styles.TextBlue>{" "}
            a partir da oferta e da proteção para execução de construções
            irregulares (HIRATA, 2021).
            <br /> <br />
            E, muito também, para atingi-los no bolso é que a SEOP tem realizado
            suas operações com foco nessas regiões. Prova disso é que{" "}
            <styles.TextBlue>
              desde 2021 as operações da secretaria acarretaram em um prejuízo
              estimado em R$ xxx milhões para os cofres do crime organizado.
            </styles.TextBlue>
          </styles.TextCard>
        </styles.Grid>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Grafico(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        {/* <iframe
          title="1000 demolições desde o início da gestão"
          aria-label="Gráfico de coluna"
          id="datawrapper-chart-RNXfM"
          src="https://datawrapper.dwcdn.net/RNXfM/1/"
          scrolling="no"
          frameborder="0"
          style="width: 0; min-width: 100% !important; border: none;"
          height="416"
        ></iframe> */}
        {/* <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script> */}
        <styles.NewsImage src={grafico}></styles.NewsImage>
        <styles.TextCard>
          Analisando as prioridades da Secretaria de Ordem Pública e da própria
          Prefeitura, dá para notar que o tema construções irregulares é tratado
          com a <styles.TextBlue>absoluta relevância</styles.TextBlue> que o
          assunto merece. Se olharmos historicamente, porém, nem sempre a
          análise foi essa. Na gestão anterior foram feitas 359 ao longo de
          quatro anos. Desde que a atual gestão assumiu{" "}
          <styles.TextBlue>
            1.000 demolições em apenas um ano e meio.
          </styles.TextBlue>
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Exemplo1(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        {/* <styles.NewsImage src={riodaspedras}></styles.NewsImage> */}
        {/* <styles.NewsTitle>
          <a
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#ffffff",
            }}
            href="https://veja.abril.com.br/brasil/predio-desaba-em-comunidade-dominada-por-milicianos-no-rio-de-janeiro/"
            target="_blank"
            rel="noreferrer"
          >
            Prédio desaba em comunidade dominada por milicianos no Rio de
            Janeiro
          </a>
        </styles.NewsTitle> */}
        <styles.TextCard1>
          Maitê Gomes Abreu, de 2 anos, e seu pai, Natan Gomes, de 30 anos,
          foram encontrados mortos após nove horas de buscas entre os escombros.
          Pai e sua filha foram vítimas do desabamento de um prédio de quatro
          andares em Rio das Pedras, na Zona Oeste em junho do ano passado. O
          imóvel era irregular.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Exemplo2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        {/* <styles.NewsImage src={muzema}></styles.NewsImage> */}
        {/* <styles.NewsTitle>
          <a
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#ffffff",
            }}
            href="https://g1.globo.com/rj/rio-de-janeiro/noticia/2019/04/22/morre-a-24a-vitima-do-desabamento-na-muzema.ghtml"
            target="_blank"
            rel="noreferrer"
          >
            Morre a 24ª vítima do desabamento na Muzema
          </a>
        </styles.NewsTitle> */}
        <styles.TextCard1>
          Adilma Rodrigues, de 35 anos, e seu marido, Cláudio Rodrigues, 40
          anos, morreram após o desabamento de dois prédios, construídos
          irregularmente na região de Muzema, no Itanhangá, Zona Oeste. Ao todo,
          24 pessoas morreram no desastre, que ocorreu em abril de 2019.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Exemplo3(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        {/* <styles.NewsImage src={salgueiro}></styles.NewsImage> */}
        {/* <styles.NewsTitle>
          <a
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#ffffff",
            }}
            href="https://www1.folha.uol.com.br/cotidiano/2021/11/predio-de-4-andares-desaba-no-rio-e-deixa-um-morto-e-tres-feridos.shtml"
            target="_blank"
            rel="noreferrer"
          >
            Prédio de 4 andares desaba no Rio e deixa um morto e três feridos
          </a>
        </styles.NewsTitle> */}
        <styles.TextCard1>
          Um prédio de quatro andares desabou no Morro do Salgueiro, na zona
          norte do Rio de Janeiro, nesta quarta-feira (17) e deixou um morto e
          três feridos, de acordo com o Corpo de Bombeiros
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Seop1(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        {/* <styles.NewsImage src={seop1}></styles.NewsImage> */}
        {/* <styles.NewsTitle>
          <a
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#ffffff",
            }}
            href="https://g1.globo.com/rj/rio-de-janeiro/bom-dia-rio/video/construcao-irregular-e-demolida-na-muzema-10771066.ghtml"
            target="_blank"
            rel="noreferrer"
          >
            Construção irregular é demolida na Muzema
          </a>
        </styles.NewsTitle> */}
        <styles.TextCard1>
          Construção irregular é demolida na Muzema
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Seop2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        {/* <styles.NewsImage src={seop2}></styles.NewsImage> */}
        <styles.TextCard1>
          Prédio irregular é demolido pela prefeitura, no Recreio dos
          Bandeirantes, na Zona Oeste
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Seop3(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        {/* <styles.NewsImage src={seop2}></styles.NewsImage> */}
        <styles.TextCard1>
          Força-tarefa começa demolição de prédio irregular no Recreio dos
          Bandeirantes, Zona Oeste do Rio
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Seop4(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        {/* <styles.NewsImage src={seop2}></styles.NewsImage> */}
        <styles.TextCard1>
          Prédio da milícia de Rio das Pedras é demolido em ação do MP com a
          Prefeitura
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Zoom(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Infelizmente, nos últimos anos, casos recorrentes de desabamentos de
          prédios e casas foram registrados na cidade. Famílias inteiras
          perderam seus lares e suas vidas.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Mapa(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          É inegável que o marco de 1.000 demolições, em apenas um ano e meio de
          gestão, é extremamente importante. Mostra que estamos atuantes e que
          seguiremos firmes no combate a ocupação desordenada da cidade, na
          proteção de vidas e em asfixiar financeiramente o crime organizado.
          Isso tudo só reforça a convicção que o trabalho precisa seguir .
        </styles.TextCard1>
      </styles.ContainerCard1>
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
      <styles.IntroTitle id={"fimTitle"}>Fim</styles.IntroTitle>
      <styles.IntroText>
        É inegável que o marco de 1.000 demolições, em apenas um ano e meio de
        gestão, é extremamente importante. Mostra que estamos atuantes e que
        seguiremos firmes no combate a ocupação desordenada da cidade, na
        proteção de vidas e em asfixiar financeiramente o crime organizado. Isso
        tudo só reforça a convicção que o trabalho precisa seguir .{" "}
        <styles.TextBlue>
          Por isso, a Secretaria de Ordem Pública permanecerá atenta, colocando
          abaixo aquelas estruturas erguidas irregularmente.
        </styles.TextBlue>{" "}
        Além disso, a secretaria entende a importância de ter uma ação cada vez
        mais estratégica, que saiba apontar prioridades e aja nos pontos mais
        sensíveis da cidade. Por isso a SEOP está investindo na melhoria da sua
        capacidade de identificação de novas construções, seja através uma
        apuração refinada das denúncias feitas pela população, como também por
        meios de novas tecnologias, que incluem drones, ortofotos e imagens de
        satélites.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Acompanhe(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      <styles.IntroTitle id={"acompanheTitle"}>
        Acompanhe as ações da SEOP
      </styles.IntroTitle>
      <styles.IntroText>
        É inegável que o marco de 1.000 demolições, em apenas um ano e meio de
        gestão, é extremamente importante. Mostra que estamos atuantes e que
        seguiremos firmes no combate a ocupação desordenada da cidade, na
        proteção de vidas e em asfixiar financeiramente o crime organizado. Isso
        tudo só reforça a convicção que o trabalho precisa seguir .{" "}
        <styles.TextBlue>
          Por isso, a Secretaria de Ordem Pública permanecerá atenta, colocando
          abaixo aquelas estruturas erguidas irregularmente.
        </styles.TextBlue>{" "}
        Além disso, a secretaria entende a importância de ter uma ação cada vez
        mais estratégica, que saiba apontar prioridades e aja nos pontos mais
        sensíveis da cidade. Por isso a SEOP está investindo na melhoria da sua
        capacidade de identificação de novas construções, seja através uma
        apuração refinada das denúncias feitas pela população, como também por
        meios de novas tecnologias, que incluem drones, ortofotos e imagens de
        satélites.
      </styles.IntroText>
    </styles.IntroDiv>
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
      <styles.IntroTitle id={"zonaOesteTitle"}>
        Onde atuamos e o foco na Zona Oeste
      </styles.IntroTitle>
      <styles.IntroText>
        Apesar de ocorrerem em todas as regiões da cidade, as construções
        irregulares têm uma{" "}
        <styles.TextBlue>incidência maior na Zona Oeste</styles.TextBlue> do
        Município, onde ocorrem cerca de <styles.TextBlue>66%</styles.TextBlue>{" "}
        das demolições realizadas pela Secretaria de Ordem Pública. Áreas como
        Recreio, Rio das Pedras e Muzema, por exemplo, são bairros extremamente
        afetados por essas irregularidades.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
