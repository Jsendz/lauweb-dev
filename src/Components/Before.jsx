import React from 'react'
import { Lau } from "../assets"

const Before = () => {
  return (
    <div id='Before' >
        <div className="flex flex-row h-full max-w-3xl mx-auto">
            <div className=" h-[500px] flex flex-col items-center justify-around w-52">
                <button className="text-2xl p-5 text-slate-800 bg-blue-gradient rounded-full w-40 h-20 text-center mx-auto items-center shadow-2xl">Residencia</button>

                <button className="text-2xl p-5 text-slate-800 bg-blue-gradient rounded-xl w-40 h-20 text-center mx-auto items-center shadow-2xl">Fiscalidad</button>

            </div>
            <div className="flex flex-row">
                <div className="w-[600px] h-[600px] shadow-2xl bg-black clip-style -mr-[400px]"></div>
                <img src={Lau} alt="perfil" className="w-[600px] h-[600px] shadow-2xl shadow-black z-[5] clip-style object-fill" />

            </div>
            <div className="h-[500px] flex flex-col items-center justify-around w-52">
            <button className="text-2xl p-5 text-slate-800 bg-blue-gradient rounded-xl w-40 h-20 text-center mx-auto items-center shadow-2xl">Empresa</button>
            <button className="text-2xl p-5 text-slate-800 bg-blue-gradient rounded-xl w-40 h-20 text-center mx-auto items-center shadow-2xl">Consergeria</button>

            </div>

        </div>

    </div>
  )
}

export default Before