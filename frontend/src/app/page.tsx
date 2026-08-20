"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ThemeLanguageSwitcher } from "@/components/ThemeLanguageSwitcher";
import { Button } from "@/components/ui/button";
import { 
  Laptop, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Globe2, 
  Cpu, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck, 
  MapPin, 
  Zap, 
  Rocket, 
  Check, 
  ChevronRight,
  TrendingUp,
  BarChart3,
  Sparkles,
  ArrowRight,
  ExternalLink
} from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <header className="navbar bg-slate-900/90 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 px-4 sm:px-8">
        <div className="navbar-start">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {t.brandName}
              </span>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-7 text-sm font-bold">
            <li>
              <a 
                href="#" 
                className="relative py-2 text-slate-300 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300"
              >
                {t.nav.home}
              </a>
            </li>
            <li>
              <a 
                href="#section-websites" 
                className="relative py-2 text-slate-300 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300"
              >
                {t.nav.web}
              </a>
            </li>
            <li>
              <a 
                href="#section-mobile" 
                className="relative py-2 text-slate-300 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300"
              >
                {t.nav.mobile}
              </a>
            </li>
            <li>
              <a 
                href="#section-landing" 
                className="relative py-2 text-slate-300 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300"
              >
                {t.nav.landing}
              </a>
            </li>
            <li>
              <a 
                href="#section-projects" 
                className="relative py-2 text-slate-300 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300"
              >
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a 
                href="tel:+998919517335" 
                className="relative py-2 text-slate-300 hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300"
              >
                {t.nav.contact}
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <ThemeLanguageSwitcher />
          <a href="tel:+998919517335">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-lg shadow-blue-500/30 gap-2 border-0 h-9 px-4">
              <Zap className="w-4 h-4" /> {t.nav.orderNow}
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto space-y-8 relative z-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.22] sm:leading-[1.18] lg:leading-[1.15] text-white drop-shadow-sm pb-1">
            {t.hero.titleStart} <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent font-black drop-shadow-[0_2px_20px_rgba(59,130,246,0.4)]">
              {t.hero.titleGradient}
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300/90 font-normal leading-[1.75] sm:leading-[1.8] tracking-normal">
            {t.hero.subtitle}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+998919517335">
              <Button size="lg" className="gap-2.5 bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/40 w-full sm:w-auto font-extrabold text-lg h-14 px-8 border-0">
                <PhoneCall className="w-6 h-6 animate-pulse" /> {t.phone}
              </Button>
            </a>
            <a href="#section-websites">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto font-bold text-lg h-14 px-8 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-blue-500 transition-all">
                {t.hero.viewServices}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1-CHI BO'LIM: E-COMMERCE & VEB-PLATFORMA (KRAKEN INDUSTRIAL-EDITORIAL)    */}
      {/* ========================================================================= */}
      <section 
        id="section-websites" 
        aria-labelledby="websites-heading"
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative"
      >
        {/* Two-Column Industrial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Natural & Clean Typography with Structured Features matching Card Height (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 
                id="websites-heading"
                className="text-3xl sm:text-4xl lg:text-[38px] xl:text-4xl font-black tracking-tight text-white leading-[1.15]"
              >
                {t.threeSections.section1.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-[1.65] font-normal">
                {t.threeSections.section1.desc}
              </p>
            </div>

            {/* Feature List to perfectly balance vertical height */}
            <div className="space-y-4 pt-1">
              {t.threeSections.section1.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3.5 p-2 -mx-2 rounded-xl transition-all duration-200 hover:bg-slate-900/60 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Precision Graphic Framed Showcase Image (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-2 sm:p-2.5 overflow-hidden transition-all duration-300 hover:border-slate-700 group">
              {/* Image Frame with Balanced Height */}
              <div className="relative h-[420px] sm:h-[460px] lg:h-[480px] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <img 
                  src="/ecommerce-showcase.png" 
                  alt="E-Commerce Veb-Saytlar va Onlayn Do'konlar interfeysi namunalari" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Technical Bottom Label */}
              <div className="px-3 pt-3 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SCALE: 100% // PRODUCTION TEMPLATE</span>
                <span className="text-blue-400 font-bold">100% RESPONSIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2-CHI BO'LIM: MOBIL ILOVALAR (iOS & ANDROID MOBILE APPS)                  */}
      {/* ========================================================================= */}
      <section 
        id="section-mobile" 
        aria-labelledby="mobile-heading"
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative border-t border-slate-800/80"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Precision Graphic Framed Mobile Image (7 cols) */}
          <div className="lg:col-span-7 w-full order-2 lg:order-1">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-2 sm:p-2.5 overflow-hidden transition-all duration-300 hover:border-slate-700 group">
              {/* Image Frame with Balanced Height */}
              <div className="relative h-[420px] sm:h-[460px] lg:h-[480px] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <img 
                  src="/mobile-showcase.png" 
                  alt="Mobile App Showcase" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Technical Bottom Label */}
              <div className="px-3 pt-3 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SCALE: 100% // PRODUCTION APP</span>
                <span className="text-blue-400 font-bold">iOS & ANDROID</span>
              </div>
            </div>
          </div>

          {/* Right Column: Natural & Clean Typography with Structured Features (5 cols) */}
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <div className="space-y-3">
              <h2 
                id="mobile-heading"
                className="text-3xl sm:text-4xl lg:text-[38px] xl:text-4xl font-black tracking-tight text-white leading-[1.15]"
              >
                {t.threeSections.section2.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-[1.65] font-normal">
                {t.threeSections.section2.desc}
              </p>
            </div>

            {/* Feature List matching vertical height */}
            <div className="space-y-4 pt-1">
              {t.threeSections.section2.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3.5 p-2 -mx-2 rounded-xl transition-all duration-200 hover:bg-slate-900/60 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3-CHI BO'LIM: YUQORI KONVERSIYALI LANDING PAGE (SOTUVCHI SAYTLAR)        */}
      {/* ========================================================================= */}
      <section 
        id="section-landing" 
        aria-labelledby="landing-heading"
        className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative border-t border-slate-800/80"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Natural & Clean Typography with Structured Features (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 
                id="landing-heading"
                className="text-3xl sm:text-4xl lg:text-[38px] xl:text-4xl font-black tracking-tight text-white leading-[1.15]"
              >
                {t.threeSections.section3.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-[1.65] font-normal">
                {t.threeSections.section3.desc}
              </p>
            </div>

            {/* Feature List matching vertical height */}
            <div className="space-y-4 pt-1">
              {t.threeSections.section3.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3.5 p-2 -mx-2 rounded-xl transition-all duration-200 hover:bg-slate-900/60 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Precision Graphic Framed Landing Page Image (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-2 sm:p-2.5 overflow-hidden transition-all duration-300 hover:border-slate-700 group">
              {/* Image Frame with Balanced Height */}
              <div className="relative h-[420px] sm:h-[460px] lg:h-[480px] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <img 
                  src="/landing-showcase.png" 
                  alt="Landing Page Website Showcase" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* Technical Bottom Label */}
              <div className="px-3 pt-3 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SCALE: 100% // PRODUCTION LANDING</span>
                <span className="text-blue-400 font-bold">HIGH CONVERTING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4-CHI BO'LIM: BIZNING LOYIHALAR (4 TA CARD 1 QATORDA - MAKSIMAL KENG EN)  */}
      {/* ========================================================================= */}
      <section id="section-projects" className="py-28 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1840px] mx-auto w-full border-t border-slate-800/80">
        <div className="space-y-14">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {t.projectsSection.title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              {t.projectsSection.subtitle}
            </p>
          </div>

          {/* 4 Extra-Wide Cards in 1 Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {t.projectsSection.items.map((proj, idx) => (
              <a 
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-slate-900/90 border-2 border-slate-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-2"
              >
                {/* Large Screenshot Image - 100% Fully Visible */}
                <div className="w-full h-60 sm:h-68 lg:h-76 overflow-hidden bg-slate-950 border-b border-slate-800/80 p-3.5 flex items-center justify-center">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Content with Generous Spacing */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block">
                      {proj.category}
                    </span>
                    <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-blue-300">
                    <span className="text-slate-400 font-mono text-xs truncate max-w-[200px]">{proj.link.replace("https://", "")}</span>
                    <span className="text-blue-400 font-black text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-8 bg-slate-900 text-slate-300 mt-auto border-t border-slate-800">
        <div>
          <p className="font-extrabold text-sm text-white">
            © 2026 IT Xizmatlar • Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            Veb-saytlar • Mobil Ilovalar • Landing Page
          </p>
        </div>
      </footer>
    </div>
  );
}
