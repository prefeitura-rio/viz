// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa_megaeventos.gif";

export const CapaDivSC = styled.div`
  background-image: url(${capa});
 background-size: contain; 
  background-repeat: no-repeat; 
  background-position: center; 
  background-size: 65%;

  @media (max-width: 600px) {
    background-size: 150%; 
  }
`;
// export const CapaDivSC = styled.div`
//   background-image: url(${capa});
//   background-size: 100%; 
//   background-repeat: no-repeat;
//   background-position: center;

//   @media (min-width: 1024px) {
//     background-size: 60%; 
//   }
// `;

export const CapaDiv = tw(CapaDivSC)`
 h-screen 
  flex flex-col 
  justify-center items-center 
  bg-black bg-opacity-40 backdrop-blur
`;

export const CapaAutor = tw.div`
  flex flex-col
  lg:h-auto lg:w-[800px]
  justify-center items-center
`;

export const ScrollableWrap = tw.div`
  h-[100vh] w-full
  flex flex-col 
  justify-center items-center 
  pl-5 pr-5  
  relative
  z-10
  transform -translate-y-1/2
`;
export const Wrap = tw.div`
  h-[200vh] w-full
  flex flex-col 
  justify-center items-center 
  pl-5 pr-5  
  absolute
  z-10
  bg-black bg-opacity-40 backdrop-blur
`;
export const Title = tw.div`
  mt-[5%]
  lg:mt-[5%]
  mb-3  
  lg:mb-3 
  font-serif font-bold  
  text-2xl text-center text-white
  leading-[1.3]  
  lg:text-3xl
  lg:max-w-[900px]
  max-w-[900px]
  lg:leading-[1.2]
  `;

export const Subtitle = tw.div`
  mb-4 
  lg:mb-5 
  font-serif
  text-[15px] text-center text-white
  leading-[1.3] 
  lg:leading-[1.2]
  lg:text-[18px]
  max-w-[650px]
`;
export const AuthorText = tw.div`
  mt-[20%]
  lg:mb-[45%]
  font-serif
  text-sm text-center text-white
  leading-[1.5] 
  lg:text-[15px]
  max-w-[500px]
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


export const ChapterGenericDiv = tw.div`
flex
w-full h-auto
items-center
justify-center
px-[24px]
lg:p-[34px]

`;

export const ChapterGenericDiv1 = tw.div`
  flex
  w-full h-auto
  items-center
  justify-center
  p-[34px]
  lg:p-[34px]

  `;

export const ChapterGenericDiv2 = tw.div`
   
    w-auto 

    lg:w-[100vw] 

    bg-transparent	
  `;
export const ChapterGenericLeft = tw.div`
    flex
    relative
    justify-center
    w-auto 

    lg:justify-start
    lg:w-[100vw] 

    px-[30px]
    lg:p-[34px]
    bg-transparent	
  `;
export const ChapterGenericRight = tw.div`
    flex
    relative
    justify-center
    w-auto 

    lg:justify-end
    lg:w-[100vw] 

    px-[30px]
      lg:p-[34px]
        lg:pr-[1vw]
    xl:pr-[1vw]
    2xl:pr-[10vw]
    bg-transparent	
  `;
export const ChapterGenericCenter = tw.div`
    flex
    relative
    justify-center
    w-auto 

    lg:justify-center
    lg:w-[100vw] 

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

`;

export const ChapterGenericDiv4 = tw.div`
  flex
  w-full h-auto
  min-h-[60vh]
  items-center
  justify-center
  p-[34px]
  lg:p-[34px]

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
  bg-[rgba(255,255,255,0.95)]
  lg:bg-[rgba(255,255,255,0.95)]
  xl:bg-[rgba(255,255,255,0)]
  px-[30px]
  py-[25px]
  lg:px-[32px]
  lg:py-[25px]
`;


export const Grafico = tw.div`
  m-auto
  lg:my-[40px]
  min-w-[250px]
`;

export const Imagem = tw.div`
  
  text-[12px]
  text-left
  lg:leading-[150%]
text-black
`;

export const Imagem1 = tw.div`
  
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
  underline
  text-[18px]
  mb-[2px]
`;

export const TextCreditos1 = tw.div`
  text-black
  
  text-[16px]
`;

export const TextCreditos2 = tw.div`
  text-black
  
  font-black
  text-[20px]
  lg:text-[30px]
  mb-[40px]
`;

export const TextCard = tw.div`
   font-bold 
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
  
  inline-block
  text-[20px]
  text-left
  lg:leading-[150%]
  text-white
  bg-[#29557D]
  px-2
  py-0
`;

export const TextHighlightBlueUm = tw.div`
  
  inline-block
  text-[20px]
  text-left
  lg:leading-[150%]
  text-white
  bg-[#000000]
  px-2
  py-0
`;

export const TextHighlightBlueDois = tw.div`
  
  inline-block
  text-[20px]
  text-left
  lg:leading-[150%]
  text-white
  bg-[#6F9CB7]
  px-2
  py-0
`;
// selection:bg-[#ef4444] selection:text-white

export const TextHighlightDark = tw.div`
  
  text-[15px]
  text-left
  lg:leading-[150%]
  text-black
`;

export const TextCard1 = tw.div`

text-[16px]
text-left
lg:leading-[150%]
text-black
`;

export const TextCard2 = tw.div`
 font-[400] 
text-[18px]
text-left
lg:leading-[120%]
text-bold
mt-[20px]
`;

export const TextCard3 = tw.div`

text-[14px]
text-left
lg:leading-[140%]
text-black
leading-[140%]  
`;
