import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo from "../../pages/seop-cep/images/logo.png";
import gif from "../../pages/seop-cep/images/loadinggif.gif";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-center
text-sans
text-[#EEDFD3]
text-[20px]
bg-red-500
`;

const LoadingImage = tw.img`
w-24
lg:w-[800px]
`;

export function LoadingSeopCep() {
  return (
    <LoadingDiv>
      {/* <LoadingImage src={logo} className="mb-[20%]"></LoadingImage> */}
      <LoadingImage src={gif}></LoadingImage>
      <div>carregando</div>
    </LoadingDiv>
  );
}
