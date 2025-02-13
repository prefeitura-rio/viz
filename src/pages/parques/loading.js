import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo from "../../pages/enchentes/images/logo.png";
import gif from "../../pages/enchentes/images/loading.gif";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-center
`;

const LoadingImage = tw.img`
w-[90%] h-auto
lg:w-[20%] lg:h-auto
border-4
border-black
`;

export function LoadingParques() {
  return (
    <LoadingDiv>
      {/* <LoadingImage src={logo} className="mb-[20%]"></LoadingImage> */}
      {/* <LoadingImage src={gif}></LoadingImage> */}
      {/* <div>carregando</div> */}
    </LoadingDiv>
  );
}
