import React from 'react';
import {useTranslation} from "react-i18next";

const Empresa = () => {

  const [t] = useTranslation("global");

  return (
    <div className='h-full 2xl:h-screen w-full flex flex-col justify-around items-center'>
        <div className='max-w-7xl mx-auto flex flex-col' >
          <div className='my-20 '>
            <h3 className='text-6xl font-extrabold my-10'>{t("empresa.titulo")}</h3>
            <p className='text-xl text-left pl-5 font-bold'>{t("empresa.paragrafo")}</p>
          </div>
            <div className='w-full text-left flex flex-col lg:flex-row lg:flex-wrap justify-around mx-auto lg:mx-0'>
              <div className='w-[90%] lg:w-[30%] p-5 rounded-lg bg-slate-800 text-white mb-2'>
                <h4 className='text-2xl font-bold mb-2'>{t("empresa.unotitulo")}</h4>
                <p>{t("empresa.unoparagrafo")}</p>
              </div>
              <div className='w-[90%] lg:w-[30%] p-5 rounded-lg bg-slate-800 text-white mb-2'> 
                <h4 className='text-2xl font-bold mb-2'>{t("empresa.dostitulo")}</h4>
                <p>{t("empresa.dosparagrafo")}</p>
              </div>
              <div className='w-[90%] lg:w-[30%] p-5 rounded-lg bg-slate-800 text-white mb-2'> 
                <h4 className='text-2xl font-bold mb-2'>{t("empresa.trestitulo")}</h4>
                <p>{t("empresa.tresparagrafo")}</p>
              </div>
              <div className='w-[90%] lg:w-[30%] p-5 rounded-lg bg-slate-800 text-white mb-2'>  
                <h4 className='text-2xl font-bold mb-2'>{t("empresa.fortitulo")}</h4>
                <p>{t("empresa.forparagrafo")}</p>
              </div>
              <div className='w-[90%] lg:w-[30%] p-5 rounded-lg bg-slate-800 text-white mb-2'>   
                <h4 className='text-2xl font-bold mb-2'>{t("empresa.cinctitulo")}</h4>
                <p>{t("empresa.cincparagrafo")}</p>
              </div>
              <div className='w-[90%] lg:w-[30%] p-5 rounded-lg bg-slate-800 text-white mb-2'>  
                <h4 className='text-2xl font-bold mb-2'>{t("empresa.sistitulo")}</h4>
                <p>{t("empresa.sisparagrafo")}</p>
              </div>
              <div className='w-[90%] lg:w-[30%] p-5 rounded-lg bg-slate-800 text-white mb-2'>  
                <h4 className='text-2xl font-bold mb-2'>{t("empresa.setitulo")}</h4>
                <p>{t("empresa.separagrafo")}</p>
              </div>
              <div className='w-[90%] lg:w-[30%] p-5 rounded-lg bg-slate-800 text-white mb-2'>  
                <h4 className='text-2xl font-bold mb-2'>{t("empresa.otitulo")}</h4>
                <p>{t("empresa.oparagrafo")}</p>
              </div>
              <div className='w-[90%] lg:w-[30%] p-5 rounded-lg bg-slate-800 text-white mb-2'> 
                <h4 className='text-2xl font-bold mb-2'>{t("empresa.nutitulo")}</h4>
                <p>{t("empresa.nuparagrafo")}</p>
              </div>   
            </div>
        </div>
    </div>
  )
}

export default Empresa