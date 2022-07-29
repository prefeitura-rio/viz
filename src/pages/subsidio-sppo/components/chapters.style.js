// CSS
import styled from "styled-components";

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

export const ChapterOneDiv = styled.div`
  height: 100vh;
  width: 100%;
  zindex: -1;
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-rows: 0.4fr 1.4fr 0.4fr 0.4fr 2.4fr;
  gap: 20px 0px;
  grid-template-areas:
    ". logo ."
    ". . ."
    ". titulo ."
    ". subtitulo ."
    ". . .";
  // grid-template-columns: ;
  justify-items: center;
`;

export const ChapterGenericDiv = styled.div`
  height: 100vh;
  width: 100%;
  // background: #e8cee4;
  zindex: -1;
  display: flex;
  align-items: center;
`;

export const ChapterSixDiv = styled.div`
  height: 100vh;
  // width: 100%;
  opacity: 1;
  zindex: -1;
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.2fr;
  grid-template-rows: 0.2fr 1fr 0.1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". title ."
    ". text ."
    ". . .";
  justify-items: center;
  background-color: rgba(0, 0, 0, 0.92);
  opacity: 0.9;
`;
