"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  PlusCircle, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  Send,
  MessageSquare,
  FileText
} from "lucide-react";

export default function PortalPage() {
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
      assignedTo: "Kutilyapti",
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
      category: "Umumiy IT So'rov",
      priority: newPriority,
      status: "OPEN",
      assignedTo: "Navbatda",
      updatedAt: "Hozirgina",
    };

    setTickets([newTkt, ...tickets]);
    setNewTitle("");
    setNewDesc("");
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "CRITICAL":
        return <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30">CRITICAL (15m SLA)</span>;
      case "HIGH":
        return <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">HIGH</span>;
      case "MEDIUM":
        return <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">MEDIUM</span>;
      default:
        return <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-500/20 text-slate-400 border border-slate-500/30">LOW</span>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "IN_PROGRESS":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Jarayonda</span>;
      case "RESOLVED":
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Yechildi</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> Ochiq</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-xl text-blue-400">
            ← IT Xizmatlari
          </Link>
          <span className="text-slate-600">/</span>
          <span className="font-semibold text-slate-200">Mijoz Portali & ITSM Helpdesk</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold">
            FC
          </div>
          <div>
            <div className="font-medium text-slate-200">Fintech Corp LLC</div>
            <div className="text-xs text-slate-500">Premium Obuna</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Tickets List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Mening IT So'rovlarim (Tickets)</h1>
            <span className="text-sm text-slate-400">{tickets.length} ta faol so'rov</span>
          </div>

          <div className="space-y-4">
            {tickets.map((tkt) => (
              <div 
                key={tkt.id}
                className="p-5 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs font-semibold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800">
                      {tkt.id}
                    </span>
                    <span className="text-xs text-slate-400">{tkt.category}</span>
                  </div>
                  {getStatusBadge(tkt.status)}
                </div>

                <h3 className="text-base font-bold text-white">{tkt.title}</h3>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center space-x-3">
                    {getPriorityBadge(tkt.priority)}
                    <span>Mas'ul: <strong className="text-slate-300">{tkt.assignedTo}</strong></span>
                  </div>
                  <span>{tkt.updatedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: New Ticket Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 h-fit sticky top-6">
          <div className="flex items-center space-x-2 mb-4 text-white font-bold text-lg">
            <PlusCircle className="w-5 h-5 text-blue-400" />
            <h2>Yangi IT So'rov Yaratish</h2>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            Nosozlik yoki talabni yozing. Bizning IT muhandislarimiz SLA bo'yicha darhol bog'lanadi.
          </p>

          <form onSubmit={handleCreateTicket} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Muammo yoki Xizmat Mavzusi
              </label>
              <input 
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Masalan: Mail server ishlamayapti"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Ustuvorlik (Priority)
              </label>
              <select 
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500"
              >
                <option value="LOW">LOW (Reaksiya 4 soat)</option>
                <option value="MEDIUM">MEDIUM (Reaksiya 2 soat)</option>
                <option value="HIGH">HIGH (Reaksiya 30 daqiqa)</option>
                <option value="CRITICAL">CRITICAL (Reaksiya 15 daqiqa)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Batafsil Tavsif
              </label>
              <textarea 
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                rows={4}
                placeholder="Nosozlik tafsilotlari, xato kodi yoki skrinshot izohi..."
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-lg flex items-center justify-center space-x-2 transition-all shadow-md shadow-blue-600/20"
            >
              <Send className="w-4 h-4" />
              <span>So'rovni Yuborish</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
