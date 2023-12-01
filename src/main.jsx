import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
<<<<<<< HEAD
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';
import global_fr from './translations/fr/global.json';
import global_cat from './translations/cat/global.json';
import { ChakraProvider } from '@chakra-ui/react';
=======
import global_es from './Translations/es/global.json';
import global_en from './Translations/en/global.json';
import global_fr from './Translations/fr/global.json';
import global_cat from './Translations/cat/global.json';

>>>>>>> 9e361cfaed92627559895143776fd154964f69c6


i18next.init({
  interpolation: {escapeValue: false},
  lng:"es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
    cat: {
      global: global_cat,
    }
  }




})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
