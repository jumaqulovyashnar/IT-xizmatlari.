"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ThemeLanguageSwitcher } from "@/components/ThemeLanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Server, 
  AlertTriangle, 
  DollarSign, 
  TrendingUp, 
  Cpu, 
  ArrowLeft,
  Activity,
  HardDrive
} from "lucide-react";

export default function AdminDashboardPage() {
  const { t } = useLanguage();

  const stats = [
    { title: "Active IT Clients", value: "48", icon: <Users className="w-5 h-5 text-primary" />, change: "+12% this month" },
    { title: "Open Tickets", value: "7", icon: <AlertTriangle className="w-5 h-5 text-warning" />, change: "SLA 99.4%" },
    { title: "Infrastructure", value: "100% Uptime", icon: <Server className="w-5 h-5 text-success" />, change: "18 Nodes Healthy" },
    { title: "Monthly Revenue (MRR)", value: "142.5M UZS", icon: <DollarSign className="w-5 h-5 text-secondary" />, change: "+18.5%" },
  ];

  const serverMetrics = [
    { name: "Node-01 (API Gateway & Nginx)", cpu: "28%", ram: "4.2 GB / 16 GB", disk: "18% SSD", status: "Optimal" },
    { name: "Node-02 (PostgreSQL Primary DB)", cpu: "54%", ram: "22.4 GB / 32 GB", disk: "42% NVMe", status: "Optimal" },
    { name: "Node-03 (Redis + BullMQ Workers)", cpu: "14%", ram: "2.1 GB / 8 GB", disk: "12% SSD", status: "Optimal" },
    { name: "Node-04 (MinIO S3 Attachments)", cpu: "8%", ram: "3.5 GB / 16 GB", disk: "65% NVMe", status: "Optimal" },
  ];

  return (
    <div className="min-h-screen bg-base-100 text-base-content flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="navbar bg-base-200 border-b border-base-300 px-4 sm:px-8">
        <div className="navbar-start gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> {t.brandName}
            </Button>
          </Link>
          <span className="font-bold text-sm hidden md:inline opacity-70">
            / {t.admin.title}
          </span>
        </div>

        <div className="navbar-end gap-3">
          <ThemeLanguageSwitcher />
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse"></span>
            <span className="text-xs font-bold text-success hidden sm:inline">LIVE</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{t.admin.title}</h1>
          <p className="text-sm opacity-70 mt-1">{t.admin.subtitle}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <Card key={idx} className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <span className="text-xs font-semibold opacity-70">{item.title}</span>
                <div className="p-2 rounded-lg bg-base-200">{item.icon}</div>
              </CardHeader>
              <CardContent className="pt-0 space-y-1">
                <div className="text-2xl font-black">{item.value}</div>
                <div className="text-xs text-success flex items-center gap-1 font-semibold">
                  <TrendingUp className="w-3 h-3" /> {item.change}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Server Cluster Health */}
        <Card className="shadow-lg border-base-300">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <Cpu className="w-6 h-6 text-primary" />
              {t.admin.serversTitle}
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              {t.admin.refreshInfo}
            </Badge>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serverMetrics.map((srv, idx) => (
                <div key={idx} className="p-4 bg-base-200/60 rounded-xl border border-base-300 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="font-bold text-sm">{srv.name}</div>
                    <div className="text-xs opacity-70 flex gap-4">
                      <span>RAM: <strong>{srv.ram}</strong></span>
                      <span>Disk: <strong>{srv.disk}</strong></span>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-sm font-black text-primary">CPU: {srv.cpu}</div>
                    <span className="badge badge-success badge-sm text-white font-bold">
                      {srv.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
