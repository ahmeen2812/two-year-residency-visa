"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, HelpCircle, AlertCircle } from "lucide-react";
import Counter from "../ui/Counter";

interface PricingProps {
  onSelect?: (nat: string, cat: string) => void;
}

const pricingPlans = [
  {
    cat: "Category 03",
    region: "SOUTH ASIA",
    countries: "Pakistan • India • Bangladesh",
    price: 8000,
    details: ["Full Labour Approval", "E-Visa Processing", "Medical & Fingerprint Support", "Emirates ID Issuance"]
  },
  {
    cat: "Category 02",
    region: "GLOBAL",
    countries: "All Other Nationalities",
    price: 6000,
    details: ["Worldwide Enrollment", "Government Quota Liaison", "Status Change Assistance", "Full Residency Stamping"]
  }
];

const importantNoticeFactors = [
  "Nationality", "Government Rules", "Visa Quotas", 
  "Approval Status", "Processing Time", "Immigration Policies"
];

export default function Pricing({ onSelect }: PricingProps) {
  const itemVars: Variants = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="pricing" className="relative pt-48 pb-12 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#B38B59] font-heading font-bold tracking-[0.6em] uppercase text-[9px] mb-6 block">Investment Path</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl font-heading font-black text-[#0F172A] tracking-tighter leading-none uppercase">FINANCIAL <br /> <span className="text-[#B38B59]">STRUCTURE.</span></motion.h2>
          <div className="mt-10 w-12 h-[1px] bg-black/10 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 border border-black/[0.03]">
          {pricingPlans.map((plan, i) => (
            <motion.div key={i} variants={itemVars} initial="initial" whileInView="whileInView" viewport={{ once: true }} className={`relative p-12 md:p-24 flex flex-col group transition-all duration-1000 ${i === 0 ? "lg:border-r border-black/[0.03]" : ""} hover:bg-[#F8FAFC]`}>
              <div className="flex justify-between items-start mb-20">
                <div>
                  <span className="text-[10px] font-black text-[#B38B59] tracking-[0.4em] uppercase block mb-2">{plan.cat}</span>
                  <h3 className="text-4xl font-heading font-black text-[#0F172A] tracking-tighter">{plan.region}</h3>
                </div>
                <ShieldCheck size={24} className="text-[#B38B59] opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="mb-16">
                <p className="text-[9px] font-bold text-[#64748B] uppercase tracking-[0.3em] mb-4">Starting Investment</p>
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-light text-black/10 font-heading">AED</span>
                  <h4 className="text-8xl md:text-[120px] font-heading font-black text-[#0F172A] leading-none tracking-tighter group-hover:text-[#B38B59] transition-colors duration-700">
                    <Counter value={plan.price} />
                  </h4>
                </div>
                <p className="text-[11px] font-bold text-[#0F172A]/40 uppercase tracking-widest mt-6 italic">{plan.countries}</p>
              </div>

              <div className="space-y-4 mb-20">
                {plan.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B38B59]" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#0F172A]">{detail}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => onSelect?.(plan.region.includes("SOUTH") ? "Pakistan" : "Other / Worldwide", `${plan.cat} - ${plan.price} AED`)} className="mt-auto flex items-center justify-between w-full border border-black/10 p-6 group/btn hover:bg-[#0F172A] transition-all duration-500 cursor-pointer">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0F172A] group-hover/btn:text-white transition-colors">Select Category</span>
                <ArrowRight size={16} className="text-[#B38B59] group-hover/btn:translate-x-2 transition-transform" />
              </button>
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#B38B59] group-hover:w-full transition-all duration-1000" />
            </motion.div>
          ))}
        </div>

        {/* UPDATED IMPORTANT NOTICE SECTION */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-24 max-w-5xl mx-auto border border-dashed border-[#B38B59]/30 p-12 relative bg-[#F8FAFC]/50">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-6 text-[#B38B59] flex items-center gap-2">
             <AlertCircle size={20} />
             <span className="text-[11px] font-black uppercase tracking-[0.4em]">Important Notice</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[12px] font-bold text-[#0F172A] uppercase tracking-[0.15em] mb-4">Pricing Variation Policy</p>
              <p className="text-[11px] text-[#64748B] leading-relaxed uppercase tracking-wider mb-6">
                Prices can sometimes be lower or higher depending on market conditions and UAE government regulations. Final price is confirmed after document review and approval status.
              </p>
              <div className="w-12 h-[1px] bg-[#B38B59]/30" />
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
               {importantNoticeFactors.map((f) => (
                 <div key={f} className="flex items-center gap-3">
                   <div className="w-1 h-1 bg-[#B38B59] rounded-full" />
                   <span className="text-[9px] font-black text-[#0F172A]/60 uppercase tracking-widest">{f}</span>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}