import styled from "styled-components";
// import logo from "./pages/subsidio-sppo/images/logo.png";

import logo from "./pages/subsidio-sppo/images/logo.png";

const HeaderImage = styled.div`
  background-image: url(${logo});
`;

const Container = styled.div`
  min-height: 100px;
  width: "50%";
  padding: 40px;
  margin-left: 30%;
  margin-right: 30%;
  background-color: rgba(0, 0, 0, 0.92);
  opacity: 1;
  border-radius: 15px;
`;

const Container1 = styled.div`
  width: 100vw;
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
  text-align: center;
  position: "relative";
`;

const TextH1 = styled.div`
  color: #11a686;
  font-family: "poppins", sans-serif !important;
  font-weight: 700;
  font-size: 5.7rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0px;
  text-align: "left";
`;

const TextH2 = styled.div`
  color: #11a686;
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

const TextParagraph = styled.div`
  color: #dbdbdb;
  font-family: "Redaction", sans-serif;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
`;

const Photo = styled.div`
  position: absolute;
  bottom: 10%;
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

const GridGeral = styled.div`
  display: flex;
  column-gap: 40px;
`;

const GridNumero = styled.div`
  display: grid;
  flex-direction: column;
  margin-bottom: 0px;
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
    <Container id={props.id}>
      <GridGeral>
        <GridNumero>
          <TextH1>300</TextH1>
          <TextH2>ÔNIBUS</TextH2>
        </GridNumero>
        <div>
          <TextParagraph>
            Com o acordo uma frota maior de veículos será necessária. A
            estimativa é que até o final do ano sejam adquiridos 300 ônibus.
          </TextParagraph>
        </div>
      </GridGeral>
    </Container>
  );
}

export function Two(
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

export function Three(
  props = {
    id: "",
  }
) {
  props = setDefaultProps(props);
  return (
    <Container3 id={props.id}>
      <HeaderImage></HeaderImage>
      <TextH4>
        Um ponto de virada na história do transporte municipal do Rio de Janeiro
      </TextH4>
    </Container3>
  );
}
