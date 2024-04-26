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
import { IoIosArrowForward } from "react-icons/io";
import { RxCross2, RxEnvelopeClosed } from "react-icons/rx";
import { FiPhone, FiPlus } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function FuneralCompany() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [width, setWidth] = useState();
  const [dropdownInfo, setDropdownInfo] = useState([]);
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
    const backgroundImage = width < 1281 ? background : "";
    backgroundRef.current.style.backgroundImage = `url('${backgroundImage}')`;
    // const bgBannerImage = width > 600 ? flowerImg : flowerImg2;

    // bgBanner.current.style.backgroundImage = `url(${backgroun})`;
  }, [width]);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className="w-full text-[400] leading-[24px]   text-[#414141] text-[16px] bg-[#F5F7F9]">
      <header className="relative flex  flex-col items-center ">
        {/* Navbar */}
        <div className="bg-white">
          <Navbar2 />
        </div>

        {/* TopBanner */}

        <div className="w-full flex flex-col items-center bg-gradient-to-l to-[#E8F0F5] from-[#EBEDEF] ">
          <div className="relative w-[1280px] h-[865px]">
            <img
              src={topBannerImg}
              className="absolute top-[0px] w-[1280px] h-[300px]"
              alt=""
              srcset=""
            />
            <div className="absolute top-[197.37px] left-[135.5px] border-[2px] border-[#EDF1F3] bg-white rounded-[16px] w-[1009px] h-[185px]">
              <div className="relative text-[#1E2125] w-[1009px] h-[185px]">
                <div className="absolute top-[21.63px] left-[44.5px] flex items-center w-[200px] h-[82px]">
                  <img src={Komunala} alt="" className=" w-[200px] " />
                </div>
                <p className="absolute text-[24px] font-[600] top-[54.63px] left-[296.5px]">
                  Pogrebni zavod Trbovlje
                </p>
                <div className="absolute left-[871.5px] flex gap-[8px] top-[40.63px] w-[104px] h-[48px] ">
                  <div
                    className=" w-[48px] h-[48px] rounded-[8px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                  >
                    <CiFacebook className="h-[20px] w-[20px] " />
                  </div>
                  <div
                    className=" w-[48px] h-[48px] rounded-[8px] bg-gradient-to-l to-[#E3E8EC] from-[#FFFFFF] flex justify-center items-center"
                    style={{ boxShadow: "5px 5px 10px #c2c2c280" }}
                  >
                    <CiFacebook className="h-[20px] w-[20px] " />
                  </div>
                </div>

                <div className="absolute top-[114.63px] w-[962px] items-center left-[44.5px] flex gap-[24px]">
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
                  <hr className="w-[21.33px] border-[#D4D4D4] border-[1px] rotate-[-90deg]" />

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
            <div className="absolute flex flex-col justify-center gap-[15px] top-[472px] left-[162px] border h-[334px] w-[452px]">
              <h3 className="text-[40px]">Predstavitev</h3>
              <p className="leading-[24px] w-[432px]">
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
                className="absolute top-[509px] left-[756.79px] w-[361.21px] h-[250px] rounded-[8px] border-[3px] border-white"
                alt=""
              />
              <img
                src={img2}
                className="absolute top-[648px] z-20 left-[708px] w-[216.72px] h-[150px] rounded-[8px] border-[3px] border-white"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>

      <main className="w-full flex flex-col items-center ">
        {/* //////////////SECTION 1 Profile Card Display and other ///////////*/}

        <div className="w-[1280px] h-[1681px] flex flex-col items-center">
          {/* Card */}
          <div className="absolute w-[956px]  flex flex-col items-center gap-[48px] h-[789px] top-[1021.58px] ">
            <div className="flex flex-col gap-[16px]">
              <p className="text-[40px] text-[#1E2125]">Zadnje osmrtnice</p>
              <p className="text-[16px]">
                Pregled zadnjih osmrtnic v našem kraju{" "}
              </p>
            </div>

            <div className="w-[956px] flex flex-wrap gap-[24px]">
              {profiles.slice(0, 6).map((data) => (
                <div>
                  <Card profile={data} />
                </div>
              ))}
            </div>
            <dir>
              <Pagenation totalItems={10} itemsPerPage={4} />
            </dir>
          </div>
          {/* Searches */}
          <div className="absolute flex flex-col top-[1914px] w-[1087px] h-[159px] gap-[32px]">
            <p className="text-[#1E2125] text-[40px] leading-[46.88px] w-[501px] text-end">
              Pogrebi v prihodnjih dneh
            </p>
            <div className="w-[997px] flex gap-[24px] justify-end">
              <div className="flex gap-[16px]">
                <input
                  type="text"
                  placeholder="Išči po imenu"
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
              <div className="flex gap-[16px]">
                <input
                  type="text"
                  placeholder="Išči po imenu"
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

          <div className="absolute flex justify-between w-[1089.98px] h-[530px] top-[2094px] ">
            <img
              src={leftArow}
              className="w-[25px] h-[59.05px] pt-[16px]"
              alt=""
            />
            <div className="">
              <table className="w-[420px] font-[300] h-[445px] border-y-[1px] bg-[#CAF0F8] border-[#C3C6C8]">
                <thead>
                  <th className="relative h-[89px] border-t-[1px] border-[#C3C6C8] w-full">
                    <td className="absolute text-[28px] text-[#000000] font-[300] leading-[24px] top-[33px] left-[27px]">
                      Torek, 04.01.
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
                      <td className="absolute top-[33px] left-[376px]">
                        <IoIosArrowForward />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="">
              <table className="w-[420px] font-[300] h-[445px] border-y-[1px] bg-[#FFE5B4] border-[#C3C6C8]">
                <thead>
                  <th className="relative h-[89px] border-t-[1px] border-[#C3C6C8] w-full">
                    <td className="absolute text-[28px] text-[#000000]  font-[300] leading-[24px] top-[33px] left-[27px]">
                      Sreda, 05.01.
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
                      <td className="absolute top-[33px] left-[376px]">
                        <IoIosArrowForward />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <img
              src={rightArrow}
              className="w-[25px] h-[59.05px] pt-[16px]"
              alt=""
            />
          </div>
        </div>

        {/*//////////////////// SECTION 2 Image Display /////////// */}

        <div className="w-full flex justify-center bg-gradient-to-l h-[639px]  from-[#e6ebfaa8] to-[#e2eefca8]">
          <div className="absolute top-[2738px] flex items-center  w-[1280px]">
            <div className="flex flex-col ml-[158px] w-[600.36px] h-[452px] items-center justify-between">
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
            <div className="w-[384.84px] h-[183px] flex flex-col gap-[24px] ml-[41px]">
              <div className="flex flex-col gap-[16px]">
                <p className="text-[40px] text-[#1E2125] leading-[46.88px]">
                  Naša pokopališča
                </p>
                <p className="text-[16px] leading-[24px]">
                  Upravljamo z naslednjimi pokopališči:
                </p>
              </div>
              <div>
                <ol className="leading-[24px] text-[16px]">
                  <li>1. Pokopališče v Gabrskem, Trbovlje</li>
                  <li>2. Pokopališče na Dobovcu</li>
                  <li>3. Pokopališče na Sveti Planini</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/*//////////////////// SECTION 3 /////////////////////*/}

        <div className="w-full flex justify-center">
          <div
            className="w-[1280px] h-[398px] bg-cover bg-center flex justify-center items-center"
            // style={{
            //   backgroundImage:
            //     window.innerWidth < 1281 ? `url('${background}')` : "",
            // }}
            ref={backgroundRef}
          >
            <div className="w-[873px] h-[250px] flex justify-between">
              <div className=" flex flex-col border-b-[1px] border-[#9898981a] gap-[15px] w-[413.73px]">
                <h3 className="leading-[46.88px] text-[40px]">Naš ponos</h3>
                <p className="flex flex-col gap-[16px]">
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
                className="w-[355.33px] h-[250px] bg-cover bg-center rounded-[8px] border-[8px] border-white"
                style={{ backgroundImage: `url('${img4}')` }}
              />
            </div>
          </div>
        </div>

        {/* /////////////////// SECTION 4 ////////////////////*/}

        <div className="h-[661px] w-full flex justify-center">
          <div className="absolute top-[3725px] border-[#D4D4D4] w-[866px]">
            <p className="leading-[46.88px] text-[40px] text-[#1E2125]">
              Pogosta vprašanja
            </p>
            <div className="flex flex-col gap-[32px]">
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
              <div className="w-[866px] h-[380px] overflow-y-scroll  ">
                <div className="border-b-[1px] border-[#D4D4D4]">
                  {dropdownInfo.map((item, index) => (
                    <div className="relative w-[866] h-fit border-t-[1px] border-[#D4D4D4]">
                      <div className="w-[866px] my-[11px] px-[22.39px] items-center  flex justify-between  text-[#1E2125]">
                        <p className="">{item.text}</p>
                        {item.open ? (
                          <RxCross2
                            className="text-[#3C3E41]"
                            onClick={() => {
                              const updatedDropdownInfo = [...dropdownInfo];
                              updatedDropdownInfo[index] = {
                                ...updatedDropdownInfo[index],
                                open: false,
                              };
                              setDropdownInfo(updatedDropdownInfo);
                            }}
                          />
                        ) : (
                          <FiPlus
                            className="text-[#3C3E41]"
                            onClick={() => {
                              const updatedDropdownInfo = [...dropdownInfo];
                              updatedDropdownInfo[index] = {
                                ...updatedDropdownInfo[index],
                                open: true,
                              };
                              setDropdownInfo(updatedDropdownInfo);
                            }}
                          />
                        )}
                      </div>
                      {item.open && (
                        <div className=" mt-[29px] ml-[53px] mb-[64px] h-[110px] w-[688px] text-[14px]">
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

        {/* /////////////////// SECTION 5 Footer////////////////////*/}

        <div className=" w-full h-[341px] flex justify-center bg-[#D4E6F9]">
          <div className="relative w-[1280px] h-[341px] ">
            <div className="absolute flex flex-col items-center gap-[24px] w-[610px] h-[245px] top-[53px] left-[334.5px]">
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
