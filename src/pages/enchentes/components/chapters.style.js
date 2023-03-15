// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa.gif";

export const CapaDivSC = styled.div`
  background-image: url(${capa});
  background-size: cover;
  background-position: center;
  /* filter: blur(8px); */
`;

export const CapaDiv = tw(CapaDivSC)`
  h-full w-full lg:h-[100vh]
  flex flex-col
  justify-between  items-center
  lg:pl-[10%]
  lg:pr-[10%]
  pl-[10%]
  pr-[10%]
`;

export const CapaAutor = tw.div`
  flex flex-col
  justify-start items-center
  mt-[24px] 
  font-sans
  text-sm text-center text-[#ef4444]
  lg:leading-[150%]
  selection:bg-[#ef4444] selection:text-white
  `;

export const Scroll = tw.div`
  flex lg:flex-row flex-col 
  lg:justify-between lg:items-center
  `;

export const Title = tw.div`
  font-nunito font-bold  
  text-[40px] text-center text-[#ef4444]
  leading-[44px]
  lg:text-[48px]
  lg:leading-[48px]
  selection:bg-[#ef4444] selection:text-white
  `;

export const Subtitle = tw.div`
  font-nunito
  font-normal
  text-[16px] text-center text-[#ef4444]
  lg:text-[16px]
  lg:max-w-sm
  lg:leading-[26px]
  lg:mb-[88px]
  mb-[98px]
  mt-[8px]
  selection:bg-[#ef4444] selection:text-white
`;

export const AuthorText = tw.div`
  font-nunito
  text-sm text-left text-[#ef4444]
  mt-[40px]
  mb-[80px]
  lg:leading-[150%]
  selection:bg-[#ef4444] selection:text-white
 `;

export const Credito = tw.div`
  mb-7
  lg:mb-7
  font-serif
  text-sm text-left text-white
  lg:text-sm
  lg:text-left
  
`;

export const IntroTitle = tw.div`
  font-bold  font-serif
  text-3xl text-left text-white
  self-start
  mb-6
  lg:self-start
`;

export const IntroText = tw.div`
  font-serif  
  text-lg text-justify text-white 
  leading-normal 
  opacity-100
`;

// PAGINA DIVIDIDA

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-auto min-h-[100vh]
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  bg-white
  `;

export const ContainerCard = tw.div`
  flex flex-col lg:flex-row 
  justify-between items-center 
  bg-white
  mt-[120px]
  mb-[120px]
`;

export const ContainerCard1 = tw.div`
  flex flex-col
  items-left 
  backdrop-blur-sm
  bg-white
  max-w-xs
  lg:max-w-[40%]
`;

export const ContainerCard2 = tw.div`
  flex flex-col
  items-left 
  max-w-xs
  lg:max-w-[40%]
`;

export const TextCard1 = tw.div`
  font-nunito  
  text-[16px]
  font-light
  lg:leading-[150%]
  text-left
  lg:leading-7
  text-black
  selection:bg-white selection:text-[#ef4444]
`;

// CAPITULO

export const ChapterGenericDiv1 = tw.div`
  flex
  w-full h-[100vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  -z-10 
  `;

export const ChapterGenericDiv2 = tw.div`
flex
w-full h-[100vh] 
items-center
justify-center
lg:justify-start
lg:p-[10%]
-z-10 
bg-white
`;

export const ChapterGenericDiv3 = tw.div`
flex
w-full h-[100vh] 
items-center
justify-center
bg-white
`;

export const ChapterGenericDiv10 = tw.div`
flex
w-full h-[150vh] 
items-center
justify-left
p-[34px]
lg:p-[10%]
`;
// lg:justify-between
// lg:pl-[10%]

export const ChapterGenericDiv4 = tw.div`
  flex
  w-full h-[120vh] lg:h-[120vh] 
  items-center
  justify-left
  lg:justify-start
  lg:p-[10%]
  bg-red-500
  text-white
  p-[10%]
  -z-10 
  `;

export const IntroDiv = tw.div`
  w-full h-screen
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-black/50
`;

export const ContainerCard3 = tw.div`
  backdrop-blur-[20px]
  bg-[#ffffff75]
  max-w-xs
  p-[34px]
  lg:p-[48px]
  lg:max-w-lg
`;

export const ContainerCard4 = tw.div`
  backdrop-blur-sm
  bg-white
  max-w-xs
  lg:max-w-lg
`;

export const ContainerCardCreditos = tw.div`
  flex flex-col
  items-left 
  bg-red-500
  max-w-xs
  lg:max-w-[100%]
`;

const TextCardSC = styled.div`
  color: #000000;
`;

export const NewsTitle1 = tw.div`
  text-white
  underline
  font-nunito
  font-semibold
  max-w-[400px]
  text-[24px]
  mb-[4px]
  selection:bg-white selection:text-[#ef4444]
`;

export const TextCard = tw.div`
  font-nunito  
  text-[16px]
  text-left
  lg:leading-[150%]
  text-black
  selection:bg-[#ef4444] selection:text-white
`;

const TextredSC = styled.div`
  background: #ef4444;
`;

export const Textred = tw(TextredSC)`
  text-white
  inline
  lg:px-1
  px-1
  box-decoration-clone
`;

const TextsalmaoSC = styled.div`
  background: #ea9f9f;
`;

export const Textsalmao = tw(TextsalmaoSC)`
  text-white
  inline
  lg:px-1
  px-1
  box-decoration-clone
`;

const TextwhiteSC = styled.div`
  background: #ffffff;
`;

export const Textwhite = tw(TextwhiteSC)`
  text-red-500
  inline
`;

export const Textunderline = tw.div`
  text-white
  inline
  underline underline-offset-4
  decoration-4
`;
