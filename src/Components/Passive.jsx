import React from 'react'

const Passive = () => {
  return (
    <div className="" >
      <div className="py-20">
      <h2 className="text-6xl font-bold py-10 w-full">Residencia Passiva</h2>
      <p className="text-2xl text-left pl-5 pb-10">Los permisos de residencia pasiva permiten residir fisicamente en Andorra, pero no dan
derecho a poder trabajar. Existes hasta tres tipos de residencia pasiva que se pueden solicitar
en Andorra</p>
<ul className="flex flex-col items-left justify-evenly list-decimal">
  <li className="text-3xl font-semibold list-decimal w-[85%] ml-10 text-left">Residencia sin actividad lucrativa</li>
  <p className="text-xl text-left w-[90%] mx-auto py-10">
  Autoriza a residir en el país sin ejercer actividad laboral ni profesional.
Este tipo de residencia se realiza por inversión en activos andorranos (inversión mínima de
600.000€) más un depósito reembolsable de 47.500 euros a l’AFA (Agencia Financiera
Andorrana) y 9.500 euros adicionales por persona a cargo. Se debe establecer la residencia
principal y efectiva en el Principado de Andorra durante al menos 90 días al año.
  </p>
  <li className="text-3xl font-semibold w-[90%] ml-10 text-left">Residencia para profesionales con proyeccion internacional</li>
  <p className="text-xl text-left w-[90%] mx-auto py-10">
  Este tipo de residencia pasiva en Andorra está dirigida a profesionales con una actividad
internacional sin apenas intervención en el mercado andorrano. La sede o base de la actividad
debe estar situada en el Principado de Andorra y al menos el 85 % de los servicios prestados
deben tener como destinatarios personas o entidades no residentes en el Principado.
Se deberá entregar un depósito reembolsable en el AFA (Agencia Financiera Andorrana) de
47.500 euros y 9.500 euros adicionales por casa persona a nombre del titular, y residir en
Andorra durante al menos 90 días al año

  </p>
  <li className="text-3xl font-semibold w-[90%] ml-10 text-left">Residencia por razones de interes cientifico, cultural o deportivo</li>
  <p className="text-xl text-left w-[90%] mx-auto py-10">
  Este tipo de residencia esta dirigida a personas que tienen reputación y acreditación como
deportista de elite, artista o investigador con prestigio internacional reconocido. Al menos
un 85 % de los servicios prestados deben ser utilizados en el extranjero. Se deberá
entregar un depósito reembolsable en el AFA (Agencia Financiera Andorrana) de 47.500
euros y 9.500 euros adicionales por casa persona a nombre del titular, y residir en Andorra
durante al menos 90 días al año.

  </p>
</ul>
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

export default Passive