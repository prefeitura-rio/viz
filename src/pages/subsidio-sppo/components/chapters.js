import styled from "styled-components";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import compensacao from "../images/compensacao.png";
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
        className="lg:absolute lg:top-[20px] h-14 mt-[7vh]  lg:h-14"
      ></img>
      <styles.Title>
        Um ponto de virada na história do transporte municipal do Rio de Janeiro
      </styles.Title>
      <styles.AuthorText className="p-2">
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
        className="lg:absolute lg:bottom-[25%] h-14 lg:h-14"
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
          Desde o dia 1º de junho deste ano, quando o acordo entre Prefeitura,
          Ministério Público e empresas de ônibus entrou em vigor, os cariocas
          viram a volta de XX linhas de ônibus nas ruas da capital fluminense,
          como mostramos no mapa abaixo.
          <br />
          <br />
          Isso só foi possível graças a um acordo judicial, estabelecido entre a
          Prefeitura, consórcios de ônibus e o Ministério Público. Graças a ele,
          a cidade terá a regularização das linhas operantes, a retomada das
          inoperantes e a implementação dos serviços noturnos.
          <br />
          <br />
          Isto, sem o aumento da passagem de R$ 4,05, que será subsidiada pelo
          município com base no serviço e quilômetro rodado.
          <br />
          <br />
          Os cariocas sabem bem quais são os problemas cotidianos enfrentados no
          transporte público da cidade do Rio de Janeiro. E é por isso que a
          Prefeitura está trabalhando para melhorar a mobilidade na nossa cidade
          maravilhosa.
          <br />
          <br />
          Nesta reportagem especial, feita pelo Escritório de Dados, vamos falar
          sobre como a Prefeitura está trabalhando para melhorar ainda mais a
          locomoção do carioca.
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
    <styles.ChapterMapDiv id={props.id} ref={props.ref}>
      Mapa com as linhas que voltaram por zona da cidade
    </styles.ChapterMapDiv>
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

export function Mapapontos(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterMapDiv id={props.id} ref={props.ref}>
      Mapa com os pontos de ônibus que foram reativados na cidade
    </styles.ChapterMapDiv>
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
          má gestão dos concessionários com o serviço oferecido e uma{" "}
          <styles.TextHighlight>
            crise reputacional do sistema,
          </styles.TextHighlight>{" "}
          grande envolvida em diversos escândalos.
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
        <styles.IntroTitle className="lg:mt-[140px]">
          Pandemia
        </styles.IntroTitle>
        <styles.TextCard>
          Com a chegada da Covid-19, a situação se agravou. Com as restrições
          sanitárias, o transporte público ficou menos movimentado e o número de
          passageiros, que já apresentava queda nos últimos anos, diminuiu ainda
          mais.
        </styles.TextCard>
        <styles.Grafico>
          <iframe
            class="w-full aspect-video"
            title="Passageiros transportados"
            scrolling="no"
            frameborder="0"
            id="datawrapper-chart-hoRNU"
            aria-label="Gráfico de coluna"
            src="https://datawrapper.dwcdn.net/hoRNU/5/"
          ></iframe>
        </styles.Grafico>
        <styles.TextCard>
          Como resultado, víamos veículos lotados e a cobertura do transporte
          público diminuindo na cidade, com 58% dos serviços inoperantes,
          funcionando apenas com apenas 20% da frota determinada. Outros 18% das
          linhas funcionavam irregularmente, com 20% a 80% da frota.
        </styles.TextCard>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv1>
  );
}

export function Mapaum(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterMapDiv id={props.id} ref={props.ref}>
      Mapa - 24% dos serviços operando conforme o determinado
    </styles.ChapterMapDiv>
  );
}

export function Textomapaum(
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
          <styles.TextHighlightGreen>24%</styles.TextHighlightGreen> dos
          serviços operando conforme o determinado.{" "}
          <styles.TextCard1 className="lg:mt-[10px]">
            Entre 80% e 100% da frota determinada.
          </styles.TextCard1>
        </styles.TextCardBig>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Mapadois(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterMapDiv id={props.id} ref={props.ref}>
      Mapa - 18% dos serviços com operação irregular
    </styles.ChapterMapDiv>
  );
}

