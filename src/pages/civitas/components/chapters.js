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
import civitas_icon from "../images/civitas_icon.png";
import rio_prefeitura from "../images/rio_prefeitura.png";
import seop2 from "../images/seop2.png";
import seop3 from "../images/seop3.png";
import seop4 from "../images/seop4.png";
import grafico from "../images/grafico.png";
import legenda from "../images/legenda.png";
import logoed from "../images/logoed.png";
import wave_sound from "../images/wave_sound.gif";

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
          Estamos de olho!
        </styles.Title>
        <styles.Subtitle>
          Como o município pode ajudar a melhorar a segurança pública? O papel da CIVITAS no Rio de Janeiro
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
      <styles.ChapterGenericDiv1RightBig ref={props.chapRef} id={props.id}>
        <styles.ContainerCard1>
          <styles.TextCard1>
            Rua Dias da Cruz, Méier, 10h17. O carro é utilizado num assalto a uma agência bancária.        </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1RightBig>
      <styles.ChapterGenericDiv1Left>
        <styles.ContainerCard1>
          <styles.TextCard1>
            Uma mulher é sequestrada pelos criminosos como refém.         </styles.TextCard1>
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
          <styles.TextCard1>
            COR, 10h28. A polícia Civil é informada do roubo seguido de sequestro, abre a investigação e pede ajuda à Civitas. Um ofício chega à Civitas solicitando as imagens das câmeras, registro de radares próximos e monitoramento desse veículo em tempo real. A equipe da Civitas entra em ação. Através das imagens, descobre o  modelo e cor do carro.
          </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Right>
    </>
  );
}
export function Exemplo71(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <>
      <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
        <styles.ContainerCard1>
          <styles.NewsImage src={wave_sound}></styles.NewsImage>

          <styles.TextCard1>
            Disque Denúncia, 10h29. Uma chamada anônima informa os primeiros 3 dígitos da placa do carro usado no assalto. A informação parcial é repassada para a Civitas.  </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Center>
    </>
  );
}
export function Exemplo72(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <>
      <styles.ChapterGenericDiv1Left ref={props.chapRef} id={props.id}>
        <styles.ContainerCard1>
          <styles.TextCard1>
            COR, 10h30. A placa parcial com somente 3 dígitos e a descrição do carro são denunciadas e as informações inseridas no aplicativo próprio, desenvolvido pela Prefeitura do Rio, que  conecta diversas bases de dados. </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Left>
    </>
  );
}
export function Exemplo73(
  props = {
    id: "",
    chapRef: null,
  }
) {
  return (
    <>
      <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
        <styles.ContainerCard1>
          <styles.TextCard1>
            Com isso, é possível completar a placa e gerar todo um histórico de circulação desse veículo pela cidade, mostrando diversos padrões. Esses dados são utilizados para gerar um relatório automático e auditável, que é enviado à polícia.      </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Center>
    </>
  );
}

