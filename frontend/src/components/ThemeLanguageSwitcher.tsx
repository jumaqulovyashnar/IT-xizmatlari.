"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Globe, Palette, Moon, Sun, Laptop } from "lucide-react";

export const THEMES = [
  { id: "dark", name: "Dark (Tungi)", icon: "🌙" },
  { id: "light", name: "Light (Kunduzgi)", icon: "☀️" },
  { id: "night", name: "Night (IT Ko'k)", icon: "🌌" },
  { id: "corporate", name: "Corporate", icon: "🏢" },
  { id: "synthwave", name: "Synthwave", icon: "⚡" },
  { id: "cyberpunk", name: "Cyberpunk", icon: "🤖" },
  { id: "dracula", name: "Dracula", icon: "🧛" },
  { id: "business", name: "Business", icon: "💼" },
];

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

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("it_services_theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleDarkLight = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    handleThemeChange(nextTheme);
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

      {/* 2. Quick Dark / Light Toggle Button */}
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

      {/* 3. Theme Palette Selector Dropdown */}
      <div className="dropdown dropdown-end">
        <label 
          tabIndex={0} 
          title="Barcha rangli mavzular"
          className="btn btn-sm btn-ghost px-2.5 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl cursor-pointer text-slate-200 transition-all shadow-sm"
        >
          <Palette className="w-4 h-4 text-blue-400" />
        </label>
        <ul 
          tabIndex={0} 
          className="dropdown-content z-[100] menu p-2 shadow-2xl bg-slate-900 border border-slate-800 text-slate-200 rounded-2xl w-48 mt-2 max-h-72 overflow-y-auto space-y-1"
        >
          <li className="menu-title text-[10px] uppercase font-black tracking-wider text-slate-400 px-3 py-1">
            Mavzular (Themes)
          </li>
          {THEMES.map((th) => (
            <li key={th.id}>
              <button 
                onClick={() => handleThemeChange(th.id)}
                className={`text-xs font-semibold py-2 px-3 rounded-lg flex items-center justify-between hover:bg-blue-600 hover:text-white transition-colors ${theme === th.id ? "bg-blue-600 text-white font-bold" : ""}`}
              >
                <span>{th.name}</span>
                <span>{th.icon}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
