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
    <div className="m-0 p-0">
      {/* Navbar */}
      <div className="shadow-md">
        <Navbar />
      </div>

      {/* Body of the page */}
      <div className="">
        {/* Body Top Section 1*/}
        <div className="lg:bg-gradient-to-r max-sm:bg-gradient-to-r from-[#E3EAEF] to-[#F3F6F8] bg-white ">
          {/* Background */}
          <div className="relative  flex justify-center  max-md:h-screen lg:h-screen  max-sm:h-fit">
            <img
              src={bg_image}
              alt=""
              className="w-full lg:h-screen  opacity-100"
            />
            <div className="absolute   items-end  mr-16 lg:bottom-14 md:bottom-7  sm:gap-10  max-sm:hidden  w-4/6 flex flex-wrap justify-around ">
              <div className=" flex flex-col  text-white">
                <span className=" top-0 text-gray-400 font-thin  px-2 pb-6 text-[46px]">
                  01
                </span>
                <span className="absolute bottom-0 pt-5 border-l-1 px-2 text-[20px]">
                  OSMRTNICE
                </span>
              </div>
              <div className=" flex flex-col  text-white">
                <span className=" top-0 text-gray-400 font-thin px-2 pb-6 text-[46px]">
                  02
                </span>
                <span className="absolute bottom-0 pt-5 border-l-1 px-2 text-[20px]">
                  POGREBI
                </span>
              </div>
              <div className=" flex flex-col  text-white">
                <span className=" top-0 text-gray-400 font-thin px-2 pb-6 text-[46px]">
                  03
                </span>
                <span className="absolute bottom-0 pt-5 border-l-1 px-2 text-[20px]">
                  SPOMINSKA
                </span>
              </div>
              <div className=" flex flex-col  text-white">
                <span className=" top-0 text-gray-400 font-thin px-2 pb-6 text-[46px]">
                  04
                </span>
                <span className="absolute bottom-0 pt-5 border-l-1 px-2 text-[20px]">
                  CVETLIČARNE
                </span>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="w-full h-full flex flex-col items-center pb-20  ">
            <div className="flex justify-center pt-10 text-[40px] max-sm:text-[28px]">
              Zadnje osmrtnice
            </div>
            {/* Search Boxes Display */}
            <div className="flex justify-center gap-3 my-10  flex-wrap">
              <Input
                placeholder="Išči po imenu / priimku"
                className="lg:w-[227px] lg:h-[48px] hidden lg:block p-3  border-1 shadow-sm"
              />
              <Select
                showSearch
                placeholder="Išči po kraju"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                className="lg:w-[227px] lg:h-[48px] md:w-[292px] md:h-[48px] max-sm:w-[296px] max-sm:h-[48px]  max-sm:mx-4 hover:border-gray-400 focus:border-gray-400 shadow-sm"
                options={option}
              />
              <Select
                showSearch
                placeholder="Išči po regiji"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                className="lg:w-[227px] lg:h-[48px]  md:w-[292px] md:h-[48px] max-sm:w-[296px] max-sm:h-[48px] max-sm:mx-4 hover:border-gray-400 focus:border-gray-400 shadow-sm"
                options={option}
              />
              <button className="lg:w-[48px] lg:h-[48px] md:w-[292px] md:h-[48px] max-sm:w-[296px] max-sm:h-[48px] border-1 flex justify-center items-center lg:text-[24px] md:font-thin rounded-lg bg-[#414141] text-white shadow-sm">
                {width <= 768 ? "Prikaži" : <CiSearch />}
              </button>
            </div>
            {/* Cards Display */}
            <div className=" flex  md:flex-wrap max-sm:flex-wrap  max-sm:w-full max-md:w-full justify-center ">
              {profiles.map((data) => (
                <Card profile={data} />
              ))}
            </div>
          </div>
        </div>

        {/* Section 2 Caroucel*/}
        <div className="border ">
          <div className="w-screen lg:h-[891px] md:h-[1204px] max-sm:[885px] bg-[#FEFAF2] lg:hidden md:block sm:block">
            <div className="flex justify-center lg:h-full h-full items-center py-5">
              <div className=" flex lg:h-[639.78px] lg:w-[994px] max-sm:w-full max-lg:flex-wrap-reverse   justify-center gap-10 max-sm:gap-0 ">
                {/* Tablet */}
                <div className="flex flex-col items-center ">
                  <div className=" p-5  bg-white rounded-2xl border-1  h-[627.35px] w-[420px] max-sm:w-[294.4px] max-sm:h-[494.65px]">
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
                <div className="lg:mt-10 md:mt-0">
                  <div className=" w-[504px] h-[259px] max-sm:w-[321px] max-sm:h-fit lg:text-start max-lg:text-center ">
                    {/* <div> */}
                    <h2 className="font-semibold text-[40px] max-sm:text-[28px]">
                      Osmrtnica
                    </h2>
                    <p className="pt-4 text-[16px]">
                      Stran, kjer izvemo vse o pogrebu, se vpišete v Žalno
                      knjigo, izrečete sožalja in prižgete virtualno svečko.{" "}
                    </p>
                    <h3 className="font-semibold text-[20px] pt-4">
                      Vse navedeno je BREZPLAČNO.
                    </h3>

                    <div className="pt-10">
                      <Button
                        bg1={"from-[#e3e8ec]"}
                        bg2={"to-[#ffffff]"}
                        padding={"p-2"}
                        px={"px-6"}
                        style={"border-none max-sm:hidden"}
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
          <div className="hidden lg:block">
            <Carousel
              autoplay
              autoplaySpeed={2000}
              dotPosition="bottom"
              className="bg-[#FEFAF2] "
            >
              {/* div1 slider */}
              <div
                className="w-screen lg:h-[891px] md:h-[1204px]"
                style={contentStyle}
              >
                <div className="flex justify-center lg:h-full h-full items-center ">
                  <div className="bg-[#FEFAF2]  flex lg:h-[639.78px] lg:w-[994px] md:flex-wrap-reverse  justify-center gap-10 ">
                    <div className="  h-[627.35px] w-[420px]">
                      <div className=" p-5  bg-white rounded-2xl border-1">
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
                    <div className="lg:mt-10 md:mt-0">
                      <div className=" w-[504px] h-[259px] lg:text-start md:text-center">
                        <div>
                          <h2 className="font-semibold text-[40px]">
                            Osmrtnica
                          </h2>
                          <p className="pt-4 text-[16px]">
                            Stran, kjer izvemo vse o pogrebu, se vpišete v Žalno
                            knjigo, izrečete sožalja in prižgete virtualno
                            svečko.{" "}
                          </p>
                          <h3 className="font-semibold text-[20px] pt-4">
                            Vse navedeno je BREZPLAČNO.
                          </h3>

                          <div className="pt-10">
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
              <div
                className="w-screen  lg:h-[891px] my-10 "
                style={contentStyle}
              >
                <div className="flex justify-center h-full items-center">
                  <div className=" bg-[#FEFAF2] flex  justify-center lg:w-[994px] h-[627.35px gap-10 flex-wrap">
                    <div className=" p-5 bg-white rounded-2xl h-[627.35px] w-[420px] border-2 ">
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
                    <div className="w-3/6 max-sm:w-full">
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
        <div className="  py-20 justify-around px-10 flex flex-wrap w-full  bg-gradient-to-r from-p_bg1 to-p_bg bg-gray-50">
          <div className="flex lg:w-[936px] md:w-[495.45px] max-sm:w-[303px] lg:justify-between md:justify-center max-sm:justify-center max-sm:text-center lg:text-start md:text-center flex-wrap">
            <div className="w-[495.45px]  my-20">
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
                <h3 className=" text-[20px] pt-4">
                  Obvestilo o pogrebu je BREZPLAČNO.{" "}
                </h3>

                <div className="pt-10 max-sm:hidden">
                  <Button
                    bg1={"rgba(227, 232, 236, 1)"}
                    bg2={"rgba(255, 255, 255, 1)"}
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
                bg1={"rgba(227, 232, 236, 1)"}
                bg2={"rgba(255, 255, 255, 1)"}
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

        {/* section 4 */}
        <div
          style={{ backgroundImage: `url('${frameImg}')` }}
          className="bg-cover bg-center  h-80 flex justify-around items-center"
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
        {/* section 5 */}
        <div className="py-20 flex flex-col items-center bg-[#FFFBF4]">
          <div className=" max-sm:text-center">
            <span className="max-sm:text-[28px] max-sm:w-[32px] lg:text-[32px] md:text-[32px] text-center">
              Obveščanje o osmrtnicah v domačem kraju{" "}
            </span>
          </div>
          <div className="flex gap-2 py-4 flex-wrap max-sm:justify-center">
            <Select
              showSearch
              placeholder="Išči po kraju"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              className="h-[48px] lg:w-[306px] md:w-[286px] max-sm:w-[296px] hover:border-gray-400 focus:border-gray-400 shadow-sm bg-white"
              options={option}
            />
            <Input
              placeholder="Vpiši svoj e-poštni naslov "
              className="h-[48px] lg:w-[306px] md:w-[286px] max-sm:w-[296px] p-3  border-1 shadow-sm bg-white "
            />
          </div>
          <div className="flex gap-2 flex-col max-sm:items-center font-medium">
            <Checkbox className="text-[12px] max-sm:w-72" onChange={onChange}>
              Strinjam se s{" "}
              <a className="underline hover:underline">
                splošnimi pogoji in pravili
              </a>
            </Checkbox>
            <Checkbox className="text-[12px] max-sm:w-72" onChange={onChange}>
              Enkrat mesečno prejemam tudi novice, posebne popuste, občasne
              brezplačne nadgradnje
            </Checkbox>
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
