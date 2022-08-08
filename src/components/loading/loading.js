import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo from "../../pages/demolicoes-seop/images/logo.png";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-between 
text-white 
text-3xl
lg:text-3xl
bg-black
`;

const LoadingImage = tw.img`
w-24
lg:w-36
mt-[2vh]
`;

export function Loading() {
  return (
    <LoadingDiv>
      <LoadingImage src={logo}></LoadingImage>
      <div className="mb-96">carregando ...</div>
    </LoadingDiv>
  );
}
