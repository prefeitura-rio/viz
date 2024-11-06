import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo from "../../pages/supercentro/images/logo.png";
import gif from "../../pages/supercentro/images/loading.gif";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-center
`;

const LoadingImage = tw.img`
w-[40%] h-auto
lg:w-[20%] lg:h-auto

`;

export function LoadingSuperCentro() {
  return (
    <LoadingDiv >
      <LoadingImage src={gif}></LoadingImage>
    </LoadingDiv>
  );
}
