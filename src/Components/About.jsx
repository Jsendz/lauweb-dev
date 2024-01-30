import React from 'react'
import {Aboutpic} from '../assets/index'

const About = () => {
  return (
    <div className='w-full h-full my-36 max-w-7xl mx-auto'>
           <h2 className='text-4xl xl:text-5xl antialiased font-extrabold mb-32 text-slate-700'> "Hilltop Agency es tu Agencia de confianza en Andorra <br /> Servicio Personalizado de principio a fin." </h2>
           <h3 className="text-3xl text-center antialiased  font-bold mb-20 mt-20 lg:mt-0 sm:text-left sm:pl-14">Sobre <span className='text-cyan-500'> Hilltop Agency </span></h3>
    <div className="h-full 2xl:h-screen  xl:max-w-7xl lg:w-[90%]  mx-auto">
        <div className="w-full text-left mb-10 sm:mb-0">
           <p className="text-lg text-slate-600 mb-3">
             Comencé mi carrera en la industria de la construcción y administración, donde obtuve una
           comprensión sólida de los cimientos del mundo inmobiliario. 
           Luego, me aventuré en el apasionante sector de la gestión hotelera, donde aprendí la importancia de la hospitalidad y la
           satisfacción del cliente. 
           </p>
           <p className="text-lg text-slate-600 mb-3">
             En los últimos 10 años, tuve la valiosa oportunidad de unirme a una empresa familiar y
           respetada de Andorra en el ámbito inmobiliario. Donde aprendí el oficio y disfruté mucho
           con el trato al cliente. Me di cuenta que la satisfacción del cliente no solo es un objetivo, sino
           una fuente de gratificación personal. 
           </p>
           <p className="text-lg text-slate-600">
             En Hilltop Agency, la relación con los clientes es fundamental. Mi enfoque principal es
           garantizar que cada cliente experimente la diferencia y superar sus espectativas. Valoramos la
           transparencia y la claridad en todas nuestras interacciones. Comprometidos a brindarte un
           servicio personalizado y profesional que asegure tu satisfacción en cada paso con nosotros.
           </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center mt-20">
          <div className='w-full text-left h-full'>
            <h3 className='text-2xl antialiased font-semibold mb-10'>Laura Lopez Tohà - <span className='text-cyan-500'>Fundadora</span></h3>
            <p className="text-lg text-slate-600 mt-10">Comencé mi carrera en la industria de la construcción y administración, donde obtuve una
           comprensión sólida de los cimientos del mundo inmobiliario. 
           Luego, me aventuré en el apasionante sector de la gestión hotelera, donde aprendí la importancia de la hospitalidad y la
           satisfacción del cliente. </p>
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