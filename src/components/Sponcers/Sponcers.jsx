import React from "react";
import Suponcer1 from "../../assets/images/Suponcer1.png";
import Suponcer2 from "../../assets/images/Suponcer2.png";
import Suponcer3 from "../../assets/images/Suponcer3.png";
import Suponcer4 from "../../assets/images/Suponcer4.png";
import Suponcer5 from "../../assets/images/Suponcer5.png";
export default function Sponcers() {
  return (
    <div>
      <div className="my-10 w-full  flex flex-col gap-5 items-center ">
        <p className="font-semibold max-lg:text-[24px]">Sponsorji</p>
        <div className="flex w-5/6  justify-between max-lg:justify-center  items-center flex-wrap gap-10 ">
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
