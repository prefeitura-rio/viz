// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa.gif";

export const CapaDivSC = styled.div`
  background-color: #ffffff;
  background-image: url(${capa});
  background-size: 20%;
  background-position: center;
  /* backdrop-filter: blur(10px); */
  /* filter: blur(8px); */
`;

export const CapaDiv = tw(CapaDivSC)`
  h-[100vh] w-[100vw] lg:h-[100vh]
  flex flex-col
  justify-center  items-center
  lg:pl-[10%]
  lg:pr-[10%]
  pl-[10%]
  pr-[10%]
  bg-white
  `;

export const CapaAutor = tw.div`
  h-[50vh] w-[90vw]
  lg:h-[800px] lg:w-[800px]
  m-3
  flex flex-col
  justify-center items-center
  font-sans
bg-white
  border-4
  border-black
  relative
  `;

export const Scroll = tw.div`
  flex lg:flex-row flex-col 
  lg:justify-between lg:items-center
  `;

export const Title = tw.div`
font-poppins font-bold 
text-[32px]
lg:text-[52px]
text-center
lg:px-[100px]
leading-[110%]
lg:leading-[110%]
text-black
mt-[40px]
  `;

export const Subtitle = tw.div`
font-poppins font-regular 
text-[18px]
lg:text-[24px]
text-center
px-[32px]
lg:px-[140px]
lg:leading-[120%]
text-black
mt-[20px]
`;

export const AuthorText = tw.div`
  font-poppins font-regular
  text-[16px] text-left text-black
  leading-[150%]
  mb-[120px]

 `;

export const ChapterGenericDiv = tw.div`
flex
w-full h-auto
items-center
justify-center
p-[30px]
lg:p-[34px]
bg-white
  `;

export const ChapterGenericDiv1 = tw.div`
  flex
  w-full h-auto
  items-center
  justify-center
  p-[34px]
  lg:p-[34px]
  bg-white
    `;

export const ChapterGenericDiv2 = tw.div`
  flex
  w-full h-auto
  items-center
  justify-center
  p-[34px]
  lg:p-[34px]
  bg-white
  `;
// lg:justify-between
// lg:pl-[10%]

export const ChapterGenericDiv3 = tw.div`
h-full w-full
items-center
justify-center
bg-white
`;

export const ContainerCard = tw.div`
h-auto w-[700px]
mb-[60px]
mt-[40px]
`;

export const ContainerCard1 = tw.div`
h-[800px] w-[800px]
lg:m-3
flex flex-col
justify-center items-center
font-sans
bg-white
border-4
border-black
`;

export const ContainerCard2 = tw.div`
  h-auto w-[40vw]
  backdrop-blur-[50px]
  bg-[#00000099]
  p-[34px]
`;

export const ContainerCard3 = tw.div`
  h-auto w-[70vw] lg:w-[90%]
  bg-[#00000099]
  p-[28px]
  `;

export const IntroDiv = tw.div`
  w-full h-screen
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-black/50
`;

export const ContainerCardCreditos = tw.div`
  flex flex-col
  items-left 
  max-w-xs
  lg:max-w-[100%]
`;

const TextCardSC = styled.div`
  color: #000000;
`;

export const TextCreditos = tw.div`
  text-black
  font-poppins
  font-semibold
  text-[20px]
  mb-[2px]
`;

export const TextCreditos1 = tw.div`
  text-black
  font-poppins
  font-regular
  text-[18px]
`;

export const TextCreditos2 = tw.div`
  text-black
  font-poppins
  font-black
  text-[40px]
  mb-[40px]
`;

export const TextCard = tw.div`
  font-poppins font-bold 
  text-[32px]
  text-left
  leading-[120%]
  lg:leading-[120%]
  text-black
  mb-[32px]
`;
// selection:bg-[#ef4444] selection:text-white

export const TextCard1 = tw.div`
font-poppins font-regular 
text-[18px]
text-left
lg:leading-[150%]
text-black
mt-[20px]
`;

export const TextCard2 = tw.div`
font-poppins font-regular 
text-[18px]
text-left
lg:leading-[120%]
text-bold
mt-[20px]
`;

export const TextCard3 = tw.div`
font-poppins font-regular 
text-[16px]
text-left
lg:leading-[150%]
text-white
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
