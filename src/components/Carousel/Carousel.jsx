import React, { useState } from "react";

const Carousel = (props) => {
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
      className={`relative max-sm:px-0 md:px-0 flex justify-center  lg:gap-6 lg:border-t-1 lg:w-[718px] md:w-[612px] border-gray-300 ${props.style}`}
    >
      <div className=" ">
        {props.children.map((item, index) => (
          <div
            key={index}
            className={`
           top-0 left-0 w-full h-full transition-opacity duration-500 
          ${index === currentIndex ? "" : "hidden"}
        `}
          >
            {item}
          </div>
        ))}
      </div>
      <div className=" right-0 flex items-center  justify-between">
        <p className="lg:hidden pl-6  w-fit text-[12px]">
          © osmrtnica.com, 2024. Vse pravice pridržane.
        </p>
        <div
          className={` right-4  flex space-y-2 lg:pt-1 ${props.circleStyle}`}
        >
          {props.children.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer   ${
                index === currentIndex ? "bg-gray-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
