import React from "react";
import Navbar2 from "../../components/Navbar/Navbar2";
import bg_image from "../../assets/images/flowers.jpg";
import { FlowerCard, animals, profiles } from "./data";
import { Select, SelectItem } from "@nextui-org/react";
import { Card2, Card3 } from "../../components/Card/Card";

export default function FloristsListing() {
  return (
    <div>
      {/* HEADER */}
      <header>
        {/* NAVBAR */}
        <div>
          <Navbar2 />
        </div>
        {/* HEADER BACKGROUND IMAGE */}
        <div className="flex items-center justify-center">
          <button className="absolute p-2 rounded-md  px-4 text-[28px] bg-gradient-to-r from-[#FFFFFF] to-[#ffffff4d] border-2 border-white">
            Cvetličarne
          </button>
          <img src={bg_image} alt="" />
        </div>
      </header>

      <body className=" flex flex-col items-center ">
        {/* Section 1 */}
        <div className="w-5/6 flex flex-col my-20 gap-10">
          <div className="flex justify-between items-center">
            <div>
              <Select
                label="Išči po krajih"
                className="w-52 h-fit  border-2 border-gray-400 rounded-md"
                style={{ backgroundColor: "white" }}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[28px]">Hitri izbor</h2>
              <div className="flex gap-2">
                <Button>Ljubljana</Button>
                <Button>Maribor</Button>
                <Button>Celje</Button>
                <Button>Kranj</Button>
                <Button>Koper</Button>
                <Button>Novo Mesto</Button>
                <Button>Domžale</Button>
                <Button>Velenje</Button>
                <Button>Nova Gorica</Button>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-full">
              {profiles.map((profile) => (
                <span>
                  <Card2 profile={profile} />
                </span>
              ))}
            </div>
            <div className=" w-2/5 ">
              <div className="flex text-gray-400 gap-2 justify-center items-center shadow-sm  w-full h-48 border-1 border-gray-300  rounded-lg m-3">
                Kmalu
              </div>
              <div className="flex text-gray-400 gap-2 justify-center items-center shadow-sm  w-full h-96 border-1 border-gray-300  rounded-lg m-3">
                Kmalu
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-[#F2F1EA] w-full flex justify-center py-10">
          <div className="w-5/6 flex flex-col items-center">
            <span className="text-center">
              <p className="text-[28px]">Prednosti lokalnih cvetličarn</p>
              <p className="text-[16px] font-semibold">
                (napram cvetju iz velikih trgovin)
              </p>
            </span>
            <div className="w-full flex justify-around">
              <Card3 info={FlowerCard[0]}>
                <span className="flex flex-col gap-3">
                  <h3 className="font-semibold text-[16px]">
                    Znanja in dolgoletne izkušnje
                  </h3>
                  <p className="text-[12px]  text-gray-700">
                    Pogosto premalo izpostavljena prednost lokalnih
                    cvetličarjev. So eksperti na svojem področju, ki radi delijo
                    svoje znanje in postrežejo nam z najboljšimi nasveti, kar v
                    veliki trgovini ni možno.
                  </p>
                </span>
              </Card3>
              <Card3 info={FlowerCard[1]}>
                <span className="flex items-end h-full">
                  <h1 className="font-semibold text-[16px]">
                    Obstojnost cvetja je praviloma večja
                  </h1>
                </span>
              </Card3>
              <Card3 info={FlowerCard[2]}></Card3>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

const Button = (props) => {
  return (
    <button className="italic bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] border-1 border-gray-300 rounded-sm px-2 text-[12px] font-semibold text-gray-800">
      {props.children}
    </button>
  );
};
