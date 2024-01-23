import React from 'react';
import { immobiliaria, consergeria, residencia, empresa } from '../assets/index.js';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Options2 = () => {

    const [t] = useTranslation("global");

  return (
    <div>
        <div className='w-full mx-auto'>
            <div className='flex flex-row w-full fixed bottom-3 max-w-xs'>
                <Link>
                      <div className='mr-2'>
                          <img src={empresa} alt="company"  className='w-1/2'/>
                          <h2>{t("inicio.empresa")}</h2>
                      </div>
                </Link>
                <Link>
                      <div className='mr-2'>
                          <img src={residencia} alt="Residence" className='w-1/2' />
                          <h2>{t("inicio.residencia")}</h2>
                      </div>
                </Link>
                <Link>
                      <div className='mr-2'>
                          <img src={immobiliaria} alt="Real Estate"  className='w-1/2'/>
                          <h2>{t("inicio.immo")}</h2>
                      </div>
                </Link>
                <Link>
                      <div className=''>
                          <img src={consergeria} alt="Concierge"  className='w-1/2'/>
                          <h2>{t("inicio.conser")}</h2>
                      </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Options2