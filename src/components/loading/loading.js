import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo from "../../pages/demolicoes-seop/images/logo.png";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-center 
text-white 
text-3xl
lg:text-6xl
bg-black
`;

const LoadingImage = tw.img`
lg:w-44
w-20
mb-8
`;

export function Loading() {
  return (
    <LoadingDiv>
      <LoadingImage src={logo}></LoadingImage>
      <div>LOADING...</div>
    </LoadingDiv>
  );
}
