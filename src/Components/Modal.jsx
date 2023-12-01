import React from "react";
import Form from "./Form";
import {useTranslation} from "react-i18next";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [t] = useTranslation("global");
  return (
    <>
      <button
        className="p-5 rounded-lg bg-slate-200 w-1/2 text-slate-800 font-bold mx-auto mt-5 ease-linear transition-all duration-150"
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