export function Grafico1(
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
            Ao mesmo tempo, a placa é cadastrada  para o monitoramento em tempo real. Se esse carro transitar pela cidade, um alerta sonoro apitará na Sala de Situação da Civitas.   </styles.TextCard1>
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
    <>
      <styles.ChapterGenericDiv ref={props.chapRef} id={props.id}>
      </styles.ChapterGenericDiv>
      <styles.ChapterGenericDiv1Center >
        <styles.ContainerCard1>
          <styles.TextCard1>
            Relatório automático de histórico de circulação do veículo: placa FBR2A23   </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Center>
    </>
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
        <styles.ContainerCard1>
          <styles.TextCard1>
            Com a informação em mãos, a polícia emite um mandado de busca e apreensão no local e detém o segundo suspeito. E assim, com inteligência, tecnologia e vigilância, mais uma quadrilha de assaltos é desmantelada.         </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv>

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
export function Seop81(
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
          <styles.TextCard1>
            Essa foi uma simulação. Agora veja a diversidade de casos reais em que o apoio da Civitas foi solicitado pelas forças de segurança:           </styles.TextCard1>
        </styles.ContainerCard1>
      </styles.ChapterGenericDiv1Center>
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
          {/* <styles.NewsImage src={wave_sound}></styles.NewsImage> */}

          <styles.TextCard1>
            Com a informação em mãos, a polícia emite um mandado de busca e apreensão no local e detém o segundo suspeito. E assim, com inteligência, tecnologia e vigilância, mais uma quadrilha de assaltos é desmantelada.   </styles.TextCard1>
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
          {/* <styles.Credito>
            Bandido sendo preso.
          </styles.Credito> */}
          <styles.TextCard1>
            13h33. Graças à denúncia e ao rastreio das placas dos veículos, a polícia encontra o cativeiro, prende a quadrilha envolvida e liberta o refém.
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
          Mas o que a Civitas faz, afinal? Uma das atuações da Central é o Cerco Eletrônico, que utiliza o parque tecnológico de mais de 3.800 câmeras do Centro de Operações Rio (COR) e 1.500 radares da CET-Rio espalhados por toda a cidade para rastrear atividades suspeitas e auxiliar as forças de segurança.    </styles.TextCard1>
        <styles.BallsContainer>
          <styles.BallWithLabel>
            <styles.Ball1 />
            <styles.BallLabel>Câmeras</styles.BallLabel>
          </styles.BallWithLabel>
          <styles.BallWithLabel style={{ paddingLeft: "16px" }}>
            <styles.Ball2 />
            <styles.BallLabel>Radares</styles.BallLabel>
          </styles.BallWithLabel>
        </styles.BallsContainer>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
  );
}
export function Exemplo10(
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
          A Civitas vê tudo na cidade: ruas, placas, modelos de carros, monumentos, praias, eventos e atividades suspeitas. Todas as zonas são monitoradas 24h por dia, sete dias por semana, e essas informações são armazenadas em um grande banco de dados seguro.
          <br></br>
          <br></br>
          E o que a Prefeitura faz com tanta informação?
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
  );
}
export function Exemplo11(
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
          Vejamos um exemplo de atuação da Civitas junto às forças de segurança numa simulação baseada em possibilidades reais de atuação:       </styles.TextCard1>
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
        <styles.TextCard1 id="hour1">
          Rua Ematuba, Senador Vasconcelos, Rio de Janeiro, 5h43 da manhã.
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
          Dois homens numa moto param ao lado de um Renault Sandero prata estacionado na rua. Um deles desce da moto, arromba o carro e faz uma ligação direta.  Os dois arrancam.        </styles.TextCard1>
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
          35ª DP, Campo Grande, 11h02. O dono do Sandero percebe o furto e vai à delegacia denunciar (depois do veículo ter sido recuperado!). </styles.TextCard1>
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
          Documento da moto.
        </styles.Credito> */}
        <styles.TextCard1>
          A Civitas identifica a moto e a encontra passando junto com o carro em seis radares. O histórico da moto mostra onde ela sempre estaciona.
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
      {/* <styles.ContainerCard1>
        <styles.TextCard1>
          Bento Ribeiro. Com os detalhes do furto a polícia consegue solicitar à Civitas imagens das câmeras do local do furto. 
          </styles.TextCard1>
      </styles.ContainerCard1> */}
    </styles.ChapterGenericDiv1Center>
  );
}
export function Seop51(
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
          COR, 10h50. O acesso às câmeras do local do assalto revela que havia uma moto dando cobertura ao crime. </styles.TextCard1>
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
    <div ref={props.chapRef} id={props.id}>

    </div>
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Estácio, 10h45. 26 minutos depois do assalto, o carro é interceptado pela Polícia Civil, a vítima é resgatada e um dos suspeitos é detido em flagrante, em tempo recorde.
        </styles.TextCard1>
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
      <styles.ChapterGenericDiv1Center style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} ref={props.chapRef} id={props.id}>
        <styles.ContainerCard1>
          {/* <styles.NewsImage src={alert}></styles.NewsImage> */}

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
          Imagem do suspeito
        </styles.Credito>
        <styles.TextCard1>
          {/* <br></br> */}
          <div style={{ paddingBottom: "20px" }}></div>
          COR, 10H36. As imagens de câmeras do local do crime são acessadas e analisadas. Uma parcial de um suspeito é levantada.  O vídeo com todas as informações é enviado para a polícia, que analisa e levanta as características físicas e a vestimenta do acusado.
          Com o histórico de movimentação do carro em mãos e a parcial, a polícia consegue se preparar melhor para abordar o suspeito.

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
          A cidade do Rio de Janeiro é uma grande metrópole: 6.748 milhões habitantes, 32.499 ruas e mais de 3 milhões de veículos circulando por dia. Se dois caras numa moto resolvem infringir a lei, como a Prefeitura do Rio pode ajudar a resolver? A Civitas é uma central de inteligência, vigilância e tecnologia voltada para o apoio à segurança pública carioca.    </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
  );
}

