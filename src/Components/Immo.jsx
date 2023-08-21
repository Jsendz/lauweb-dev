import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
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
  
  const Immo = () =>  (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2} text-slate-800`}>
         Inmobiliaria.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-slate-800`}>
        Uno de los pasos más importantes es encontrar vivienda en Andorra, por eso en HillTop Agency con 10 años de experiencia en el sector inmobiliario, queremos facilitar a nuestros clientes la búsqueda ocupándonos personalmente de todo el proceso.
Nos adaptamos a las necesidades de cada cliente con el fin de asegurar la mejor calidad de servicio y experiencia
        </p>
  
        <Button styles={`mt-10`} />
      </div>
  
      
    </section>
  );

export default Immo