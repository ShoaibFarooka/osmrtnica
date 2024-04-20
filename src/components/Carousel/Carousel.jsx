import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.children.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={` relative max-sm:px-0 md:px-0 flex justify-center lg:gap-6 lg:border-t-1 lg:w-[718px] md:w-[612px] border-gray-300 ${props.style}`}
    >
      <div className="">
        {props.children.map((item, index) => (
          <div
            key={index}
            className={`
             transition-opacity duration-500 ${props.cardStyle} 
          ${index === currentIndex ? "" : "hidden"}
        `}
          >
            {item}
          </div>
        ))}
      </div>
      <div className=" lg:absolute right-8 flex items-center  justify-between ">
        <p className="lg:hidden pl-6  w-fit text-[12px]">
          © osmrtnica.com, 2024. Vse pravice pridržane.
        </p>

        <div
          className={` right-4  flex space-y-2 lg:pt-1  ${props.circleStyle}`}
        >
          {props.children.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer bg-gradient-to-l  ${
                index !== currentIndex
                  ? "to-[#C3C6C8] from-[#E3E5E5]"
                  : "to-[#E3E8EC] from-[#FFFFFF]"
              }`}
              style={{
                boxShadow: "5px 5px 10px #c2c2c280 ,-3px -3px 10px  #FFFFFF",
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Carousel2 = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.children.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className={` overflow-hidden  w-[360px]  relative flex justify-center   ${props.style}`}
    >
      <div className=" relative w-[291.7px] h-[496.5px] mb-[50px]">
        <div
          className="flex gap-[24px]"
          style={{
            transform: `translateX(-${currentIndex * (255.15 + 24)}px)`,
            transition: "transform 0.5s ease",
          }}
        >
          {props.children.map((item, index) => (
            <div
              key={index}
              className={`
             transition-opacity duration-500  w-[291.7px] ${
               props.childrenStyle
             } 
          ${index === currentIndex ? "" : ""}
        `}
            >
              {item}
            </div>
          ))}
        </div>
        <div className=" absolute top-[455.5px] justify-between   flex items-end   w-[291.7px]">
          <div>
            <p className="text-[20px]" style={{ lineHeight: "23.44px" }}>
              Podprimo lokalno!
            </p>
          </div>
          <div className={` right-4   flex  gap-[12px] ${props.circleStyle}`}>
            <button
              onClick={prevSlide}
              style={{
                boxShadow: "1px 3px 4px #00000040 ,-3px -1px 10px  #FFFFFF",
              }}
              className=" flex justify-center items-center  h-[36px] w-[36px] rounded-[8px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF]"
            >
              <IoIosArrowBack />
            </button>
            <button
              onClick={nextSlide}
              style={{
                boxShadow: "1px 3px 4px #00000040 ,-3px -1px 10px  #FFFFFF",
              }}
              className=" flex justify-center items-center  h-[36px] w-[36px] rounded-[8px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF]"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
