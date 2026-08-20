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
    <div className="flex items-center gap-2">
      {/* 1. Language Dropdown */}
      <div className="dropdown dropdown-end">
        <label 
          tabIndex={0} 
          className="btn btn-sm btn-ghost gap-1.5 px-3 py-1 bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl cursor-pointer text-xs font-bold transition-all shadow-sm"
        >
          <Globe className="w-3.5 h-3.5 text-blue-400" />
          <span className="uppercase tracking-wider">{language}</span>
        </label>
        <ul 
          tabIndex={0} 
          className="dropdown-content z-[100] menu p-2 shadow-2xl bg-slate-900 border border-slate-800 text-slate-200 rounded-2xl w-36 mt-2 space-y-1"
        >
          <li>
            <button 
              onClick={() => setLanguage("uz")} 
              className={`text-xs font-semibold py-2 px-3 rounded-lg hover:bg-blue-600 hover:text-white ${language === "uz" ? "bg-blue-600 text-white font-bold" : ""}`}
            >
              🇺🇿 O'zbekcha
            </button>
          </li>
          <li>
            <button 
              onClick={() => setLanguage("en")} 
              className={`text-xs font-semibold py-2 px-3 rounded-lg hover:bg-blue-600 hover:text-white ${language === "en" ? "bg-blue-600 text-white font-bold" : ""}`}
            >
              🇬🇧 English
            </button>
          </li>
          <li>
            <button 
              onClick={() => setLanguage("ru")} 
              className={`text-xs font-semibold py-2 px-3 rounded-lg hover:bg-blue-600 hover:text-white ${language === "ru" ? "bg-blue-600 text-white font-bold" : ""}`}
            >
              🇷🇺 Русский
            </button>
          </li>
        </ul>
      </div>

      {/* 2. Simple Sun/Moon Dark-Light Switch Toggle */}
      <button
        onClick={toggleDarkLight}
        title="Mavzuni almashtirish (Dark / Light)"
        className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800/80 hover:bg-slate-700 border border-slate-700 text-blue-400 hover:text-white transition-all shadow-sm group"
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
