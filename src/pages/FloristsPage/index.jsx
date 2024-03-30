import React, { useEffect, useState } from "react";
import Navbar2 from "../../components/Navbar/Navbar2";
import Navbar from "../../components/Navbar/Navbar";
import banner from "../../assets/images/flowersBanner.jpg";
import obituary from "../../assets/images/Obituary.png";

import { FlowerCard, animals, profiles } from "./data";
import { Select, SelectItem } from "@nextui-org/react";
import { Card2, Card3 } from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import topBanner from "../../assets/images/topBanner2.jpg";
import { CiSearch } from "react-icons/ci";
import { Button2 } from "../../components/Button/Buttons";
import Sponcers from "../../components/Sponcers/Sponcers";

export default function FloristsListing() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <div className="w-full ">
      {/* HEADER */}
      <header className="w-full">
        {/* NAVBAR */}
        <div className="w-full">{width < 800 ? <Navbar /> : <Navbar2 />}</div>
        {/* HEADER BACKGROUND IMAGE */}
        <div className="w-full">
          <HeaderTop btnText={"Cvetličarne"} topBanner={topBanner} />
        </div>
      </header>

      <body className=" flex flex-col items-center ">
        {/* Section 1 */}
        <div className="w-5/6 flex flex-col my-20 gap-10">
          <div className="flex justify-between items-center flex-wrap ">
            <div className="flex gap-2 lg:w-fit md:w-full border-3 max-sm:w-full">
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
              <button className="h-12 w-12 border-1 flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-white shadow-sm">
                <CiSearch />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[28px]">Hitri izbor</h2>
              <div className="flex gap-2 flex-wrap">
                <Button2>Ljubljana</Button2>
                <Button2>Maribor</Button2>
                <Button2>Celje</Button2>
                <Button2>Kranj</Button2>
                <Button2>Koper</Button2>
                <Button2>Novo Mesto</Button2>
                <Button2>Domžale</Button2>
                <Button2>Velenje</Button2>
                <Button2>Nova Gorica</Button2>
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
            <div className=" w-2/5 max-sm:hidden max-lg:hidden">
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
            <span className="text-center pb-10">
              <p className="text-[28px]">Prednosti lokalnih cvetličarn</p>
              <p className="text-[16px] font-semibold">
                (napram cvetju iz velikih trgovin)
              </p>
            </span>
            <div className="w-full flex justify-around">
              <Card3 info={FlowerCard[0]}>
                <span className="flex flex-col gap-3">
                  <h3 className="font-semibold text-[16px] ">
                    Znanja in dolgoletne izkušnje
                  </h3>
                  <p className="text-[12px]  text-gray-700 ">
                    Pogosto premalo izpostavljena prednost lokalnih
                    cvetličarjev. So eksperti na svojem področju, ki radi delijo
                    svoje znanje in postrežejo nam z najboljšimi nasveti, kar v
                    veliki trgovini ni možno.
                  </p>
                </span>
              </Card3>
              <Card3 info={FlowerCard[1]}>
                <span className="flex items-end h-full  sm:items-start">
                  <div className="bg-white bg-opacity-50 p-3 sm:p-2 rounded-md">
                    <h1 className="font-semibold text-[16px]  text-gray-600">
                      Obstojnost cvetja je praviloma večja
                    </h1>
                    <p className="text-gray-500 text-[12px]">
                      Cvetličarji namenjajo cvetju vso potrebno nego, da to
                      ostane sveže in zdravo, ustrezno je prezračevanje,
                      osvetljenost, vlažnost v prostoru. Njihove rože izžarevajo
                      drugače in to se zazna.
                    </p>
                  </div>
                </span>
              </Card3>
              <Card3 info={FlowerCard[2]}>
                <span className="flex flex-col gap-3">
                  <h3 className="font-semibold text-[16px]">
                    Cvetje prilagojeno vsaki priložnosti
                  </h3>
                  <p className="text-[12px]  text-gray-700">
                    Pogosto premalo izpostavljena prednost lokalnih
                    cvetličarjev. So eksperti na svojem področju, ki radi delijo
                    svoje znanje in postrežejo nam z najboljšimi nasveti, kar v
                    veliki trgovini ni možno.
                  </p>
                </span>
              </Card3>
            </div>
            <div className="mt-10">
              <p className="text-[28px]">Podprimo lokalno!</p>
            </div>
          </div>
        </div>

        {/* Section 3 Banner*/}
        <div className="relative">
          <div className="absolute w-3/6 flex flex-col items-center right-0 h-full justify-center text-white gap-10">
            <span className="text-center">
              <p className="text-[30px] font-thin">Imate cvetličarno?</p>
              <h3 className="font-semibold">Sodelujmo!</h3>
            </span>
            <button className="bg-gradient-to-r text-black px-5 py-2 rounded-md from-[#E3E8EC] to-[#FFFFFF]">
              Naprej
            </button>
          </div>
          <img className="max-lg:h-64 " src={banner} alt="" />
        </div>

        {/* section 4 Suponsers */}
        <div className="w-full">
          <Sponcers />
        </div>
        {/* section 5 footer */}
        <div className="w-full">
          <Footer />
        </div>
      </body>
    </div>
  );
}

// const Button = (props) => {
//   return (
//     <button className="italic bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] border-1 border-gray-300 rounded-sm px-2 text-[12px] font-semibold text-gray-800">
//       {props.children}
//     </button>
//   );
// };
