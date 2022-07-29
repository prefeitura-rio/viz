import styled from "styled-components";
import logo1 from "../images/logo1.png";

// export const HeaderImage = styled.div`
//   background-image: url(${logo});
//   position: absolute;
//   bottom: 10%;
//   width: 1000px;
// `;

const Container = styled.div`
  min-height: 50px;
  width: "50%";
  padding: 40px;
  margin-left: 30%;
  margin-right: 30%;
  background-color: rgba(0, 0, 0, 0.92);
  opacity: 1;
  border-radius: 15px;
`;

const Container1 = styled.div`
  height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.9);
`;

const Container2 = styled.div`
  max-width: 1000px;
  min-width: 1000px;
  margin: auto;
  overflow: auto;
  min-height: 100px;
  padding: 40px;
  text-align: left;
`;

const Container3 = styled.div`
  max-width: 1000px;
  min-width: 1000px;
  margin: auto;
  overflow: auto;
  min-height: 100px;
  padding: 40px;
  position: "relative";
`;

const TextH1 = styled.div`
  color: rgba(244, 144, 44);
  font-family: "poppins", sans-serif !important;
  font-weight: 700;
  font-size: 5.7rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0px;
  text-align: "left";
`;

const TextH2 = styled.div`
  color: rgba(244, 144, 44);
  font-family: "poppins", sans-serif !important;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0px;
  text-align: left;
`;

const TextH3 = styled.div`
  color: #ffffff;
  font-family: "Redaction", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0px;
  text-align: left;
`;

const TextH4 = styled.div`
  color: #ffffff;
  font-family: "Redaction", sans-serif;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 0px;
  text-align: center;
`;

const TextH5 = styled.div`
  color: #ffffff;
  font-family: "MetricWeb", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.3;
  margin-top: 30px;
  margin-bottom: 0px;
  text-align: center;
`;

const TextParagraph = styled.div`
  color: #dbdbdb;
  font-family: "Redaction", sans-serif;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
`;

const TextParagraph1 = styled.div`
  color: #dbdbdb;
  font-family: "Redaction", sans-serif;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
`;

const TextColor1 = styled.div`
  background: #be5b5b;
  color: #fff;
  display: inline-block;
  padding: 1px 8px 1px 8px;
  margin: 5px;
`;

const TextColor2 = styled.div`
  background: #18b4c9;
  color: #fff;
  display: inline-block;
  padding: 1px 8px 1px 8px;
  margin: 5px;
`;

const TextColor3 = styled.div`
  background: #f4902c;
  color: #fff;
  display: inline-block;
  padding: 1px 8px 1px 8px;
  margin: 5px;
`;

const GridGeral = styled.div`
  display: flex;
  column-gap: 40px;
`;

const GridNumero = styled.div`
  display: grid;
  flex-direction: column;
  margin-bottom: 0px;
`;

const Photo = styled.div`
  position: absolute;
  top: 4%;
  margin-left: 23%;
`;

const Blur = styled.div`
  filter: blur(8px);
`;

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    containerPadding: "40px",
    titleColor: "#11a686",
    paragraphColor: "#",
    id: "",
    textH1: "",
    textH2: "",
    textParagraph: "",
    textAlign: "left",
    minHeight: "100px",
    width: "50%",
    marginLeft: "25%",
    marginTop: "10%",
  };

  return { ...defaultProps, ...providedProps };
};

export function One(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <Container3 id={props.id}>
      <Photo>
        <img src={logo1} width={120} alt="Logo" />
      </Photo>
      <TextH4>
        Um ponto de virada na história do transporte municipal do Rio de Janeiro
      </TextH4>
      <TextH5>
        Desenvolvido por <b>Escritório de Dados</b> e{" "}
        <b>Secretaria Municipal de Transportes</b>
      </TextH5>
    </Container3>
  );
}

export function Two(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <Container id={props.id}>
      <TextParagraph>
        As mudanças começaram nos bairros que precisavam mais de transporte.
        <TextColor1>Sepetiba,</TextColor1> viu o retorno de suas linhas.
      </TextParagraph>
    </Container>
  );
}

export function Three(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <Container id={props.id}>
      <TextParagraph>
        As <TextColor2>linhas</TextColor2> 870, 871 voltaram em sepetiba,
        conectando o bairro com o BRT, etc…
      </TextParagraph>
    </Container>
  );
}

export function Four(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <Container id={props.id}>
      <TextParagraph>
        Outros <TextColor1>bairros</TextColor1> já estão vendo suas linhas
        voltarem. Junto com as X linhas que já existiam, as 39 linhas estão
        voltando, completando o sistema viário da cidade.
      </TextParagraph>
    </Container>
  );
}

export function Five(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <Container id={props.id}>
      <TextParagraph>
        Mapa dos <TextColor3>ônibus</TextColor3> das linhas que voltaram com
        zoom out para a cidade toda
      </TextParagraph>
    </Container>
  );
}

export function Six(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <Container1 id={props.id}>
      <Container2>
        <GridGeral>
          <div>
            <TextH3>Introdução</TextH3>
          </div>
          <div>
            <TextParagraph1>
              Os cariocas sabem bem quais os problemas enfrentados todos os dias
              no transporte público da cidade do Rio de Janeiro. E é preciso
              reconhecer que o sistema por ônibus está ruim e precisa de ajuda.{" "}
              <br />
              <br />
              Uma série de fatores levou a este colapso, o que só resultou no
              sofrimento da população que depende do transporte público da
              cidade para se locomover. Por isso, a Prefeitura vai regularizar
              as linhas operantes, retomar as inoperantes e implementar serviços
              noturnos.
              <br />
              <br />
              Por meio de um acordo judicial, estabelecido entre a Prefeitura,
              consórcios e o Ministério Público, linhas de ônibus serão
              retomadas e criadas na capital fluminense. A partir de agora, o
              transporte público por ônibus será subsidiado pelo município. As
              empresas, além da tarifa de R$ 4,05, vão receber um valor
              adicional pelo serviço efetivamente prestado com base no
              quilômetro rodado. <br />
              <br />
              Nesta página explicaremos como a Prefeitura fará isso. <br />
            </TextParagraph1>
          </div>
        </GridGeral>
      </Container2>
    </Container1>
  );
}
