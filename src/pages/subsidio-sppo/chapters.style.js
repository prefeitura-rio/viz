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
  margin-top: 50vh;
  height: 700px;
  width: 100%;

  // justify-content: center;
  // align-items: center;
  // display: flex;
  // flex-direction: row;
  // text-align: center;
  opacity: 1;
  zindex: -1;
`;

export const ChapterTwoDiv = styled.div`
  height: 100vh;
  width: 100%;
  // background: #e8cee4;
  zindex: -1;
`;

export const ChapterThreeDiv = styled.div`
  height: 100vh;
  width: 100vw;
  // background: #e8cee4;
  zindex: -1;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const ChapterFourDiv = styled.div`
  height: 1400px;
  width: 100%;
  // background: #e8cee4;
  zindex: -1;
`;
