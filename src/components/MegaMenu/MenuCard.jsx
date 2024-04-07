import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function MenuCard() {
  return <div>MenuCard</div>;
}

export function SubCard(props) {
  console.log(props);
  return (
    <div className="flex gap-3 w-72 ">
      <div className="  ">
        <img src={props.icon} alt="img" className="" />
      </div>
      <div className="flex flex-col gap-2 w-60">
        <h3 className="font-[500] text-[14px]">{props.data.title}</h3>
        {props.data.text.length > 0 &&
          props.data.text.map((text) => (
            <p className="text-gray-600 text-[12px]">{text}</p>
          ))}

        {props.data.linkText.length > 0 &&
          props.data.linkText.map((text) => (
            <a
              href="#"
              className={`${props.color} flex gap-2 items-center text-[14px]`}
            >
              {text} <IoIosArrowForward />
            </a>
          ))}
      </div>
    </div>
  );
}
