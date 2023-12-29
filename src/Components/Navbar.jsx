import { useState } from "react";

import { close, Logo2, menu } from "../assets";
import { navLinks } from "../constants";
import {useTranslation} from "react-i18next";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
    const [t, i18n] = useTranslation("global");

    const handleLanguageChange = (e) => {
      const newLang = e.target.value;
      i18n.changeLanguage(newLang);
    };

  return (
    <nav className="w-full flex justify-between items-center navbar">
      <img src={Logo2} alt="hoobank" className="w-[100px] h-[90px]" />
      <div className="flex border-[5px] border-[#DEEFE7] rounded-lg ml-3">
      <select alt="language dropdown menu" value={i18n.language} onChange={handleLanguageChange}>
            
      <option value="en">EN</option>
      <option value="fr">FR</option>
      <option value="es">ES</option>
      <option value="cat">CA</option>
                </select>
                
        </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 pr-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-black" : "text-dimBlack"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center text-white">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
