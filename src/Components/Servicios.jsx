import React from 'react'
import {CgFileDocument} from "react-icons/cg";


const Servicios = () => {
  return (
    <div className="w-full h-full bg-[url('src/assets/serblue.jpg')]">
        <div className=" flex flex-col lg:flex-row justify-evenly lg:justify-around items-center p-5 h-[500px] lg:h-full  ">
    <div className="flex flex-row lg:justify-between w-full lg:w-1/3  ">
    <div className=" shadow-2xl rounded-xl bg-white -mt-28 hover:bg-slate-900 hover:text-white"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><div className=""><CgFileDocument className="w-10 h-10" /></div><h3 className="text-xl font-extrabold py-2">Empresa</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div>
    </div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white -mt-28 hover:bg-slate-900 hover:text-white"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><div className=""><CgFileDocument className="w-10 h-10"  /></div><h3 className="text-xl font-extrabold py-2">Residencia</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div></div></div>
    
    <div className="flex flex-row lg:justify-between w-full lg:w-1/3 ">
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white -mt-28 hover:bg-slate-900 hover:text-white"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><div className=""><CgFileDocument className="w-10 h-10"  /></div><h3 className="text-xl font-extrabold py-2">Inmobiliaria</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div></div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white -mt-28 hover:bg-slate-900 hover:text-white"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><div className=""><CgFileDocument className="w-10 h-10"  /></div><h3 className="text-xl font-extrabold py-2">Consergeria</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div></div></div>
    
</div></div>
  )
}

export default Servicios


