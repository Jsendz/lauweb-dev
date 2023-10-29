import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-bold text-slate-800 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-slate-800 text-[16px] leading-[24px]">
        {content}
      </p>
      <button className="">Mas Informacion!</button>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className="h-screen w-full flex flex-row">
    <div className="w-full h-full flex flex-col justify-center pl-10">
      <h2 className="text-slate-800 font-bold text-5xl text-left">
       Residencia en Andorra
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-slate-800`}>
        En HILLTOP AGENCY, te acompañaremos en toda la tramitación de la residencia en Andorra que más se adapte a tus necesidades, facilitando en todo momento el proceso para que puedas disfrutarlo lo antes posible.
      </p>

      <Button styles={`mt-10 w-1/3`} />
    </div>

    <div className="w-full flex flex-col justify-center items-center">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
