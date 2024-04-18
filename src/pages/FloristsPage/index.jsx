import React, { useEffect, useRef, useState } from "react";
import Navbar2 from "../../components/Navbar/Navbar2";
import Navbar from "../../components/Navbar/Navbar";
import banner1 from "../../assets/images/flowersBanner.jpg";
import banner2 from "../../assets/images/flowerBanner3.jpeg";

import { FlowerCard, animals, profiles } from "./data";
import { Select, SelectItem } from "@nextui-org/react";
import { Card2, Card3, Card5 } from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import topBanner from "../../assets/images/topBanner2.jpg";
import { CiSearch } from "react-icons/ci";
import { Button2 } from "../../components/Button/Buttons";
import Sponcers from "../../components/Sponcers/Sponcers";
import Carousel from "../../components/Carousel/Carousel";

export default function FloristsListing() {
  const [banner, setBanner] = useState();
  const [width, setWidth] = useState();
  const backgroundRef = useRef(null);
  useEffect(() => {
    setWidth(window.innerWidth);
    if (window.innerWidth < 1200) {
      setBanner(banner1);
    } else if (window.innerWidth > 1200) {
      setBanner(banner);
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
    <div className="w-full text-[400]">
      {/* HEADER */}
      <header className="w-full ">
        {/* NAVBAR */}
        <div className="w-full flex flex-col items-center">
          {width < 800 ? <Navbar /> : <Navbar2 />}
        </div>
        {/* HEADER BACKGROUND IMAGE */}
        <div className="w-full">
          <HeaderTop btnText={"Cvetličarne"} topBanner={topBanner} />
        </div>
      </header>

      <body className="w-full flex flex-col items-center ">
        {/* Section 1 */}
        <div className="lg:w-[1280px] md:w-[744px] flex justify-center">
          <div className="lg:w-[1088px] md:w-[744px] flex flex-col my-20 gap-10">
            <div className="flex justify-between md:justify-center items-center flex-wrap ">
              <div className="flex gap-[16px] lg:w-fit   max-sm:w-full">
                <div className="lg:w-[225px] md:w-[372px]  h-[48px]">
                  <Select
                    size="sm"
                    label="Išči po krajih"
                    className="  border-[1px]  border-[#7C7C7C] rounded-md"
                    style={{ backgroundColor: "white", height: "48px" }}
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="lg:hidden ">
                  <button className="md:h-[48px]  md:w-[211px]  flex justify-center items-center text-[16px] rounded-lg bg-[#414141] text-white shadow-sm">
                    Prikaži
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-[16px] lg:w-[781px] md:w-[607px] ">
                <h2 className="text-[32px] text-[#1E2125]">Hitri izbor</h2>
                <div className="flex gap-[19px] flex-wrap ">
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
            <div className="flex gap-5 border-3">
              <div className="w-full flex flex-col gap-[32px]">
                {profiles.map((profile) => (
                  <span>
                    <Card5
                      profile={profile}
                      imageStyle={
                        "lg:w-[120px] lg:h-[140px] md:w-[95px] md:h-[130px] max-sm:w-[245px] max-sm:h-[98.53px]"
                      }
                    />
                  </span>
                ))}
              </div>
              <div className=" w-[286px] text-[24px] font-[100] text-[#414141] max-sm:hidden max-lg:hidden mt-1 flex flex-col gap-[32px]">
                <div className="flex  w-[286px] h-[200px]  gap-2 justify-center items-center shadow-sm  border-[1px] border-gray-300  rounded-[8px]">
                  Kmalu
                </div>
                <div className="flex  gap-2 justify-center items-center shadow-sm  w-[286px] h-[429px] border-[1px] border-gray-300  rounded-[8px]">
                  Kmalu
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 Flower Cards*/}
        <div className="bg-[#F2F1EA] w-full  h-[908px] items-center flex justify-center py-10 text-[400]">
          {width > 480 ? (
            <div className="lg:w-[1280px] md:w-[744px]  h-[788px] flex flex-col items-center gap-[48px] ">
              <span className="text-center  gap-[8px] w-[688px]">
                <p className="text-[40px] text-[#000000] ">
                  Prednosti lokalnih cvetličarn
                </p>
                <p className="text-[24px] font-[600]">
                  (napram cvetju iz velikih trgovin)
                </p>
              </span>
              <div className="relative flex gap-[50px] lg:w-[1087px] md:w-[666px] md:gap-[18px]">
                <Card3 info={FlowerCard[0]}>
                  <h1
                    className="absolute top-[38px] left-[13.5px] text-[128px]  font-[200] w-[171px] h-[129px]  text-center text-[#EDF1F3]"
                    style={{
                      lineHeight: "150px",
                      textShadow: " 0px 4px 4px #006598",
                    }}
                  >
                    01
                  </h1>
                  <div
                    className="absolute top-[199px] left-[13.5px] w-full flex justify-center "
                    style={{ lineHeight: "16.41px" }}
                  >
                    <div className=" ">
                      {" "}
                      <span className="flex flex-col gap-[24px] px-2 lg:w-[302px] ">
                        <h3 className="font-semibold text-[16px] text-[#1E2125]">
                          Znanja in dolgoletne izkušnje
                        </h3>
                        <p className="text-[14px] hidden lg:block text-[200] text-[#414141] ">
                          Pogosto premalo izpostavljena prednost lokalnih
                          cvetličarjev. So eksperti na svojem področju, ki radi
                          delijo svoje znanje in postrežejo nam z najboljšimi
                          nasveti, kar v veliki trgovini ni možno.
                        </p>
                      </span>
                    </div>
                  </div>
                </Card3>
                <Card3 info={FlowerCard[1]}>
                  <h1
                    className="absolute top-[38px] left-[13.5px] text-[128px]  font-[200] w-[171px] h-[129px]  text-center text-[#EDF1F3]"
                    style={{
                      lineHeight: "150px",
                      textShadow: " 0px 4px 4px #006598",
                    }}
                  >
                    02
                  </h1>
                  <div className=" w-full flex justify-center  ">
                    <div className=" h-full">
                      <span className="flex lg:items-end h-full  md:items-center">
                        <div className="absolute top-[399px] left-[13.5px] bg-white bg-opacity-50 flex flex-col justify-center p-3 sm:p-2  gap-[24px] lg:w-[302px] lg:h-[144px]">
                          <h1
                            className="font-semibold text-[16px]  text-gray-600"
                            style={{ lineHeight: "18.75px" }}
                          >
                            Obstojnost cvetja je praviloma večja
                          </h1>
                          <p
                            className="text-gray-500 hidden lg:block text-[200] w-[276px] text-[14px]"
                            style={{ lineHeight: "16.41px" }}
                          >
                            Cvetličarji namenjajo cvetju vso potrebno nego, da
                            to ostane sveže in zdravo, ustrezno je
                            prezračevanje, osvetljenost, vlažnost v prostoru.
                            Njihove rože izžarevajo drugače in to se zazna.
                          </p>
                        </div>
                      </span>
                    </div>
                  </div>
                </Card3>
                <Card3 info={FlowerCard[2]}>
                  <h1
                    className="absolute top-[38px] left-[13.5px] text-[128px]  font-[200] w-[171px] h-[129px]  text-center text-[#EDF1F3]"
                    style={{
                      lineHeight: "150px",
                      textShadow: " 0px 4px 4px #006598",
                    }}
                  >
                    03
                  </h1>
                  <div className="w-full flex justify-center h-80">
                    <div className=" h-full">
                      <span className="flex absolute top-[204px] left-[13.5px] flex-col gap-[24px] px-2   lg:w-[302px] lg:h-[151px]">
                        <h3 className="font-semibold text-[16px] text-[#1E2125]">
                          Cvetje prilagojeno vsaki priložnosti
                        </h3>
                        <p
                          className="text-[14px] hidden lg:block text-[200] text-[#414141]"
                          style={{ lineHeight: "16.41px" }}
                        >
                          Pogosto premalo izpostavljena prednost lokalnih
                          cvetličarjev. So eksperti na svojem področju, ki radi
                          delijo svoje znanje in postrežejo nam z najboljšimi
                          nasveti, kar v veliki trgovini ni možno.
                        </p>
                      </span>
                    </div>
                  </div>
                </Card3>
              </div>
              <div className="">
                <p className="text-[40px]">Podprimo lokalno!</p>
              </div>
            </div>
          ) : (
            <ResponsiveCard />
          )}
        </div>

        {/* Section 3 Banner*/}
        <div className=" w-full">
          <div
            className=" bg-cover bg-center h-[284px] flex flex-col items-center justify-center text-white gap-10"
            style={{ backgroundImage: `url('${banner}')` }}
            ref={backgroundRef}
          >
            <div className="lg:w-[1280px] md:w-[745px] flex justify-end">
              <div className="flex flex-col items-center gap-5 h-[178.5px] border-3">
                <span className="text-center lg:w-[476px] md:w-fit h-[133px]">
                  <p className="text-[40px] font-thin max-sm:text-[26px]">
                    Imate cvetličarno?
                  </p>
                  <h3 className="font-[700] text-[24px]">Sodelujmo!</h3>
                </span>
                <button className="bg-gradient-to-r text-[20px]  text-[#1E2125] px-5 py-2 rounded-md from-[#E3E8EC] to-[#FFFFFF]">
                  Naprej
                </button>
              </div>
            </div>
          </div>
          {/* <img className="max-lg:h-64 " src={banner} alt="" /> */}
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

const ResponsiveCard = () => {
  return (
    <div className="w-5/6 flex flex-col items-center">
      <span className="text-center pb-10">
        <p className="text-[28px]">Prednosti lokalnih cvetličarn</p>
        <p className="text-[16px] font-semibold">
          (napram cvetju iz velikih trgovin)
        </p>
      </span>
      <Carousel
        className="w-full flex justify-around"
        style={"border-none flex-col"}
        circleStyle={"flex-row items-end justify-center gap-1 "}
      >
        <Card3 info={FlowerCard[0]}>
          <span className="flex flex-col gap-3">
            <h3 className="font-semibold text-[16px] ">
              Znanja in dolgoletne izkušnje
            </h3>
            <p className="text-[12px]  text-gray-700 ">
              Pogosto premalo izpostavljena prednost lokalnih cvetličarjev. So
              eksperti na svojem področju, ki radi delijo svoje znanje in
              postrežejo nam z najboljšimi nasveti, kar v veliki trgovini ni
              možno.
            </p>
          </span>
        </Card3>
        <Card3 info={FlowerCard[1]}>
          <span className="flex  h-full items-end pb-10">
            <div className="bg-white h-fit bg-opacity-50 p-3 sm:p-2 rounded-md">
              <h1 className="font-semibold text-[16px]  text-gray-600">
                Obstojnost cvetja je praviloma večja
              </h1>
              <p className="text-gray-500 text-[12px]">
                Cvetličarji namenjajo cvetju vso potrebno nego, da to ostane
                sveže in zdravo, ustrezno je prezračevanje, osvetljenost,
                vlažnost v prostoru. Njihove rože izžarevajo drugače in to se
                zazna.
              </p>
            </div>
          </span>
        </Card3>
        <Card3 info={FlowerCard[2]}>
          <span className="flex flex-col gap-3">
            <h3 className="font-semibold text-[16px]">
              Cvetje prilagojeno vsaki priložnosti
            </h3>
            <p className="text-[12px] text-gray-700">
              Pogosto premalo izpostavljena prednost lokalnih cvetličarjev. So
              eksperti na svojem področju, ki radi delijo svoje znanje in
              postrežejo nam z najboljšimi nasveti, kar v veliki trgovini ni
              možno.
            </p>
          </span>
        </Card3>
      </Carousel>
      <div className="mt-10">
        <p className="text-[28px]">Podprimo lokalno!</p>
      </div>
    </div>
  );
};

// const Button = (props) => {
//   return (
//     <button className="italic bg-gradient-to-r from-[#E3E8EC] to-[#FFFFFF] border-1 border-gray-300 rounded-sm px-2 text-[12px] font-semibold text-gray-800">
//       {props.children}
//     </button>
//   );
// };
