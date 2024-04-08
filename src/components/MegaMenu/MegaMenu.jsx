import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { menu } from "./data";
import { SubCard } from "./MenuCard";
import { IoIosArrowForward } from "react-icons/io";
import { HiChevronDoubleDown } from "react-icons/hi";

export default function MegaMenu() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="bg-white text-[#686868] w-full max-sm: z-10 p-5 justify-center  absolute right-0 top-[70px]  flex border-b-2 shadow-lg ">
      <span className="flex w-[1191px]  max-sm:flex-wrap  md:justify-center gap-[25px]">
        <div className="max-sm:border-b-1 max-sm:pb-2">
          {menu.map((item, index) => (
            <div
              key={index}
              className="w-72"
              onClick={() => setSelected(index)}
            >
              <MenuBtn
                styles={` ${
                  selected === index
                    ? `border ${item.color} rounded-lg shadow-lg border-blue-500`
                    : ""
                } `}
                item={item}
              />
            </div>
          ))}
        </div>
        <div className="">
          {selected === 0 ? (
            <Osmrtnice selected={selected} />
          ) : selected === 1 ? (
            <Spominska selected={selected} />
          ) : selected === 2 ? (
            <Lokalne selected={selected} />
          ) : (
            <Vse selected={selected} />
          )}
        </div>
      </span>
    </div>
  );
}

const MenuBtn = (props) => {
  console.log(props);
  return (
    <div
      className={`${props.styles} w-[270px] flex justify-between py-3 px-3 items-center  cursor-pointer`}
    >
      <div className="flex gap-4 items-center   ">
        <img src={props.item.icon} alt="" />
        <div className="flex flex-col font-[500]">
          <span>{props.item.title}</span>
          <span>{props.item.title2}</span>
        </div>
      </div>
      <div>
        <MdKeyboardDoubleArrowRight className="font-bold text-[30px]" />
      </div>
    </div>
  );
};

