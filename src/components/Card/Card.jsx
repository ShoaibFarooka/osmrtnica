import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import cardimg from "../../assets/images/CardFlower1.png";
import oneImg from "../../assets/images/01.png";
import icon1 from "../../assets/images/mini_icon1.png";

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
      <div className="flex items-center   ">
        <img
          src={props.profile.img}
          alt="Image"
          className="h-fit max-sm:h-fit  p-5 max-md:p-0"
        />
      </div>
      <div className="w-full">
        <div className="flex">
          <div className="flex justify-between w-full">
            <div className="flex flex-col mt-4  gap-2 max-md:gap-1 text-[14px]">
              <span className="text-[24px] max-md:text-[16px] max-md:font-bold">
                {props.profile.name}
              </span>
              <p className="flex  flex-col max-md:text-[12px]">
                <span>{props.profile.text}</span>
                <span>{props.profile.number}</span>
              </p>
              <p>{props.profile.website}</p>
            </div>
            <div className="p-6 text-[14px] max-md:p-0 max-md:pt-6 max-md:pr-6 text-[#CC6F6F]">
              {props.profile.role}
            </div>
          </div>
          <span>
            {props.profile.symbol_img ? (
              <img src={props.profile.symbol_img} className="" alt="img" />
            ) : (
              <></>
            )}
          </span>
        </div>
        <div className=" flex justify-end cursor-pointer ">
          {props.profile.arrowText && (
            <span className="flex  items-center  p-3 text-[14px]">
              {props.profile.arrowText}{" "}
              <MdOutlineKeyboardArrowRight className="text-[20px]" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Card3(props) {
  return (
    <div className=" relative">
      <div className="absolute w-full ">
        <img
          src={props.info.num}
          alt=""
          className="p-10 max-lg:p-5 max-lg:w-28"
        />
        <div className="w-full flex justify-center h-80">
          <div className="w-4/5 h-full">{props.children}</div>
        </div>
      </div>
      <img src={props.info.bgImg} alt="img" />
    </div>
  );
}

export function Card4(props) {
  return (
    <div className="flex flex-col gap-3 w-80 p-8 border-1 shadow-lg border-white bg-gradient-to-r from-[#ffffff] to-[#ffffff4d] rounded-2xl">
      <img className="w-12" src={props.item.icon} alt="" />
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{props.item.heading}</h3>
        <span className="flex flex-col gap-3 text-[14px]">
          <p>{props.item.line1}</p>
          <p>{props.item.line2}</p>
        </span>
      </div>
    </div>
  );
}
