"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Globe, Moon, Sun } from "lucide-react";

export function ThemeLanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("it_services_theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleDarkLight = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("it_services_theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2.5">
      {/* 1. Language Dropdown - Yumaloq (rounded-full) */}
      <div className="dropdown dropdown-end">
        <label 
          tabIndex={0} 
          className="btn btn-sm btn-ghost gap-2 px-3.5 h-10 min-h-[40px] bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-full cursor-pointer text-xs font-bold transition-all shadow-sm flex items-center"
        >
          <Globe className="w-4 h-4 text-blue-400" />
          <span className="uppercase tracking-wider font-extrabold">{language}</span>
        </label>
        <ul 
          tabIndex={0} 
          className="dropdown-content z-[100] menu p-2 shadow-2xl bg-slate-900 border border-slate-800 text-slate-200 rounded-2xl w-36 mt-2 space-y-1"
        >
          <li>
            <button 
              onClick={() => setLanguage("uz")} 
              className={`text-xs font-semibold py-2 px-3 rounded-xl hover:bg-blue-600 hover:text-white ${language === "uz" ? "bg-blue-600 text-white font-bold" : ""}`}
            >
              🇺🇿 O'zbekcha
            </button>
          </li>
          <li>
            <button 
              onClick={() => setLanguage("en")} 
              className={`text-xs font-semibold py-2 px-3 rounded-xl hover:bg-blue-600 hover:text-white ${language === "en" ? "bg-blue-600 text-white font-bold" : ""}`}
            >
              🇬🇧 English
            </button>
          </li>
          <li>
            <button 
              onClick={() => setLanguage("ru")} 
              className={`text-xs font-semibold py-2 px-3 rounded-xl hover:bg-blue-600 hover:text-white ${language === "ru" ? "bg-blue-600 text-white font-bold" : ""}`}
            >
              🇷🇺 Русский
            </button>
          </li>
        </ul>
      </div>

      {/* 2. Simple Sun/Moon Dark-Light Switch Toggle - Yumaloq (rounded-full) */}
      <button
        onClick={toggleDarkLight}
        title="Mavzuni almashtirish (Dark / Light)"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-blue-400 hover:text-white transition-all shadow-sm group hover:scale-105"
      >
        {theme === "light" ? (
          <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
        ) : (
          <Moon className="w-4 h-4 text-blue-400 group-hover:-rotate-12 transition-transform" />
        )}
      </button>
    </div>
  );
}
