import i18next from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import HttpBackend from 'i18next-http-backend'
import ChainedBackend from 'i18next-chained-backend'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(LanguageDetector)
  .use(ChainedBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'zh', // use en if detected lng is not available
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend((lng:unknown, ns:unknown) => import(`../../locales/${lng}/${ns}.json`))
      ],
      backendOptions: [{
        loadPath: '/locales/{{lng}}/{{ns}}.json'
      }]
    }
  })
