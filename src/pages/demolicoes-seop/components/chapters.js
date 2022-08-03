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
  text-align: justify;
  margin-bottom: 30%;
  vertical-align: middle;
  color: #ffffff;
  font-family: "Redaction", sans-serif;
  font-size: 1.2rem;
  line-height: 1.5;
  opacity: 1;
`;

const TextOrange = styled.div`
  background: #c36a2d;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
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
    </styles.ChapterOneDiv>
  );
}

export function Two(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);

  return (
    <styles.ChapterTwoDiv id={props.id}>
      <IntroTitle id={"intro"}>Introdução</IntroTitle>
      <IntroText>
        Os cariocas sabem bem quais os problemas enfrentados todos os dias no
        transporte público da cidade do Rio de Janeiro. E é preciso reconhecer
        que o sistema por ônibus está ruim e precisa de ajuda. <br />
        <br />
        Uma série de fatores levou a este colapso, o que só resultou no
        sofrimento da população que depende do transporte público da cidade para
        se locomover. Por isso,{" "}
        <TextOrange>
          a Prefeitura vai regularizar as linhas operantes,
        </TextOrange>{" "}
        <TextOrange>retomar as inoperantes</TextOrange> e{" "}
        <TextOrange>implementar serviços noturnos.</TextOrange>
        <br />
        <br />
        Por meio de um acordo judicial, estabelecido entre a Prefeitura,
        consórcios e o Ministério Público, linhas de ônibus serão retomadas e
        criadas na capital fluminense. A partir de agora, o transporte público
        por ônibus será subsidiado pelo município. As empresas, além da tarifa
        de R$ 4,05, vão receber um valor adicional pelo serviço efetivamente
        prestado com base no quilômetro rodado. <br />
        <br />
        Nesta reportagem especial explicaremos como a Prefeitura fará isso.{" "}
        <br />
      </IntroText>
    </styles.ChapterTwoDiv>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
