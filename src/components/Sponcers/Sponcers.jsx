import React from "react";
import Suponcer1 from "../../assets/svgs/Embrace.svg";
import Suponcer2 from "../../assets/svgs/Loral.svg";
import Suponcer3 from "../../assets/svgs/Ando.svg";
import Suponcer4 from "../../assets/svgs/SkyTeam.svg";
import Suponcer5 from "../../assets/svgs/Loral.svg";
export default function Sponcers() {
  return (
    <div>
      <div className="my-10 w-full  flex flex-col gap-[48px] items-center ">
        <p className="text-[20px] font-[400]">Sponsorji</p>
        <div className="flex lg:w-[1084px] md:w-[603px]  justify-between max-lg:justify-center  items-center md:flex-wrap gap-[80px] ">
          <img className="h-fit max-md:hidden" src={Suponcer5} alt="" />
          <img className="h-fit max-md:hidden" src={Suponcer4} alt="" />
          <img className="h-fit" src={Suponcer3} alt="" />
          <img className="h-fit" src={Suponcer2} alt="" />
          <img className="h-fit max-md:hidden" src={Suponcer1} alt="" />
        </div>
      </div>
    </div>
  );
}
