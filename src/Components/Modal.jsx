import React from "react";
import {useTranslation} from "react-i18next";
import Form from "./Form";


export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [t] = useTranslation("global");

  
  return (
    <>
      <button
        className="w-full bg-cyan-500 text-slate-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mt-1 mb-1 ease-linear transition-all duration-150 "
        type="button"
        onClick={() => setShowModal(true)}
      >
        {t("residencia.dosboton")}
      </button>
      {showModal ? (
        <>
          <div
            className="items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-xl ">
              {/*content*/}
              <div className=" h-[650px] border-0 rounded-xl shadow-lg relative w-full bg-white outline-none focus:outline-none pt-10 text-xl">
                {/*header*/}
      <button
                    className="p-1 ml-auto bg-white border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none rounded-lg"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black  h-10 w-6 text-2xl block outline-none focus:outline-none rounded-lg">
                      ×
                    </span>
                  </button>
               
            
                <Form />
                
               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
