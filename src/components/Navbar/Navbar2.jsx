import React, { useState } from "react";
import { RxCrossCircled, RxHamburgerMenu } from "react-icons/rx";
import MegaMenu from "../MegaMenu/MegaMenu";
import { MdPerson } from "react-icons/md";
import logo from "../../assets/images/logo2.png";
import { Button } from "@nextui-org/react";
import hampIcon from "../../assets/images/HampIcon.png";

export default function Navbar2() {
  const [menu, setMenu] = useState(false);

  return (
    <div
      // style={{ boxShadow: " 0px 4px 4px #00000024" }}
      className=" w-screen justify-center flex lg:h-[92.02px] md:h-[80px]"
    >
      <div className="flex justify-between p-4 shadow-sm md:w-[744px] lg:w-[1280px] z-10">
        <div className="flex items-center">
          <img src={logo} className="md:w-[182.76px] lg:w-[265.83px]" />
        </div>
        <div className="flex lg:gap-5 items-center">
          <div className="flex lg:text-[20px] md:text-[18px] text-[#1E2125] gap-[16px] px-5 items-center ">
            <button>Osmrtnice</button>
            <button>Pogrebi</button>
            <button>Spominske</button>
            <button>Cvetličarne</button>
          </div>
          <div className="flex items-center ">
            <button
              variant="bordered"
              className="border-white text-[#333333] font-[700]"
              onClick={() => setMenu(!menu)}
            >
              {menu ? (
                <RxCrossCircled className="w-[32px] h-[26.67px]" />
              ) : (
                <img
                  src={hampIcon}
                  alt=""
                  className="w-[32px] h-[32px] max-sm:w-[24px] max-sm:h-[20px]"
                />
              )}
            </button>
            {menu && <MegaMenu />}
          </div>
        </div>
      </div>
    </div>
  );
}
