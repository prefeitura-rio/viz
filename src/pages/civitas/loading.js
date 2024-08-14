import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo from "../../pages/civitas/images/logo.png";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-between 
text-white
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

export function LoadingCivitas() {
  return (
    <LoadingDiv>
      <LoadingImage src={logo}></LoadingImage>
      <div className="mb-96">carregando ...</div>
    </LoadingDiv>
  );
}
