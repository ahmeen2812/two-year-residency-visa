"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  "Offer Letter", 
  "Labour Approval", 
  "Labour Fees", 
  "E-Visa",
  "Change Status", 
  "Medical Test", 
  "Fingerprint for Emirates ID",
  "Tawjeeh Class", 
  "Submission Processing", 
  "Labour Card", 
  "Residence Card",
  "Emirates ID", 
  "NOC Certificate", 
  "Salary Certificate",
  "WPS Account Opening"
];

export default function Processing() {
  // Cinematic Animation Variants
  const containerVars: Variants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="residency" className="relative pt-32 pb-12 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER: ELITE ARCHITECTURAL LAYOUT */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-[1.5px] bg-[#B38B59]" />
              <span className="text-[#B38B59] font-heading font-bold tracking-[0.5em] uppercase text-[10px]">
                Complete Scope of Service
              </span>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-heading font-black text-[#0F172A] tracking-tighter leading-[0.85] uppercase"
            >
              A SEAMLESS <br /> 
              <span className="text-[#B38B59]">JOURNEY.</span>
            </motion.h3>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-sm"
          >
            <p className="text-[#64748B] font-body text-lg border-l-2 border-[#B38B59]/20 pl-8 leading-relaxed italic">
              "From the initial offer letter to the final WPS account, we navigate every government touchpoint with absolute precision."
            </p>
          </motion.div>
        </div>

        {/* 15-STEP GOVERNMENT PROCESS GRID */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#0F172A]/5 border border-[#0F172A]/5 shadow-2xl"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={itemVars}
              className="bg-white p-10 h-[240px] flex flex-col justify-between group hover:bg-[#F8FAFC] transition-all duration-700 cursor-default relative overflow-hidden"
            >
              {/* Decorative Step Number in Background */}
              <span className="absolute -right-4 -bottom-4 text-7xl font-heading font-black text-black/[0.02] group-hover:text-[#B38B59]/5 transition-colors">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </span>

              <div className="flex justify-between items-start relative z-10">
                <span className="text-[10px] font-black text-[#B38B59] opacity-40 group-hover:opacity-100 transition-opacity uppercase tracking-[0.3em]">
                  Phase {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </span>
                <div className="p-2 rounded-full bg-[#B38B59]/10 opacity-0 group-hover:opacity-100 transition-all transform scale-0 group-hover:scale-100">
                  <Check size={14} className="text-[#B38B59]" />
                </div>
              </div>

              <div className="relative z-10">
                <div className="w-8 h-[1px] bg-[#0F172A]/10 mb-6 group-hover:w-full group-hover:bg-[#B38B59]/30 transition-all duration-1000" />
                <h4 className="text-[12px] font-heading font-black text-[#0F172A] tracking-[0.2em] uppercase leading-tight group-hover:text-[#B38B59] transition-colors">
                  {step}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* TRUST INDICATORS FOOTER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 pt-10 border-t border-[#0F172A]/5 flex flex-wrap justify-center items-center gap-x-16 gap-y-6"
        >
            {[
              { text: "Government Approved Hub", icon: "🇦🇪" },
              { text: "No Hidden Processing Fees", icon: "💎" },
              { text: "Full Legal Compliance", icon: "⚖️" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="text-xl">{item.icon}</span>
                <span className="text-[10px] font-black text-[#0F172A]/40 uppercase tracking-[0.4em]">
                  {item.text}
                </span>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}