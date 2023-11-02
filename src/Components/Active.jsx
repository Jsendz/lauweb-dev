import React from 'react'



const Active = () => {
  return (
    <div >
      
      <div className="w-full h-full my-20">
      <h2 className="text-4xl font-bold py-10 px-5">Residencia Activa</h2>
      <p className="text-left text-xl p-5">
      La residencia fiscal activa se otorga a las personas que trabajan en Andorra y existen dos
maneras para obtenerla:
      </p>
      <div className="flex flex-col justify-evenly items-center ">
        <div>
        <h3 className="text-2xl font-bold text-left pl-5 py-10 ">Residencia activa por cuenta propia</h3>
        <p  className="text-xl text-left pl-3">
        Autoriza al solicitante a residir y a ejercer una actividad por cuenta propia de forma
permanente mediante la constitución de una empresa. Se debe fijar la residencia principal
efectiva en Andorra y residir durante al menos 183 días al año.
        </p>
        </div>
        <div>
        <h3 className="text-2xl font-bold text-left pl-5 py-10 ">Residencia activa por cuenta ajena</h3>
        <p  className="text-xl text-left pl-3">
        Autoriza al solicitante a residir y a trabajar en el Principado de Andorra de forma permanente
y efectiva obteniendo un contrato laboral indefinido por una empresa andorrana. Se debe fijar
la residencia principal efectiva en Andorra y residir durante al menos 183 días al año.
        </p >
        </div>
      </div>

      </div>
      <div className="px-2">
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
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
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
  )
}

export default Active