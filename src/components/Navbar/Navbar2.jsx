import React, { useState } from "react";
import { RxCrossCircled, RxHamburgerMenu } from "react-icons/rx";
import MegaMenu from "../MegaMenu/MegaMenu";
import { MdPerson } from "react-icons/md";
import logo from "../../assets/images/logo.png";
import { Button } from "@nextui-org/react";

export default function Navbar2() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full flex justify-between p-4 ">
      <div className="flex items-center">
        <MdPerson className="text-[28px] max-sm:text-[20px]" />
      </div>
      <div className="flex items-center">
        <img src={logo} className="w-72 max-sm:w-40" />
      </div>
      <div className="flex items-center  ">
        <Button
          variant="bordered"
          className="border-white"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <RxCrossCircled className="text-[24px]" />
          ) : (
            <RxHamburgerMenu className="text-[24px]" />
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
