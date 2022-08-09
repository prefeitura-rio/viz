// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa.gif";

export const CapaDivSC = styled.div`
  background-image: url(${capa});
  background-size: cover;
  background-position: center;
`;

export const CapaDiv = tw(CapaDivSC)`
h-screen w-full
  flex flex-col 
  justify-between items-center 
  pl-5 pr-5  
`;
// lg:mr-20 lg:ml-20
// sm:ml-30 sm:mr-30
// sm:w
export const Title = tw.div`
  mt-[10%]
  lg:mt-[21%]
  lg:mb-3    
  font-georgia font-bold  
  text-4xl text-center text-white
  lg:text-4xl
  max-w-3xl
  `;

// export const Subtitle = tw.div`
//   font-georgia
//   text-base text-center text-white
//   lg:text-xl
//   max-w-4xl
// `;

export const AuthorText = tw.div`
  mb-[15%]
  lg:mb-[45%]
  font-georgia
  text-sm text-center text-white
  lg:text-base
  max-w-4xl
`;

export const Credito = tw.div`
  mb-7
  lg:mb-7
  font-georgia
  text-sm text-left text-white
  lg:text-sm
  lg:text-left
  
`;

export const IntroTitle = tw.div`
  font-bold  font-georgia
  text-3xl text-left text-white
  self-start
  mb-6
  lg:self-start
`;

export const IntroText = tw.div`
  font-georgia  
  text-lg text-justify text-white 
  leading-normal 
  opacity-100
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

export const IntroDiv = tw.div`
  w-full h-200
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-black/50
  pr-[10%] pl-[10%]
  lg:pr-[25%]
  lg:pl-[25%]
`;

export const NewsImage = tw.img`
w-full
mb-3
mt-[2%]
`;

export const NewsImage1 = tw.img`
w-[100%]
lg:w-[60%]
mb-3
mt-[8%]
lg:mt-[3%]
`;

export const NewsTitle = tw.div`
  text-white
  font-georgia
  text-4xl
  mb-[15px]
`;

export const ContainerCard = tw.div`
  p-5
  bg-opacity-[20%] backdrop-blur-sm
bg-black/75
  max-w-xs
  lg:max-w-3xl
`;

export const ContainerCard1 = tw.div`
  p-5
  bg-opacity-[20%] backdrop-blur-sm
  bg-black/75
  max-w-xs
  lg:max-w-lg
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
  text-5xl
  text-left
  self-end
  lg:text-7xl
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
