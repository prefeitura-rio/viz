// CSS
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const CapaDiv = tw.div`
  h-screen w-full
  flex flex-col 
  justify-center items-center 
  selection:bg-yellow-600 selection:text-black
    backdrop-blur-[1000px]
  `;

export const Title = tw.div`
  font-serif font-bold  
  text-2xl text-center text-[#ffffff]
  p-6
  leading-8
  lg:text-[40px]
  lg:leading-[120%]
  lg:max-w-[900px]
  `;

export const AuthorText = tw.div`
  font-serif
  text-sm text-center text-[#ffffff]
  lg:text-[18px]
  lg:mb-[3%]
  lg:max-w-3xl
  `;

export const Interactive = tw.div`
  font-serif
  text-sm text-center text-[#ffffff]
  mb-[30%]
  lg:mb-[20%]
  lg:text-base
  lg:max-w-3xl
  p-1
`;

export const IntroDiv = tw.div`
  w-full lg:h-[100vh]
  bg-opacity-90 backdrop-blur-2xl
  bg-slate-50/60
  flex
  items-center
  lg:items-center
  justify-center
  selection:bg-yellow-600 selection:text-black
`;

export const IntroTitle = tw.div`
  font-black  font-serif
  text-2xl text-left text-[#23211e]
  mb-6
  leading-[120%]
  lg:mr-[10vw]
  lg:text-3xl
  lg:max-w-3xl
  lg:mb-8
  selection:bg-yellow-600 selection:text-black
  `;

export const FimTitle = tw.div`
  font-black  font-serif
  text-2xl text-left text-[#23211e]
  mt-6
  lg:mr-[20vw]
  lg:text-3xl
  lg:max-w-3xl
  lg:mt-8
  lg:mb-2
  selection:bg-yellow-600 selection:text-black
  `;

export const IntroText = tw.div`
  font-serif  font-medium
  align-middle
  text-base text-justify text-[#57250a]
  leading-snug
  lg:text-lg
  selection:bg-yellow-600 selection:text-black
`;

export const TextCard = tw.div`
  font-serif  font-medium
  align-middle
  text-sm text-justify text-[#23211e]
  leading-snug
  opacity-100
  lg:text-base
  mb-3
  selection:bg-yellow-600 selection:text-black
`;

export const TextCard1 = tw.div`
  font-serif  font-medium
  align-middle
  text-sm text-justify text-[#23211e]
  leading-snug
  opacity-100
  lg:text-base
  selection:bg-yellow-600 selection:text-black
`;

export const FimText = tw.div`
  font-serif  font-medium
  align-middle
  text-lg text-justify text-[#57250a]
  leading-snug
  opacity-100
  lg:max-w-3xl
  mt-[50%]
  selection:bg-yellow-600 selection:text-black
`;

export const TextHighlight = tw.div`
  font-serif
  bg-[#23211e]  
  text-white
  py-1
  px-2
  inline 
  selection:bg-yellow-600 selection:text-black
`;

export const TextHighlightGreen = tw.div`
  font-serif
  bg-[#38761D]  
  text-white
  py-1
  px-2
  inline-block 
  selection:bg-yellow-600 selection:text-black
`;

export const TextHighlightYellow = tw.div`
  font-serif
  bg-[#BF9000]  
  text-white
  py-1
  px-2
  inline-block
  selection:bg-yellow-600 selection:text-black
`;

export const TextHighlightRed = tw.div`
  font-serif
  bg-[#980000]  
  text-white
  py-1
  px-2
  inline-block
  selection:bg-yellow-600 selection:text-black
`;

export const TextHighlightBlue = tw.div`
  font-serif
  bg-[#004A80]  
  text-white
  py-1
  px-2
  inline-block
  selection:bg-yellow-600 selection:text-black
`;

export const TextBigNumber = tw.div`
  font-serif
  bg-[#23211e]
  text-white
  text-[60px]
  py-1
  px-2
  inline 
  selection:bg-yellow-600 selection:text-black
`;

export const TextCardBig = tw.div`
  font-black  font-serif
  text-2xl text-left text-[#23211e]
  lg:text-3xl
  lg:max-w-4xl
  lg:leading-[160%]
  selection:bg-yellow-600 selection:text-black
  `;

export const ChapterGenericDiv = tw.div`
  flex
  min-h-[120vh]
  lg:min-h-[100vh]
  w-full h-auto 
  items-center
  -z-10
  
`;

export const ChapterGenericDiv1 = tw.div`
  flex
  w-full h-auto 
  bg-[#ffffff]
  items-center
  -z-10
`;

export const ChapterMapDiv = tw.div`
  flex
  flex-col
  w-full h-[100vh] 
  items-center
  justify-center
  text-base 
  font-bold
  m-auto
  -z-10
`;

export const ChapterGraficoDiv = tw.div`
  flex
  flex-col
  w-full h-auto 
  items-center
  -z-10
`;

export const ChapterMap = tw.div`
  flex
  relative
  w-full h-[150vh] 
  items-center
  `;

export const ContainerCard = tw.div`
  bg-[#ffffff]
  rounded
  py-11
  px-10
  lg:p-20  
  bg-opacity-90
  m-auto
  w-[90%]
  lg:w-[760px]
  min-w-[250px]
  lg:leading-5
`;

export const ContainerCard1 = tw.div`
  bg-[#ffffff]
  rounded
  p-10
  lg:p-20  
  m-auto
  w-[750px]
  min-w-[250px]
  lg:leading-5
`;

export const ContainerCard2 = tw.div`
  lg:my-[100px]
  py-16
  px-12
  lg:p-20  
  m-auto
  w-[750px]
  min-w-[250px]
  lg:leading-5
`;

export const ContainerCard3 = tw.div`
  bg-[#ffffff]
  rounded
  m-auto
  w-[616px]
  min-w-[250px]
`;

export const Grafico = tw.div`
  m-auto
  lg:my-[40px]
  min-w-[250px]
  my-[60px]
`;

export const Fundo = tw.div`
  bg-[#ffffff]  
  w-full h-screen
  flex
  items-center
  justify-items-center
  `;
