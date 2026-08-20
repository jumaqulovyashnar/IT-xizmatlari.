"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ThemeLanguageSwitcher } from "@/components/ThemeLanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Server, 
  ShieldCheck, 
  Code2, 
  Headphones, 
  Network, 
  Cpu, 
  ArrowRight,
  Activity,
  Layers,
  Lock,
  Check
} from "lucide-react";

export default function HomePage() {
  const { t } = useLanguage();

  const getServiceIcon = (code: string) => {
    switch (code) {
      case "DEV":
        return <Code2 className="w-8 h-8 text-primary" />;
      case "CLOUD":
        return <Server className="w-8 h-8 text-secondary" />;
      case "CYBER":
        return <ShieldCheck className="w-8 h-8 text-accent" />;
      case "HELPDESK":
        return <Headphones className="w-8 h-8 text-warning" />;
      case "NETWORK":
        return <Network className="w-8 h-8 text-info" />;
      case "DATABASE":
        return <Cpu className="w-8 h-8 text-error" />;
      default:
        return <Code2 className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col transition-colors duration-300">
      {/* DaisyUI Navbar with Shadcn & Theme Switcher */}
      <header className="navbar bg-base-200/80 backdrop-blur border-b border-base-300 sticky top-0 z-50 px-4 sm:px-8">
        <div className="navbar-start">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-primary-content flex items-center justify-center font-black text-lg shadow-lg">
              IT
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.brandName}
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-sm font-semibold">
            <li><a href="#services" className="hover:text-primary">{t.nav.services}</a></li>
            <li><a href="#architecture" className="hover:text-primary">{t.nav.architecture}</a></li>
            <li><a href="#sla" className="hover:text-primary">{t.nav.sla}</a></li>
            <li><Link href="/portal" className="hover:text-primary">{t.nav.portal}</Link></li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <ThemeLanguageSwitcher />
          <Link href="/portal">
            <Button size="sm" className="hidden sm:inline-flex shadow-md">
              {t.nav.openTicket}
            </Button>
          </Link>
          <Link href="/admin">
            <Button variant="outline" size="sm">
              {t.nav.admin}
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden bg-gradient-to-b from-base-200/40 to-base-100">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-wide uppercase shadow-sm">
            <Activity className="w-4 h-4" /> {t.hero.badge}
          </div>

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
            <Link href="/portal">
              <Button size="lg" className="gap-2 shadow-xl shadow-primary/20 w-full sm:w-auto">
                {t.hero.orderBtn} <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="#services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                {t.hero.catalogBtn}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Services Catalog with Shadcn Cards & DaisyUI Grid */}
      <section id="services" className="py-20 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t.services.title}</h2>
          <p className="opacity-75">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((srv, idx) => (
            <Card key={idx} className="hover:shadow-2xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3.5 rounded-2xl bg-base-200 group-hover:scale-110 transition-transform">
                    {getServiceIcon(srv.code)}
                  </div>
                  <Badge variant="secondary" className="font-semibold text-xs">
                    {srv.tag}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">{srv.title}</CardTitle>
                <CardDescription className="pt-2 text-sm leading-relaxed">
                  {srv.desc}
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex items-center justify-between border-t border-base-300 pt-4">
                <div>
                  <span className="text-xs opacity-60 block">{t.services.startPrice}</span>
                  <span className="text-sm font-bold text-primary">{srv.price}</span>
                </div>
                <Link href="/portal">
                  <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    {t.services.select}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Architecture Features */}
      <section id="architecture" className="py-20 bg-base-200/50 border-t border-base-300 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight">Enterprise IT Architecture</h2>
            <p className="opacity-75">Clean Architecture, Microservices Ready, 100% Type-Safe & High Availability</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-base-100 border border-base-300 space-y-4 shadow-sm">
              <Layers className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-bold">Modular Monolith (DDD)</h3>
              <p className="text-sm opacity-75 leading-relaxed">
                Domain-Driven Design tamoyillari asosida modullarga ajratilgan backend: Auth, ITSM, Billing, Projects va Notifications.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-base-100 border border-base-300 space-y-4 shadow-sm">
              <Lock className="w-10 h-10 text-secondary" />
              <h3 className="text-xl font-bold">Zero-Trust Kiberxavfsizlik</h3>
              <p className="text-sm opacity-75 leading-relaxed">
                JWT + RBAC ko'p darajali huquqlar, Argon2 shifrlash, Rate Limiting va SSL/TLS sertifikatsiyalari.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-base-100 border border-base-300 space-y-4 shadow-sm">
              <Activity className="w-10 h-10 text-accent" />
              <h3 className="text-xl font-bold">BullMQ & SLA Engine</h3>
              <p className="text-sm opacity-75 leading-relaxed">
                Redis va BullMQ orqali har bir ticket uchun SLA (15m/30m) vaqtini real vaqtda hisoblash va audit qilish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-8 bg-base-300 text-base-content mt-auto">
        <div>
          <p className="font-semibold">© 2026 IT Xizmatlari Pro. Next.js 14, Tailwind CSS, DaisyUI, Shadcn UI & i18n.</p>
        </div>
      </footer>
    </div>
  );
}
