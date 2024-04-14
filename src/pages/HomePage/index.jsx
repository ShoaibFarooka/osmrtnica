import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import bg_image from "../../assets/images/Union.png";
import { Carousel, Checkbox, Input, Select } from "antd";
import { option, profiles } from "./data";
import { CiSearch } from "react-icons/ci";
import { AiFillMobile } from "react-icons/ai";
import iPadImg from "../../assets/images/Vector (3).png";
import iPadImg2 from "../../assets/images/Frame2.png";
import mobileImg from "../../assets/images/Vector (4).png";
import mobileScreen from "../../assets/images/Vector (2).png";
import frameImg from "../../assets/images/mainPageBanner.png";
import groupLogo from "../../assets/images/GroupLogo.png";
import { HiPhone } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
import { Button, SimpButton } from "../../components/Button/Buttons";
import Footer from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";

export default function HomePage() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <div className="m-0 p-0 text-[#414141] ">
      {/* Navbar */}
      <div className="shadow-md flex justify-center w-full">
        <Navbar />
      </div>

      {/* Body of the page */}
      <div className="">
        {/* Body Top Section 1*/}
        <div className=" flex flex-col items-center border-[1px] border-[#E3E8EC] lg:bg-gradient-to-r max-sm:bg-gradient-to-l  from-[#F3F6F8] to-[#F3F6F8] bg-white ">
          {/* Background */}
          <div className="relative  flex justify-center   lg:w-[1280px] md:w-[744px] max-sm:w-[360px]  md:h-[586px] max-sm:h-[257px]">
            <img
              src={bg_image}
              alt=""
              className="lg:w-full  md:h-[586px] max-sm:h-[257px]  opacity-100 "
            />
            <div className="hidden  max-sm:block">
              <div className="absolute flex flex-col bg-gradient-to-l to-[#FFFFFF] from-[#ffffff4d]  lg:gap-[24px] md:gap-[30px]  top-[10px] left-[14px] rounded-[8px] h-[332px] w-[153px] p-[16px] border-[1px] border-[#D4D4D4] ">
                <div className=" flex items-center h-[57px]">
                  <div className="h-[57px] border-l-[1px] border-[#C0C0C0]"></div>
                  <div className=" flex flex-col    pl-[6px]">
                    <span className="lg:text-[#A2A2A2] md:text-[#A5A7A9] lg:shadow-lg border-3 lg:shadow-white font-[200] lg:text-[64px] md:text-[40px] max-sm:  ">
                      01.
                    </span>
                    <span className="lg:text-[#414141] md:text-[#DEDEDE]  font-[500] lg:text-[28px] md:text-[20px] ">
                      OSMRTNICE
                    </span>
                  </div>
                </div>
                <div className=" flex items-center h-[57px] ">
                  <div className="h-[57px] border-l-[1px] border-[#C0C0C0]"></div>
                  <div className=" flex flex-col    pl-[6px]">
                    <span className="lg:text-[#A2A2A2] md:text-[#A5A7A9]  font-[200] text-[32px] ">
                      02.
                    </span>
                    <span className="lg:text-[#414141] md:text-[#DEDEDE] font-[500] text-[16px] ">
                      POGREBI
                    </span>
                  </div>
                </div>
                <div className=" flex items-center h-[57px]">
                  <div className="h-[57px] border-l-[1px] border-[#C0C0C0]"></div>
                  <div className=" flex flex-col    pl-[6px]">
                    <span className="lg:text-[#A2A2A2] md:text-[#A5A7A9] font-[200] text-[32px] ">
                      03
                    </span>
                    <span className="lg:text-[#414141] md:text-[#DEDEDE] font-[500] text-[16px] ">
                      SPOMINSKA
                    </span>
                  </div>
                </div>
                <div className=" flex items-center h-[57px]">
                  <div className="h-[57px] border-l-[1px] border-[#C0C0C0]"></div>
                  <div className=" flex flex-col    pl-[6px]">
                    <span className="lg:text-[#A2A2A2] md:text-[#A5A7A9] font-[200] text-[32px] ">
                      04
                    </span>
                    <span className="lg:text-[#414141] md:text-[#DEDEDE] font-[500] text-[16px] ">
                      CVETLIČARNE
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute items-end  mr-16 lg:bottom-14 md:bottom-14    max-sm:hidden  w-4/6 flex flex-wrap justify-around ">
              <div className=" flex flex-col  text-[#DEDEDE]">
                <span
                  className=" top-0 text-[#7C7C7C] font-[200]  px-2 pb-6 lg:text-[64px] md:text-[40px]"
                  style={{ textShadow: " 1px 1px 1px white" }}
                >
                  01
                </span>
                <span className="absolute  bottom-0 pt-5 font-[500] border-l-1 px-2 text-[20px]">
                  OSMRTNICE
                </span>
              </div>
              <div className=" flex flex-col  text-[#DEDEDE]">
                <span
                  className=" top-0 text-[#7C7C7C] font-[200] px-2 pb-6 lg:text-[64px] md:text-[40px]"
                  style={{ textShadow: " 1px 1px 1px white" }}
                >
                  02
                </span>
                <span className="absolute bottom-0 pt-5 font-[500] border-l-1 px-2 text-[20px]">
                  POGREBI
                </span>
              </div>
              <div className=" flex flex-col  text-[#DEDEDE]">
                <span
                  className=" top-0 text-[#7C7C7C] font-[200] px-2 pb-6 lg:text-[64px] md:text-[40px]"
                  style={{ textShadow: " 1px 1px 1px white" }}
                >
                  03
                </span>
                <span className="absolute bottom-0 pt-5 font-[500] border-l-1 px-2 text-[20px]">
                  SPOMINSKA
                </span>
              </div>
              <div className=" flex flex-col  text-[#DEDEDE]">
                <span
                  className=" top-0 text-[#7C7C7C] font-[200] px-2 pb-6 lg:text-[64px] md:text-[40px]"
                  style={{ textShadow: " 1px 1px 1px white" }}
                >
                  04
                </span>
                <span className="absolute bottom-0 pt-5 font-[500] border-l-1 px-2 text-[20px]">
                  CVETLIČARNE
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="w-full max-sm:mt-20 h-full flex flex-col items-center pb-20  ">
            <div className="flex justify-center pt-10 text-[40px] text-[#1E2125] max-sm:text-[28px]">
              Zadnje osmrtnice
            </div>
            {/* Search Boxes Display */}
            <div className="flex justify-center gap-3 my-10 lg:flex-nowrap  flex-wrap lg:w-[777px] md:w-[600px]">
              {/* <Input
                placeholder="Išči po imenu / priimku"
                className="lg:w-[227px] lg:h-[48px] hidden lg:block p-3   shadow-sm border-[#7C7C7C] border-1 placeholder-[#7C7C7C]"
              /> */}
              <input
                placeholder="Išči po imenu / priimku"
                className="h-[48px] lg:w-[227px] lg:h-[48px] hidden lg:block outline-[#7C7C7C] md:w-[286px] text-[16px] max-sm:w-[296px] p-3 placeholder-[#7C7C7C] border-1 border-[#7C7C7C] rounded-lg shadow-sm bg-white "
              />
              <select
                id="select"
                placeholder="Izberi mesto"
                defaultChecked
                defaultValue={""}
                name="select"
                class="h-[48px] lg:w-[227px]   md:w-[292px] max-sm:w-[296px] px-2 text-[#7C7C7C] text-[16px] border-1 border-[#7C7C7C] focus:outline-[#7C7C7C] rounded-lg"
              >
                <option value="Išči po kraju">Išči po kraju</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <select
                id="select"
                placeholder="Išči po regiji"
                defaultChecked
                defaultValue={"helo"}
                name="select"
                class="h-[48px] lg:w-[227px]  md:w-[292px] max-sm:w-[296px] px-2 text-[#7C7C7C] text-[16px] border-1 border-[#7C7C7C] focus:outline-[#7C7C7C] rounded-lg"
              >
                <option value="Išči po kraju">Išči po kraju</option>
                <option value="option2">helo</option>
                <option value="option3">Option 3</option>
              </select>
              {/* <Select
                showSearch
                placeholder="Išči po kraju"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                className="lg:w-[227px] lg:h-[48px] md:w-[292px] md:h-[48px] max-sm:w-[296px] max-sm:h-[48px]  max-sm:mx-4 border-[#7C7C7C] border-1 rounded-lg shadow-sm"
                options={option}
              /> */}
              {/* <Select
                showSearch
                placeholder="Išči po regiji"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                className="lg:w-[227px] lg:h-[48px]  md:w-[292px] md:h-[48px] max-sm:w-[296px] max-sm:h-[48px] max-sm:mx-4 border-[#7C7C7C] border-1 rounded-lg placeholder-[#7C7C7C] shadow-sm"
                options={option}
              /> */}
              <button className="lg:w-[48px] lg:h-[48px] md:w-[292px] md:h-[48px] max-sm:w-[296px] max-sm:h-[48px] border-1 flex justify-center items-center lg:text-[24px] md:font-thin rounded-lg bg-[#414141] text-white shadow-sm">
                <span className="lg:hidden">Prikaži</span>
                <span className="hidden lg:block">
                  <CiSearch />
                </span>
              </button>
            </div>
            {/* Cards Display */}
            <div className=" flex  md:flex-wrap max-sm:flex-wrap  max-sm:w-full max-md:w-full justify-center lg:w-[1280px] md:w-[470px]">
              {profiles.map((data) => (
                <div>
                  <Card profile={data} />
                </div>
              ))}
            </div>
            <div className="pt-10">
              <Button
                bg1={"from-[#e3e8ec]"}
                bg2={"to-[#ffffff]"}
                padding={"p-2"}
                px={"px-6"}
                style={"border-none"}
                className=" "
              >
                {" "}
                Prikaži več
              </Button>
            </div>
          </div>
        </div>

        {/* Section 2 Caroucel*/}
        <div className="border-[1px] border-[#E3E8EC]">
          {/* Responsive for tablet and mobile */}
          <div className="w-screen lg:h-[891px] md:h-[1204px] max-sm:h-[885px] flex  bg-[#FEFAF2] lg:hidden md:block sm:block">
            <div className="flex justify-center md:h-[1204px] items-center ">
              {/* Tablet and phone */}
              <div className=" flex  md:w-[497.91px]   max-sm:w-full max-lg:flex-wrap-reverse justify-center gap-10 max-sm:gap-0 ">
                <div className="flex flex-col  items-center ">
                  <div className=" p-5  bg-white rounded-2xl border-2  h-[627.35px] w-[420px] max-sm:w-[294.4px] max-sm:h-[494.65px]">
                    <div className="flex justify-center w-full mb-4 ">
                      <div className="w-1 h-1  border-2 rounded-full bg-gray-500"></div>
                    </div>
                    <img
                      className="h-[531.31px] w-[384.5px] max-sm:w-[274px] max-sm:h-[405px]"
                      src={iPadImg}
                      alt=""
                      srcset=""
                    />
                    <div className="flex justify-center w-full mt-2">
                      <div className="w-8 h-8 bg-white border-2 rounded-full "></div>
                    </div>
                  </div>
                  <div className="py-4">
                    <Button
                      bg1={"from-[#e3e8ec]"}
                      bg2={"to-[#ffffff]"}
                      padding={"p-2"}
                      px={"px-6"}
                      style={"border-none hidden max-sm:block"}
                      className=" "
                    >
                      {" "}
                      Več informacij
                    </Button>
                  </div>
                </div>
                {/* text lines */}
                <div className="">
                  <div className=" md:w-[467px] md:h-[259px] max-sm:w-[321px] max-sm:h-[183px] text-center ">
                    {/* <div> */}
                    <h2 className=" text-[40px] max-sm:text-[28px]">
                      Osmrtnica
                    </h2>
                    <p className="mt-4 text-[16px]">
                      Stran, kjer izvemo vse o pogrebu, se vpišete v Žalno
                      knjigo, izrečete sožalja in prižgete virtualno svečko.{" "}
                    </p>
                    <h3 className="font-[500] text-[20px] py-4">
                      Vse navedeno je BREZPLAČNeO.
                    </h3>

                    <div className="pt-10 max-sm:hidden">
                      <Button
                        bg1={"from-[#e3e8ec]"}
                        bg2={"to-[#ffffff]"}
                        padding={"p-2"}
                        px={"px-6"}
                        style={"border-none "}
                        className=" "
                      >
                        {" "}
                        Več informacij
                      </Button>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Caroucel for Desktop */}
          <div className="hidden lg:block ">
            <Carousel
              autoplay
              autoplaySpeed={2000}
              dotPosition="bottom"
              className="bg-[#FEFAF2] "
            >
              {/* div1 slider */}
              <div className="w-screen h-[891px] " style={contentStyle}>
                <div className="flex justify-center h-[891px] items-center ">
                  <div className="bg-[#FEFAF2]  flex lg:h-[639.78px] lg:w-[994px] md:flex-wrap-reverse  justify-center gap-10 ">
                    <div className="">
                      <div className="  h-[627.35px] w-[420px]">
                        <div className=" p-5  bg-white rounded-2xl border-1 border-[#000000]">
                          <div className="flex justify-center w-full mb-4 ">
                            <div className="w-1 h-1  border-2 rounded-full bg-gray-500"></div>
                          </div>
                          <img
                            className="h-[531.31px] w-[384.5px]"
                            src={iPadImg}
                            alt=""
                            srcset=""
                          />
                          <div className="flex justify-center w-full mt-2">
                            <div className="w-8 h-8 bg-white border-2 rounded-full "></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:mt-20  md:mt-0">
                      <div className="relative w-[504px] h-[259px]  lg:text-start md:text-center">
                        <div className="">
                          <h2 className="font-[400] text-[40px]">Osmrtnica</h2>
                          <p className="pt-4 text-[16px]">
                            Stran, kjer izvemo vse o pogrebu, se vpišete v Žalno
                            knjigo, izrečete sožalja in prižgete virtualno
                            svečko.{" "}
                          </p>
                          <h3 className="font-[500] text-[20px] pt-4">
                            Vse navedeno je BREZPLAČNO.
                          </h3>

                          <div className="absolute bottom-0 left-20">
                            <Button
                              bg1={"from-[#e3e8ec]"}
                              bg2={"to-[#ffffff]"}
                              padding={"p-2"}
                              px={"px-6"}
                              style={"border-none"}
                              className=""
                            >
                              {" "}
                              Več informacij
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* div2 slider */}
              <div className="w-screen  lg:h-[891px]" style={contentStyle}>
                <div className="flex justify-center  bg-[#FEFAF2] h-[891px] items-center">
                  <div className="  flex  justify-center  gap-10 h-[627.35px] flex-wrap">
                    <div className=" p-5 bg-white rounded-2xl border-[#000000] h-[627.35px] w-[420px] border-[1px] ">
                      <div className="flex justify-center w-full mb-4 ">
                        <div className="w-1 h-1  border-2 rounded-full bg-gray-500"></div>
                      </div>
                      <img
                        className="h-[531.31px] w-[384.5px]"
                        src={iPadImg2}
                        alt=""
                        srcset=""
                      />
                      <div className="flex justify-center w-full mt-2">
                        <div className="w-8 h-8 bg-white border-2 rounded-full "></div>
                      </div>
                    </div>
                    <div className="w-[495px] max-sm:w-full">
                      <div className="">
                        <span>
                          <h2 className="font-semibold text-[36px]  ">
                            Spominska stran{" "}
                            <span className="text-red-500"> s skrbnikom</span>
                          </h2>
                          <p className="pt-4 ">
                            Nadgradnja osnovne spominske strani - osmrtnice,
                            kjer skrbnik prevzame kontrolo nad objavljeno
                            vsebino; ponavadi je to nekdo, ki je bil preminulemu
                            bližnji. Upravljanje je enostavno; vsak je lahko
                            skrbnik.
                          </p>
                          <p className="pt-4">
                            Ker Skrbnik skrbi za vsebino še preden je
                            objavljena, so tu lahko dodane številne dodatne
                            možnosti za izdelavo prave spominske knjige, na
                            katero se bodo bližnji radi vračali in jo
                            dopolnjevali.
                          </p>
                        </span>
                        <span className="">
                          <h3 className="font-semibold text-[20px] pt-20">
                            Vse navedeno je BREZPLAČNO.
                          </h3>
                          <p className="pt-4 pb-14">
                            Prehitro nam uidejo, čarobni trenutki se pozabijo,
                            slike zbledijo. Povežimo spomine na naše najdražje v
                            celoto in jih ohranimo.
                          </p>{" "}
                        </span>

                        <div className="pt-10">
                          <Button
                            bg1={"from-[#e3e8ec]"}
                            bg2={"to-[#ffffff]"}
                            padding={"p-2"}
                            px={"px-6"}
                            className=""
                            style={"border-none"}
                          >
                            {" "}
                            Več informacij
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>

        {/* Section 3 */}
        <div className=" lg:h-[739px] max-sm:h-[1059px] border-[1px] border-[#E3E8EC] items-center justify-around px-10 flex flex-wrap w-full  bg-gradient-to-r from-[#b6ecec17] to-[#bef4f400] bg-gray-50">
          <div className="flex lg:w-[936px] lg:h-[500px] md:h-[997px] max-sm:h-[883px] md:w-[495.45px] max-sm:w-[303px] lg:justify-between  md:justify-center max-sm:justify-center max-sm:text-center lg:text-start md:text-center flex-wrap">
            <div className="w-[495.45px] md:h-[319px]  lg:my-20 md:mt-10 max-sm:mb-4 ">
              <div>
                <h2 className=" lg:text-[40px] md:text-[40px] max-sm:text-[28px]">
                  Obveščanje o pogrebu
                </h2>
                <p className="pt-4 text-[16px]">
                  V težkih trenutkih je včasih lažje poslati ali deliti po
                  socialnih omrežjih, kot obveščati vsakega posebej.{" "}
                </p>
                <p className="pt-4 text-[16px]">
                  Na spominski strani pokojnika/ce si prenesete obvestilo o
                  pogrebu, ki ga lahko potem pošiljate naprej sorodnikom in
                  znancem. Obvestilo je prilagojeno meram mobilnega telefona.
                </p>
                <h3 className=" text-[20px] pt-4 max-sm:w-[326px] font-[500]">
                  Obvestilo o pogrebu je BREZPLAČNO.{" "}
                </h3>

                <div className="pt-10  max-sm:hidden">
                  <Button
                    bg1={"from-[#E3E8EC] "}
                    bg2={"to-[#FFFFFF]"}
                    padding={"p-2"}
                    px={"px-6"}
                    className=""
                  >
                    {" "}
                    Poišči osmrtnico
                  </Button>
                </div>
              </div>
            </div>
            <div className="  w-[250px]">
              <div className="w-full  flex justify-center relative gap-1 left-3  top-5 z-10">
                <div className="border-gray-800 w-1 rounded-full  border-3 "></div>
                <div className="border-gray-800 w-10 rounded-full  border-3 bg-gray-500"></div>
                <div className="border-gray-800 w-1 rounded-full border-3 "></div>
              </div>
              <img className="absolute z-0 " src={mobileImg} alt="" />
              <img
                className="relative left-3 top-3 "
                src={mobileScreen}
                alt=""
              />
            </div>
            <div className="pt-16 hidden max-sm:block">
              <Button
                bg1={"from-[#E3E8EC] "}
                bg2={"to-[#FFFFFF]"}
                padding={"p-2"}
                px={"px-6"}
                style={"border-none max-sm:hidden"}
                className=""
              >
                {" "}
                Poišči osmrtnico
              </Button>
            </div>
          </div>
        </div>

        {/* section 4 Banner*/}
        <div className="w-full justify-center flex bg-black ">
          <div
            style={{ backgroundImage: `url('${frameImg}')` }}
            className="bg-cover bg-center max-sm:bg-[-300px] w-[1280px]  h-[284px] flex justify-around items-center border-[1px] border-black"
          >
            {/* <img src={frameImg} className="w-full " alt="" /> */}
            <div className="hidden lg:block md:block"></div>
            <div className=" text-white lg:w-[476px] md:w-[300px] flex flex-col gap-8 items-center">
              <h2 className="lg:text-[40px] md:text-[32px] max-sm:text-[28px] ">
                Lokalne cvetličarne{" "}
              </h2>
              <Select
                showSearch
                placeholder="Mesto"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                className="h-12 lg:w-[476px] md:w-[300px] max-sm:w-[300px] max-sm:mx-4 hover:border-gray-400 focus:border-gray-400 shadow-sm"
                options={option}
              />
            </div>
          </div>
        </div>

        {/* section 5 */}
        <div className="py-20 flex flex-col items-center border-[1px] border-[#E3E8EC] bg-[#FFFBF4]">
          <div className="lg:w-[1088px] md:w-[600px]  md:text-center flex flex-col items-center">
            <div className=" max-sm:text-center max-sm:w-[296px]">
              <span className="max-sm:text-[28px] max-sm:hidden lg:text-[32px] md:text-[32px] text-center">
                Obveščanje o osmrtnicah v domačem kraju{" "}
              </span>
              <span className="text-[28px]  max-sm:block hidden  text-center">
                Obveščanje o lokalnih osmrtnicah
              </span>
            </div>
            <div className="flex gap-2 py-4 flex-wrap max-sm:justify-center">
              {/* <Select
                showSearch
                placeholder="Išči po kraju"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                // style={{ placeholder }}
                className="h-[48px] lg:w-[306px] border-1 border-[#7C7C7C] rounded-lg md:w-[286px] max-sm:w-[296px] hover:border-gray-400 focus:border-gray-400 shadow-sm bg-white"
                options={option}
              /> */}
              <div className="">
                <select
                  id="select"
                  placeholder="Izberi mesto"
                  defaultChecked
                  defaultValue={""}
                  name="select"
                  class="h-[48px] lg:w-[306px] md:w-[286px] max-sm:w-[296px] px-2 text-[#7C7C7C] text-[16px] border-1 border-[#7C7C7C] focus:outline-[#7C7C7C] rounded-lg"
                >
                  <option value="Izberi mesto">Izberi mesto</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <input
                placeholder="Vpiši svoj e-poštni naslov "
                className="h-[48px] lg:w-[306px] outline-[#7C7C7C] md:w-[286px] text-[16px] max-sm:w-[296px] p-3 placeholder-[#7C7C7C] border-1 border-[#7C7C7C] rounded-lg shadow-sm bg-white "
              />
            </div>
            <div className="flex gap-2 flex-col max-sm:items-center font-medium">
              <div className="flex justify-start gap-2">
                <input
                  type="checkbox"
                  className="appearance-auto w-4 h-4 rounded border-2"
                  onChange={onChange}
                />
                <span className="text-[12px]  max-sm:w-[264px]">
                  {" "}
                  Strinjam se s{" "}
                  <a className="underline hover:underline">
                    splošnimi pogoji in pravili
                  </a>
                </span>
              </div>
              {/* <Checkbox className="text-[12px] max-sm:w-72" onChange={onChange}>
                Enkrat mesečno prejemam tudi novice, posebne popuste, občasne
                brezplačne nadgradnje
              </Checkbox> */}
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="border-black appearance-auto w-4 h-4 rounded border-2"
                  onChange={onChange}
                />
                <span className="text-[12px] max-sm:w-[264px]">
                  Enkrat mesečno prejemam tudi novice, posebne popuste, občasne
                  brezplačne nadgradnje
                </span>
              </div>
            </div>
            <div className="py-6 flex flex-col items-center gap-2 font-medium">
              <SimpButton
                textColor={"blue-500"}
                bgColor={"bg-[#CAF0F8]"}
                padding={
                  "w-[276px] h-[48px] flex justify-center items-center text-[18px]"
                }
                px={"px-20"}
              >
                Prijava
              </SimpButton>
              <p className="text-[12px]">
                Osmrtnice boste prejemali enkrat dnevno.
              </p>
            </div>
          </div>
        </div>
        {/* Section 6 Footer */}
        <Footer />
      </div>
    </div>
  );
}

// function Button(prop) {
//   console.log(prop);
//   return (
//     <button
//       className={`border-white p-${prop.padding} px-${prop.px} shadow-lg rounded-lg bg-gradient-to-r from-${prop.bg1} to-${prop.bg2} hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 border-2`}
//     >
//       {prop.children}
//     </button>
//   );
// }

// const SimpButton = (props) => {
//   return (
//     <button
//       className={`p-${props.padding} px-${props.px} shadow-lg rounded-lg bg-[${props.bgColor}] text-${props.color} hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500`}
//     >
//       {props.children}
//     </button>
//   );
// };
