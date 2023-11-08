import React from 'react';

import styles, { layout } from "../style";



const Passive = () => {
  return (
    <div className="w-full max-w-7xl mx-auto h-full mb-32 " >
      <div className="py-20 w-full">
      <h2 className="text-6xl font-bold py-10 w-full">Residencia Passiva</h2>
      <p className="text-2xl 2xl:text-3xl text-center pl-5 pb-10">Los permisos de residencia pasiva permiten residir fisicamente en Andorra, pero no dan
derecho a poder trabajar. Existes hasta tres tipos de residencia pasiva que se pueden solicitar
en Andorra</p>

<div className="flex flex-col lg:flex-row h-full w-full justify-around 2xl:max-w-7xl lg:max-w-6xl lg:mx-auto mt-10 ">
  <div className="mb-5 lg:mt-5 ">
        <div className="h-[95%] lg:w-[350px] 2xl:w-96 rounded-xl flex flex-col justify-start items-left bg-slate-800 py-10 shadow-2xl shadow-slate-500 ">
          <h3 className="text-3xl lg:text-2xl 2xl:text-3xl  font-bold text-center px-3  text-slate-200 underline underline-offset-4">Residencia sin actividad lucrativa</h3>
          <p className="text-xl lg:text-base 2xl:text-xl text-left px-5 pt-14 text-slate-400 ">Autoriza a residir en el país sin ejercer actividad laboral ni profesional. <br />
           Este tipo de residencia se realiza por inversión en activos andorranos (inversión mínima de 600.000€) más un depósito reembolsable de 47.500 euros a l’AFA (Agencia Financiera Andorrana) y 9.500 euros adicionales por persona a cargo. <br />
            Se debe establecer la residencia principal y efectiva en el Principado de Andorra durante al menos 90 días al año.</p>
        </div>
        </div>
        <div className="mb-5 z-10 ">
        <div className="lg:w-96 2xl:w-full h-full  rounded-xl flex flex-col justify-start items-left bg-slate-800 py-10 shadow-2xl shadow-slate-500  ">
          <h3 className="text-3xl  lg:text-2xl 2xl:text-3xl font-bold text-center pl-5 py-5 text-slate-200 underline underline-offset-4">Residencia para profesionales con proyeccion internacional</h3>
          <p className="text-xl lg:text-base  2xl:text-xl text-left px-5 pt-10 text-slate-400 ">Este tipo de residencia pasiva en Andorra está dirigida a profesionales con una actividad internacional sin apenas intervención en el mercado andorrano. <br />
           La sede o base de la actividad debe estar situada en el Principado de Andorra y al menos el 85 % de los servicios prestados deben tener como destinatarios personas o entidades no residentes en el Principado. <br />
            Se deberá entregar un depósito reembolsable en el AFA (Agencia Financiera Andorrana) de 47.500 euros y 9.500 euros adicionales por casa persona a nombre del titular, y residir en Andorra durante al menos 90 días al año</p>
        </div>
        </div>
        <div className="mb-5 lg:mt-5">
        <div className=" h-[95%] lg:w-[350px] 2xl:w-96 rounded-xl flex flex-col justify-start items-left bg-slate-800 py-10 shadow-2xl shadow-slate-500  ">
          <h3 className="text-3xl  lg:text-2xl 2xl:text-3xl font-bold text-center px-3 text-slate-200 underline underline-offset-4">Residencia por razones de interes cientifico, cultural o deportivo</h3>
          <p className="text-xl lg:text-base  2xl:text-xl text-left px-5 pt-10 text-slate-400 ">Este tipo de residencia esta dirigida a personas que tienen reputación y acreditación internacional reconocida. <br />
           Al menos un 85 % de los servicios prestados deben ser utilizados en el extranjero. <br /> Se deberá entregar un depósito reembolsable en el AFA (Agencia Financiera Andorrana) de 47.500 euros y 9.500 euros adicionales por casa persona a nombre del titular, y residir en Andorra durante al menos 90 días al año.</p>
        </div>
        </div>
        </div>
      
</div>

    </div>
  )
}

export default Passive