import tw from "tailwind-styled-components";
import styled from "styled-components";
// import logo from "../../pages/demolicoes-seop/images/logo.png";
import logo from "../../pages/subsidio-sppo/images/logo1.png";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-center
text-serif
text-[#D69108]
text-2xl
lg:text-2xl
bg-white
`;

const LoadingImage = tw.img`
w-24
lg:w-28
mt-[7vh]
lg:mr-5
`;

export function LoadingSubsidioSPPO() {
  return (
    <LoadingDiv>
      <LoadingImage src={logo} className="mb-[20%]"></LoadingImage>
      <div className="mb-[20%]">carregando ...</div>
    </LoadingDiv>
  );
}
