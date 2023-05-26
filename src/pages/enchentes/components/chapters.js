import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";
import { isMobile } from "react-device-detect";

// IMAGENS
import logoed from "../images/logoed.png";
import capa from "../images/capa.gif";
import marco from "../images/marco.jpg";
import ranking from "../images/ranking.jpg";
import plano from "../images/plano.jpg";
import mapaplano from "../images/mapaplano.jpg";

import cep1 from "../images/cep1.png";
import cep2 from "../images/cep2.png";
import cep3 from "../images/cep3.gif";

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
      {" "}
      <styles.CapaAutor>
        <img
          src={logoed}
          className="absolute mt-[20px] lg:mt-[40px] top-0 w-[100px] lg:w-[120px] h-auto lg:h-auto"
        ></img>{" "}
        <styles.Title>Por que o Rio de Janeiro alaga?</styles.Title>
        <styles.Subtitle>
          E como a prefeitura trabalha para que a chuva não castigue os cariocas
        </styles.Subtitle>
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
        <styles.ContainerCard>
          <styles.AuthorText className="lg:w-[460px]">
            ▌ Desenvolvido pela Equipe de Visualização de Dados do{" "}
            <a
              className="font-bold underline"
              href="https://www.dados.rio/"
              target="_blank"
              rel="noreferrer"
            >
              Escritório de Dados
            </a>{" "}
            da Prefeitura da Cidade do Rio de Janeiro
          </styles.AuthorText>{" "}
          <styles.TextCard>Contexto histórico dos alagamentos</styles.TextCard>
          <styles.TextCard1>
            Uma análise feita com base nos dados de ocorrências registradas pelo
            COR desde 2018, mostra que a cidade já registrou pelo menos 3.937
            incidentes causados pelas chuvas. Destes, 428 foram alagamentos e
            enchentes.
            <br /> <br />
            Existem diversos motivos pelos quais uma cidade como a nossa sofre
            com estes problemas. Seja por eventos naturais ou pela ação humana,
            a função de uma boa gestão pública é de mitigar estes problemas e
            evitar que eles interrompam o funcionamento das atividades.
            <br /> <br />A seguir, explicaremos para você alguns dos principais
            motivos pelos quais a nossa cidade é um território propenso para que
            este tipo de incidente ocorra de forma tão frequente.
          </styles.TextCard1>
          <img src={marco} className="h-auto w-auto lg:mt-[60px]"></img>
        </styles.ContainerCard>
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
      <styles.ContainerCard1>
        <styles.ContainerCard3>
          <styles.TextCard3>
            Com base em evidências científicas, uma série de ações específicas,
            de baixo custo e focalizadas, foram estrategicamente pensadas para
            contribuir para a redução dos fatores de risco mapeados e,
            consequentemente, para a redução do crime e da sensação de
            insegurança no local.
          </styles.TextCard3>
        </styles.ContainerCard3>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv2>
  );
}

export function Impermeabilidade(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          Impermeabilidade do solo e a maré alta
        </styles.TextCard>
        <styles.TextCard1>
          A impermeabilização do solo nas cidades, resultado do excesso de
          asfalto e construções, é uma das principais causas dos frequentes
          alagamentos e enchentes que atingem o Rio de Janeiro.
          <br /> <br />
          A urbanização desenfreada comprometeu a capacidade do solo de absorver
          a água da chuva, dificultando desta forma o escoamento e aumentando o
          risco de inundações.
          <br /> <br />
          Além disso, a cidade costeira, rodeada pela Baía de Guanabara, sofre
          com a influência direta da maré alta. Durante chuvas intensas, a água
          não absorvida pelo solo não tem para onde ir, acumulando-se então nas
          ruas e causando transtornos para os cariocas.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
  );
}

export function Lixo(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>Lixo</styles.TextCard>
        <styles.TextCard1>
          A falta de permeabilização do solo é um problema típico das grandes
          cidades, que pode ser solucionado com a implementação de sistemas de
          drenagem eficientes. No entanto, essas estruturas podem ficar
          comprometidas quando há algo no caminho atrapalhando: o lixo.
          <br /> <br />
          Infelizmente, o lixo é um grande vilão quando se trata de alagamentos
          e enchentes em nossa cidade. Segundo dados da Comlurb, são recolhidas
          diariamente cerca de 9.000 toneladas de resíduos em toda a cidade,
          sendo que 3.600 toneladas são lixo público. Essa categoria inclui todo
          o lixo coletado nas ruas, desde o que é descartado de maneira correta
          nas 45 mil lixeiras espalhadas pela cidade até o que é deixado no
          chão.
          <br /> <br />
          Durante uma pesquisa realizada para este dataviz, o lixo descartado de
          maneira incorreta foi apontado como a principal razão pela qual
          ocorrem enchentes e alagamentos em nossa cidade. O lixo entope bueiros
          e demais sistemas de drenagem, impedindo a passagem da água e causando
          grandes estragos.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
  );
}

