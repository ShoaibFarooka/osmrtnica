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
import { Carousel2 } from "../../components/Carousel/Carousel";

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
          <HeaderTop
            btnText={"Cvetličarne"}
            btnStyle={"w-[224px] h-[79px] max-sm:w-[178px] max-sm:h-[65px]"}
            topBanner={topBanner}
          />
        </div>
      </header>

      <body className="w-full flex flex-col items-center ">
        {/* Section 1 */}
        <div className="lg:w-[1280px] md:w-[744px] flex justify-center">
          <div className="lg:w-[1088px] md:w-[744px] flex flex-col my-20 gap-12">
            <div className="flex lg:justify-between justify-center md:gap-14 items-center flex-wrap ">
              <div className="flex gap-[16px] lg:w-fit   max-sm:w-[311px]">
                <div className="lg:w-[225px] md:w-[372px] max-sm:w-[244.47px] h-[48px]">
                  <Select
                    size="sm"
                    label="Išči po krajih"
                    className="  border-[1px]  border-[#7C7C7C] rounded-[8px]"
                    style={{ backgroundColor: "white", height: "48px" }}
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="hidden md:block">
                  <button className="md:h-[48px]  md:w-[211px]  flex justify-center items-center text-[16px] rounded-lg bg-[#414141] text-white shadow-sm">
                    Prikaži
                  </button>
                </div>
                <div className="hidden max-sm:block">
                  <button className="h-[48px] w-[48px] flex justify-center items-center text-[24px] rounded-lg bg-[#414141] text-white shadow-sm">
                    <CiSearch />
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-[16px] mt-12  lg:w-[781px] md:w-[607px] max-sm:w-[308px] ">
                <h2 className="lg:text-[32px] text-[24px] text-[#1E2125]">
                  Hitri izbor:
                </h2>
                <div className="flex gap-[16px] lg:gap-[19px]    lg:flex-nowrap flex-wrap lg:w-[781px] md:w-[478px] ">
                  <Button2 styles={"w-[78px] h-[24px]"}>Ljubljana</Button2>
                  <Button2 styles={"w-[68px] h-[24px]"}>Maribor</Button2>
                  <Button2 styles={"w-[49px] h-[24px]"}>Celje</Button2>
                  <Button2 styles={"w-[51px] h-[24px]"}>Kranj</Button2>
                  <Button2 styles={"w-[55px] h-[24px]"}>Koper</Button2>
                  <Button2 styles={"w-[95px] h-[24px]"}>Novo Mesto</Button2>
                  <Button2 styles={"w-[73px] h-[24px]"}>Domžale</Button2>
                  <Button2 styles={"w-[64px] h-[24px]"}>Velenje</Button2>
                  <Button2 styles={"w-[96px] h-[24px]"}>Nova Gorica</Button2>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-full flex flex-col gap-[32px] items-center">
                {profiles.map((profile) => (
                  <span>
                    <Card5
                      profile={profile}
                      imageStyle={
                        "lg:w-[120px] lg:h-[140px] md:w-[95px] md:h-[130px] max-sm:w-[72px] max-sm:h-[98.53px]"
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
        <div className="bg-[#F2F1EA] max-sm:bg-white w-full  lg:h-[908px] md:h-[700px]  items-center flex justify-center  text-[400]">
          {window.innerWidth > 600 ? (
            <div className="lg:w-[1280px] md:w-[744px]  lg:h-[788px] md:h-[585px] flex flex-col items-center gap-[48px] ">
              <span className="text-center  gap-[8px] w-[688px] md:h-[84px]">
                <p className="text-[40px] text-[#000000] ">
                  Prednosti lokalnih cvetličarn
                </p>
                <p className="text-[24px] font-[600]">
                  (napram cvetju iz velikih trgovin)
                </p>
              </span>
              <div className="relative flex lg:gap-[50px] md:gap-[18px]">
                <Card3 info={FlowerCard[0]}>
                  <h1
                    className="absolute lg:top-[38px] md:top-[9px] lg:left-[13.5px]  lg:text-[128px] md:text-[80px]  font-[200] lg:w-[171px] md:w-[132.61px] lg:h-[129px] md:h-[100.04px]  text-center text-[#EDF1F3]"
                    style={{
                      lineHeight: window.innerWidth >= 1200 ? "150px" : "100px",
                      textShadow: " 0px 4px 4px #006598",
                    }}
                  >
                    01
                  </h1>
                  <div
                    className="absolute lg:top-[199px] md:top-[108px] left-[13.5px]  w-full flex justify-center "
                    style={{ lineHeight: "16.41px" }}
                  >
                    <div className=" ">
                      {" "}
                      <span className="flex flex-col gap-[24px] px-2 lg:w-[302px] ">
                        <h3
                          className="font-[500] text-[16px] text-[#1E2125]"
                          style={{ lineHeight: "18.75px" }}
                        >
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
                    className="absolute hidden lg:block lg:top-[38px] md:top-[9px] md:left-[13.5px]  lg:text-[128px] md:text-[80px]  font-[200] lg:w-[171px] md:w-[132.61px] lg:h-[129px] md:h-[100.04px]  text-center text-[#EDF1F3]"
                    style={{
                      lineHeight: window.innerWidth >= 1200 ? "150px" : "100px",
                      textShadow: " 0px 4px 4px #006598",
                    }}
                  >
                    02
                  </h1>
                  <div className=" w-full flex justify-center  ">
                    <span className="flex lg:items-end h-full  md:items-center">
                      <div className="absolute  lg:top-[399px] md:top-[179px]  left-[13.5px] bg-[#ffffff80] bg-opacity-50 flex flex-col md:items-center lg:justify-center sm:p-2  gap-[24px] lg:w-[302px] md:w-[186px] lg:h-[144px] md:h-[166px]">
                        <h1
                          className="absolute lg:hidden md:top-[3px] md:left-[0px]  md:text-[80px]  font-[200]  md:w-[132.61px] md:h-[100.04px]  text-center text-[#EDF1F3]"
                          style={{
                            lineHeight:
                              window.innerWidth >= 1200 ? "150px" : "100px",
                            textShadow: " 0px 4px 4px #006598",
                          }}
                        >
                          02
                        </h1>
                        <h3
                          className="font-[500] text-[16px] lg:w-[275px]  text-[#1E2125] md:w-[149px] md:h-[150px] flex items-end"
                          style={{ lineHeight: "18.75px" }}
                        >
                          Obstojnost cvetja je praviloma večja
                        </h3>
                        <p
                          className="text-[#414141] hidden lg:block text-[200] w-[276px] text-[14px]"
                          style={{ lineHeight: "16.41px" }}
                        >
                          Cvetličarji namenjajo cvetju vso potrebno nego, da to
                          ostane sveže in zdravo, ustrezno je prezračevanje,
                          osvetljenost, vlažnost v prostoru. Njihove rože
                          izžarevajo drugače in to se zazna.
                        </p>
                      </div>
                    </span>
                  </div>
                </Card3>
                <Card3 info={FlowerCard[2]}>
                  <h1
                    className="absolute lg:top-[38px] md:top-[9px] lg:left-[13.5px]  lg:text-[128px] md:text-[80px]  font-[200] lg:w-[171px] md:w-[132.61px] lg:h-[129px] md:h-[100.04px]  text-center text-[#EDF1F3]"
                    style={{
                      lineHeight: window.innerWidth >= 1200 ? "150px" : "100px",
                      textShadow: " 0px 4px 4px #006598",
                    }}
                  >
                    03
                  </h1>
                  <div className="w-full flex justify-center h-80">
                    <div className=" h-full">
                      <span className="flex absolute lg:top-[204px] md:top-[106px] left-[13.5px] flex-col gap-[24px] px-2   lg:w-[302px] lg:h-[151px]">
                        <h3
                          className="font-[500] text-[16px] text-[#1E2125]"
                          style={{ lineHeight: "18.75px" }}
                        >
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
                <p className="lg:text-[40px] md:text-[32px]">
                  Podprimo lokalno!
                </p>
              </div>
            </div>
          ) : (
            <ResponsiveCard />
          )}
        </div>

        {/* Section 3 Banner*/}
        <div className=" w-full">
          <div
            className=" bg-cover bg-center h-[284px] flex flex-col items-center justify-center md:text-[#1E2125] lg:text-white gap-10"
            style={{ backgroundImage: `url('${banner}')` }}
            ref={backgroundRef}
          >
            <div className="lg:w-[1280px] md:w-[745px] max-sm:w-[360px] flex justify-end">
              <div className="flex flex-col items-center gap-7 h-[178.5px] text-[#1E2125]">
                <span className="text-center  lg:w-[476px] md:w-fit max-sm:h-fit h-[133px] ">
                  <p className="text-[40px] max-sm:text-[28px] ">
                    Imate cvetličarno?
                  </p>
                  <h3 className="font-[700] text-[24px]">Sodelujmo!</h3>
                </span>
                <button
                  className="bg-gradient-to-r text-[20px]    text-[#1E2125] w-[107px] h-[47px] rounded-md from-[#E3E8EC] to-[#FFFFFF]"
                  style={{
                    boxShadow:
                      window.innerWidth <= 1200
                        ? "5px 5px 10px #c2c2c280 ,-3px -3px 10px  #FFFFFF"
                        : "",
                  }}
                >
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
      <span className="text-center pb-10 text-[#1E2125]">
        <p className="text-[28px]">Prednosti lokalnih cvetličarn</p>
        <p className="text-[16px] text-[400]">
          (napram cvetju iz velikih trgovin)
        </p>
      </span>
      <Carousel2
        className="w-full flex justify-around"
        style={"border-none "}
        childrenStyle={"flex justify-center"}
      >
        <Card3 info={FlowerCard[0]}>
          <h1
            className="absolute lg:top-[38px] md:top-[9px]  lg:left-[13.5px]  lg:text-[128px] md:text-[80px] max-sm:top-[29.47px] max-sm:left-[10.47px] max-sm:text-[100px]  font-[200] lg:w-[171px] md:w-[132.61px] max-sm:w-[132.61px] lg:h-[129px] md:h-[100.04px]  text-center text-[#EDF1F3]"
            style={{
              lineHeight: window.innerWidth >= 1200 ? "150px" : "100px",
              textShadow: " 0px 4px 4px #006598",
            }}
          >
            01
          </h1>
          <div
            className="absolute lg:top-[199px] md:top-[108px] max-sm:w-[234.21px] max-sm:top-[154.33px] left-[13.5px] max-sm:left-[10.47px] w-full flex justify-center "
            style={{ lineHeight: "16.41px" }}
          >
            {" "}
            <span className="flex flex-col gap-[24px] max-sm:gap-[18.61px] lg:w-[302px] max-sm:w-[214.04px] ">
              <h3
                className="font-[500] text-[16px] text-[#1E2125]"
                style={{ lineHeight: "18.75px" }}
              >
                Znanja in dolgoletne izkušnje
              </h3>
              <p
                className="text-[14px] hidden lg:block max-sm:block text-[200] text-[#414141] "
                style={{ lineHeight: "16.41px" }}
              >
                Pogosto premalo izpostavljena prednost lokalnih cvetličarjev. So
                eksperti na svojem področju, ki radi delijo svoje znanje in
                postrežejo nam z najboljšimi nasveti, kar v veliki trgovini ni
                možno.
              </p>
            </span>
          </div>
        </Card3>
        <Card3 info={FlowerCard[1]}>
          <h1
            className="absolute   max-sm:top-[29.47px] max-sm:left-[10.47px] max-sm:text-[100px]  font-[200]  max-sm:w-[132.61px] text-center text-[#EDF1F3]"
            style={{
              lineHeight: "100px",
              textShadow: " 0px 4px 4px #006598",
            }}
          >
            02
          </h1>
          <div className=" w-full flex justify-center  ">
            <span className="flex h-full ">
              <div className="absolute left-[10.33px]  top-[217.15px] bg-[#ffffff80] w-[234px] h-[197px] bg-opacity-50 flex flex-col items-center gap-[18.61px]">
                <h3
                  className="font-[500] text-[16px]  h-[72px] text-[#1E2125] w-[216.27px] flex items-end"
                  style={{ lineHeight: "18.75px" }}
                >
                  Obstojnost cvetja je praviloma večja
                </h3>
                <p
                  className="text-[#414141] md:hidden text-[200] w-[214.04px] text-[14px]"
                  style={{ lineHeight: "16.41px" }}
                >
                  Cvetličarji namenjajo cvetju vso potrebno nego, da to ostane
                  sveže in zdravo, ustrezno je prezračevanje, osvetljenost,
                  vlažnost v prostoru. Njihove rože izžarevajo drugače in to se
                  zazna.
                </p>
              </div>
            </span>
          </div>
        </Card3>
        <Card3 info={FlowerCard[2]}>
          <h1
            className="absolute lg:top-[38px] md:top-[9px]  lg:left-[13.5px]  lg:text-[128px] md:text-[80px] max-sm:top-[29.47px] max-sm:left-[10.47px] max-sm:text-[100px]  font-[200] lg:w-[171px] md:w-[132.61px] max-sm:w-[132.61px] lg:h-[129px] md:h-[100.04px]  text-center text-[#EDF1F3]"
            style={{
              lineHeight: window.innerWidth >= 1200 ? "150px" : "100px",
              textShadow: " 0px 4px 4px #006598",
            }}
          >
            03
          </h1>
          <div
            className="absolute lg:top-[199px] md:top-[108px] max-sm:w-[234.21px] max-sm:top-[154.33px] left-[13.5px] max-sm:left-[10.47px] w-full flex justify-center "
            style={{ lineHeight: "16.41px" }}
          >
            {" "}
            <span className="flex flex-col gap-[24px] max-sm:gap-[18.61px] lg:w-[302px] max-sm:w-[214.04px] ">
              <h3
                className="font-[500] text-[16px] text-[#1E2125]"
                style={{ lineHeight: "18.75px" }}
              >
                Cvetje prilagojeno vsaki priložnosti
              </h3>
              <p
                className="text-[14px] hidden lg:block max-sm:block text-[200] text-[#414141] "
                style={{ lineHeight: "16.41px" }}
              >
                Dolgoletne izkušnje se kažejo v vsaki njihovi kreaciji, včasih
                tudi umetniškem pridihu, pogosto znajo cvetje povezati v
                čudovite zgodbe. Nasvet: primerjajte vonj cvetja v cvetličarni
                in trgovini.
              </p>
            </span>
          </div>
          {/* <div className="w-full flex justify-center h-80">
            <div className=" h-full">
              <span className="flex absolute lg:top-[204px] md:top-[106px] left-[13.5px] flex-col gap-[24px] px-2   lg:w-[302px] lg:h-[151px]">
                <h3
                  className="font-[500] text-[16px] text-[#1E2125]"
                  style={{ lineHeight: "18.75px" }}
                >
                  Cvetje prilagojeno vsaki priložnosti
                </h3>
                <p
                  className="text-[14px] md:hidden  text-[200] text-[#414141]"
                  style={{ lineHeight: "16.41px" }}
                >
                 Dolgoletne izkušnje  se kažejo v vsaki njihovi kreaciji, včasih tudi umetniškem pridihu, pogosto znajo cvetje povezati v čudovite zgodbe. Nasvet:  primerjajte vonj cvetja v cvetličarni in trgovini.  
                </p>
              </span>
            </div>
          </div> */}
        </Card3>
      </Carousel2>
      {/* <div className="mt-10">
        <p className="text-[28px]">Podprimo lokalno!</p>
      </div> */}
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
