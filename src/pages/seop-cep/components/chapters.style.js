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
  justify-between items-left
  lg:pl-[10%]
  pl-5 pr-5  
`;

export const Title = tw.div`
  mt-[10%]
  lg:mt-[18%]
  font-sans font-bold  
  text-[100px] text-left text-red-500
  lg:text-[100px]
  lg:leading-[90px]
    max-w-3xl
  `;

export const Subtitle = tw.div`
  font-sans
  font-normal
  text-lg text-left text-red-500
  lg:text-xl
  lg:max-w-md
  lg:mt-[20px]
`;

export const CapaAutor = tw.div`
  h-screen w-full
  flex flex-row 
  justify-left items-end
  lg:mb-[4%] 
  font-sans
  text-sm text-left text-red-500
  max-w-4xl
  lg:leading-[150%]
  `;

export const AuthorText = tw.div`
  font-sans
  text-sm text-left text-red-500
  max-w-4xl
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
  w-full h-[100vh] 
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

export const IntroDiv = tw.div`
  w-full h-screen
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-black/50
`;

export const ContainerCard = tw.div`
  flex flex-row 
  justify-between items-center 
  bg-red-500
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
  lg:p-[48px]
  lg:max-w-lg
`;

export const ContainerCardCreditos = tw.div`
  flex flex-col
  items-left 
  backdrop-blur-sm
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
`;

export const TextCard = tw.div`
  font-sans  
  text-base
  text-left
  text-black
`;

export const TextCard1 = tw.div`
  font-sans  
  text-[18px]
  font-light
  text-left
  lg:leading-7
  text-white
`;

const TextyellowSC = styled.div`
  background: #ef4444;
`;

export const Textyellow = tw(TextyellowSC)`
  text-white
  inline
`;
