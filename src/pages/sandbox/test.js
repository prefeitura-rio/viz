import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
// import "./test.css";

export default function Test() {
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
              <TextCardTitulo12>??NIBUS</TextCardTitulo12>
            </GridNumero>
            <div>
              <TextCardParagrafo>
                Com o acordo uma frota maior de ve??culos ser?? necess??ria. A
                estimativa ?? que at?? o final do ano sejam adquiridos 300 ??nibus.
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
                <TextCapitulo1>Introdu????o</TextCapitulo1>
              </div>
              <div>
                <TextCardParagrafo1>
                  Os cariocas sabem bem quais os problemas enfrentados todos os
                  dias no transporte p??blico da cidade do Rio de Janeiro. E ??
                  preciso reconhecer que o sistema por ??nibus est?? ruim e
                  precisa de ajuda. <br />
                  <br />
                  Uma s??rie de fatores levou a este colapso, o que s?? resultou
                  no sofrimento da popula????o que depende do transporte p??blico
                  da cidade para se locomover. Por isso, a Prefeitura vai{" "}
                  regularizar as linhas operantes, retomar as inoperantes e
                  implementar servi??os noturnos.
                  <br />
                  <br />
                  Por meio de um acordo judicial, estabelecido entre a
                  Prefeitura, cons??rcios e o Minist??rio P??blico, linhas de
                  ??nibus ser??o retomadas e criadas na capital fluminense. A
                  partir de agora, o transporte p??blico por ??nibus ser??
                  subsidiado pelo munic??pio. As empresas, al??m da tarifa de R$
                  4,05, v??o receber um valor adicional pelo servi??o efetivamente
                  prestado com base no quil??metro rodado. <br />
                  <br />
                  Nesta p??gina explicaremos como a Prefeitura far?? isso. <br />
                </TextCardParagrafo1>
              </div>
            </GridGeral1>
          </Container1>
        </Section1>
      </div>
    </div>
  );
}
