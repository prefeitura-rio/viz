import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo from "../../pages/seop-demolicoes/images/logo.png";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-between 
text-yellow-600 
text-2xl
lg:text-2xl
bg-black
`;

const LoadingImage = tw.img`
w-24
lg:w-32
mt-[2vh]
lg:mr-5
`;

export function LoadingSEOPDemolicioes() {
  return (
    <LoadingDiv>
      <LoadingImage src={logo}></LoadingImage>
      <div className="mb-96">carregando ...</div>
    </LoadingDiv>
  );
}