export function Vandalismo(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          Vandalismo e roubo de lixeiras e bueiros
        </styles.TextCard>
        <styles.TextCard1>
          No Rio de Janeiro, mesmo com lixeiras espalhadas pelas ruas, ainda há
          pessoas que insistem em jogar lixo no chão. E se isso já é
          preocupante, imagine como seria se não houvesse onde descartar o lixo…
          é isso que ocorre quando lixeiras são furtadas ou vandalizadas em
          nossa cidade.
          <br /> <br />
          De acordo com dados da Comlurb, em média, 500 a 600 unidades de
          papeleiras são furtadas ou danificadas mensalmente, totalizando cerca
          de 6.000 ao ano. O prejuízo para os cofres públicos é significativo.
          Segundo a companhia, o valor chega a aproximadamente R$ 900 mil por
          ano, considerando o valor da última compra de lixeiras (R$149,77 a
          unidade).
          <br /> <br />
          Só durante o Réveillon deste ano, a Comlurb constatou que cerca de 20%
          dos 1.000 contêineres de 240 litros disponibilizados na Praia de
          Copacabana foram furtados.
          <br /> <br />
          E se um lixo jogado no chão é o começo de uma enchente ou um
          alagamento, imagine se este resíduo conseguir entrar nas galerias que
          ficam embaixo da cidade?
          <br /> <br />
          É isto que ocorre quando uma tampa de bueiro é alvo de ladrões. Essas
          proteções são essenciais para impedir que o lixo arrastado pela chuva
          prejudique o fluxo de água e o bom escoamento. Além disso, os furtos
          colocam em risco a segurança de pedestres e motoristas.
          <br /> <br />
          Desde o início deste ano, a SECONSERVA já precisou repor 862 tampas e
          grelhas em toda a cidade, um prejuízo de R$ 204.183,90 aos cofres
          públicos.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
  );
}

export function Clandestino(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          Ligações clandestinas à rede de esgoto
        </styles.TextCard>
        <styles.TextCard1>
          As ligações clandestinas aos sistemas de esgoto também são uma ameaça
          à drenagem adequada das chuvas. Muitas vezes, o esgoto é direcionado
          para galerias de águas pluviais, causando o entupimento desses canais
          e, consequentemente, a inundação das ruas.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
  );
}

export function ContextoMundial(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>Contexto Mundial x Aquecimento Global</styles.TextCard>
        <styles.TextCard1>
          A elevação da temperatura da Terra, causada pelo Aquecimento Global,
          também é uma das razões pelas quais a cidade, cada vez mais
          frequentemente, sofre com a intensidade das chuvas fortes e
          inundações.
          <br /> <br />
          Quando a temperatura aumenta, o ar retém mais umidade. Quando essa
          umidade se condensa, libera calor ou energia, transformando chuviscos
          em tempestades.
          <br /> <br />
          Segundo a ONU, no último Painel Intergovernamental de Mudança do
          Clima, as fortes chuvas no mundo já são 0,3% mais frequentes e 6,7%
          mais intensas. Dados do Alerta Rio, sistema de alerta de chuvas
          intensas e de deslizamentos em encostas da cidade, mostram que nunca
          choveu tanto na cidade.
          <br /> <br />
          E este não é um problema exclusivo nosso. Recentemente, a cidade de
          São Sebastião, em São Paulo, registrou 65 mortes e milhares de
          desabrigados e desalojados devido às chuvas que atingiram o litoral
          paulista em março deste ano.
          <br /> <br />
          Fora do país, a cidade histórica de Sant Louis, no Senegal, vem
          alarmando especialistas do clima. A região é uma das mais ameaçadas em
          todo o continente africano devido às frequentes tempestades.
        </styles.TextCard1>
        <img src={ranking} className="h-auto w-auto lg:mt-[60px]"></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
  );
}

export function Prefeitura(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>Ações da Prefeitura</styles.TextCard>
        <styles.TextCard1>
          Sabendo destes problemas, cabe a Prefeitura do Rio um papel
          fundamental na prevenção contra enchentes e alagamentos em nossa
          cidade.
          <br /> <br />
          As medidas para mitigar os efeitos podem ser tomadas antes, durante ou
          como planejamento de obras específicas contra enchentes e alagamentos.
          <br /> <br />A seguir, você verá uma séria de ações realizadas pela
          Prefeitura para combater este problema.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
  );
}

