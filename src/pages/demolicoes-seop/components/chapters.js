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
        Mais de 1.300 construções irregulares na cidade Rio de Janeiro
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
        públicas, e erguidas sem nenhum acompanhamento técnico. <br /> <br />{" "}
        Por trás de cada prédio construído ilegalmente, e sem fiscalização, há
        inúmeras famílias que vivendo sob o risco de perderem, a qualquer
        momento, suas casas, sua história e também suas vidas.
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
            Por trás de cada construção ilegal em área sob influência do crime
            organizado, há um grande interesse econômico. Estudos apontam que{" "}
            <styles.Textyellow>
              os grupos criminais, principalmente as milícias, obtiveram um
              aumento de seus ganhos através do mercado imobiliário,
            </styles.Textyellow>{" "}
            a partir da oferta e da proteção para execução de construções
            irregulares.
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
        {/* <iframe
          title="1000 demolições desde o início da gestão"
          aria-label="Gráfico de coluna"
          id="datawrapper-chart-RNXfM"
          src="https://datawrapper.dwcdn.net/RNXfM/1/"
          scrolling="no"
          frameborder="0"
          style="width: 0; min-width: 100% !important; border: none;"
          height="416"
        ></iframe> */}
        {/* <script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
</script> */}
        <styles.NewsImage src={grafico}></styles.NewsImage>
        <styles.TextCard>
          Analisando as prioridades da Prefeitura, já deu para perceber que o
          assunto é tratado com a relevância que necessita. Isto, entretanto,
          nem sempre foi assim. Analisando os dados históricos de demolições
          realizadas na cidade, é possível perceber que, ao longo da{" "}
          <styles.Textyellow>
            gestão anterior, apenas 359 demolições foram realizadas,
          </styles.Textyellow>{" "}
          número inferior as{" "}
          <styles.Textyellow>
            1.312 demolições feitas em apenas um ano e meio pela atual gestão.
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
        <styles.Credito>Prefeitura do Rio</styles.Credito>
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
          na região de Muzema, no Itanhangá, Zona Oeste. Ao todo, 24 pessoas
          morreram no desastre, que ocorreu em abril de 2019.
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
        <styles.Credito>Prefeitura do Rio</styles.Credito>
        <styles.TextCard1>
          Maitê Gomes Abreu, de 2 anos, e seu pai, Natan Gomes, de 30 anos,
          foram encontrados mortos após nove horas de buscas entre os escombros.
          Pai e sua filha foram vítimas do desabamento de um prédio de quatro
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

export function Seop1(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop1}></styles.NewsImage>
        <styles.Credito>Prefeitura do Rio</styles.Credito>
        <styles.TextCard1>
          Este foi o caso de uma construção irregular, identificada em Muzema. A
          construção de três andares, não tinha aval técnico, e foi colocada
          baixo pela equipe da Força-Tarefa no mês passado.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
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
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop2}></styles.NewsImage>
        <styles.Credito>Prefeitura do Rio</styles.Credito>
        <styles.TextCard1>
          Há 2 meses, um imóvel de sete andares, construída na região do
          Terreirão, no Recreio, área dominada pela milícia. O prédio não
          atendia nenhum requisito para construção no local, e foi demolido pela
          Prefeitura.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
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
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop3}></styles.NewsImage>
        <styles.Credito>Prefeitura do Rio</styles.Credito>
        <styles.TextCard1>
          No começo deste ano, outro imóvel também localizado no Recreio dos
          Bandeirantes foi abaixo. Com três andares já construídos e um quarto
          em desenvolvimento, o prédio irregular possuía cinco apartamentos por
          andar. A estimativa é que cada unidade, construída sem nenhum parecer
          técnico que aprovasse a sua segurança, seria vendida por R$ 300 mil
          para os moradores.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
  );
}

export function Seop4(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={seop4}></styles.NewsImage>
        <styles.Credito>Prefeitura do Rio</styles.Credito>
        <styles.TextCard1>
          Prédio da milícia de Rio das Pedras é demolido em ação do MP com a
          Prefeitura
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
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
    <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Infelizmente, nos últimos anos, casos recorrentes de desabamentos de
          prédios e casas foram registrados na cidade. Famílias inteiras
          perderam seus lares e suas vidas:
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv>
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
        <styles.TextCard1>xx</styles.TextCard1>
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
      <styles.IntroTitle id={"fimTitle"}>Fim</styles.IntroTitle>
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
        As ações da SEOP
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
        mais de 70% estavam localizadas na região. Os bairros do Recreio, Rio
        das Pedras e Muzema, por exemplo, são os que registram maior incidência
        destas irregularidades.
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
