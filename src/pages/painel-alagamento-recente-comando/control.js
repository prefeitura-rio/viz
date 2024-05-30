import tw from "tailwind-styled-components";

import logo from "./images/logo.png";

const CardBox = tw.div`
    w-[560px] 
    h-full
    bg-[#ffffff] 
    rounded 
    font-nunito
    flex 
    flex-col
    items-center
    pt-[100px]
    space-y-[200px]
`;

export function ControlPanel() {
  return (
    <CardBox>
      {/* <img src={logo} className=""></img> */}
      <div className="ml-[30px] text-[50px] bold mb-10">
        {" "}
        Monitor de chuvas{" "}
      </div>
      <div>
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
      </div>
    </CardBox>
  );
}
