"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.uz;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem("it_services_lang") as Language;
      if (saved && (saved === "uz" || saved === "en" || saved === "ru")) {
        return saved;
      }
    } catch (e) {}
  }
  return "uz";
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("it_services_lang") as Language;
      if (saved && (saved === "uz" || saved === "en" || saved === "ru")) {
        setLanguageState(saved);
      }
    } catch (e) {}
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("it_services_lang", lang);
      document.cookie = `it_services_lang=${lang}; path=/; max-age=31536000`;
    } catch (e) {}
  };

  const t = translations[language] || translations.uz;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
