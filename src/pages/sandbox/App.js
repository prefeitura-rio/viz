import "./App.css";
import styled from "styled-components";

function App() {
  const Section = styled.div`
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
  `;

  const Section1 = styled.div`
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: #00000098;
  `;

  const Container = styled.div`
    max-width: 600px;
    min-width: 600px;
    margin: auto;
    overflow: auto;
    min-height: 100px;
    padding: 40px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.747);
    opacity: 1;
  `;

  const Container1 = styled.div`
    max-width: 1000px;
    min-width: 1000px;
    margin: auto;
    overflow: auto;
    min-height: 100px;
    padding: 40px;
  `;

  const TextCapitulo1 = styled.div`
    color: #ffffff;
    font-family: "Redaction", sans-serif;
    font-weight: 700;
    font-size: 3rem;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0px;
    text-align: left;
  `;

  const TextCardTitulo11 = styled.div`
    color: #11a686;
    font-family: "poppins", sans-serif !important;
    font-weight: 700;
    font-size: 5.7rem;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0px;
    text-align: left;
  `;

  const TextCardTitulo12 = styled.div`
    color: #11a686;
    font-family: "poppins", sans-serif !important;
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0px;
    text-align: left;
  `;

  const TextCardParagrafo = styled.div`
    color: #dbdbdb;
    font-family: "Redaction", sans-serif;
    font-size: 1.3rem;
    line-height: 1.4;
    margin-top: 0px;
    margin-bottom: 0px;
    text-align: left;
  `;

  const TextCardParagrafo1 = styled.div`
    color: #dbdbdb;
    font-family: "Redaction", sans-serif;
    font-weight: 400;
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

  const GridGeral1 = styled.div`
    display: flex;
    column-gap: 40px;
  `;

  const GridNumero = styled.div`
    display: grid;
    flex-direction: column;
    margin-bottom: 0px;
  `;

  return (
    <div>
      <Section>
        <Container>
          <GridGeral>
            <GridNumero>
              <TextCardTitulo11>300</TextCardTitulo11>
              <TextCardTitulo12>ÔNIBUS</TextCardTitulo12>
            </GridNumero>
            <div>
              <TextCardParagrafo>
                Com o acordo uma frota maior de veículos será necessária. A
                estimativa é que até o final do ano sejam adquiridos 300 ônibus.
              </TextCardParagrafo>
            </div>
          </GridGeral>
        </Container>
      </Section>

      <div>
        <Section1>
          <Container1>
            <GridGeral1>
              <div>
                <TextCapitulo1>Introdução</TextCapitulo1>
              </div>
              <div>
                <TextCardParagrafo1>
                  Os cariocas sabem bem quais os problemas enfrentados todos os
                  dias no transporte público da cidade do Rio de Janeiro. E é
                  preciso reconhecer que o sistema por ônibus está ruim e
                  precisa de ajuda. <br />
                  <br />
                  Uma série de fatores levou a este colapso, o que só resultou
                  no sofrimento da população que depende do transporte público
                  da cidade para se locomover. Por isso, a Prefeitura vai{" "}
                  regularizar as linhas operantes, retomar as inoperantes e
                  implementar serviços noturnos.
                  <br />
                  <br />
                  Por meio de um acordo judicial, estabelecido entre a
                  Prefeitura, consórcios e o Ministério Público, linhas de
                  ônibus serão retomadas e criadas na capital fluminense. A
                  partir de agora, o transporte público por ônibus será
                  subsidiado pelo município. As empresas, além da tarifa de R$
                  4,05, vão receber um valor adicional pelo serviço efetivamente
                  prestado com base no quilômetro rodado. <br />
                  <br />
                  Nesta página explicaremos como a Prefeitura fará isso. <br />
                </TextCardParagrafo1>
              </div>
            </GridGeral1>
          </Container1>
        </Section1>
      </div>
    </div>
  );
}

export default App;
