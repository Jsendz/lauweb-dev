import React from 'react';
import { immobiliaria, consergeria, residencia, empresa } from '../assets/index.js';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Options = () => {

    const [t] = useTranslation("global");

  return (
    <div className='fixed bottom-3 w-full mx-auto z-50'>
          
        <div className="rounded-lg backdrop-blur-sm flex flex-row justify-evenly lg:justify-around items-center p-5 h-full lg:w-full xl:max-w-5xl lg:max-w-3xl max-w-sm mx-auto ">
    <div className="flex flex-row lg:justify-around w-full mb-5 ">
    <div className=" shadow-2xl rounded-xl bg-white  hover:bg-slate-900 hover:cursor-pointer hover:text-white m-2 lg:m-0 lg:w-[35%]"><Link   to="/Empresa"  className="hover:cursor-pointer"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={empresa} alt="company" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">{t("inicio.empresa")} </h3>
    </div></Link>
    </div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white  hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[35%] hover:cursor-pointer"><Link  to="/Residencia"   ><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={residencia} alt="Residence" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">{t("inicio.residencia")}</h3>
    </div></Link></div>
    </div>
    
    <div className="flex flex-row lg:justify-around w-full  mb-5 ">
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white  hover:bg-slate-900 hover:text-white hover:cursor-pointer m-2 lg:m-0 lg:w-[35%]"><Link  to="/Inmobiliaria"   ><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={immobiliaria} alt="Real Estate" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">{t("inicio.immo")}</h3>
    </div></Link>
    </div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white  hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[35%] hover:cursor-pointer"><Link  to="/Conserjeria" ><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={consergeria} alt="Concierge" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">{t("inicio.conser")}</h3>
    </div></Link>
       </div>
    </div>
    
</div>


    </div>
  )
}

export default Options