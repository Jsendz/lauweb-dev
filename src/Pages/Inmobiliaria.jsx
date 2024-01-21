import React from 'react'

import styles, { layout } from "../style.js";

import { house } from '../assets/index.js';
import Modal from '../Components/Modal.jsx';


const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="Real Estate" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-slate-800 text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-slate-800 text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
  
  const Inmobiliaria = () =>  (
    <section  id="inmobiliaria" className="flex flex-col lg:flex-row h-full lg:h-screen w-full max-w-7xl lg:mx-auto justify-around items-center mb-40 lg:mb-0 lg:mt-40">
       <div className="w-full h-full mb-20 lg:mb-0 ">
        <img src={house} alt="" className="mx-auto" />
            

      </div>
      <div className="w-full h-full p-5 lg:pl-40 pt-10 flex flex-col items-left">
        <h2 className= " text-5xl lg:text-6xl text-slate-800 font-bold text-left pb-5">
         Inmobiliaria.
        </h2>
        <p className="max-w-[470px] mt-5 text-slate-800 text-left text-xl mb-10">
        Uno de los pasos más importantes es encontrar vivienda en Andorra, por eso en HillTop Agency con 10 años de experiencia en el sector inmobiliario, queremos facilitar a nuestros clientes la búsqueda ocupándonos personalmente de todo el proceso.
Nos adaptamos a las necesidades de cada cliente con el fin de asegurar la mejor calidad de servicio y experiencia
        </p>
  
        <div>
          <Modal />
        </div>
      </div>
     
  
      
    </section>
  );

export default Inmobiliaria