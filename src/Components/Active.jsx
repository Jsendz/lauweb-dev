import React from 'react'
import { feature2, } from "../constants";
import styles, { layout } from "../style";
import {useTranslation} from "react-i18next";
import {shield} from "../assets";





const Active = () => {

  const [t] = useTranslation("global");

  return (
    <div name="activa" className="bg-[url('src/assets/sky.png')] bg-cover bg-no-repeat w-full h-full">
    <div className="lg:flex lg:flex-row justify-around items-center max-w-7xl mx-auto">
      
      <div className="w-full h-full my-20">
      <h2 className="text-6xl font-bold py-10 px-5 text-left rounded-lg">{t("activa.titulo")}</h2>
      <p className="text-left text-xl p-5">{t("activa.paragrafo")}
      
      </p>
      <div className="w-full flex flex-col justify-center">
      <div className={`flex flex-row p-6 rounded-[20px]`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={shield} alt="shield" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 hover:text-slate-200">
      <h4 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
        {t("activa.unotitulo")}
      </h4>
      <p className="font-poppins font-normal text-slate-800  text-xl leading-[24px text-left">
        {t("activa.unoparagrafo")}
      </p>
      
    </div>
  </div>
  <div className={`flex flex-row p-6 rounded-[20px] `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={shield} alt="shield" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 hover:text-slate-200">
      <h4 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
        {t("activa.unotitulo")}
      </h4>
      <p className="font-poppins font-normal text-slate-800  text-xl leading-[24px text-left">
      {t("activa.unoparagrafo")}
      </p>
      
    </div>
  </div>
    </div>

      </div>
      <div className="px-2 lg:w-[70%]">
      <section className="text-gray-200 body-font relative rounded-xl bg-slate-800">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-100 underline underline-offset-8">{t("activa.tituloform")}
              
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">{t("activa.paraform")}
            
            </p>
          </div>
          <div className=" md:w-2/3 lg:w-full mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-100">{t("activa.nombre")}
                    
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-100"
                  >{t("activa.email")}
                    
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-cyan-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="concept" className="leading-7 text-sm text-gray-100">{t("activa.concepto")}
                    
                  </label>
                  <input
                    type="text"
                    id="concept"
                    name="concept"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-100"
                  >{t("activa.mensaje")}
                    
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-600 rounded text-lg">{t("activa.boton")}
                  
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
      
    
    </div>
    </div>
  )
}

export default Active