export function Textomapadois(
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
          <styles.TextHighlightYellow>18%</styles.TextHighlightYellow> dos
          serviços com operação irregular.{" "}
          <styles.TextCard1 className="lg:mt-[10px]">
            Entre 20% e 80% da frota determinada.
          </styles.TextCard1>
        </styles.TextCardBig>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Mapatres(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterMapDiv id={props.id} ref={props.ref}>
      Mapa - 58% dos serviços inoperantes
    </styles.ChapterMapDiv>
  );
}

export function Textomapatres(
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
          <styles.TextHighlightRed>58%</styles.TextHighlightRed> dos serviços
          inoperantes.{" "}
          <styles.TextCard1 className="lg:mt-[10px]">
            Abaixo de 20% da frota determinada.
          </styles.TextCard1>
        </styles.TextCardBig>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

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
        <styles.IntroTitle>
          O ponto de virada e o fim da caixa preta
        </styles.IntroTitle>
        <styles.TextCard>
          Com uma situação alarmante e o descrédito do transporte por ônibus na
          cidade, a Prefeitura decidiu reformular este sistema. Entretanto, para
          que isso fosse implementado, foi preciso muito diálogo.
          <br />
          <br />
          Foi exigido um grande esforço de negociação entre as diversas partes,
          com muita transparência. Afinal de contas, não bastava um entendimento
          entre prefeitura e empresas de ônibus, Era preciso também o
          envolvimento do Ministério Público e do judiciário, chancelando e
          acompanhando qualquer decisão tomada.
          <br />
          <br />
          Assim, uma nova proposta de administração foi então pensada e
          aprovada.
        </styles.TextCard>
        <styles.IntroTitle className="lg:mt-[140px]">
          Passagem
        </styles.IntroTitle>
        <styles.TextCard>
          Além disso, veículos que já estavam depredados ou sem a devida
          conservação ficaram largados. A alta do dólar durante a crise
          sanitária que assolou o mundo explica essa equação: como as peças e
          ferramentas são feitas fora do país, o seu valor subiu
          substancialmente nos últimos anos e consertar ou comprar novos
          veículos ficou ainda mais caro.
        </styles.TextCard>
        <styles.Grafico>
          <iframe
            class="w-full aspect-video"
            title="Preço médio do dólar"
            scrolling="no"
            frameborder="0"
            id="datawrapper-chart-bv5y3"
            aria-label="Gráfico de coluna"
            src="https://datawrapper.dwcdn.net/bv5y3/2/"
          ></iframe>
        </styles.Grafico>
        <styles.TextCard>
          Soma-se a isso outro problema, conhecido pelos brasileiros: a alta dos
          combustíveis no país. Para efeitos de comparação, o valor do diesel
          subiu de R$3,75/L em 2019 para R$6,91/L em 2022.
        </styles.TextCard>
        <styles.Grafico>
          <iframe
            class="w-full aspect-video"
            title="Preço médio do diesel"
            scrolling="no"
            frameborder="0"
            id="datawrapper-chart-8l6Uo"
            aria-label="Gráfico de coluna"
            src="https://datawrapper.dwcdn.net/8l6Uo/2/"
          ></iframe>
        </styles.Grafico>
        <styles.TextCard>
          Ou seja, com um número menor de passageiros e o aumento de peças e
          diesel, o custo para operar o sistema aumentou enquanto a receita
          diminuiu.
          <br />
          <br />
          A passagem continua a R$4,05 e a Prefeitura passa a pagar a diferença
          do valor real da tarifa, impedindo que a população pague mais. Isso se
          dará com a implantação de um sistema em que a prefeitura pagará às
          concessionárias por km rodado em cada linha.
          <br />
          <br />
          Na prática, a tarifa que o cidadão paga na hora de embarcar no ônibus
          se mantém. O que muda é a remuneração adicional por quilômetro rodado
          que será paga pela Prefeitura desde que haja a correta prestação do
          serviço.
          <br />
          <br />
          Tudo será controlado por meio do monitoramento em tempo real dos GPS
          instalados na frota de ônibus cariocas. Os recursos serão somente
          repassados para as empresas que estiverem com GPS funcionando
          corretamente associados às linhas que estiverem operando.
          <br />
          <br />
          Em caso de não cumprimento do acordo, ou seja, caso o empresário não
          volte com as linhas ou não cumpra com a quilometragem requisitada pela
          Prefeitura, nenhum valor adicional da tarifa de R$ 4,05 será repassado
          e sua concessão será cancelada.
        </styles.TextCard>
        <styles.IntroTitle className="lg:mt-[140px]">
          O fim da caixa preta
        </styles.IntroTitle>
        <styles.TextCard>
          Agora, com o novo acordo judicial, os consórcios renunciam a
          administração do BRT e da bilhetagem, além de serem obrigadas a enviar
          todas as informações de arrecadação.
          <br />
          <br />O sistema de bilhetagem será feito por meio de concessão
          pública. Agora, todo o dinheiro arrecadado irá para o Fundo
          Fiduciário, onde a Prefeitura e a sociedade conseguirão ter um maior
          controle das finanças da operação.
        </styles.TextCard>
        <img src={compensacao} className="h-auto w-auto lg:mt-[60px]"></img>
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
          O restabelecimento das linhas canceladas também está previsto no
          acordo. A prioridade é que elas voltem a circular justamente nas áreas
          mais necessitadas.
          <br />
          <br />
          Até o momento, XX linhas já retornaram, a maioria delas na região XX.
          <br />
          <br />O bairro de Santa Cruz, por exemplo, é um dos maiores
          beneficiados. Nas imagens a seguir podemos observar como estava a
          situação do bairro
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
          Texto que fale sobre os gráficos que irão aparecer …
        </styles.TextCard>
        <styles.Grafico>
          <iframe
            class="w-full aspect-video"
            title="Preço médio do dólar"
            scrolling="no"
            frameborder="0"
            id="datawrapper-chart-bv5y3"
            aria-label="Gráfico de coluna"
            src="https://datawrapper.dwcdn.net/bv5y3/2/"
          ></iframe>
        </styles.Grafico>
        <styles.Grafico>
          <iframe
            class="w-full aspect-video"
            title="Preço médio do dólar"
            scrolling="no"
            frameborder="0"
            id="datawrapper-chart-bv5y3"
            aria-label="Gráfico de coluna"
            src="https://datawrapper.dwcdn.net/bv5y3/2/"
          ></iframe>
        </styles.Grafico>
        <styles.Grafico>
          <iframe
            class="w-full aspect-video"
            title="Preço médio do dólar"
            scrolling="no"
            frameborder="0"
            id="datawrapper-chart-bv5y3"
            aria-label="Gráfico de coluna"
            src="https://datawrapper.dwcdn.net/bv5y3/2/"
          ></iframe>
        </styles.Grafico>
        <styles.IntroTitle className="lg:mt-[140px]">
          Comprometimento da Prefeitura para melhoria da vida do carioca
        </styles.IntroTitle>
        <styles.TextCard>
          O contrato de concessão atual teve seu prazo reduzido em 2 anos e
          apenas a Prefeitura tem a prerrogativa de rever o acordo em caso de
          descumprimento por parte dos operadores, garantindo o comprometimento
          desta nova gestão do transporte na cidade.
          <br />
          <br />O plano devidamente implementado, permitirá um transporte com
          qualidade e transparência para a população carioca. Link: Link para
          acessar o site com o antes e o depois do acordo
        </styles.TextCard>
        <styles.TextCard>
          <styles.FimTitle className="lg:mt-[200px]">Autores</styles.FimTitle>
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
          <img src={logo} className="h-16 mt-[12vh]  lg:h-16"></img>
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
//             frameborder="0"
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
//             frameborder="0"
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
//             frameborder="0"
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

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
