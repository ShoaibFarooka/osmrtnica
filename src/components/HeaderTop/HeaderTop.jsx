import React from "react";

export default function HeaderTop(props) {
  return (
    <div className="flex items-center justify-center w-full ">
      <div
        className=" bg-cover flex items-center justify-center  bg-center w-full lg:h-[300px] md:h-[220px] max-sm:h-[192px]"
        style={{ backgroundImage: `url('${props.topBanner}')` }}
      >
        <button
          className={`absolute rounded-[8px] text-[#1E2125] text-[40px]  max-sm:text-[28px] bg-gradient-to-r  from-[#FFFFFF] to-[#ffffff4d] border-2 border-white ${props.btnStyle}`}
        >
          {props.btnText}
        </button>
      </div>
    </div>
  );
}
