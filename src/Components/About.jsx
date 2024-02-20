import React from 'react'
import {Aboutpic} from '../assets/index'

const About = () => {
  return (
    <div className='w-full h-full my-36 max-w-7xl mx-auto'>
           <h2 className='text-3xl xl:text-4xl antialiased font-extrabold mb-32 text-slate-700 text-left sm:text-center px-5 sm:px-0'> "Hilltop Agency es tu Agencia de confianza en Andorra <br /> Servicio Personalizado de principio a fin." </h2>
           <h3 className="text-3xl text-center antialiased  font-bold mb-20 mt-20 lg:mt-0 sm:text-left sm:pl-14">Sobre <span className='text-cyan-500'> Hilltop Agency </span></h3>
    <div className="h-full 2xl:h-screen  xl:max-w-7xl lg:w-[90%]  mx-auto">
        <div className="w-full text-left mb-10 sm:mb-0 px-5">
           <p className="text-lg text-slate-700 mb-3">
             Comencé mi carrera en la industria de la construcción y administración, donde obtuve una
           comprensión sólida de los cimientos del mundo inmobiliario. 
           Luego, me aventuré en el apasionante sector de la gestión hotelera, donde aprendí la importancia de la hospitalidad y la
           satisfacción del cliente. 
           </p>
           <p className="text-lg text-slate-700 mb-3">
             En los últimos 10 años, tuve la valiosa oportunidad de unirme a una empresa familiar y
           respetada de Andorra en el ámbito inmobiliario. Donde aprendí el oficio y disfruté mucho
           con el trato al cliente. Me di cuenta que la satisfacción del cliente no solo es un objetivo, sino
           una fuente de gratificación personal. 
           </p>
           <p className="text-lg text-slate-700">
             En Hilltop Agency, la relación con los clientes es fundamental. Mi enfoque principal es
           garantizar que cada cliente experimente la diferencia y superar sus espectativas. Valoramos la
           transparencia y la claridad en todas nuestras interacciones. Comprometidos a brindarte un
           servicio personalizado y profesional que asegure tu satisfacción en cada paso con nosotros.
           </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center mt-20">
          <div className='w-full text-left h-full'>
            <h3 className='text-2xl antialiased font-semibold mb-10 text-center sm:text-left'>Laura Lopez Tohà - <span className='text-cyan-500'>Fundadora</span></h3>
            <p className="text-lg text-slate-700 mt-10 px-5">Mi nombre es Laura, nací en Andorra y he tenido el privilegio de llamarlo mi hogar durante toda mi vida. Mi viaje profesional me ha llevado por diversos caminos, cada uno de los cuales ha contribuido a mi crecimiento tanto a nivel personal como profesional.
            <br />
Comenzando mi carrera en la industria de la construcción y administración, luego, me aventuré en el apasionante sector de la gestión hotelera y en los últimos 10 años, tuve la valiosa oportunidad de unirme a una empresa familiar de Andorra en el ámbito inmobiliario. 
<br />
Durante todos estos años, me di cuenta que la satisfacción del cliente no solo es un objetivo, sino una fuente constante de gratificación personal.
La conexión con las personas, comprender sus necesidades y brindar soluciones efectivas ha sido una experiencia enriquecedora y fundamental en mi trayectoria. </p>
          </div>
        <div className='w-full mt-10 sm:mt-0'>
           <img src={Aboutpic} alt="About me" className="rounded-lg w-1/2 mx-auto" />

        </div>
        </div>
    </div>
    </div>
  )
}

export default About