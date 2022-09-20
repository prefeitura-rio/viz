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
  font-georgia font-bold  
  text-3xl text-center text-black
  mt-28
  lg:text-4xl  
  lg:mt-[18%]
  lg:max-w-[865px]
  bg-yellow-600
  inline
  px-3
  decoration-clone
  leading-snug
  `;

export const AuthorText = tw.div`
  font-georgia
  text-sm text-center text-black
  mt-6
  lg:text-base
  lg:mb-[12%]
  lg:max-w-3xl
  bg-yellow-600
  inline
  px-4
  decoration-clone
`;

export const Interactive = tw.div`
  font-georgia
  text-sm text-center text-black
  lg:mb-[20%]
  lg:text-base
  lg:max-w-3xl
  bg-yellow-600
  inline
  px-4
  decoration-clone
`;

export const IntroDiv = tw.div`
  w-full h-[240vh]
  bg-opacity-90 backdrop-blur-xl
  bg-slate-50/60
  flex
  items-start
  justify-center
  gap-x-8
  selection:bg-yellow-600 selection:text-black
`;

export const IntroTitle = tw.div`
  font-bold  font-georgia
  text-5xl text-right text-black
  lg:max-w-3xl
  mt-[50%]
`;

export const IntroText = tw.div`
  font-georgia  font-medium
  align-middle
  text-xl text-justify text-black 
  leading-snug
  opacity-100
  lg:max-w-3xl
  mt-[50%]
`;

export const TextOrange = tw.div`
  font-georgia
  bg-orange-700 
  text-white
  inline 
`;

export const TextOrange1 = styled.div`
  background: #dd9f75;
  color: #fff;
  display: inline;
  padding: 1px 8px 1px 8px;
  margin: 2px;
`;

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-screen 
  items-center
  -z-10
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
  height: 200vh;
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
  padding: 35px 50px;
  opacity: 1;
  border-radius: 5px;
  backdrop-filter: blur(50px);
`;

export const ContainerCard1 = styled.div`
  min-width: 250px;
  margin: auto;
  width: 865px;
`;

export const TextCard = styled.div`
  color: #000000;
  font-family: "Redaction", sans-serif;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-top: 0px;
  margin-bottom: 0px;
  text-align: left;
  ::selection {
    background: #ca8a03;
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
