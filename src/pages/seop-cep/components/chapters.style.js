// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa.png";

export const CapaDivSC = styled.div`
  background-image: url(${capa});
  background-size: cover;
  background-position: center;
`;

export const CapaDiv = tw(CapaDivSC)`
  h-screen w-full
  flex flex-col
  justify-end items-left
  lg:pl-[10%]
  pl-[10%]
  pr-[10%]
`;

export const Title = tw.div`
  lg:mt-[22%]
  font-sans font-bold  
  text-[40px] text-left text-red-500
  leading-[44px]
  lg:text-[60px]
  lg:leading-[60px]
  max-w-3xl
  `;

export const Subtitle = tw.div`
  font-sans
  font-normal
  text-[16px] text-left text-red-500
  lg:text-[18px]
  lg:max-w-sm
  lg:mt-[20px]
  mt-[14px]
`;

export const CapaAutor = tw.div`
  h-screen w-full
  flex flex-col lg:flex-row 
  lg:justify-start items-start lg:items-end
  lg:mb-[4%]
  mb-[12%] 
  font-sans
  text-sm text-left text-red-500
  max-w-4xl
  lg:leading-[150%]
  `;

export const AuthorText = tw.div`
  font-sans
  text-sm text-left text-red-500
  max-w-4xl
  mt-[10px]
  lg:leading-[150%]
  lg:ml-[40px]
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

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-auto lg:h-[120vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  bg-red-500
  text-white
  -z-10 
  `;

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
lg:justify-start
bg-white
`;

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

export const ContainerCard = tw.div`
  flex flex-col lg:flex-row 
  justify-between items-center 
  bg-red-500
  mt-[120px]
  mb-[120px]
`;

export const ContainerCard1 = tw.div`
  flex flex-col
  items-left 
  backdrop-blur-sm
  bg-red-500
  max-w-xs
  lg:max-w-[40%]
`;

export const ContainerCard2 = tw.div`
  p-5
  bg-opacity-[20%] backdrop-blur-sm
bg-black/75
  max-w-xs
  lg:max-w-3xl
`;

export const ContainerCard3 = tw.div`
  backdrop-blur-sm
  bg-white
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

export const NewsTitle = tw.div`
  text-white
  font-sans
  font-bold
  text-[24px]
  mb-[10px]
  mt-[30px]
`;

export const TextCard = tw.div`
  font-sans  
  text-[16px]
  text-left
  text-black
`;

export const TextCard1 = tw.div`
  font-sans  
  text-[16px]
  font-normal
  text-left
  lg:leading-7
  text-white
`;

const TextredSC = styled.div`
  background: #ef4444;
`;

export const Textred = tw(TextredSC)`
  text-white
  inline
`;

const TextsalmaoSC = styled.div`
  background: #ea9f9f;
`;

export const Textsalmao = tw(TextsalmaoSC)`
  text-white
  inline
`;

const TextwhiteSC = styled.div`
  background: #ffffff;
`;

export const Textwhite = tw(TextwhiteSC)`
  text-red-500
  inline
`;
