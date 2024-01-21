import { useState } from "react";

import { close, Forest, Logo2, menu } from "../assets";
import { navLinks } from "../constants";
import {useTranslation} from "react-i18next";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  
    const [t, i18n] = useTranslation("global");

    const handleLanguageChange = (e) => {
      const newLang = e.target.value;
      i18n.changeLanguage(newLang);
    };

  return (
    <nav className="w-full flex justify-between items-center navbar" style={{ backgroundImage: `url(${Forest})`,backgroundSize: 'cover' }}>
      <Link to='/'><img src={Logo2} alt="logo Hilltop Agency " className="w-[100px]"  /></Link>
      <div className="flex ml-3 font-bold">
                <button className="px-4 border-r-2 border-black" onClick={() => i18n.changeLanguage("en")} >EN</button>
                <button className="px-4 border-r-2 border-black" onClick={() => i18n.changeLanguage("es")} >ES</button>
                <button className="px-4 border-r-2 border-black" onClick={() => i18n.changeLanguage("fr")} >FR</button>
                <button className="px-4" onClick={() => i18n.changeLanguage("cat")} >CAT</button>
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
