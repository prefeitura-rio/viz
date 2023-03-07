import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";
import { isMobile } from "react-device-detect";

// IMAGENS
import logo1 from "../images/logo1.png";
import logoed from "../images/logoed.png";
import cep from "../images/cep.png";
import logopref from "../images/logopref.png";
import scroll from "../images/scroll.gif";

// CAPA DOS CAPITULOS
import capa1 from "../images/capa1.png";
import capa2 from "../images/capa2.png";
import capa3 from "../images/capa3.png";
import capa4 from "../images/capa4.png";
import capa5 from "../images/capa5.png";

// DESKTOP IMAGENS
import cep1 from "../images/cep1.png";
import cep2 from "../images/cep2.png";
import cep3 from "../images/cep3.gif";

import acolhimento1 from "../images/acolhimento1.png";
import acolhimento2 from "../images/acolhimento2.png";
import acolhimento3 from "../images/acolhimento3.gif";

import ativacao1 from "../images/ativacao1.png";
import ativacao2 from "../images/ativacao2.png";
import ativacao3 from "../images/ativacao3.gif";

import conservacao1 from "../images/conservacao1.png";
import conservacao2 from "../images/conservacao2.png";
import conservacao3 from "../images/conservacao3.gif";

import vigilancia1 from "../images/vigilancia1.png";
import vigilancia2 from "../images/vigilancia2.png";
import vigilancia3 from "../images/vigilancia3.gif";

// MOBILE IMAGENS
import m_cep1 from "../images/m_cep1.png";
import m_cep2 from "../images/m_cep2.png";
import m_cep3 from "../images/m_cep3.gif";

import m_acolhimento1 from "../images/m_acolhimento1.png";
import m_acolhimento2 from "../images/m_acolhimento2.png";
import m_acolhimento3 from "../images/m_acolhimento3.gif";

import m_ativacao1 from "../images/m_ativacao1.png";
import m_ativacao2 from "../images/m_ativacao2.png";
import m_ativacao3 from "../images/m_ativacao3.gif";

import m_conservacao1 from "../images/m_conservacao1.png";
import m_conservacao2 from "../images/m_conservacao2.png";
import m_conservacao3 from "../images/m_conservacao3.gif";

import m_vigilancia1 from "../images/m_vigilancia1.png";
import m_vigilancia2 from "../images/m_vigilancia2.png";
import m_vigilancia3 from "../images/m_vigilancia3.gif";

// FOTOS

import vigilanciafim from "../images/vigilanciafim.png";
import conservacaofim from "../images/conservacaofim.png";
import ativacaofim from "../images/ativacaofim.png";
import acolhimentofim from "../images/acolhimentofim.png";

