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
      <styles.Title className="mt-[50px]"> <styles.TextHighlightBlue>Resgatando</styles.TextHighlightBlue> o <br/><styles.TextHighlightGreen>orgulho
        </styles.TextHighlightGreen> de ser <br/> <styles.TextHighlightOrange> suburbano</styles.TextHighlightOrange></styles.Title>
      {/* <styles.Subtitle>Pra quem Mais Precisa</styles.Subtitle> */}
      <div>
        <styles.AuthorText>
          Desenvolvido pela equipe de <br/>visualização de dados do{" "}
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
        <br /><br />
        <styles.TextHighlightBold>É a Prefeitura trazendo de volta, o orgulho de ser suburbano. </styles.TextHighlightBold>
        </styles.IntroText>
      </div>
    </styles.IntroDiv>
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
            {/* <styles.BigNumber id="number">0</styles.BigNumber> */}
            {/* <styles.BigNumber1>milhões</styles.BigNumber1> */}
            </styles.Grid1>
            <styles.BigNumber3><styles.TextHighlightOrange>É a prefeitura</styles.TextHighlightOrange> <br/> <styles.TextHighlightGreen>na sua casa</styles.TextHighlightGreen> 
            </styles.BigNumber3>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv>
  );
}

export function MapaConjuntoMaravilha(
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

export function TextoConjuntoMaravilha(
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
        Revitalizar unidades habitacionais da cidade do Rio é a missão do Conjunto Maravilha, programa da Rio-Urbe, órgão ligado à Secretaria Municipal de Infraestrutura.
        <br/><br/>
        As obras do Conjunto Maravilha incluem recuperação de fachadas, pintura dos blocos de apartamentos, recuperação e pintura de muros, impermeabilização e pintura de caixas d’água, construção ou recuperação de calçadas, pintura de grades e portões, reforma dos sistemas de serviços essenciais, como luz e água, e implementação de novas áreas de lazer. 
        <br/><br/>
        A Prefeitura entregou, em janeiro, as obras do Conjunto Habitacional Condomínio Parque Novo Irajá, no bairro de Irajá. Formado por 15 prédios, divididos em 26 blocos, o empreendimento residencial fica na Avenida Brasil e passou por reparos nas fachadas, com serviços de emboço e pintura. Os portões e as grades também ganharam pintura nova.
        <br/><br/>
        Com um investimento atual de R$ 125 milhões, o projeto está presente na Zona Norte e na Zona Oeste, e já reformou oito conjuntos habitacionais, entre eles o Colina dos Coqueiros, em Cosmos; o Santos Dumont, em Rocha Miranda; e o Picuí, em Bento Ribeiro. Outros 14 conjuntos habitacionais da cidade estão recebendo os serviços do programa.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function MapaCasaCarioca(
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

export function TextoCasaCarioca(
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
        Dignidade começa dentro de casa, onde dormimos, comemos, amamos e criamos nossos filhos, e viver com condições mínimas de saúde e acessibilidade é um direito de todos; o Casa Carioca garante esse direito a famílias em situação de vulnerabilidade extrema.
        <br/><br/>
        Troca de telhados, aumento de ventilação com abertura de janelas e basculantes, colocação de portas, instalação de módulos hidrossanitários, adaptação em banheiros para pessoas idosas e com deficiência, instalação elétrica, pinturas e emboços foram algumas das mudanças executadas. Tudo para possibilitar um ambiente seguro e saudável para famílias em situação de vulnerabilidade social.
        <br/><br/>
        As famílias foram selecionadas pelo Programa Territórios Sociais, desenvolvido pelo Instituto Pereira Passos. Para isso, precisavam ter renda mensal de até três salários-mínimos e cadastradas no CadÚnico, além de residirem há pelo menos três anos no município e possuírem um único imóvel fora de área de risco. 
        <br/><br/>
        Foram priorizadas famílias com mulheres como chefes de família; com membros idosos; com pessoas com deficiência; com pessoas portadoras de doenças graves; com maior número de dependentes (igual ou maior que três moradores utilizando o mesmo cômodo).
        <br/><br/>
        Em sua primeira fase, o programa beneficiou os complexos da Penha, Alemão, Maré, Jacarezinho, Morro da Providência e Vila Kennedy, onde foram contratadas reformas para oito mil casas. Na fase dois do Casa Carioca, estão previstas intervenções em imóveis na Rocinha, Cidade de Deus e nos complexos do Chapadão, Lins e Pedreira, entre outros, onde serão licitadas 12 mil casas. 
        <br/><br/>
        O total de casas a serem beneficiadas pelo programa até 2024 é de 20 mil, num investimento de R$ 300 milhões.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function NumeraoDois(
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
            {/* <styles.BigNumber id="number">0</styles.BigNumber> */}
            {/* <styles.BigNumber1>milhões</styles.BigNumber1> */}
            </styles.Grid1>
            <styles.BigNumber3> <styles.TextHighlightBlue>É a prefeitura</styles.TextHighlightBlue> <br/> <styles.TextHighlightOrange>na sua rua</styles.TextHighlightOrange> 
            </styles.BigNumber3>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv>
  );
}

export function MapaAvancaCampoGrande(
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

export function TextoAvancaCampoGrande(
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
        Texto AVANÇA CAMPO GRANDE
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function NumeraoTres(
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
            {/* <styles.BigNumber id="number">0</styles.BigNumber> */}
            {/* <styles.BigNumber1>milhões</styles.BigNumber1> */}
            </styles.Grid1>
            <styles.BigNumber3><styles.TextHighlightGreen>É a prefeitura</styles.TextHighlightGreen> <br/> <styles.TextHighlightBlue>no seu bairro</styles.TextHighlightBlue> 
            </styles.BigNumber3>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv>
  );
}

export function MapaBairroMaravilha(
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

export function TextoBairroMaravilha(
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
        Texto BAIRRO MARAVILHA
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}


export function VideoUm(
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
