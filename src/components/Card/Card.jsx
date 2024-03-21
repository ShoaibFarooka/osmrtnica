import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img from "../../assets/images/profile.png";

export default function Card(props) {
  return (
    <div className="flex  gap-2 h-full shadow-md w-5/12  shadow-gray-400 bg-gradient-to-r from-p_bg1 to-p_bg2 border-2 border-white rounded-lg m-3">
      <div>
        <img src={props.profile.img} alt="Image" className="h-full w-44" />
      </div>
      <div className="w-full">
        <div className="flex">
          <div className="flex flex-col mt-4 font-semibold gap-3">
            <span className="text-[24px]">{props.profile.name}</span>
            <p className="flex  flex-col">
              <span>{props.profile.date}</span>
              <span>{props.profile.city}</span>
            </p>
          </div>
          <span>
            {props.profile.symbol_img ? (
              <img src={props.profile.symbol_img} alt="img" />
            ) : (
              <></>
            )}
          </span>
        </div>
        <div className=" flex justify-end cursor-pointer ">
          <span className="flex  items-center font-semibold p-3">
            Osmrtnica <MdOutlineKeyboardArrowRight className="text-[20px]" />
          </span>
        </div>
      </div>
    </div>
  );
}
