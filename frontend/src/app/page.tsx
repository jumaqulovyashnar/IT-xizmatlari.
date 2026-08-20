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
  BarChart3
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
          <ul className="menu menu-horizontal px-1 gap-2 text-sm font-bold text-slate-200">
            <li><a href="#" className="hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors">{t.nav.home}</a></li>
            <li><a href="#section-websites" className="hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors">{t.nav.web}</a></li>
            <li><a href="#section-mobile" className="hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors">{t.nav.mobile}</a></li>
            <li><a href="#section-landing" className="hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors">{t.nav.landing}</a></li>
            <li><a href="#section-contact" className="hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors">{t.nav.contact}</a></li>
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
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-sm">
            {t.hero.titleStart} <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent font-black drop-shadow-[0_2px_20px_rgba(59,130,246,0.4)]">
              {t.hero.titleGradient}
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-200 font-normal leading-relaxed">
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

          {/* 3 Highlight Cards in Hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left">
            <a href="#section-websites" className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group backdrop-blur">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center font-black text-lg mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                01
              </div>
              <h3 className="font-extrabold text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">Web Saytlar</h3>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">E-Commerce, CRM, ERP va Korporativ Portallar</p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-blue-400">
                Batafsil ko'rish <ChevronRight className="w-4 h-4" />
              </div>
            </a>

            <a href="#section-mobile" className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group backdrop-blur">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center font-black text-lg mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                02
              </div>
              <h3 className="font-extrabold text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">Mobile App</h3>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">iOS (iPhone) va Android Mobil Ilovalar</p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-blue-400">
                Batafsil ko'rish <ChevronRight className="w-4 h-4" />
              </div>
            </a>

            <a href="#section-landing" className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all group backdrop-blur">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center font-black text-lg mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                03
              </div>
              <h3 className="font-extrabold text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">Landing Page</h3>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">Tezkor va Yuqori Sotuvchi Lending Saytlar</p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-bold text-blue-400">
                Batafsil ko'rish <ChevronRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1-CHI BO'LIM: E-COMMERCE VEB-SAYTLAR VA ONLAYN DO'KONLAR                  */}
      {/* ========================================================================= */}
      <section id="section-websites" className="py-28 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: E-Commerce Detailed Information */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                E-Commerce Veb-Saytlar va Onlayn Do'konlar
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Kompaniyangiz mahsulot va tovarlarini internet orqali avtomatlashtirilgan tarzda sotish uchun to'liq funksional E-Commerce tizimlarini ishlab chiqamiz.
              </p>
            </div>

            {/* 5 Core Modules from Image */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mt-0.5 shrink-0 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Bosh sahifa (Homepage)</h4>
                  <p className="text-sm text-slate-400">Yangi kolleksiyalar, aksiyalar, brendlar taqdimoti va tezkor qidiruv.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mt-0.5 shrink-0 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Mahsulot sahifasi (Product Detail Page)</h4>
                  <p className="text-sm text-slate-400">Rasmlar galereyasi, o'lchamlar, ranglar, narxlar va mijozlar sharhlari.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mt-0.5 shrink-0 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Kategoriyalar va Filtrlar (Category Page)</h4>
                  <p className="text-sm text-slate-400">Narx, brend, o'lcham va toifalar bo'yicha aqlli saralash tizimi.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mt-0.5 shrink-0 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Savatcha va To'lov (Cart & Checkout)</h4>
                  <p className="text-sm text-slate-400">Payme, Click, Uzum, Visa va MasterCard orqali xavfsiz to'lovlar.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mt-0.5 shrink-0 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">100% Mobil Moslashuvchan (Mobile Responsive)</h4>
                  <p className="text-sm text-slate-400">Barcha turdagi smartfon va planshetlarda qulay xarid qilish.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: User's Exact E-Commerce Template Image */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl border-2 border-blue-500/40 bg-slate-900/90 shadow-2xl p-2 sm:p-3 overflow-hidden group hover:border-blue-400 transition-all duration-300">
              <img 
                src="/ecommerce-showcase.png" 
                alt="E-Commerce Website Template" 
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2-CHI BO'LIM: MOBIL ILOVALAR (iOS & ANDROID MOBILE APPS)                  */}
      {/* ========================================================================= */}
      <section id="section-mobile" className="py-28 px-4 bg-slate-900/60 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Mobile Application Information */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {t.threeSections.section2.title}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {t.threeSections.section2.desc}
              </p>
            </div>

            <div className="space-y-4 pt-1">
              {t.threeSections.section2.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mt-0.5 shrink-0 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-base font-semibold text-slate-200">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <div className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-blue-300">
                📱 Flutter • React Native • Swift • Kotlin
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-blue-600/15 text-blue-300 border border-blue-600/30 text-xs font-black">
                ⭐ App Store & Google Play
              </div>
            </div>
          </div>

          {/* Right Column: User's Exact Mobile App Showcase Image */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl border-2 border-blue-500/40 bg-slate-900/90 shadow-2xl p-2 sm:p-3 overflow-hidden group hover:border-blue-400 transition-all duration-300">
              <img 
                src="/mobile-showcase.png" 
                alt="Mobile App Showcase" 
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3-CHI BO'LIM: YUQORI KONVERSIYALI LANDING PAGE (SOTUVCHI SAYTLAR)        */}
      {/* ========================================================================= */}
      <section id="section-landing" className="py-28 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Landing Page Image Showcase */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-3xl border-2 border-blue-500/40 bg-slate-900/90 shadow-2xl p-2 sm:p-3 overflow-hidden group hover:border-blue-400 transition-all duration-300">
              <img 
                src="/landing-showcase.png" 
                alt="Landing Page Website Showcase" 
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Column: Detailed Landing Page Information */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {t.threeSections.section3.title}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {t.threeSections.section3.desc}
              </p>
            </div>

            <div className="space-y-4 pt-1">
              {t.threeSections.section3.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mt-0.5 shrink-0 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-base font-semibold text-slate-200">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <div className="px-4 py-2.5 rounded-xl bg-blue-600/15 text-blue-300 border border-blue-600/30 text-xs font-black">
                ⏱️ {t.threeSections.section3.actionText}
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-xs font-black">
                ⚡ Google PageSpeed 99/100
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOYDALANUVCHI RASMI USLUBIDAGI PASTKI ALOQA BLOKI (CONTACT BAR)           */}
      {/* ========================================================================= */}
      <section id="section-contact" className="py-14 px-4 max-w-7xl mx-auto w-full">
        <div className="p-8 sm:p-10 rounded-[36px] bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border-2 border-blue-500/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Phone & Contact */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+998919517335" 
              className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-500/40 hover:scale-110 transition-transform"
            >
              <PhoneCall className="w-8 h-8" />
            </a>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-blue-400">
                {t.contactUs}
              </div>
              <a 
                href="tel:+998919517335" 
                className="text-2xl sm:text-3xl font-black text-white hover:text-blue-400 transition-colors"
              >
                {t.phone}
              </a>
            </div>
          </div>

          {/* Center Badge: Sifat - Ishonch - Natija */}
          <div className="px-8 py-4 rounded-full bg-blue-600 text-white font-black text-center shadow-lg shadow-blue-500/40 space-y-0.5">
            <div className="text-sm sm:text-base tracking-widest uppercase flex items-center justify-center gap-2 font-black">
              <ShieldCheck className="w-5 h-5" /> {t.slogan}
            </div>
            <div className="text-xs tracking-wider opacity-90 uppercase font-bold">
              — {t.subSlogan} —
            </div>
          </div>

          {/* Right: Biz Har Doim Siz Bilan */}
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                Kafolatlangan Servis
              </div>
              <div className="text-xl font-black text-white">
                {t.alwaysWithYou}
              </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-500/30">
              <MapPin className="w-8 h-8" />
            </div>
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
