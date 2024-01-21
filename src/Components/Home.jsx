import React from 'react'
import { Forest, Lau } from '../assets/index.js';
import { immobiliaria, consergeria, residencia, empresa } from '../assets/index.js';
import {useTranslation} from "react-i18next";
import Modal from './Modal.jsx';
import { Link } from 'react-router-dom';





const Home = () => {

    const [t] = useTranslation("global");

  return (
    <div className="w-full h-full 2xl:h-[85vh] rounded-xl " style={{ backgroundImage: `url(${Forest})`,backgroundSize: 'cover' }}  >
        <div className="w-full mx-auto  lg:max-w-7xl lg:h-[70%] h-full flex flex-col lg:flex-row lg:justify-start rounded-xl lg:mb-32 xl:mb-40 " >
            <div className="w-full flex flex-col justify-center text-left p-2 pt-10 pl-4 lg:pl-20" >
                
                <h1 className="text-4xl text-cyan-500 antialiased font-sans font-bold pb-5">Hilltop Agency</h1>
                <h2 className="text-5xl lg:text-4xl xl:text-5xl bg-slate-700 bg-transparent pb-5 font-extrabold">{t("inicio.subtitulo")}</h2>
                <p className="text-xl text-slate-600 pb-5">{t("inicio.paragrafo")}</p>

                  <div className="lg:w-1/2 w-2/3 mx-auto lg:mx-0">
                   <Modal />
                   </div>
                
            </div>
            <div className="hidden lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center  ">
                <img src={Lau} alt="Laura Lopez"  className="w-[55%]" />
               
            </div>
         
        </div>
        <div className="w-full h-full lg:h-[20%] bg-slate-800 bg-no-repeat">
        <div className=" flex flex-col lg:flex-row justify-evenly lg:justify-around items-center p-3 h-full w-full max-w-[1440px] 2xl:mx-auto ">
    <div className="flex flex-row lg:justify-around w-full mb-5 lg:-mt-10  ">
    <div className=" shadow-2xl rounded-xl bg-white lg:-mt-20  2xl:-mt-28  hover:bg-slate-900 hover:cursor-pointer hover:text-white m-2 lg:m-0 lg:w-[35%]"><Link   to="/Empresa"  className="hover:cursor-pointer"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={empresa} alt="company" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">{t("inicio.empresa")} </h3>
    </div></Link>
    </div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-20  2xl:-mt-28  hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[35%] hover:cursor-pointer"><Link  to="/Residencia"   ><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={residencia} alt="Residence" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">{t("inicio.residencia")}</h3>
    </div></Link></div>
    </div>
    
    <div className="flex flex-row lg:justify-around w-full  mb-5 lg:-mt-10 ">
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-20  2xl:-mt-28  hover:bg-slate-900 hover:text-white hover:cursor-pointer m-2 lg:m-0 lg:w-[35%]"><Link  to="/Inmobiliaria"   ><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={immobiliaria} alt="Real Estate" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">{t("inicio.immo")}</h3>
    </div></Link>
    </div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-20   2xl:-mt-28 hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[35%] hover:cursor-pointer"><Link  to="/Conserjeria" ><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={consergeria} alt="Concierge" className="mx-auto w-[60%] lg:w-1/2 lg:h-auto h-[100%]"/><h3 className="text-xl font-extrabold py-2">{t("inicio.conser")}</h3>
    </div></Link>
       </div>
    </div>
    
</div>
</div>
    </div>
    
  )
}

export default Home