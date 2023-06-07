import styled from "styled-components";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import compensacao from "../images/compensacao.png";
import passageiros from "../images/passageiros.png";
import saude1 from "../images/saude1.png";
import saude2 from "../images/saude2.png";
import educacao1 from "../images/educacao1.png";
import educacao2 from "../images/educacao2.png";
import emprego1 from "../images/emprego1.png";
import emprego2 from "../images/emprego2.png";
import scroll from "../images/scroll1.gif";
import fluxo from "../images/fluxo.gif";
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
      <img
        src={logo2}
        className="absolute top-[5%] lg:absolute lg:top-[20px] h-11 lg:h-14"
      ></img>
      <styles.Title>
        Um ponto de virada na história do transporte municipal do Rio de Janeiro
      </styles.Title>
      <styles.AuthorText className="px-6 py-0">
        Desenvolvido por{" "}
        <a
          className="font-bold decoration-1 underline-offset-1"
          href="https://www.dados.rio/"
          target="_blank"
          rel="noreferrer"
        >
          Escritório de Dados{" "}
        </a>
        e{" "}
        <a
          className="font-bold decoration-1 underline-offset-1"
          href="http://www.rio.rj.gov.br/web/smtr"
          target="_blank"
          rel="noreferrer"
        >
          Secretaria Municipal de Transportes
        </a>
      </styles.AuthorText>
      <img
        src={scroll}
        className="absolute bottom-[15%] lg:absolute lg:bottom-[25%] h-14 lg:h-14"
      ></img>
      {/* <styles.Interactive>
          Mapas interativos:{" "}
          <a
            className="font-bold decoration-1 underline-offset-1"
            href="/#/especial-sppo/interactive"
            target="_blank"
            rel="noreferrer"
          >
            Linhas que voltaram
          </a>
          <br />e{" "}
          <a
            className="font-bold decoration-1 underline-offset-1"
            href="https://mapa-subsidio.dados.rio/"
            target="_blank"
            rel="noreferrer"
          >
            Até onde você consegue chegar em 2h de ônibus?
          </a>
        </styles.Interactive> */}
    </styles.CapaDiv>
  );
}

export function Intro(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard>
        <styles.IntroTitle>Introdução</styles.IntroTitle>
        <styles.TextCard>
          Desde o dia 1º de junho de 2022, quando o acordo entre Prefeitura,
          Ministério Público e empresas de ônibus entrou em vigor, os cariocas
          puderam ver, assim como no mapa acima (
          <a
            className="font-bold decoration-1 underline-offset-1"
            href="/#/especial-sppo/interactive"
            target="_blank"
            rel="noreferrer"
          >
            clique aqui
          </a>{" "}
          para ver melhor este mapa interativo), a volta de 71 linhas de ônibus
          às ruas da capital fluminense.
          <br />
          <br />
          Além disso, esse acordo concedeu à Prefeitura o pleno domínio de toda
          a atividade de transporte municipal de ônibus na cidade, permitindo o
          monitoramento completo dos dados, desde a catraca até a garagem.
          <br />
          <br />
          A gente sabe bem dos problemas cotidianos enfrentados no transporte
          público da cidade do Rio de Janeiro. E é por isso que a Prefeitura
          está trabalhando para melhorar a mobilidade na nossa cidade
          maravilhosa.
          <br />
          <br />
          Nesta reportagem especial, feita pelo Escritório de Dados,
          explicaremos como estamos fazendo isso.
          <br />
          <br />
          Para saber mais sobre a importância do transporte público da cidade,
          <a
            className="font-bold decoration-1 underline-offset-1"
            href="https://mapa-subsidio.dados.rio/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            navegue neste mapa interativo
          </a>
          , que mostrará até qual distância é possível chegar em até duas horas,
          partindo de cada bairro do Rio de Janeiro, e utilizando o transporte
          público da cidade (ônibus, BRT, metrô, trem e van).
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Mapalinhas(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterMapDiv id={props.id} ref={props.ref}></styles.ChapterMapDiv>
  );
}

