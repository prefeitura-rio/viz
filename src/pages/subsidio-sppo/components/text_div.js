import styled from "styled-components";

const Container = styled.div`
  min-height: ${(props) => props.minHeight};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  background-color: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  border-radius: 10px;
`;

const TextH1 = styled.div`
  color: ${(props) => props.color};
  font-family: "poppins", sans-serif !important;
  font-weight: 700;
  font-size: 5.7rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0px;
  text-align: ${(props) => props.textAlign};
`;

const TextH2 = styled.div`
  color: ${(props) => props.color};
  font-family: "poppins", sans-serif !important;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 0px;
  text-align: ${(props) => props.textAlign};
`;

const TextParagraph = styled.div`
  color: ${(props) => props.color};
  font-family: "Redaction", sans-serif;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: ${(props) => props.textAlign};
`;

const setDefaultProps = (providedProps) => {
  const defaultProps = {
    containerColor: "#1a1a1a",
    containerOpacity: 1,
    containerPadding: "40px",
    titleColor: "#11a686",
    paragraphColor: "#dbdbdb",
    id: "",
    textH1: "",
    textH2: "",
    textParagraph: "",
    textAlign: "left",
    minHeight: "100px",
    width: "50%",
    marginLeft: "25%",
    marginTop: "10%"
  };

  return { ...defaultProps, ...providedProps };
};

export default function TextDiv(
  props = {
    containerColor: "",
    containerOpacity: 0,
    containerPadding: "",
    titleColor: "",
    paragraphColor: "",
    id: "",
    textH1: "",
    textH2: "",
    textParagraph: "",
    textAlign: "",
    minHeight: "",
    width: "",
    marginLeft: "",
    marginTop: ""
  }
) {
  props = setDefaultProps(props);
  return (
    <Container
      id={props.id}
      color={props.containerColor}
      opacity={props.containerOpacity}
      minHeight={props.minHeight}
      width={props.width}
      marginLeft={props.marginLeft}
      marginTop={props.marginTop}
      padding={props.containerPadding}
    >
      <TextH1 color={props.titleColor} textAlign={props.textAlign}>
        {props.textH1}
      </TextH1>
      <TextH2 color={props.titleColor} textAlign={props.textAlign}>
        {props.textH2}
      </TextH2>
      <TextParagraph color={props.paragraphColor} textAlign={props.textAlign}>
        {props.textParagraph}
      </TextParagraph>
    </Container>
  );
}
