
import React from 'react';
import {useTranslation} from "react-i18next";

import styles, { layout } from "../style";
import Modal from './Modal';





const Passive = () => {

  const [t] = useTranslation("global");

  return (
    <div name="pasiva" className="w-full max-w-7xl mx-auto h-full mb-32 " >
      <div className="py-20 w-full">
      <h2 className="text-6xl font-bold py-10 w-full">{t("pasiva.titulo")}</h2>
      <p className="text-2xl 2xl:text-3xl text-center pl-5 pb-10">{t("pasiva.paragrafo")}</p>

<div className="flex flex-col lg:flex-row h-full w-full justify-around 2xl:max-w-7xl lg:max-w-6xl lg:mx-auto mt-10 ">
  
        <div className="xl:h-[70vh]  h-full lg:w-[90%] rounded-xl flex flex-col justify-evenly items-left bg-slate-800 pt-10  pb-5 shadow-2xl shadow-slate-500 lg:mt-5   mx-1 lg:mx-0 my-5 lg:my-0 ">
          <h3 className="text-3xl lg:text-2xl 2xl:text-3xl  font-bold text-center px-3  text-slate-200 underline underline-offset-4">{t("pasiva.unotitulo")}</h3>
          <p className="text-xl lg:text-base 2xl:text-xl text-left px-5 pt-14 text-slate-400 ">{t("pasiva.unoparagrafo")}</p>
          <Modal />
        </div>
        
        
<<<<<<< HEAD
        <div className="lg:w-[100%]  h-full  rounded-xl flex flex-col justify-evenly items-left bg-slate-800 pt-5  pb-5 shadow-2xl shadow-slate-500 mx-1 lg:mx-0 my-5 lg:my-0  ">
=======
        <div className="lg:w-[100%] xl:h-[80vh]  h-full  rounded-xl flex flex-col justify-start items-left bg-slate-800 py-10 shadow-2xl shadow-slate-500 mx-1 lg:mx-0 my-5 lg:my-0  ">
>>>>>>> 9e361cfaed92627559895143776fd154964f69c6
          <h3 className="text-3xl  lg:text-2xl 2xl:text-3xl font-bold text-center p-5 py-5 text-slate-200 underline underline-offset-4">{t("pasiva.dostitulo")}</h3>
          <p className="text-xl lg:text-base  2xl:text-xl text-left px-5 pt-10 text-slate-400 ">{t("pasiva.dosparagrafo")}</p>
          <button className="p-5 rounded-lg bg-slate-200 w-1/2 text-slate-800 font-bold mx-auto mt-5">{t("residencia.dosboton")}</button>
        </div>
       
        
<<<<<<< HEAD
        <div className=" xl:h-[70vh] lg:w-[90%] h-full  rounded-xl flex flex-col justify-evenly items-left bg-slate-800 pt-10 pb-2  shadow-2xl shadow-slate-500  mx-1 lg:mt-5 lg:pb-3  lg:mx-0 my-5 lg:my-0  ">
=======
        <div className=" xl:h-[70vh] lg:w-[90%] h-full  rounded-xl flex flex-col justify-start items-left bg-slate-800 py-10 shadow-2xl shadow-slate-500  mx-1 lg:mt-5 lg:pb-16 lg:mx-0 my-5 lg:my-0  ">
>>>>>>> 9e361cfaed92627559895143776fd154964f69c6
          <h3 className="text-3xl  lg:text-2xl 2xl:text-3xl font-bold text-center px-3 text-slate-200 underline underline-offset-4">{t("pasiva.trestitulo")}</h3>
          <p className="text-xl lg:text-base  2xl:text-xl text-left px-5 pt-10 text-slate-400 ">{t("pasiva.tresparagrafo")}</p>
          <button className="p-5 rounded-lg bg-slate-200 w-1/2 text-slate-800 font-bold mx-auto mt-5">{t("residencia.dosboton")}</button>
        </div>
        
        </div>
      
</div>

    </div>
  )
}

export default Passive