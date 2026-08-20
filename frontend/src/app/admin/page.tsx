"use client";

import React from "react";
import Link from "next/link";
import { 
  Users, 
  Server, 
  AlertTriangle, 
  DollarSign, 
  CheckCircle, 
  TrendingUp,
  Cpu,
  HardDrive
} from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { title: "Faol IT Mijozlar", value: "48 ta", icon: <Users className="w-5 h-5 text-blue-400" />, change: "+12% bu oy" },
    { title: "Ochiq Ticketlar", value: "7 ta", icon: <AlertTriangle className="w-5 h-5 text-amber-400" />, change: "SLA 99.4%" },
    { title: "Serverlar Holati", value: "100% Uptime", icon: <Server className="w-5 h-5 text-emerald-400" />, change: "18 ta server" },
    { title: "Oylik Tushum (MRR)", value: "142,500,000 UZS", icon: <DollarSign className="w-5 h-5 text-purple-400" />, change: "+18.5%" },
  ];

  const serverMetrics = [
    { name: "Node-01 (API Gateway)", cpu: "28%", ram: "4.2 GB / 16 GB", status: "Optimal" },
    { name: "Node-02 (PostgreSQL Primary)", cpu: "54%", ram: "22.4 GB / 32 GB", status: "Optimal" },
    { name: "Node-03 (Redis + Worker Queues)", cpu: "14%", ram: "2.1 GB / 8 GB", status: "Optimal" },
    { name: "Node-04 (MinIO S3 Storage)", cpu: "8%", ram: "3.5 GB / 16 GB", status: "Optimal" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-xl text-blue-400">
            ← IT Xizmatlari
          </Link>
          <span className="text-slate-600">/</span>
          <span className="font-semibold text-slate-200">Admin & Muhandislik Boshqaruv Markazi</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-300">Tizim Ishchi Holatda (Live)</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Boshqaruv Paneli & KPI Tahlil</h1>
          <p className="text-sm text-slate-400 mt-1">IT infratuzilma, xodimlar vazifalari va moliyaviy oqimlar ko'rsatkichi</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div key={idx} className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>{item.title}</span>
                <div className="p-2 bg-slate-800 rounded-lg">{item.icon}</div>
              </div>
              <div className="text-2xl font-extrabold text-white">{item.value}</div>
              <div className="text-xs text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {item.change}
              </div>
            </div>
          ))}
        </div>

        {/* Server Health Status */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              IT Infratuzilma & Server Klasteri Holati
            </h2>
            <span className="text-xs text-slate-400">Har 15 soniyada yangilanadi</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serverMetrics.map((srv, idx) => (
              <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-slate-200">{srv.name}</div>
                  <div className="text-xs text-slate-500 mt-1">RAM: {srv.ram}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-blue-400">CPU: {srv.cpu}</div>
                  <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {srv.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