export function Textomapalinhas(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard>
        <styles.TextCardBig>
          <styles.TextHighlight>
            71 Linhas retomadas pós acordo judicial <br />
          </styles.TextHighlight>{" "}
        </styles.TextCardBig>
        <br />
        <div>
          <styles.TextHighlightRed>21 na Zona Oeste</styles.TextHighlightRed>{" "}
          <styles.TextHighlightBlue>
            15 na Barra/Jacarepaguá
          </styles.TextHighlightBlue>{" "}
          <styles.TextHighlightGreen>
            16 na Zona Norte
          </styles.TextHighlightGreen>{" "}
          <styles.TextHighlightYellow>
            15 na Zona Sul
          </styles.TextHighlightYellow>
        </div>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Historia1(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv1 id={props.id} ref={props.ref}>
      <styles.ContainerCard2>
        <styles.IntroTitle>
          A história do transporte por ônibus na cidade
        </styles.IntroTitle>
        <styles.TextCard>
          Desde os anos 60, o sistema de transporte por ônibus na cidade do Rio
          de Janeiro funcionava por meio de permissões dadas às empresas.
          Entretanto, sem contratos ou licitações, o processo era feito sem
          muito controle público ou monitoramento do serviço pela cidade.
          <br />
          <br />
          Foi em 2010, que a Secretaria Municipal de Transportes do Rio de
          Janeiro realizou a primeira licitação para a prestação do serviço. A
          partir de então, os consórcios selecionados passaram a operar as
          linhas de ônibus do município, em regime de concessão.
          <br />
          <br />
          As empresas vencedoras tinham então a responsabilidade pelo
          transporte, ficando não só responsáveis pela operação de todas as
          linhas municipais, como também da fonte de renda do sistema, o Bilhete
          Único Carioca (BUC).
          <br />
          <br />
          Após anos em vigor, a concessão, entretanto, apresentou problemas: a
          má gestão dos concessionários com o serviço oferecido e uma grande
          <styles.TextHighlight className="inline-block">
            crise reputacional do sistema,
          </styles.TextHighlight>
          envolvida em diversos escândalos.
          <br />
          <br />
          Além disso, havia a falta de transparência da arrecadação do sistema
          de bilhete único. Uma verdadeira{" "}
          <styles.TextHighlight>caixa-preta</styles.TextHighlight> era formada
          com os dados de arrecadação e distribuição dos lucros adquiridos pelas
          empresas.
          <br />
          <br />
          Os valores não tinham publicidade, mesmo com os recorrentes pedidos da
          Prefeitura para ter acesso às quantias ganhas pelos concessionários
          nas operações.
        </styles.TextCard>
        <styles.IntroTitle className="mt-[120px] lg:mt-[140px]">
          Pandemia
        </styles.IntroTitle>
        <styles.TextCard>
          Com a chegada da Covid-19, a situação se agravou. Com as restrições
          sanitárias, o transporte público ficou menos movimentado e o número de
          passageiros, que já apresentava queda nos últimos anos, diminuiu ainda
          mais.
        </styles.TextCard>
        <img src={passageiros} className="w-full h-auto my-[45px]"></img>
        <styles.TextCard>
          Como resultado, víamos veículos lotados e a cobertura do transporte
          público diminuindo na cidade, com{" "}
          <styles.TextHighlight>
            58% dos serviços inoperantes, funcionando com apenas 20% da frota
            determinada.
          </styles.TextHighlight>
        </styles.TextCard>
        <styles.IntroTitle className="mt-[120px] lg:mt-[140px]">
          O ponto de virada
        </styles.IntroTitle>
        <styles.TextCard>
          Com uma situação alarmante, o descrédito do transporte por ônibus na
          cidade e a queda no número de passageiros, a Prefeitura decidiu
          reformular este sistema. Entretanto, para que isso fosse implementado,
          foi preciso muito diálogo.
          <br />
          <br />
          Foi exigido um grande esforço de negociação entre as diversas partes,
          com muita transparência. Afinal de contas, não bastava um entendimento
          entre prefeitura e empresas de ônibus. Era preciso também o
          envolvimento do Ministério Público e do judiciário, chancelando e
          acompanhando qualquer decisão tomada.
          <br />
          <br />
          Assim, uma nova proposta de administração foi então pensada e
          aprovada.
        </styles.TextCard>
        <styles.IntroTitle className="mt-[120px] lg:mt-[140px]">
          O fim da caixa preta
        </styles.IntroTitle>{" "}
        <styles.TextCard>
          Com o novo acordo judicial, os consórcios de ônibus abriram mão da
          administração do BRT e do sistema de bilhetagem, além de serem
          obrigados a fornecer todas as informações sobre a arrecadação.
          <br />
          <br />
          Assim, a Prefeitura do Rio homologou a concessão da bilhetagem digital
          do transporte público municipal com o objetivo de implementar um novo
          modelo de bilhetagem eletrônica no transporte público até junho de
          2024.
          <br />
          <br />
          O antigo sistema Riocard será substituído pelo Jaé, em um contrato de
          duração de 12 anos, que pode ser prorrogado por mais 12 anos.
          <br />
          <br />
          A Jaé será responsável por receber o valor das passagens, ficando com
          4% do montante arrecadado e repassando o restante para a gestão
          municipal.
          <br />
          <br />
          Já os repasses para as empresas de ônibus serão feitas pela Prefeitura
          considerando a quantidade de linhas, o número de passageiros e os
          quilômetros percorridos.
          <br />
          <br />
          Desta forma, a passagem no atual valor de R$ 4,30 para o cidadão
          continuará a ser subsidiada pela Prefeitura, que paga a diferença do
          valor real da tarifa para as empresas, de acordo com os km rodado em
          cada linha de ônibus.
          <br />
          <br />
          Tudo é controlado por meio do monitoramento em tempo real dos GPS
          instalados na frota de ônibus cariocas. Os recursos serão somente
          repassados para as empresas que estiverem com GPS funcionando
          corretamente associados às linhas que estiverem operando.
          <br />
          <br />
          Em caso de não cumprimento do acordo, ou seja, caso o empresário não
          cumpra com a quilometragem requisitada pela Prefeitura, nenhum valor
          adicional da tarifa de R$ 4,30 será repassado e sua concessão poderá
          ser cancelada.
          <br />
          <br />
          Este novo sistema permite o total controle da arrecadação com as
          passagens e mais transparência para o carioca.
        </styles.TextCard>
        <img
          src={compensacao}
          className="h-auto w-auto mt-[60px] lg:mt-[90px]"
        ></img>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv1>
  );
}

