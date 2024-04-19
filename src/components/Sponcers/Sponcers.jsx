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
          <img
            className="h-fit w-[200px] max-sm:w-[150px]"
            src={Suponcer5}
            alt=""
          />
          <img
            className="h-fit w-[64px] max-sm:hidden"
            src={Suponcer4}
            alt=""
          />
          <img
            className="h-fit w-[150px] max-sm:w-[120px]"
            src={Suponcer3}
            alt=""
          />
          <img className="h-fit hidden lg:block" src={Suponcer2} alt="" />
          <img className="h-fit hidden lg:block" src={Suponcer1} alt="" />
        </div>
      </div>
    </div>
  );
}
