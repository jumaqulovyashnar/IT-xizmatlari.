"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ThemeLanguageSwitcher } from "@/components/ThemeLanguageSwitcher";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PlusCircle, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Send,
  ArrowLeft
} from "lucide-react";

export default function PortalPage() {
  const { t } = useLanguage();

  const [tickets, setTickets] = useState([
    {
      id: "IT-2026-001",
      title: "Asosiy PostgreSQL Server javob bermayapti",
      category: "Server Nosozligi",
      priority: "CRITICAL",
      status: "IN_PROGRESS",
      assignedTo: "Yashnar Jumaqulov (Lead DevOps)",
      updatedAt: "10 daqiqa oldin",
    },
    {
      id: "IT-2026-002",
      title: "Ofis Wi-Fi tarmog'i uchun yangi VLAN sozlash",
      category: "Tarmoq Sozlamalari",
      priority: "MEDIUM",
      status: "ASSIGNED",
      assignedTo: "Aliyev Sardor (Network Eng)",
      updatedAt: "1 soat oldin",
    },
    {
      id: "IT-2026-003",
      title: "Yangi dasturchilar uchun VPN va IAM ochish",
      category: "Xavfsizlik & Ruxsatlar",
      priority: "LOW",
      status: "OPEN",
      assignedTo: "Navbatda",
      updatedAt: "2 soat oldin",
    },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newPriority, setNewPriority] = useState("MEDIUM");

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newTkt = {
      id: `IT-2026-${String(tickets.length + 1).padStart(3, "0")}`,
      title: newTitle,
      category: "General IT Request",
      priority: newPriority,
      status: "OPEN",
      assignedTo: "Queue",
      updatedAt: "Just now",
    };

    setTickets([newTkt, ...tickets]);
    setNewTitle("");
    setNewDesc("");
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "CRITICAL":
        return <Badge variant="destructive" className="animate-pulse">CRITICAL (15m SLA)</Badge>;
      case "HIGH":
        return <span className="badge badge-warning text-xs font-bold">HIGH</span>;
      case "MEDIUM":
        return <span className="badge badge-info text-xs font-bold">MEDIUM</span>;
      default:
        return <span className="badge badge-ghost text-xs font-bold">LOW</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "IN_PROGRESS":
        return <span className="badge badge-primary gap-1 font-semibold"><Clock className="w-3.5 h-3.5" /> {t.portal.inProgress}</span>;
      case "RESOLVED":
        return <span className="badge badge-success gap-1 font-semibold text-white"><CheckCircle2 className="w-3.5 h-3.5" /> {t.portal.resolved}</span>;
      default:
        return <span className="badge badge-neutral gap-1 font-semibold"><AlertCircle className="w-3.5 h-3.5" /> {t.portal.open}</span>;
    }
  };

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
            / {t.portal.title}
          </span>
        </div>

        <div className="navbar-end gap-3">
          <ThemeLanguageSwitcher />
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-9">
              <span className="text-xs font-bold">FC</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Tickets */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{t.portal.title}</h1>
            <span className="badge badge-outline font-semibold">{tickets.length} {t.portal.activeTickets}</span>
          </div>

          <div className="space-y-4">
            {tickets.map((tkt) => (
              <Card key={tkt.id} className="hover:border-primary/50 transition-all shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="badge badge-primary font-mono text-xs font-bold">{tkt.id}</span>
                      <span className="text-xs opacity-70">{tkt.category}</span>
                    </div>
                    {getStatusBadge(tkt.status)}
                  </div>
                  <CardTitle className="text-lg font-bold pt-1">{tkt.title}</CardTitle>
                </CardHeader>

                <CardContent className="pt-0 flex items-center justify-between text-xs opacity-80 border-t border-base-300 pt-3">
                  <div className="flex items-center gap-3">
                    {getPriorityBadge(tkt.priority)}
                    <span>Engineer: <strong>{tkt.assignedTo}</strong></span>
                  </div>
                  <span>{tkt.updatedAt}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column: New Ticket Form */}
        <Card className="h-fit sticky top-6 shadow-xl border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-bold">
              <PlusCircle className="w-5 h-5 text-primary" />
              {t.portal.createTitle}
            </CardTitle>
            <CardDescription>
              {t.portal.createSubtitle}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleCreateTicket} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                  {t.portal.subjectLabel}
                </label>
                <Input 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Nginx proxy timeout 504"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                  {t.portal.priorityLabel}
                </label>
                <select 
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value)}
                  className="select select-bordered select-sm w-full bg-base-100 font-medium"
                >
                  <option value="LOW">LOW (SLA 4 hours)</option>
                  <option value="MEDIUM">MEDIUM (SLA 2 hours)</option>
                  <option value="HIGH">HIGH (SLA 30 mins)</option>
                  <option value="CRITICAL">CRITICAL (SLA 15 mins)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                  {t.portal.descLabel}
                </label>
                <textarea 
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  rows={4}
                  className="textarea textarea-bordered w-full bg-base-100 text-sm focus:outline-none focus:border-primary resize-none"
                  placeholder="Logs, screenshots, stack trace..."
                />
              </div>

              <Button type="submit" className="w-full gap-2 shadow-md">
                <Send className="w-4 h-4" />
                {t.portal.submitBtn}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
