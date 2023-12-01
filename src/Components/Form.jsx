import React from 'react';
import {useTranslation} from "react-i18next";

const Form = () => {
    const [t] = useTranslation("global");
   
  return (
    <div>
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
  )
}

export default Form