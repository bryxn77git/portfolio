import React from 'react'
import ReactDOM from 'react-dom/client'

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './lang/es/global.json'
import global_en from './lang/en/global.json'

import { Home } from './Home'
import './index.css'

i18next.init({
  lng: "es",
  interpolation: {escapeValue: false},
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Home />
    </I18nextProvider>
  </React.StrictMode>,
)
