import React, { useState } from "react";
import { RxCrossCircled, RxHamburgerMenu } from "react-icons/rx";
import MegaMenu from "../MegaMenu/MegaMenu";
import { MdPerson } from "react-icons/md";
import logo from "../../assets/images/logo2.png";
import { Button } from "@nextui-org/react";

export default function Navbar2() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full flex justify-between p-4 shadow-sm">
      <div className="flex items-center">
        <img src={logo} className="w-56 max-sm:w-40" />
      </div>
      <div className="flex gap-5">
        <div className="flex gap-8 px-5 ">
          <button>Osmrtnice</button>
          <button>Pogrebi</button>
          <button>Spominske</button>
          <button>Cvetličarne</button>
        </div>
        <div className="flex items-center ">
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
        </div>
      </div>
    </div>
  );
}
