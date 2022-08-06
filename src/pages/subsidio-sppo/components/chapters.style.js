// CSS
import styled from "styled-components";
import tw from "tailwind-styled-components";

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

export const ChapterOneDiv = tw.div`
  h-screen
  w-full
  flex
  flex-col
  items-center
  justify-start
`;

export const Title = tw.div`
  font-bold 
  text-4xl 
  text-center 
  text-white
  w-[50vw]
  mt-[30vh]
`;

export const AuthorText = tw.div`
  font-medium 
  text-base 
  text-center 
  text-white
  w-[30vw]
  mt-6
`;

export const Interactive = tw.div`
  font-medium 
  text-base 
  text-center
  text-white
  mt-[25vh]
`;

export const ChapterTwoDiv = tw.div`
  w-full
  h-200
  gap-8
  bg-opacity-40
  backdrop-blur
  flex 
  items-start 
  pr-[15%]
  pl-[15%]
  `;

export const IntroTitle = tw.div`
  font-bold 
  text-5xl 
  text-right
  text-white
  mt-[120%]
`;

export const IntroText = tw.div`
  text-justify 
  align-middle
  text-white 
  text-xl 
  leading-normal 
  opacity-100
  mt-[120%]
`;

export const TextOrange = tw.div`
  bg-orange-700 
  text-white
  inline 
`;

export const ChapterGenericDiv = tw.div`
  h-screen 
  w-full
  flex
  text-white
  items-center
  -z-10
`;

export const ChapterLineChart = styled.div`
  height: 100%;
  width: 100%;
  background: #e8cee4;
  z-index: -1;
  display: flex;
  align-items: center;
`;

export const CreditosDiv = styled.div`
  height: 150vh;
  width: 100%;
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
