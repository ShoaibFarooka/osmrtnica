import React from "react";

export default function HeaderTop(props) {
  return (
    <div className="flex items-center justify-center w-full">
      <button className="absolute p-2 rounded-md  px-4 text-[28px] bg-gradient-to-r max-sm:text-[14px] from-[#FFFFFF] to-[#ffffff4d] border-2 border-white">
        {props.btnText}
      </button>
      <img src={props.topBanner} className=" max-sm:h-40 w-fit" alt="" />
    </div>
  );
}
