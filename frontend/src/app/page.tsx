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
  ArrowRight, 
  PhoneCall, 
  ShieldCheck, 
  MapPin, 
  Zap, 
  Rocket, 
  Check, 
  ChevronRight,
  TrendingUp,
  Layers
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
            <li><a href="#section-websites" className="hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors">{t.nav.web}</a></li>
            <li><a href="#section-mobile" className="hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors">{t.nav.mobile}</a></li>
            <li><a href="#section-landing" className="hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors">{t.nav.landing}</a></li>
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
        {/* Glowing backdrop elements */}
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
      {/* 1-CHI BO'LIM: ZAMONAVIY WEB SAYTLAR VA KATTA TIZIMLAR                     */}
      {/* ========================================================================= */}
      <section id="section-websites" className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column: Computer Mockup & Intro */}
          <div className="lg:w-5/12 space-y-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-extrabold text-xs tracking-wider">
              {t.threeSections.section1.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {t.threeSections.section1.title}
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {t.threeSections.section1.desc}
            </p>

            {/* Stylized Laptop & Display Mockup */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <div className="w-3 h-3 rounded-full bg-sky-400"></div>
                </div>
                <span className="text-xs font-mono text-slate-400">https://your-platform.uz</span>
              </div>

              <div className="py-6 space-y-3">
                <div className="h-4 bg-blue-500/30 rounded w-3/4 animate-pulse"></div>
                <div className="h-3 bg-slate-800 rounded w-full"></div>
                <div className="h-3 bg-slate-800 rounded w-5/6"></div>
                <div className="grid grid-cols-3 gap-2.5 pt-3">
                  <div className="h-14 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-300 text-xs font-bold text-center px-1">
                    Payme / Click
                  </div>
                  <div className="h-14 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-300 text-xs font-bold text-center px-1">
                    CRM Tizimi
                  </div>
                  <div className="h-14 bg-blue-500/10 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-300 text-xs font-bold text-center px-1">
                    1C ERP Sync
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-bold text-slate-300">
                <span>⚡ Next.js 14 & Node.js</span>
                <span>🔒 100% SSL & Anti-DDoS</span>
              </div>
            </div>

            <div className="pt-2">
              <a href="tel:+998919517335">
                <Button className="gap-2 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base shadow-lg shadow-blue-500/30 border-0 h-12 px-6">
                  Web Loyiha Buyurtma Qilish <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Sub-services Cards */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.threeSections.section1.items.map((item, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:shadow-xl transition-all duration-300 space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-3.5 rounded-2xl bg-blue-500/15 text-blue-400">
                    {idx === 0 && <ShoppingCart className="w-6 h-6" />}
                    {idx === 1 && <Database className="w-6 h-6" />}
                    {idx === 2 && <Globe2 className="w-6 h-6" />}
                    {idx === 3 && <Cpu className="w-6 h-6" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-blue-300 border border-slate-700 text-[11px] font-bold">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2-CHI BO'LIM: MOBIL ILOVALAR (iOS & ANDROID MOBILE APPS)                  */}
      {/* ========================================================================= */}
      <section id="section-mobile" className="py-24 px-4 bg-slate-900/60 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 items-center">
          {/* Text & Features */}
          <div className="lg:w-6/12 space-y-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-extrabold text-xs tracking-wider">
              {t.threeSections.section2.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {t.threeSections.section2.title}
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {t.threeSections.section2.desc}
            </p>

            <div className="space-y-3.5 pt-2">
              {t.threeSections.section2.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-blue-600 text-white mt-1 font-bold">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base font-semibold text-slate-100">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a href="tel:+998919517335">
                <Button className="gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black text-base shadow-lg shadow-blue-500/30 border-0 h-12 px-6">
                  Mobil Ilova Yaratish <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <div className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-blue-300">
                📱 Flutter • React Native • Swift • Kotlin
              </div>
            </div>
          </div>

          {/* Stylized Mobile Device Mockup */}
          <div className="lg:w-6/12 flex justify-center">
            <div className="w-full max-w-sm rounded-[44px] border-4 border-slate-700 bg-slate-900 p-5 shadow-2xl relative overflow-hidden">
              {/* Notch */}
              <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-4"></div>

              {/* Mobile App UI Screen */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm">
                      IT
                    </div>
                    <div>
                      <div className="text-sm font-extrabold text-white">IT Mobile App</div>
                      <div className="text-xs text-slate-400">Online Servis</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold">Faol</span>
                </div>

                {/* Mobile App Banner Card */}
                <div className="p-5 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 text-white space-y-2 shadow-lg">
                  <div className="text-xs font-black uppercase tracking-wider opacity-90">Boshqaruv</div>
                  <div className="text-xl font-black">Mobil Buyurtmalar Markazi</div>
                  <div className="text-xs opacity-95">Barcha to'lovlar va xizmatlar smartfoningizda.</div>
                </div>

                {/* 2x2 App Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center space-y-1">
                    <Smartphone className="w-6 h-6 mx-auto text-blue-400" />
                    <div className="text-xs font-bold text-white">Push Bildirish</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center space-y-1">
                    <ShieldCheck className="w-6 h-6 mx-auto text-blue-400" />
                    <div className="text-xs font-bold text-white">FaceID / PIN</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center space-y-1">
                    <Zap className="w-6 h-6 mx-auto text-blue-400" />
                    <div className="text-xs font-bold text-white">Tezkor Savdo</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 text-center space-y-1">
                    <TrendingUp className="w-6 h-6 mx-auto text-blue-400" />
                    <div className="text-xs font-bold text-white">Statistika</div>
                  </div>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-32 h-1 bg-slate-700 rounded-full mx-auto mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3-CHI BO'LIM: YUQORI KONVERSIYALI LANDING PAGE (SOTUVCHI SAYTLAR)        */}
      {/* ========================================================================= */}
      <section id="section-landing" className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column: Details & Features */}
          <div className="lg:w-6/12 space-y-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-extrabold text-xs tracking-wider">
              {t.threeSections.section3.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {t.threeSections.section3.title}
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              {t.threeSections.section3.desc}
            </p>

            <div className="space-y-3.5 pt-2">
              {t.threeSections.section3.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-blue-600 text-white mt-1 font-bold">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-base font-semibold text-slate-100">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a href="tel:+998919517335">
                <Button className="gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black text-base shadow-lg shadow-blue-500/30 border-0 h-12 px-6">
                  <Rocket className="w-5 h-5" /> Landing Page Buyurtma Berish
                </Button>
              </a>
              <div className="px-4 py-2.5 rounded-xl bg-blue-500/15 text-blue-300 border border-blue-500/30 text-xs font-black">
                ⏱️ {t.threeSections.section3.actionText}
              </div>
            </div>
          </div>

          {/* Right Column: High Converting Visual Mockup Card */}
          <div className="lg:w-6/12 w-full">
            <div className="p-8 rounded-3xl bg-slate-900 border-2 border-blue-500/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-black">
                  <Zap className="w-4 h-4" /> Google PageSpeed 99/100
                </div>
                <span className="text-xs font-extrabold text-blue-400 uppercase tracking-wider">AIDA Konversiya</span>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black text-white">Mijozlarni Haqiqiy Xaridorga Aylantiruvchi Lending</h4>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Har bir sarlavha, vizual blok va tugma foydalanuvchini maqsadli harakatga (qo'ng'iroq qilish yoki buyurtma qoldirishga) undaydi.
                </p>
              </div>

              {/* Lead Capture Simulation Box */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-300">📩 Avtomatik Lid Yig'ish Simulyatsiyasi:</div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Ismingiz va Telefon raqamingiz..."
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-blue-500"
                    readOnly
                    value="+998 91 951 73 35"
                  />
                  <a href="tel:+998919517335" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-lg flex items-center justify-center transition-colors shadow-md shadow-blue-500/20">
                    Yuborish
                  </a>
                </div>
                <div className="text-xs text-blue-400 flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Telegram Bot & CRM ga 0.1 soniyada xabar boradi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOYDALANUVCHI RASMI USLUBIDAGI PASTKI ALOQA BLOKI (CONTACT BAR)           */}
      {/* ========================================================================= */}
      <section className="py-14 px-4 max-w-7xl mx-auto w-full">
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
            © 2026 IT Xizmatlari • Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            Veb-saytlar • Mobil Ilovalar • Landing Page
          </p>
        </div>
      </footer>
    </div>
  );
}
