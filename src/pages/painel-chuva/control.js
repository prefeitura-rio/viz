import tw from "tailwind-styled-components";

const CardBox = tw.div`
    w-[560px] 
    p-6
    pl-[80px]
    bg-[#ffffff90] 
    rounded 
    font-nunito
    absolute top-1/2 transform -translate-y-1/2
`;

const Card = tw.div`
    flex
    flex-col
    justify-between
`;

export function ControlPanel() {
  return (
    <CardBox>
      <Card>
        <div className="flex items-center w-full my-3">
          <div className="w-[60px] h-[60px] bg-[#ffffff] rounded-full border border-gray-300"></div>
          <div className="ml-[30px] text-[40px]">sem chuva</div>
        </div>
        <div className="flex items-center w-full my-3">
          <div className="w-[60px] h-[60px] bg-[#DAECFB] rounded-full border border-gray-300"></div>
          <div className="ml-[30px] text-[40px]">chuva fraca</div>
        </div>
        <div className="flex items-center w-full my-3">
          <div className="w-[60px] h-[60px] bg-[#A9CBE8] rounded-full border border-gray-300"></div>
          <div className="ml-[30px] text-[40px]">chuva moderada</div>
        </div>
        <div className="flex items-center w-full my-3">
          <div className="w-[60px] h-[60px] bg-[#77A9D5] rounded-full border border-gray-300"></div>
          <div className="ml-[30px] text-[40px]">chuva forte</div>
        </div>
        <div className="flex items-center w-full my-3">
          <div className="w-[60px] h-[60px] bg-[#125999] rounded-full border border-gray-300"></div>
          <div className="ml-[30px] text-[40px]">chuva muito forte</div>
        </div>
      </Card>
    </CardBox>
  );
}