// Videos
import srcVideo from "../images/video.mp4";

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
          Conheça o CEP, o programa da Prefeitura que vem combatendo a violência
          na cidade.
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
            tema que preocupa os cariocas.
            <br /> <br />
            E embora as prefeituras não tenham uma atribuição específica na
            atuação contra a violência urbana, elas possuem um papel fundamental
            para que um ambiente seguro seja possível nas cidades. Com a
            obrigação de regular o espaço urbano, cabe a elas a manutenção da
            ordem pública, limpeza e conservação de vias, iluminação e regulação
            da ocupação territorial, a que o torna o agente central para criar
            espaços mais seguros aos cidadãos.
            <br /> <br />E é, aliando o estudo e análise do espaço público, que
            a Prefeitura, por meio da Secretaria Municipal de Ordem Pública
            (SEOP), vem combatendo a violência. Graças ao Programa Conjunto de
            Estratégias de Prevenção (CEP) - Seu Rio, Sua Rua, regiões
            beneficiadas pelo projeto já apresentaram uma queda de 12,4% nas
            ocorrência criminais, transformando o Rio em um lugar mais seguro
            para os cariocas.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={cep}
          className="w-auto h-[180px] mt-[60px] lg:w-auto lg:mr-[180px] lg:h-[200px]"
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
          Antes de começarmos a explicar como estamos fazendo isso, é importante
          entender como a violência está distribuída em grandes cidades.
          <br /> <br />
          Segundo especialistas na área da segurança pública, há evidências de
          que o crime é concentrado no espaço urbano. Estudos mostram que mesmo
          em cidades de grande porte, a violência é quase sempre feita por um
          número pequeno de indivíduos que atuam sempre nas mesmas localidades.
          <br /> <br />
          Uma análise nos crimes da cidade do Rio de Janeiro segue esta mesma
          lógica. Entre 2016 e 2019, 25% dos roubos e furtos foram
          contabilizados em apenas 1,3% do território e 5,3% do território
          concentra 50% dos roubos e furtos de rua. <br /> <br />
          <styles.Textred>
            {" "}
            No mapa, podemos ver os locais com alta incidência criminal na
            cidade.
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
          O <styles.Textsalmao>Méier</styles.Textsalmao> é um desses locais que
          se destaca pela alta concentração de roubos e furtos. Localizado na
          Zona Norte da cidade, o bairro está entre as dez áreas com a maior
          incidência destes crimes. A maioria das ocorrências acontece,
          especificamente, na localidade conhecida como{" "}
          <styles.Textred>Jardim do Méier</styles.Textred>. Aí é que nossa
          análise começa.
          <br /> <br />
          Ao lado do Hospital Municipal Salgado Filho, entre pontos de ônibus,
          estação de trem e um dos coretos mais famosos da cidade, ao menos 110
          roubos e 98 furtos foram registrados apenas em 2019, sendo o local um
          dos maiores focos de roubos e furtos de rua registrados na cidade por
          vários anos consecutivos.
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
            Uma das ações para aumentar a segurança dos cariocas nas regiões
            mapeadas, é pensar efetivamente no aumento do monitoramento nas
            áreas mais vulneráveis.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={capa2}
          className="w-auto h-[200px] mt-[40px] lg:w-auto lg:h-[320px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function VigilanciaImages(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"vigilancia_image_1"}
        src={isMobile ? m_vigilancia1 : vigilancia1}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"vigilancia_image_2"}
        src={isMobile ? m_vigilancia2 : vigilancia2}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"vigilancia_image_3"}
        src={isMobile ? m_vigilancia3 : vigilancia3}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
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
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"text_vigilancia_dois"}>
        <styles.TextCard>
          Para que isso fosse possível no Méier, em parceria com o COR foram
          instaladas 34 câmeras de vigilância no local que auxiliam no
          monitoramento em tempo real e ajudam em tomadas de decisões mais
          rápidas na localidade. A presença das câmeras também inibe a ação dos
          criminosos, sendo um fator de grande importância para a redução dos
          delitos.
          <br /> <br />
          Além das intervenções no espaço, o Programa CEP tem como eixo a
          capacitação de guardas em curso de formação voltado ao policiamento
          preventivo, comunitário e orientado à resolução de problemas. No
          Méier, 72 guardas municipais foram capacitados para atuar no programa.
          <br /> <br />A fiscalização do transporte complementar também foi
          reforçada pela Coordenadoria Especial de Transporte Complementar
          (CETC).
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
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
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"text_vigilancia_dois"}>
        <styles.TextCard>
          Hoje, o patrulhamento preventivo da Guarda Municipal acontece em
          período integral, enquanto as câmeras possibilitam respostas rápidas
          dos agentes e inibem criminosos de cometer atos na Praça Jardim do
          Méier.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
  );
}

export function VigilanciaTres(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <img src={vigilanciafim}></img>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
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
            Devolver o espaço público para a população é essencial também na
            contenção da violência. A ocupação irregular de ambulantes nas
            calçadas atrapalha o trânsito de pedestres, deixa o ambiente
            desorganizado e impede a população de aproveitar melhor o espaço
            público.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={capa3}
          className="w-auto h-[200px] mt-[60px] lg:w-auto lg:h-[400px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function AtivacaoImages(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"ativacao_image_1"}
        src={isMobile ? m_ativacao1 : ativacao1}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"ativacao_image_2"}
        src={isMobile ? m_ativacao2 : ativacao2}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"ativacao_image_3"}
        src={isMobile ? m_ativacao3 : ativacao3}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
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
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"text_ativacao_dois"}>
        <styles.TextCard>
          Para corrigir isso, a SEOP fez uma série de ações como a identificação
          e formalização de 57 ambulantes no Ambulante Harmonia, programa da
          Coordenação de Controle Urbano. Também foram entregues 89 barracas
          para que os ambulantes pudessem trabalhar com mais segurança na região
          do Méier.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
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
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"text_ativacao_dois"}>
        <styles.TextCard>
          Em parceria com a Secretaria de Conservação, a Fundação Parques e
          Jardins e também de artistas locais, um novo Parcão foi construído no
          local, possibilitando também que os amigos de quatro patas pudessem
          aproveitar ainda mais a praça.
          <br /> <br />
          Até o momento, mais de 48 feiras de artesanato e 144 eventos culturais
          já foram realizadas.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
  );
}

