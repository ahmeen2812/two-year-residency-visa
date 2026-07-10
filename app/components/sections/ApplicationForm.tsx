"use client";

/**
 * @file ApplicationForm.tsx
 * @description Official Enrollment Hub using Formspree Endpoint: xykqrekn
 * @version 5.0.0 - Production Ready
 * @architect Ahmed Touqeer
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  User, 
  Globe, 
  Phone, 
  Mail, 
  FileText, 
  Loader2, 
  AlertTriangle, 
  ArrowUpRight, 
  ShieldCheck,
  Zap,
  Lock,
  MessageSquare
} from "lucide-react";

interface ApplicationFormProps {
  prefill?: { 
    nationality: string; 
    category: string 
  };
}

export default function ApplicationForm({ prefill }: ApplicationFormProps) {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");
  const [formData, setFormData] = useState({
    nationality: "Pakistan",
    message: ""
  });

  // PRE-FILL LOGIC: Updates when a user selects a plan from the Pricing Section
  useEffect(() => {
    if (prefill?.category) {
      const refinedCategory = prefill.category.replace('8000', '7,999').replace('6000', '5,999');
      setFormData(prev => ({
        ...prev,
        nationality: prefill.nationality,
        message: `Strategic Enrollment Request: Initiating file processing for the ${refinedCategory} residency plan.`
      }));
    }
  }, [prefill]);

  // --- SUBMISSION LOGIC ---
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("SUBMITTING");

    const form = e.currentTarget;
    
    // Construct the payload for Formspree
    const payload = {
      name: (form.elements.namedItem("full_name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      nationality: formData.nationality,
      status: (form.elements.namedItem("location_status") as HTMLSelectElement).value,
      message: formData.message,
      _subject: "SULTAN HUB: New 2-Year Residency Dossier"
    };

    try {
      const response = await fetch("https://formspree.io/f/xykqrekn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  }

  // Cinematic Success Screen
  if (status === "SUCCESS") {
    return (
      <section className="min-h-[700px] flex flex-col items-center justify-center text-center px-6 bg-white">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 bg-[#0F172A] rounded-full flex items-center justify-center mb-10 shadow-2xl">
          <CheckCircle2 size={54} className="text-[#B38B59]" />
        </motion.div>
        <h3 className="text-4xl md:text-6xl font-heading font-black text-[#0F172A] uppercase tracking-tighter mb-6">Dossier Registered.</h3>
        <p className="text-[#64748B] font-body text-lg max-w-sm mx-auto leading-relaxed mb-8">
          The SULTAN Hub team has received your application. We will coordinate via WhatsApp and Telegram (@Dubaifreelancevisa07) shortly.
        </p>
        <button onClick={() => setStatus("IDLE")} className="text-[11px] font-black uppercase tracking-[0.4em] text-[#B38B59] border-b border-[#B38B59] pb-1">Submit New Form</button>
      </section>
    );
  }

  return (
    <section id="apply" className="relative pt-24 pb-32 md:pt-40 bg-[#F8FAFC] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#B38B59] font-heading font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Enrollment Portal</span>
              <h2 className="text-5xl md:text-8xl font-heading font-black text-[#0F172A] tracking-tighter leading-[0.85] uppercase mb-12">START YOUR <br /> <span className="text-[#B38B59]">DOSSIER.</span></h2>
            </motion.div>
            <div className="space-y-10">
              {[{ title: "Legal Review", icon: <ShieldCheck size={18} /> }, { title: "Priority Processing", icon: <Zap size={18} /> }, { title: "Vault Privacy", icon: <Lock size={18} /> }].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-white border border-black/5 rounded-sm flex items-center justify-center text-[#B38B59] shadow-sm">{item.icon}</div>
                  <div><h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0F172A] mb-1">{item.title}</h4><p className="text-[13px] text-[#64748B] font-body uppercase tracking-wider leading-relaxed">Official processing via UAE ministries.</p></div>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-7 bg-white p-8 md:p-16 shadow-2xl rounded-sm border border-black/[0.03]">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="group">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">Passport Identity</label>
                <div className="flex items-center border-b border-black/5 group-focus-within:border-[#B38B59] pb-3 transition-all">
                  <User size={18} className="text-[#0F172A]/20 mr-4" />
                  <input name="full_name" required type="text" placeholder="ENTER LEGAL NAME" className="w-full bg-transparent border-none outline-none text-[#0F172A] font-heading font-bold text-sm tracking-widest" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="group">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">Email Channel</label>
                  <input name="email" required type="email" placeholder="EMAIL" className="w-full bg-transparent border-b border-black/5 pb-3 outline-none text-[#0F172A] font-heading font-bold text-sm tracking-widest uppercase focus:border-[#B38B59]" />
                </div>
                <div className="group">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">WhatsApp Number</label>
                  <input name="whatsapp" required type="tel" placeholder="+971..." className="w-full bg-transparent border-b border-black/5 pb-3 outline-none text-[#0F172A] font-heading font-bold text-sm tracking-widest focus:border-[#B38B59]" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="group">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">Citizenship</label>
                  <select name="nationality" value={formData.nationality} onChange={(e) => setFormData({...formData, nationality: e.target.value})} className="w-full bg-transparent border-b border-black/5 pb-3 outline-none text-[#0F172A] font-heading font-bold text-[11px] uppercase tracking-widest cursor-pointer">
                    <option value="Pakistan">Pakistan</option><option value="India">India</option><option value="Bangladesh">Bangladesh</option><option value="Other">Other / Worldwide</option>
                  </select>
                </div>
                <div className="group">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">Current Sector</label>
                  <select name="location_status" className="w-full bg-transparent border-b border-black/5 pb-3 outline-none text-[#0F172A] font-heading font-bold text-[11px] uppercase tracking-widest cursor-pointer">
                    <option value="Inside UAE">Inside UAE (Visit/Cancelled)</option><option value="Outside UAE">Outside UAE</option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">Executive Inquiry</label>
                <textarea name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} required className="w-full bg-[#F8FAFC] border border-black/5 p-5 text-[#0F172A] font-body text-sm outline-none focus:border-[#B38B59] transition-all resize-none shadow-inner" />
              </div>

              <button type="submit" disabled={status === "SUBMITTING"} className="w-full bg-[#0F172A] text-white py-8 rounded-sm flex items-center justify-center gap-6 group hover:bg-[#B38B59] hover:text-[#0F172A] transition-all duration-700 shadow-2xl disabled:opacity-50 active:scale-95">
                {status === "SUBMITTING" ? <Loader2 className="animate-spin text-[#B38B59]" size={20} /> : <><span className="text-[11px] font-black uppercase tracking-[0.6em]">Submit Formal Application</span><Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
              </button>

              {status === "ERROR" && <div className="flex items-center justify-center gap-3 text-red-600 mt-6"><AlertTriangle size={14} /><p className="text-[10px] font-bold uppercase tracking-[0.4em]">Submission Denied. Verify connection.</p></div>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}