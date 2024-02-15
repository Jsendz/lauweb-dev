import React from 'react';

import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";
import { BsHouseLock } from "react-icons/bs";
import { SlDocs } from "react-icons/sl";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GiHouseKeys } from "react-icons/gi";




const Options2 = () => {
    
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  

    const [t] = useTranslation("global");

    

  return (
      <div>
        <div className='w-full fixed bottom-0 z-10  '>
            <div className='backdrop-blur-lg rounded-xl w-[100%] max-w-3xl md:mx-auto '>
                <div className='flex flex-row flex-wrap justify-evenly'>
                <Link to="/Empresa">
                
                <button onClick={scrollToTop}>
                      <div className='  bg-slate-100 flex flex-col justify-evenly md:justify-around items-center w-[90px] h-[90px] lg:w-36 lg:h-[100px] py-1 font-bold mb-3'>
                      <MdOutlineBusinessCenter size={32} style={{ fill: 'darkcyan' }} />
                          <h2 className='text-sm lg:text-lg 2xl:text-xl lg:py-2'>{t("inicio.empresa")}</h2>
                      </div>
                      </button>
                </Link>
                <Link to="/Residencia">
                
                <button onClick={scrollToTop}>
                      <div className=' bg-slate-100 flex flex-col justify-evenly md:justify-around items-center w-[90px] h-[90px] lg:w-36 lg:h-[100px] py-1 font-bold mb-3'>
                      <SlDocs size={32}  style={{ fill: 'darkcyan' }}/>
                          <h2 className='text-sm lg:text-lg 2xl:text-xl lg:py-2'>{t("inicio.residencia")}</h2>
                      </div>
                      </button>
                </Link>
                <Link to="/Inmobiliaria">
                
                <button onClick={scrollToTop}>
                      <div className=' bg-slate-100 flex flex-col justify-evenly md:justify-around items-center w-[90px] h-[90px] lg:w-36 lg:h-[100px] py-1 font-bold'>
                      <BsHouseLock size={32} style={{ fill: 'darkcyan' }}/>
                          <h2 className='text-sm lg:text-lg 2xl:text-xl lg:py-2'>{t("inicio.immo")}</h2>
                      </div>
                      </button>
                </Link>
                <Link to="/Conserjeria">
                
                <button onClick={scrollToTop}>
                      <div className=' bg-slate-100 flex flex-col justify-evenly md:justify-around items-center w-[90px] h-[90px] lg:w-36 lg:h-[100px] py-1 font-bold'>
                      <GiHouseKeys size={32} style={{ fill: 'darkcyan' }} />
                          <h2 className='text-sm lg:text-lg 2xl:text-xl lg:py-2'>{t("inicio.conser")}</h2>
                      </div>
                      </button>
                </Link>
                </div>
            </div>
        </div>
        </div>
    
  )
}

export default Options2