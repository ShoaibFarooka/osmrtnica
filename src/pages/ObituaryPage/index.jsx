import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import topBanner from "../../assets/images/topBanner.png";
import bgCover from "../../assets/images/bgCover.jpg";
import tye from "../../assets/images/TyeLogo1.png";
import profileImg from "../../assets/images/person.jpeg";
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
          <HeaderTop
            btnText={"Osmrtnice"}
            btnStyle={"w-[213px] h-[79px]"}
            topBanner={topBanner}
          />
        </div>
      </header>

      <main className="w-full">
        {/* Section 1 */}
        <div className="bg-[#F5F7F9] flex justify-center">
          <div className="flex flex-col gap-[23.93px] items-center w-[1080px] py-16 ">
            {/* Search */}
            <div className="w-[956px]  flex justify-end">
              <div className="flex justify-between w-[777px] h-[48px] max-lg:w-full  max-sm:w-full flex-wrap max-lg:justify-center ">
                <Input
                  className="border-[1px] border-[#7C7C7C] w-[227px] placeholder:text-[#7C7C7C] h-[48px] placeholder:text-[16px]"
                  placeholder="Išči po imenu / priimku"
                />

                <select
                  id="animalSelect"
                  className="border-[1px] border-[#7C7C7C] w-[227px] h-[48px] text-[#7C7C7C] rounded-md p-2"
                  style={{ backgroundColor: "white" }}
                  // value={selectedAnimal}
                  // onChange={handleAnimalChange}
                >
                  <option value={""} disabled selected>
                    Išči po kraju
                  </option>
                  {animals.map((animal) => (
                    <option key={animal.value} value={animal.value}>
                      {animal.label}
                    </option>
                  ))}
                </select>
                <select
                  id="animalSelect"
                  className="border-[1px] border-[#7C7C7C] w-[227px] h-[48px] text-[#7C7C7C] rounded-md p-2"
                  style={{ backgroundColor: "white" }}
                  // value={selectedAnimal}
                  // onChange={handleAnimalChange}
                >
                  <option value={""} disabled selected>
                    Išči po regiji
                  </option>
                  {animals.map((animal) => (
                    <option key={animal.value} value={animal.value}>
                      {animal.label}
                    </option>
                  ))}
                </select>
                <button className="h-12 max-lg:w-72 w-12 border-1 flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-white shadow-sm">
                  <CiSearch />
                </button>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center gap-[18px]">
              <h2 className="w-[1080px] text-[24px] leading-[28.13px]">
                Hitri izbor
              </h2>
              <div className="flex w-[956px] flex-col  pl-10 items-end max-md:pl-0  ">
                <div className="flex gap-[19px]  flex-wrap lg:w-[956px]">
                  <Button2 styles={"h-[24px] w-[78px]"}>Ljubljana</Button2>
                  <Button2 styles={"h-[24px] w-[68px]"}>Maribor</Button2>
                  <Button2 styles={"h-[24px] w-[49px]"}>Celje</Button2>
                  <Button2 styles={"h-[24px] w-[51px]"}>Kranj</Button2>
                  <Button2 styles={"h-[24px] w-[55px]"}>Koper</Button2>
                  <Button2 styles={"h-[24px] w-[95px]"}>Novo Mesto</Button2>
                  <Button2 styles={"h-[24px] w-[73px]"}>Domžale</Button2>
                  <Button2 styles={"h-[24px] w-[64px]"}>Velenje</Button2>
                  <Button2 styles={"h-[24px] w-[96px]"}>Nova Gorica</Button2>
                  <Button2 styles={"h-[24px] w-[70px]"}>Koroška</Button2>
                  <Button2 styles={"h-[24px] w-[67px]"}>Zasavje</Button2>
                </div>
              </div>
            </div>
            {/* Cards */}
            <div className="flex flex-col w-full items-center  py-10 gap-[48px]">
              <div className="w-full flex flex-col items-center gap-5">
                <h2 className="text-[24px]  w-full">Zasavska regija</h2>
                <div className=" flex flex-wrap w-[956px] gap-[24px] max-sm:w-full max-md:w-full   justify-center ">
                  {profiles.map((data) => (
                    <Card profile={data} />
                  ))}
                </div>
              </div>
              <div>
                <Pagination defaultCurrent={1} total={50} className="" />
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 */}

        <div className="bg-[#B2BDC7] w-screen flex justify-center  border-y-[2px] border-[#939393]">
          <div className="relative  flex w-[1280px] h-[308px] items-center justify-center gap-10">
            <div className="absolute left-[215.83px] top-[71.68px]">
              <img src={tye} alt="" className="h-[168.37px] w-[94.79px]" />
            </div>
            <div className="absolute flex flex-col left-[408px] top-[68px] gap-[48px] lg:w-[680px] items-center">
              <p className="text-[40px]  max-md:text-end">
                Pogrebi <span className="max-md:hidden">v naslednjih dneh</span>
              </p>
              <div>
                <div className="flex flex-wrap gap-[16px]  items-center justify-center ">
                  <Select
                    size="sm"
                    label="Išči po imenu / priimku"
                    className="w-[300px]  border-[1px] border-[#7C7C7C] rounded-[8px] "
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
                    className="w-[300px]  border-[1px] border-[#7C7C7C] rounded-[8px] "
                    style={{ backgroundColor: "white" }}
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <button className="h-[48px] w-[48px] border-1 flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-white shadow-sm">
                    <CiSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 3 */}

        <div
          className=" relative bg-cover bg-center flex justify-center h-[919px]"
          style={{ backgroundImage: `url(${bgCover})` }}
        >
          <div className=" relative flex flex-col items-center w-[1280px]  py-14  gap-20">
            <div className=" w-[900px] h-[426px] flex  items-center justify-center   max-md:p-3 max-lg:p-10 bg-gradient-to-r from-[#ffffff] to-[#ffffff80] rounded-md border-2 border-white">
              <div className="w-[750px] h-[303px] flex flex-col gap-[48px] items-center justify-center text-center">
                <div className="w-[629.27px] h-[111px] flex flex-col gap-[16px]">
                  <h3 className="text-[40px] max-md:text-center max-md:text-[20px]">
                    Odpri Spominsko stran
                  </h3>
                  <p className="text-[16px] text-center  text-[#3C3E41] font-medium">
                    Spomini niso večni. Prehitro nam uidejo, čarobni trenutki se
                    pozabijo, slike zbledijo. Povežite spomine na najdražje v
                    celoto in jih ohranite.{" "}
                  </p>
                </div>
                <span className="flex justify-center gap-[16px] py-4 max-md:flex-wrap">
                  <Input
                    className="border-[1px] border-[#7C7C7C] w-[367px] placeholder:text-[#7C7C7C] placeholder:text-[16px] pl-[23px] h-[48px] rounded-[8px]"
                    placeholder="Ime pokojnika/ce"
                  />
                  <Input
                    className="border-[1px] border-[#7C7C7C] w-[367px] placeholder:text-[#7C7C7C] placeholder:text-[16px] h-[48px] rounded-[8px]"
                    placeholder="Priimek pokojnika/ce"
                  />
                </span>
                <Button
                  style={
                    "to-[#FFFFFF] from-[#E3E8EC] w-[97px] py-[12px] border-none "
                  }
                >
                  Naprej
                </Button>
              </div>
            </div>

            <div className=" flex flex-col items-center">
              <h2 className="absolute top-[576.15px] left-[506.5px] font-[600] text-[24px]">
                Zadnje Spominske strani{" "}
              </h2>
              <div className="absolute top-[633px] gap-[32px] left-[380px] flex">
                <span className="w-[152px] flex flex-col items-center gap-[16px] h-[226.11px]">
                  <img
                    src={profileImg}
                    className="w-[136px] h-[186.11px] border-[4px] border-white rounded-[8px]"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                    alt=""
                  />
                  <p className="text-center text-[14px]">Mario Danilo Primo</p>
                </span>
                <span className="w-[152px] flex flex-col items-center gap-[16px] h-[226.11px]">
                  <img
                    src={profileImg}
                    className="w-[136px] h-[186.11px] border-[4px] border-white rounded-[8px]"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                    alt=""
                  />
                  <p className="text-center text-[14px]">Mario Primo</p>
                </span>
                <span className="w-[152px] flex flex-col items-center gap-[16px] h-[226.11px]">
                  <img
                    src={profileImg}
                    className="w-[136px] h-[186.11px] border-[4px] border-white rounded-[8px]"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                    alt=""
                  />
                  <p className="text-center text-[14px]">Danilo Primo</p>
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
          <img src={flowerImg} alt="" className="w-3/6" />
          <div className="flex flex-col justify-center items-center gap-[29px] w-3/6 max-sm:right-3 bg-[#FFE5B4]    md:right-10 md:bg-gradient-to-r lg:bg-none md:from-[#ffffff] md:to-[#ffffff80] lg:rounded-none md:rounded-2xl   ">
            <h2 className="text-[40px] text-[#414141] max-sm:text-[24px]">
              Lokalne cvetličarne
            </h2>
            <Select
              size="sm"
              label="Izberi kraj"
              className="w-[476px] h-fit rounded-md "
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
