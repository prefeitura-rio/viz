// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/rj_capa.jpg";

export const CapaDivSC = styled.div`
  background-image: url(${capa});
  background-size: cover;
  background-position: center;
`;

// @media only screen and (min-width: 768px) {
//   background-size: 21%;

export const CapaDiv = tw(CapaDivSC)`
  h-[100vh] w-full
  flex flex-col
  justify-center  items-center
  `;

export const CapaAutor = tw.div`
  flex flex-col  
  lg:h-auto lg:w-[800px]
  justify-center items-center
  `;

export const Title = tw.div`  
  font-geologica font-[700]
  text-[32px]
  text-center
  leading-[120%]
  py-[10px]
  px-8
  lg:py-0
  lg:px-0
  lg:text-[48px]
  lg:mt-[100px]
  text-white
  drop-shadow-[0_8px_8px_rgba(0,0,0,0.99)]
  `;

export const Subtitle = tw.div`
font-geologica font-[100]
text-center
text-[18px]
lg:text-[22px]
leading-[120%]
py-0
px-8
lg:py-[12px]
lg:px-0
text-white
drop-shadow-[0_1px_1px_rgba(0,0,0,0.99)]
`;

export const Video = tw.div`
  flex flex-col  
  h-auto w-[56w]
  lg:h-[700px] lg:w-[700px]
  justify-center items-center
  border-4
  border-black
  
  `;

export const Scroll = tw.div`
  flex lg:flex-row flex-col 
  lg:justify-between lg:items-center
  `;

export const AuthorText = tw.div`
  font-geologica
  text-[14px] text-left text-black
  leading-[150%]
  mb-[88px]
 `;

export const ChapterGenericDiv = tw.div`
flex
w-full h-auto
items-center
justify-center
px-[48px]
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
    relative
    justify-center
    w-auto h-[600vh]
    lg:w-auto lg:h-[600vh]
    
    px-[30px]
    lg:p-[34px]
    bg-transparent	
  `;

export const ChapterQuadroDois = tw.div`
  flex
  relative
  justify-center
  w-auto h-[1100vh]
  lg:w-auto lg:h-[1100vh]

  px-[30px]
  lg:p-[34px]
  bg-transparent	
`;

export const ChapterGenericDiv3 = tw.div`
h-full w-full
items-center
justify-center
bg-white
`;

export const ChapterGenericDiv4 = tw.div`
  flex
  w-full h-auto
  min-h-[60vh]
  items-center
  justify-center
  p-[34px]
  lg:p-[34px]
  bg-white
  `;

export const ContainerCard = tw.div`
h-auto w-[42rem]
mb-[60px]
mt-[60px]
`;

export const ContainerCard2 = tw.div`
  h-auto w-[40vw]
  backdrop-blur-[50px]
  bg-[#00000099]
  p-[34px]
`;

export const ContainerCard3 = tw.div`
    absolute
    z-10
    h-auto w-[80vw] lg:w-[460px]
    bg-[#ffffff99]
    px-[40px]
    py-[34px]
    lg:px-[56px]
    lg:py-[42px]
    rounded-lg
    backdrop-blur-md
  `;

export const Grafico = tw.div`
  m-auto
  lg:my-[40px]
  min-w-[250px]
`;

export const Imagem = tw.div`
  font-libre font-[700] 
  text-[12px]
  text-left
  lg:leading-[150%]
text-black
`;

export const Imagem1 = tw.div`
  font-libre font-[400] 
  text-[12px]
  text-left
  lg:leading-[150%]
text-black
`;

export const IntroDiv = tw.div`
  w-full h-screen
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-black/50
`;

export const TextCreditos = tw.div`
  text-black
  font-geologica
  font-semibold
  text-[20px]
  mb-[2px]
`;

export const TextCreditos1 = tw.div`
  text-black
  font-libre font-[400] 
  text-[14px]
`;

export const TextCreditos2 = tw.div`
  text-black
  font-geologica
  font-black
  text-[32px]
  lg:text-[40px]
  mb-[40px]
`;

export const TextCard = tw.div`
  font-geologica font-bold 
  w-[70%]
  text-[24px]
  lg:text-[40px]
  text-left
  leading-[120%]
  lg:leading-[120%]
  text-black
  mb-[16px]
`;

export const TextHighlightBlue = tw.div`
  font-libre font-[400] 
  inline-block
  text-[14px]
  text-left
  lg:leading-[150%]
  text-white
  bg-[#29557D]
  px-2
  py-0
`;

export const TextHighlightBlueUm = tw.div`
  font-libre font-[400] 
  inline-block
  text-[14px]
  text-left
  lg:leading-[150%]
  text-white
  bg-[#000000]
  px-2
  py-0
`;

export const TextHighlightBlueDois = tw.div`
  font-libre font-[400] 
  inline-block
  text-[14px]
  text-left
  lg:leading-[150%]
  text-white
  bg-[#6F9CB7]
  px-2
  py-0
`;
// selection:bg-[#ef4444] selection:text-white

export const TextHighlightDark = tw.div`
  font-libre font-[700] 
  text-[15px]
  text-left
  lg:leading-[150%]
  text-black
`;

export const TextCard1 = tw.div`
font-libre font-[400] 
text-[14px]
text-left
lg:leading-[150%]
text-black
`;

export const TextCard2 = tw.div`
font-geologica font-[400] 
text-[18px]
text-left
lg:leading-[120%]
text-bold
mt-[20px]
`;

export const TextCard3 = tw.div`
font-libre font-[400] 
text-[14px]
text-left
lg:leading-[150%]
text-black
`;
