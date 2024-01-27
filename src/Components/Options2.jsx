import React from 'react';
import { immobiliaria, consergeria, residencia, empresa } from '../assets/index.js';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Options2 = () => {

    const [t] = useTranslation("global");

  return (
      <div>
        <div className='w-full fixed bottom-3  '>
            <div className='backdrop-blur-lg rounded-xl w-[90%] max-w-3xl mx-auto'>
                <div className='flex flex-row flex-wrap justify-evenly py-5'>
                <Link>
                      <div className=' bg-white rounded-lg flex flex-col justify-around items-center w-[130px] py-3 font-bold mb-3'>
                          <img src={empresa} alt="company"  className='w-[50px]'/>
                          <h2>{t("inicio.empresa")}</h2>
                      </div>
                </Link>
                <Link>
                      <div className=' bg-white rounded-lg flex flex-col justify-around items-center w-[130px] py-3 font-bold mb-3'>
                          <img src={residencia} alt="Residence" className='w-[50px]' />
                          <h2>{t("inicio.residencia")}</h2>
                      </div>
                </Link>
                <Link>
                      <div className=' bg-white rounded-lg flex flex-col justify-around items-center w-[130px] py-3 font-bold'>
                          <img src={immobiliaria} alt="Real Estate"  className='w-[50px]'/>
                          <h2>{t("inicio.immo")}</h2>
                      </div>
                </Link>
                <Link>
                      <div className=' bg-white rounded-lg flex flex-col justify-around items-center w-[130px] py-3 font-bold'>
                          <img src={consergeria} alt="Concierge"  className='w-[50px]'/>
                          <h2>{t("inicio.conser")}</h2>
                      </div>
                </Link>
                </div>
            </div>
        </div>
        </div>
    
  )
}

export default Options2