import React from 'react'
import { Lau } from '../assets/index.js';




const Before2 = () => {
  return (
    <div className="w-full h-full xl:h-[75vh] 2xl:h-[75vh] rounded-xl" >
        <div className="w-full mx-auto  lg:max-w-7xl lg:h-[80%]  h-full flex flex-col lg:flex-row rounded-xl pb-32 " >
            <div className="w-full flex flex-col justify-center text-center lg:text-left p-2 pt-10 pl-4 lg:pl-20" >
                
                <h1 className="text-4xl  text-transparent bg-clip-text  bg-gradient-to-r from-cyan-500 to-blue-500 antialiased font-sans font-bold pb-5">Hilltop Agency</h1>
                <h2 className="text-5xl bg-slate-700 bg-transparent pb-5 font-extrabold">Tu Agencia de Servicio Personalizado en Andorra</h2>
                <p className="text-xl text-slate-600 pb-5 drop-shadow-xl">En Hilltop Agency te acompañamos de principio a fin en tu proceso de instalacion en Andorra.</p>
                <button className="p-5 bg-cyan-400 rounded-xl text-slate-800 font-semibold text-xl lg:w-[30%] w-1/2 mx-auto lg:mx-0">Contacta-nos</button>
                
            </div>
            <div className="hidden lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center  ">
                <img src={Lau} alt="Laura Lopez"  className="w-[55%]" />
            </div>
         
        </div>
    </div>
    
  )
}

export default Before2