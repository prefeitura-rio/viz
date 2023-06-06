import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";
import { isMobile } from "react-device-detect";

// IMAGENS
import logoed from "../images/logoed.png";
import logo from "../images/logo.png";
import capa from "../images/capa.gif";
import marco from "../images/marco.jpg";
import ranking from "../images/ranking.jpg";
import plano from "../images/plano.jpg";
import mapaplano from "../images/mapaplano.jpg";

import cep1 from "../images/cep1.png";
import cep2 from "../images/cep2.png";
import cep3 from "../images/cep3.gif";

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
          src={logo}
          className="absolute top-[5%] lg:absolute lg:top-[20px] h-11 lg:h-14"
        ></img>{" "}
        <styles.Title>Por que o Rio de Janeiro alaga? </styles.Title>
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
          <styles.Video>
            <video autoPlay muted className="w-full h-full" id="video_capa">
              <source src={video_capa} type="video/mp4" />
            </video>
          </styles.Video>
          <div className="flex justify-between">
            <div>
              <div className="mt-[30px] h-[3px] w-[20px] bg-black"></div>
              <styles.AuthorText className="mt-[8px] mr-[20px] lg:w-[420px]">
                Desenvolvido pela Equipe de Visualização de Dados do{" "}
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
            </div>
            <img src={logoed} className="mt-[30px] h-10 lg:h-12"></img>
          </div>
          <div className="h-[10px] w-[50px] bg-black mb-[10px]"></div>
          <styles.TextCard>Introdução</styles.TextCard>
          <styles.TextCard1>
            Dados do Alerta Rio, sistema de alerta de chuvas intensas e de
            deslizamentos em encostas do Rio de Janeiro, mostram que nunca
            choveu tanto na nossa cidade.
            <br />
            <br />
            Uma análise feita com base nos dados de ocorrências registradas pelo
            Centro de Operações da cidade (COR) desde 2018, mostra que a cidade
            já registrou pelo menos 3.937 incidentes causados pelas chuvas.
            Destes, 428 foram alagamentos e enchentes.
            <br />
            <br />E este não é um problema exclusivo nosso.
            <br />
            <br />
            Segundo a ONU, no último Painel Intergovernamental de Mudança do
            Clima, as fortes chuvas no mundo já são 0,3% mais frequentes e 6,7%
            mais intensas. Especialistas vêm alertando sobre as consequências
            deste fenômeno, que vem ameaçando a existência de regiões em todo o
            mundo.
            <br />
            <br />
            Com a elevação da temperatura da Terra, causada pelo Aquecimento
            Global, a retenção de umidade do ar é maior. Quando essa umidade se
            condensa, liberando calor ou energia, transforma chuviscos em
            tempestades. Com isso, enchentes, alagamentos e todas as ocorrências
            provocadas pelas chuvas se tornam ainda mais comuns.
            <br />
            <br />
            Com estas informações, talvez vocês esteja se perguntando se este é
            mais um material elaborado para os telejornais ficarem falando que
            “a chuva castiga os cariocas”. (Sim, nos conhecemos o meme). Mas
            não, esta não é nossa intenção.
            <br />
            <br />
            Neste especial do Escritório de Dados, elaborado em parceria com a
            Comlurb, o COR, a Fundação Rio-Águas e a Secretaria Municipal de
            Conservação (SECONSERVA), explicaremos como o aquecimento global, o
            lixo e até mesmo o vandalismo, vêm fazendo com que a nossa cidade
            sofra ainda mais com alagamentos e enchentes. E como a Prefeitura
            trabalha para mitigar estes problemas.
          </styles.TextCard1>
          <div className="mt-[140px] h-[10px] w-[50px] bg-black mb-[10px]"></div>
          <styles.TextCard>Contexto histórico dos alagamentos</styles.TextCard>
          <styles.TextCard1 className="lg:mb-[60px]">
            Existem diversos motivos pelos quais uma cidade como a nossa sofre
            com estes problemas. Mas antes, precisamos falar um pouco sobre como
            a nossa cidade foi criada e como as escolhas do passado
            contribuíram, infelizmente, para que estes problemas fossem muito
            comuns.
          </styles.TextCard1>
          {/* <img src={marco} className="h-auto w-auto lg:mt-[60px]"></img> */}
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
      <styles.ContainerCard3 id={"quadro_um_card1"}>
        <styles.TextCard3>
          Esse é o Rio como você conhece hoje. Foram diversas mudanças até
          chegarmos aqui e em 458 anos de história, muita coisa mudou.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card2"} className=" top-[100vh]">
        <styles.TextCard3>
          A ligação da nossa cidade com a água está no nosso nome.
          Originalmente, a cidade possuía diversos{" "}
          <styles.TextHighlightBlue>cursos de água</styles.TextHighlightBlue>,
          que a cortavam por todas as regiões. Utilizados como cursos náuticos
          para transporte de passageiros e cargas.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card3"} className=" top-[160vh]">
        <styles.TextCard3>
          Graças ao processo de urbanização, diversos rios e mangues foram
          <styles.TextHighlightBlueUm>
            aterrados ou canalizados.
          </styles.TextHighlightBlueUm>{" "}
          Sem muito planejamento urbano, estes processos não consideraram as
          dinâmicas de cheias destes rios.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card4"} className=" top-[270vh]">
        <styles.TextCard3>
          Uma destas regiões é a do Saco do São Diogo, localizada entre a Praça
          XI e a Baía de Guanabara.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card5"} className=" top-[400vh]">
        <styles.TextCard3>
          Com o seu aterramento, surgiu a atual Avenida Francisco Bicalho e a
          canalização do rio deu lugar ao atual canal do Mangue, no bairro da
          Cidade Nova.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card6"} className=" top-[515vh]">
        <styles.TextCard3>
          Por isso, a região naturalmente ainda registrará{" "}
          <styles.TextHighlightBlueDois>
            alagamentos
          </styles.TextHighlightBlueDois>{" "}
          sempre que as chuvas forem mais fortes que a capacidade de drenagem.
          Desde 2018, o bairro da Cidade Nova já registrou 51 casos ocorrências
          provocadas pelas chuvas.
        </styles.TextCard3>
      </styles.ContainerCard3>
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
          Seja por eventos naturais ou pela ação humana, a função de uma boa
          gestão pública é mitigar estes problemas e evitar que eles interrompam
          o funcionamento das atividades na cidade.
          <br />
          <br />A seguir, explicaremos para você alguns dos principais motivos
          pelos quais a nossa cidade é um território propício para que este tipo
          de incidente ocorra de forma tão frequente.
        </styles.TextCard1>
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
          A impermeabilização do solo, resultado do excesso de asfalto e
          construções, é uma das principais causas dos frequentes alagamentos e
          enchentes que atingem o Rio de Janeiro.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[50vh]">
        <styles.TextCard3>
          A urbanização desenfreada comprometeu a capacidade do solo de absorver
          a água da chuva, dificultando desta forma o escoamento e aumentando o
          risco de inundações.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[100vh]">
        <styles.TextCard3>
          Além disso, a cidade costeira, rodeada pela Baía de Guanabara, sofre
          com a influência direta da maré alta.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[150vh]">
        <styles.TextCard3>
          Durante chuvas intensas, a água, que já não é absorvida pelo solo, não
          consegue também ser escoada para o mar, acumulando-se então nas ruas e
          causando transtornos para os cariocas.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[300vh]">
        <styles.TextCard3>
          Infelizmente, o lixo é um grande vilão quando se trata de alagamentos
          e enchentes em nossa cidade. Jogados de forma incorreta nas ruas, o
          lixo entope os bueiros, causando os chamados bolsões d'água.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[400vh]">
        <styles.TextCard3>
          Diariamente, a Comlurb recolhe cerca de 9.000 toneladas de resíduos em
          toda a cidade. Desse montante, 3.600 toneladas são lixo público,
          jogados pelas ruas do Rio.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[470vh]">
        <styles.TextCard3>
          Nosso sistema de saneamento conta a rede de esgoto, a rede fluvial,
          responsável pela canalização dos rios e também com a rede pluvial, que
          capta a água da chuva.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[570vh]">
        <styles.TextCard3>
          Esse problema fica ainda pior quando uma tampa de bueiro é alvo de
          ladrões.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[620vh]">
        <styles.TextCard3>
          Essas proteções são essenciais para impedir que o lixo arrastado pela
          chuva prejudique o bom escoamento e chegue até os rios. Além disso, os
          furtos colocam em risco a segurança de pedestres e motoristas.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[670vh]">
        <styles.TextCard3>
          Desde o início deste ano, a SECONSERVA já precisou repor 862 tampas e
          grelhas em toda a cidade, um prejuízo de R$ 204.183,90 aos cofres
          públicos.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[720vh]">
        <styles.TextCard3>
          Esse problema se torna ainda pior quando as papeleiras espalhadas pela
          cidade são furtadas ou vandalizadas, dificultando o descarte correto
          do lixo.
        </styles.TextCard3>
      </styles.ContainerCard3>
      <styles.ContainerCard3 id={"quadro_um_card1"} className=" top-[750vh]">
        <styles.TextCard3>
          Em média, 500 a 600 unidades de papeleiras são furtadas ou danificadas
          mensalmente, totalizando cerca de 6.000 ao ano. O prejuízo para os
          cofres públicos é significativo. Segundo a companhia, o valor chega a
          aproximadamente R$ 900 mil por ano, considerando o valor da última
          compra de lixeiras (R$149,77 a unidade).
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
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <div className="h-[10px] w-[50px] bg-black mb-[10px]"></div>
        <styles.TextCard>Ações da Prefeitura</styles.TextCard>
        <styles.TextCard1>
          Sabendo destes problemas, cabe a Prefeitura do Rio um papel
          fundamental na prevenção contra enchentes e alagamentos em nossa
          cidade.
          <br />
          <br />
          As medidas para mitigar os efeitos podem ser tomadas antes, durante ou
          como planejamento de obras específicas contra enchentes e alagamentos.
          <br />
          <br />A seguir, você verá uma série de ações realizadas pela
          Prefeitura para combater este problema.
        </styles.TextCard1>
        <div className="mt-[140px] h-[10px] w-[50px] bg-black mb-[10px]"></div>
        <styles.TextCard>Rotina</styles.TextCard>
        <styles.TextCard1>
          Como já falamos anteriormente, o lixo descartado irregularmente pela
          nossa cidade é um dos principais agentes causadores destes tipos de
          ocorrências. Com o objetivo de combater os problemas causados pelo
          descarte irregular de lixo nas ruas, a Comlurb é responsável pela
          limpeza da cidade do Rio de Janeiro.
          <br />
          <br />
          Com uma frota de 107 caminhões basculantes, a empresa realiza a
          remoção de lixo público, tanto depositado corretamente em papeleiras
          quanto jogado de forma errada nas ruas e avenidas. E se o lixo estiver
          na praia, um dos 25 tratores para a limpeza da areia também pode ser
          utilizado no serviço.
          <br />
          <br />
          Outra ação importante é a coleta domiciliar em toda a cidade, com
          caminhões compactadores, três vezes por semana, em dias alternados,
          podendo ser no período diurno ou noturno. Nas comunidades cariocas, a
          coleta é diária, com a utilização de 34 tratores disponíveis.
          <br />
          <br />
          Após a coleta, os resíduos são levados em caminhões para uma das cinco
          Estações de Transferência de Resíduos (ETRs), onde são selecionados e
          encaminhados em grandes carretas para o destino final, o Centro de
          Tratamento de Resíduos Rio (CTR-Rio), localizado em Seropédica.
          <br />
          <br />
          Além da limpeza, a Prefeitura, por meio da SECONSERVA, também realiza
          a conservação e a manutenção da infraestrutura urbana da cidade. Sendo
          responsável pela limpeza e desobstrução das galerias, bueiros, ralos e
          galerias de águas pluviais da cidade, o órgão conta com 288
          funcionários responsáveis pelos servidores de drenagem de águas e 19
          caminhões que auxiliam neste serviço.
        </styles.TextCard1>
        <div className="mt-[140px] h-[10px] w-[50px] bg-black mb-[10px]"></div>
        <styles.TextCard>Obras e Projetos</styles.TextCard>
        <styles.TextCard1>
          Além de ações de rotina, a Prefeitura conta com um planejamento
          específico para o período com mais chuvas na cidade: o verão carioca.
          <br />
          <br />
          Com ações adotadas por mais de 30 órgãos municipais, secretarias e
          subprefeituras, o chamado Plano Verão tem o objetivo de minimizar os
          impactos das chuvas na cidade, especialmente entre os meses de
          novembro e abril, considerados os mais críticos.
          <br />
          <br />
          Das 235 obras de infraestrutura previstas pelo plano, 111 têm como
          objetivo o enfrentamento contra enchentes e alagamentos na cidade.
          <br />
          <br />
          Elas contribuirão para a recuperação de encostas e desobstrução de
          canaletas de drenagem em morros e importantes avenidas da cidade, como
          na Rocinha, no Santa Marta, na Avenida Niemeyer e na Estrada
          Grajaú-Jacarepaguá, além de reduzir alagamentos e eliminar pontos
          críticos de drenagem, como no Jardim Maravilha, em Guaratiba, na
          Comunidade do Rollas, em Santa Cruz, e em Vila Ieda, em Campo Grande.
          <br />
          <br />
          Além das obras, o Plano Verão também prevê um investimento de R$ 121
          milhões em 27 contratos de manutenção referentes à limpeza, ao
          desassoreamento e à manutenção de rios como o Rio Acari, o Rio Ita
          (Santa Cruz), o Rio Campinho (Campo Grande), entre outros. Incluem
          ainda os serviços de limpeza, conservação e reparo de galerias
          pluviais. E a recuperação estrutural e a limpeza de canaletas de
          drenagem em encostas, além de manutenção e operação dos reservatórios.
          <br />
          <br />
          Outra frente do Plano Verão é a Operação Ralo Limpo, que já retirou 42
          toneladas de resíduos e desobstruiu mais de 4 mil ralos em mais de 300
          pontos de alagamentos e bolsões de água em todas as regiões da cidade.
          A ação, iniciada em julho do ano passado, foi feita com base no
          mapeamento das vias com ocorrência de alagamento realizado pelo COR,
          Rio Águas e subprefeituras. O trabalho envolveu profissionais da
          Comlurb e da Secretaria de Conservação e é imprescindível para
          acelerar o escoamento depois das chuvas, reduzindo os alagamentos.
        </styles.TextCard1>
        <br />
        <br />
        <styles.Grafico>
          <iframe
            className="w-full h-[350px] lg:h-[500px] aspect-video"
            title="Localização das obras do Plano Verão"
            scrolling="no"
            frameBorder="0"
            id="datawrapper-chart-6bdNe"
            aria-label="Mapa"
            src="https://datawrapper.dwcdn.net/6bdNe/1/"
          ></iframe>
        </styles.Grafico>
        <br />
        <br />
        <styles.Grafico>
          <iframe
            className="w-full h-[350px] lg:h-[500px] aspect-video"
            title="Maioria das obras do Plano Verão está localizada na Zona Oeste"
            scrolling="no"
            frameBorder="0"
            id="datawrapper-chart-cRBSZ"
            aria-label="Gráfico de coluna"
            src="https://datawrapper.dwcdn.net/cRBSZ/1/"
          ></iframe>
        </styles.Grafico>
        <div className="mt-[140px] h-[10px] w-[50px] bg-black mb-[10px]"></div>
        <styles.TextCard>E quando chove?</styles.TextCard>
        <styles.TextCard1>
          Mesmo com as ações de rotina, durante as épocas de chuva é comum que a
          cidade ainda enfrente problemas com enchentes e alagamentos. É aí que
          entra o COR.
          <br />
          <br />
          O COR é o órgão responsável por monitorar e integrar a cidade em áreas
          essenciais como mobilidade urbana e a meteorologia. Foi inaugurado em
          dezembro de 2010 como o primeiro equipamento olímpico entregue pela
          Prefeitura do Rio à cidade e seu legado permanece até hoje,
          funcionando 24h por dia, sete dias na semana.
          <br />
          <br />
          Utilizando radares meteorológicos, o COR é capaz de monitorar as
          condições climáticas e avisar aos 33 órgãos parceiros das chuvas,
          ativando uma rede de ações em tempo real durante a mudança de estágio
          de mobilidade.
          <br />
          <br />
          Por meio de suas 2.500 câmeras de monitoramento espalhadas pela
          cidade, o COR localiza os pontos de alagamento e notifica os órgãos
          responsáveis para agir o mais rapidamente possível contra o problema.
          <br />
          <br />
          Como já dissemos, quase sempre o problema é devido a algum lixo que
          esta impedindo o escoamento das chuvas para as galerias da cidade. Por
          isso, ao identificar algum ponto de alagamento, o COR notifica em
          primeiro lugar a Comlurb, que envia uma equipe para realizar a
          desobstrução e a limpeza do ralo.
          <br />
          <br />
          Caso o problema persista, a SECONSERVA é acionada para solucionar a
          questão. O objetivo do COR é garantir que a cidade esteja preparada
          para enfrentar os desafios climáticos e minimizar os impactos na vida
          dos cariocas.
        </styles.TextCard1>
        <div className="mt-[140px] h-[10px] w-[50px] bg-black mb-[10px]"></div>
        <styles.TextCard>
          Futuro: Programas, Obras e Planejamento
        </styles.TextCard>
        <styles.TextCard1>
          A Rio Águas é a empresa responsável pelo gerenciamento das águas
          pluviais e de esgoto na cidade do Rio de Janeiro. Para cumprir sua
          missão de prevenir inundações e alagamentos, a empresa utiliza
          diversas fontes de dados para monitorar e antecipar eventos climáticos
          extremos, incluindo registros históricos de enchentes e alagamentos em
          diferentes áreas da cidade.
          <br />
          <br />A Prefeitura sabe desses problemas e trabalha constantemente
          para que eles não prejudiquem a vida dos cariocas. Porque sim, moramos
          numa cidade maravilhosa, e temos muito orgulho disso.
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
          Mylenna Merlo <br />
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
          className="lg:mb-[160px] mt-[100px] w-[120px] h-auto lg:w-[120px] lg:h-auto"
        ></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}
