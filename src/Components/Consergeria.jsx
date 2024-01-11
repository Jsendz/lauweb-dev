import React from 'react'
import {useTranslation} from "react-i18next";
import Modal from './Modal';



const Consergeria = () => {

  const [t] = useTranslation("global");

  return (
    <div id="Consergeria" className="w-full h-full bg-slate-800 bg-no-repeat bg-cover py-20">
      <div className="max-w-7xl 2xl:max-w-[1500px]  rounded-lg shadow-lg  mx-auto">
       <div className="flex flex-col lg:flex-row lg:justify-around mb-20 mx-auto bg-slate-800 rounded-lg bg-cover w-[90%] ">
        <div className="w-full  ">
        <h2 className="text-4xl lg:text-6xl  font-extrabold mb-10 text-slate-100 p-5 pr-0 2xl:pl-10 text-left lg:text-center">{t("conser.titulo")}</h2>
        <p className=" text-xl lg:text-3xl  text-slate-200 p-5 2xl:pl-10 text-left lg:text-center">{t("conser.paragrafo")}</p></div>
         
      </div>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap xl:max-w-6xl 2xl:max-w-7xl lg:pl-1 xl:pl-2 xl:m-auto ">
      <div className="flex flex-col items-left justify-around lg:justify-evenly rounded-lg bg-white p-5  md:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-[90%] md:w-[45%] md:ml-6 mx-auto  h-[60vh] md:h-[450px]  ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.unotitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.unoparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-evenly rounded-lg bg-white p-5 md:m-2  my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-[90%] md:w-[45%] md:ml-6 mx-auto  h-[60vh] md:h-[450px]  ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.dostitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.dosparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-evenly rounded-lg bg-white p-5 md:m-2  my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-[90%] md:w-[45%] md:ml-6 mx-auto  h-[60vh] md:h-[450px]  ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.trestitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.tresparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-evenly rounded-lg bg-white p-5 md:m-2  my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-[90%] md:w-[45%] md:ml-6 mx-auto  h-[60vh] md:h-[450px]  ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.fortitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.forparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-evenly rounded-lg bg-white p-5 md:m-2  my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-[90%] md:w-[45%] md:ml-6 mx-auto  h-[60vh] md:h-[450px]  ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.cinctitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.cincparagrafo")}</p>
        <Modal />
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-evenly rounded-lg bg-white p-5 md:m-2  my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-[90%] md:w-[45%] md:ml-6 mx-auto  h-[60vh] md:h-[450px]  ">
        <h3 className="text-xl font-extrabold text-left px-5">{t("conser.sistitulo")}</h3>
        <p className="text-left px-5 lg:px-0">{t("conser.sisparagrafo")}</p>
        <Modal />
      </div>
      </div>
      </div>
        
    </div>
  )
}

export default Consergeria