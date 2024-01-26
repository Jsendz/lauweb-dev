import React from 'react';
import { immobiliaria, consergeria, residencia, empresa } from '../assets/index.js';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Options2 = () => {

    const [t] = useTranslation("global");

  return (
    <div>
        <div className='w-full '>
            <div className='flex flex-row fixed bottom-3 max-w-xs mx-auto'>
                <Link>
                      <div className='mr-2 bg-white rounded-lg w-full flex flex-col justify-around items-center'>
                          <img src={empresa} alt="company"  className='w-[50px]'/>
                          <h2>{t("inicio.empresa")}</h2>
                      </div>
                </Link>
                <Link>
                      <div className='mr-2 bg-white rounded-lg w-full flex flex-col justify-around items-center'>
                          <img src={residencia} alt="Residence" className='w-[50px]' />
                          <h2>{t("inicio.residencia")}</h2>
                      </div>
                </Link>
                <Link>
                      <div className='mr-2 bg-white rounded-lg w-full flex flex-col justify-around items-center'>
                          <img src={immobiliaria} alt="Real Estate"  className='w-[50px]'/>
                          <h2>{t("inicio.immo")}</h2>
                      </div>
                </Link>
                <Link>
                      <div className=' bg-white rounded-lg w-full flex flex-col justify-around items-center'>
                          <img src={consergeria} alt="Concierge"  className='w-[50px]'/>
                          <h2>{t("inicio.conser")}</h2>
                      </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Options2