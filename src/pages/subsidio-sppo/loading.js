import tw from "tailwind-styled-components";
import styled from "styled-components";

const LoadingDiv = tw.div`
flex
w-full h-auto
justify-center
text-serif
text-[#D69108]
text-2xl
lg:text-2xl
bg-white
`;

export function LoadingSubsidioSPPO() {
  return (
    <LoadingDiv>
      <div className="mt-[50vh]">carregando ...</div>
    </LoadingDiv>
  );
}
