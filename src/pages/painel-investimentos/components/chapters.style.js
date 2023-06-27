// CSS
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const CapaDivSC = styled.div`
  background-size: cover;
  background-position: center;
  /* filter: blur(8px); */
`;

export const CapaDiv = tw(CapaDivSC)`
  h-full w-full lg:h-[100vh]
  flex flex-col
  justify-between  items-center
  lg:pl-[10%]
  lg:pr-[10%]
  pl-[10%]
  pr-[10%]
`;

export const CapaAutor = tw.div`
  flex flex-col
  justify-start items-center
  mt-[24px] 
  font-sans
  text-sm text-center text-[#ef4444]
  lg:leading-[150%]
  selection:bg-[#ef4444] selection:text-white
  `;

export const Title = tw.div`
  font-nunito font-bold  
  text-[40px] text-center text-[#ef4444]
  leading-[44px]
  lg:text-[48px]
  lg:leading-[48px]
  selection:bg-[#ef4444] selection:text-white
  `;

export const Subtitle = tw.div`
  font-nunito
  font-normal
  text-[16px] text-center text-[#ef4444]
  lg:text-[16px]
  lg:max-w-sm
  lg:leading-[26px]
  lg:mb-[88px]
  mb-[98px]
  mt-[8px]
  selection:bg-[#ef4444] selection:text-white
`;

export const ContainerCard = tw.div`
  flex flex-col lg:flex-row 
  justify-between items-center 
  bg-white
  mt-[120px]
  mb-[120px]
`;

export const TextCard1 = tw.div`
  font-nunito  
  text-[16px]
  font-light
  text-left
  lg:leading-7
  text-black
  selection:bg-white selection:text-[#ef4444]
`;

export const ChapterGenericDiv4 = tw.div`
  flex
  w-full h-[120vh] lg:h-[120vh] 
  items-center
  justify-left
  lg:justify-start
  lg:p-[10%]
  bg-red-500
  text-white
  p-[10%]
  -z-10 
  `;

export const ContainerCardCreditos = tw.div`
  flex flex-col
  items-left 
  bg-red-500
  max-w-xs
  lg:max-w-[100%]
`;

export const NewsTitle1 = tw.div`
  text-white
  underline
  font-nunito
  font-semibold
  max-w-[400px]
  text-[24px]
  mb-[4px]
  selection:bg-white selection:text-[#ef4444]
`;
