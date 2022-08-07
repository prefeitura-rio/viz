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
  flex flex-col
  h-screen w-full 
  items-center
  pl-5 pr-5
  lg:mr-20 lg:ml-20 
  sm:ml-30 sm:mr-30
`;

export const Title = tw.div`
  font-roboto font-bold  
  text-3xl text-center text-white    
  mt-28
  sm:mt-44
  lg:text-4xl  
  lg:mt-36
  xl:text-5xl
  xl:mt-48
  2xl:mt-64
  `;

export const AuthorText = tw.div`
  font-roboto
  text-sm text-center text-white
  mt-6
  sm:mt-12
  lg:text-base
  lg:mt-5
  xl:mt-8
  2xl:mt-10
`;

export const Interactive = tw.div`
  font-roboto
  text-sm text-center text-white
  mt-24

  sm:mt-44
  
  lg:text-base
  lg:mt-36

  xl:mt-48

  2xl:mt-64
`;

export const ChapterTwoDiv = tw.div`

  w-full h-200
  gap-8
  bg-opacity-40 backdrop-blur
  flex items-start 
  pr-[15%] pl-[15%]
  
`;

export const IntroTitle = tw.div`
  font-bold  font-roboto
  text-5xl text-right text-white
  
  mt-[120%]
`;

export const IntroText = tw.div`
  font-roboto  
  align-middle
  text-xl text-justify text-white 
  leading-normal 
  opacity-100
  mt-[120%]
`;

export const TextOrange = tw.div`
  font-roboto
  bg-orange-700 
  text-white
  inline 
`;

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-screen 
  items-center
  text-white
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
