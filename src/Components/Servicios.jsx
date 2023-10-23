import React from 'react'
import {CgFileDocument} from "react-icons/cg";


const Servicios = () => {
  return (
    <div className="w-full h-full bg-[url('src/assets/serblue.jpg')]">
        <div className=" flex flex-col lg:flex-row justify-evenly lg:justify-around items-center p-3 h-full w-full  ">
    <div className="flex flex-row lg:justify-around w-full mt-5 lg:mt-0  ">
    <div className=" shadow-2xl rounded-xl bg-white lg:-mt-24 hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[30%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><div className=""><img src="src/assets/empresa2.png" alt="" className="mx-auto w-[60%] h-[100%]"/></div><h3 className="text-xl font-extrabold py-2">Empresa</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div>
    </div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-24 hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[30%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><div className=""><img src="src/assets/docs2.png" alt="" className="mx-auto w-[60%] h-[100%]"/></div><h3 className="text-xl font-extrabold py-2">Residencia</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div></div></div>
    
    <div className="flex flex-row lg:justify-around w-full  mb-5 lg:mb-0 ">
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-24 hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[30%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><div className=""><img src="src/assets/immo2.png" alt="" className="mx-auto w-[60%] h-[100%]"/></div><h3 className="text-xl font-extrabold py-2">Inmobiliaria</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div></div>
    <div className="flex flex-col  shadow-2xl rounded-xl  bg-white lg:-mt-24 hover:bg-slate-900 hover:text-white m-2 lg:m-0 lg:w-[30%]"><div className="p-5 w-full h-full flex flex-col justify-evenly items-center "><div className=""><img src="src/assets/consergeria2.png" alt="" className="mx-auto w-[60%] h-[100%]"/></div><h3 className="text-xl font-extrabold py-2">Consergeria</h3>
    <p>Lorem ipsum dolor <br /> sit amet.</p></div></div></div>
    
</div>
</div>
  )
}

export default Servicios


