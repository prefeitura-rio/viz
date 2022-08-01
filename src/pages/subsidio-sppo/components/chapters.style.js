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
  width: 101.5%;
  height: 102vh;
  margin-left: -0.75%;
  margin-top: -0.5vh;

  z-index: -1;
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
  z-index: -1;
  display: flex;
  align-items: center;
`;

export const ChapterLineChart = styled.div`
  height: 100vh;
  width: 100%;
  // background: #e8cee4;
  z-index: -1;
  display: flex;
  align-items: center;
`;

export const ChapterSixDiv = styled.div`
  height: 150vh;
  width: 101.5%;
  margin-left: -0.75%;
  // width: 100%;
  // opacity: 1;
  z-index: -1;
  display: grid;
  grid-template-columns: 0.6fr 0.8fr 2fr 0.6fr;
  grid-template-rows: 1.1fr 0.5fr 2.2fr 1fr;
  gap: 0px 20px;
  grid-template-areas:
    ". . . ."
    ". titulo texto ."
    ". . texto ."
    ". . . .";
  justify-items: center;
  align-items: top;
  background-color: rgba(0, 0, 0, 0.93);
  opacity: 1;
`;
