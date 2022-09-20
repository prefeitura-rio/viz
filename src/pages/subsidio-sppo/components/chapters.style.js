// CSS
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const CapaDiv = tw.div`
  h-screen w-full
  flex flex-col 
  justify-between items-center 
  selection:bg-yellow-600 selection:text-black
  `;

export const Title = tw.div`
  font-poppins font-bold  
  text-4xl text-center text-[#ffffff]
  mt-28
  p-7
  lg:text-4xl
  lg:leading-10  
  lg:mt-[18%]
  lg:max-w-[865px]
  `;

// inline
// px-3
// decoration-clone
// leading-snug

export const AuthorText = tw.div`
  font-poppins
  text-sm text-center text-[#ffffff]
  mt-2
  lg:text-base
  lg:mb-[12%]
  lg:max-w-3xl
  inline
  px-4
  decoration-clone
  p-1
  `;

export const Interactive = tw.div`
  font-poppins
  text-sm text-center text-[#d69108]
  lg:mb-[20%]
  lg:text-base
  lg:max-w-3xl
  p-1
`;

export const IntroDiv = tw.div`
  w-full h-[240vh]
  bg-opacity-90 backdrop-blur-2xl
  bg-slate-50/60
  flex
  items-start
  justify-center
  selection:bg-yellow-600 selection:text-black
`;

export const IntroTitle = tw.div`
  font-black  font-poppins
  text-3xl text-left text-yellow-600 mr-[20vw]
  lg:max-w-3xl
  lg:mb-10
  selection:bg-yellow-600 selection:text-black
  `;

export const FimTitle = tw.div`
  font-black  font-poppins
  text-3xl text-left text-yellow-600 mr-[20vw]
  lg:max-w-3xl
  mb-5
  mt-16
  selection:bg-yellow-600 selection:text-black
  `;

export const IntroText = tw.div`
  font-poppins  font-medium
  align-middle
  text-lg text-justify text-[#57250a]
  leading-snug
  opacity-100
  lg:max-w-3xl
  mt-[50%]
  selection:bg-yellow-600 selection:text-black
`;

export const FimText = tw.div`
  font-poppins  font-medium
  align-middle
  text-lg text-justify text-[#57250a]
  leading-snug
  opacity-100
  lg:max-w-3xl
  mt-[50%]
  selection:bg-yellow-600 selection:text-black
`;

export const TextOrange = tw.div`
  font-poppins
  bg-orange-700 
  text-white
  inline 
`;

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-screen 
  items-center
  -z-10
`;

export const ChapterMap = tw.div`
  flex
  relative
  w-full h-[400vh]
  mt-60
  mb-60
  items-center
  `;

export const TextOrange1 = styled.div`
  background: #dd9f75;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
`;

export const ChapterLineChart = styled.div`
  height: 100vh;
  width: 100%;
  background: #e8cee4;
  z-index: -1;
  display: flex;
  align-items: center;
`;

export const CreditosDiv = styled.div`
  height: 400vh;
  width: 100%;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 2fr 0.8fr 2fr 2fr;
  grid-template-rows: 1fr 0.5fr 1fr;
  gap: 0px 50px;
  grid-template-areas:
    ". . . ."
    ". titulo texto ."
    ". . . .";
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  opacity: 1;
`;

export const ContainerCard = styled.div`
  min-width: 250px;
  margin: auto;
  width: 865px;
  padding: 70px 70px;
  opacity: 1;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.9);
  /* backdrop-filter: blur(50px); */
`;

export const ContainerCard2 = styled.div`
  min-width: 250px;
  margin: auto;
  width: 865px;
  padding: 70px 70px;
  opacity: 1;
  border-radius: 4px;
  background-color: rgba(255, 255, 255);
  /* backdrop-filter: blur(50px); */
`;

export const ContainerCard1 = styled.div`
  min-width: 250px;
  margin: auto;
  width: 865px;
`;

export const TextCard = styled.div`
  color: #57250a;
  font-family: "poppins", sans-serif;
  font-size: 1.1rem;
  line-height: 1.4;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
  width: auto;
  ::selection {
    background-color: #ca8a04;
    color: #000000;
  }
`;

export const TextRed = styled.div`
  background: #be5b5b;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
`;

export const TextBlue = styled.div`
  background: #18b4c9;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
`;
