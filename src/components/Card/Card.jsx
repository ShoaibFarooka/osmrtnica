import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export function Card(props) {
  return (
    <div className="flex  gap-2  shadow-md shadow-[#c2c2c280] h-[170px] w-[466px] max-sm:h-[124px] max-sm:w-[296px] justify-center items-center  bg-gradient-to-r from-[#E3EAEF] to-[#F3F6F8] border-2 border-white rounded-lg m-3">
      <div className="w-[420px] h-[130px] max-sm:w-[261px] flex gap-[32px] items-center max-sm:justify-normal">
        <div className="flex items-center h-fit max-sm:w-[100px]">
          <img
            src={props.profile.img}
            alt="Image"
            style={{
              // boxShadow: "-3px -3px 7px 0px #FFFFFFB2",

              // boxShadow: `5px 5px 10px 0px #C2C2C280`,

              boxShadow: `1px 4px 4px 0px #00000040`,
            }}
            className="h-[130px] w-[95px] drop-shadow-xl max-sm:w-[72px] max-sm:h-[98.53px] border-[4px] border-[#FFFFFF] rounded-[8px]"
          />
        </div>
        <div className=" w-[293.33px] max-sm:w-full h-fit">
          <div className="flex ">
            <div className="flex flex-col text-[14px] gap-3 max-sm:gap-1">
              <span className="text-[24px] max-sm:text-[16px] max-sm:font-semibold">
                {props.profile.name}
              </span>
              <p className="flex  flex-col text-[16px] max-sm:text-[14px]">
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
          <div className=" flex justify-end cursor-pointer  w-full">
            <span className="flex  items-center text-[14px] p-3 max-sm:p-0">
              Odpri <MdOutlineKeyboardArrowRight className="text-[20px]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Card2(props) {
  return (
    <div
      className={`${props.style} relative flex items-center justify-center  shadow-md shadow-[#ebf0f4b3]  lg:w-[762px] md:w-[592px] max-sm:w-[276px] max-sm:h-[259px] lg:h-[200px] md:h-[170px] bg-gradient-to-r bg-[#ebf0f499] border-2 border-white rounded-lg`}
      style={{ boxShadow: " 5px 5px 5px #c2c2c280" }}
    >
      <div className="flex items-center    justify-center">
        <img
          src={props.profile.img}
          alt="Image"
          style={{ boxShadow: " 5px 5px 5px #c2c2c280" }}
          className={`rounded-[7px] border-[4px] max-sm:border-[2.54px] border-[#FFFFFF]   border-red-2 absolute lg:left-[32px] lg:top-[30px] md:left-[34px] md:top-[28.5px] max-sm:top-[15.71px] max-sm:left-[15.5px] ${props.imageStyle}`}
        />
      </div>
      <div className=" ">
        <div className="flex ">
          <div className="flex ">
            <div className="absolute  lg:left-[303px] lg:top-[30px] md:left-[258px] md:top-[16px] max-sm:left-[15.5px] max-sm:top-[138.3px] flex flex-col  lg:w-[332px] lg:h-[139px] md:w-[293.33px] md:h-[128px]  text-[#414141] gap-2 max-md:gap-1 text-[14px]">
              <span className="text-[24px] text-[#292424] font-[400]  max-sm:font-[600] max-sm:text-[16px]">
                {props.profile.name}
              </span>
              <p className="flex  flex-col text-[16px] max-sm:text-[14px]">
                <span>{props.profile.text}</span>
                <span>{props.profile.number}</span>
              </p>
              <p className="lg:text-[20px] md:text-[16px] max-sm:text-[14px]">
                {props.profile.website}
              </p>
            </div>
            <div
              className={` absolute  lg:left-[676px] lg:top-[32px] md:left-[506.07px] max-sm:top-[138.3px] max-sm:left-[209.09px] md:top-[16px]  text-[12px] max-md:p-0   ${props.roleStyle}`}
            >
              {props.profile.role}
            </div>
            <div className="absolute md:bottom-[16px] lg:left-[676px] md:left-[492.33px] max-sm:top-[229px] max-sm:left-[215.26px]  flex  justify-end cursor-pointer ">
              {props.profile.arrowText && (
                <span className="flex  items-center text-[14px]">
                  {props.profile.arrowText}{" "}
                  <MdOutlineKeyboardArrowRight className="text-[20px]" />
                </span>
              )}
            </div>
          </div>
          {/* <div className="">
            {props.profile.symbol_img ? (
              <img src={props.profile.symbol_img} className="" alt="img" />
            ) : (
              <></>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}
export function Card5(props) {
  return (
    <div
      className={`${props.style} relative flex items-center justify-center  shadow-md shadow-[#ebf0f4b3]  lg:w-[762px] md:w-[466px] max-sm:w-[276px] max-sm:h-[259px] lg:h-[200px] md:h-[170px] bg-gradient-to-r bg-[#ebf0f499] border-[2px] border-white rounded-lg`}
      style={{ boxShadow: " 5px 5px 5px #c2c2c280" }}
    >
      <div className="">
        <div className="flex items-center    justify-center">
          <img
            src={props.profile.img}
            alt="Image"
            style={{
              boxShadow: " 5px 5px 10px #c2c2c280",
              // borderImage: "linear-gradient(to right, #E3E8EC, #FFFFFF) 10",
              // borderRadius: "8px",
            }}
            className={`rounded-[8px] border-[4px] max-sm:border-[2.54px] border-[#FFFFFF] absolute lg:left-[32px] md:left-[24px] max-sm:left-[15.5px] lg:top-[30px]  md:top-[20px] max-sm:top-[15.71px] ${props.imageStyle}`}
          />
        </div>
        <div className=" ">
          <div className="flex">
            <div className="flex ">
              <div className="absolute  lg:left-[200px]  lg:top-[30px] md:left-[151px] md:top-[20px] max-sm:left-[15.5px] max-sm:top-[138.3px] flex flex-col  lg:w-[332px] lg:h-[139px] md:w-[293.33px] md:h-[128px]  text-[#414141] gap-[16px] max-md:gap-1 text-[14px]">
                <span className="text-[24px] text-[#1E2125] font-[400]  max-sm:font-[600] max-sm:text-[16px]">
                  {props.profile.name}
                </span>
                <p className="flex  flex-col text-[16px] max-sm:text-[14px] gap-[4px]">
                  <span>{props.profile.text}</span>
                  <span>{props.profile.number}</span>
                  <p className="lg:text-[20px] md:text-[14px] max-sm:text-[14px]">
                    {props.profile.website}
                  </p>
                </p>
              </div>
              <div
                className={` absolute text-[#CC6F6F]  lg:left-[676px] lg:top-[32px] md:left-[399.07px] max-sm:top-[138.3px] max-sm:left-[209.09px] md:top-[20px]  text-[14px] max-md:p-0   ${props.roleStyle}`}
              >
                {props.profile.role}
              </div>
              <div className="absolute md:bottom-[16px] lg:left-[676px] md:left-[385.33px] md:top-[126px]  max-sm:top-[229px] max-sm:left-[215.26px]  flex  justify-end cursor-pointer ">
                {props.profile.arrowText && (
                  <span className="flex  items-center text-[14px]">
                    {props.profile.arrowText}{" "}
                    <MdOutlineKeyboardArrowRight className="text-[20px]" />
                  </span>
                )}
              </div>
            </div>
            {/* <div className="">
            {props.profile.symbol_img ? (
              <img src={props.profile.symbol_img} className="" alt="img" />
            ) : (
              <></>
            )}
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Card3(props) {
  return (
    <div className=" relative lg:w-[329px] md:w-[210px] lg:h-[560px] md:h-[357px]">
      <div className="absolute w-full ">{props.children}</div>
      <div
        className=""
        style={{
          boxShadow: "5px 5px 10px #c2c2c280",
          // borderImage: "linear-gradient(to right, #E3E8EC, #FFFFFF) 30",
          // borderImageWidth: "4px",
        }}
      >
        <img
          src={props.info.bgImg}
          className="lg:w-[329px] md:w-[210px] lg:h-[560px] md:h-[357px]    border-[4px] border-[#FFFFFF] rounded-[8px] "
          alt="img"
          // style={{
          //   borderImage: "linear-gradient(to right, #E3E8EC, #FFFFFF) 30",
          //   borderImageWidth: "4px",
          // }}
        />
      </div>
    </div>
  );
}

export function Card4(props) {
  return (
    <div className="flex flex-col items-center gap-[16px] lg:w-[340px] lg:h-[288px] w-[292px] h-[288px]  justify-center  border-[2px] shadow-lg border-[#FFFFFF] bg-gradient-to-r from-[#ffffff] to-[#ffffff4d] rounded-[16px]">
      <div className="flex lg:w-[250px]  lg:h-[191px] w-[207px] h-[207px] flex-col gap-[16px]">
        <img className="w-[64px]  h-[64px]" src={props.item.icon} alt="" />
        <div className="flex flex-col gap-[8px]">
          <span className="font-[400] text-[#22281C] text-[20px]">
            {props.item.heading}
          </span>
          <span
            className="flex flex-col h-[80px] gap-[8px] text-[14px] font-[400] text-[#414141]"
            style={{ lineHeight: "16.41px" }}
          >
            <span>{props.item.line1}</span>
            <span>{props.item.line2}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
