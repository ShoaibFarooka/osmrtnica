import React from "react";

export default function HeaderTop(props) {
  return (
    <div className="flex items-center justify-center w-full ">
      <button className="absolute py-[16px] px-[24px] rounded-[8px] text-[#1E2125] text-[40px]  max-sm:text-[28px] bg-gradient-to-r  from-[#FFFFFF] to-[#ffffff4d] border-2 border-white">
        {props.btnText}
      </button>
      <img
        src={props.topBanner}
        className=" lg:w-[1280px] md:w-[744px] max-sm:w-[360px] lg:h-[300px] md:h-[220px] max-sm:h-[192px]"
        alt=""
      />
    </div>
  );
}
