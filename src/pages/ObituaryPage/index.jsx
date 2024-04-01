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
    <div className="w-full flex flex-col items-center ">
      <header className="w-full">
        {/* NAVBAR */}
        <div className="w-full">{width < 800 ? <Navbar /> : <Navbar2 />}</div>
        {/* HEADER BACKGROUND IMAGE */}
        <div className="w-full">
          <HeaderTop btnText={"Osmrtnice"} topBanner={topBanner} />
        </div>
      </header>

      <main className="w-full">
        {/* Section 1 */}
        <div className="bg-[#F3F6F8] flex justify-center">
          <div className="w-5/6 py-16 ">
            <div className="">
              {/* Search */}
              <div className="w-full flex justify-end">
                <div className="flex gap-3 lg:w-fit max-lg:w-full w-full max-sm:w-full flex-wrap max-lg:justify-center ">
                  <Input
                    className="border-2 border-gray-400 w-52 max-lg:w-72"
                    placeholder="Išči po imenu / priimku"
                  />

                  <Select
                    size="sm"
                    label="Išči po krajih"
                    className="w-52 h-fit  border-2 max-lg:w-72 border-gray-400 rounded-md "
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
                    className="w-52 h-fit  border-2 max-lg:w-72 border-gray-400 rounded-md "
                    style={{ backgroundColor: "white" }}
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <button className="h-12 max-lg:w-72 w-12 border-1 flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-white shadow-sm">
                    <CiSearch />
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <h2 className="text-[28px]">Hitri izbor</h2>
                <div className="flex flex-col gap-3 pl-10 max-md:pl-0">
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
          <div className="lg:absolute left-20">
            <img
              src={tye}
              alt=""
              className="max-md:absolute max-md:top-14 max-md:h-24 max-md:left-16"
            />
          </div>
          <div className="flex flex-col items-center gap-10">
            <p className="text-[32px]  max-md:text-end s">
              Pogrebi <span className="max-md:hidden">v naslednjih dneh</span>
            </p>
            <div>
              <div className="flex flex-wrap gap-2  items-center justify-center  w-full  max-lg:w-72 max-sm:w-full">
                <Select
                  size="sm"
                  label="Išči po imenu / priimku"
                  className="w-72  h-fit   border-gray-400 rounded-md "
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
                  className="w-72 h-fit  border-2 border-gray-400 rounded-md "
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

        <div
          className=" relative bg-cover bg-center"
          style={{ backgroundImage: `url(${bgCover})` }}
        >
          <div className=" top-5 flex flex-col items-center w-full  py-14  gap-20">
            <div className=" w-4/6 flex flex-col gap-3 items-center p-20  max-md:p-3 max-lg:p-10 bg-gradient-to-r from-[#ffffff] to-[#ffffff80] rounded-md border-2 border-white">
              <h3 className="text-[32px] max-md:text-center max-md:text-[20px]">
                Odpri Spominsko stran
              </h3>
              <p className="text-[14px] text-center w-4/5 text-[#3C3E41] font-medium">
                Spomini niso večni. Prehitro nam uidejo, čarobni trenutki se
                pozabijo, slike zbledijo. Povežite spomine na najdražje v celoto
                in jih ohranite.{" "}
              </p>
              <span className="flex justify-center gap-2 py-4 max-md:flex-wrap">
                <Input
                  className="border-1 border-gray-400 max-lg:w-52 w-80"
                  placeholder="Ime pokojnika/ce"
                />
                <Input
                  className="border-1 border-gray-400 max-lg:w-52 w-80 p-3 "
                  placeholder="Priimek pokojnika/ce"
                />
              </span>
              <Button
                padding={"p-2"}
                px={"px-4"}
                bg1={"[#E3E8EC]"}
                bg2={"[#FFFFFF] border-none max-md:w-full "}
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

        <div className="bg-[#e3e8eca6]  border">
          <Sponcers />
        </div>

        {/* Section 5 */}

        <div className="flex max-lg:flex-wrap max-lg:items-center ">
          <img src={flowerImg} alt="" className="max-lg:w-full" />
          <div className="flex flex-col justify-center items-center gap-5 lg:w-full max-sm:right-3  max-lg:absolute   md:w-3/6 md:p-8 md:right-10 md:bg-gradient-to-r lg:bg-none md:from-[#ffffff] md:to-[#ffffff80] lg:rounded-none md:rounded-2xl  lg:bg-[#FFE5B4] ">
            <h2 className="text-[32px] text-[#414141] max-sm:text-[24px]">
              Lokalne cvetličarne
            </h2>
            <Select
              size="sm"
              label="Izberi kraj"
              className="lg:w-4/6 h-fit rounded-md md:w-full"
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
