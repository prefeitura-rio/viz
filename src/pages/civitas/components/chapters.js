import styled from "styled-components";
import * as styles from "./chapters.style";
import tw from "tailwind-styled-components";
// import ReactDOM from "react-dom";
// import DWChart from "react-datawrapper-chart";

// IMAGENS
import logo from "../images/logo.png";
import exemplo1 from "../images/exemplo1.png";
import exemplo2 from "../images/exemplo2.png";
import radar_foto from "../images/radar_foto.png";
import suspeito from "../images/suspeito.png";
import alert from "../images/alert.gif";
import bo from "../images/bo.png";
import imagem17 from "../images/imagem17.png";
import arrested from "../images/arrested.png";
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
import MapboxElevationApp from "../MapboxElevationApp";
import { useEffect, useState } from "react";
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
          Estamos de olho 👀
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

export function DrawMap(
  props = {
    id: "",
    chapRef: null,
    chapterNumberMap: null
  }
) {
  props = setDefaultProps(props);

  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (props.chapterNumberMap === "drawMap") {
      const timer = setTimeout(() => {
        setShowMap(true);
      }, 3000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
    else {
      setShowMap(false);
    }
  }, [props.chapterNumberMap]);

  return (
    <>
      <style>
        {`
          .fade-in {
            opacity: 0;
            animation: fadeIn 1s forwards;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <div style={{ height: "1050vh" }} ref={props.chapRef} id={props.id}>
        {props.chapterNumberMap == "drawMap" && showMap && (
          <div className="fade-in">
            <MapboxElevationApp />
          </div>
        )}
      </div>
    </>
  );
}
export function Seop8(
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
      {/* <styles.ChapterGenericDiv1Left >
        <styles.ContainerCard1>
          <styles.TextCard1>
            Os registros indicam a movimentação da moto até a Barra da Tijuca.           </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Left> */}
    </>
  );
}
export function Seop9(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <>
      {/* <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      </styles.ChapterGenericDiv> */}
      <styles.ChapterGenericDiv1Center >
        <styles.ContainerCard1>
          <video autoPlay loop src="https://www.shutterstock.com/shutterstock/videos/1107056163/preview/stock-footage-audio-voice-message-animation-playing-record-voice-message-animation-voice-chat-voice-mail.webm"></video>

          <styles.TextCard1>
            Central Disque Denúncia, 12h55.  Chega uma denúncia anônima denunciando uma pessoa refém na mesma área. Os agentes repassam as informações à polícia, que já está no local, e encontraram a moto, agora sem placa, graças às imagens das câmeras de segurança.          </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Center>
    </>
  );
}
export function Seop10(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <>
      <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
        <styles.ContainerCard1>
          <styles.NewsImage src={arrested}></styles.NewsImage>
          <styles.Credito>
            Imagem: Bandido sendo preso.
          </styles.Credito>
          <styles.TextCard1>
            13h33. Graças à denúncia e ao rastreio das placas dos veículos, a polícia encontra o cativeiro, prende o segundo suspeito e liberta o refém.
          </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Center>
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
        <styles.BallsContainer>
          <styles.BallWithLabel>
            <styles.Ball1 />
            <styles.BallLabel>Câmeras</styles.BallLabel>
          </styles.BallWithLabel>
          <styles.BallWithLabel>
            <styles.Ball2 />
            <styles.BallLabel>Radares</styles.BallLabel>
          </styles.BallWithLabel>
        </styles.BallsContainer>
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

  return (<>
    <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        {/* <styles.NewsImage src={imagem17}></styles.NewsImage>
        <styles.Credito>
          Imagem: Documento da moto.
        </styles.Credito> */}
        <styles.TextCard1>
          As imagens revelam a placa da moto. Ela é inserida no sistema.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
    <styles.ChapterGenericDiv1Center >
      <styles.ContainerCard1>

        <styles.TextCard1>
          A moto também tem seu trajeto do dia rastreado.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
  </>
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
        <styles.NewsImage src={radar_foto}></styles.NewsImage>
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
    <styles.FimDiv ref={props.chapRef} id={props.id}>
      <styles.IntroTitle id={"fimTitle"}>Conclusão</styles.IntroTitle>
      <styles.IntroText>
        Além do cerco eletrônico, a CIVITAS atua em dois outros eixos:
        <br></br>
        <br></br>

        A Rede de Vigilância Comunitária aproveita informações já produzidas pelos cidadãos para entender, monitorar e responder a dinâmicas criminais e incidentes de desordem de forma célere e eficaz. Utiliza diversas fontes de dados, como linhas diretas e serviços de denúncia (1746 e disque denúncia),  raspagem de redes sociais e integração com câmeras privadas para obter uma visão abrangente e dinâmica da cidade.
        <br></br>
        <br></br>
        Em Controle, segurança urbana e cidadania o objetivo é criação e execução de estratégias de prevenção ao crime e à violência que podem ser implementadas com os recursos e a infraestrutura municipais. Por exemplo, uso das câmeras e Inteligência Artificial para identificar movimentações suspeitas em túneis da cidade, evitando roubos, furtos e arrastões.
        <br></br>
        <br></br>
        No fim do dia, cada crime deixa um rastro. Através da integração entre vigilância, tecnologia e inteligência, a CIVITAS monitora um cinturão de tecnologia pela cidade inteira e assim dá apoio à segurança pública do Rio.

      </styles.IntroText>
      <div className="w-44 mt-[200px] lg:mt-[200px] lg:w-56"></div>
    </styles.FimDiv>
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