// export function Exemplo5(
//   props = {
//     id: "",
//     chapRef: null,
//   }
// ) {
//   props = setDefaultProps(props);

//   return (
//     <styles.ChapterGenericDiv1Center ref={props.chapRef} id={props.id}>
//       <styles.ContainerCard1>
//         <styles.NewsImage src={radar_foto}></styles.NewsImage>
//         <styles.Credito>
//           Imagem do veículo captada por equipamento do Cerco Eletrônico
//         </styles.Credito>
//         {/* <styles.TextCard1>
//           No fim do ano passado, um imóvel onde funcionaria um supermercado, com
//           garagem subterrânea e espaços alugados, estava sendo{" "}
//           <styles.Textyellow>
//             {" "}
//             <a
//               className="p-1"
//               href="https://prefeitura.rio/ordem-publica/seop-e-mprj-realizam-operacao-para-demolir-construcao-irregular-erguida-pela-milicia-de-rio-das-pedras/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               construído irregularmente
//             </a>
//           </styles.Textyellow>{" "}
//           na Estrada do Itanhangá, em Muzema, foi demolido pela Prefeitura. Uma
//           estimativa feita em parceria com o Ministério Público avaliou que
//           criminosos investiram aproximadamente R$ 5 milhões no empreendimento
//           irregular.
//         </styles.TextCard1> */}
//       </styles.ContainerCard1>
//     </styles.ChapterGenericDiv1Center>
//   );
// }

export function BeforeFim(
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
export function Fim(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.FimDiv ref={props.chapRef} id={props.id}>
      {/* <styles.IntroTitle id={"fimTitle"}>Conclusão</styles.IntroTitle> */}
      <styles.IntroText>
        Além do cerco eletrônico, a Civitas atua em dois outros eixos:

        <br></br>
        <br></br>

        A Rede de Vigilância Comunitária aproveita informações já produzidas pelos cidadãos para entender, monitorar e responder a dinâmicas criminais e incidentes de desordem de forma rápida e eficaz. Para isso, utiliza diversas fontes de dados, como linhas diretas e serviços de denúncia (1746 e Disque Denúncia),  raspagem de assuntos nas redes sociais e integração com câmeras privadas para obter uma visão abrangente e dinâmica da cidade.
        <br></br>
        <br></br>
        Outra atuação da central é a de Controle, segurança urbana e cidadania. Aqui, o objetivo é criação e execução de estratégias de prevenção ao crime e à violência que podem ser implementadas com os recursos e a infraestrutura municipais. Por exemplo, uso das câmeras e Inteligência Artificial para identificar movimentações suspeitas em túneis da cidade, evitando roubos, furtos e arrastões.
        <br></br>
        <br></br>
        Todo crime deixa um rastro. Mas com a integração entre vigilância, tecnologia e inteligência, a Civitas monitora a cidade inteira, fazendo um cinturão eletrônico e, assim, dá apoio à segurança pública do Rio.
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "160px", paddingBototm: "120px", justifyContent: "center" }}>
          <img src={civitas_icon} width={145}></img>
          <img src={rio_prefeitura} style={{ marginLeft: "20%" }} width={80}></img>
        </div>
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
    <styles.ChapterGenericDiv1CenterBig ref={props.chapRef} id={props.id}>
      <styles.ContainerCard1>
        <styles.TextCard1>
          Estácio, 10h35. O carro passa em outro equipamento do cerco eletrônico, um alerta em tempo real é gerado e pelas imagens, operadores confirmam se tratar do veículo suspeito. A polícia é prontamente avisada.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1CenterBig>
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
          Rua Sapopemba, Bento Ribeiro, 5h55. O Sandero passa por um dos equipamentos do Cerco Eletrônico, no sentido Centro.        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Right>
  );
}

export function Exemplo41(
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
        {/* <styles.Credito>
          Imagem do veículo captada por equipamento do Cerco Eletrônico
        </styles.Credito> */}
        <styles.TextCard1>
          Na meia hora seguinte, ele passa por mais cinco equipamentos. Todo o histórico de circulação é registrado e armazenado pela Civitas.
        </styles.TextCard1>
      </styles.ContainerCard1>
    </styles.ChapterGenericDiv1Center>
  );
}
export function Exemplo42(
  props = {
    id: "",
    chapRef: null,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterGenericDiv1CenterBig ref={props.chapRef} id={props.id}>

    </styles.ChapterGenericDiv1CenterBig>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
