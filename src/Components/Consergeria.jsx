import React from 'react'
import {Key3} from '../assets/index.js';
import {useTranslation} from "react-i18next";

const Consergeria = () => {

  const [t] = useTranslation("global");

  return (
    <div id='Consergeria' className="w-full h-full
     bg-[url('src/assets/background3.jpg')] bg-no-repeat bg-cover py-20">
       <div className="flex flex-col lg:flex-row lg:justify-around mb-20 max-w-7xl mx-auto">
        <div className="w-full ">
        <h2 className="text-5xl  font-extrabold text-left mb-10 text-slate-100">{t("conser.titulo")}</h2>
        <p className="text-3xl text-left text-slate-200">{t("conser.paragrafo")}</p></div>
         <div className="w-full">
          <img src={Key3} alt="Set of Keys"  className="mx-auto"/>
         </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap xl:max-w-6xl 2xl:max-w-7xl lg:pl-14 xl:m-auto ">
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.unotitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.unoparagrafo")}</p>
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.dostitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.dosparagrafo")}</p>
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.trestitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.tresparagrafo")}</p>
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.fortitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.forparagrafo")}</p>
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.cinctitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.cincparagrafo")}</p>
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.sistitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.sisparagrafo")}</p>
      </div>
      </div>
        
    </div>
  )
}

export default Consergeria