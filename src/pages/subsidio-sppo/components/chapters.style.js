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
  width: 100%;
  height: 102vh;
  margin-top: -0.5vh;

  z-index: -1;
  display: grid; 
  grid-template-columns: 0.5fr 2fr 0.5fr; 
  grid-template-rows: .4fr 1.7fr 0.6fr 0.5fr 2.5fr 0.3fr; 
  gap: 20px 20px;
  grid-template-areas:
    ". logo ."
    ". . ."
    ". titulo ."
    ". subtitulo ."
    ". nova ."
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

export const ChapterTwoDiv = styled.div`
  height: 150vh;
  width: 101%;
  margin-left: -0.5%;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 0.6fr 0.8fr 2fr 0.6fr;
  grid-template-rows: 0.5fr 1.3fr 0.3fr;
  gap: 0px 50px;
  grid-template-areas:
    ". . . ."
    ". titulo texto ."
    ". . . .";
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  opacity: 1;
`;

export const ChapterNineDiv = styled.div`
  height: 150vh;
  width: 101%;
  margin-left: -0.5%;
  overflow-x: hidden;
  display: grid; 
  grid-template-columns: 2fr 0.8fr 2fr 2fr; 
  grid-template-rows: 1fr 0.5fr 1fr; 
  gap: 0px 50px; 
  grid-template-areas: 
    ". . . ."
    ". titulo texto ."
    ". . . ."; 
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  opacity: 1;
`;

