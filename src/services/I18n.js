import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(HttpApi) // Registering the back-end plugin
  .init({
    // Remove resources from here
    lng: "de",
    fallbackLng:"en",
    interpolation: {
      escapeValue: false,
    },
    defaultNS:"translation",
    react: {
      wait: true,
      useSuspense: false,
    },
    debug: process.env.NODE_ENV === "development",
  });
export default i18next;

// i18next
//   .use(initReactI18next)
//   .init({
//     resources,
//     debug: true,
//     lng: "de",
//     interpolation: {
//       escapeValue: false,
//     },
//   });
// export default i18next;