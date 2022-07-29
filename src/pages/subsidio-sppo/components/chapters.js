import styled from "styled-components";
import logo1 from "../images/logo1.png";
import * as styles from "./chapters.style";
// TODO: REMOVE
import LineChart from "../../../components/charts/line_chart";
import { Tween, Timeline } from "react-gsap";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";

export const Logo = styled.img`
  width: 150px;
  // background-color: #01baef;
  margin-bottom: auto;
  margin-top: 10%;
  grid-area: top;
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
  grid-area: middle;
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
  grid-area: bottom;
`;

const ContainerCard = styled.div`
  min-width: 250px;
  margin: auto;
  width: 40%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.92);
  opacity: 1;
  border-radius: 15px;
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
  display: inline-block;
  padding: 1px 8px 1px 8px;
  margin: 5px;
`;

const TextBlue = styled.div`
  background: #18b4c9;
  color: #fff;
  display: inline-block;
  padding: 1px 8px 1px 8px;
  margin: 5px;
`;

const TextOrange = styled.div`
  background: #f4902c;
  color: #fff;
  display: inline-block;
  padding: 1px 8px 1px 8px;
  margin: 5px;
`;

const IntroTitle = styled.div`
  grid-area: title;
  margin: auto;
  color: #ffffff;
  font-family: "Redaction", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1;
  text-align: left;
  opacity: 1;
`;

const IntroText = styled.div`
  grid-area: text;
  background: #f4902c;
  // justify-self: start;
  // align-items: start;
  text-align: justify;
  margin-bottom: 30%;
  margin-top: 5%;
  vertical-align: middle;
  // margin: auto;
  color: #dbdbdb;
  font-family: "Redaction", sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  opacity: 1;
`;

export function One(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterOneDiv id={props.id}>
      <Logo src={logo1}></Logo>
      <Title>
        Um ponto de virada na história do transporte municipal do Rio de Janeiro
      </Title>
      <AuthorText>
        Desenvolvido por <b>Escritório de Dados</b> e{" "}
        <b>Secretaria Municipal de Transportes</b>
      </AuthorText>
    </styles.ChapterOneDiv>
  );
}

export function Two(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard>
        <TextCard>
          As mudanças começaram nos bairros que precisavam mais de transporte.
          <TextRed>Sepetiba,</TextRed> viu o retorno de suas linhas.
        </TextCard>
      </ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Three(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard>
        <TextCard>
          As <TextBlue>linhas</TextBlue> 870, 871 voltaram em sepetiba,
          conectando o bairro com o BRT, etc…
        </TextCard>
      </ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Four(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard>
        <TextCard>
          Outros <TextRed>bairros</TextRed> já estão vendo suas linhas voltarem.
          Junto com as X linhas que já existiam, as 39 linhas estão voltando,
          completando o sistema viário da cidade.
        </TextCard>
      </ContainerCard>{" "}
    </styles.ChapterGenericDiv>
  );
}

export function Five(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <styles.ChapterGenericDiv id={props.id}>
      <ContainerCard>
        <TextCard>
          Mapa dos <TextOrange>ônibus</TextOrange> das linhas que voltaram com
          zoom out para a cidade toda
        </TextCard>
      </ContainerCard>
    </styles.ChapterGenericDiv>
  );
}

export function Six(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);
  return (
    <Timeline totalProgress={props.progress} paused>
      <Tween
        ease={CustomEase.create(
          "custom",
          "M0,0,C0.084,0.61,0.214,0.802,0.28,0.856,0.356,0.918,0.374,1,1,1"
        )}
        from={{ opacity: 0.5 }}
        to={{ opacity: 1 }}
        position={0}
        duration={1}
      >
        <styles.ChapterSixDiv id={props.id}>
          <IntroTitle id={"intro"}>Introdução</IntroTitle>
          <IntroText>
            Os cariocas sabem bem quais os problemas enfrentados todos os dias
            no transporte público da cidade do Rio de Janeiro. E é preciso
            reconhecer que o sistema por ônibus está ruim e precisa de ajuda.{" "}
            <br />
            <br />
            Uma série de fatores levou a este colapso, o que só resultou no
            sofrimento da população que depende do transporte público da cidade
            para se locomover. Por isso, a Prefeitura vai regularizar as linhas
            operantes, retomar as inoperantes e implementar serviços noturnos.
            <br />
            <br />
            Por meio de um acordo judicial, estabelecido entre a Prefeitura,
            consórcios e o Ministério Público, linhas de ônibus serão retomadas
            e criadas na capital fluminense. A partir de agora, o transporte
            público por ônibus será subsidiado pelo município. As empresas, além
            da tarifa de R$ 4,05, vão receber um valor adicional pelo serviço
            efetivamente prestado com base no quilômetro rodado. <br />
            <br />
            Nesta página explicaremos como a Prefeitura fará isso. <br />
          </IntroText>
        </styles.ChapterSixDiv>
      </Tween>
    </Timeline>
  );
}

export function Seven(
  props = {
    id: "",
    progress: 0,
  }
) {
  props = setDefaultProps(props);
  console.log(props.progress);
  return (
    <>
      <styles.ChapterLineChart id={props.id}>
        {" "}
        <LineChart
          canvasId="line-chart"
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 16 },
            { x: 5, y: 25 },
            { x: 6, y: 36 },
            { x: 7, y: 49 },
            { x: 8, y: 64 },
            { x: 9, y: 81 },
            { x: 10, y: 100 },
            { x: 11, y: 121 },
            { x: 12, y: 144 },
            { x: 13, y: 169 },
            { x: 14, y: 196 },
            { x: 15, y: 225 },
            { x: 16, y: 256 },
            { x: 17, y: 289 },
            { x: 18, y: 324 },
            { x: 19, y: 361 },
            { x: 20, y: 400 },
            { x: 21, y: 441 },
            { x: 22, y: 484 },
            { x: 23, y: 529 },
            { x: 24, y: 576 },
            { x: 25, y: 625 },
          ]}
          progress={props.progress}
        />
      </styles.ChapterLineChart>
    </>
  );
}

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    id: "",
  };

  return { ...defaultProps, ...providedProps };
};
