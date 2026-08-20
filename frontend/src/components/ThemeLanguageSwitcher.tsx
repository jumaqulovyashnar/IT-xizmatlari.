"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Globe, Palette, Moon, Sun } from "lucide-react";

export const DAISY_THEMES = [
  { id: "dark", name: "Dark" },
  { id: "light", name: "Light" },
  { id: "night", name: "Night (IT Blue)" },
  { id: "corporate", name: "Corporate" },
  { id: "synthwave", name: "Synthwave" },
  { id: "cyberpunk", name: "Cyberpunk" },
  { id: "dracula", name: "Dracula" },
  { id: "business", name: "Business" },
];

export function ThemeLanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("it_services_theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("it_services_theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Language Selector Dropdown (DaisyUI) */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-sm gap-1 text-xs font-semibold">
          <Globe className="w-4 h-4 text-primary" />
          <span className="uppercase">{language}</span>
        </label>
        <ul tabIndex={0} className="dropdown-content z-[100] menu p-2 shadow-2xl bg-base-200 border border-base-300 rounded-box w-32 mt-2">
          <li>
            <button 
              onClick={() => setLanguage("uz")} 
              className={language === "uz" ? "active font-bold" : ""}
            >
              🇺🇿 O'zbek
            </button>
          </li>
          <li>
            <button 
              onClick={() => setLanguage("en")} 
              className={language === "en" ? "active font-bold" : ""}
            >
              🇬🇧 English
            </button>
          </li>
          <li>
            <button 
              onClick={() => setLanguage("ru")} 
              className={language === "ru" ? "active font-bold" : ""}
            >
              🇷🇺 Русский
            </button>
          </li>
        </ul>
      </div>

      {/* DaisyUI Theme Selector Dropdown */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-sm gap-1 text-xs font-semibold">
          <Palette className="w-4 h-4 text-secondary" />
          <span className="capitalize hidden sm:inline">{theme}</span>
        </label>
        <ul tabIndex={0} className="dropdown-content z-[100] menu p-2 shadow-2xl bg-base-200 border border-base-300 rounded-box w-44 mt-2 max-h-60 overflow-y-auto">
          {DAISY_THEMES.map((th) => (
            <li key={th.id}>
              <button 
                onClick={() => handleThemeChange(th.id)}
                className={`text-xs capitalize ${theme === th.id ? "active font-bold" : ""}`}
              >
                {th.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
