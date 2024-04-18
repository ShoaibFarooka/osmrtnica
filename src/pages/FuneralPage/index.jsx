import React, { useEffect, useRef, useState } from "react";
import Navbar2 from "../../components/Navbar/Navbar2";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import topBanner from "../../assets/images/topBanner3.jpg";
import icon1 from "../../assets/images/mini_icon1.png";
import icon2 from "../../assets/images/mini_icon2.png";
import icon3 from "../../assets/images/mini_icon3.png";
import banner1 from "../../assets/images/flowerBanner2.jpg";
import banner2 from "../../assets/images/banner2.jpeg";
import Suponcer1 from "../../assets/svgs/Embrace.svg";
import Suponcer2 from "../../assets/svgs/Loral.svg";
import Suponcer3 from "../../assets/svgs/Ando.svg";

import { CiSearch } from "react-icons/ci";
import { Select, SelectItem } from "@nextui-org/select";
import { animals } from "../FloristsPage/data";
import { Card2, Card4 } from "../../components/Card/Card";
import { data } from "./data";
import { Button } from "../../components/Button/Buttons";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Funeral() {
  const [banner, setBanner] = useState();
  const [width, setWidth] = useState();
  const backgroundRef = useRef(null);
  useEffect(() => {
    setWidth(window.innerWidth);
    if (window.innerWidth < 1200) {
      setBanner(banner2);
    } else if (window.innerWidth > 1200) {
      setBanner(banner1);
    }
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
    const backgroundImage = width < 1200 ? banner2 : banner1;
    backgroundRef.current.style.backgroundImage = `url(${backgroundImage})`;
  }, [width]);

  return (
    <div className="text-[#1E2125] font-[400] ">
      <header className=" flex flex-col justify-center">
        {/* Navbar */}
        <div className="hidden max-sm:block">
          <span className=" flex justify-center ">
            <Navbar />
          </span>
        </div>
        <div className="  max-sm:hidden flex justify-center">
          <span className="w-screen flex justify-center ">
            <Navbar2 />
          </span>
        </div>
        {/* Top Header */}
        <div>
          <HeaderTop btnText={"Pogrebna podjetja"} topBanner={topBanner} />
        </div>
      </header>

      <body className="w-full flex flex-col items-center">
        {/* Section 1 */}
        <div className=" flex flex-col items-center  lg:w-[1280px] md:w-[744px] ">
          <div className="flex justify-center items-center py-16  gap-3">
            <div>
              <Select
                size="sm"
                label="Išči po krajih"
                className="lg:w-[227px] md:w-[372px] max-sm:w-[244.47px] h-fit  border-1 border-gray-400 rounded-md"
                style={{ backgroundColor: "white" }}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="hidden lg:block max-sm:block">
              <button className=" h-[48px] w-[48px] border-1 flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-[#F6F6F6] shadow-sm">
                <CiSearch />
              </button>
            </div>
            <div className="lg:hidden max-sm:hidden md:block">
              <button className=" h-[48px] w-[211px] border-1 flex justify-center items-center text-[16px] font-[400] rounded-lg bg-[#414141] text-[#F6F6F6] shadow-sm">
                Prikaži
              </button>
            </div>
          </div>
          {/* Cards Sub-Section*/}
          <div className=" flex flex-col items-center lg:w-[1088px] md:w-[744px] max-sm:w-[360px] ">
            <div className=" flex flex-col mb-20 gap-1 ">
              <h2 className="lg:text-[24px]  font-[#1E2125] font-[400] max-lg:hidden p-2">
                Zasavska regija
              </h2>
              <div className="flex md:gap-[40px] justify-center  lg:w-[1088px] md:w-[744px] mt-4  ">
                {/* Card */}
                <div className="  flex flex-col gap-[32px] ">
                  {data.map((profile) => (
                    <span
                      className=" rounded-md "
                      style={{ boxShadow: " 5px 5px 5px #c2c2c280" }}
                    >
                      <Card2
                        style={
                          "max-sm:flex-col  max-sm:items-center max-sm:pl-3 max-sm:pt-3"
                        }
                        imageStyle={
                          "lg:w-[230px] lg:h-[140px] md:w-[180px] md:h-[118px] max-sm:w-[245px] max-sm:h-[98.53px]"
                        }
                        roleStyle={"text-[#6F94CC]"}
                        profile={profile}
                      />
                    </span>
                  ))}
                </div>
                <div className="hidden lg:block">
                  <div className=" w-[286px] flex flex-col gap-[32px] text-[#414141] font-[100] text-[24px]">
                    <div className="flex  gap-2 justify-center items-center shadow-sm  w-[286px] h-[200px] border-1 border-gray-300  rounded-lg ">
                      Kmalu
                    </div>
                    <div className="flex gap-2 justify-center items-center shadow-sm  w-full h-[429px] border-1 border-gray-300  rounded-lg ">
                      Kmalu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full  bg-[#083545] flex justify-center lg:text-start max-sm:text-center md:text-center">
          <div className="relative text-[#D4D4D4] lg:w-[1280px] md:w-[744px] max-sm:w-[360px] lg:h-[269px] md:h-[280px] max-sm:h-[289px] max-sm:justify-center max-sm:items-center flex flex-col max-sm:gap-0 gap-5 md:gap-2 md:items-center md:justify-center lg:items-start">
            <p className="text-[40px] lg:absolute max-sm:text-[28px] lg:top-[60px] lg:left-[177px]  font-[400] text-[#DAEBF1] max-sm:h-[48px]">
              Sodelujmo!
            </p>
            <div className="flex lg:absolute flex-col max-sm:gap-3 lg:top-[122px] lg:left-[177px] md:gap-2  max-sm:w-[286.82px] ">
              <p className="text-[16px]  font-[400]  text-[#D4D4D4]">
                Imate ideje, vprašanja, predloge?
              </p>
              <p className="text-[16px]  font-[400] text-[#D4D4D4]">
                Kontaktirajte nas! Z veseljem vam bomo prisluhnili!
              </p>
            </div>
            <div className="my-3 lg:hidden">
              <Button
                style={
                  "py-[12px] px-[24px] to-[#FFFFFF] from-[#E3E8EC] text-[#1E2125] border-none"
                }
              >
                Kontaktirajte nas
              </Button>
            </div>
          </div>
        </div>

        {/* Section 3 Partners*/}
        <div className="py-10 bg-[#DAEBF1] w-full flex justify-center">
          <div className="lg:w-[1280px] md:w-[744px] lg:h-[574px] md:h-[819px] flex flex-col justify-center items-center gap-[24px]">
            <h3 className="text-[40px] text-[#083545] text-center py-4">
              Postani partner!
            </h3>
            <div className="flex gap-[24px] flex-wrap lg:flex-nowrap lg:w-[1068px] md:w-[615px] max-sm:w-[340px] max-sm:justify-center lg:justify-center ">
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
                  icon: icon3,
                  heading: "Cvetličarne",
                  line1:
                    "Naj bo vaša spletna predstavitev samo začetek našega širšega sodelovanja.",
                  line2: "Bodite na pravem mestu, ko vas rabijo.  ",
                }}
              />
              <Card4
                item={{
                  icon: icon2,
                  heading: "Oglaševalci in drugi",
                  line1:
                    "Ponujate produkte ali storitve, ki so lahko zanimive obiskovalcem naših strani?",
                  line2: "Stopite v stik z nami!",
                }}
              />
              <div className="lg:hidden max-sm:hidden">
                <div className="h-fit w-fit flex justify-center ">
                  <button className="shadow-md text-[#F6F6F6] bg-[#083545] w-[211px] h-[73px] rounded-[16px] border-[2px] border-white">
                    Stopimo skupaj
                  </button>
                </div>
              </div>
              <div className="hidden max-sm:block">
                <div className="h-fit w-fit flex justify-center ">
                  <button className="shadow-md text-[#F6F6F6]  text-[16px] bg-[#414141] px-[25px] py-[12px] rounded-[8px] ">
                    Kontaktirajte nas
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-full flex justify-center ">
                <Button
                  className="shadow-md "
                  bg1={"from-[#E3E8EC]"}
                  bg2={"to-[#FFFFFF]"}
                  padding={"p-[12px]"}
                  px={"px-[25px] border-none text-[16px]"}
                >
                  Kontaktirajte nas
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 Suponsers */}
        <div className="my-10 lg:w-[1280px] md:w-[744px] flex flex-col gap-5 items-center">
          <div className="flex flex-col items-center justify-center gap-[48px]">
            <p className="font-[600] text-[24px] max-sm:font-[400]">
              Sponsorji
            </p>
            <div className="flex gap-[80px] max-sm:gap-[48px] items-center ">
              <img className="h-fit max-sm:w-[120px]" src={Suponcer3} alt="" />
              <img className="h-fitmax-sm:w-[120px]" src={Suponcer2} alt="" />
              <img className="h-fit  max-sm:hidden" src={Suponcer1} alt="" />
            </div>
          </div>
        </div>
        {/* Section 5 Banner*/}
        <div
          className=" flex justify-center items-center  max-sm:hidden bg-cover lg:bg-[0px] md:bg-[-150px] bg-center w-full bg-no-repeat "
          // style={{ backgroundImage: `url('${banner}')` }}
          ref={backgroundRef}
        >
          <div className="relative flex justify-center items-center  max-sm:hidden bg-cover bg-center h-[284px] lg:w-[1280px] md:w-[744px]">
            <div className="absolute lg:left-[691px] md:left-[100px]  gap-[29px] flex flex-col  lg:items-end justify-center">
              <p className="hidden lg:block text-[40px] text-[400] lg:text-[#3C3E41] text-white">
                Lokalne cvetličarne
              </p>
              <p className="lg:hidden text-[40px] text-[400]  text-white">
                Poišči lokalne cvetličarne
              </p>
              <Select
                size={"sm"}
                style={{ backgroundColor: "white" }}
                label="Izberi kraj"
                className=" border-gray-300  w-[476px]"
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          {/* <img src={banner} alt="" /> */}
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
