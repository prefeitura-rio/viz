// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa.gif";

export const CapaDivSC = styled.div`
  background-size: cover;
  background-position: center;
`;

export const CapaDiv = tw(CapaDivSC)`
  h-screen w-full
  flex flex-col 
  justify-start
  lg:justify-start items-center
  pl-5 pr-5  
  bg-white/80
  bg-opacity-40 backdrop-blur
`;
// lg:mr-20 lg:ml-20
// sm:ml-30 sm:mr-30
// sm:w
export const Title = tw.div`
  mt-[60%]
  lg:mt-[300px]
  lg:mb-3    
  font-serif font-bold  
  text-3xl text-center text-black
  lg:text-3xl
  max-w-3xl
  `;

// export const Subtitle = tw.div`
//   font-serif
//   text-base text-center text-white
//   lg:text-xl
//   max-w-4xl
// `;

export const AuthorText = tw.div`
  mt-[20px]
  mb-[15%]
  lg:mb-[10%]
  font-serif
  text-sm text-center text-black
  lg:text-sm
  max-w-4xl
  leading-[150%]
`;

export const Button = tw.div`
  mb-[200px]
  lg:mt-[40px]
  font-serif
  text-sm text-center text-black
  lg:text-sm
  max-w-4xl
`;

export const Credito = tw.div`
  mb-7
  lg:mb-10
  font-serif
  text-sm text-left text-black
  lg:text-sm
  lg:text-left
  font-serif italic 
`;

export const IntroTitle = tw.div`
  font-bold  font-serif
  text-3xl text-left text-black
  self-start
  mb-6
  lg:self-start
`;

export const IntroText = tw.div`
  font-serif  
  text-lg text-justify text-black
  leading-normal
  opacity-100
`;
export const IntroText1 = tw.div`
  font-serif  
  text-lg text-center text-black
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

export const ChapterGenericDivn = tw.div`
  flex
  w-full h-[50vh]
  items-center
  justify-center
  text-white
  -z-10
  `;

export const ChapterGenericDiv1 = tw.div`
  flex
  w-full h-[200vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  text-white
  -z-10 
  `;

  export const ChapterGenericDiv2 = tw.div`
  flex
  w-full h-[200vh] 
  items-center
  justify-center
  lg:justify-end
  lg:p-[10%]
  text-white
  -z-10 
  `;

export const IntroDiv = tw.div`
  w-full h-auto

  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-white/80
  pr-[10%] pl-[10%]
  lg:pr-[27%]
  lg:pl-[27%]
  lg:pt-[200px]
  lg:pb-[200px]
`;

export const IntroDivMaior = tw.div`
  w-full h-350
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-white/80
  pr-[10%] pl-[10%]
  lg:pr-[27%]
  lg:pl-[27%]
`;

export const IntroDivGigante = tw.div`
  w-full h-auto
  lg:pt-[160px]
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center
  bg-white/80
  pr-[10%] pl-[10%]
  lg:pr-[27%]
  lg:pl-[27%]
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

export const NewsImage = tw.img`
w-full
mb-3
mt-[2%]
border-[2px]
border-black
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
  font-serif
  text-4xl
  mb-[15px]
`;

export const ContainerCard = tw.div`
  p-[32px]
  bg-opacity-[20%] backdrop-blur-sm
  bg-white/75
  max-w-xs
  lg:max-w-xl
  border-[2px]
  border-black
`;
export const ContainerVideo = tw.div`
  sm:p-[20px] p-[8px]  
  bg-opacity-[20%] backdrop-blur-md
  bg-white/75
  max-w-xs
  lg:max-w-xl
  border-[2px]
  border-black
`;

export const ContainerCard1 = tw.div`
  p-[32px]
  bg-opacity-[20%] backdrop-blur-md
  bg-white/75
  max-w-xs
  lg:max-w-md
  border-[2px]
  border-black
`;

const TextCardSC = styled.div`
  color: black;
`;

export const TextCard = tw(TextCardSC)`
  font-serif  
  text-lg
  text-left
`;

export const TextCard1 = tw(TextCardSC)`
  font-serif  
  text-lg
  text-justify
  mt-0
  mb-0
`;

export const TextCard2 = tw(TextCardSC)`
  font-serif  
  text-2xl
  lg:text-3xl
  font-bold
  text-left
  mt-0
  mb-[30px]
  lg:mb-[48px]
  `;

  export const TextCard3 = tw(TextCardSC)`
  font-serif  
  text-2xl
  font-bold
  text-left
  mt-0
  mb-[8px]
  lg:mb-[8px]
  `;

  export const TextCard4 = tw(TextCardSC)`
  font-serif  
  text-2xl
  lg:text-2xl
  font-bold
  underline
  text-left
  mt-0
  mb-[8px]
  lg:mb-[12px]
  `;

  export const TextCard5 = tw(TextCardSC)`
  font-serif  
  text-2xl
  lg:text-3xl
  font-bold
  text-left
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
  color: black;
  font-weight: 700;
`;

export const BigNumber = tw(BigNumberSC)`
  font-serif  
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
  /* background: #000; */
  /* background: #06639d; */
`;

export const Textyellow = tw(TextyellowSC)`
  text-black
  font-bold
  underline
  inline
  p-[4px]
  leading-[130%]
`;

const TextblackSC = styled.div`
  /* background: #000; */
`;

export const Textblack = tw(TextblackSC)`
  text-black
  font-bold
  underline
  inline
  p-[4px]
  leading-normal
`;

const TextgreySC = styled.div`
  background: #;
`;

export const Textgrey = tw(TextgreySC)`
  text-black
  font-bold
  inline
  p-[4px]
  leading-normal
`;

const TextblueSC = styled.div`
  background: #da8216;
`;

export const Textblue = tw(TextblueSC)`
text-white
inline
px-[8px]
py-[4px]
leading-normal
border-2
border-black
`;

const TextblueOneSC = styled.div`
  background: #06639d;
`;

export const TextblueOne = tw(TextblueOneSC)`
  text-white
  inline
  px-[8px]
  py-[4px]
  leading-normal
  border-2
  border-black
`;