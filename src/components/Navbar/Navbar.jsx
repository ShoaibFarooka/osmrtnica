import React from "react";

import { MdPerson } from "react-icons/md";
import logo from "../../assets/images/logo.png";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
  return (
    <div className="w-full flex justify-between p-4">
      <div className="flex items-center">
        <MdPerson className="text-[28px]" />
      </div>
      <div className="flex items-center">
        <img src={logo} className="w-72" />
      </div>
      <div className="flex items-center  ">
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="border-white">
              <RxHamburgerMenu className="text-[24px]" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Delete file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
