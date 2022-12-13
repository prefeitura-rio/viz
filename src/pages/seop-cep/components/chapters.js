import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";

// IMAGENS
import logo1 from "../images/logo1.png";
import logoed from "../images/logoed.png";
import cep from "../images/cep.png";
import logopref from "../images/logopref.png";
import capa1 from "../images/capa1.png";
import capa2 from "../images/capa2.png";
import capa3 from "../images/capa3.png";
import capa4 from "../images/capa4.png";
import capa5 from "../images/capa5.png";
import teste from "../images/teste.png";

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
      <styles.Title>
        SEU RIO
        <br />
        SUA RUA
      </styles.Title>
      <styles.Subtitle>
        O papel da Prefeitura na Segurança Pública. Entendendo o programa CEP na
        Prefeitura da Cidade do Rio de Janeiro.
      </styles.Subtitle>
      <styles.CapaAutor>
        <styles.AuthorText>
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
          </a>
        </styles.AuthorText>
        {/* <img
          src={logo1}
          className="lg:mt-[20px] w-auto h-[50px] lg:w-auto lg:h-[50px]"
        ></img> */}
      </styles.CapaAutor>
    </styles.CapaDiv>
  );
}

export function MapaCapitulo(
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
          <styles.NewsTitle>Introdução</styles.NewsTitle>
          <styles.TextCard1>
            A situação da segurança pública na cidade do Rio de Janeiro é um
            tema recorrente na vida dos cariocas.
            <br /> <br />E embora os municípios não tenham uma atribuição
            específica na atuação da segurança pública, as prefeituras possuem
            um papel fundamental para que um ambiente seguro seja possível.
            <styles.Textwhite>
              {" "}
              Com a obrigação de regular o espaço urbano, cabe a elas a
              manutenção da ordem pública, limpeza de vias, iluminação pública e
              regulação da ocupação territorial, o que o torna o agente central
              para criar espaços seguros.{" "}
            </styles.Textwhite>
            <br /> <br />
            É desta forma que a Prefeitura do Rio de Janeiro vêm trabalhando
            para fazer um Rio mais seguro para os cariocas.
            <br /> <br />
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={cep}
          className="w-auto h-[180px] mt-[60px] lg:w-auto lg:mr-[180px] lg:h-[240px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function MapaZero(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1
      ref={props.chapRef}
      id={props.id}
    ></styles.ChapterGenericDiv1>
  );
}

export function MapaUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Segundo especialistas na área da segurança pública, há evidências de
          que a violência é concentrada em um número pequeno de indivíduos que
          atuam sempre nas mesmas localidades.
          <br />
          <br />
          <styles.Textred>
            {" "}
            Na cidade do Rio, entre 2016 e 2019, 1,3% do território concentrou
            25% dos roubos e furtos, enquanto em 5,3% do território ocorreram
            50% dos mesmos crimes.
          </styles.Textred>
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
  );
}

export function MapaMaisum(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1
      ref={props.chapRef}
      id={props.id}
    ></styles.ChapterGenericDiv1>
  );
}

export function MapaDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Entre os bairros com maiores incidências destes crimes, o Méier, Zona
          Norte da cidade, aparece com os entre os dez bairros com maior
          incidência destes crimes. Na localidade conhecida como{" "}
          <styles.Textsalmao>Jardim do Méier,</styles.Textsalmao> a análise
          demonstrou uma das maiores concentrações de roubos e furtos de rua
          registrados.
          <br />
          <br />
          <styles.Textred>
            {" "}
            Ao lado do Hospital Municipal Salgado Filho, entre pontos de ônibus
            e estação de trem, ao menos 110 roubos e 98 furtos foram registrados
            apenas em 2019, tornando a localidade conhecida como Jardim do
            Méier, uma das maiores concentrações de roubos e furtos de rua
            registrados na cidade.
          </styles.Textred>
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv1>
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
            Conjunto de Estratégias de Prevenção
          </styles.NewsTitle>
          <styles.TextCard1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={capa5}
          className="w-auto h-[200px] mt-[40px] mr-[40px] lg:w-auto lg:h-[370px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
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
    <styles.ChapterGenericDiv3 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard4>
        <styles.TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </styles.TextCard>
      </styles.ContainerCard4>
      <img src={teste} className="lg:w-auto lg:h-auto"></img>
    </styles.ChapterGenericDiv3>
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
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
  );
}

export function VigilanciaCapitulo(
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
          <styles.NewsTitle>Vigilância</styles.NewsTitle>
          <styles.TextCard1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={capa2}
          className="w-auto h-[200px] mt-[40px] lg:w-auto lg:h-[360px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function VigilanciaUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
  );
}

export function VigilanciaDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
  );
}

export function AtivacaoCapitulo(
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
          <styles.NewsTitle>Ativação</styles.NewsTitle>
          <styles.TextCard1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={capa3}
          className="w-auto h-[200px] mt-[60px] lg:w-auto lg:h-[460px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function AtivacaoUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
  );
}

export function AtivacaoDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
  );
}

export function ConservacaoCapitulo(
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
          <styles.NewsTitle>Conservação</styles.NewsTitle>
          <styles.TextCard1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={capa4}
          className="w-auto h-[200px] mt-[60px] lg:w-auto lg:mr-[0px] lg:h-[500px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function ConservacaoUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
  );
}

export function ConservacaoDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
  );
}

export function AcolhimentoCapitulo(
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
          <styles.NewsTitle>Acolhimento</styles.NewsTitle>
          <styles.TextCard1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={capa1}
          className="w-auto h-[200px] mt-[60px] lg:w-auto lg:h-[460px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function AcolhimentoUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
  );
}

export function AcolhimentoDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <styles.TextCard>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv2>
  );
}

export function Resultados(
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
          <styles.NewsTitle>Resultados</styles.NewsTitle>
          <styles.TextCard1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={logopref}
          className="w-auto h-[120px] mt-[300px] lg:mt-[10px] lg:w-auto lg:h-[220px] lg:mr-[200px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
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
          <styles.NewsTitle>Autores</styles.NewsTitle>
          <styles.TextCard1>
            Caio Jacintho <br />
            Diego Oliveira <br />
            Judite Cypreste <br />
            Maria Eduarda Couto Carabetta
          </styles.TextCard1>
          <styles.NewsTitle className=" lg:mt-[40px] ">
            Agradecimentos
          </styles.NewsTitle>
          <styles.TextCard1>
            Brenno Carnevale
            <br />
            João Carabetta <br />
            Rodrigo Abreu <br />
            Clara Santos <br />
            <br />
            Escritório de Dados <br />
            Secretaria de Ordem Pública
          </styles.TextCard1>
          <styles.NewsTitle className=" lg:mt-[40px] ">
            Prefeito
          </styles.NewsTitle>
          <styles.TextCard1>Eduardo Paes</styles.TextCard1>
        </styles.ContainerCardCreditos>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv4>
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
      <a href={"https://www.dados.rio/"}>
        <img src={logoed} className="w-44 lg:w-56"></img>
      </a>
    </styles.IntroDiv>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
