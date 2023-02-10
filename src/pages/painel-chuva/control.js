import tw from "tailwind-styled-components";

const CardBox = tw.div`
    absolute 
    w-64 
    p-6 
    bg-white 
    rounded 
    shadow 
    left-10 
    top-20
`;

const Card = tw.div`
    flex
    flex-col
    justify-between
`;

const Size = tw.div`
    w-8
    h-8
    bg-[#ffffff]
    rounded-full
    border
    border-gray-300
`;

export function ControlPanel() {
  return (
    <CardBox>
      <Card>
        <div className="flex items-center w-full my-3">
          <Size></Size>
          <div className="ml-2">Sem Chuva</div>
        </div>
        <div className="flex items-center w-full my-3">
          <div className="w-8 h-8 bg-[#DAECFB] rounded-full border border-gray-300"></div>
          <div className="ml-2">Chuva Fraca</div>
        </div>
        <div className="flex items-center w-full my-3">
          <div className="w-8 h-8 bg-[#A9CBE8] rounded-full border border-gray-300"></div>
          <div className="ml-2">Chuva Moderada</div>
        </div>
        <div className="flex items-center w-full my-3">
          <div className="w-8 h-8 bg-[#77A9D5] rounded-full border border-gray-300"></div>
          <div className="ml-2">Chuva Forte</div>
        </div>
        <div className="flex items-center w-full my-3">
          <div className="w-8 h-8 bg-[#125999] rounded-full border border-gray-300"></div>
          <div className="ml-2">Chuva Muito Forte</div>
        </div>
      </Card>
    </CardBox>
  );
}
