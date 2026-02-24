import { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../locales/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');

    useEffect(() => {
        const savedLang = localStorage.getItem('language');
        if (savedLang) {
            setLanguage(savedLang);
        } else {
            const browserLang = navigator.language.split('-')[0];
            if (['en', 'fr'].includes(browserLang)) {
                setLanguage(browserLang);
            }
        }
    }, []);

    const t = (key) => {
        return translations[language][key] || key;
    };

    const toggleLanguage = () => {
        const newLang = language === 'fr' ? 'en' : 'fr';
        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};

