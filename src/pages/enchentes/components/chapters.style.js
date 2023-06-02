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
  h-[100vh] w-full
  flex flex-col
  justify-center  items-center
  bg-white
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
  p-2
  lg:text-[48px]
  text-black
  bg-white
    `;

export const Subtitle = tw.div`
font-geologica font-[300]
text-center
text-[18px]
lg:text-[22px]
leading-[120%]
p-2
mt-[12px]
text-black
bg-white
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
  mb-[120px]
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
    overflow-hidden
    px-[30px]
    lg:p-[34px]
    bg-transparent	
    top-[35vh]
  `;

export const ChapterGenericDiv3 = tw.div`
h-full w-full
items-center
justify-center
bg-white
`;

export const ChapterGenericDiv4 = tw.div`
  flex
  w-full h-[100vh]
  items-center
  justify-center
  p-[34px]
  lg:p-[34px]
  bg-white
  `;

export const ContainerCard = tw.div`
h-auto w-[700px]
mb-[60px]
mt-[100px]
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
    h-auto w-[90%] lg:w-[600px]
    bg-[#ffffff]
    px-[48px]
    py-[40px]
    lg:px-[56px]
    lg:py-[42px]
    rounded-lg
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
  font-geologica
  font-regular
  text-[18px]
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
  py-1
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
  py-1
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
  py-1
`;
// selection:bg-[#ef4444] selection:text-white

export const TextCard1 = tw.div`
font-libre font-[400] 
text-[14px]
text-left
lg:leading-[150%]
text-black
mt-[10px]
mb-[60px]
lg:mb-0
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
