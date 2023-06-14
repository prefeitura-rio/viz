// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa.gif";

export const CapaDivSC = styled.div``;
// background-image: url(${capa});
// background-size: cover;
// background-position: center;

export const CapaDiv = tw(CapaDivSC)`
  h-screen w-full
  flex flex-col 
  justify-center items-center 
  pl-5 pr-5
  bg-opacity-40 backdrop-blur
  bg-white/50
`;
// lg:mr-20 lg:ml-20
// sm:ml-30 sm:mr-30
// sm:w
export const Title = tw.div`
  lg:mb-3    
  font-montserrat font-bold  
  text-4xl text-center text-black
  lg:text-6xl
  `;

export const Subtitle = tw.div`
  font-montserrat
  text-base text-center text-black
  lg:text-3xl
`;

export const AuthorText = tw.div`
  font-montserrat
  text-sm text-center text-black
  lg:text-base
  mt-[60px]
`;

export const IntroDiv = tw.div`
  w-full h-[140vh]
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-white/50
`;

export const IntroTitle = tw.div`
  font-bold  font-montserrat
  text-3xl text-left text-white
  self-start
  mb-6
  lg:self-start
`;

export const IntroText = tw.div`
  font-montserrat  
  text-[15px] text-justify text-black 
  leading-normal 
  opacity-100
  max-w-[600px]
  `;

export const FimDiv = tw.div`
  w-full h-auto
  pb-[300px]
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-white/50
`;

export const FimTitle = tw.div`
  font-bold  font-montserrat
  text-3xl text-left text-black
`;

export const FimText = tw.div`
  font-montserrat  
  text-[15px] text-center text-black 
  leading-normal 
  opacity-100
  max-w-[600px]
  mt-[10px]
  `;

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-[150vh]
  items-center
  justify-center
  text-white
  -z-10
  `;

export const ChapterGenericDiv1 = tw.div`
  flex
  w-full h-[150vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  text-white
  -z-10 
  `;

export const ChapterMapDiv = tw.div`
  flex
  w-full h-[80vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  text-white
  -z-10 
  `;

export const Footer = tw.div`
  w-full h-[20%]
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-black/50
  pr-[10%] pl-[10%]
  lg:pr-[25%]
  lg:pl-[25%]
`;

export const ContainerCard = tw.div`
  p-[3.25rem]
  backdrop-blur-[20px]
bg-white/90
  max-w-xs
  lg:max-w-[600px]
  rounded-[10px]
`;

export const ContainerCard1 = tw.div`
  p-5
  bg-opacity-[20%] backdrop-blur-sm
  bg-black/75
  max-w-xs
  lg:max-w-lg
`;

export const TextCard = tw.div`
  font-montserrat  
  text-[15px]
  text-left
  text-black
`;

export const TextCard1 = tw.div`
  font-montserrat  
  text-[15px]
  text-left
  text-black
  mt-0
  mb-0
`;

export const Grid1 = tw.div`
  flex
  gap-x-0
  gap-y-5
  items-end
  justify-start
  mb-5
`;

export const Grid = tw.div`
  block
  gap-x-0
  gap-y-8
`;

const BigNumberSC = styled.div`
  color: #a96e04;
  font-weight: 700;
`;

export const BigNumber = tw(BigNumberSC)`
  font-montserrat  
  font-bold
  text-5xl
  text-left
  self-end
  lg:text-7xl
  lg:mb-3
`;

export const BigNumber1 = tw(BigNumber)`
  text-2xl
  ml-2
  lg:ml-3
  lg:text-5xl
`;

const TextyellowSC = styled.div`
  background: #a96e04;
`;

export const Textyellow = tw(TextyellowSC)`
  text-white
  inline
`;
