import {useContext} from "react";
import {LanguageContext} from "../../context/LanguageContext";

import styles from "./LanguageSwitcher.module.scss";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useContext(LanguageContext);
  const locales = ["ru", "en"];
  
  const handleLocaleChange = (newLocale) => {
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  };
  
  return (
      <div className={`${styles.wrapper} flex items-center gap-4 md:gap-3`}>
        {locales.map((loc) => (
            <span
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className={`cursor-pointer capitalize ${loc === locale ? "underline" : "no-underline"}`}
            >
          {loc}
        </span>
        ))}
      </div>
  );
};

export default LanguageSwitcher;