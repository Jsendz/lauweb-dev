import styles from "../style";


const Hero = () => {
  return (
    <section id="home" className="w-full text-slate-800 mb-10">
      <div className="flex flex-row w-full">
        

        
          <h1 className="w-full text-center font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
            Hilltop {" "}
            <span className="text-gradient">Agency</span>.
          </h1>
          
        </div>
        <div>

        <p className={`${styles.paragraph} w-full text-center text-slate-800 mt-5 mx-0`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        </div>
        
      

      
    </section>
  );
};

export default Hero;
