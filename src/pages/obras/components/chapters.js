import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";

import { ImgComparisonSlider } from "@img-comparison-slider/react";

// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";

import React, { useState } from "react";

// IMAGENS
import logo from "../images/logo.png";
import logo1 from "../images/logo1.png";
import casacarioca from "../images/casacarioca.png";
import conjuntomaravilha from "../images/conjuntomaravilha.png";
import bairromaravilha from "../images/bairromaravilha.png";
import avancacampogrande from "../images/avancacampogrande.png";

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
      <img src={logo1} className="absolute top-3 w-24 mt-[2vh] lg:w-32"></img>
      <styles.Title className="mt-[50px]">
        {" "}
        <styles.TextHighlightBlue>A gente</styles.TextHighlightBlue> <br/>
        <styles.TextHighlightGreen>prioriza quem</styles.TextHighlightGreen> <br/>
        {" "}
        <styles.TextHighlightOrange>mais precisa</styles.TextHighlightOrange>
      </styles.Title>
      {/* <styles.Subtitle>Pra quem Mais Precisa</styles.Subtitle> */}
      <div>
        <styles.AuthorText>
          Desenvolvido pela equipe de visualização <br/>de dados do{" "}
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
    <styles.IntroDivUm
      className="bg-[#639ed8]"
      ref={props.chapRef}
      id={props.id}
    >
      {/* <styles.IntroTitle id={"intro"}>Como tudo começou</styles.IntroTitle> */}
      <div className="max-w-[80%]">
        {" "}
        <styles.IntroText>
          Após 4 longos anos de descaso, o Rio de Janeiro finalmente está
          recebendo a atenção que ele merece. Mas calma, não estamos falando
          daquele Rio distante que você não frequenta ou nem conhece.
          <br />
          <br />
          Estamos falando do{" "}
          <styles.TextHighlightBold>seu Rio.</styles.TextHighlightBold>
          <br />
          <br />
          Nesta visualização mostraremos como a Prefeitura está levando grandes obras de infraestrutura para as zonas Norte e principalmente Oeste da cidade, levando dignidade e qualidade de vida a essas regiões.
          <br />
          <br />
          Movimente as setas e veja o antes e depois.
        </styles.IntroText>
      </div>
    </styles.IntroDivUm>
  );
}

export function NaCasa(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.BigNumber3>
          {" "}
          <styles.TextHighlightOrangeBig>
            É a Prefeitura
          </styles.TextHighlightOrangeBig>{" "}
          <br />{" "}
          <styles.TextHighlightGreenBig>
            na sua casa
          </styles.TextHighlightGreenBig>
        </styles.BigNumber3>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
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

export function NumeraoConjuntoMaravilha(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard2>
        <styles.BigNumber4>
          Esse é o Conjunto Habitacional Condomínio Parque Novo Irajá.
        </styles.BigNumber4>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv2>
  );
}

export function NumeraoConjuntoMaravilhaUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard2>
        <styles.BigNumber4>
          Localizado na Avenida Brasil, o conjunto é formado por 15 prédios,
          divididos em 26 blocos. O empreendimento residencial teve sua fachada
          totalmente reformada em janeiro deste ano pelo programa Conjunto
          Maravilha. 
        </styles.BigNumber4>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv2>
  );
}

export function SliderConjuntoMaravilha(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
      <ImgComparisonSlider hover="hover" tabindex="0" class="rendered">
<img
  slot="first"
  src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/obras/CM%20ANTES.jpg"
/>
<img
  slot="second"
  src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/obras/CM%20DEPOIS.jpg"
/>
<svg slot="handle" class="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
    <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
  </svg>
</ImgComparisonSlider>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
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
    <styles.IntroDiv className="bg-[#84b77b]" ref={props.chapRef} id={props.id}>
      <img
        src={conjuntomaravilha}
        className="w-auto h-[250px] lg:h-[400px] lg:order-last"
      ></img>
      <div className="max-w-[80%]">
        {" "}
        <styles.IntroText>
          Revitalizar unidades habitacionais da cidade do Rio é a missão do{" "}
          <styles.TextHighlightBold>
            {" "}
            Conjunto Maravilha
          </styles.TextHighlightBold>
          , programa da Rio-Urbe, órgão ligado à Secretaria Municipal de
          Infraestrutura.
          <br />
          <br />
          As obras do Conjunto Maravilha incluem recuperação de fachadas,
          pintura dos blocos de apartamentos, recuperação e pintura de muros,
          impermeabilização e pintura de caixas d’água, construção ou
          recuperação de calçadas, pintura de grades e portões, reforma dos
          sistemas de serviços essenciais, como luz e água, e implementação de
          novas áreas de lazer.
          <br />
          <br />
          Com um investimento atual de R$ 125 milhões, o projeto está presente
          na Zona Norte e na Zona Oeste, e já reformou oito conjuntos
          habitacionais, entre eles o Colina dos Coqueiros, em Cosmos; o Santos
          Dumont, em Rocha Miranda; e o Picuí, em Bento Ribeiro. Outros 14
          conjuntos habitacionais da cidade estão recebendo os serviços do
          programa.
        </styles.IntroText>
      </div>
    </styles.IntroDiv>
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

export function NumeraoCasaCarioca(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard2>
        <styles.BigNumber4>
          E aqui está o complexo do Jacarezinho.
        </styles.BigNumber4>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv2>
  );
}

export function NumeraoCasaCariocaUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard2>
        <styles.BigNumber4>
          Por aqui, o programa Casa Carioca transformou a casa — e a vida — de
          famílias em situação de vulnerabilidade social.
        </styles.BigNumber4>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv2>
  );
}

export function SliderCasaCarioca(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
      <ImgComparisonSlider hover="hover" tabindex="0" class="rendered">
<img
  slot="first"
  src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/obras/CASA%20ANTES.jpg"
/>
<img
  slot="second"
  src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/obras/CASA%20DEPOIS.jpg"
/>
<svg slot="handle" class="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
    <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
  </svg>
</ImgComparisonSlider>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
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
    <styles.IntroDiv className="bg-[#dab68a]" ref={props.chapRef} id={props.id}>
      <img
        src={casacarioca}
        className="w-auto h-[250px] lg:h-[400px] lg:order-last"
      ></img>
      <div className="max-w-[80%]">
        {" "}
        <styles.IntroText>
          Em sua primeira fase, o programa criado pela Secretaria de Ação Comunitária beneficiou também os moradores dos
          complexos da Penha, Alemão, Maré, Morro da Providência e Vila Kennedy,
          onde foram contratadas reformas para oito mil casas. Na fase dois do{" "}
          <styles.TextHighlightBold> Casa Carioca</styles.TextHighlightBold>,
          estão previstas intervenções em imóveis na Rocinha, Cidade de Deus e
          nos complexos do Chapadão, Lins e Pedreira, entre outros, onde serão
          licitadas 12 mil casas.
          <br />
          <br />
          A dignidade começa dentro de casa, onde dormimos, comemos, amamos e
          criamos nossos filhos, e viver com condições mínimas de saúde e
          acessibilidade é um direito de todos; o Casa Carioca garante esse
          direito a famílias em situação de vulnerabilidade extrema.
          <br />
          <br />
          Troca de telhados, aumento de ventilação com abertura de janelas e
          basculantes, colocação de portas, instalação de módulos
          hidrossanitários, adaptação em banheiros para pessoas idosas e com
          deficiência, instalação elétrica, pinturas e emboços foram algumas das
          mudanças executadas.
          <br />
          <br />
          {/* As famílias foram selecionadas pelo Programa Territórios Sociais, desenvolvido pelo Instituto Pereira Passos. Para isso, precisavam ter renda mensal de até três salários-mínimos e cadastradas no CadÚnico, além de residirem há pelo menos três anos no município e possuírem um único imóvel fora de área de risco. 
        <br/><br/>
        Foram priorizadas famílias com mulheres como chefes de família; com membros idosos; com pessoas com deficiência; com pessoas portadoras de doenças graves; com maior número de dependentes (igual ou maior que três moradores utilizando o mesmo cômodo).
        <br/><br/> */}
          O total de casas a serem beneficiadas pelo programa até 2024 é de 20
          mil, num investimento de R$ 300 milhões.
        </styles.IntroText>
      </div>
    </styles.IntroDiv>
  );
}

export function NaRua(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.BigNumber3>
          {" "}
          <styles.TextHighlightBlueBig>
            É a Prefeitura
          </styles.TextHighlightBlueBig>{" "}
          <br />{" "}
          <styles.TextHighlightOrangeBig>
            na sua rua
          </styles.TextHighlightOrangeBig>
        </styles.BigNumber3>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
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

export function NumeraoAvancaCampoGrande(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard2>
        <styles.BigNumber4>
          É aqui que Campo Grande receberá a maior obra da Prefeitura, o Anel
          Viário.
        </styles.BigNumber4>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv2>
  );
}

export function NumeraoAvancaCampoGrandeUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard2>
        <styles.BigNumber4>
          O projeto Avança Campo Grande vai reduzir pela metade o tempo entre o
          centro do bairro e a Avenida Brasil.
        </styles.BigNumber4>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv2>
  );
}

