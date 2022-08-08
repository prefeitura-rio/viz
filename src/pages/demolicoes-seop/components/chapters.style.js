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
  flex flex-col justify-between items-center space-y-3
  h-screen w-full
  items-center
  pl-5 pr-5

`;
// lg:mr-20 lg:ml-20
// sm:ml-30 sm:mr-30
// sm:w
export const Title = tw.div`
  font-georgia font-bold  
  text-3xl text-center text-white    
  mt-44
  sm:mt-44
  lg:text-4xl  
  lg:mt-36
  `;

export const AuthorText = tw.div`
  font-georgia
  text-sm text-center text-white
  my-44
`;

export const IntroTitle = tw.div`
  font-bold  font-georgia
  text-3xl text-left text-white
  mb-6
`;

export const IntroText = tw.div`
  font-georgia  
  text-lg text-justify text-white 
  leading-normal 
  opacity-100
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
  bg-opacity-40 backdrop-blur
  block items-center
  bg-black/50
  pr-[25%] pl-[25%]
`;

export const NewsImage = tw.img`
w-full
mb-8
mt-[2%]
`;

export const NewsTitle = tw.div`
  text-white
  font-georgia
  text-4xl
  mb-[15px]
`;

export const ContainerCard = tw.div`
  m-auto
  w-2/5
  p-10
  bg-opacity-70 backdrop-blur-sm
  bg-black/75
`;

export const ContainerCard1 = tw.div`
  m-auto
  w-2/5
  p-10
  bg-opacity-[20%] backdrop-blur-sm
  bg-black/75
`;

const TextCardSC = styled.div`
  color: #ffffff;
`;

export const TextCard = tw(TextCardSC)`
  font-georgia  
  text-lg
  text-left
`;

export const TextCard1 = tw(TextCardSC)`
  font-georgia  
  text-lg
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
  color: #a96e04;
  font-weight: 700;
`;

export const BigNumber = tw(BigNumberSC)`
  font-georgia  
  font-bold
  text-9xl
  text-left
  self-end
`;

export const BigNumber1 = tw(BigNumber)`
  text-7xl
`;

const TextBlueSC = styled.div`
  background: #a96e04;
`;

export const TextBlue = tw(TextBlueSC)`
  text-white
  inline
`;
