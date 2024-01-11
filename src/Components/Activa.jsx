import React from 'react'
import styles, { layout } from "../style";
import {useTranslation} from "react-i18next";
import {shield, Sky} from "../assets";
import Form from './Form';







const Activa = () => {

  const [t] = useTranslation("global");

  return (
    <div id="activa" className="bg-no-repeat w-full h-full" style={{ backgroundImage: `url(${Sky})`,backgroundSize: 'cover' }}>
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
      <h3 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
        {t("activa.unotitulo")}
      </h3>
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
      <h3 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
        {t("activa.dostitulo")}
      </h3>
      <p className="font-poppins font-normal text-slate-800  text-xl leading-[24px text-left">
      {t("activa.dosparagrafo")}
      </p>
      
    </div>
  </div>
    </div>

      </div>
      <div className="w-full lg:w-[80%]">

      <Form />
      </div>
      
    
    </div>
    </div>
  )
}

export default Activa