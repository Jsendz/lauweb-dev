import React from 'react'
import {CgFileDocument} from "react-icons/cg";
import { immobiliaria, consergeria, residencia, empresa } from '../assets/index.js';


const Servicios = () => {
  return (
    <div className="w-full h-full bg-[url('src/assets/serblue.jpg')] bg-cover bg-no-repeat">
        <div className=" flex flex-col lg:flex-row justify-evenly lg:justify-around items-center p-3 h-full w-full max-w-[1440px] 2xl:mx-auto ">
    <div className="flex flex-row lg:justify-around w-full mb-5 lg:-mt-10  ">
    <div className=" shadow-2xl rounded-xl bg-white lg:-mt-24 2xl:-mt-28  hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[30%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={empresa} alt="" className="mx-auto w-[60%] h-[100%]"/><h3 className="text-xl font-extrabold py-2">Empresa</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div>
    </div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-24 2xl:-mt-28  hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[30%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={residencia} alt="" className="mx-auto w-[60%] h-[100%]"/><h3 className="text-xl font-extrabold py-2">Residencia</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div></div></div>
    
    <div className="flex flex-row lg:justify-around w-full  mb-5 lg:-mt-10 ">
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-24 2xl:-mt-28  hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[30%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={immobiliaria} alt="" className="mx-auto w-[60%] h-[100%]"/><h3 className="text-xl font-extrabold py-2">Inmobiliaria</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div></div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-24  2xl:-mt-28 hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[30%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><img src={consergeria} alt="" className="mx-auto w-[60%] h-[100%]"/><h3 className="text-xl font-extrabold py-2">Consergeria</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div></div></div>
    
</div>
</div>
  )
}

export default Servicios