export function AtivacaoTres(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <img src={ativacaofim}></img>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
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
            Lugares escuros, lixo acumulado nas calçadas, depredação e má
            conservação do espaço trazem insegurança para a população. Um lugar
            abandonado contribui para que pessoas mal intencionadas atuem com
            atos violentos na região, gerando medo e o esvaziamento do espaço
            público.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={capa4}
          className="w-auto h-[200px] mt-[60px] lg:w-auto lg:mr-[0px] lg:h-[440px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function ConservacaoImages(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"conservacao_image_1"}
        src={isMobile ? m_conservacao1 : conservacao1}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"conservacao_image_2"}
        src={isMobile ? m_conservacao2 : conservacao2}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"conservacao_image_3"}
        src={isMobile ? m_conservacao3 : conservacao3}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
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
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"text_conservacao_dois"}>
        <styles.TextCard>
          Este foi o cenário também encontrado pela Prefeitura no Jardim do
          Méier. A reestruturação e recuperação de espaços foi coordenada pela
          SEOP e pela Subprefeitura da Zona Norte, que contaram com a execução e
          apoio da Secretaria de Meio Ambiente, da Fundação Parques e Jardins,
          da COMLURB e também da Secretaria de Conservação. Ao todo, 62 demandas
          de manutenção e reparo de estruturas públicas foram realizadas no
          local, além do conserto e instalação de 149 pontos de iluminação
          pública.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
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
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"text_conservacao_dois"}>
        <styles.TextCard>
          Todo trabalho de conservação foi pensado na promoção de espaços
          públicos acolhedores para as pessoas. Isso porque o programa tem como
          premissa a ideia de que uma cidade segura, não segrega, mas une e
          acolhe a sua população. O CEP busca romper com a ideia de que é
          preciso isolar para proteger, construir muros para se sentir seguro.
          Conservar, no CEP, é garantir as relações humanas nos espaços
          públicos. Afinal, se o Rio é seu, a rua também é sua.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
  );
}

export function ConservacaoTres(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <img src={conservacaofim}></img>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
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
            Por fim, mas não menos importante, fazer o mapeamento de pessoas em
            vulnerabilidade e em situação de rua facilita a focalização de ações
            da Assistência Social.
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={capa1}
          className="w-auto h-[200px] mt-[60px] lg:w-auto lg:h-[420px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function AcolhimentoImages(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <div ref={props.chapRef} id={props.id}>
      <img
        id={"acolhimento_image_1"}
        src={isMobile ? m_acolhimento1 : acolhimento1}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"acolhimento_image_2"}
        src={isMobile ? m_acolhimento2 : acolhimento2}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
      <img
        id={"acolhimento_image_3"}
        src={isMobile ? m_acolhimento3 : acolhimento3}
        className="fixed object-cover top-0 left-0 w-[100%] h-full opacity-0 -z-50"
      ></img>
    </div>
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
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"text_acolhimento_dois"}>
        <styles.TextCard>
          Ao todo, 91 demandas relativas a pessoas em vulnerabilidade social na
          região foram resolvidas.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
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
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3 id={"text_acolhimento_dois"}>
        <styles.TextCard>
          Para continuar dando apoio à população, agentes da Assistência Social
          e Guardas Municipais realizam rondas na região para identificar,
          auxiliar e encaminhar estas pessoas para os programas de assistência
          da Prefeitura do Rio de Janeiro.
        </styles.TextCard>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
  );
}

export function AcolhimentoTres(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv10 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard3>
        <img src={acolhimentofim}></img>
      </styles.ContainerCard3>
    </styles.ChapterGenericDiv10>
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
            O CEP completa um ano de execução e o impacto na vida e segurança
            graças às ações do programa são nítidos.
            <br /> <br />
            Na região contemplada pelo projeto no Méier registrou uma redução de
            33,4% no número de ocorrências criminais, segundo dados da
            Secretaria da Segurança Pública. O projeto também tem uma unidade
            localizada em Copacabana. Na área da zona sul, a redução foi de
            5,2%. Os dois locais vêm apresentando diminuição das ocorrências em
            relação ao mesmo período de 2019, e o projeto, como um todo,
            possibilitou a redução de 12,4% das ocorrências.​
            <br /> <br />
            Além disso, a qualidade do espaço público foi melhorada, permitindo
            um maior uso das áreas pela população e incentivando, através da
            priorização e articulação de ações da Prefeitura, uma cidade melhor
            para os cariocas.​
          </styles.TextCard1>
        </styles.ContainerCard1>
        <img
          src={logopref}
          className="w-auto h-[120px] mt-[300px] lg:mt-[10px] lg:w-auto lg:h-[180px] lg:mr-[200px]"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Video(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      {/* <styles.ContainerCard> */}
      <video controls autoPlay muted loop className="w-full">
        <source src={srcVideo} type="video/mp4" />
      </video>
      {/* </styles.ContainerCard> */}
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
            Eduardo Fagundes <br />
            Izabel Rizzo <br />
            Joana Monteiro <br />
            João Carabetta <br />
            Júlia Guerra <br />
            Paulo Mac Culloch <br />
            Rodrigo Abreu <br />
            Vinicius Peçanha
          </styles.TextCard1>
          <styles.NewsTitle1 className=" lg:mt-[40px] mt-[60px]">
            Parcerias
          </styles.NewsTitle1>
          <styles.TextCard1>
            Escritório de Dados
            <br />
            Secretaria de Ordem Pública <br />
            Centro de Ciência Aplicada à Segurança Pública
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
