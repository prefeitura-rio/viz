import styled from "styled-components";

const Container = styled.div`
  min-height: 100px;
  width: "50%";
  padding: 40px;
  margin-left: 25%;
  margin-right: 25%;
  background-color: #1a1a1a;
  opacity: 1;
  border-radius: 10px;
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

const TextParagraph = styled.div`
  color: #dbdbdb;
  font-family: "Redaction", sans-serif;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
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
      <TextH1>300</TextH1>
      <TextH2>ÔNIBUS</TextH2>
      <TextParagraph>
        Com o acordo uma frota maior de veículos será necessária. A estimativa é
        que até o final do ano sejam adquiridos 300 ônibus.
      </TextParagraph>
    </Container>
  );
}
