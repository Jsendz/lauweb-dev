import React from 'react'
import {useTranslation} from "react-i18next";
import Modal from '../Components/Modal';



const Conserjeria = () => {

  const [t] = useTranslation("global");

  return (
    <div id="Consergeria" className="w-full h-full bg-[#F3FAFF] bg-no-repeat bg-cover py-20">
      <div className="max-w-7xl 2xl:max-w-[1500px]  rounded-lg mx-auto">
       <div className="flex flex-col lg:flex-row lg:justify-around mb-20 mx-autorounded-lg bg-cover w-[90%] mx-auto ">
        <div className="w-full text-left  ">
        <h2 className="text-4xl lg:text-5xl antialiased  font-extrabold mb-10 text-slate-700 p-5 pr-0 xl:px-20 text-left xl:text-center ">{t("conser.titulo")}</h2>
        <p className=" text-xl lg:text-2xl antialiased  text-slate-700 p-5 xl:px-20 text-left mb-10 ">{t("conser.paragrafo")}</p></div>
         
      </div>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-center xl:max-w-6xl 2xl:max-w-7xl lg:pl-1 xl:pl-2 xl:m-auto ">
      <div className="flex flex-col items-left justify-around lg:justify-evenly p-5  md:m-0 my-2   sm:border-r-2 border-t-2 sm:border-t-0 border-slate-600 lg:w-[30%] w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
        <h3 className="text-xl font-extrabold text-left text-slate-700">{t("conser.unotitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.unoparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-evenly  p-5 md:m-0  my-2  sm:border-r-2 border-t-2 sm:border-t-0  border-slate-600 lg:w-[30%] w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
        <h3 className="text-xl font-extrabold text-left text-slate-700">{t("conser.dostitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.dosparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-evenly  p-5 md:m-0  my-2   lg:w-[30%] border-t-2 sm:border-t-0 w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
        <h3 className="text-xl font-extrabold text-left text-slate-700">{t("conser.trestitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.tresparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-evenly  p-5 md:m-0  my-2  sm:border-r-2 border-slate-600  border-t-2 lg:w-[30%] w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
        <h3 className="text-xl font-extrabold text-left text-slate-700">{t("conser.fortitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.forparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-evenly  p-5 md:m-0  my-2  sm:border-r-2 border-slate-600 border-t-2 lg:w-[30%] w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
        <h3 className="text-xl font-extrabold text-left text-slate-700">{t("conser.cinctitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.cincparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-evenly  p-5 md:m-0  my-2   lg:w-[30%] border-slate-600 border-t-2 w-[90%] md:w-[45%] mx-auto  h-[60vh] md:h-[400px]  ">
        <h3 className="text-xl font-extrabold text-left text-slate-700">{t("conser.sistitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.sisparagrafo")}</p>
        <Modal />
      </div>
      </div>
      </div>
        
    </div>
  )
}

export default Conserjeria