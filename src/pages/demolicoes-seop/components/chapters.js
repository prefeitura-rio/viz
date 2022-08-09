import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";

// IMAGENS
import logo from "../images/logo.png";
import exemplo1 from "../images/exemplo1.png";
import exemplo2 from "../images/exemplo2.png";
import seop1 from "../images/seop1.png";
import seop2 from "../images/seop2.png";
import seop3 from "../images/seop3.png";
import seop4 from "../images/seop4.png";
import grafico from "../images/grafico.png";
import legenda from "../images/legenda.png";

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
      <img src={logo} className="w-24 mt-[2vh]  lg:w-32"></img>
      <styles.Title>
        Mais de 1.300 construções irregulares a menos no Rio de Janeiro
      </styles.Title>
      {/* <styles.Subtitle>
        Segurança para os moradores, Prejuízo para o crime organizado,
        Preservação das áreas verdes
      </styles.Subtitle> */}
      <div>
        <styles.AuthorText>
          Desenvolvido por{" "}
          <a
            className="font-bold underline"
            href="https://www.dados.rio/"
            target="_blank"
            rel="noreferrer"
          >
            Escritório de Dados
          </a>
          ,{" "}
          <a
            className="font-bold underline"
            href="http://www.rio.rj.gov.br/web/seop"
            target="_blank"
            rel="noreferrer"
          >
            Secretaria Municipal de Ordem Pública{" "}
          </a>
          e{" "}
          <a
            className="font-bold underline"
            href="http://www.rio.rj.gov.br/web/smac"
            target="_blank"
            rel="noreferrer"
          >
            Secretaria Municipal de Meio Ambiente da Cidade
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
      <styles.IntroText>
        A proliferação de construções irregulares é um problema que tomou conta
        da cidade do Rio há algumas décadas. Em áreas sob influência do crime
        organizado a preocupação é ainda maior. <br /> <br />
        Estudos apontam que{" "}
        <styles.Textyellow>
          a atividade imobiliária se tornou uma das principais fontes
          financeiras de alguns grupos criminosos.
        </styles.Textyellow>{" "}
        Essas construções são realizadas sem autorização da Prefeitura, em áreas
        públicas e protegidas, e erguidas sem nenhum acompanhamento técnico.
        <br /> <br /> Por trás de cada prédio construído ilegalmente e sem
        fiscalização, há inúmeras famílias que vivem sob o risco de terem suas
        casas desabadas, e perderem, a qualquer momento, suas casas, sua
        história e também suas vidas.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Solucao(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      <styles.IntroTitle id={"solucaoTitle"}>
        A solução
      </styles.IntroTitle>
      <styles.IntroText>Para combater o crescimento desordenado a 
        cidade, o avanço de construções irregulares em áreas ambientalmente 
        protegidas, preservar vidas e asfixiar financeiramente o crime organizado, a{" "}
      <styles.Textyellow>
        Secretaria Municipal de Ordem Pública (SEOP) e a Secretaria Municipal de Meio 
        Ambiente da Cidade (SMAC) têm realizado operações constantes de demolição destas 
        construções,
      </styles.Textyellow>{" "}
        desde o começo de 2021. <br /> <br />De lá para cá,{" "}
      <styles.Textyellow>
        mais de 1.300 imóveis não habitados, não finalizados, erguidos ilegalmente e que traziam  
        riscos à população, foram colocados abaixo.
      </styles.Textyellow>{" "}
        Essas ações pouparam a vida de milhares de cariocas que viviam em áreas de risco.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Prejuizo(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.Grid>
          <styles.Grid1>
            <styles.BigNumber>R$</styles.BigNumber>
            <styles.BigNumber id="number">0</styles.BigNumber>
            <styles.BigNumber1>milhões</styles.BigNumber1>
          </styles.Grid1>
          <styles.TextCard>
            Graças as operações realizadas pela Prefeitura, essas organizações
            ilegais também sentiram no bolso.{" "}
            <styles.Textyellow>
              Desde 2021, as operações da secretaria acarretaram um prejuízo
              estimado em R$646 milhões para os cofres do crime organizado.
            </styles.Textyellow>{" "}
          </styles.TextCard>
        </styles.Grid>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Grafico(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard>
        <styles.NewsImage src={grafico}></styles.NewsImage>
        <styles.TextCard>
          Analisando as prioridades da Prefeitura, é possível perceber que o
          assunto é tratado com a relevância necessária. Isto, entretanto, nem
          sempre foi assim. Analisando os dados históricos de demolições
          realizadas na cidade, é possível perceber que, ao longo da{" "}
          <styles.Textyellow>
            gestão anterior, apenas 359 demolições foram realizadas,
          </styles.Textyellow>{" "}
          número inferior as{" "}
          <styles.Textyellow>
            1.313 demolições feitas em apenas um ano e meio pela atual gestão.
          </styles.Textyellow>{" "}
        </styles.TextCard>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Exemplo1(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={exemplo1}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>
        <styles.TextCard1>
          Adilma Rodrigues, de 35 anos, e seu marido, Cláudio Rodrigues, 40
          anos, morreram após o desabamento de dois prédios, construídos
          irregularmente na região de{" "}
          <styles.Textyellow>
            {" "}
            <a
              className="p-1"
              href="https://prefeitura.rio/cidade/prefeitura-inicia-demolicoes-na-muzema/"
              target="_blank"
              rel="noreferrer"
            >
              Muzema,
            </a>
          </styles.Textyellow>{" "}
          no Itanhangá, Zona Oeste. Ao todo, 24 pessoas morreram no desastre,
          que ocorreu em abril de 2019.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Exemplo2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={exemplo2}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>
        <styles.TextCard1>
          Maitê Gomes Abreu, de 2 anos, e seu pai, Natan Gomes, de 30 anos,
          foram encontrados mortos após nove horas de buscas entre os escombros.
          Pai e filha foram vítimas do desabamento de um prédio de quatro
          andares em{" "}
          <styles.Textyellow>
            {" "}
            <a
              className="p-1"
              href="https://assistenciasocial.prefeitura.rio/noticias/prefeitura-atua-para-minimizar-os-impactos-do-desabamento-de-um-imovel-em-rio-das-pedras/"
              target="_blank"
              rel="noreferrer"
            >
              Rio das Pedras,
            </a>
          </styles.Textyellow>{" "}
          na Zona Oeste em junho do ano passado. O imóvel era irregular.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

// export function Exemplo3(
//   props = {
//     id: "",
//     chapRef: null,
//   }
// ) {
//   props = setDefaultProps(props);

//   return (
//     <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
//       <styles.ContainerCard1>
//         <styles.TextCard1>
//           Em novembro de 2021, uma tragédia: um prédio de quatro andares desabou
//           no{" "}
//           <styles.Textyellow>
//             {" "}
//             <a
//               className="p-1"
//               href="https://www1.folha.uol.com.br/cotidiano/2021/11/predio-de-4-andares-desaba-no-rio-e-deixa-um-morto-e-tres-feridos.shtml"
//               target="_blank"
//               rel="noreferrer"
//             >
//               Morro do Salgueiro,
//             </a>
//           </styles.Textyellow>{" "}
//           na Zona Norte. Um homem de 22 anos faleceu e outras três pessoas
//           ficaram feridas. Entre elas, uma criança de apenas quatro anos. A
//           construção também não tinha alvará.
//         </styles.TextCard1>
//       </styles.ContainerCard1>
//     </styles.ChapterGenericDiv>
//   );
// }

export function Seop4(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop4}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>
        <styles.TextCard1>
          Também em Muzema,{" "}
          <styles.Textyellow>
            {" "}
            <a
              className="p-1"
              href="https://prefeitura.rio/ordem-publica/prefeitura-faz-demolicao-de-predio-de-tres-andares-no-valor-de-r-3-milhoes-na-muzema/"
              target="_blank"
              rel="noreferrer"
            >
              uma construção irregular foi colocada abaixo
            </a>
          </styles.Textyellow>{" "}
          O prédio, com três andares, foi demolido pela equipe da Força-Tarefa
          no mês passado.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Seop3(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop3}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>
        <styles.TextCard1>
          Há quatro meses, um imóvel de sete andares, construído na região do
          Terreirão, também no Recreio, foi demolido.{" "}
          <styles.Textyellow>
            {" "}
            <a
              className="p-1"
              href="https://prefeitura.rio/ordem-publica/seop-faz-a-demolicao-de-predio-de-sete-andares-construido-irregularmente-no-recreio/"
              target="_blank"
              rel="noreferrer"
            >
              O prédio não atendia nenhum requisito técnico para construção no
              local.
            </a>
          </styles.Textyellow>{" "}
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Seop2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop2}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>
        <styles.TextCard1>
          Outro imóvel também localizado no Recreio dos Bandeirantes foi abaixo
          no começo deste ano. Com três andares já construídos e um quarto em
          desenvolvimento, o prédio irregular possuía cinco apartamentos por
          andar. A estimativa é que cada unidade,{" "}
          <styles.Textyellow>
            {" "}
            <a
              className="p-1"
              href="https://prefeitura.rio/ordem-publica/seop-e-gaeco-realizam-megaoperacao-para-demolicao-de-construcoes-irregulares-no-recreio-dos-bandeirantes/"
              target="_blank"
              rel="noreferrer"
            >
              construída sem nenhum parecer técnico
            </a>
          </styles.Textyellow>{" "}
          que aprovasse a sua segurança, seria vendida por R$ 300 mil para os
          moradores.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Seop1(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop1}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito>
        <styles.TextCard1>
          No fim do ano passado, um imóvel onde funcionaria um supermercado, com
          garagem subterrânea e espaços alugados, estava sendo{" "}
          <styles.Textyellow>
            {" "}
            <a
              className="p-1"
              href="https://prefeitura.rio/ordem-publica/seop-e-mprj-realizam-operacao-para-demolir-construcao-irregular-erguida-pela-milicia-de-rio-das-pedras/"
              target="_blank"
              rel="noreferrer"
            >
              construído irregularmente
            </a>
          </styles.Textyellow>{" "}
          na Estrada do Itanhangá, em Muzema. Uma estimativa feita em parceria
          com o Ministério Público avaliou que criminosos investiram
          aproximadamente R$ 5 milhões no empreendimento irregular.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Zoom(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1 ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Infelizmente, nos últimos anos, casos recorrentes de desabamentos de
          prédios e casas foram registrados na cidade.{" "}
          <styles.Textyellow>
            Prédios construídos pelo crime organizado, sem a infraestrutura e os
            cuidados técnicos necessários, vieram abaixo.
          </styles.Textyellow>{" "}
          Famílias inteiras perderam seus lares e suas vidas:
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1>
  );
}

export function Mapa(
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
          Manguinhos (219 demolições), Recreio dos Bandeirantes (214
          demolições), Gardênia Azul (178 demolições), Jacarepaguá (90
          demolições) e Campo Grande (67 demolições) foram os cinco bairros com
          mais ações realizadas. Outros bairros localizados na Zona Sul, como
          Botafogo (33 demolições) e São Conrado (27 demolições),e da Zona
          Norte, como Del Castilho (38 demolições) e Mangueira (14 demolições)
          também tiveram construções irregulares identificadas e demolidas pelo
          poder público.
        </styles.TextCard1>
        <styles.NewsImage1 src={legenda}></styles.NewsImage1>
      </styles.ContainerCard>
    </styles.ChapterGenericDiv>
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
      <styles.IntroTitle id={"fimTitle"}>Próximos passos</styles.IntroTitle>
      <styles.IntroText>
        A marca de <styles.Textyellow>1.313 demolições,</styles.Textyellow> em
        apenas <styles.Textyellow>um ano e meio de gestão,</styles.Textyellow> é
        extremamente importante para a cidade.
        <br /> <br />
        Para continuar seu trabalho, a Prefeitura do Rio de Janeiro vem
        investindo na melhoria capacidade de identificação de novas construções,
        por meio de denúncias recebidas, e também através do{" "}
        <styles.Textyellow>
          uso de novas tecnologias, como o uso de drones, fotografias aéreas
          (ortofotos) e imagens de satélites.
          <br /> <br />
        </styles.Textyellow>{" "}
        A Prefeitura, juntamente com as secretarias de Ordem Pública e Meio
        Ambiente da Cidade, seguem atentos, colocando abaixo aquelas estruturas
        erguidas irregularmente em nosso município. Continuaremos atuantes e
        firmes no combate à ocupação desordenada na cidade e no asfixiamento
        financeiro do crime organizado.{" "}
        <styles.Textyellow>
          A preservação de vidas é, e sempre será, o nosso objetivo.
        </styles.Textyellow>{" "}
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Acompanhe(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      <styles.IntroTitle id={"acompanheTitle"}>
        As ações da Prefeitura
      </styles.IntroTitle>
      <styles.IntroText>
        As operações realizadas pela Ordem Pública reúnem diversos órgãos da
        Prefeitura, como a Guarda Municipal, Comlurb, Secretaria de Conservação
        e Subprefeituras, além das concessionárias de luz e água. Na maioria das
        ações, o apoio das forças policiais também é necessário, devido à
        influência do crime organizado nas regiões visitadas. Uma força-tarefa
        entre a SEOP e o Ministério Público atua na realização das demolições e
        na investigação das construções irregulares e seus responsáveis.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Oeste(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      <styles.IntroTitle id={"zonaOesteTitle"}>
        Onde estão localizadas as construções irregulares
      </styles.IntroTitle>
      <styles.IntroText>
        Apesar de estarem presentes em todas as regiões da cidade, as{" "}
        <styles.Textyellow>
          construções irregulares têm maior incidência na Zona Oeste do
          município.
        </styles.Textyellow>{" "}
        De todas as demolições realizadas pela Prefeitura durante este período,
        mais de 70% estavam localizadas na região. Rio das Pedras, Muzema e
        Recreio dos Bandeirantes, por exemplo, são locais em que são registradas
        constantemente estas irregularidades.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
