import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import cardimg from "../../assets/images/CardFlower1.png";
import oneImg from "../../assets/images/01.png";

export function Card(props) {
  return (
    <div className="flex  gap-2 h-full shadow-md lg:w-5/12 sm:w-full max-sm:w-full shadow-gray-400 bg-gradient-to-r from-p_bg1 to-p_bg2 border-2 border-white rounded-lg m-3">
      <div className="flex items-center">
        <img
          src={props.profile.img}
          alt="Image"
          className="h-full max-sm:h-fit w-44 "
        />
      </div>
      <div className="w-full">
        <div className="flex">
          <div className="flex flex-col text-[14px] mt-4 gap-3">
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
          <span className="flex  items-center text-[14px] p-3">
            Odpri <MdOutlineKeyboardArrowRight className="text-[20px]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function Card2(props) {
  return (
    <div className="flex  gap-2 h-48 shadow-sm  w-full shadow-gray-400 bg-gradient-to-r bg-[#ebf0f499] border-2 border-white rounded-lg m-3">
      <div className="flex items-center ">
        <img
          src={props.profile.img}
          alt="Image"
          className="h-full max-sm:h-fit w-52 p-5"
        />
      </div>
      <div className="w-full">
        <div className="flex">
          <div className="flex flex-col mt-4  gap-2 text-[14px]">
            <span className="text-[24px]">{props.profile.name}</span>
            <p className="flex  flex-col ">
              <span>{props.profile.text}</span>
              <span>{props.profile.number}</span>
            </p>
            <p>{props.profile.website}</p>
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
          <span className="flex  items-center  p-3 text-[14px]">
            Osmrtnica <MdOutlineKeyboardArrowRight className="text-[20px]" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function Card3(props) {
  return (
    <div className=" relative">
      <div className="absolute w-full">
        <img src={props.info.num} alt="" className="p-10 " />
        <div className="w-full flex justify-center h-72">
          <div className="w-4/5 h-full">{props.children}</div>
        </div>
      </div>
      <img src={props.info.bgImg} alt="img" />
    </div>
  );
}
