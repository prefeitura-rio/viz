import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";
import { isMobile } from "react-device-detect";

// IMAGENS
import logoed from "../images/logoed.png";
import logo from "../images/logo.png";
import scroll from "../images/scroll.gif";

import obras1 from "../images/obras1.jpg";
import obras2 from "../images/obras2.jpg";
import obras3 from "../images/obras3.jpg";
import rotina1 from "../images/rotina1.jpg";
import rotina2 from "../images/rotina2.jpg";
import cor1 from "../images/cor1.jpg";
import cor2 from "../images/cor2.jpg";
import cor3 from "../images/cor3.jpg";

import graficoum from "../images/graficoum.png";
import mapa from "../images/mapa.png";

import video_capa from "../videos/capa.mp4";

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
      <styles.CapaAutor>
        <img
          src={logoed}
          className="absolute top-[5%] lg:absolute lg:top-[20px] h-11 lg:h-14"
        ></img>
        <styles.Title>Parques, parques e mais parques </styles.Title>
        <styles.Subtitle>
          E como a prefeitura trabalha para que a chuva não castigue os cariocas
        </styles.Subtitle>
        {/* <img src={scroll} className="h-7 lg:h-9 mt-[20px] lg:mt-[20px]"></img>{" "} */}
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
    <div
      ref={props.chapRef}
      id={props.id}
      className="flex relative w-[100%] h-[100vh] -z-[50] items-center justify-center"
    >
      <img
        id={"animacao_image_1"}
        src={
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/ilustracaoum.png"
        }
        className="absolute w-[100%]  opacity-0 -z-[15]"
      ></img>
      <img
        id={"animacao_image_2"}
        src={
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/ilustracaodois.png"
        }
        className="absolute w-[100%]  opacity-0 -z-[14]"
      ></img>
      <img
        id={"animacao_image_3"}
        src={
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/ilustracaotres.png"
        }
        className="absolute w-[100%]  opacity-0 -z-[13]"
      ></img>
      {/* <img
        id={"animacao_image_4"}
        src={
          "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/parques/ilustracaoum.png"
        }
        className="absolute w-[100%]  opacity-1 -z-[12]"
      ></img> */}
    </div>
  );
}

export function ContextoHistorico(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <>
      <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
        <styles.ContainerCard2>
          {/* <img
					src={fundoum}
					className="absolute top-[100%] h-screen w-[100%] lg:top-[80%] lg:h-auto"></img> */}
          <styles.AuthorText className="mb-[88px]">
            Realização{" "}
            <a
              className="font-bold underline"
              href="https://www.dados.rio/"
              target="_blank"
              rel="noreferrer"
            >
              Escritório de Dados
            </a>{" "}
            <br />
            Desenvolvido por{" "}
            <div className="inline font-bold ">Caio Jacintho</div> e{" "}
            <div className="inline font-bold">Judite Cypreste</div>
            <br />{" "}
          </styles.AuthorText>{" "}
          <styles.TextCard1>
            Dados do Alerta Rio, sistema de alerta de chuvas intensas e de
            deslizamentos em encostas do Rio de Janeiro, mostram que nunca
            choveu tanto na nossa cidade.
            <br />
            <br />
            Uma análise feita com base nos dados de ocorrências registradas pelo
            Centro de Operações da cidade (COR) desde 2018, mostra que a cidade
            já registrou pelo menos 8.222 incidentes causados pelas chuvas.
            Destes, 486 foram alagamentos e enchentes.
            <br />
            <br />E este não é um problema exclusivo nosso.
            <br />
            <br />
            Segundo a ONU, no último Painel Intergovernamental de Mudança do
            Clima, as fortes chuvas no mundo já são 0,3% mais frequentes e 6,7%
            mais intensas. Especialistas vêm alertando sobre as consequências
            deste fenômeno, que vem ameaçando a existência de regiões em todo o
            mundo.
          </styles.TextCard1>
        </styles.ContainerCard2>
      </styles.ChapterGenericDiv>
    </>
  );
}

export function QuadroUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv2 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard id={"quadro_um_card1"}>
        {/* <styles.TextCard2>
				Sabe o que esses lugares têm em comum?
				</styles.TextCard2>
				<br />
				<styles.TextCard3>
				Eles fazem parte do plano da Prefeitura do Rio de encher a cidade de áreas de lazer para os cariocas. 
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[110vh]">
				<styles.TextCard3>
				Um investimento em locais historicamente deixados de lado pelo poder público.
				</styles.TextCard3>
			</styles.ContainerCard3>
			<styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[200vh]">
				<styles.TextCard3>
				Sair do seu bairro e ter que pegar um transporte só para curtir um espaço bacana com a família — tá na hora de deixar isso de lado, né? Afinal de contas, a gente sabe que o carioca adora ir curtir um verde.
				</styles.TextCard3> */}
      </styles.ContainerCard>
    </styles.ChapterGenericDiv2>
  );
}

