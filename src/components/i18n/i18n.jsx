import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Используем HTTP-загрузку
  .use(initReactI18next)
  .init({
    lng: 'uz',
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Путь к JSON-файлам
    },
    interpolation: { escapeValue: false },
  });

export default i18n;