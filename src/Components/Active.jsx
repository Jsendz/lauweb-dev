import React from 'react'
import { feature2 } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== feature2.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 hover:text-slate-200">
      <h4 className="font-poppins font-semibold text-slate-800 text-3xl leading-[23.4px] mb-5 text-left">
        {title}
      </h4>
      <p className="font-poppins font-normal text-slate-800  text-xl leading-[24px text-left">
        {content}
      </p>
      
    </div>
  </div>
);


const Active = () => {
  return (
    <div className="bg-[url('src/assets/sky.png')]">
    <div className="lg:flex lg:flex-row justify-around items-center max-w-7xl mx-auto">
      
      <div className="w-full h-full my-20">
      <h2 className="text-6xl font-bold py-10 px-5 text-left rounded-lg">Residencia Activa</h2>
      <p className="text-left text-xl p-5">
      La residencia fiscal activa se otorga a las personas que trabajan en Andorra y existen dos
maneras para obtenerla:
      </p>
      <div className="w-full flex flex-col justify-center">
      {feature2.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>

      </div>
      <div className="px-2 w-[70%]">
      <section className="text-gray-200 body-font relative rounded-xl bg-slate-800">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-100 underline underline-offset-8">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className=" md:w-2/3 lg:w-full mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-100">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-100"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-cyan-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="concept" className="leading-7 text-sm text-gray-100">
                    Concepto
                  </label>
                  <input
                    type="text"
                    id="concept"
                    name="concept"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-100"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-cyan-500 border-0 py-2 px-8 focus:outline-none hover:bg-cyan-600 rounded text-lg">
                  Button
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
      
    
    </div>
    </div>
  )
}

export default Active