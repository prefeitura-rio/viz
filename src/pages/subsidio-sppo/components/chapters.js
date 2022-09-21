import styled from "styled-components";
import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.png";
import queda from "../images/queda.png";
import dolar from "../images/dolar.png";
import diesel from "../images/diesel.png";
import saude from "../images/saude.png";
import educacao from "../images/educacao.png";
import trabalho from "../images/trabalho.png";
import historia from "../images/historia.gif";
import scroll from "../images/scroll.gif";
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
      <img src={logo2} className="h-14 mt-[7vh]  lg:h-14"></img>
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
      <img src={scroll} className="h-14 mb-[3%] lg:h-14"></img>
      <styles.Interactive>
        Para navegar pelo mapa{" "}
        <a
          className="decoration-1 underline-offset-1 font-bold"
          href="https://viz.dados.rio/#/especial-sppo/interactive"
          target="_blank"
          rel="noreferrer"
        >
          clique aqui
        </a>
      </styles.Interactive>
    </styles.CapaDiv>
  );
}

export function Intro(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv id={props.id}>
      <styles.IntroText>
        {/* <styles.IntroTitle>Introdução</styles.IntroTitle> */}
        Desde o dia 1º de junho deste ano, quando o acordo entre Prefeitura,
        Ministério Público e empresas de ônibus entrou em vigor, os cariocas
        puderam ver, assim como no mapa acima, a volta de 40 linhas de ônibus
        nas ruas da capital fluminense.
        <br />
        <br />
        Isso só foi possível graças a um acordo judicial, estabelecido entre a
        Prefeitura, consórcios de ônibus e o Ministério Público. Graças a ele, a
        cidade terá a regularização das linhas operantes, a retomada das
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
        maravilhosa!
        <br />
        <br />
        Nesta reportagem especial, feita pelo Escritório de Dados, explicaremos
        como já estamos fazendo isso.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Vazio(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv
      id={props.id}
      ref={props.ref}
    ></styles.ChapterGenericDiv>
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
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard>
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
          transporte, ficando não só responsáveis pela a operação de todas as
          linhas municipais, como também da fonte de renda do sistema, o Bilhete
          Único Carioca (BUC).
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function HistoriaFoto(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterMap id={props.id} ref={props.ref}>
      <styles.ContainerCard3>
        <img src={historia}></img>
      </styles.ContainerCard3>
    </styles.ChapterMap>
  );
}

export function Historia2(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          Após anos em vigor, a concessão, entretanto, apresentou problemas: a
          má gestão dos concessionários com o serviço oferecido e uma grande
          crise reputacional do sistema, envolvida em diversos escândalos.
          <br />
          <br />
          Além disso, havia a falta de transparência da arrecadação do sistema
          de bilhete único. Uma verdadeira caixa-preta era formada com os dados
          de arrecadação e distribuição dos lucros adquiridos pelas empresas.
          <br />
          <br />
          Os valores não tinham publicidade, mesmo com os recorrentes pedidos da
          Prefeitura para ter acesso às quantias ganhas pelos concessionários
          nas operações.
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Pandemia(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv id={props.id}>
      <styles.IntroText>
        Com a chegada da Covid-19, a situação se agravou. Com as restrições
        sanitárias e a redução do PIB, o transporte público ficou menos
        movimentado e o número de passageiros, que já apresentava queda nos
        últimos anos, diminuiu ainda mais.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function GraficoPassageiros(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          Além disso, veículos que já estavam depredados ou sem a devida
          conservação ficaram largados. A alta do dólar durante a crise
          sanitária que assolou o mundo explica essa equação: como as peças e
          ferramentas são feitas fora do país, o seu valor subiu
          substancialmente nos últimos anos e consertar ou comprar novos
          veículos ficou ainda mais caro.
        </styles.TextCard>
        <img src={queda} className="mt-12"></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function GraficoDolar(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          Soma-se a isso outro problema, conhecido pelos brasileiros: a alta dos
          combustíveis no país. Para efeitos de comparação, o valor do diesel
          subiu de R$3,75/L em 2019 para R$6,91/L em 2022.
        </styles.TextCard>
        <img src={dolar} className="mt-12"></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function GraficoDiesel(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv id={props.id}>
      <styles.ContainerCard>
        <styles.TextCard>
          Ou seja, com um número menor de passageiros e o aumento de peças e
          diesel, o custo para operar o sistema aumentou enquanto a receita
          diminuiu. Como resultado, vemos mais veículos lotados e a cobertura do
          transporte público diminuindo na cidade.
        </styles.TextCard>
        <img src={diesel} className="mt-12"></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Virada(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv id={props.id}>
      <styles.IntroText>
        <styles.IntroTitle>O ponto de virada</styles.IntroTitle>
        Com uma situação alarmante e o descrédito do transporte por ônibus na
        cidade, a Prefeitura decidiu reformular este sistema. Entretanto, para
        que isso fosse implementado, foi preciso muito diálogo.
        <br />
        <br />
        Foi exigido um grande esforço de negociação entre as diversas partes,
        com muita transparência. Afinal de contas, não bastava um entendimento
        entre prefeitura e empresas de ônibus, Era preciso também o envolvimento
        do Ministério Público e do judiciário, chancelando e acompanhando
        qualquer decisão tomada.
        <br />
        <br />
        Assim, uma nova proposta de administração foi então pensada e aprovada.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Caixa(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard>
        <styles.IntroTitle>O fim da caixa preta</styles.IntroTitle>
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
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
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
          A previsão é de que mais XX linhas retornem às ruas até o fim de XX.
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
    <styles.ChapterGenericDiv
      id={props.id}
      ref={props.ref}
    ></styles.ChapterGenericDiv>
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
    <styles.ChapterGenericDiv
      id={props.id}
      ref={props.ref}
    ></styles.ChapterGenericDiv>
  );
}

export function Saude(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard>
        <img src={saude} className="mt-12"></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Educacao(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard>
        <img src={educacao} className="mt-12"></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Trabalho(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard>
        <img src={trabalho} className="mt-12"></img>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Passagem(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv id={props.id}>
      <styles.IntroText>
        <styles.IntroTitle>A passagem continua a mesma</styles.IntroTitle>A
        passagem continua a R$4,05 e a Prefeitura passa a pagar a diferença do
        valor real da tarifa, impedindo que a população pague mais. Isso se dará
        com a implantação de um sistema em que a prefeitura pagará as
        concessionárias por km rodado em cada linha.
        <br />
        <br />
        Na prática, a tarifa que o cidadão paga na hora de embarcar no ônibus se
        mantém. O que muda é a remuneração adicional por quilômetro rodado que
        será paga pela Prefeitura desde que haja a correta prestação do serviço.
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
        Prefeitura, nenhum valor adicional da tarifa de R$ 4,05 será repassado e
        sua concessão será cancelada.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Fluxo(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
      <styles.ContainerCard2>
        <img src={fluxo} className="mt-12 mb-12"></img>
      </styles.ContainerCard2>
    </styles.ChapterGenericDiv>
  );
}

export function Fim(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv id={props.id}>
      <styles.IntroText>
        <styles.IntroTitle>Comprometimento da Prefeitura</styles.IntroTitle>
        O contrato de concessão atual teve seu prazo reduzido em 2 anos e apenas
        a Prefeitura tem a prerrogativa de rever o acordo em caso de
        descumprimento por parte dos operadores, garantindo o comprometimento
        desta nova gestão do transporte na cidade.
        <br />
        <br />
        O plano devidamente implementado, permitirá um transporte com qualidade
        e transparência para a população carioca.
        <br />
        <br />
        Link para acessar o site com o antes e o depois do acordo
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Creditos(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv id={props.id}>
      <styles.FimText>
        <styles.FimTitle>Autores</styles.FimTitle>
        Caio Jacintho <br />
        Diego Oliveira <br />
        Gabriel Gazola <br />
        João Carabetta <br />
        Judite Cypreste
        <styles.FimTitle>Agradecimentos</styles.FimTitle>
        Fernanda Scovino <br />
        Guilherme Braga <br />
        Bernardo Serra <br />
        Lauro Silvestre
        <styles.FimTitle>Prefeito</styles.FimTitle>
        Eduardo Paes <br />
        <img src={logo1} className="h-16 mt-[12vh]  lg:h-16"></img>
      </styles.FimText>
    </styles.IntroDiv>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
