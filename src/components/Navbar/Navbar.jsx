import React, { useState } from "react";

import { MdPerson } from "react-icons/md";
import logo from "../../assets/images/logo.png";
import hampIcon from "../../assets/images/HampIcon.png";
import personIcon from "../../assets/images/personIcon.png";
import { Button } from "@nextui-org/react";
import { RxCrossCircled, RxHamburgerMenu } from "react-icons/rx";
import MegaMenu from "../MegaMenu/MegaMenu";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" flex justify-between items-center lg:w-[1280px] md:w-[744px] max-sm:w-[360px] lg:h-[92.02px] md:h-[79px] max-sm:h-[72px] p-4 ">
      <div className="flex items-center">
        {/* <MdPerson className="text-[28px] max-sm:text-[20px]" /> */}
        <img
          src={personIcon}
          alt=""
          className="w-[32px] h-[32px] md:h-[34px] md:w-[34px] "
        />
      </div>
      <div className="flex items-center">
        <img
          src={logo}
          className="lg:w-[357.29px] lg:h-[44px] md:w-[357.29px] md:h-[37.78px] max-sm:w-[180px] max-sm:h-[22.16px]"
        />
      </div>
      <div className="flex items-center  ">
        <Button
          variant="bordered"
          className="border-white "
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <RxCrossCircled className="w-[32px] h-[32px] max-sm:w-[24px] max-sm:h-[20px]" />
          ) : (
            <img
              src={hampIcon}
              alt=""
              className="w-[32px] h-[32px] max-sm:w-[24px] max-sm:h-[20px]"
            />
          )}
        </Button>
        {menu && <MegaMenu />}
        {/* <Dropdown>
          <DropdownTrigger></DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">
              {" "}
              <MegaMenu />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </div>
    </div>
  );
}