export function ParteUm(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard1>
          <styles.TextCard2 className="mt-[80px]">
            Sabe o que esses lugares têm em comum?
          </styles.TextCard2>
          <br />
          Eles fazem parte do plano da Prefeitura do Rio de encher a cidade de
          áreas de lazer para os cariocas.
          <br />
          <br />
          <br />
          <br />
          <styles.TextCard2>
            Um investimento em locais historicamente deixados de lado pelo poder
            público.
          </styles.TextCard2>
          <br />
          Sair do seu bairro e ter que pegar um transporte só para curtir um
          espaço bacana com a família — tá na hora de deixar isso de lado, né?
          Afinal de contas, a gente sabe que o carioca adora ir curtir um verde.
        </styles.TextCard1>
        <br />
        <br />
        <br />
        <styles.TextCard2>
          Quantas vezes a população carioca pesquisou pela palavra “parque” no
          google nos últimos 13 anos?
        </styles.TextCard2>
        <img
          src={graficoum}
          className="h-auto mt-[40px] mb-[80px] lg:mb-[120px] rounded-md"
        ></img>
        <styles.TextCard1>
          Foram xx novas áreas de lazer construídas em toda a cidade. XX
          localizadas na Zona Oeste e Norte
        </styles.TextCard1>
        <img src={mapa} className="h-auto mt-[30px] rounded-md"></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv4>
  );
}

export function QuadroDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterQuadroDois ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[10vh]">
        <styles.TextCard3>
          Além das áreas livres e da natureza, os parques contemplam uma série
          de equipamentos públicos como:
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[70vh]">
        <styles.TextCard3>
          academia terceira idade, quadra esportiva, ecoponto
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[180vh]">
        <styles.TextCard3>churrasqueira, bosque, horta, pomar</styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[310vh]">
        <styles.TextCard3>
          comércio, skatepark, nave do conhecimento
        </styles.TextCard3>
      </styles.ContainerCard3>
    </styles.ChapterQuadroDois>
  );
}

export function ParteDois(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv4 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard2>
          A gente sabe os parques são um sucesso, olha só o parque Madureira:
        </styles.TextCard2>
        <img src={madureiraum} className="h-auto mb-[12px] mt-[120px]"></img>
        {/* <styles.TextLegenda className="justify-start mb-[60px]">Vista aérea. Foto: Acervo Prefeitura</styles.TextLegenda> */}
        <img src={madureiraquatro} className="h-auto mb-[12px]"></img>
        {/* <styles.TextLegenda className="justify-start mb-[60px]">Chafariz. Foto: Acervo Prefeitura</styles.TextLegenda> */}
        <img src={madureiratres} className="h-auto mb-[12px]"></img>
        {/* <styles.TextLegenda className="justify-start mb-[60px]">Skatepark. Foto: Acervo Prefeitura</styles.TextLegenda> */}
        <img src={madureiradois} className="h-auto mb-[12px]"></img>
        {/* <styles.TextLegenda className="justify-start mb-[60px]">Espaço infantil. Foto: Acervo Prefeitura</styles.TextLegenda> */}
        <img src={madureiracinco} className="h-auto mb-[120px]"></img>
        {/* <styles.TextLegenda className="justify-start mb-[60px]">Área molhada. Foto: Acervo Prefeitura</styles.TextLegenda> */}
        <styles.TextCard2>
          Veja como ficará o novo xodó de Campo Grande:
        </styles.TextCard2>
        <img src={realengocinco} className="h-auto mb-[120px] mt-[120px]"></img>
        <img src={realengoum} className="h-auto mb-[12px]"></img>
        <img src={realengodois} className="h-auto mb-[12px]"></img>
        <img src={realengotres} className="h-auto mb-[12px]"></img>
        <img src={realengoquatro} className="h-auto mb-[12px]"></img>
        <img src={realengoseis} className="h-auto mb-[120px]"></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv4>
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
          Judite Cypreste <br />
        </styles.TextCreditos1>
        <styles.TextCreditos className=" lg:mt-[40px] mt-[60px] ">
          Agradecimentos
        </styles.TextCreditos>
        <styles.TextCreditos1>
          Diego Oliveira <br />
          João Carabetta <br />
        </styles.TextCreditos1>
        <styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
          Prefeito
        </styles.TextCreditos>
        <styles.TextCreditos1>Eduardo Paes</styles.TextCreditos1>
        <img
          src={logoed}
          className="lg:mb-[160px] mt-[100px] lg:mt-[200px] w-[100px] h-auto lg:w-[100px] lg:h-auto"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}
