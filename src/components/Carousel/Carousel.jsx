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
      className={`${props.style} bottom-2 max-sm:px-0 md:px-0 lg:px-5 flex gap-6 border-t-1 w-full  pl-10 border-gray-300 `}
    >
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
      <div
        className={` top-1/2 right-4  flex space-y-2 p-1 ${props.circleStyle}`}
      >
        {props.children.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer  ${
              index === currentIndex ? "bg-gray-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
