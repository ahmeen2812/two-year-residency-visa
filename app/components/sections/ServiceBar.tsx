"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Building2, FileText, Landmark } from "lucide-react";

const services = [
  { title: "2-Year Residency", icon: <ShieldCheck size={16} /> },
  { title: "Family Union", icon: <Users size={16} /> },
  { title: "Business Setup", icon: <Building2 size={16} /> },
  { title: "Ejari Solutions", icon: <FileText size={16} /> },
  { title: "PRO Services", icon: <Landmark size={16} /> },
];

export default function ServiceBar() {
  return (
    <section className="relative z-20 bg-white border-t border-black/5 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative group cursor-pointer"
            >
              {/* THE CINEMATIC ZOOM CONTAINER */}
              <motion.div
                whileHover={{ 
                  scale: 1.25, 
                  z: 50,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
                }}
                className="flex items-center gap-3 px-6 py-2 rounded-full bg-transparent hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500"
              >
                <div className="text-[#B38B59] group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0F172A] whitespace-nowrap">
                  {service.title}
                </span>
                
                {/* Micro-Indicator */}
                <div className="w-1 h-1 rounded-full bg-[#B38B59] opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}