// export function Mapaum(
//   props = {
//     id: "",
//     ref: null,
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <styles.ChapterMapDiv id={props.id} ref={props.ref}>
//       Mapa - 24% dos serviços operando conforme o determinado
//     </styles.ChapterMapDiv>
//   );
// }

// export function Textomapaum(
//   props = {
//     id: "",
//     ref: null,
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
//       <styles.ContainerCard>
//         <styles.TextCardBig>
//           <styles.TextHighlightGreen>24%</styles.TextHighlightGreen> dos
//           serviços operando conforme o determinado.{" "}
//           <styles.TextCard1 className="mt-[10px] lg:mt-[10px]">
//             Entre 80% e 100% da frota determinada.
//           </styles.TextCard1>
//         </styles.TextCardBig>
//       </styles.ContainerCard>
//     </styles.ChapterGenericDiv>
//   );
// }

// export function Mapadois(
//   props = {
//     id: "",
//     ref: null,
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <styles.ChapterMapDiv id={props.id} ref={props.ref}>
//       Mapa - 18% dos serviços com operação irregular
//     </styles.ChapterMapDiv>
//   );
// }

// export function Textomapadois(
//   props = {
//     id: "",
//     ref: null,
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
//       <styles.ContainerCard>
//         <styles.TextCardBig>
//           <styles.TextHighlightYellow>18%</styles.TextHighlightYellow> dos
//           serviços com operação irregular.{" "}
//           <styles.TextCard1 className="mt-[10px] lg:mt-[10px]">
//             Entre 20% e 80% da frota determinada.
//           </styles.TextCard1>
//         </styles.TextCardBig>
//       </styles.ContainerCard>
//     </styles.ChapterGenericDiv>
//   );
// }

// export function Mapatres(
//   props = {
//     id: "",
//     ref: null,
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <styles.ChapterMapDiv id={props.id} ref={props.ref}>
//       Mapa - 58% dos serviços inoperantes
//     </styles.ChapterMapDiv>
//   );
// }

