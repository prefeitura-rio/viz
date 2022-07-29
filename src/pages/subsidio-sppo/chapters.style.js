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
  // background-color: #000;
  // justify-content: center;
  min-width: 300px;
  display: flex;
  flex-direction: row;
  // position: absolute;
  top: 0;
  // left: -100;
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
  width: 100%;
  opacity: 1;
  zindex: -1;
`;
