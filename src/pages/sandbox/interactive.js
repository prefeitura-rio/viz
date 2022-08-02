import styled from "styled-components";
import logo1 from "../images/logo1.png";
import * as styles from "./chapters.style";
// TODO: REMOVE
import LineChart from "../../../components/charts/line_chart";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Logo = styled.img`
  width: 150px;
  // background-color: #01baef;
  margin-bottom: auto;
  margin-top: 2%;
  grid-area: logo;
`;

const Title = styled.div`
  width: 80%;

  color: #ffffff;
  // background-color: #01baef;
  font-family: "Redaction", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.3;
  margin: auto;
  text-align: center;
  grid-area: titulo;
`;

const AuthorText = styled.div`
  width: 80%;
  color: #ffffff;
  // background-color: #01baef;
  font-family: "MetricWeb", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.3;
  margin-bottom: auto;
  text-align: center;
  grid-area: subtitulo;
`;

const Interactive = styled.div`
  width: 80%;
  color: #ffffff;
  // background-color: #01baef;
  font-family: "MetricWeb", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.3;
  margin: auto;
  text-align: center;
  grid-area: nova;
`;

const ContainerCard = styled.div`
  min-width: 250px;
  margin: auto;
  width: 40%;
  padding: 20px;
  background-color: rgba(20, 19, 18, 0.85);
  opacity: 1;
  border-radius: 10px;
`;

const TextCard = styled.div`
  color: #dbdbdb;
  font-family: "Redaction", sans-serif;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
`;

const TextRed = styled.div`
  background: #be5b5b;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
`;

const TextBlue = styled.div`
  background: #18b4c9;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
`;

const TextOrange = styled.div`
  background: #c36a2d;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
`;

const TextOrange1 = styled.div`
  background: #c4a011;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
`;

const IntroTitle = styled.div`
  grid-area: titulo;
  color: #ffffff;
  font-family: "Redaction", sans-serif;
  font-weight: 700;
  font-size: 2.7rem;
  line-height: 1;
  text-align: right;
  opacity: 1;
`;

const IntroText = styled.div`
  grid-area: texto;
  // background: #ffffff;
  // justify-self: start;
  // align-items: start;
  text-align: justify;
  margin-bottom: 30%;
  vertical-align: middle;
  // margin: auto;
  color: #dbdbdb;
  font-family: "Redaction", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  opacity: 1;
`;

export function One(
  props = {
    id: "",
    ref: null,
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterOneDiv id={props.id} ref={props.ref}>
      <Logo src={logo1}></Logo>
      <Title>
        Um ponto de virada na história do transporte municipal do Rio de Janeiro
      </Title>
      <AuthorText>
        Desenvolvido por{" "}
        <a
          style={{ fontSize: "1rem", fontWeight: "700", color: "#ffffff" }}
          href="https://www.dados.rio/"
          target="_blank"
          rel="noreferrer"
        >
          Escritório de Dados
        </a>{" "}
        e
        <a
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            color: "#ffffff",
            margin: "4px",
          }}
          href="http://www.rio.rj.gov.br/web/smtr"
          target="_blank"
          rel="noreferrer"
        >
          Secretaria Municipal de Transportes
        </a>
      </AuthorText>
      <Interactive>
        Para interagir com o mapa{" "}
        <a
          style={{
            fontSize: "1rem",
            fontWeight: "700",
            color: "#ffffff",
            margin: "4px",
          }}
          href="https://viz.dados.rio/#/especial-sppo/trips"
          target="_blank"
          rel="noreferrer"
        >
          clique aqui
        </a>
      </Interactive>
    </styles.ChapterOneDiv>
  );
}

// export function Two(
//   props = {
//     id: "",
//     progress: 0,
//   }
// ) {
//   props = setDefaultProps(props);

//   return (
//     <styles.ChapterTwoDiv id={props.id}>
//       <IntroTitle id={"intro"}>Introdução</IntroTitle>
//       <IntroText>
//         Os cariocas sabem bem quais os problemas enfrentados todos os dias no
//         transporte público da cidade do Rio de Janeiro. E é preciso reconhecer
//         que o sistema por ônibus está ruim e precisa de ajuda. <br />
//         <br />
//         Uma série de fatores levou a este colapso, o que só resultou no
//         sofrimento da população que depende do transporte público da cidade para
//         se locomover. Por isso,{" "}
//         <TextOrange>
//           a Prefeitura vai regularizar as linhas operantes,
//         </TextOrange>{" "}
//         <TextOrange>retomar as inoperantes</TextOrange> e{" "}
//         <TextOrange>implementar serviços noturnos.</TextOrange>
//         <br />
//         <br />
//         Por meio de um acordo judicial, estabelecido entre a Prefeitura,
//         consórcios e o Ministério Público, linhas de ônibus serão retomadas e
//         criadas na capital fluminense. A partir de agora, o transporte público
//         por ônibus será subsidiado pelo município. As empresas, além da tarifa
//         de R$ 4,05, vão receber um valor adicional pelo serviço efetivamente
//         prestado com base no quilômetro rodado. <br />
//         <br />
//         Nesta página explicaremos como a Prefeitura fará isso. <br />
//       </IntroText>
//     </styles.ChapterTwoDiv>
//   );
// }

// export function Three(
//   props = {
//     id: "",
//     ref: null,
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <styles.ChapterGenericDiv id={props.id} ref={props.ref}>
//       <ContainerCard>
//         <TextCard>
//           As mudanças começaram nos bairros que precisavam mais de transporte.
//           <TextRed>Sepetiba,</TextRed> viu o retorno de suas linhas.
//         </TextCard>
//       </ContainerCard>
//     </styles.ChapterGenericDiv>
//   );
// }

