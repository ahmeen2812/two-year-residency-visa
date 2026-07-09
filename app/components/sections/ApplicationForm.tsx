"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, User, Globe, Phone, Mail, FileText, Loader2 } from "lucide-react";

// DEFINE PROPS TYPE
interface ApplicationFormProps {
  prefill?: { nationality: string; category: string };
}

export default function ApplicationForm({ prefill }: ApplicationFormProps) {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");
  const [formData, setFormData] = useState({
    nationality: "Pakistan",
    message: ""
  });

  // UPDATE FORM WHEN PREFILL CHANGES
  useEffect(() => {
    if (prefill?.category) {
      setFormData({
        nationality: prefill.nationality,
        message: `I am interested in ${prefill.category} for my 2-year residence visa.`
      });
    }
  }, [prefill]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("SUBMITTING");
    const data = new FormData(e.currentTarget);
    const response = await fetch("https://formspree.io/f/xpzeovql", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) setStatus("SUCCESS");
    else setStatus("ERROR");
  }

  if (status === "SUCCESS") {
    return (
      <div className="min-h-[600px] flex flex-col items-center justify-center text-center px-6 bg-white">
        <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", damping: 12 }} className="w-24 h-24 bg-[#0F172A] rounded-full flex items-center justify-center mb-10 shadow-2xl">
          <CheckCircle2 size={48} className="text-[#B38B59]" />
        </motion.div>
        <h3 className="text-4xl md:text-5xl font-heading font-black text-[#0F172A] uppercase tracking-tighter mb-6">Dossier Registered.</h3>
        <p className="text-[#64748B] font-body text-lg max-w-sm mx-auto leading-relaxed">The SULTAN Executive team has received your application.</p>
        <button onClick={() => setStatus("IDLE")} className="mt-12 text-[10px] font-black uppercase tracking-[0.4em] text-[#B38B59] border-b border-[#B38B59] pb-1">Submit Another Application</button>
      </div>
    );
  }

  return (
    <section id="apply" className="relative pt-12 pb-32 bg-[#F8FAFC] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#B38B59] font-heading font-bold tracking-[0.6em] uppercase text-[10px] mb-6 block">Enrollment Portal</span>
              <h2 className="text-6xl md:text-8xl font-heading font-black text-[#0F172A] tracking-tighter leading-[0.85] uppercase mb-12">START YOUR <br /> <span className="text-[#B38B59]">DOSSIER.</span></h2>
            </motion.div>
            <div className="space-y-8">
              {[{ title: "Legal Review", desc: "Your documents are audited by licensed UAE PROs." }, { title: "Priority Lane", desc: "Online applications receive 24-hour response priority." }, { title: "Secure Data", desc: "Military-grade encryption for all sensitive passport data." }].map((item, i) => (
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i} className="flex gap-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" />
                  <div><h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#0F172A] mb-1">{item.title}</h4><p className="text-[13px] text-[#64748B] font-body uppercase tracking-wider">{item.desc}</p></div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white p-12 md:p-16 shadow-2xl rounded-sm border border-black/[0.03]">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="group">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">Full Legal Name</label>
                <div className="flex items-center border-b border-black/5 group-focus-within:border-[#B38B59] transition-all pb-3">
                  <User size={18} className="text-[#0F172A]/20 mr-4" /><input name="Full Name" required type="text" placeholder="AS PER PASSPORT" className="w-full bg-transparent border-none outline-none text-[#0F172A] font-heading font-bold text-sm tracking-widest" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="group">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">Email Address</label>
                  <div className="flex items-center border-b border-black/5 group-focus-within:border-[#B38B59] transition-all pb-3">
                    <Mail size={18} className="text-[#0F172A]/20 mr-4" /><input name="Email" required type="email" placeholder="OFFICIAL EMAIL" className="w-full bg-transparent border-none outline-none text-[#0F172A] font-heading font-bold text-sm tracking-widest" />
                  </div>
                </div>
                <div className="group">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">WhatsApp Number</label>
                  <div className="flex items-center border-b border-black/5 group-focus-within:border-[#B38B59] transition-all pb-3">
                    <Phone size={18} className="text-[#0F172A]/20 mr-4" /><input name="WhatsApp" required type="tel" placeholder="+971 -- --- ----" className="w-full bg-transparent border-none outline-none text-[#0F172A] font-heading font-bold text-sm tracking-widest" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="group">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">Nationality</label>
                  <div className="flex items-center border-b border-black/5 group-focus-within:border-[#B38B59] transition-all pb-3">
                    <Globe size={18} className="text-[#0F172A]/20 mr-4" />
                    <select name="Nationality" value={formData.nationality} onChange={(e) => setFormData({...formData, nationality: e.target.value})} className="w-full bg-transparent border-none outline-none text-[#0F172A] font-heading font-bold text-[11px] uppercase tracking-widest cursor-pointer">
                      <option>Pakistan</option><option>India</option><option>Bangladesh</option><option>United Kingdom</option><option>Europe</option><option>Other / Worldwide</option>
                    </select>
                  </div>
                </div>
                <div className="group">
                  <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">Current Location</label>
                  <div className="flex items-center border-b border-black/5 group-focus-within:border-[#B38B59] transition-all pb-3">
                    <FileText size={18} className="text-[#0F172A]/20 mr-4" />
                    <select name="Location Status" className="w-full bg-transparent border-none outline-none text-[#0F172A] font-heading font-bold text-[11px] uppercase tracking-widest cursor-pointer">
                      <option>Inside UAE (Visit/Cancelled)</option><option>Outside UAE</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="text-[9px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-4 block">Additional Inquiries</label>
                <textarea name="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={3} className="w-full bg-[#F8FAFC] border border-black/5 p-4 text-[#0F172A] font-body text-sm outline-none focus:border-[#B38B59] transition-all" />
              </div>

              <button type="submit" disabled={status === "SUBMITTING"} className="w-full bg-[#0F172A] text-white py-7 flex items-center justify-center gap-6 group hover:bg-[#B38B59] hover:text-[#0F172A] transition-all duration-700 shadow-2xl disabled:opacity-50 cursor-pointer">
                {status === "SUBMITTING" ? <Loader2 className="animate-spin text-[#B38B59]" size={20} /> : <> <span className="text-[11px] font-black uppercase tracking-[0.5em]">Submit Formal Application</span> <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" /> </>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}