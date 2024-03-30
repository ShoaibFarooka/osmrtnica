import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import topBanner from "../../assets/images/topBanner.png";
import bgCover from "../../assets/images/bgCover.jpg";
import tye from "../../assets/images/tye.png";
import profileImg from "../../assets/images/Candle (5).png";
import flowerImg from "../../assets/images/Obituary.png";

import HeaderTop from "../../components/HeaderTop/HeaderTop";
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "../FloristsPage/data";
import { CiSearch } from "react-icons/ci";
import { Input, Pagination } from "antd";
import { Button, Button2 } from "../../components/Button/Buttons";
import { Card } from "../../components/Card/Card";
import { profiles } from "../HomePage/data";
import Sponcers from "../../components/Sponcers/Sponcers";
import Footer from "../../components/Footer/Footer";

export default function Obituary() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <div className="w-full flex flex-col items-center">
      <header className="w-full">
        {/* NAVBAR */}
        <div className="w-full">{width < 800 ? <Navbar /> : <Navbar2 />}</div>
        {/* HEADER BACKGROUND IMAGE */}
        <div className="w-full">
          <HeaderTop btnText={"Osmrtnice"} topBanner={topBanner} />
        </div>
      </header>

      <main className="">
        {/* Section 1 */}
        <div className="bg-[#F3F6F8] flex justify-center">
          <div className="w-5/6 py-16 ">
            <div className="">
              <div className="w-full flex justify-end">
                <div className="flex gap-2 lg:w-fit md:w-full w-full max-sm:w-full">
                  <Input
                    className="border-2 border-gray-400 w-52"
                    placeholder="Išči po imenu / priimku"
                  />

                  <Select
                    size="sm"
                    label="Išči po krajih"
                    className="lg:w-52 h-fit  border-2 border-gray-400 rounded-md md:w-full"
                    style={{ backgroundColor: "white" }}
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    size="sm"
                    label="Išči po regiji"
                    className="lg:w-52 h-fit  border-2 border-gray-400 rounded-md md:w-full"
                    style={{ backgroundColor: "white" }}
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <button className="h-12 w-12 border-1 flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-white shadow-sm">
                    <CiSearch />
                  </button>
                </div>
              </div>
              <div>
                <h2 className="text-[28px]">Hitri izbor</h2>
                <div className="flex flex-col gap-3 pl-10">
                  <div className="flex gap-3 flex-wrap ">
                    <Button2>Ljubljana</Button2>
                    <Button2>Maribor</Button2>
                    <Button2>Celje</Button2>
                    <Button2>Kranj</Button2>
                    <Button2>Koper</Button2>
                    <Button2>Novo Mesto</Button2>
                    <Button2>Domžale</Button2>
                    <Button2>Velenje</Button2>
                    <Button2>Nova Gorica</Button2>
                    <Button2>Koroška</Button2>
                    <Button2>Zasavje</Button2>
                  </div>
                </div>
              </div>
              {/* Cards */}
              <div className="flex flex-col w-full items-center  py-10 gap-5">
                <h2 className="text-[24px] w-full">Zasavska regija</h2>
                <div className=" flex flex-wrap  w-5/6 max-sm:w-full max-md:w-full   justify-center ">
                  {profiles.map((data) => (
                    <Card profile={data} />
                  ))}
                </div>
                <div>
                  <Pagination defaultCurrent={1} total={50} className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}

        <div className="bg-[#B2BDC7] relative flex p-20 items-center justify-center gap-10">
          <div className="absolute left-20">
            <img src={tye} alt="" />
          </div>
          <div className="flex flex-col items-center gap-10">
            <p className="text-[32px]">Pogrebi v naslednjih dneh</p>
            <div>
              <div className="flex gap-2 lg:w-fit md:w-full w-full max-sm:w-full">
                <Select
                  size="sm"
                  label="Išči po imenu / priimku"
                  className="lg:w-72 h-fit  border-2 border-gray-400 rounded-md md:w-full"
                  style={{ backgroundColor: "white" }}
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  size="sm"
                  label="Išči po krajih"
                  className="lg:w-72 h-fit  border-2 border-gray-400 rounded-md md:w-full"
                  style={{ backgroundColor: "white" }}
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
                <button className="h-12 w-12 border-1 flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-white shadow-sm">
                  <CiSearch />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}

        <div className=" relative ">
          <div>
            <img src={bgCover} className=" -z-10" alt="bg-image" />
          </div>
          <div className="absolute top-5 flex flex-col items-center w-full   py-14 gap-20">
            <div className=" w-4/6 flex flex-col gap-3 items-center p-20 bg-gradient-to-r from-[#ffffff] to-[#ffffff80] rounded-md border-2 border-white">
              <h3 className="text-[32px]">Odpri Spominsko stran</h3>
              <p className="text-[14px] text-center w-4/5 text-[#3C3E41] font-medium">
                Spomini niso večni. Prehitro nam uidejo, čarobni trenutki se
                pozabijo, slike zbledijo. Povežite spomine na najdražje v celoto
                in jih ohranite.{" "}
              </p>
              <span className="flex justify-center gap-2 py-4 ">
                <Input
                  className="border-1 border-gray-400 w-80"
                  placeholder="Ime pokojnika/ce"
                />
                <Input
                  className="border-1 border-gray-400 w-80 p-3 "
                  placeholder="Priimek pokojnika/ce"
                />
              </span>
              <Button
                padding={"p-2"}
                px={"px-4"}
                bg1={"[#E3E8EC]"}
                bg2={"[#FFFFFF] border-none  "}
              >
                Naprej
              </Button>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-[22px]">
                Zadnje Spominske strani{" "}
              </h2>
              <div className="flex">
                <span>
                  <img src={profileImg} className="w-[170px]" alt="" />
                  <p className="text-center">Mario Danilo Primo</p>
                </span>
                <span>
                  <img src={profileImg} className="w-[170px]" alt="" />
                  <p className="text-center">Mario Primo</p>
                </span>
                <span>
                  <img src={profileImg} className="w-[170px]" alt="" />
                  <p className="text-center">Danilo Primo</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 Sponcers */}

        <div className="bg-[#e3e8eca6] border">
          <Sponcers />
        </div>

        {/* Section 5 */}

        <div className="flex">
          <img src={flowerImg} alt="" />
          <div className="w-full bg-[#FFE5B4] flex flex-col justify-center items-center gap-5">
            <h2 className="text-[32px] text-[#414141]">Lokalne cvetličarne</h2>
            <Select
              size="sm"
              label="Izberi kraj"
              className="lg:w-4/6 h-fit  border rounded-md md:w-full"
              style={{ backgroundColor: "white" }}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        {/* Section 6 Footer */}

        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
