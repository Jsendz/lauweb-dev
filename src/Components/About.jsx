import React from 'react'
import {Aboutpic} from '../assets/index'

const About = () => {
  return (
    <div className="lg:h-screen flex flex-row max-w-7xl mx-auto justify-around items-center">
        <div className=" text-left">
           <h2 className="text-5xl font-extrabold mb-10">Sobre Hilltop Agency</h2>
           <p className="text-xl w-3/4 mb-3">
             Comencé mi carrera en la industria de la construcción y administración, donde obtuve una
           comprensión sólida de los cimientos del mundo inmobiliario. Luego, me aventuré en el
           apasionante sector de la gestión hotelera, donde aprendí la importancia de la hospitalidad y la
           satisfacción del cliente. 
           </p>
           <p className="text-xl w-3/4 mb-3">
             En los últimos 10 años, tuve la valiosa oportunidad de unirme a una empresa familiar y
           respetada de Andorra en el ámbito inmobiliario. Donde aprendí el oficio y disfruté mucho
           con el trato al cliente. Me di cuenta que la satisfacción del cliente no solo es un objetivo, sino
           una fuente de gratificación personal. 
           </p>
           <p className="text-xl w-3/4">
             En Hilltop Agency, la relación con los clientes es fundamental. Mi enfoque principal es
           garantizar que cada cliente experimente la diferencia y superar sus espectativas. Valoramos la
           transparencia y la claridad en todas nuestras interacciones. Comprometidos a brindarte un
           servicio personalizado y profesional que asegure tu satisfacción en cada paso con nosotros.
           </p>
        </div>
        <div className='w-full'>
           <img src={Aboutpic} alt="About me" className="rounded-lg" />

        </div>
    </div>
  )
}

export default About