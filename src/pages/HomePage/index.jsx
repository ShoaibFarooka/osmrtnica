import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import bg_image from "../../assets/images/Union.png";
import { Carousel, Checkbox, Input, Select } from "antd";
import { option, profiles } from "./data";
import { CiSearch } from "react-icons/ci";
import Card from "../../components/Card/Card";
import { AiFillMobile } from "react-icons/ai";
import iPadImg from "../../assets/images/Vector (3).png";
import iPadImg2 from "../../assets/images/Frame2.png";
import mobileImg from "../../assets/images/Vector (4).png";
import mobileScreen from "../../assets/images/Vector (2).png";
import frameImg from "../../assets/images/Frame 194.png";
import groupLogo from "../../assets/images/GroupLogo.png";
import { HiPhone } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";

export default function HomePage() {
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
        <Carousel autoplay autoplaySpeed={2000} dotPosition="bottom">
          {/* div1 slider */}
          <div className="w-screen " style={contentStyle}>
            <div className="bg-[#FEFAF2] flex border-3 justify-center gap-10 p-10">
              <span>
                <div className="border-2 p-5 bg-white rounded-2xl ">
                  <div className="flex justify-center w-full mb-4 ">
                    <div className="w-1 h-1  border-2 rounded-full bg-gray-500"></div>
                  </div>
                  <img className="h-[550px]" src={iPadImg} alt="" srcset="" />
                  <div className="flex justify-center w-full mt-2">
                    <div className="w-8 h-8 bg-white border-2 rounded-full "></div>
                  </div>
                </div>
              </span>
              <span>
                <div className="w-96">
                  <div>
                    <h2 className="font-semibold text-[40px]">Osmrtnica</h2>
                    <p className="pt-4=">
                      Stran, kjer izvemo vse o pogrebu, se vpišete v Žalno
                      knjigo, izrečete sožalja in prižgete virtualno svečko.{" "}
                    </p>
                    <h3 className="font-semibold text-[26px] pt-4">
                      Vse navedeno je BREZPLAČNO.
                    </h3>

                    <div className="pt-10">
                      <Button
                        bg1={"rgba(227, 232, 236, 1)"}
                        bg2={"rgba(255, 255, 255, 1)"}
                        padding={2}
                        px={6}
                        className=""
                      >
                        {" "}
                        Več informacij
                      </Button>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>

          {/* div2 slider */}
          <div className="w-screen" style={contentStyle}>
            <div className="bg-[#FEFAF2] flex justify-center gap-10 p-10">
              <div className=" p-5 bg-white rounded-2xl ">
                <div className="flex justify-center w-full mb-4 ">
                  <div className="w-1 h-1  border-2 rounded-full bg-gray-500"></div>
                </div>
                <img className="h-[550px]" src={iPadImg2} alt="" srcset="" />
                <div className="flex justify-center w-full mt-2">
                  <div className="w-8 h-8 bg-white border-2 rounded-full "></div>
                </div>
              </div>
              <div className="w-3/6">
                <div className="">
                  <span>
                    <h2 className="font-semibold text-[36px]  ">
                      Spominska stran{" "}
                      <span className="text-red-500"> s skrbnikom</span>
                    </h2>
                    <p className="pt-4">
                      Nadgradnja osnovne spominske strani - osmrtnice, kjer
                      skrbnik prevzame kontrolo nad objavljeno vsebino; ponavadi
                      je to nekdo, ki je bil preminulemu bližnji. Upravljanje je
                      enostavno; vsak je lahko skrbnik.
                    </p>
                    <p className="pt-4">
                      Ker Skrbnik skrbi za vsebino še preden je objavljena, so
                      tu lahko dodane številne dodatne možnosti za izdelavo
                      prave spominske knjige, na katero se bodo bližnji radi
                      vračali in jo dopolnjevali.
                    </p>
                  </span>
                  <span className="">
                    <h3 className="font-semibold text-[20px] pt-20">
                      Vse navedeno je BREZPLAČNO.
                    </h3>
                    <p className="pt-4 pb-14">
                      Prehitro nam uidejo, čarobni trenutki se pozabijo, slike
                      zbledijo. Povežimo spomine na naše najdražje v celoto in
                      jih ohranimo.
                    </p>{" "}
                  </span>

                  <div className="pt-10">
                    <Button
                      bg1={"rgba(227, 232, 236, 1)"}
                      bg2={"rgba(255, 255, 255, 1)"}
                      padding={2}
                      px={6}
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
        </Carousel>

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
                <Button
                  bg1={"rgba(227, 232, 236, 1)"}
                  bg2={"rgba(255, 255, 255, 1)"}
                  padding={2}
                  px={6}
                  className=""
                >
                  {" "}
                  Poišči osmrtnico
                </Button>
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
        <div className="py-20 flex flex-col items-center bg-[#FFFBF4]">
          <div>
            <span>Obveščanje o osmrtnicah v domačem kraju </span>
          </div>
          <div className="flex gap-2 py-4">
            <Select
              showSearch
              placeholder="Išči po kraju"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              className="h-12 w-60 hover:border-gray-400 focus:border-gray-400 shadow-sm bg-white"
              options={option}
            />
            <Input
              placeholder="Vpiši svoj e-poštni naslov "
              className="w-64 p-3 border-1 shadow-sm bg-white "
            />
          </div>
          <div className="flex gap-2 flex-col ">
            <Checkbox className="text-[12px]" onChange={onChange}>
              Strinjam se s{" "}
              <a className="underline hover:underline">
                splošnimi pogoji in pravili
              </a>
            </Checkbox>
            <Checkbox className="text-[12px]" onChange={onChange}>
              Enkrat mesečno prejemam tudi novice, posebne popuste, občasne
              brezplačne nadgradnje
            </Checkbox>
          </div>
          <div className="py-6 flex flex-col items-center gap-2">
            <SimpButton
              textColor={"blue-500"}
              bgColor={"#CAF0F8"}
              padding={2}
              px={16}
            >
              Prijava
            </SimpButton>
            <p className="text-[12px]">
              Osmrtnice boste prejemali enkrat dnevno.
            </p>
          </div>
        </div>
        {/* Section 6 */}

        <div className="px-10 flex flex-col bg-gradient-to-r from-p_bg1 to-p_bg pt-16 border-t-1 flex-wrap">
          <div className=" border-b-2 border-gray-300  pb-16 flex justify-around">
            <div className="items-center p-4 flex flex-col gap-10">
              <img src={groupLogo} alt="" className="w-[200px]" />
              {/* info with logo */}
              <div className="  flex flex-col gap-2">
                <div className=" flex gap-3 items-center">
                  <span className="p-1 border-1 border-white  shadow-lg shadow-gray-400 rounded-md">
                    <HiPhone className="text-[20px]" />
                  </span>
                  <p>386 05 05 05 05</p>
                </div>
                <div className=" flex gap-3 items-center">
                  <span className="p-1 border-1 border-white  shadow-lg shadow-gray-400 rounded-md">
                    <MdAlternateEmail className="text-[20px]" />
                  </span>
                  <p>best@website.com</p>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <h3 className="font-bold">Important links</h3>
              <a href="#">Osmrtnice</a>
              <a href="#">Pogrebi</a>
              <a href="#">Spominska</a>
              <a href="#">Cvetličarne</a>
              <a href="#">Pogrebna podjetja</a>
              <a href="#">Partnerji</a>
            </div>
            <div className=" flex flex-col gap-3">
              <h3 className="font-bold">Helpful links</h3>
              <a href="#">Pogosta vprašanja</a>
              <a href="#">Kaj storiti, ko se zgodi</a>
              <a href="#">Kako oddati osmrtnico</a>
              <a href="#">Kontakt</a>
              <a href="#">Povej naprej</a>
            </div>
            <div className="flex flex-col gap-3  justify-center items-center p-3 w-[240px] border-2 bg-gradient-to-r from-p_bg1 to-p_bg shadow-lg rounded-lg">
              <h2 className="text-[20px] font-semibold">
                Spremljajte nas na FB{" "}
              </h2>
              <p className="text-[14px]">
                Med drugim tam najdete tudi občasne popuste samo za prve,
                brezplačne nadgradnje in prihajajoče novosti.{" "}
              </p>
              <SimpButton
                padding={2}
                px={16}
                textColor={"white"}
                bgColor={"#5470B0"}
              >
                Facebook
              </SimpButton>
            </div>
          </div>
          <div className="flex justify-between p-1">
            <p>© Our Company, 2024. Vse pravice pridržane.</p>
            <span className=" text-[12px] flex gap-4">
              <a href="#">Splošni pogoji poslovanja</a>
              <a href="#">Politika zasebnosti</a>
              <a href="#">Politika varovanja osebnih podatkov</a>
              <a href="#">Piškotki</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button(prop) {
  console.log(prop);
  return (
    <button
      className={`border-white p-${prop.padding} px-${prop.px} shadow-lg rounded-lg bg-gradient-to-r from-${prop.bg1} to-${prop.bg2} hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 border-2`}
    >
      {prop.children}
    </button>
  );
}

const SimpButton = (props) => {
  return (
    <button
      className={`p-${props.padding} px-${props.px} shadow-lg rounded-lg bg-[${props.bgColor}] text-${props.color} hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500`}
    >
      {props.children}
    </button>
  );
};