// export function Textomapatres(
//   props = {
//     id: "",
//     ref: null,
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
//       <styles.ContainerCard>
//         <styles.TextCardBig>
//           <styles.TextHighlightRed>58%</styles.TextHighlightRed> dos serviços
//           inoperantes.{" "}
//           <styles.TextCard1 className="mt-[10px] lg:mt-[10px]">
//             Abaixo de 20% da frota determinada.
//           </styles.TextCard1>
//         </styles.TextCardBig>
//       </styles.ContainerCard>
//     </styles.ChapterGenericDiv>
//   );
// }

export function Virada(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv1 id={props.id} ref={props.ref}>
      <styles.ContainerCard2>
        <styles.IntroTitle>O ponto de virada</styles.IntroTitle>
        <styles.TextCard>
          Com uma situação alarmante, o descrédito do transporte por ônibus na
          cidade e a queda no número de passageiros, a Prefeitura decidiu
          reformular este sistema. Entretanto, para que isso fosse implementado,
          foi preciso muito diálogo.
          <br />
          <br />
          Foi exigido um grande esforço de negociação entre as diversas partes,
          com muita transparência. Afinal de contas, não bastava um entendimento
          entre prefeitura e empresas de ônibus. Era preciso também o
          envolvimento do Ministério Público e do judiciário, chancelando e
          acompanhando qualquer decisão tomada.
          <br />
          <br />
          Assim, uma nova proposta de administração foi então pensada e
          aprovada.
        </styles.TextCard>
        <styles.IntroTitle className="mt-[120px] lg:mt-[140px]">
          O fim da caixa preta
        </styles.IntroTitle>{" "}
        <styles.TextCard>
          Com o novo acordo judicial, os consórcios de ônibus abriram mão da
          administração do BRT e do sistema de bilhetagem, além de serem
          obrigados a fornecer todas as informações sobre a arrecadação.
          <br />
          <br />
          Assim, a Prefeitura do Rio homologou a concessão da bilhetagem digital
          do transporte público municipal com o objetivo de implementar um novo
          modelo de bilhetagem eletrônica no transporte público até junho de
          2024.
          <br />
          <br />
          O antigo sistema Riocard será substituído pelo Jaé, em um contrato de
          duração de 12 anos, que pode ser prorrogado por mais 12 anos.
          <br />
          <br />
          A Jaé será responsável por receber o valor das passagens, ficando com
          4% do montante arrecadado e repassando o restante para a gestão
          municipal.
          <br />
          <br />
          Já os repasses para as empresas de ônibus serão feitas pela Prefeitura
          considerando a quantidade de linhas, o número de passageiros e os
          quilômetros percorridos.
          <br />
          <br />
          Desta forma, a passagem no atual valor de R$ 4,30 para o cidadão
          continuará a ser subsidiada pela Prefeitura, que paga a diferença do
          valor real da tarifa para as empresas, de acordo com os km rodado em
          cada linha de ônibus.
          <br />
          <br />
          Tudo é controlado por meio do monitoramento em tempo real dos GPS
          instalados na frota de ônibus cariocas. Os recursos serão somente
          repassados para as empresas que estiverem com GPS funcionando
          corretamente associados às linhas que estiverem operando.
          <br />
          <br />
          Em caso de não cumprimento do acordo, ou seja, caso o empresário não
          cumpra com a quilometragem requisitada pela Prefeitura, nenhum valor
          adicional da tarifa de R$ 4,30 será repassado e sua concessão poderá
          ser cancelada.
          <br />
          <br />
          Este novo sistema permite o total controle da arrecadação com as
          passagens e mais transparência para o carioca.
        </styles.TextCard>
        <img
          src={compensacao}
          className="h-auto w-auto mt-[60px] lg:mt-[90px]"
        ></img>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv1>
  );
}

export function Foco(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard>
        <styles.IntroTitle>Foco onde mais precisa</styles.IntroTitle>
        <styles.TextCard>
          Após este período de um ano, a Prefeitura conseguiu restabelecer 71
          linhas de ônibus que estavam inoperantes desde o período da gestão
          anterior.
          <br />
          <br />
          Ao todo, 21 linhas retornaram as atividades na Zona Oeste, 16 na Zona
          Norte e 15 na Barra, Jacarepaguá e Zona Sul.
          <br />
          <br />
          Além disso, 636 pontos de ônibus também voltaram a ser utilizados em
          toda a cidade.
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Antes(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterMapDiv id={props.id} ref={props.ref}>
      Shape com a área de mobilidade de um bairro X antes do acordo
    </styles.ChapterMapDiv>
  );
}

