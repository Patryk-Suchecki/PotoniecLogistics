import React, { useState, useContext } from 'react';

import translations from './translations.json';

export const LanguageContext = React.createContext();

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  const translate = (key) => {
    return translations[key][language];
  };
  return { translate };
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};