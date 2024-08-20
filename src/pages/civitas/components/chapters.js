import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";

// IMAGENS
import logo from "../images/logo.png";
import exemplo1 from "../images/exemplo1.png";
import exemplo2 from "../images/exemplo2.png";
import infrator from "../images/infrator.png";
import suspeito from "../images/suspeito.png";
import alert from "../images/alert.gif";
import bo from "../images/bo.png";
import imagem17 from "../images/imagem17.png";
import seop2 from "../images/seop2.png";
import seop3 from "../images/seop3.png";
import seop4 from "../images/seop4.png";
import grafico from "../images/grafico.png";
import legenda from "../images/legenda.png";
import logoed from "../images/logoed.png";

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
      <styles.Wrap>
        <styles.Title>
          Qual o novo papel do município na segurança pública?
        </styles.Title>
        <styles.Subtitle>
          Inaugurada em julho de 2024, A CIVITAS é uma central de inteligência, vigilância e tecnologia para o apoio à segurança pública carioca
        </styles.Subtitle>
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
            {/* ,{" "}
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
            </a> */}
          </styles.AuthorText>
        </div>
      </styles.Wrap>
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
        <br /> <br />
        Um levantamento realizado pela Secretaria de Meio Ambiente, utilizando
        dados de satélite, constatou que de janeiro de 2017 a janeiro de 2020, a
        cidade perdeu 497 hectares de áreas verdes, o equivalente a
        4,97 milhões de m². <br /> <br />
        Por trás de cada prédio construído ilegalmente e sem fiscalização, há
        inúmeras famílias que vivem sob o risco de terem suas casas desabadas, e
        perderem, a qualquer momento, sua história e também suas vidas.
      </styles.IntroText>
    </styles.IntroDiv>
  );
}

export function Exemplo6(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <>
      <styles.ChapterGenericDiv1Right ref={props.chapRef} id={props.id}>
        <styles.ContainerCard1>
          <styles.TextCard1>
            Rua Dias da Cruz, Méier, 10h17. O carro é utilizado num assalto a uma agência bancária.        </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Right>
      <styles.ChapterGenericDiv1Left>
        <styles.ContainerCard1>
          <styles.TextCard1>
            Uma testemunha vê parcialmente a placa do carro. Outra é sequestrada pelos criminosos como refém.         </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Left>
    </>
  );
}

export function Exemplo7(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <>
      <styles.ChapterGenericDiv1Right ref={props.chapRef} id={props.id}>
        <styles.ContainerCard1>
          <styles.NewsImage src={bo}></styles.NewsImage>
          <styles.Credito>
            Imagem:  Imagem do B.O
          </styles.Credito>
          <styles.TextCard1>
            COR, 10h28. Chega à CIVITAS o ofício da Polícia Militar com o B.O do roubo/sequestro,  solicitando imagens das câmeras do local e informando a placa parcial.
          </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Right>
      <styles.ChapterGenericDiv1Left >
        <styles.ContainerCard1>
          <styles.TextCard1>
            COR, 10h30. A placa parcial com a descrição do carro é inserida no sistema próprio, desenvolvido pelo Prefeitura do Rio, que  conecta diversas bases de dados. Com isso, é possível gerar todo um histórico de circulação desse veículo pela cidade, mostrando diversos padrões. Esses dados são utilizados para gerar um relatório automático e auditável, que é enviado à polícia. Ao mesmo tempo, é feito o cadastramento da placa no sistema para o acionamento de alerta.        </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Left>
    </>
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
    </styles.ChapterGenericDiv>
  );
}
export function Seop7(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <>
      <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      </styles.ChapterGenericDiv>
      <styles.ChapterGenericDiv1Left >
        <styles.ContainerCard1>
          <styles.TextCard1>
            Os registros indicam a movimentação da moto até a Barra da Tijuca.           </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Left>
    </>
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
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        {/* <styles.NewsImage src={exemplo1}></styles.NewsImage>
        <styles.Credito>
          Imagem: Prefeitura da Cidade do Rio Janeiro
        </styles.Credito> */}
        <styles.TextCard1>
          Mas e aí? O que a CIVITAS faz, afinal? Uma das atuações da Central é o Cerco Eletrônico, que utiliza o parque tecnológico de{" "}
          <styles.Textyellow>

            3.800
          </styles.Textyellow>
          {" "} câmeras do COR e{" "}
          <styles.Textyellow>
            1.500
          </styles.Textyellow>{" "} radares da CET-Rio espalhados por toda a cidade para rastrear atividades suspeitas mediante solicitação das forças de segurança.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
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
    <styles.ChapterGenericDiv1Right ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Senador Vasconcelos, Rio de Janeiro, 5h43 da manhã.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Right>
  );
}
export function Exemplo3(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1Right ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Dois homens numa moto estacionam ao lado de um Honda Civic, placa XXXXXX. Um deles desce da moto, arromba o carro e faz uma ligação direta. Os dois saem dirigindo.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Right>
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
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          40º Batalhão da Polícia Militar, Campo Grande, 11h02. É aberto o B.O. do furto de carro (depois dele ter sido recuperado!).                </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
  );
}
export function Seop5_2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
    </styles.ChapterGenericDiv1Center>
  );
}
export function Seop6(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={imagem17}></styles.NewsImage>
        <styles.Credito>
          Imagem: Documento da moto.
        </styles.Credito>
        <styles.TextCard1>
          As imagens revelam a placa da moto. Ela é inserida no sistema.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
  );
}
export function Seop5(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Bento Ribeiro. Os detalhes do furto permitem à polícia solicitar à Civitas imagens das câmeras do local do furto.              </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
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
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          10h40. O carro passa em outro equipamento do cerco eletrônico, um alerta em tempo real é gerado e a polícia é prontamente avisada. Com o histórico de movimentação do carro em mão, a polícia consegue se preparar melhor para abordar o suspeito.         </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
  );
}
export function Seop3_2(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Estácio, 10h51. 32 minutos depois do assalto, o carro é interceptado pela polícia militar e um dos suspeitos é detido em flagrante, em tempo recorde.              </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
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
    <styles.IntroDiv ref={props.chapRef} id={props.id}>
      <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
        <styles.ContainerCard1>
          <styles.NewsImage src={alert}></styles.NewsImage>

          <styles.IntroTitle id={"solucaoTitle"}>Nova localização do veículo foi registrada!</styles.IntroTitle>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Center>
    </styles.IntroDiv>
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
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={suspeito}></styles.NewsImage>
        <styles.Credito>
          Imagem: Imagem do suspeito
        </styles.Credito>
        <styles.TextCard1>
          COR, 10H35. As imagens de câmeras do local do crime são acessadas e analisadas. O vídeo é enviado para a polícia, que analisa e levanta as características físicas e a vestimenta do acusado.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
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
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          A cidade do Rio de Janeiro registra{" "}
          <styles.Textyellow>
            XXX
          </styles.Textyellow>{" "}
          ocorrências todos os dias. Roubos, furtos, sequestros, arrastões, assaltos, vandalismo, agressões. Como a Prefeitura do Rio pode ajudar a resolver isso? A CIVITAS é uma central de inteligência, vigilância e tecnologia voltada para o apoio à segurança pública carioca.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
  );
}

