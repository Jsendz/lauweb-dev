import React from 'react'
import { Lau, Res4, Conser, Empre, Immo } from "../assets"


const Before = () => {
  return (
    <div id='Before' >
        <div className="flex flex-row h-full max-w-3xl mx-auto  ">
            <div className=" h-[600px] flex flex-col items-center justify-around w-52">
                <button className="text-2xl p-5 text-[#111820] bg-white rounded-xl w-40 h-40 text-center mx-auto items-center shadow-2xl"><div className="flex flex-col items-center justify-around h-full">
                <img src={Res4} alt="" className="w-[100%]"/>
                  <h3 >Residencia</h3>
                  </div></button>

                <button className="text-2xl p-1 text-[#111820] bg-white rounded-xl w-40 h-40 text-center mx-auto items-center shadow-2xl"><div className="flex flex-col items-center justify-around h-full">
                <img src={Immo} alt="" className="w-[100%]"/>
                  <h3>Inmobiliaria</h3>
                  </div></button>

            </div>
            <div className="hidden lg:flex :flex-row">
                <div className="w-[600px] h-[600px] shadow-2xl bg-black clip-style -mr-[400px]"></div>
                <img src={Lau} alt="perfil" className="w-[600px] h-[600px] shadow-2xl shadow-black z-[5] clip-style object-fill" />

            </div>
            <div className="h-[600px] flex flex-col items-center justify-around w-52">
            <button className="text-2xl p-1 text-[#111820] bg-white rounded-xl w-40 h-40 text-center mx-auto items-center shadow-2xl"><div className="flex flex-col items-center justify-around h-full">
                 <img src={Empre} alt="" className="w-[100%]"/>
                  <h3>Empresa</h3>
                  </div></button>
            <button className="text-2xl p-5 text-[#111820] bg-white rounded-xl w-40 h-40 text-center mx-auto items-center shadow-2xl"><div className="flex flex-col items-center justify-around h-full">
                 <img src={Conser} alt="" className="w-[60%]"/>
                  <h3>Consergeria</h3>
                  </div></button>

            </div>

        </div>

    </div>
  )
}

export default Before