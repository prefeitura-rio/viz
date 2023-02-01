// CSS
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const CapaDiv = tw.div`
  h-screen w-full
  flex flex-col 
  justify-between items-center 
  selection:bg-yellow-600 selection:text-black
  backdrop-blur-xl
  `;

export const Title = tw.div`
  font-serif font-bold  
  text-2xl text-center text-[#ffffff]
  p-2
  leading-10
  mt-[30%]
  lg:text-4xl
  lg:leading-10  
  lg:mt-[15%]
  lg:max-w-[800px]
  `;

// inline
// px-3
// decoration-clone
// leading-snug

export const AuthorText = tw.div`
  font-serif
  text-sm text-center text-[#ffffff]
  lg:text-base
  lg:mb-[2%]
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
  w-full lg:h-[240vh] h-[320vh]
  bg-opacity-90 backdrop-blur-2xl
  bg-slate-50/60
  flex
  items-center
  lg:items-start
  justify-center
  selection:bg-yellow-600 selection:text-black
`;

export const IntroTitle = tw.div`
  font-black  font-serif
  text-2xl text-left text-yellow-600
  mb-6
  lg:mr-[20vw]
  lg:text-3xl
  lg:max-w-3xl
  lg:mb-8
  selection:bg-yellow-600 selection:text-black
  `;

export const FimTitle = tw.div`
  font-black  font-serif
  text-3xl text-left text-yellow-600 mr-[20vw]
  lg:max-w-3xl
  mb-5
  mt-16
  selection:bg-yellow-600 selection:text-black
  `;

export const IntroText = tw.div`
  font-serif  font-medium
  align-middle
  text-base text-justify text-[#57250a]
  leading-snug
  opacity-100
  p-10
  lg:p-0
  lg:text-lg
  lg:max-w-3xl
  mt-[50%]
  selection:bg-yellow-600 selection:text-black
`;

export const TextCard = tw.div`
  font-serif  font-medium
  align-middle
  text-base text-justify text-[#57250a]
  leading-snug
  opacity-100
  lg:text-lg
  lg:max-w-3xl
  mb-3
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

export const TextOrange = tw.div`
  font-serif
  bg-orange-700 
  text-white
  inline 
`;

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-[150vh] 
  items-center
  -z-10
`;

export const ChapterGraficoDiv = tw.div`
  flex
  flex-col
  w-full h-[150vh] 
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
  p-10
  lg:p-20  
  bg-opacity-90
  m-auto
  w-[865px]
  min-w-[250px]
  lg:leading-5
`;

export const ContainerCard1 = tw.div`
  m-auto
  w-[865px]
  min-w-[250px]
`;

export const ContainerCard2 = tw.div`
  bg-[#ffffff]
  rounded
  p-20  
  m-auto
  w-[865px]
  min-w-[250px]
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
  w-[865px]
  min-w-[250px]
`;

export const Fundo = tw.div`
  bg-[#ffffff]  
  w-full h-screen
  flex
  items-center
  justify-items-center
  `;
