import React from "react";
import { SimpButton } from "../Button/Buttons";
import { MdAlternateEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import groupLogo from "../../assets/images/GroupLogo.png";
import { CiFacebook } from "react-icons/ci";
import Carousel from "../Carousel/Carousel";

export default function Footer() {
  return (
    <div className="  flex flex-col items-center  lg:h-[464px]  border-t-[1px] border-[#E3E8EC] max-sm:items-center lg:bg-[#EEF2F2]bg-white  border-t-[1pfx] flex-wrap">
      <div className="lg:w-[1157px] max-sm:w-[311px]  md:mt-[63px] md:w-[620px] lg:h-[464px]  flex flex-col justify-center gap-5">
        <div className="  flex 7 max-sm:flex-wrap max-sm:justify-between lg:justify-between max-sm:gap-10 md:justify-between lg:gap-0">
          <div className=" max-sm:w-full items-center p-4 flex flex-col gap-10 mt-4">
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
          <div className=" flex flex-col gap-3 max-sm:text-[14px] mt-4 ">
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
          <div className=" flex flex-col gap-3 max-sm:text-[14px] mt-4 max-lg:hidden">
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
        <div className="flex lg:justify-between items-center lg:flex-nowrap lg:flex-row flex-col   w-full md:flex-wrap md:justify-center max-sm:justify-center ">
          <div className="flex flex-col gap-4  mb-6 lg:w-fit md:w-full lg:block md:hidden max-sm:hidden">
            <span>
              <p className="font-semibold text-[#7C7C7C] text-[16px] font[400] mb-2">
                Trenutno ste na strani:
              </p>
              <p className="text-[#414141] text-[16px] font[400]">
                osmrtnica.com{" "}
              </p>
            </span>
            <p className="hidden lg:block">
              © osmrtnica.com, 2024. Vse pravice pridržane.
            </p>
          </div>

          <div className="flex md:w-[566px] max-sm:w-[311px] max-sm:justify-center max-sm:flex-wrap  lg:hidden md:gap-[18px] max-sm:gap-[30px] pb-3 text-[13px] text-[#414141]">
            <span>Splošni pogoji poslovanja</span>
            <span>Politika zasebnosti </span>
            <span>Politika varovanja osebnih podatkov </span>
            <span>Piškotki </span>
          </div>
          <p className="hidden max-sm:block text-[12px] text-[#414141]">
            © osmrtnica.com, 2024. Vse pravice pridržane.
          </p>
          <div className="max-sm:hidden ">
            <div className="lg:w-[718px]  flex  md:w-[612px] max-sm:w-full   ">
              <Carousel
                style={" flex lg:flex-row   md:flex-col md:gap-0 "}
                circleStyle={
                  "lg:flex-col  md:items-end md:p-0 lg:justify-start md:justify-end md:gap-2 lg:gap-0 md:mr-10 "
                }
              >
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
                  style={"from-[#451808eb]  to-[#451808c9] "}
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
      className={` p-3 rounded-b-xl lg:w-[596px] h-[71px]  bg-gradient-to-r ${props.style} flex justify-between items-center max-sm:flex max-sm:flex-col `}
    >
      <div className="text-[14px] ">
        <h3 className="font-[700] text-[16px] text-[#E8FDF1]">{props.title}</h3>
        <p className="text-[#CAF0F8] text-[12px]">{props.content}</p>
      </div>
      <div className="">
        <SimpButton
          bgColor={"bg-[#CAF0F8]"}
          padding={"w-[139px]"}
          px={"h-[34px] flex justify-center items-center text-[14px]"}
          className=""
        >
          Več <span> informacij</span>
        </SimpButton>
      </div>
    </div>
  );
};
