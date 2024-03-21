import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import bg_image from "../../assets/images/Union.png";
import { Input, Select } from "antd";
import { option, profiles } from "./data";
import { CiSearch } from "react-icons/ci";
import Card from "../../components/Card/Card";
import { AiFillMobile } from "react-icons/ai";
import iPadImg from "../../assets/images/Vector (3).png";
import mobileImg from "../../assets/images/Vector (4).png";
import mobileScreen from "../../assets/images/Vector (2).png";
import frameImg from "../../assets/images/Frame 194.png";

export default function HomePage() {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <div className="m-0 p-0 ">
      {/* Navbar */}
      <div className="shadow-md">
        <Navbar />
      </div>

      {/* Body of the page */}
      <div className="">
        {/* Body Top Section 1*/}
        <div className="bg-gradient-to-r from-p_bg1 to-p_bg2">
          <div className="flex justify-center md:h-screen sm:h-screen">
            <img src={bg_image} alt="" className="w-full opacity-100" />
            <div className="absolute bottom-1  w-4/6 flex flex-wrap justify-around ">
              <div className=" flex flex-col  text-white">
                <span className=" top-0 text-gray-400 font-thin px-2 pb-6 text-[46px]">
                  01
                </span>
                <span className="absolute bottom-0 pt-5 border-l-1 px-2 text-[24px]">
                  OSMRTNICE
                </span>
              </div>
              <div className=" flex flex-col  text-white">
                <span className=" top-0 text-gray-400 font-thin px-2 pb-6 text-[46px]">
                  02
                </span>
                <span className="absolute bottom-0 pt-5 border-l-1 px-2 text-[24px]">
                  POGREBI
                </span>
              </div>
              <div className=" flex flex-col  text-white">
                <span className=" top-0 text-gray-400 font-thin px-2 pb-6 text-[46px]">
                  03
                </span>
                <span className="absolute bottom-0 pt-5 border-l-1 px-2 text-[24px]">
                  SPOMINSKA
                </span>
              </div>
              <div className=" flex flex-col  text-white">
                <span className=" top-0 text-gray-400 font-thin px-2 pb-6 text-[46px]">
                  04
                </span>
                <span className="absolute bottom-0 pt-5 border-l-1 px-2 text-[24px]">
                  CVETLIČARNE
                </span>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-center pb-20">
            <div className="flex justify-center pt-10 text-[40px]">
              Zadnje osmrtnice
            </div>
            {/* Search Boxes Display */}
            <div className="flex justify-center gap-3 my-10 flex-wrap">
              <Input
                placeholder="Išči po imenu / priimku"
                className="w-56 p-3 border-1 shadow-sm"
              />
              <Select
                showSearch
                placeholder="Išči po kraju"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                className="h-12 w-48 hover:border-gray-400 focus:border-gray-400 shadow-sm"
                options={option}
              />
              <Select
                showSearch
                placeholder="Išči po regiji"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                className="h-12 w-48 hover:border-gray-400 focus:border-gray-400 shadow-sm"
                options={option}
              />
              <button className="h-12 w-12 border-1 flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-white shadow-sm">
                <CiSearch />
              </button>
            </div>
            {/* Cards Display */}
            <div className=" flex flex-wrap w-5/6 justify-center ">
              {profiles.map((data) => (
                <Card profile={data} />
              ))}
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-[#FEFAF2] flex justify-center gap-10 p-10">
          <div className="border-2 p-5 bg-white rounded-2xl ">
            <div className="flex justify-center w-full mb-4 ">
              <div className="w-1 h-1  border-2 rounded-full bg-gray-500"></div>
            </div>
            <img className="h-[550px]" src={iPadImg} alt="" srcset="" />
            <div className="flex justify-center w-full mt-2">
              <div className="w-8 h-8 bg-white border-2 rounded-full "></div>
            </div>
          </div>
          <div className="w-2/6">
            <div>
              <h2 className="font-semibold text-[40px]">Osmrtnica</h2>
              <p className="pt-4=">
                Stran, kjer izvemo vse o pogrebu, se vpišete v Žalno knjigo,
                izrečete sožalja in prižgete virtualno svečko.{" "}
              </p>
              <h3 className="font-semibold text-[26px] pt-4">
                Vse navedeno je BREZPLAČNO.
              </h3>
              {/* <button className="p-2 px-6 rounded-lg bg-gradient-to-r from-p_bg1 to-p_bg2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 border-1">
                Več informacij
              </button> */}
              <div className="pt-10">
                <Button className=""> Več informacij</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className=" py-20 gap-10 flex flex-wrap w-full justify-center  bg-gradient-to-r from-p_bg1 to-p_bg bg-gray-50">
          <div className="w-2/6 my-20">
            <div>
              <h2 className="font-semibold text-[40px]">
                Obveščanje o pogrebu
              </h2>
              <p className="pt-4">
                V težkih trenutkih je včasih lažje poslati ali deliti po
                socialnih omrežjih, kot obveščati vsakega posebej.{" "}
              </p>
              <p className="pt-4">
                Na spominski strani pokojnika/ce si prenesete obvestilo o
                pogrebu, ki ga lahko potem pošiljate naprej sorodnikom in
                znancem. Obvestilo je prilagojeno meram mobilnega telefona.
              </p>
              <h3 className=" text-[20px] pt-4">
                Obvestilo o pogrebu je BREZPLAČNO.{" "}
              </h3>

              <div className="pt-10">
                <Button className=""> Poišči osmrtnico</Button>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full  flex justify-center relative gap-1 left-3  top-5 z-10">
              <div className="border-gray-800 w-1 rounded-full  border-3 "></div>
              <div className="border-gray-800 w-10  rounded-full  border-3 bg-gray-500"></div>
              <div className="border-gray-800 w-1 rounded-full border-3 "></div>
            </div>
            <img className="absolute z-0" src={mobileImg} alt="" />
            <img className="relative left-3 top-3" src={mobileScreen} alt="" />
          </div>
        </div>

        {/* section 4 */}
        <div>
          <img src={frameImg} className="w-full " alt="" />
        </div>
        {/* section 5 */}
        <div></div>
      </div>
    </div>
  );
}

function Button(prop) {
  console.log(prop);
  return (
    <button className="border-white p-2 px-6 shadow-lg rounded-lg bg-gradient-to-r from-p_bg1 to-p_bg2 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 border-2">
      {prop.children}
    </button>
  );
}
