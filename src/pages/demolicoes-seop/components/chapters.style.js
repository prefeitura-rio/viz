// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa.gif";

export const CapaDivSC = styled.div`
  background-image: url(${capa});
  background-size: cover;
`;

export const CapaDiv = tw(CapaDivSC)`
  flex flex-col
  h-screen w-full
  items-center
  pl-5 pr-5

`;
// lg:mr-20 lg:ml-20
// sm:ml-30 sm:mr-30
// sm:w
export const Title = tw.div`
  font-roboto font-bold  
  text-3xl text-center text-white    
  mt-28
  sm:mt-44
  lg:text-4xl  
  lg:mt-36
  `;

export const AuthorText = tw.div`
  font-roboto
  text-sm text-center text-white
  mt-6
  sm:mt-12
  lg:text-base
  lg:mt-5
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

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-screen 
  items-center
  text-white
  -z-10
`;

export const IntroDiv = tw.div`
  w-full h-200
  gap-8
  bg-opacity-40 backdrop-blur
  flex items-start 
  pr-[15%] pl-[15%]
`;

export const NewsImage = tw.img`
w-full
mb-auto
mt-[2%]
`;

export const NewsTitle = tw.div`
  text-white
  font-roboto
  text-4xl
  mb-[15px]
`;

export const ContainerCard = tw.div`
  m-auto
  w-2/5
  p-10
  bg-opacity-70 backdrop-blur-sm

`;

export const ContainerCard1 = tw.div`
  m-auto
  w-2/5
  p-10
  bg-opacity-[20%] backdrop-blur-sm
`;

const TextCardSC = styled.div`
  color: #dbdbdb;
`;

export const TextCard = tw(TextCardSC)`
  font-roboto  
  text-base
  text-left
`;

export const TextCard1 = tw(TextCardSC)`
  font-roboto  
  text-base
  text-left
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
  color: #1a374d;
  font-weight: 700;
`;

export const BigNumber = tw(BigNumberSC)`
  font-roboto  
  font-bold
  text-9xl
  text-left
  self-end
`;

export const BigNumber1 = tw(BigNumber)`
  text-7xl
`;

const TextBlueSC = styled.div`
  background: #1a374d;
`;

export const TextBlue = tw(TextBlueSC)`
  text-white
  inline
`;
