import i18 from 'i18next'
import { initReactI18next } from 'react-i18next'
import lanDtc from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18
    .use(Backend)
    .use(lanDtc)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en'
    })

    export default i18