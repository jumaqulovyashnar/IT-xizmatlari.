"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ThemeLanguageSwitcher } from "@/components/ThemeLanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Laptop, 
  Smartphone, 
  Sparkles, 
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
  Code2, 
  Check, 
  Layers,
  ChevronRight,
  TrendingUp,
  Flame
} from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col transition-colors duration-300">


      {/* Navbar */}
      <header className="navbar bg-base-200/90 backdrop-blur border-b border-base-300 sticky top-0 z-50 px-4 sm:px-8">
        <div className="navbar-start">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent text-primary-content flex items-center justify-center font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-xl tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t.brandName}
              </span>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-sm font-bold">
            <li><a href="#section-websites" className="hover:text-primary transition-colors">{t.nav.web}</a></li>
            <li><a href="#section-mobile" className="hover:text-primary transition-colors">{t.nav.mobile}</a></li>
            <li><a href="#section-landing" className="hover:text-primary transition-colors">{t.nav.landing}</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <ThemeLanguageSwitcher />
          <a href="tel:+998919517335">
            <Button size="sm" className="hidden sm:inline-flex shadow-md gap-2">
              <Zap className="w-4 h-4" /> {t.nav.orderNow}
            </Button>
          </a>
          <Link href="/admin">
            <Button variant="outline" size="sm">
              {t.nav.admin}
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden bg-gradient-to-b from-base-200/60 via-base-100 to-base-100">
        <div className="max-w-5xl mx-auto space-y-6 relative z-10">


          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            {t.hero.titleStart} <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t.hero.titleGradient}
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-80 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+998919517335">
              <Button size="lg" className="gap-2 shadow-xl shadow-primary/25 w-full sm:w-auto font-bold text-base">
                <PhoneCall className="w-5 h-5" /> {t.phone}
              </Button>
            </a>
            <a href="#section-websites">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto font-bold text-base">
                {t.hero.viewServices}
              </Button>
            </a>
          </div>

          {/* 3 Quick Highlight Cards (Like Screenshot style) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 text-left">
            <a href="#section-websites" className="p-6 rounded-3xl bg-base-200/70 border border-base-300 hover:border-primary hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="font-extrabold text-lg text-base-content mb-1">Web Saytlar</h3>
              <p className="text-xs opacity-70">E-Commerce, CRM, ERP va Portallar</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-primary">
                Batafsil <ChevronRight className="w-4 h-4" />
              </div>
            </a>

            <a href="#section-mobile" className="p-6 rounded-3xl bg-base-200/70 border border-base-300 hover:border-secondary hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="font-extrabold text-lg text-base-content mb-1">Mobile App</h3>
              <p className="text-xs opacity-70">iOS (iPhone) va Android Ilovalar</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-secondary">
                Batafsil <ChevronRight className="w-4 h-4" />
              </div>
            </a>

            <a href="#section-landing" className="p-6 rounded-3xl bg-base-200/70 border border-base-300 hover:border-accent hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="font-extrabold text-lg text-base-content mb-1">Landing Page</h3>
              <p className="text-xs opacity-70">Tezkor va Sotuvchi Lendinglar</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-accent">
                Batafsil <ChevronRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1-CHI BO'LIM: ZAMONAVIY WEB SAYTLAR VA KATTA TIZIMLAR                     */}
      {/* ========================================================================= */}
      <section id="section-websites" className="py-24 px-4 max-w-7xl mx-auto w-full border-t border-base-300">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column: Stylized Computer Graphic & Intro */}
          <div className="lg:w-5/12 space-y-6">
            <span className="badge badge-primary font-bold text-xs px-3 py-1">
              {t.threeSections.section1.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {t.threeSections.section1.title}
            </h2>
            <p className="opacity-80 text-sm sm:text-base leading-relaxed">
              {t.threeSections.section1.desc}
            </p>

            {/* Visual Stylized Laptop & Display Mockup */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-base-200 to-base-300 border border-base-300 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-base-300">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                </div>
                <span className="text-[11px] font-mono opacity-60">https://your-platform.uz</span>
              </div>

              <div className="py-6 space-y-3">
                <div className="h-4 bg-primary/20 rounded w-3/4 animate-pulse"></div>
                <div className="h-3 bg-base-100 rounded w-full"></div>
                <div className="h-3 bg-base-100 rounded w-5/6"></div>
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary text-xs font-bold">
                    Payme / Click
                  </div>
                  <div className="h-12 bg-secondary/10 border border-secondary/20 rounded-xl flex items-center justify-center text-secondary text-xs font-bold">
                    CRM & Analytics
                  </div>
                  <div className="h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent text-xs font-bold">
                    1C ERP Sync
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-semibold opacity-70">
                <span>⚡ Next.js 14 & Node.js</span>
                <span>🔒 100% SSL & Anti-DDoS</span>
              </div>
            </div>

            <div className="pt-2">
              <a href="tel:+998919517335">
                <Button className="gap-2 shadow-lg font-bold">
                  Web Loyiha Buyurtma Qilish <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Sub-services (E-Commerce, CRM, Corporate, Integrations) */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.threeSections.section1.items.map((item, idx) => (
              <Card key={idx} className="hover:border-primary hover:shadow-xl transition-all duration-300 bg-base-200/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                      {idx === 0 && <ShoppingCart className="w-6 h-6" />}
                      {idx === 1 && <Database className="w-6 h-6" />}
                      {idx === 2 && <Globe2 className="w-6 h-6" />}
                      {idx === 3 && <Cpu className="w-6 h-6" />}
                    </div>
                    <Badge variant="outline" className="text-[10px] font-bold">
                      {item.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-xs sm:text-sm opacity-75 leading-relaxed">
                  {item.desc}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2-CHI BO'LIM: MOBIL ILOVALAR (iOS & ANDROID MOBILE APPS)                  */}
      {/* ========================================================================= */}
      <section id="section-mobile" className="py-24 px-4 bg-base-200/50 border-t border-base-300">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-12 items-center">
          {/* Right Column (Left on Desktop): Text & Features */}
          <div className="lg:w-6/12 space-y-6">
            <span className="badge badge-secondary font-bold text-xs px-3 py-1">
              {t.threeSections.section2.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {t.threeSections.section2.title}
            </h2>
            <p className="opacity-80 text-sm sm:text-base leading-relaxed">
              {t.threeSections.section2.desc}
            </p>

            <div className="space-y-3 pt-2">
              {t.threeSections.section2.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-secondary text-secondary-content mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium opacity-90">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a href="tel:+998919517335">
                <Button variant="secondary" className="gap-2 shadow-lg font-bold">
                  Mobil Ilova Yaratish <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <div className="badge badge-outline text-xs font-semibold py-3 px-4">
                📱 Flutter • React Native • iOS • Android
              </div>
            </div>
          </div>

          {/* Left Column (Right on Desktop): Stylized Mobile Device Mockup */}
          <div className="lg:w-6/12 flex justify-center">
            <div className="w-full max-w-sm rounded-[40px] border-4 border-base-300 bg-base-100 p-4 shadow-2xl relative overflow-hidden">
              {/* Notch */}
              <div className="w-28 h-4 bg-base-300 rounded-full mx-auto mb-4"></div>

              {/* Mobile App UI Screen Simulation */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-base-300">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary text-secondary-content flex items-center justify-center font-black text-xs">
                      IT
                    </div>
                    <div>
                      <div className="text-xs font-bold">IT Mobile App</div>
                      <div className="text-[10px] opacity-60">Online Servis</div>
                    </div>
                  </div>
                  <span className="badge badge-success badge-sm text-white font-bold">Faol</span>
                </div>

                {/* Mobile App Banner Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-secondary to-primary text-primary-content space-y-2 shadow-md">
                  <div className="text-xs font-black uppercase tracking-wider opacity-80">Buyurtmalar</div>
                  <div className="text-lg font-extrabold">Mobil Boshqaruv Markazi</div>
                  <div className="text-[11px] opacity-90">Barcha xizmatlar va to'lovlar cho'ntagingizda.</div>
                </div>

                {/* 2x2 App Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-base-200 text-center space-y-1">
                    <Smartphone className="w-5 h-5 mx-auto text-secondary" />
                    <div className="text-xs font-bold">Push Bildirish</div>
                  </div>
                  <div className="p-3 rounded-xl bg-base-200 text-center space-y-1">
                    <ShieldCheck className="w-5 h-5 mx-auto text-primary" />
                    <div className="text-xs font-bold">FaceID / PIN</div>
                  </div>
                  <div className="p-3 rounded-xl bg-base-200 text-center space-y-1">
                    <Zap className="w-5 h-5 mx-auto text-accent" />
                    <div className="text-xs font-bold">Tezkor Savdo</div>
                  </div>
                  <div className="p-3 rounded-xl bg-base-200 text-center space-y-1">
                    <TrendingUp className="w-5 h-5 mx-auto text-warning" />
                    <div className="text-xs font-bold">Statistika</div>
                  </div>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-32 h-1 bg-base-300 rounded-full mx-auto mt-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3-CHI BO'LIM: YUQORI KONVERSIYALI LANDING PAGE (SOTUVCHI SAYTLAR)        */}
      {/* ========================================================================= */}
      <section id="section-landing" className="py-24 px-4 max-w-7xl mx-auto w-full border-t border-base-300">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column: Details & Features */}
          <div className="lg:w-6/12 space-y-6">
            <span className="badge badge-accent font-bold text-xs px-3 py-1">
              {t.threeSections.section3.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              {t.threeSections.section3.title}
            </h2>
            <p className="opacity-80 text-sm sm:text-base leading-relaxed">
              {t.threeSections.section3.desc}
            </p>

            <div className="space-y-3 pt-2">
              {t.threeSections.section3.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-accent text-accent-content mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-medium opacity-90">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a href="tel:+998919517335">
                <Button className="gap-2 shadow-lg font-bold bg-accent hover:bg-accent/90 text-accent-content">
                  <Rocket className="w-4 h-4" /> Landing Page Buyurtma Berish
                </Button>
              </a>
              <div className="badge badge-warning text-xs font-bold py-3 px-4">
                ⏱️ {t.threeSections.section3.actionText}
              </div>
            </div>
          </div>

          {/* Right Column: High Converting Visual Mockup Card */}
          <div className="lg:w-6/12 w-full">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-base-200 via-base-100 to-base-200 border-2 border-accent/40 shadow-2xl space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/20 text-success text-xs font-black">
                  <Zap className="w-3.5 h-3.5" /> Google PageSpeed 99/100
                </div>
                <span className="text-xs font-bold text-accent">AIDA Konversiya</span>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-black">Mijozlarni Haqiqiy Xaridorga Aylantiruvchi Lending</h4>
                <p className="text-xs opacity-75 leading-relaxed">
                  Har bir tugma, sarlavha va rang foydalanuvchini maqsadli harakatga (qo'ng'iroq qilish yoki buyurtma qoldirishga) undaydi.
                </p>
              </div>

              {/* Lead Capture Box */}
              <div className="p-4 rounded-2xl bg-base-300/60 border border-base-300 space-y-3">
                <div className="text-xs font-bold opacity-80">📩 Avtomatik Lid Yig'ish Simulyatsiyasi:</div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Ismingiz va Telefon raqamingiz..."
                    className="input input-sm input-bordered w-full text-xs"
                    readOnly
                    value="+998 91 951 73 35"
                  />
                  <button className="btn btn-sm btn-primary text-xs font-bold">
                    Yuborish
                  </button>
                </div>
                <div className="text-[10px] text-success flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3 h-3" /> Telegram Bot & CRM ga 0.1 soniyada xabar boradi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FOYDALANUVCHI RASMI USLUBIDAGI PASTKI ALOQA BLOKI (CONTACT BAR)           */}
      {/* ========================================================================= */}
      <section className="py-12 px-4 max-w-7xl mx-auto w-full">
        <div className="p-6 sm:p-8 rounded-[36px] bg-gradient-to-r from-base-200 via-base-100 to-base-200 border-2 border-primary/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Phone & Contact */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+998919517335" 
              className="w-14 h-14 rounded-full bg-primary text-primary-content flex items-center justify-center shadow-xl shadow-primary/30 hover:scale-110 transition-transform"
            >
              <PhoneCall className="w-7 h-7" />
            </a>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-primary">
                {t.contactUs}
              </div>
              <a 
                href="tel:+998919517335" 
                className="text-xl sm:text-2xl font-black text-base-content hover:text-primary transition-colors"
              >
                {t.phone}
              </a>
            </div>
          </div>

          {/* Center Badge: Sifat - Ishonch - Natija */}
          <div className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary via-indigo-600 to-accent text-white font-black text-center shadow-lg shadow-primary/20 space-y-0.5">
            <div className="text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4" /> {t.slogan}
            </div>
            <div className="text-[10px] tracking-wider opacity-90 uppercase">
              — {t.subSlogan} —
            </div>
          </div>

          {/* Right: Biz Har Doim Siz Bilan */}
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-black uppercase tracking-wider opacity-60">
                Kafolatlangan Servis
              </div>
              <div className="text-lg font-black text-base-content">
                {t.alwaysWithYou}
              </div>
            </div>
            <div className="w-14 h-14 rounded-full bg-accent text-accent-content flex items-center justify-center shadow-xl shadow-accent/30">
              <MapPin className="w-7 h-7" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-8 bg-base-300 text-base-content mt-auto border-t border-base-300">
        <div>
          <p className="font-bold text-sm">
            © 2026 IT Xizmatlari • Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs opacity-60">
            Veb-saytlar • Mobil Ilovalar • Landing Page • ITSM Helpdesk
          </p>
        </div>
      </footer>
    </div>
  );
}
