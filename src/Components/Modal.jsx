import React from "react";
import Form from "./Form";
import {useTranslation} from "react-i18next";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [t] = useTranslation("global");
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {t("inicio.boton")}
      </button>
      {showModal ? (
        <Form />
      ) : null}
    </>
  );
}