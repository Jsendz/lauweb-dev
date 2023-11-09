import React from 'react'
import { Lau } from '../assets/index.js';
import { immobiliaria, consergeria, residencia, empresa } from '../assets/index.js';
import {useTranslation} from "react-i18next";
import { t } from 'i18next';



const Before2 = () => {

    const [t] = useTranslation("global");

  return (
    <div className="w-full h-full 2xl:h-[85vh] rounded-xl " >
        <div className="w-full mx-auto  lg:max-w-7xl lg:h-[70%] h-full flex flex-col lg:flex-row lg:justify-start rounded-xl lg:mb-32 xl:mb-40 " >
            <div className="w-full flex flex-col justify-center text-center lg:text-left p-2 pt-10 pl-4 lg:pl-20" >
                
                <h1 className="text-4xl  text-transparent bg-clip-text  bg-gradient-to-r from-cyan-500 to-blue-500 antialiased font-sans font-bold pb-5">Hilltop Agency</h1>
                <h2 className="text-5xl lg:text-4xl xl:text-5xl bg-slate-700 bg-transparent pb-5 font-extrabold">{t("inicio.subtitulo")}Tu Agencia de Servicio Personalizado en Andorra</h2>
                <p className="text-xl text-slate-600 pb-5 drop-shadow-xl">{t("inicio.paragrafo")}En Hilltop Agency te acompañamos de principio a fin en tu proceso de instalacion en Andorra.</p>
                <button className="p-5 bg-cyan-400 rounded-xl text-slate-800 font-semibold text-xl lg:hidden xl:block xl:w-[40%] w-1/2 mx-auto lg:mx-0">{t("inicio.boton")}Contacta-nos</button>
                
            </div>
            <div className="hidden lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center  ">
                <img src={Lau} alt="Laura Lopez"  className="w-[55%]" />
            </div>
         
        </div>
        <div className="w-full h-full lg:h-[20%] bg-slate-800 bg-no-repeat">
        <div className=" flex flex-col lg:flex-row justify-evenly lg:justify-around items-center p-3 h-full w-full max-w-[1440px] 2xl:mx-auto ">
    <div className="flex flex-row lg:justify-around w-full mb-5 lg:-mt-10  ">
    <div className=" shadow-2xl rounded-xl bg-white lg:-mt-20  2xl:-mt-28  hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[35%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={empresa} alt="" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">{t("inicio.empresa")}Empresa</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div>
    </div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-20  2xl:-mt-28  hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[35%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={residencia} alt="" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">{t("inicio.residencia")}Residencia</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div></div></div>
    
    <div className="flex flex-row lg:justify-around w-full  mb-5 lg:-mt-10 ">
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-20  2xl:-mt-28  hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[35%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={immobiliaria} alt="" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">Inmobiliaria</h3>
    <p>{t("inicio.immo")}Lorem ipsum dolor <br /> sit amet.</p></div></div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-20   2xl:-mt-28 hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[35%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={consergeria} alt="" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">Consergeria</h3>
    <p>{t("inicio.consergeria")}Lorem ipsum dolor <br /> sit amet.</p></div></div></div>
    
</div>
</div>
    </div>
    
  )
}

export default Before2