const Osmrtnice = (props) => {
  return (
    <div className="flex   w-full  md:flex-wrap max-sm:flex-wrap p-2 gap-[25px]">
      <div className="flex flex-col w-[270px] gap-5">
        <SubCard
          data={{
            title: "Pregled osmrtnic",
            text: [],
            linkText: ["Izberi kraj"],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
        <SubCard
          data={{
            title: "Pregled lokalnih pogrebov",
            text: [],
            linkText: ["Izberi kraj"],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
        <SubCard
          data={{
            title: "Oddaja osmrtnice",
            text: [
              "Osmrtnico vam BREZPLAČNO uredi pogrebno podjetje. Kontaktirajte jih; vse vam uredijo v 2 minutah.",
            ],
            linkText: ["Poišči pogrebno podjetje"],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
      </div>
      <div className="w-[270px]  max-sm:w-64 h-fit rounded-lg bg-[#e3e8ec99] flex flex-col gap-[12px] text-[12px] p-[15px] ">
        <h1 className=" font-[500] text-[14px]">
          Oddaja osmrtnice preko naše strani
        </h1>
        <div className="gap-[10px] flex flex-col w-[240px] h-[220.98px]">
          <p className="">
            Oddaja osmrtnice je tudi pri nas brezplačna, vendar pa je pogojena s
            hkratnim naročilom Spominske strani, ki stane 20,00€+DDV (in
            postanete Skrbnik).
          </p>
          <p>Tega pogoja pri izdelavi osmrtnice pri pogrebnem podjetju ni.</p>
          <a
            href="#"
            className={`text-[#0A85C2] flex gap-2 items-center text-[12px]`}
          >
            Oddaj osmrtnico in postani Skrbnik strani
            <IoIosArrowForward />
          </a>
          <p>
            Za oddajo osmrtnice je treba nujno priložiti Poročilo o smrti, ki ga
            izda Pogrebno podjetje.
          </p>
        </div>
      </div>

      <div className="w-[270px] text-[#686868] max-sm:w-64 bg-gradient-to-l shadow-xl from-col1 to-col2 border-2 text-[12px] flex flex-col gap-3 rounded-lg p-3 ">
        <span>
          <p className="text-[#00B4D8]">PROMOCIJA</p>
          <h2 className="font-[500] text-[24px]">VSE BREZPLAČNO</h2>
        </span>
        <p>
          BREZPLAČNI Skrbnik. Brezplačnih tudi 25+ opcij, ki jih prinaša
          Skrbnik.{" "}
        </p>
        <p>BREZPLAČNE predloge za obveščanje prilagojene mobilnemu telefonu.</p>
        <p>
          BREZPLAČNI poudarjen okvir s svečko za deljenje zgodb in čarobnih
          trenutkov. Da bo spominska stran najdražjih sevala še več topline,
          bila še bolj osebna.
        </p>
        <p>
          Vse navedeno vam izdelajo in podarijo v vaši lokalni cvetličarni.
          Povprašajte jih.{" "}
        </p>
        <a
          href="#"
          className={`text-[#41C0FF] flex gap-2 items-center text-[14px]`}
        >
          Več o promociji <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
};

const Spominska = (props) => {
  return (
    <div className="flex w-full flex-wrap p-2 gap-[25px]">
      <div className="flex w-[270px] flex-col gap-5">
        <SubCard
          data={{
            title: "Spominska stran",
            text: [],
            linkText: ["Podrobno"],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
        <SubCard
          data={{
            title: "BREZPLAČNIH 9",
            text: [
              "Med drugim tudi: vpis v Žalno knjigo, prižig svečke v spomin, izrekanje sožalja, že pripravljena obvestila za pošiljanje preko MOBI in e-pošte, opomniki za obletnice in osmrtnice v domačem kraju. ",
            ],
            linkText: [],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
        <SubCard
          data={{
            title: "Primerjava BREZ in S Skrbnikom",
            text: [],
            linkText: ["Podrobno"],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
      </div>
      <div className="flex  flex-col w-[270px] gap-5">
        <SubCard
          data={{
            title: "Spominska stran s Skrbnikom",
            text: [],
            linkText: ["Podrobno"],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
        <SubCard
          data={{
            title: "BREZPLAČNIH 25+",
            text: [
              "Poleg ostalega še več brezplačnih ugodnosti za vse obiskovalce. Opcija zasebnosti = stran dostopna samo družini (preko gesla). Deljenje daljših zgodb do 10.000 znakov ali Zadnji klic, Zahvala. Dodajanje fotografij, religioznih simbolov. Brezplačni še dodatni skrbnik, ki vam pomaga urejati stran. Možnost izdelave bolj osebne in toplejše spominske strani. ",
            ],
            linkText: [],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
        <SubCard
          data={{
            title: "Postani Skrbnik ",
            text: [],
            linkText: ["Registracija"],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
      </div>

      <div className="w-[270px] text-[#686868] max-sm:w-64 bg-gradient-to-b shadow-xl from-[#b6ecec17] to-[#bef4f400] border-2 text-[12px] flex flex-col gap-3 rounded-lg p-3 ">
        <span>
          <p className="text-[#0A85C2]">PROMOCIJA</p>
          <h2 className="font-[500] text-[24px]">VSE BREZPLAČNO</h2>
        </span>
        <p>
          BREZPLAČNI Skrbnik. Brezplačnih tudi 25+ opcij, ki jih prinaša
          Skrbnik.{" "}
        </p>
        <p>BREZPLAČNE predloge za obveščanje prilagojene mobilnemu telefonu.</p>
        <p>
          BREZPLAČNI poudarjen okvir s svečko za deljenje zgodb in čarobnih
          trenutkov. Da bo spominska stran najdražjih sevala še več topline,
          bila še bolj osebna.
        </p>
        <p>
          Vse navedeno vam izdelajo in podarijo v vaši lokalni cvetličarni.
          Povprašajte jih.{" "}
        </p>
        <a
          href="#"
          className={`text-[#0A85C2] flex gap-2 items-center text-[14px]`}
        >
          Več o promociji <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
};

const Lokalne = (props) => {
  return (
    <div className="flex  w-full flex-wrap gap-[25px]">
      <div className="flex flex-col w-[270px] gap-5">
        <SubCard
          data={{
            title: "Poišči lokalne cvetličarne",
            text: [
              "Izdelano imajo svojo predstavitveno stran, dodani so kontakti; občasno obveščajo tudi o posebnih promocijah, ne samo v okviru žalnega programa.  ",
            ],
            linkText: ["Poišči cvetličarne po kraju"],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
        <SubCard
          data={{
            title: "Pregled pogrebnih podjetij",
            text: [
              "Izdelano imajo svojo predstavitveno stran, dodane so vse kontaktne informacije.",
              "Dodali so tudi koristne informacije in navodila, kaj storiti, ko se zgodi.  ",
            ],
            linkText: ["Poišči izvajalce pogrebnih storitev "],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
      </div>

      <div className="w-[270px] h-fit rounded-lg text-[#686868] bg-[#e3e8ec99] flex flex-col  text-[12px] p-3">
        <h1 className="text-[14px] font-[500] ">
          Kako naročiti v cvetličarnah
        </h1>
        <p className="">
          Omogočili smo način, kot ste ga najbolj vajeni - direktni stik s
          cvetličarno.
        </p>
        <p>
          Klikni produkt na strani osmrtnice in oddaj poizvedbo, pri nekaterih
          morda tudi naročilo. Lahko jih tudi pokličete; vse kontaktne
          informacije so prikazane.{" "}
        </p>
        <a
          href="#"
          className={`text-[#256B8C] flex items-center text-[34px] font-extrabold justify-center`}
        >
          <HiChevronDoubleDown />
        </a>
        <p>
          Cvetličarna vas bo v kratkem času kontaktirala nazaj; včasih že po
          nekaj minutah.
        </p>
        <a
          href="#"
          className={`text-[#256B8C] flex items-center text-[34px] font-extrabold justify-center`}
        >
          <HiChevronDoubleDown />
        </a>
        <p>Vse se s cvetličarno dogovorite direktno, tako kot ste vajeni.</p>
        <p>Op. kmalu tudi spletno naročanje.</p>
      </div>

      <div className="w-[270px] pt-[25px] p-[15px] bg-gradient-to-t from-[#1464E1] to-[#1151B5] font-[400] text-[#E8FDF1] shadow-xl  border-2 text-[14px] flex flex-col gap-3 rounded-lg ">
        <span className="flex flex-col gap-[10px] w-[240px]">
          <span>
            <h2 className="font-[500] text-[18px]">IMATE CVETLIČARNO?</h2>
          </span>
          <p className="text-[12px]">
            Otvoritvena akcija BREZ RIZIKA pravkar poteka.
          </p>

          <a
            href="#"
            className={`text-[#41C0FF]  flex gap-[10px] items-center text-[12px]`}
          >
            Več o promociji <IoIosArrowForward />
          </a>
        </span>

        <span className="flex flex-col gap-[10px]">
          <span>
            <h2 className="font-[500] text-[18px]">STE OGLAŠEVALCI? </h2>
          </span>
          <p className="text-[12px] ">
            Ponujate produkte ali storitve, ki bi lahko bili zanimivi za
            obiskovalce te spletne strani? Pošljite nam sporočilo, predloge,
            vprašanja.
          </p>

          <a
            href="#"
            className={`text-[#41C0FF] flex gap-[10px] items-center text-[12px]`}
          >
            Kontaktirajte nas <IoIosArrowForward />
          </a>
        </span>
      </div>
    </div>
  );
};

const Vse = (props) => {
  return (
    <div className="flex w-full flex-wrap gap-[25px]">
      <div className="w-[270px]">
        <SubCard
          data={{
            title: "Preostale strani",
            text: [],
            linkText: [
              "Vprašanja in odgovori",
              "Login in Registracija",
              "Oglaševanje",
              "Sodelujmo! Postani partner",
              "Poišči cvetličarne po kraju",
              "Poišči cvetličarne po kraju",
              "Poišči cvetličarne po kraju",
            ],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
      </div>
      <div className="w-[270px]">
        <SubCard
          data={{
            title: "Preostale strani",
            text: [],
            linkText: [
              "Splošni pogoji",
              "Piškotki",
              "Izjava ta in ta",
              "Kontakt",
              "Poišči cvetličarne po kraju",
              "Poišči cvetličarne po kraju",
              "Poišči cvetličarne po kraju",
            ],
          }}
          icon={menu[props.selected].icon}
          color={menu[props.selected].color}
        />
      </div>
      <div className="w-72  shadow-xl bg-blue-50 border-2 text-[14px] justify-between flex flex-col gap-3 rounded-lg p-3 ">
        <span className="h-[292.86px] w-[240px]">
          <span>
            <p className="text-[#00B4D8] font-[500]">PROMOCIJA</p>
            <h2 className="font-[500] text-[20px]">OPOMNIK ZA OBLETNICE</h2>
          </span>
          <p className="text-[12px] text-[#686868]">
            Spominske strani, kjer sodelujete (oddate sožalje, se vpišete v
            Žalno knjigo, itd.), se vam shranijo v vaš uporabniški račun. Tam so
            prikazani tudi bolj podrobni podatki o strani, hkrati pa vas
            avtomatsko obveščajo o prihajajočih obletnicah - in obvestila o
            le-teh boste prejemali pravočasno tudi na email. Nikoli več ne boste
            zamudili obletnice. Tudi to je seveda brezplačno.
          </p>
        </span>
        <a
          href="#"
          className={`text-[#0A85C2] flex gap-2 items-center text-[12px]`}
        >
          Več o promociji <IoIosArrowForward />
        </a>
      </div>
    </div>
  );
};