export function SliderAvancaCampoGrande(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
      <ImgComparisonSlider hover="hover" tabindex="0" class="rendered">
<img
  slot="first"
  src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/obras/CG%20ANTES.jpg"
/>
<img
  slot="second"
  src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/obras/CG%20DEPOIS.jpg"
/>
<svg slot="handle" class="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
    <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
  </svg>
</ImgComparisonSlider>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
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
    <styles.IntroDiv className="bg-[#639ed8]" ref={props.chapRef} id={props.id}>
      <img
        src={avancacampogrande}
        className="w-auto h-[180px] lg:h-[300px] lg:order-last"
      ></img>
      <div className="max-w-[80%]">
        {" "}
        <styles.IntroText>
          Duas grandes obras vão melhorar o trânsito e a qualidade de vida em Campo Grande: a construção de um mergulhão sob a Avenida Cesário de Melo e de uma ligação expressa entre a Estrada da Caroba e a Estrada da Posse, com a implantação de um túnel de 600 metros, com duas galerias, sob o Morro Luiz Bom.
          <br />
          <br />
          Uma nova vai expressa vai ligar a Estrada da Posse à Avenida Brasil, que também poderá ser acessada pela Estrada do Tingui. As novas rotas vão diminuir pela metade o tempo de deslocamento entre o centro de Campo Grande e a Av. Brasil, melhorando muito a circulação de veículos no maior bairro do Brasil.
          <br />
          <br />
        As conexões da Cesário de Melo com a Artur Rios e a Estrada da Caroba vão ganhar rotatórias.
        </styles.IntroText>
      </div>
    </styles.IntroDiv>
  );
}

export function NoBairro(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.BigNumber3>
          {" "}
          <styles.TextHighlightGreenBig>
            É a Prefeitura
          </styles.TextHighlightGreenBig>{" "}
          <br />{" "}
          <styles.TextHighlightRedBig>no seu bairro</styles.TextHighlightRedBig>
        </styles.BigNumber3>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
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

export function NumeraoBairroMaravilha(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard2>
        <styles.BigNumber4>
          Os moradores do Encantado foram beneficiados com diversas obras de
          urbanização e infraestrutura no bairro.
        </styles.BigNumber4>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv2>
  );
}

export function NumeraoBairroMaravilhaUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard2>
        <styles.BigNumber4>
          A região está recebendo 13 obras do programa, com investimentos que
          chegam a R$ 240 milhões. Presente em mais de 90 localidades da cidade
          do Rio, o programa Bairro Maravilha está levando obras de recuperação e
          melhorias nas ruas das zonas Norte e Oeste.
        </styles.BigNumber4>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv2>
  );
}

export function SliderBairroMaravilha(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv2 className="" ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
      <ImgComparisonSlider hover="hover" tabindex="0" class="rendered">
<img
  slot="first"
  src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/obras/BM%20ANTES.jpg"
/>
<img
  slot="second"
  src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/obras/BM%20DEPOIS.jpg"
/>
<svg slot="handle" class="custom-animated-handle" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
    <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
  </svg>
</ImgComparisonSlider>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
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
    <styles.IntroDiv className="bg-[#d66262]" ref={props.chapRef} id={props.id}>
      <img
        src={bairromaravilha}
        className="w-auto h-[250px] lg:h-[400px] lg:order-last"
      ></img>
      <div className="max-w-[80%]">
        {" "}
        <styles.IntroText>
          O Bairro Maravilha também está em Campo Grande. O programa beneficia principalmente a Zona Oeste, onde a urbanização está chegando para cerca de 300 mil moradores de 77 localidades.
          <br />
          <br />
          Além de obras de drenagem, saneamento, pavimentação e construção ou revitalização de calçadas, o Bairro Maravilha também reforma e até constrói praças e áreas de esporte e lazer.
          <br />
          <br />
          Na Zona Norte o projeto está em 13 locais de Olaria, Bonsucesso, Coelho Neto, Ilha do Governador, Del Castilho, Ramos, Rocha Miranda, Madureira, Barros Filho, Guadalupe e Caju.
        </styles.IntroText>
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
    <styles.IntroDivUm
      className="bg-[#639ed8]"
      ref={props.chapRef}
      id={props.id}
    >
      {/* <styles.IntroTitle id={"intro"}>Como tudo começou</styles.IntroTitle> */}
      <div className="max-w-[80%]">
        {" "}
        <styles.IntroText>
          A Prefeitura vem investindo, de grandes obras a pequenas melhorias,
          para priorizar as pessoas e regiões que sempre ficaram para trás.
          <br />
          <br />
          <styles.TextHighlightBold>
            É a Prefeitura trabalhando na sua casa, na sua rua, no seu Rio.
          </styles.TextHighlightBold>
        </styles.IntroText>
      </div>
    </styles.IntroDivUm>
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
    <styles.FimDiv className="bg-[#84b77b]" ref={props.chapRef} id={props.id}>
      <styles.FimTitle>Autores</styles.FimTitle>
      <styles.FimText>
        Caio Jacintho <br />
        Judite Cypreste
      </styles.FimText>
      <styles.FimTitle className="mt-[60px]">Agradecimentos</styles.FimTitle>
      <styles.FimText>
        Alfredo Junqueira <br />
        Diego Oliveira <br />
        Gabriela Hilário <br />
        João Carabetta <br />
        Joice Nascimento <br />
        Pedro Lerner <br />
        Pedro Simões <br />
        Tiago Peregrino
      </styles.FimText>
      <styles.FimTitle className="mt-[60px]">Prefeito</styles.FimTitle>
      <styles.FimText>Eduardo Paes</styles.FimText>
      <a href={"https://www.dados.rio/"}>
        <img
          src={logo}
          className="w-[110px] mt-[100px] lg:mt-[100px] lg:w-[8rem]"
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
