import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo1 from "../../pages/obras/images/logo1.png";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-center 
text-black
text-2xl
lg:text-2xl
bg-white
`;

const LoadingImage = tw.img`
w-24
lg:w-32
mt-[2vh]
lg:mr-5
`;

export function LoadingObras() {
  return (
    <LoadingDiv>
      <LoadingImage className="absolute top-3 w-24 mt-[2vh] lg:w-32" src={logo1}></LoadingImage>
      <div>carregando ...</div>
    </LoadingDiv>
  );
}
