import { useContext, useEffect, useState } from "react";
import {LanguageContext} from "../context/LanguageContext";

export const useTranslations = () => {
  const { locale } = useContext(LanguageContext);
  const [translations, setTranslations] = useState({});
  
  useEffect(() => {
    // Dynamically import the correct locale file based on the current locale.
    import(`public/locales/${locale}.json`)
        .then((module) => {
          setTranslations(module.default);
        })
        .catch((error) => {
          console.error("Error loading locale file:", error);
        });
  }, [locale]);
  
  return translations;
};