export function Depois(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      {" "}
      <styles.ChapterMapDiv id={props.id} ref={props.ref}>
        Shape com a área de mobilidade de um bairro X depois do acordo
      </styles.ChapterMapDiv>
    </styles.ChapterGenericDiv>
  );
}

export function Mapapontos(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterMapDiv id={props.id} ref={props.ref}></styles.ChapterMapDiv>
  );
}

export function Textomapapontos(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard>
        <styles.TextCardBig>
          <styles.TextHighlight>
            636 Pontos de ônibus que voltaram a ter atendimento
          </styles.TextHighlight>{" "}
        </styles.TextCardBig>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Fim(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv1 id={props.id} ref={props.ref}>
      <styles.ContainerCard2>
        <styles.IntroTitle>
          Melhoria na saúde, na educação e no trabalho
        </styles.IntroTitle>
        <styles.TextCard>
          Com a volta das linhas de ônibus, o carioca sentiu também a volta da
          facilidade de acesso a equipamentos de saúde, educação e a
          oportunidades de emprego.
          <br />
          <br />
          Em 90 minutos, o acesso aos equipamentos de saúde aumentou em 55% da
          população da cidade até final de julho. As regiões de Santa Cruz,
          Guaratiba e Campo Grande foram as mais beneficiadas nesse contexto.
        </styles.TextCard>
        <styles.Grafico>
          <img src={emprego1} className="w-full h-auto my-[45px]"></img>
          <img src={emprego2} className="w-full h-auto my-[45px]"></img>
        </styles.Grafico>
        <styles.TextCard>
          Já o acesso à educação melhorou para 64% da população da cidade, com
          destaque para as mesmas regiões.
        </styles.TextCard>
        <img src={saude1} className="w-full h-auto my-[45px]"></img>
        <img src={saude2} className="w-full h-auto my-[45px]"></img>
        <styles.TextCard>
          As oportunidades de emprego ficaram mais fáceis de serem acessadas
          para 57% da população. Para os moradores de Santa Cruz, Ilha do
          Governador e Campo Grande o acesso ficou ainda melhor.
        </styles.TextCard>
        <img src={educacao1} className="w-full h-auto my-[45px]"></img>
        <img src={educacao2} className="w-full h-auto my-[45px]"></img>
        <styles.IntroTitle className="mt-[120px] lg:mt-[140px]">
          Comprometimento da Prefeitura para melhoria da vida do carioca
        </styles.IntroTitle>
        <styles.TextCard>
          Após um ano de implementação do subsídio, o carioca consegue
          aproveitar os impactos positivos dessa iniciativa pioneira no
          transporte público da cidade.
          <br />
          <br />
          Desde a sua adoção, milhares de passageiros têm suas linhas de ônibus
          de volta, permitindo um deslocamento mais eficiente pela cidade.
          <br />
          <br />
          Além disso, o subsídio contribuiu para a modernização o sistema de
          bilhetagem de ônibus, garantindo a transparência de toda a operação.
          <br />
          <br />
          Com base nesses resultados, é evidente que o subsídio para ônibus tem
          sido uma estratégia eficaz para melhorar a mobilidade urbana e
          promover a qualidade de vida dos cariocas.
        </styles.TextCard>
        <styles.TextCard>
          <styles.FimTitle1 className="mt-[200px] lg:mt-[200px] lg:mb-[48px] mb-[32px]">
            Créditos
          </styles.FimTitle1>
          <styles.FimTitle>Autores</styles.FimTitle>
          Caio Jacintho <br />
          Diego Oliveira <br />
          Gabriel Gazola <br />
          João Carabetta <br />
          Judite Cypreste
          <br />
          <br />
          <styles.FimTitle>Agradecimentos</styles.FimTitle>
          Bernardo Serra <br />
          Fernanda Scovino <br />
          Guilherme Braga <br />
          Lauro Silvestre
          <br />
          Maína Celidonio
          <br />
          <styles.FimTitle>Prefeito</styles.FimTitle>
          Eduardo Paes <br />
          <img src={logo} className="h-12 mt-[12vh] lg:h-16"></img>
        </styles.TextCard>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv1>
  );
}