export function Rotina(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>Rotina</styles.TextCard>
        <styles.TextCard1>
          Como já falamos anteriormente, o lixo descartado irregularmente pela
          nossa cidade é um dos principais agentes causadores destes tipos de
          ocorrências. Com o objetivo de combater os problemas causados pelo
          descarte irregular de lixo nas ruas, a Comlurb é responsável pela
          limpeza da cidade do Rio de Janeiro.
          <br /> <br />
          Com uma frota de 107 caminhões basculantes, a empresa realiza a
          remoção de lixo público, tanto depositado corretamente em papeleiras
          quanto jogado de forma errada nas ruas e avenidas. E se o lixo estiver
          na praia, um dos 25 tratores para a limpeza da areia também pode ser
          utilizado no serviço.
          <br /> <br />
          Outra ação importante é a coleta domiciliar em toda a cidade, com
          caminhões compactadores, três vezes por semana, em dias alternados,
          podendo ser no período diurno ou noturno. Nas comunidades cariocas, a
          coleta é diária, com a utilização de 34 tratores disponíveis.
          <br /> <br />
          Após a coleta, os resíduos são levados em caminhões para uma das cinco
          Estações de Transferência de Resíduos (ETRs), onde são selecionados e
          encaminhados em grandes carretas para o destino final, o Centro de
          Tratamento de Resíduos Rio (CTR-Rio), localizado em Seropédica.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
  );
}

export function ObrasProjetos(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>Obras e Projetos</styles.TextCard>
        <styles.TextCard1>
          Como já falamos anteriormente, o lixo descartado irregularmente pela
          nossa cidade é um dos principais agentes causadores destes tipos de
          ocorrências. Com o objetivo de combater os problemas causados pelo
          descarte irregular de lixo nas ruas, a Comlurb é responsável pela
          limpeza da cidade do Rio de Janeiro.
        </styles.TextCard1>
        <img src={mapaplano} className="h-auto w-auto lg:mt-[60px]"></img>
        <img src={plano} className="h-auto w-auto lg:mt-[60px]"></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
  );
}

export function Cor(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>E quando chove?</styles.TextCard>
        <styles.TextCard1>
          Como já falamos anteriormente, o lixo descartado irregularmente pela
          nossa cidade é um dos principais agentes causadores destes tipos de
          ocorrências. Com o objetivo de combater os problemas causados pelo
          descarte irregular de lixo nas ruas, a Comlurb é responsável pela
          limpeza da cidade do Rio de Janeiro.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
  );
}

export function Futuro(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          Futuro: programas, obras e planejamento
        </styles.TextCard>
        <styles.TextCard1>
          Como já falamos anteriormente, o lixo descartado irregularmente pela
          nossa cidade é um dos principais agentes causadores destes tipos de
          ocorrências. Com o objetivo de combater os problemas causados pelo
          descarte irregular de lixo nas ruas, a Comlurb é responsável pela
          limpeza da cidade do Rio de Janeiro.
        </styles.TextCard1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv1>
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
          Diego Oliveira <br />
          Judite Cypreste <br />
        </styles.TextCreditos1>
        <styles.TextCreditos className=" lg:mt-[40px] mt-[60px] ">
          Agradecimentos
        </styles.TextCreditos>
        <styles.TextCreditos1>
          Alexandre Reis <br />
          Ana Carla Badaro <br />
          Ana Rebouças <br />
          Flavio Lopes <br />
          Gabriel Gazola Milan
          <br />
          João Carabetta <br />
          Wanderson José dos Santos <br />
        </styles.TextCreditos1>
        <styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
          Parceria
        </styles.TextCreditos>
        <styles.TextCreditos1>
          Centro de Operações Rio <br />
          Companhia Municipal de Limpeza Urbana <br />
          Fundação Instituto das Águas do Município do Rio de Janeiro <br />
          Secretaria Municipal de Conservação <br />
        </styles.TextCreditos1>
        <styles.TextCreditos className=" lg:mt-[40px] mt-[60px]">
          Prefeito
        </styles.TextCreditos>
        <styles.TextCreditos1>Eduardo Paes</styles.TextCreditos1>
        <img
          src={logoed}
          className="mt-[100px] w-[120px] h-auto lg:w-[120px] lg:h-auto"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}
