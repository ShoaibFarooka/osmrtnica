import React, { useEffect, useRef, useState } from "react";
import Navbar2 from "../../components/Navbar/Navbar2";
import topBannerImg from "../../assets/svgs/Funeral Company/topBanner.svg";
import Komunala from "../../assets/images/Funeral Company/Komunala.jpeg";
import img1 from "../../assets/images/Funeral Company/img1.jpeg";
import img2 from "../../assets/images/Funeral Company/img2.jpeg";
import img4 from "../../assets/images/Funeral Company/displayImg3.jpg";

import background from "../../assets/images/Funeral Company/background.jpg";
import leftArow from "../../assets/svgs/Funeral Company/leftArrow.svg";
import rightArrow from "../../assets/svgs/Funeral Company/rightArrow.svg";
import { CiFacebook, CiSearch } from "react-icons/ci";
import { Card } from "../../components/Card/Card";
import { profiles } from "../HomePage/data";
import Pagenation from "../../components/Pagenation/Pagenation";
import { dropdownData, images, tableData, tableData2 } from "../data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxCross2, RxEnvelopeClosed } from "react-icons/rx";
import { FiPhone, FiPlus } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";

export default function FuneralCompany() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [width, setWidth] = useState();
  const [dropdownInfo, setDropdownInfo] = useState([]);
  const [selectedDropdown, setSelectedDropdown] = useState(0);
  const backgroundRef = useRef(null);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);
  useEffect(() => {
    setDropdownInfo(dropdownData);
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
    const backgroundImage = width > 1281 ? background : "";
    backgroundRef.current.style.backgroundImage = `url('${backgroundImage}')`;
  }, [width]);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className="w-full text-[400] leading-[24px]   text-[#414141] text-[16px] lg:bg-[#F5F7F9] md:bg-white">
      <header className="relative flex  flex-col items-center ">
        {/* Navbar */}
        <div className="bg-white w-full border ">
          <Navbar2 />
        </div>

        {/* TopBanner */}

        <div className="w-full flex flex-col items-center bg-gradient-to-l to-[#E8F0F5] from-[#EBEDEF] ">
          <div className="relative lg:w-[1280px] md:w-[744px] lg:h-[865px] md:h-[826px]">
            {/* Set Background image */}
            <div
              className="absolute bg-cover bg-center top-[0px] lg:w-[1280px] md:w-[744px] lg:h-[300px] md:h-[220px]"
              style={{ backgroundImage: `url('${topBannerImg}')` }}
            />

            <div className="absolute lg:top-[197.37px] md:top-[152px] lg:left-[135.5px] md:left-[72px] border-[2px] border-[#EDF1F3] bg-white rounded-[16px] lg:w-[1009px] md:w-[600px] lg:h-[185px] md:h-[273px]">
              <div className="relative text-[#1E2125] lg:w-[1009px] md:w-[600px] lg:h-[185px] md:h-[273px]">
                <div className="absolute lg:top-[21.63px] md:top-[24px] lg:left-[44.5px] md:left-[30px] flex items-center  w-[200px] h-[82px]">
                  <img src={Komunala} alt="" className=" w-[200px] " />
                </div>
                <p className="absolute text-[24px] font-[600] lg:top-[54.63px] md:top-[42.92px] lg:left-[296.5px] left-[295px]">
                  Pogrebni zavod Trbovlje
                </p>
                <div className="absolute lg:top-[40.63px] md:top-[189.92px] lg:left-[871.5px] md:left-[482px] flex gap-[8px]  w-[104px] h-[48px] ">
                  <div
                    className=" w-[48px] h-[48px] rounded-[8px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                  >
                    <TfiWorld className="h-[20px] w-[20px] " />
                  </div>
                  <div
                    className=" w-[48px] h-[48px] rounded-[8px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                  >
                    <CiFacebook className="h-[20px] w-[20px] " />
                  </div>
                </div>

                <div className="absolute lg:flex-nowrap md:flex-wrap lg:left-[44.5px] md:left-[47px] lg:top-[114.63px] md:top-[137.92px] lg:w-[962px] md:w-[553px] lg:h-[40px] md:h-[100px] items-center  flex gap-[24px]">
                  {/* Address */}
                  <div className="">
                    <p className="text-[14px] leading-[16.41px] text-[#939393]">
                      NASLOV
                    </p>
                    <p className="text-[16px] w-[202px] ">
                      Savinjska cesta 11a, Trbovlje
                    </p>
                  </div>
                  <hr className="w-[21.33px] border-[#D4D4D4] border-[1px] rotate-[-90deg]" />

                  {/* Email */}
                  <div className="">
                    <p className="text-[14px] leading-[16.41px] text-[#939393]">
                      Email
                    </p>
                    <p className="text-[16px] w-[259px]">
                      javno.podjetje@komunala-trbovlje.si
                    </p>
                  </div>
                  <hr className="w-[21.33px] hidden lg:block border-[#D4D4D4] border-[1px] rotate-[-90deg]" />

                  {/* Phone */}
                  <div className="">
                    <p className="text-[14px] leading-[16.41px] text-[#939393]">
                      TELEFON
                    </p>
                    <p className="text-[16px] w-[104px]">(03) 56 53 126</p>
                  </div>
                  <hr className="w-[21.33px] border-[#D4D4D4] border-[1px] rotate-[-90deg]" />

                  {/* Website */}
                  <div className=" ">
                    <p className="text-[14px] leading-[16.41px] text-[#939393]">
                      WEBSITE
                    </p>
                    <p className="text-[16px] w-[253px]">
                      www.komunala-trbovlje.si
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Predstavitev text */}
            <div className="absolute flex flex-col justify-center gap-[16px] lg:top-[472px] md:top-[519px] lg:left-[162px] md:left-[72px] lg:h-[334px] lg:w-[452px] ">
              <h3 className="text-[40px] leading-[46.88px]">Predstavitev</h3>
              <p className=" leading-[24px] lg:w-[432px] md:w-[276px]">
                Komunala Trbovlje v okviru pogrebnega zavoda izvaja pogrebno in
                pokopališko dejavnost. Delovni čas zavoda je od ponedeljka do
                petka med 7. in 15. uro v letnem času oziroma med 6. in 14. uro
                v času med 1. 6. in 31. 8.
              </p>
            </div>
            {/* images */}

            <div>
              <img
                src={img1}
                className="absolute lg:top-[509px] md:top-[542.47px] lg:left-[756.79px] md:left-[405.25px] lg:w-[361.21px] md:w-[260.98px] lg:h-[250px] md:h-[180.63px] rounded-[8px] border-[3px] border-white"
                alt=""
              />
              <img
                src={img2}
                className="absolute lg:top-[648px] md:top-[642.9px] z-20 lg:left-[708px] md:left-[370px] lg:w-[216.72px] md:w-[156.59px] lg:h-[150px] md:h-[108.38px] rounded-[8px] border-[3px] border-white"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>

      <main className="w-full flex flex-col items-center ">
        {/* //////////////SECTION 1 Profile Card Display and other ///////////*/}

        <div className="lg:w-[1280px] md:w-[744px] lg:h-[1681px] md:h-[2214px] flex flex-col items-center md:border-b-[1px]">
          {/* Card */}
          <div className="absolute lg:w-[956px] md:w-[466px] lg:top-[1021.58px] md:top-[958px] lg:h-[789px] md:h-[1371px] flex flex-col items-center gap-[48px]   ">
            <div className="flex flex-col gap-[16px]">
              <p className="text-[40px] text-[#1E2125]">Zadnje osmrtnice</p>
              <p className="text-[16px]">
                Pregled zadnjih osmrtnic v našem kraju{" "}
              </p>
            </div>

            <div className="lg:w-[956px] lg:h-[558px] md:h-[1140px] flex flex-wrap gap-[24px]">
              {profiles.slice(0, 6).map((data) => (
                <div>
                  <Card profile={data} />
                </div>
              ))}
            </div>
            <dir className="">
              <Pagenation totalItems={10} itemsPerPage={4} />
            </dir>
          </div>
          <div className="absolute lg:hidden top-[2391px] w-full border-t-[1px] border-[#D4D4D4]" />
          {/* Searches */}
          <div className="absolute flex flex-col lg:top-[1914px] md:top-[2426px] lg:w-[1087px] md:w-[598px] h-[159px] gap-[32px]">
            <p className="text-[#1E2125] text-[40px] leading-[46.88px] w-[501px] text-end">
              Pogrebi v prihodnjih dneh
            </p>
            <div className="lg:w-[997px] md:w-[590px] flex gap-[24px] justify-end">
              <div className="flex lg:gap-[16px] md:gap-[24px] ">
                <input
                  type="text"
                  placeholder="Išči po imenu"
                  className="h-[48px] lg:w-[380px] md:w-[490px] rounded-[8px] border-[1px] border-[#7C7C7C] placeholder:px-[24px] placeholder::py-[12px]"
                />
                <button
                  className="lg:w-[48px] md:w-[84px] h-[48px] flex justify-center items-center text-[24px] rounded-lg bg-gradient-to-l from-[#FFFFFF] to-[#E3E8EC] text-[#414141]"
                  style={{
                    boxShadow:
                      "-3px -1px 10px 0px #FFFFFF, 1px 3px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <CiSearch />
                </button>
              </div>
              <div className="hidden lg:block">
                <div className=" flex gap-[16px]">
                  <input
                    type="text"
                    placeholder="Išči po pokopališču"
                    className="h-[48px] w-[380px] rounded-[8px] border-[1px] border-[#7C7C7C] placeholder:px-[24px] placeholder::py-[12px]"
                  />
                  <button
                    className="w-[48px] h-[48px] flex justify-center items-center text-[24px] rounded-lg bg-gradient-to-l from-[#FFFFFF] to-[#E3E8EC] text-[#414141]"
                    style={{
                      boxShadow:
                        "-3px -1px 10px 0px #FFFFFF, 1px 3px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <CiSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="absolute flex justify-between  lg:w-[1089.98px] md:w-[598px] h-[530px] lg:top-[2094px] md:top-[2601px] ">
            <img
              src={leftArow}
              className="w-[25px] hidden lg:block h-[59.05px] pt-[16px]"
              alt=""
            />
            <div className=" flex justify-center">
              <table className="lg:w-[420px] md:w-[586px] font-[300] lg:h-[445px] md:h-[445px] border-y-[1px] bg-[#CAF0F8] border-[#C3C6C8]">
                <thead>
                  <th className="relative h-[89px] border-t-[1px] border-[#C3C6C8] w-full">
                    <td className="absolute text-[28px] text-[#000000] font-[300] leading-[24px] top-[33px] left-[27px]">
                      Torek, 04.01.
                    </td>
                    <td className="absolute lg:hidden flex gap-[56px] top-[22px] left-[414px]">
                      <button
                        // onClick={() => handlePageChange(currentPage - 1)}
                        // disabled={currentPage === 1}
                        className=" w-[48px] h-[48px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center rounded-[8px]"
                        style={{
                          boxShadow:
                            "-3px -1px 10px  0px #FFFFFF, 1px 3px 4px #00000040",
                        }}
                      >
                        <IoIosArrowBack />
                      </button>
                      <button
                        // onClick={() => handlePageChange(currentPage + 1)}
                        style={{
                          boxShadow:
                            "-3px -1px 10px  0px #FFFFFF, 1px 3px 4px #00000040",
                        }}
                        className=" w-[48px] h-[48px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center rounded-[8px]"
                        // disabled={currentPage === totalPages}
                      >
                        <IoIosArrowForward />
                      </button>
                    </td>
                  </th>
                </thead>
                <tbody className="flex flex-col">
                  {tableData.map((item) => (
                    <tr className="relative h-[89px] border-[#C3C6C8] border-t-[1px] w-full">
                      <td className="absolute top-[33px] left-[27px] flex gap-[22px] leading-[24px] items-center">
                        <span className="text-[24px] text-[#333333]">
                          {item.time}{" "}
                        </span>{" "}
                        <span className="text-[18px] text-[#000000]">
                          {item.text}
                        </span>
                      </td>
                      <td className="absolute top-[33px] lg:left-[376px] md:left-[530px]">
                        <IoIosArrowForward />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="hidden lg:block">
              <table className="w-[420px] font-[300] h-[445px] border-y-[1px] bg-[#FFE5B4] border-[#C3C6C8]">
                <thead>
                  <th className="relative h-[89px] border-t-[1px] border-[#C3C6C8] w-full">
                    <td className="absolute text-[28px] text-[#000000]  font-[300] leading-[24px] top-[33px] left-[27px]">
                      Sreda, 05.01.
                    </td>
                    <td className="absolute lg:hidden flex gap-[56px] top-[22px] left-[414px]">
                      <button
                        // onClick={() => handlePageChange(currentPage - 1)}
                        // disabled={currentPage === 1}
                        className=" w-[48px] h-[48px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center rounded-[8px]"
                        style={{
                          boxShadow:
                            "-3px -1px 10px  0px #FFFFFF, 1px 3px 4px #00000040",
                        }}
                      >
                        <IoIosArrowBack />
                      </button>
                      <button
                        // onClick={() => handlePageChange(currentPage + 1)}
                        style={{
                          boxShadow:
                            "-3px -1px 10px  0px #FFFFFF, 1px 3px 4px #00000040",
                        }}
                        className=" w-[48px] h-[48px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center rounded-[8px]"
                        // disabled={currentPage === totalPages}
                      >
                        <IoIosArrowForward />
                      </button>
                    </td>
                  </th>
                </thead>
                <tbody className="flex flex-col">
                  {tableData2.map((item) => (
                    <tr className="relative h-[89px] border-[#C3C6C8] border-t-[1px] w-full">
                      <td className="absolute top-[33px] left-[27px] flex gap-[22px] leading-[24px] items-center">
                        <span className="text-[24px] text-[#333333]">
                          {item.time}{" "}
                        </span>{" "}
                        <span className="text-[18px] text-[#000000]">
                          {item.text}
                        </span>
                      </td>
                      <td className="absolute top-[33px] lg:left-[376px] md:left-[530px]">
                        <IoIosArrowForward />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <img
              src={rightArrow}
              className="w-[25px] hidden lg:block h-[59.05px] pt-[16px]"
              alt=""
            />
          </div>
        </div>

        {/*//////////////////// SECTION 2 Image Display /////////// */}

        <div className="w-full flex justify-center lg:h-[639px] md:h-[782px] bg-gradient-to-l md:bg-none  from-[#e6ebfaa8] to-[#e2eefca8]">
          <div className="absolute lg:top-[2738px] md:top-[3162px] md:gap-[52px]  flex md:flex-wrap-reverse items-center lg:w-[1280px] md:w-[744px]">
            <div className="flex flex-col lg:ml-[158px] md:ml-[76px] lg:w-[600.36px] h-[452px] items-center justify-between">
              {/* Main Image */}
              <div
                className="w-[600px] h-[337.71px] bg-cover bg-center rounded-[8px] border-[5px] border-[#FFFFFF]"
                style={{
                  backgroundImage: `url('${selectedImage}')`,
                }}
              ></div>
              {/* Bottom Image */}
              <div className="thumbnail-images h-[90px] flex gap-[16px] justify-center">
                {images.slice(0, 3).map((image, index) => (
                  <div
                    className="w-[138.58px] bg-cover bg-center h-[78px]  rounded-[5px]"
                    style={{
                      backgroundImage: `url('${image}')`,
                    }}
                    onClick={() => handleImageClick(image)}
                  ></div>
                ))}
                {images.length > 4 && (
                  <div
                    className="w-[138.58px] h-[78px] bg-cover bg-center rounded-[5px]"
                    style={{ backgroundImage: `url('${images[3]}')` }}
                    onClick={() => handleImageClick(images[3])}
                  >
                    <div className=" bottom-0 w-[138.58px] h-[78px] right-0 bg-[#0000004d] rounded-[5px] text-white text-[24px]  flex justify-center items-center transform ">
                      +{images.length - 3}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="lg:w-[384.84px] h-[183px] flex flex-col gap-[24px] lg:ml-[41px] md:ml-[76px]">
              <div className="flex flex-col gap-[16px]">
                <p className="text-[40px] text-[#1E2125] leading-[46.88px]">
                  Naša pokopališča
                </p>
                <p className="text-[16px]">
                  Upravljamo z naslednjimi pokopališči:
                </p>
              </div>
              <div>
                <ol className="text-[16px]">
                  <li>1. Pokopališče v Gabrskem, Trbovlje</li>
                  <li>2. Pokopališče na Dobovcu</li>
                  <li>3. Pokopališče na Sveti Planini</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/*//////////////////// SECTION 3 /////////////////////*/}

        <div className="w-full flex justify-center bg-gradient-to-l to-[#e6ebfaa8] from-[#e2eefca8]">
          <div
            className="w-[1280px] lg:h-[398px] md:h-[359px] bg-cover bg-center  flex justify-center items-center"
            ref={backgroundRef}
          >
            <div className="lg:w-[873px] md:w-[594.33px] lg:h-[250px] md:h-[265px] flex items-center justify-between">
              <div className=" flex flex-col  border-[#9898981a] gap-[15px] lg:w-[413.73px] md:w-[269px]">
                <h3 className="leading-[46.88px] text-[40px]">Naš ponos</h3>
                <p className="flex flex-col gap-[16px] lg:text-[16px] md:text-[14px] md:leading-[22.5px]">
                  <span>
                    Projekt prenove trboveljskega pokopališča je bil leta 2020
                    izbran kot primer dobre prakse trajnostnega urbanega razvoja
                    v okviru razpisa Mesta mestom.{" "}
                  </span>
                  <span>
                    Trbovlje bodo tako prejele priznanje Mesta mestom, dobra
                    praksa za trajnostni urbani razvoj, projekt pa bo vključen
                    tudi v katalog Mesta mestom #3. POVEZAVA TUKAJ
                  </span>
                </p>
              </div>
              <div
                className="lg:w-[355.33px] md:w-[261.06px] lg:h-[250px] md:h-[180.69px] bg-cover bg-center rounded-[8px] lg:border-[8px] md:border-[3px] border-white"
                style={{ backgroundImage: `url('${img4}')` }}
              />
            </div>
          </div>
        </div>

        {/* /////////////////// SECTION 4 ////////////////////*/}
        <div className="h-full">
          <div className="h-[661px] flex justify-center ">
            <div className="absolute lg:top-[3725px] md:top-[4331px]  border-[#D4D4D4]  lg:w-[866px] md:w-[600px]">
              <p className="leading-[46.88px] text-[40px] text-[#1E2125]">
                Pogosta vprašanja
              </p>
              <div className="flex flex-col gap-[32px] h-[460px]">
                {/* Button */}
                <div className="w-full flex justify-end">
                  <button
                    className=" w-[200px] h-[48px] rounded-[8px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                  >
                    Kaj storiti, ko se zgodi
                  </button>
                </div>
                {/* Dropdown */}
                <div className="lg:w-[866px] md:w-[600px] h-[380px]">
                  <div className="border-b-[1px] border-[#D4D4D4]">
                    {dropdownInfo.map((item, index) => (
                      <div className="relative w-[866] h-fit border-t-[1px] border-[#D4D4D4]">
                        <div className="lg:w-[866px] md:w-[600px] my-[11px] px-[22.39px] items-center  flex justify-between  text-[#1E2125]">
                          <p className="">{item.text}</p>
                          {selectedDropdown === index ? (
                            <RxCross2
                              className="text-[#3C3E41]"
                              onClick={() => {
                                setSelectedDropdown(null);
                              }}
                            />
                          ) : (
                            <FiPlus
                              className="text-[#3C3E41]"
                              onClick={() => {
                                setSelectedDropdown(index);
                              }}
                            />
                          )}
                        </div>
                        {selectedDropdown === index && (
                          <div className=" mt-[29px] ml-[53px] mb-[64px] h-[110px] lg:w-[688px] md:w-[483px] text-[14px]">
                            <p className="leading-[18px]">
                              Pogrebna dejavnost obsega:
                            </p>
                            <ul className="list-disc ml-[18px] leading-[18px]">
                              <li>24-urno dežurno službo,</li>
                              <li>
                                prevoz pokojnika/pokojnice (v nadaljevanju:
                                pokojnik),
                              </li>
                              <li>pripravo pokojnika,</li>
                              <li>upepelitev pokojnika,</li>
                              <li>pripravo in izvedbo pogreba.</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////// SECTION 5 Footer////////////////////*/}

        <div className=" w-full h-[341px] flex justify-center bg-[#D4E6F9]">
          <div className="relative lg:w-[1280px] md:w-[744px] h-[341px] ">
            <div className="absolute flex flex-col items-center gap-[24px] w-[610px] h-[245px] top-[53px] lg:left-[334.5px] md:left-[68px]">
              <div className="flex gap-[48px] w-[610px]">
                <p className="text-[40px] text-[#1E2125] leading-[46.88px]">
                  Več informacij:
                </p>
                <div className="flex gap-[16px] text-[20px] text-black">
                  <button
                    className=" w-[48px] h-[48px] rounded-[8px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                  >
                    <IoLocationOutline />
                  </button>
                  <button
                    className=" w-[48px] h-[48px] rounded-[8px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                  >
                    <RxEnvelopeClosed />
                  </button>
                  <button
                    className=" w-[200px] h-[48px] rounded-[8px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex gap-[8px] justify-center items-center"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                  >
                    <FiPhone />
                    <span className="text-[#1E2125]">041-599-742</span>
                  </button>
                </div>
              </div>

              <hr className="border-[#86BEDA] border-[1px] w-[533px]" />

              <div className="flex flex-col gap-[16px] text-center">
                <h3 className="text-[24px] text-black leading-[28.13px]">
                  Delovni čas: pon-pet 7:00 - 15:00{" "}
                </h3>
                <p className="text-[#414141] italic">
                  Poleti med 6. in 14. uro
                </p>
              </div>
              <div>
                <span className="text-[#000000] leading-[28.13px] font-[600] text-[24px]">
                  24-urna dežurna služba:{" "}
                  <span className="font-[700] text-[40px] leading-[46.88px] ">
                    041-599-742
                  </span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
