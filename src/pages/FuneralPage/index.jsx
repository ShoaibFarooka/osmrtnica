import React, { useEffect, useState } from "react";
import Navbar2 from "../../components/Navbar/Navbar2";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import topBanner from "../../assets/images/topBanner3.jpg";
import icon1 from "../../assets/images/mini_icon1.png";
import icon2 from "../../assets/images/mini_icon2.png";
import icon3 from "../../assets/images/mini_icon3.png";
import banner from "../../assets/images/flowerBanner2.jpg";
import Suponcer1 from "../../assets/images/Suponcer1.png";
import Suponcer2 from "../../assets/images/Suponcer2.png";
import Suponcer3 from "../../assets/images/Suponcer3.png";

import { CiSearch } from "react-icons/ci";
import { Select, SelectItem } from "@nextui-org/select";
import { animals } from "../FloristsPage/data";
import { Card2, Card4 } from "../../components/Card/Card";
import { data } from "./data";
import { Button } from "../../components/Button/Buttons";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Funeral() {
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);
  return (
    <div>
      <header>
        {/* Navbar */}
        <div>{width < 800 ? <Navbar /> : <Navbar2 />}</div>
        {/* Top Header */}
        <div>
          <HeaderTop btnText={"Pogrebna podjetja"} topBanner={topBanner} />
        </div>
      </header>

      <body>
        {/* Section 1 */}
        <div className=" flex flex-col items-center">
          <div className="flex justify-center items-center py-16  gap-3">
            <button className="h-12 w-12 border-1 flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-white shadow-sm">
              <CiSearch />
            </button>
            <div>
              <Select
                size="sm"
                label="Išči po krajih"
                className="w-52 h-fit  border-1 border-gray-400 rounded-md"
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
          {/* Cards */}
          <div className="w-full flex flex-col items-center">
            <div className="w-4/5 flex flex-col mb-20 gap-1">
              <h2 className="text-[20px] font-medium max-lg:hidden">
                Zasavska regija
              </h2>
              <div className="flex gap-5">
                <div className="w-full">
                  {data.map((profile) => (
                    <span>
                      <Card2
                        style={
                          "max-sm:flex-col max-sm:h-fit max-sm:items-center max-sm:pl-3 max-sm:pt-3"
                        }
                        profile={profile}
                      />
                    </span>
                  ))}
                </div>
                <div className=" w-2/5 max-lg:hidden">
                  <div className="flex text-gray-400 gap-2 justify-center items-center shadow-sm  w-full h-48 border-1 border-gray-300  rounded-lg m-3">
                    Kmalu
                  </div>
                  <div className="flex text-gray-400 gap-2 justify-center items-center shadow-sm  w-full h-96 border-1 border-gray-300  rounded-lg m-3">
                    Kmalu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full  bg-[#083545]">
          <div className="p-20 text-[#D4D4D4] flex flex-col gap-5 md:items-center lg:items-start">
            <p className="text-[32px]  font-thin">Sodelujmo!</p>
            <p className="text-[16px]  font-thin">
              Imate ideje, vprašanja, predloge?
            </p>
            <p className="text-[16px]  font-thin">
              Kontaktirajte nas! Z veseljem vam bomo prisluhnili!
            </p>
          </div>
        </div>

        {/* Section 3 Partners*/}
        <div className="py-10 bg-[#DAEBF1]">
          <h3 className="text-[32px] text-[#083545] text-center py-4">
            Postani partner!
          </h3>
          <div className="flex gap-4 w-full justify-center flex-wrap">
            <Card4
              item={{
                icon: icon1,
                heading: "Pogrebna podjetja",
                line1:
                  "Celovita predstavitev podjetja in številne druge možnosti za sodelovanje kasneje.",
                line2: "Olajšamo vam delo in prihranimo vaš čas.",
              }}
            />
            <Card4
              item={{
                icon: icon2,
                heading: "Cvetličarne",
                line1:
                  "Naj bo vaša spletna predstavitev samo začetek našega širšega sodelovanja.",
                line2: "Bodite na pravem mestu, ko vas rabijo.  ",
              }}
            />
            <Card4
              item={{
                icon: icon3,
                heading: "Oglaševalci in drugi",
                line1:
                  "Ponujate produkte ali storitve, ki so lahko zanimive obiskovalcem naših strani?",
                line2: "Stopite v stik z nami!",
              }}
            />
          </div>
          <div className="w-full flex justify-center py-5">
            <Button
              className="shadow-md "
              bg1={"[#E3E8EC]"}
              bg2={"[#FFFFFF]"}
              padding={"p-2"}
              px={"px-4 border-none"}
            >
              Kontaktirajte nas
            </Button>
          </div>
        </div>

        {/* Section 4 Suponsers */}
        <div className="my-10 w-full flex flex-col gap-5 items-center">
          <p className="font-semibold">Sponsorji</p>
          <div className="flex lg:w-3/6 md:w-5/6 max-sm:w-5/6  justify-between items-center ">
            <img className="h-fit max-sm:hidden" src={Suponcer3} alt="" />
            <img className="h-fit max-sm:w-32" src={Suponcer2} alt="" />
            <img className="h-fit max-sm:w-32" src={Suponcer1} alt="" />
          </div>
        </div>
        {/* Section 5 Banner*/}
        <div className="relative max-sm:hidden">
          <div className="absolute right-0 p-20 w-full flex flex-col items-end h-full justify-center">
            <p className="text-[32px]">Lokalne cvetličarne</p>
            <Select
              size={"sm"}
              style={{ backgroundColor: "white" }}
              label="Izberi kraj"
              className="max-w-xs border-gray-300"
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <img src={banner} alt="" />
        </div>
      </body>
      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
}
