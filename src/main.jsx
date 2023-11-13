import React from 'react'
import ReactDOM from 'react-dom/client'

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './lang/es/global.json'
import global_en from './lang/en/global.json'
import './index.css'
import { UiProvider } from './context/uiContext/UiProvider';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

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
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <UiProvider>
        <App />
      </UiProvider>
    </I18nextProvider>
  </BrowserRouter>,
)
