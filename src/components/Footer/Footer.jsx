import React from "react";
import { SimpButton } from "../Button/Buttons";
import { MdAlternateEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import groupLogo from "../../assets/images/GroupLogo.png";
import { CiFacebook } from "react-icons/ci";
import Carousel from "../Carousel/Carousel";

export default function Footer() {
  return (
    <div className=" px-10 flex flex-col bg-gradient-to-r from-p_bg1 to-p_bg pt-16 border-t-1 flex-wrap">
      <div className=" border-gray-300 gap-1 pb-16  flex 7 flex-wrap justify-between">
        <div className="items-center p-4 flex flex-col gap-10 mt-4">
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
            <div className=" flex gap-3 items-center">
              <span className="p-1 border-1 border-white  shadow-lg shadow-gray-400 rounded-md">
                <CiFacebook className="text-[20px]" />
              </span>
              <p>Facebook</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-3 max-sm:text-[14px] mt-4">
          <h3 className="font-bold">Important links</h3>
          <a href="#">Osmrtnice</a>
          <a href="#">Pogrebi</a>
          <a href="#">Spominska</a>
          <a href="#">Cvetličarne</a>
          <a href="#">Pogrebna podjetja</a>
          <a href="#">Partnerji</a>
        </div>
        <div className=" flex flex-col gap-3 max-sm:text-[14px] mt-4">
          <h3 className="font-bold">Helpful links</h3>
          <a href="#">Pogosta vprašanja</a>
          <a href="#">Kaj storiti, ko se zgodi</a>
          <a href="#">Kako oddati osmrtnico</a>
          <a href="#">Kontakt</a>
          <a href="#">Povej naprej</a>
        </div>
        <div className=" flex flex-col gap-3 max-sm:text-[14px] mt-4">
          <h3 className="font-bold">Drobni tisk</h3>
          <a href="#">Splošni pogoji poslovanja</a>
          <a href="#">Politika zasebnosti </a>
          <a href="#">Politika varovanja osebnih podatkov</a>
          <a href="#">Piškotki</a>
          <a href="#">Povej naprej</a>
        </div>
        {/* <div className="flex flex-col gap-3  justify-center items-center p-3 w-[240px] border-2 bg-gradient-to-r from-p_bg1 to-p_bg shadow-lg rounded-lg">
          <h2 className="text-[20px] font-semibold">Spremljajte nas na FB </h2>
          <p className="text-[14px]">
            Med drugim tam najdete tudi občasne popuste samo za prve, brezplačne
            nadgradnje in prihajajoče novosti.{" "}
          </p>
          <SimpButton
            padding={"p-2"}
            px={"px-16"}
            textColor={"white"}
            bgColor={"#5470B0"}
          >
            Facebook
          </SimpButton>
        </div> */}
      </div>
      <div className="flex justify-between   w-full flex-wrap md:justify-center ">
        <div className="flex flex-col gap-4 mb-6 lg:w-fit md:w-full">
          <span>
            <p className="font-semibold text-gray-500 mb-2">
              Trenutno ste na strani:
            </p>
            <p>osmrtnica.com </p>
          </span>
          <p>© osmrtnica.com, 2024. Vse pravice pridržane.</p>
        </div>
        <div className="lg:w-7/12 md:w-full max-sm:w-full">
          <Carousel>
            <Banner
              title={"Imate cvetličarno?"}
              content={
                "Otvoritvena akcija BREZ RIZIKA pravkar poteka. Sodelujmo!"
              }
              style={"from-[#083545eb]  to-[#083545c9]"}
            />
            <Banner
              title={"Brezplačni skrbnik"}
              content={
                "Podarjajo vam ga cvetličarne in pogrebna podjetja. Povprašajte jih!"
              }
              style={"from-[#451808eb]  to-[#451808c9]"}
            />
            <Banner
              title={"Brezplačne MOBI predloge"}
              content={
                "Podarjajo vam jih cvetličarne. Enako tudi Posvetilo, Zadnji klic."
              }
              style={"from-[#240845eb]  to-[#240845c9]"}
            />
          </Carousel>
        </div>
      </div>
      {/* <div className="flex justify-between p-1 ">
        <p>© Our Company, 2024. Vse pravice pridržane.</p>
        <span className=" text-[12px] flex gap-4 flex-wrap">
          <a href="#">Splošni pogoji poslovanja</a>
          <a href="#">Politika zasebnosti</a>
          <a href="#">Politika varovanja osebnih podatkov</a>
          <a href="#">Piškotki</a>
        </span>
      </div> */}
    </div>
  );
}

const Banner = (props) => {
  return (
    <div
      className={`border-2 p-3 rounded-b-xl bg-gradient-to-r ${props.style} flex justify-between max-sm:flex max-sm:flex-col `}
    >
      <div className="text-[14px] ">
        <h3 className="font-bold text-[#E8FDF1]">{props.title}</h3>
        <p className="text-[#CAF0F8]">{props.content}</p>
      </div>
      <div className="">
        <SimpButton
          bgColor={"bg-[#CAF0F8]"}
          padding={"p-2"}
          px={"px-5"}
          className=""
        >
          Več <span> informacij</span>
        </SimpButton>
      </div>
    </div>
  );
};
