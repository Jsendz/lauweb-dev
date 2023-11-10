import { t } from "i18next";
import { features } from "../constants";
import styles, { layout } from "../style";
import {useTranslation} from "react-i18next";


const FeatureCard = ({ icon, title, content, index }) => (

  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
        {title}
      </h4>
      <p className="font-poppins font-normal text-slate-800 text-xl leading-[24px text-left">
        {content}
      </p>
      <button className="">Mas Informacion!</button>
    </div>
  </div>
);

const Business = () =>  { 

  const [t] = useTranslation("global");

  return (
  <div id="features" className="w-full max-w-7xl lg:mx-auto h-full lg:h-screen flex flex-col lg:flex-row items-left my-40 2xl:my-20">
    <div className="w-full h-full flex flex-col justify-center p-5 lg:pl-10 mb-20 lg:mb-0">
      <h2 className="text-slate-800 font-bold text-5xl text-left">
       {t("residencia.titulo")}
      </h2>
      <p className="text-left mt-5 text-slate-800 text-xl mb-10 ">
        {t("residencia.paragrafo")}
      </p>

      <button className="p-5 text-white font-bold text-xl bg-slate-800 rounded-xl lg:w-1/3 ">{t("residencia.boton")}</button>
    </div>

    <div className="w-full flex flex-col justify-center">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </div>
  )
};

export default Business;
