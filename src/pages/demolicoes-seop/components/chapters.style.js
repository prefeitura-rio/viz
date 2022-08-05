// CSS
import styled from "styled-components";
import capa from "../images/capa.gif";

export const TextChapterIndicator = styled.div`
  position: absolute;
  background: #01baef;
  text-align: "left";
  font-size: 1.5rem;
  color: #cfe795;
  // opacity: 1;
  z-index: 9999;
  // top: 0;
  // left: 0;
`;

export const CapaDiv = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-rows: 0.6fr 1.7fr 0.6fr 0.5fr 2.5fr 0.3fr;
  gap: 10px 20px;
  grid-template-areas:
    ". logo ."
    ". . ."
    ". titulo ."
    ". subtitulo ."
    ". nova ."
    ". . .";
  // grid-template-columns: ;
  background-image: url(${capa});
  background-size: cover;
  justify-items: right;
`;

export const ChapterGenericDiv = styled.div`
  height: 100vh;
  width: 100%;

  z-index: -1;
  display: flex;
  align-items: center;
`;

export const IntroDiv = styled.div`
  height: 200vh;
  width: 100%;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr 1.2fr 0.4fr;
  grid-template-rows: 1fr 1fr 0.5fr 1.5fr 1fr;
  gap: 30px 20px;
  grid-template-areas:
    ". . ."
    ". imagem ."
    ". titulo ."
    ". texto ."
    ". . .";
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  opacity: 1;
`;