export function Exemplo5(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.NewsImage src={infrator}></styles.NewsImage>
        <styles.Credito>
          Imagem:  Imagem do suspeito
        </styles.Credito>
        {/* <styles.TextCard1>
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
          na Estrada do Itanhangá, em Muzema, foi demolido pela Prefeitura. Uma
          estimativa feita em parceria com o Ministério Público avaliou que
          criminosos investiram aproximadamente R$ 5 milhões no empreendimento
          irregular.
        </styles.TextCard1> */}
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
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
        investindo na melhoria da capacidade de identificação de novas
        construções, por meio de denúncias recebidas, e também através do{" "}
        <styles.Textyellow>
          uso de novas tecnologias, como o uso de drones, fotografias aéreas
          (ortofotos) e imagens de satélites.
          <br /> <br />
        </styles.Textyellow>{" "}
        A Prefeitura, juntamente com as secretarias de Ordem Pública e Meio
        Ambiente da Cidade, seguem atentas, colocando abaixo aquelas estruturas
        erguidas irregularmente em nosso município. Continuaremos atuantes e
        firmes no combate à ocupação desordenada na cidade e no asfixiamento
        financeiro do crime organizado.
        <br /> <br />{" "}
        <styles.Textyellow>
          A preservação de vidas é, e sempre será, o nosso objetivo.
        </styles.Textyellow>{" "}
      </styles.IntroText>
      <a href={"https://www.dados.rio/"}>
        <img
          src={logoed}
          className="w-44 mt-[200px] lg:mt-[500px] lg:w-56"
        ></img>
      </a>
    </styles.IntroDiv>
  );
}

export function Exemplo8(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      {/* <styles.ContainerCard1>
      <styles.TextCard1>
        A cidade do Rio de Janeiro registra{" "}
        <styles.Textyellow>
          XXX
        </styles.Textyellow>{" "}
        ocorrências todos os dias. Roubos, furtos, sequestros, arrastões, assaltos, vandalismo, agressões. Como a Prefeitura do Rio pode ajudar a resolver isso? A CIVITAS é uma central de inteligência, vigilância e tecnologia voltada para o apoio à segurança pública carioca.
      </styles.TextCard1>
    </styles.ContainerCard1> */}
    </styles.ChapterGenericDiv1Center>
  );
}

export function Exemplo4(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1Right ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Rua João Vicente, Bento Ribeiro, 6h55. O Honda Civic passa por um dos equipamentos do cerco eletrônico na Rua João Vicente, sentido Centro.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Right>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
