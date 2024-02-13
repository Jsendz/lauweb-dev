import React from 'react'
import { Lau } from '../assets/index.js';

import {useTranslation} from "react-i18next";
import Modal from './Modal.jsx';






const Home = () => {

    const [t] = useTranslation("global");

  return (
    <div className="w-full h-screen bg-forest bg-no-repeat bg-cover "   >
        <div className="w-full mx-auto  lg:max-w-7xl lg:h-[70%] h-full flex flex-col lg:flex-row lg:justify-around lg:items-start xl:items-center rounded-xl lg:mb-32 xl:mb-40 " >
            <div className="w-full flex flex-col justify-center text-left p-2 pt-10 pl-4 lg:pl-20" >
                
                <h1 className=" text-3xl xl:text-4xl text-cyan-500 antialiased font-sans font-bold pb-5">Hilltop Agency</h1>
                <h2 className="text-4xl lg:text-3xl xl:text-5xl bg-slate-700 bg-transparent pb-5 font-extrabold">{t("inicio.subtitulo")}</h2>
                <p className="text-xl text-slate-600 pb-5">{t("inicio.paragrafo")}</p>

                  <div className="lg:w-1/2 w-2/3 mx-auto lg:mx-0">
                   <Modal />
                   </div>
                
            </div>
            <div className="hidden lg:w-full lg:h-full lg:flex lg:justify-center lg:items-start xl:items-center  ">
                <img src={Lau} alt="Laura Lopez"  className="w-[55%]" loading='lazy' />
               
            </div>
         
        </div>
      
    </div>
    
  )
}

export default Home