// export function GraficoDolar(
//   props = {
//     id: "",
//     progress: 0,
//   }
// ) {
//   props = setDefaultProps(props);

//   return (
//     <styles.ChapterGraficoDiv id={props.id}>
//       <styles.Fundo id={"pin-dolar"}>
//         <styles.Grafico>
//           <iframe
//             class="w-full aspect-video"
//             title="Preço médio do dólar"
//             scrolling="no"
//             frameBorder="0"
//             id="datawrapper-chart-bv5y3"
//             aria-label="Gráfico de coluna"
//             src="https://datawrapper.dwcdn.net/bv5y3/2/"
//           ></iframe>
//         </styles.Grafico>
//       </styles.Fundo>
//       <styles.ContainerCard className="z-50">
//         <styles.TextCard>
//           A alta do dólar durante a crise sanitária que assolou o mundo explica
//           essa equação: como as peças e ferramentas são feitas fora do país, o
//           seu valor subiu substancialmente nos últimos anos e consertar ou
//           comprar novos veículos ficou ainda mais caro.
//         </styles.TextCard>
//       </styles.ContainerCard>
//     </styles.ChapterGraficoDiv>
//   );
// }

// export function GraficoDiesel(
//   props = {
//     id: "",
//     progress: 0,
//   }
// ) {
//   props = setDefaultProps(props);

//   return (
//     <styles.ChapterGraficoDiv id={props.id}>
//       <styles.Fundo id={"pin-diesel"}>
//         <styles.Grafico>
//           <iframe
//             class="w-full aspect-video"
//             title="Preço médio do diesel"
//             scrolling="no"
//             frameBorder="0"
//             id="datawrapper-chart-8l6Uo"
//             aria-label="Gráfico de coluna"
//             src="https://datawrapper.dwcdn.net/8l6Uo/2/"
//           ></iframe>
//         </styles.Grafico>
//       </styles.Fundo>
//       <styles.ContainerCard className="z-50">
//         <styles.TextCard>
//           Soma-se a isso outro problema, conhecido pelos brasileiros: a alta dos
//           combustíveis no país. Para efeitos de comparação, o valor do diesel
//           subiu de R$3,75/L em 2019 para R$6,91/L em 2022.
//         </styles.TextCard>
//       </styles.ContainerCard>
//     </styles.ChapterGraficoDiv>
//   );
// }

// export function GraficoPassageiros(
//   props = {
//     id: "",
//     progress: 0,
//   }
// ) {
//   props = setDefaultProps(props);

//   return (
//     <styles.ChapterGraficoDiv id={props.id}>
//       <styles.Fundo id={"pin-passageiros"}>
//         <styles.Grafico>
//           <iframe
//             class="w-full aspect-video"
//             title="Passageiros transportados"
//             scrolling="no"
//             frameBorder="0"
//             id="datawrapper-chart-hoRNU"
//             aria-label="Gráfico de coluna"
//             src="https://datawrapper.dwcdn.net/hoRNU/5/"
//           ></iframe>
//         </styles.Grafico>
//       </styles.Fundo>
//       <styles.ContainerCard1 className="z-50">
//         <styles.TextCard1>
//           Como resultado, víamos veículos lotados e a cobertura do transporte
//           público diminuindo na cidade, com 58% dos serviços inoperantes,
//           funcionando apenas com apenas 20% da frota determinada.
//         </styles.TextCard1>
//       </styles.ContainerCard1>
//     </styles.ChapterGraficoDiv>
//   );
// }

// <styles.Grafico>
// <iframe
//   class="w-full aspect-video"
//   title="Preço médio do dólar"
//   scrolling="no"
//   frameBorder="0"
//   id="datawrapper-chart-bv5y3"
//   aria-label="Gráfico de coluna"
//   src="https://datawrapper.dwcdn.net/bv5y3/2/"
// ></iframe>
// </styles.Grafico>

// <styles.Grafico>
// <iframe
//   class="w-full aspect-video"
//   title="Preço médio do diesel"
//   scrolling="no"
//   frameBorder="0"
//   id="datawrapper-chart-8l6Uo"
//   aria-label="Gráfico de coluna"
//   src="https://datawrapper.dwcdn.net/8l6Uo/2/"
// ></iframe>
// </styles.Grafico>

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
