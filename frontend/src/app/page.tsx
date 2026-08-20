import React from "react";
import Link from "next/link";
import { 
  Server, 
  ShieldCheck, 
  Code2, 
  Headphones, 
  Network, 
  Cpu, 
  CheckCircle, 
  ArrowRight,
  Activity,
  Lock,
  Layers
} from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: "Maxsus Dasturiy Ta'minot",
      desc: "Web ilovalar, mobil dasturlar, CRM va ERP korporativ tizimlarni noldan yaratish va kengaytirish.",
      price: "15,000,000 UZS dan",
      tag: "Fullstack Dev",
    },
    {
      icon: <Server className="w-8 h-8 text-emerald-400" />,
      title: "Cloud & DevOps Infratuzilma",
      desc: "AWS, GCP, VPS serverlar boshqaruvi, CI/CD quvurlari, Docker va Kubernetes klasterlar.",
      price: "5,000,000 UZS / oy",
      tag: "24/7 Monitoring",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
      title: "Kiberxavfsizlik va Audit",
      desc: "Zaifliklarni skanerlash (Pentest), ISO 27001 muvofiqlik, xavfsizlik devorlari va DLP tizimlari.",
      price: "8,000,000 UZS dan",
      tag: "Cyber Audit",
    },
    {
      icon: <Headphones className="w-8 h-8 text-amber-400" />,
      title: "24/7 IT Helpdesk & Servis",
      desc: "Ofis kompyuterlari, dasturlar, printer va serverlarni doimiy texnik nazorat qilish va ta'mirlash.",
      price: "3,500,000 UZS / oy",
      tag: "15 daq SLA",
    },
    {
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      title: "Tarmoq va VPN Tizimlari",
      desc: "MikroTik/Cisco routerlar, xavfsiz ofislararo Site-to-Site VPN va korporativ Wi-Fi zonalari.",
      price: "4,000,000 UZS dan",
      tag: "Networking",
    },
    {
      icon: <Cpu className="w-8 h-8 text-rose-400" />,
      title: "Server & Ma'lumotlar Bazasi",
      desc: "PostgreSQL, MySQL, Redis klasterlari, replikatsiya, avtomatik zahira (Backup) tizimlari.",
      price: "4,500,000 UZS / oy",
      tag: "DBA & Cloud",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Navbar */}
      <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/30">
              IT
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              IT Xizmatlari Pro
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-blue-400 transition-colors">Xizmatlar</a>
            <a href="#architecture" className="hover:text-blue-400 transition-colors">Arxitektura</a>
            <a href="#sla" className="hover:text-blue-400 transition-colors">SLA Standartlari</a>
            <Link href="/portal" className="hover:text-blue-400 transition-colors">Mijoz Portali</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="/portal" 
              className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md shadow-blue-600/20"
            >
              Ticket Ochish
            </Link>
            <Link 
              href="/admin" 
              className="px-4 py-2 text-sm font-medium border border-slate-700 hover:bg-slate-800 text-slate-300 rounded-lg transition-all"
            >
              Boshqaruv Paneli
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Activity className="w-3.5 h-3.5" /> 99.9% Uptime & 24/7 SLA Kafolati
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Biznesingiz uchun Professional <br/>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              IT Infratuzilma va Dasturiy Xizmatlar
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Serverlar, kiberxavfsizlik, dasturiy ta'minot va tezkor IT helpdesk xizmatlarini yagona boshqaruv platformasi orqali buyurtma qiling va nazorat qiling.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/portal"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/30 transition-all"
            >
              Xizmatga Buyurtma Berish <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-300 border border-slate-700 hover:bg-slate-900 rounded-xl transition-all"
            >
              Katalog bilan Tanishish
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">IT Xizmatlar Katalogi</h2>
            <p className="mt-4 text-slate-400">
              Kompaniyangiz ehtiyojlariga moslashgan kompleks IT xizmatlari paketi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-slate-800 rounded-xl">
                      {srv.icon}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {srv.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{srv.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Boshlang'ich narx</div>
                    <div className="text-sm font-bold text-blue-400">{srv.price}</div>
                  </div>
                  <Link 
                    href="/portal" 
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    Tanlash
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Highlights */}
      <section id="architecture" className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white tracking-tight">Ishonchli va Zamonaviy Tizim Arxitekturasi</h2>
            <p className="mt-4 text-slate-400">
              Clean Architecture, Microservices-ready modulli dizayn va yuqori xavfsizlik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
              <Layers className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Modulli Monolit & Clean Architecture</h3>
              <p className="text-slate-400 text-sm">
                Domain-Driven Design (DDD) asosidagi ajratilgan modullar: Auth, Tickets, Services, Billing va Notifications.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
              <Lock className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Korporativ Kiberxavfsizlik</h3>
              <p className="text-slate-400 text-sm">
                JWT + RBAC ko'p pog'onali huquqlar tizimi, Argon2 shifrlash, Rate Limiting va SSL/TLS himoyasi.
              </p>
            </div>

            <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
              <Activity className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Avtomatlashtirilgan SLA & Monitoring</h3>
              <p className="text-slate-400 text-sm">
                BullMQ + Redis navbatlari, Prometheus & Grafana orqali xizmatlarning uptime holatini real vaqtda kuzatish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-slate-900 border-t border-slate-800 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 IT Xizmatlari Platformasi. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  );
}
