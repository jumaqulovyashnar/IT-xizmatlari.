"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Globe, Moon, Sun } from "lucide-react";

export function ThemeLanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("it_services_theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkLight = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("it_services_theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const handleSelectLanguage = (lang: "uz" | "en" | "ru") => {
    setLanguage(lang);
    setIsOpen(false);
    (document.activeElement as HTMLElement)?.blur();
  };

  return (
    <div className="flex items-center gap-2 shrink-0">
      {/* 1. Language Dropdown */}
      <div className={`relative ${isOpen ? "z-50" : ""}`}>
        <button 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Tilni tanlash (Select language)"
          aria-expanded={isOpen}
          className="flex items-center justify-center gap-1.5 px-3 h-10 bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-full cursor-pointer text-xs font-bold transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shrink-0"
        >
          <Globe className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0" />
          <span className="uppercase tracking-wider font-extrabold text-xs">{language}</span>
        </button>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <ul 
              className="absolute right-0 top-full mt-2 z-50 p-1.5 shadow-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 rounded-2xl w-36 space-y-1"
            >
              <li>
                <button 
                  type="button"
                  onClick={() => handleSelectLanguage("uz")} 
                  className={`w-full text-left text-xs font-semibold py-2 px-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors ${language === "uz" ? "bg-blue-600 text-white font-bold" : ""}`}
                >
                  🇺🇿 O'zbekcha
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => handleSelectLanguage("en")} 
                  className={`w-full text-left text-xs font-semibold py-2 px-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors ${language === "en" ? "bg-blue-600 text-white font-bold" : ""}`}
                >
                  🇬🇧 English
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => handleSelectLanguage("ru")} 
                  className={`w-full text-left text-xs font-semibold py-2 px-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors ${language === "ru" ? "bg-blue-600 text-white font-bold" : ""}`}
                >
                  🇷🇺 Русский
                </button>
              </li>
            </ul>
          </>
        )}
      </div>

      {/* 2. Dark-Light Theme Toggle */}
      <button
        type="button"
        onClick={toggleDarkLight}
        aria-label="Mavzuni almashtirish (Toggle dark and light theme)"
        className="w-10 h-10 min-w-[40px] flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-blue-500 dark:text-blue-400 transition-all shadow-sm group hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shrink-0"
      >
        {theme === "light" ? (
          <Sun className="w-4 h-4 text-amber-500 rotate-0 transition-transform shrink-0" />
        ) : (
          <Moon className="w-4 h-4 text-blue-400 group-hover:-rotate-12 transition-transform shrink-0" />
        )}
      </button>
    </div>
  );
}
