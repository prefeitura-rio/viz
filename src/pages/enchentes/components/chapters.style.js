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
  h-[50vh] w-[90vw]
  lg:h-[800px] lg:w-[800px]
  m-3
  flex flex-col
  relative
  justify-center items-center
  font-sans
bg-white
  border-4
  border-black
  `;

export const Scroll = tw.div`
  flex lg:flex-row flex-col 
  lg:justify-between lg:items-center
  `;

export const Title = tw.div`
top-10
h-[50vh] w-[90vw]
absolute
font-poppins font-bold 
text-[32px]
lg:text-[60px]
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
lg:text-[28px]
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
px-[30px]
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
    w-full h-[600vh]
    lg:w-full lg:h-[600vh]
    overflow-hidden
    px-[30px]
    lg:p-[34px]
    bg-transparent	
    top-[25vh]
  `;

export const ContainerCard3 = tw.div`
    absolute
    z-10
    h-auto w-[600px] lg:w-[500px]
    bg-[#00000099]
    p-[28px]
  `;

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

export const ContainerCard2 = tw.div`
  h-auto w-[40vw]
  backdrop-blur-[50px]
  bg-[#00000099]
  p-[34px]
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
mt-[10px]
mb-[60px]
lg:mb-0
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
