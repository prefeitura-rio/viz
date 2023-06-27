import tw from "tailwind-styled-components";

const LoadingDiv = tw.div`
w-full h-screen
flex 
flex-col
items-center justify-center
text-sans
text-[#EEDFD3]
text-[20px]
bg-[#F04140]
`;

const LoadingImage = tw.img`
w-[500px]
lg:w-[700px]
`;

export function LoadingPainelInvestimento() {
  return (
    <LoadingDiv>
      {/* <LoadingImage src={logo} className="mb-[20%]"></LoadingImage> */}
      <LoadingImage src={""}></LoadingImage>
      {/* <div>carregando</div> */}
    </LoadingDiv>
  );
}
