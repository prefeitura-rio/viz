import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";

// IMAGENS
import logo1 from "../images/logo1.png";

// VIDEOS
import srcVideo from "../images/bairromaravilha.mp4";

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
        São XX obras localizadas nas regiões da Zona Oeste e Zona Norte da
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
        Na Zona Norte, já foram concluídas XX obras, e outras XX estão sendo
        realizadas. Um investimento de R$XX, que trazem para o carioca o 
        <styles.TextHighlightBold> orgulho de ser suburbano.</styles.TextHighlightBold>
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function MapaNorteZoom(
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

export function TextoNorteZoom(
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
        Este é a missão do Conjunto Maravilha, programa da Rio-Urbe, órgão ligado à Secretaria Municipal de Infraestrutura. 
        <br/><br/> 
        As obras do Conjunto Maravilha incluem recuperação de fachadas, pintura dos blocos de apartamentos, recuperação e pintura de muros, impermeabilização e pintura de caixas d’água, construção ou recuperação de calçadas, pintura de grades e portões, reforma dos sistemas de serviços essenciais, como luz e água, e implementação de novas áreas de lazer.
        <br/><br/>
        Com um investimento atual de <styles.TextHighlightBold> R$ 125 milhões,</styles.TextHighlightBold> o projeto está presente também na Zona Oeste e já reformou oito conjuntos habitacionais, entre eles o Colina dos Coqueiros, em Cosmos; o Santos Dumont, em Rocha Miranda; e o Picuí, em Bento Ribeiro. Outros 14 conjuntos habitacionais da cidade estão recebendo os serviços do programa.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function BairroMaravilha(
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
      <video controls autoPlay muted loop className="w-auto h-[600px] ">
        <source src={srcVideo} type="video/mp4" />
      </video>
      </div>
    </styles.IntroDiv>
  );
}

export function ObraNorte(
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

export function TextoObraNorte(
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
        A DEFINIR
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}


export function ObraNorteUm(
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

export function TextoObraNorteUm(
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
        A DEFINIR
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
        Já na Zona Oeste, xx obras já foram entregues aos cariocas. Com um investimento atual
        de R$ XX, a Prefeitura ainda entregará mais XX empreendimentos na região até XX ano.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function MapaOesteZoom(
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

export function TextoOesteZoom(
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
        <styles.TextHighlightBold>O maior bairro do Brasil vai andar.</styles.TextHighlightBold> Com um investimento da Prefeitura em XX obras para melhorar o trânsito, o maior bairro do Brasil receberá ainda o Anel Viário, que irá reduzir pela metade o tempo de deslocamento entre o centro do bairro até a Avenida Brasil.
        <br/><br/> 
        Com um investimento de R$ XX, ainda estão previstas as entregas de:
        <br/><br/> 
        Novo Mergulhão, desafogando o trânsito do cruzamento da Avenida Cesário de Melo com a Estrada do Monteiro, um novo túnel;
        <br/><br/> 
        Um novo túnel que fará conexão direta entre a Avenida Cesário de Melo e a Estrada da Posse. A estrutura terá duas galerias com duas pistas em cada uma e mais 600 metros de ciclovia;
        <br/><br/> 
        Uma nova via semi-expressa, que possibilitará com que o trabalhador que sair do centro de Campo Grande possa chegar mais rápido a Avenida Brasil através da Estrada da Posse;
        <br/><br/> 
        E a nova Estrada do Tingui, que ganhará um novo trecho e será urbanizada e pavimentada, sendo mais uma opção de ligação do centro de Campo Grande com a Avenida Brasil.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function NumeraoUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard2>
          <styles.Grid1>
            {/* <styles.BigNumber2>R$</styles.BigNumber2> */}
            <styles.BigNumber id="number">0</styles.BigNumber>
            <styles.BigNumber1>milhões</styles.BigNumber1>
            </styles.Grid1>
            <styles.BigNumber3>É o valor de investimentos feitos pela Prefeitura em obras nas Zonas Oeste e Norte da cidade.
            </styles.BigNumber3>
      </styles.ContainerCard2>
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
        A marca de 1.313 demolições, em
        apenas um ano e meio de gestão, é
        extremamente importante para a cidade.
        <br /> <br />
        Para continuar seu trabalho, a Prefeitura do Rio de Janeiro vem
        investindo na melhoria da capacidade de identificação de novas
        construções, por meio de denúncias recebidas, e também através do
          uso de novas tecnologias, como o uso de drones, fotografias aéreas
          (ortofotos) e imagens de satélites.
          <br /> <br />

        A Prefeitura, juntamente com as secretarias de Ordem Pública e Meio
        Ambiente da Cidade, seguem atentas, colocando abaixo aquelas estruturas
        erguidas irregularmente em nosso município. Continuaremos atuantes e
        firmes no combate à ocupação desordenada na cidade e no asfixiamento
        financeiro do crime organizado.
        <br /> <br />
          A preservação de vidas é, e sempre será, o nosso objetivo.

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
