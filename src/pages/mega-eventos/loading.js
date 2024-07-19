import tw from "tailwind-styled-components";
import styled from "styled-components";
import logo from "../../pages/mega-eventos/images/logo.png";
import gif from "../../pages/mega-eventos/images/loading.gif";

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

export function LoadingMegaEventos() {
  return (
    <LoadingDiv style={{ backgroundColor: "beige", backgroundImage: "radial-gradient(circle, rgba(211, 211, 211, 0.4) 20%, transparent 20%)", backgroundSize: "10px 10px" }}>
      <LoadingImage src={gif}></LoadingImage>
    </LoadingDiv>
  );
}