// export function Four(
//   props = {
//     id: "",
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <styles.ChapterGenericDiv id={props.id}>
//       <ContainerCard>
//         <TextCard>
//           As linhas <TextOrange> 870,</TextOrange> e{" "}
//           <TextOrange1>871</TextOrange1> voltaram em sepetiba, conectando o
//           bairro com o BRT, etc…
//         </TextCard>
//       </ContainerCard>
//     </styles.ChapterGenericDiv>
//   );
// }

// export function Five(
//   props = {
//     id: "",
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <styles.ChapterGenericDiv id={props.id}>
//       <ContainerCard>
//         <TextCard>
//           Outros <TextRed>bairros</TextRed> já estão vendo suas{" "}
//           <TextOrange>linhas</TextOrange> voltarem. Junto com as X linhas que já
//           existiam, as 39 linhas estão voltando, completando o sistema viário da
//           cidade.
//         </TextCard>
//       </ContainerCard>{" "}
//     </styles.ChapterGenericDiv>
//   );
// }

// export function Six(
//   props = {
//     id: "",
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <styles.ChapterGenericDiv id={props.id}>
//       <ContainerCard>
//         <TextCard>
//           Aqui você vai ver as <TextOrange>linhas novas</TextOrange> e as{" "}
//           <TextBlue>antigas linhas.</TextBlue>
//         </TextCard>
//       </ContainerCard>
//     </styles.ChapterGenericDiv>
//   );
// }
// const IntroGestaoBG = styled.div`
//   background-color: rgba(0, 0, 0, 0);
//   position: relative;
//   z-index: -2;
//   height: 150vh;
//   width: 101%;
//   margin-left: -0.5%;
//   margin-bottom: -150vh;
//   // filter: blur(50px);
// `;

// export function Seven(
//   props = {
//     id: "",
//     progress: 0,
//   }
// ) {
//   props = setDefaultProps(props);

//   return (
//     <>
//       <IntroGestaoBG id={"gestao-blur"} />
//       <styles.ChapterTwoDiv id={props.id}>
//         <IntroTitle id={"intro"}>O fim da Caixa Preta</IntroTitle>
//         <IntroText>
//           Em 2010, a Secretaria Municipal de Transportes do Rio de Janeiro
//           licitou a prestação de serviço de transportes na cidade.{" "}
//           <TextOrange>
//             Com isso, toda a responsabilidade pelo transporte por ônibus ficou
//             com os consórcios.
//           </TextOrange>
//           Isso incluía não só a operação de todas as linhas municipais, como
//           também a fonte de renda do sistema, o Bilhete Único Carioca (BUC).
//           <br />
//           <br />
//           Após anos em vigor, a concessão, entretanto, apresentou problemas: a
//           má gestão dos concessionários com o serviço oferecido e uma grande
//           crise reputacional do sistema, envolvida em diversos escândalos.
//           <br />
//           <br />A falta de transparência da bilhetagem do sistema de bilhete
//           único também era um problema.{" "}
//           <TextOrange>
//             Uma verdadeira caixa-preta era formada com os dados de arrecadação e
//             distribuição dos lucros da bilhetagem.
//           </TextOrange>
//           <br />
//           <br />
//           Com um transporte público sofrido, de ônibus depredados e
//           superlotados, somou-se o fator pandemia e inflação. Historicamente, o
//           número de passageiros já vinha diminuindo. Com a chegada da Covid-19,
//           a situação se agravou.
//           <br />
//           <br />
//           Além disso, o preço do diesel apresentou um aumento de quase 131% em
//           dois anos, segundo dados da Agência Nacional do Petróleo, Gás Natural
//           e Biocombustíveis (ANP). O preço de peças para reposição nos veículos
//           também sofreu inflação, com a desvalorização do real frente a moeda
//           americana. Com isso, as empresas responsáveis pelo transporte optaram
//           por diminuir a frota em lugares que sem muitos passageiros, chegando a
//           cancelar a circulação de algumas linhas.
//         </IntroText>
//       </styles.ChapterTwoDiv>
//     </>
//   );
// }

// export function Eight(
//   props = {
//     id: "",
//     progress: 0,
//   }
// ) {
//   props = setDefaultProps(props);
//   return (
//     <>
//       <styles.ChapterLineChart id={props.id}>
//         <LineChart
//           id="line-chart"
//           canvasId="line-chart"
//           data={[
//             { x: 1, y: 1 },
//             { x: 2, y: 4 },
//             { x: 3, y: 9 },
//             { x: 4, y: 16 },
//             { x: 5, y: 25 },
//             { x: 6, y: 36 },
//             { x: 7, y: 49 },
//             { x: 8, y: 64 },
//             { x: 9, y: 81 },
//             { x: 10, y: 100 },
//             { x: 11, y: 121 },
//             { x: 12, y: 144 },
//             { x: 13, y: 169 },
//             { x: 14, y: 196 },
//             { x: 15, y: 225 },
//             { x: 16, y: 256 },
//             { x: 17, y: 289 },
//             { x: 18, y: 324 },
//             { x: 19, y: 361 },
//             { x: 20, y: 400 },
//             { x: 21, y: 441 },
//             { x: 22, y: 484 },
//             { x: 23, y: 529 },
//             { x: 24, y: 576 },
//             { x: 25, y: 625 },
//           ]}
//         />
//       </styles.ChapterLineChart>
//     </>
//   );
// }

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
