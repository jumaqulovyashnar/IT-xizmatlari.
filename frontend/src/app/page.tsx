"use client";

import React, { useState } from "react";
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
  ExternalLink,
  Menu,
  X
} from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* Navbar */}
      <header className="bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 px-4 sm:px-8 lg:px-16 min-h-[68px] sm:min-h-[80px] flex items-center transition-colors duration-300">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-lg sm:text-xl shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform shrink-0">
              <Laptop className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                {t.brandName}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-bold">
            <a 
              href="#" 
              className="relative py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
            >
              {t.nav.home}
            </a>
            <a 
              href="#section-websites" 
              className="relative py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
            >
              {t.nav.web}
            </a>
            <a 
              href="#section-mobile" 
              className="relative py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
            >
              {t.nav.mobile}
            </a>
            <a 
              href="#section-landing" 
              className="relative py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
            >
              {t.nav.landing}
            </a>
            <a 
              href="#section-projects" 
              className="relative py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors duration-200"
            >
              {t.nav.projects}
            </a>
          </nav>

          {/* Actions on Right */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeLanguageSwitcher />
            
            <a 
              href="https://t.me/yashnar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button size="sm" className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold shadow-lg shadow-blue-500/30 gap-2 border-0 h-10 px-4 sm:px-5 text-xs sm:text-sm hover:scale-105 transition-all">
                <Zap className="w-4 h-4" /> {t.nav.orderNow}
              </Button>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xl px-6 py-6 transition-all duration-300 z-50">
            <nav className="flex flex-col space-y-4 text-base font-bold">
              <a 
                href="#" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors"
              >
                {t.nav.home}
              </a>
              <a 
                href="#section-websites" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors"
              >
                {t.nav.web}
              </a>
              <a 
                href="#section-mobile" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors"
              >
                {t.nav.mobile}
              </a>
              <a 
                href="#section-landing" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors"
              >
                {t.nav.landing}
              </a>
              <a 
                href="#section-projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 py-1 transition-colors"
              >
                {t.nav.projects}
              </a>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
                <a 
                  href="https://t.me/yashnar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold shadow-lg shadow-blue-500/30 gap-2 border-0 h-11 text-sm">
                    <Zap className="w-4 h-4" /> {t.nav.orderNow}
                  </Button>
                </a>
                <a 
                  href="tel:+998919517335"
                  className="w-full"
                >
                  <Button variant="secondary" className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold gap-2 border border-slate-200 dark:border-slate-700 h-11 text-sm">
                    <PhoneCall className="w-4 h-4 text-blue-600 dark:text-blue-400" /> {t.phone}
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-14 sm:py-20 lg:py-24 px-4 sm:px-6 text-center overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8 relative z-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.22] sm:leading-[1.18] lg:leading-[1.15] text-slate-900 dark:text-white drop-shadow-sm pb-1">
            {t.hero.titleStart} <br />
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 dark:from-blue-400 dark:via-sky-300 dark:to-blue-500 bg-clip-text text-transparent font-black drop-shadow-[0_2px_20px_rgba(59,130,246,0.3)]">
              {t.hero.titleGradient}
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-600 dark:text-slate-300/90 font-normal leading-relaxed sm:leading-[1.8] tracking-normal px-2">
            {t.hero.subtitle}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <a href="tel:+998919517335" className="w-full sm:w-auto">
              <Button size="lg" className="gap-2.5 bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/40 w-full font-extrabold text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 border-0">
                <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" /> {t.phone}
              </Button>
            </a>
            <a href="#section-websites" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full font-bold text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 hover:border-blue-500 transition-all">
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
        className="py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative"
      >
        {/* Two-Column Industrial Grid matching exact 100% height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-stretch">
          {/* Left Column: Natural & Clean Typography with Structured Features (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-4">
              <h2 
                id="websites-heading"
                className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 dark:text-white leading-tight sm:leading-[1.2]"
              >
                {t.threeSections.section1.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-[17px] leading-relaxed font-medium">
                {t.threeSections.section1.desc}
              </p>
            </div>

            {/* Feature List to perfectly balance vertical height */}
            <div className="space-y-2.5 sm:space-y-4 pt-1 sm:pt-2">
              {t.threeSections.section1.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 p-2 sm:p-2.5 -mx-2 sm:-mx-2.5 rounded-xl sm:rounded-2xl transition-all duration-200 hover:bg-slate-200/60 dark:hover:bg-slate-900/60 group"
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-600/15 dark:bg-blue-600/20 border border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[18px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-0.5 sm:mt-1">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Precision Graphic Framed Showcase Image (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative h-full flex flex-col rounded-2xl sm:rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-1.5 sm:p-2.5 overflow-hidden transition-all duration-300 hover:border-blue-500/50 group shadow-xl dark:shadow-2xl">
              {/* Image Frame with Equal Height */}
              <div className="relative w-full h-[220px] sm:h-[340px] md:h-[420px] lg:h-full lg:min-h-[530px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
                <img 
                  src="/ecommerce-showcase.png" 
                  alt="E-Commerce Veb-Saytlar va Onlayn Do'konlar interfeysi namunalari" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
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
        className="py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-stretch">
          {/* Left Column: Precision Graphic Framed Mobile Image (7 cols) */}
          <div className="lg:col-span-7 w-full order-2 lg:order-1">
            <div className="relative h-full flex flex-col rounded-2xl sm:rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-1.5 sm:p-2.5 overflow-hidden transition-all duration-300 hover:border-blue-500/50 group shadow-xl dark:shadow-2xl">
              {/* Image Frame with Equal Height */}
              <div className="relative w-full h-[220px] sm:h-[340px] md:h-[420px] lg:h-full lg:min-h-[530px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
                <img 
                  src="/mobile-showcase.png" 
                  alt="Mobile App Showcase" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Natural & Clean Typography with Structured Features (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="space-y-2 sm:space-y-4">
              <h2 
                id="mobile-heading"
                className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 dark:text-white leading-tight sm:leading-[1.2]"
              >
                {t.threeSections.section2.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-[17px] leading-relaxed font-medium">
                {t.threeSections.section2.desc}
              </p>
            </div>

            {/* Feature List matching vertical height */}
            <div className="space-y-2.5 sm:space-y-4 pt-1 sm:pt-2">
              {t.threeSections.section2.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 p-2 sm:p-2.5 -mx-2 sm:-mx-2.5 rounded-xl sm:rounded-2xl transition-all duration-200 hover:bg-slate-200/60 dark:hover:bg-slate-900/60 group"
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-600/15 dark:bg-blue-600/20 border border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[18px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-0.5 sm:mt-1">
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
        className="py-10 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-stretch">
          {/* Left Column: Natural & Clean Typography with Structured Features (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-4">
              <h2 
                id="landing-heading"
                className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 dark:text-white leading-tight sm:leading-[1.2]"
              >
                {t.threeSections.section3.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-[17px] leading-relaxed font-medium">
                {t.threeSections.section3.desc}
              </p>
            </div>

            {/* Feature List matching vertical height */}
            <div className="space-y-2.5 sm:space-y-4 pt-1 sm:pt-2">
              {t.threeSections.section3.features.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 p-2 sm:p-2.5 -mx-2 sm:-mx-2.5 rounded-xl sm:rounded-2xl transition-all duration-200 hover:bg-slate-200/60 dark:hover:bg-slate-900/60 group"
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-600/15 dark:bg-blue-600/20 border border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[18px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mt-0.5 sm:mt-1">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Precision Graphic Framed Landing Page Image (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative h-full flex flex-col rounded-2xl sm:rounded-3xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-1.5 sm:p-2.5 overflow-hidden transition-all duration-300 hover:border-blue-500/50 group shadow-xl dark:shadow-2xl">
              {/* Image Frame with Equal Height */}
              <div className="relative w-full h-[220px] sm:h-[340px] md:h-[420px] lg:h-full lg:min-h-[530px] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
                <img 
                  src="/landing-showcase.png" 
                  alt="Landing Page Website Showcase" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4-CHI BO'LIM: BIZNING LOYIHALAR (4 TA CARD 1 QATORDA - MAKSIMAL KENG EN)  */}
      {/* ========================================================================= */}
      <section id="section-projects" className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1840px] mx-auto w-full border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
        <div className="space-y-8 sm:space-y-12">
          {/* Header */}
          <div className="text-center space-y-2 sm:space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {t.projectsSection.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-lg">
              {t.projectsSection.subtitle}
            </p>
          </div>

          {/* 4 Extra-Wide Cards in 1 Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
            {t.projectsSection.items.map((proj, idx) => (
              <a 
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1 sm:hover:-translate-y-2 shadow-md dark:shadow-none"
              >
                {/* Large Screenshot Image - 100% Fully Visible */}
                <div className="w-full h-48 sm:h-64 lg:h-72 overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 p-2.5 sm:p-3.5 flex items-center justify-center">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Content with Generous Spacing */}
                <div className="p-4 sm:p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-3 sm:space-y-5">
                  <div className="space-y-1.5 sm:space-y-2.5">
                    <span className="text-[11px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                      {proj.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-300">
                    <span className="font-mono text-xs truncate max-w-[200px]">{proj.link.replace("https://", "")}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-black text-base group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (1 Qatorda - Single Row) */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 mt-auto py-6 sm:py-8 px-4 sm:px-10 lg:px-16 w-full transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* 1. Left: Brand Logo & Name */}
          <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <Laptop className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
              {t.brandName}
            </span>
          </Link>

          {/* 2. Center: Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-7 text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.home}</a>
            <a href="#section-websites" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.web}</a>
            <a href="#section-mobile" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.mobile}</a>
            <a href="#section-landing" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.landing}</a>
            <a href="#section-projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t.nav.projects}</a>
          </div>

          {/* 3. Right: Copyright */}
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center lg:text-right shrink-0">
            © 2026 IT Xizmatlar. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  );
}
