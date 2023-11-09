import React from 'react'
import {Key3} from '../assets/index.js';

const Consergeria = () => {
  return (
    <div id='Consergeria' className="w-full h-full
     bg-[url('src/assets/background3.jpg')] bg-no-repeat bg-cover py-20">
       <div className="flex flex-col lg:flex-row lg:justify-around mb-20 max-w-7xl mx-auto">
        <div className="w-full ">
        <h2 className="text-5xl  font-extrabold text-left mb-10 text-slate-100">Servicios y Conserjeria</h2>
        <p className="text-3xl text-left text-slate-200">En Hilltop Agency, entendemos que tu tiempo y tranquilidad son de gran valor. Nos
dedicamos a simplificar tu vida ocupándonos de una variedad de gestiones y trámites,
permitiéndo enfocarte en lo que realmente importa. A continuación, te presentamos
nuestros principales servicios:</p></div>
         <div className="w-full">
          <img src={Key3} alt="Set of Keys"  className="mx-auto"/>
         </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:flex-wrap xl:max-w-6xl 2xl:max-w-7xl lg:pl-14 xl:m-auto ">
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">Trámites Administrativos</h3>
        <p className="text-left px-5 lg:px-0">Nos encargamos de toda la burocracia y trámites administrativos que necesites realizar,
tanto a nivel personal como empresarial. Desde la obtención de licencias y permisos hasta
la gestión de documentación, estamos aquí para hacer que estos procesos sean ágiles y
eficientes.</p>
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">Gestión de propiedades alquiladas</h3>
        <p className="text-left px-5 lg:px-0">Si eres propietario de propiedades en alquiler, nos ocupamos de todo, desde la búsqueda
de inquilinos, revisión, gestión de contratos, mantenimiento, asistencia en reuniones de
comunidad y recibos de alquiler asegurando que tu inversión esté en buenas manos.</p>
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">Organización y Seguimiento de Reformas en
Inmuebles</h3>
        <p className="text-left px-5 lg:px-0">Si estás planeando una reforma en tu inmueble, nosotros te acompañamos en todo el
proceso. Desde la planificación inicial hasta la supervisión y coordinación de los trabajos,
aseguramos que tu proyecto se lleve a cabo según tus expectativas y en los plazos
establecidos.</p>
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">Intervención en Caso de Siniestro</h3>
        <p className="text-left px-5 lg:px-0">Si estás planeando una reforma en tu inmueble, nosotros te acompañamos en todo el
proceso. Desde la planificación inicial hasta la supervisión y coordinación de los trabajos,
aseguramos que tu proyecto se lleve a cabo según tus expectativas y en los plazos
establecidos.</p>
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">Ayuda en la Gestión del Hogar</h3>
        <p className="text-left px-5 lg:px-0">Facilitamos tu vida diaria ocupándonos de las gestiones relacionadas con tu hogar. Desde
pagos de facturas hasta programación de servicios, estamos aquí para garantizar que todo
esté en orden y funcione sin contratiempos, permitiéndote disfrutar de tu hogar al máximo.</p>
      </div>
      <div className="flex flex-col items-left justify-around lg:justify-start rounded-lg bg-white p-5 lg:m-2 my-2 shadow-lg shadow-gray-400 lg:w-[30%] w-full ">
        <h3 className="text-xl font-extrabold text-left px-5">Presencia In Situ en Caso de Ausencia</h3>
        <p className="text-left px-5 lg:px-0">Cuando no puedas estar presente, nosotros lo estaremos por ti. Ofrecemos presencia in situ
para supervisar y asegurar tu propiedad, recibir entregas, coordinar servicios y brindar
tranquilidad mientras estás ausente, garantizando que todo esté en perfecto orden a tu
regreso.</p>
      </div>
      </div>
        
    </div>
  )
}

export default Consergeria