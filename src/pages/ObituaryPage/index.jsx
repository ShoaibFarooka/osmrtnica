import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar/Navbar2";
import topBanner from "../../assets/images/topBanner.png";
import bgCover from "../../assets/images/bgCover.jpg";
import bgCover2 from "../../assets/images/bgImage3.jpeg";
import tye from "../../assets/images/TyeLogo1.png";
import profileImg from "../../assets/images/person.jpeg";
import flowerImg from "../../assets/images/Obituary.png";
import flowerImg2 from "../../assets/images/coverImg.jpeg";

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
  // const [banner, setBanner] = useState();
  const [width, setWidth] = useState();
  const backgroundRef = useRef(null);
  const bgBanner = useRef(null);
  useEffect(() => {
    setWidth(window.innerWidth);
    // if (window.innerWidth < 600) {
    //   setBanner(bgCover);
    // } else if (window.innerWidth > 1200) {
    //   setBanner(bgCover2);
    // }
  }, [window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const backgroundImage = width > 600 ? bgCover : bgCover2;
    backgroundRef.current.style.backgroundImage = `url(${backgroundImage})`;
    const bgBannerImage = width > 600 ? flowerImg : flowerImg2;

    bgBanner.current.style.backgroundImage = `url(${bgBannerImage})`;
    // width < 600
    //   ? (backgroundRef.current.style.backgroundImage.transform =
    //       "rotate(90deg)")
    //   : "";
  }, [width]);
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
        <div className="lg:bg-[#F5F7F9] md:bg-white flex justify-center">
          <div className="flex flex-col gap-[42px] items-center lg:w-[1080px] md:w-[744.62px] py-16 ">
            {/* Search */}
            <div className="flex lg:justify-end md:justify-center lg:w-[956px] md:w-[600px]   ">
              <div className="flex justify-between lg:w-[777px] md:w-[600px] max-sm:w-[296px] max-sm:h-[240px] lg:gap-[0px] md:gap-[16px] max-sm:gap-[16px] lg:h-[48px] max-lg:w-full flex-wrap max-lg:justify-center ">
                <Input
                  className="border-[1px] border-[#7C7C7C] lg:w-[227px] md:w-[292px] max-sm:w-[296px] placeholder:text-[#7C7C7C] h-[48px] placeholder:text-[16px]"
                  placeholder="Išči po imenu / priimku"
                />

                <select
                  id="animalSelect"
                  className="border-[1px] border-[#7C7C7C] lg:w-[227px] md:w-[292px] max-sm:w-[296px] h-[48px] text-[#7C7C7C] rounded-md p-2"
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
                  className="border-[1px] border-[#7C7C7C] lg:w-[227px] md:w-[292px] max-sm:w-[296px] h-[48px] text-[#7C7C7C] rounded-md p-2"
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
                <button className=" border-1 lg:w-[48px] md:w-[292px] max-sm:w-[296px] h-[48px] flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-[#F6F6F6] shadow-sm">
                  <CiSearch className="hidden lg:block" />
                  <span className="lg:hidden text-[16px] font-[400]">
                    Prikaži
                  </span>
                </button>
              </div>
            </div>

            <div className=" flex lg:flex-col  max-sm:flex-col max-sm:w-[307px] lg:items-center gap-[18px]">
              <h2 className="lg:w-[1080px] text-[24px] leading-[28.13px]">
                Hitri izbor
              </h2>
              <div className="flex lg:w-[956px] md:w-[504px]  flex-col  pl-10 items-end max-md:pl-0  ">
                <div className="flex lg:gap-[19px]  max-sm:gap-x-[25px] max-lg:gap-[16px] max-sm:w-[290px] max-sm:justify-between flex-wrap lg:w-[956px] md:w-[504px]">
                  <Button2 styles={"h-[24px] w-[78px]"}>Ljubljana</Button2>
                  <Button2 styles={"h-[24px] w-[68px] max-sm:hidden"}>
                    Maribor
                  </Button2>
                  <Button2 styles={"h-[24px] w-[49px]"}>Celje</Button2>
                  <Button2 styles={"h-[24px] w-[51px]"}>Kranj</Button2>
                  <Button2 styles={"h-[24px] w-[55px]"}>Koper</Button2>
                  <Button2 styles={"h-[24px] w-[95px]"}>Novo Mesto</Button2>
                  <Button2 styles={"h-[24px] w-[73px]"}>Domžale</Button2>
                  <Button2 styles={"h-[24px] w-[64px]"}>Velenje</Button2>
                  <Button2 styles={"h-[24px] w-[96px]"}>Nova Gorica</Button2>
                  <Button2 styles={"h-[24px] w-[70px]"}>Koroška</Button2>
                  <Button2 styles={"h-[24px] w-[67px] max-sm:hidden"}>
                    Zasavje
                  </Button2>
                </div>
              </div>
            </div>
            {/* Cards */}
            <div className="flex flex-col w-full  items-center  py-10 gap-[48px]">
              <div className="lg:w-full md:w-[598px] flex flex-col items-center gap-5">
                <h2 className="text-[24px] hidden lg:block  w-full">
                  Zasavska regija
                </h2>
                <div className=" flex flex-wrap lg:w-[956px] md:w-[466px] gap-[24px] max-sm:w-full max-md:w-full   justify-center ">
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

        <div className="bg-gradient-to-l from-[#d3d7da] lg:to-[#8c97a099] to-[#b2bdc74d] w-screen flex justify-center  lg:border-y-[2px] border-[#939393]">
          <div className="relative  flex lg:w-[1280px] md:w-[744px] max-sm:w-[360px] h-[308px] items-center justify-center gap-10">
            <div className="absolute lg:left-[215.83px] md:left-[602px] max-sm:left-[142px]  max-top-[37px] lg:top-[71.68px] md:top-[88px]">
              <img
                src={tye}
                alt=""
                className="h-[168.37px] w-[94.79px] max-sm:w-[135px] max-sm:h-[191px]"
              />
            </div>
            <div className="absolute flex flex-col lg:left-[408px] md:w-[488px] max-sm:w-[302px] max-sm:h-[117px]  lg:top-[68px] md:left-[72px]  gap-[48px] max-sm:gap-[36px] lg:w-[680px] items-center">
              <p className="text-[40px] max-sm:text-[28px]  max-lg:w-full max-sm:leading-[32.81px]">
                Pogrebi{" "}
                <span className="max-sm:hidden ">v naslednjih dneh</span>
              </p>
              <div>
                <div className="flex flex-wrap max-sm:flex-nowrap gap-[16px] lg:items-center  justify-center ">
                  <Select
                    size="sm"
                    label="Išči po imenu / priimku"
                    className="w-[300px] hidden lg:block  border-[1px] border-[#7C7C7C] rounded-[8px] "
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
                    label="Išči po krajih "
                    className="w-[300px] hidden lg:block  border-[1px] border-[#7C7C7C] rounded-[8px] "
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
                    label="Mesto"
                    className="md:w-[312px] max-sm:w-[240px] lg:hidden border-[1px] border-[#7C7C7C] rounded-[8px] "
                    style={{ backgroundColor: "white" }}
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <button className=" lg:w-[48px] md:w-[160px] max-sm:w-[48px] h-[48px] flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-[#F6F6F6] shadow-sm">
                    <CiSearch className="hidden lg:block max-sm:block" />
                    <span className="lg:hidden max-sm:hidden text-[16px] font-[400]">
                      Prikaži
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Section 3 */}

        <div
          className=" relative bg-cover bg-center  flex justify-center h-[919px] bg-rotate-90"
          ref={backgroundRef}
        >
          <div className=" relative flex flex-col items-center lg:w-[1280px] md:w-[745px]   py-[83px]  ">
            <div className=" lg:w-[900px] md:w-[649.91px] max-sm:w-[327px] h-[426px]  flex  items-center justify-center   max-md:p-3 max-lg:p-10 bg-gradient-to-r from-[#ffffff] to-[#ffffff80] rounded-md border-2 border-white">
              <div className="lg:w-[750px] md:w-[649.91px] max-sm:w-[301px] lg:h-[303px] md:h-[347px] max-sm:h-[377px] flex flex-col gap-[48px] max-sm:gap-[24px] items-center justify-center text-center">
                <div className="lg:w-[629.27px] md:w-[594px] max-sm:w-[301px] lg:h-[111px] flex flex-col md:h-[155px] lg:gap-[16px] md:gap-[36px] max-sm:gap-[16px]">
                  <h3 className="text-[40px] max-sm:text-[28px] leading-[46.88px] max-md:text-center ">
                    Odpri Spominsko stran
                  </h3>
                  <p className="text-[16px] max-sm:h-[120px] max-sm:justify-between leading-[24px] max-lg:flex max-lg:flex-col text-center  text-[#3C3E41] ">
                    <span className="">
                      <span className="">Spomini niso večni. </span>
                      <span>
                        <span className="lg:hidden md:hidden">
                          Prehitro nam uidejo, čarobni trenutki se pozabijo,
                          slike zbledijo.
                        </span>
                      </span>{" "}
                    </span>{" "}
                    <span className="max-sm:hidden">
                      Prehitro nam uidejo, čarobni trenutki se pozabijo, slike
                      zbledijo.
                    </span>{" "}
                    <span>
                      Povežite spomine na najdražje v celoto in jih ohranite.{" "}
                    </span>
                  </p>
                </div>

                <span className="flex justify-center lg:w-[750px] md:w-[586px] max-sm:w-[295px] gap-[16px]  max-md:flex-wrap">
                  <Input
                    className="border-[1px] border-[#7C7C7C] w-[367px] placeholder:text-[#7C7C7C] placeholder:text-[16px] pl-[23px] h-[48px] rounded-[8px]"
                    placeholder="Ime pokojnika/ce"
                  />
                  <Input
                    className="border-[1px] border-[#7C7C7C] w-[367px] placeholder:text-[#7C7C7C] placeholder:text-[16px] pl-[23px] h-[48px] rounded-[8px]"
                    placeholder="Priimek pokojnika/ce"
                  />
                </span>
                <Button
                  style={
                    "to-[#FFFFFF] from-[#E3E8EC] w-[97px] py-[12px] border-none max-sm:w-[295px]"
                  }
                >
                  Naprej
                </Button>
              </div>
            </div>

            <div className=" flex flex-col items-center">
              <h2 className="absolute lg:top-[576.15px] md:top-[576.15px] max-sm:top-[576.15px] lg:left-[506.5px] md:left-[239.5px] max-sm:left-[46.5px] font-[600] text-[24px]">
                Zadnje Spominske strani{" "}
              </h2>
              <div className="absolute lg:top-[633px] md:top-[633px] max-sm:top-[633px] lg:left-[380px] md:left-[113px]  gap-[32px]  flex">
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
                <span className="w-[152px] max-sm:hidden flex flex-col items-center gap-[16px] h-[226.11px]">
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

        <div className="lg:bg-[#e3e8eca6]  border">
          <Sponcers />
        </div>

        {/* Section 5 */}

        <div className="relative flex  max-lg:flex-wrap">
          <div
            // style={{ backgroundImage: `url(${flowerImg})` }}
            ref={bgBanner}
            className="w-full bg-cover max-lg:bg-[-78px]  bg-center h-[300px] max-sm:h-[236px] lg:ml-[0px] "
          ></div>
          <div className="max-lg:absolute md:top-[102px] max-sm:left-[42px] max-sm:top-[63px] md:border-[2px]  md:border-[#EDF1F3] md:left-[305px]  flex flex-col justify-center max-sm:items-end items-center gap-[29px] lg:w-full md:w-[391px] max-sm:w-[293px] lg:h-[300px] md:h-[167px] max-sm:right-3 lg:bg-[#FFE5B4] md:bg-gradient-to-r lg:bg-none md:from-[#ffffff] md:to-[#ffffff80] lg:rounded-none md:rounded-2xl   ">
            <div className="flex flex-col gap-[29px]">
              <h2 className="text-[40px] text-[#414141] max-sm:text-end max-sm:text-[28px] leading-[46.88px]">
                Lokalne cvetličarne
              </h2>
              <Select
                size="sm"
                label="Izberi kraj"
                className="lg:w-[476px] md:w-[333px] max-sm:w-[293px]  h-fit rounded-[8px] border-[#7C7C7C] lg:border-[#D4D4D4] border-[1px]"
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
        </div>

        {/* Section 6 Footer */}

        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
