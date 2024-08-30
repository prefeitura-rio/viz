// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa.gif";
export const CapaDivSC = styled.div`
  // background-image: url(${capa});
  background-size: cover;
  background-position: center;
`;
export const Logo = tw.img`
  w-24 mt-[2vh] lg:w-20 fixed top-0 left-1/2 transform -translate-x-1/2
`

export const Clock = tw.div`
 font-family: 'Digital Numbers', sans-serif;                                                
  fixed
  top-0
  right-0
  w-[200px]
  h-[100px]
  bg-red-500
  mt-[2vh]
  mr-[2vh]
  flex
  items-center
  justify-center
  text-white
  text-3xl
  pr-2
`;
export const CapaDiv = tw(CapaDivSC)`
  h-screen 
  flex flex-col 
  justify-center items-center 
  bg-black bg-opacity-40 backdrop-blur
`;
export const Wrap = tw.div`
  h-[600px] w-full
  flex flex-col 
  justify-center items-center 
  pl-5 pr-5  

`;
// mt-[10%]
// lg:mt-[21%]
// lg:mb-3    
// font-serif font-bold  
// text-4xl text-center text-white
// lg:text-4xl
// max-w-3xl
export const Title = tw.div`
  mt-[5%]
  lg:mt-[5%]
  mb-16  
  lg:mb-16  
  font-serif font-bold  
  text-4xl text-center text-white
  leading-[1.3]  
  lg:text-6xl
  lg:max-w-[900px]
  max-w-[900px]
  lg:leading-[1.2]
  `;


// export const Subtitle = tw.div`
//   font-serif
//   text-base text-center text-white
//   lg:text-xl
//   max-w-4xl
// `;

export const AuthorText = tw.div`
  mt-[20%]
  lg:mb-[45%]
  font-serif
  text-sm text-center text-white
  leading-[1.5] 
  lg:text-[15px]
  max-w-[500px]
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

export const Credito = tw.div`
  
  font-serif
  text-sm text-left text-white
  lg:text-sm
  lg:text-left
`;

export const IntroTitle = tw.div`
  font-bold  font-serif
  text-1xl text-left text-white
  self-start
  lg:self-start
`;

export const IntroText = tw.div`
  font-serif  
  text-lg text-justify text-white 
  leading-normal 
  opacity-100
  max-w-[500px]
`;

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-[150vh]
  items-center
  justify-center
  text-white
  -z-10
  `;

export const ChapterGenericDiv1Center = tw.div`
  flex flex-col 
  justify-center items-center 
  w-full h-[150vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  text-white
  -z-10 
  `;
export const ChapterGenericDiv1CenterBig = tw.div`
  flex flex-col 
  justify-center items-center 
  w-full h-[250vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  text-white
  -z-10 
  `;
export const ChapterGenericDiv1Left = tw.div`
  flex 
  w-full h-[150vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[5%]
  text-white
  -z-10 
  `;
export const ChapterGenericDiv1Right = tw.div`
  flex 
  w-full h-[150vh] 
  items-center
  justify-center
  lg:justify-end
  lg:p-[5%]
  text-white
  -z-10 
  `;
export const ChapterGenericDiv1RightBig = tw.div`
  flex 
  w-full h-[250vh] 
  items-center
  justify-center
  lg:justify-end
  lg:p-[5%]
  text-white
  -z-10 
  `;

export const IntroDiv = tw.div`
  w-full h-200
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-red-500/50
  pr-[10%] pl-[10%]
  lg:pr-[25%]
  lg:pl-[25%]
`;
export const FimDiv = tw.div`
  w-full h-100
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-black/50
  pr-[10%] pl-[10%]
  pt-[150%]
  lg:pt-[45%]
  lg:pr-[1%]
  lg:pl-[1%]
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
  font-serif  
  text-lg
  text-left
`;

export const TextCard1 = tw(TextCardSC)`
  font-serif  
  text-lg
  text-left
  mt-0
  mb-0
`;
export const BallsContainer = tw.div`
  flex 
  flex-start
  items-center 
  mt-4
`;

export const BallWithLabel = tw.div`
  flex 
  items-center 
`;

export const Ball1 = tw.div`
  w-5 h-5 
  bg-[#00BFFF]
  rounded-full 
  mr-2
`;
export const Ball2 = tw.div`
  w-5 h-5 
  bg-[grey]
  rounded-full 
  mr-2
`;

export const BallLabel = tw.span`
  text-white
  text-sm
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
  background: #a96e04;
`;

export const Textyellow = tw(TextyellowSC)`
  text-white
  inline
`;
const TextgreySC2 = styled.div`

`;

export const Textgrey2 = tw(TextgreySC2)`

text-white
  inline
`;
const TextBlueSC = styled.div`
 background: #00BFFF;
`;

export const TextBlue = tw(TextBlueSC)`

  text-white
  inline
`;
