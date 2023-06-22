import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo1 from "../../pages/obras/images/logo1.png";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-between 
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
      <LoadingImage src={logo1}></LoadingImage>
      <div className="mb-96">carregando ...</div>
    </LoadingDiv>
  );
}
