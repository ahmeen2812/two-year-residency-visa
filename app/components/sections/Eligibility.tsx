// "use client";
// import React from "react";
// import { motion, Variants } from "framer-motion";
// import { Globe, UserCheck, RefreshCcw, MapPin, Check } from "lucide-react";

// const nationalities = [
//   {
//     cat: "Category 03",
//     label: "SOUTH ASIAN REGION",
//     countries: ["Pakistan", "India", "Bangladesh"],
//     desc: "Primary processing hub for South Asian residents seeking high-priority 2-year freelance or employment status.",
//     alignment: "left"
//   },
//   {
//     cat: "Category 02",
//     label: "GLOBAL REGION",
//     countries: ["Europe", "UK", "USA", "All Others"],
//     desc: "Direct government enrollment for all international nationalities worldwide, subject to UAE quota approvals.",
//     alignment: "right"
//   }
// ];

// const scenarios = [
//   { title: "Renewal", icon: <RefreshCcw size={18} />, desc: "Existing Residency" },
//   { title: "Status Change", icon: <UserCheck size={18} />, desc: "Inside UAE" },
//   { title: "New Entry", icon: <Globe size={18} />, desc: "Outside UAE" },
// ];

// export default function Eligibility() {
//   const itemVars: Variants = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
//     }
//   };

//   return (
//     <section id="eligibility" className="relative py-12 bg-white px-6 overflow-hidden">

//       <div className="max-w-7xl mx-auto">
        
//         {/* TOP HEADER: MINIMAL & CLEAN */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-10">
//           <motion.div variants={itemVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
//             <span className="text-[#B38B59] font-heading font-bold tracking-[0.6em] uppercase text-[9px] mb-6 block">
//               Admission Guidelines
//             </span>
//             <h2 className="text-6xl md:text-8xl font-heading font-black text-[#0F172A] tracking-tighter leading-[0.85] uppercase">
//               GLOBAL <br /> <span className="text-[#B38B59]">ELITE.</span>
//             </h2>
//           </motion.div>
//           <motion.p variants={itemVars} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-[#64748B] font-body text-xl max-w-sm border-l border-black/5 pl-10 leading-relaxed italic opacity-60">
//             SULTAN Travel & Tourism LLC facilitates residency for all citizens worldwide.
//           </motion.p>
//         </div>

//         {/* THE DOSSIER SPLIT: CATEGORY 2 VS 3 */}
//         <div className="grid lg:grid-cols-2 gap-16 md:gap-24 mb-32">
//           {nationalities.map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: item.alignment === 'left' ? -30 : 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, delay: i * 0.2 }}
//               className="relative group"
//             >
//               <div className="flex items-center gap-4 mb-10">
//                 <span className="text-[10px] font-black tracking-[0.4em] text-[#B38B59] uppercase">{item.cat}</span>
//                 <div className="flex-grow h-[1px] bg-black/[0.05]" />
//               </div>
              
//               <h3 className="text-4xl font-heading font-black text-[#0F172A] mb-8 tracking-tight group-hover:text-[#B38B59] transition-colors duration-500">
//                 {item.label}
//               </h3>

//               <div className="flex flex-wrap gap-3 mb-10">
//                 {item.countries.map((country) => (
//                   <div key={country} className="flex items-center gap-2 bg-[#F8FAFC] px-5 py-2.5 border border-black/[0.03] hover:border-[#B38B59] transition-all group/chip">
//                     <div className="w-1 h-1 rounded-full bg-[#B38B59]" />
//                     <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">{country}</span>
//                   </div>
//                 ))}
//               </div>

//               <p className="text-[#64748B] text-lg leading-relaxed font-body max-w-md opacity-80 mb-10">
//                 {item.desc}
//               </p>

//               {/* Unique Detail: Floating Checkmark */}
//               <div className="flex items-center gap-3">
//                  <Check size={14} className="text-[#B38B59]" />
//                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0F172A]/40">Verified Eligibility Channel</span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* BOTTOM SCENARIOS: LUXURY STATUS BADGES (FIXED HOVER) */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {scenarios.map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ y: -5 }}
//               className="group flex items-center justify-between p-8 bg-white border border-black/[0.05] hover:border-[#0F172A] hover:bg-[#0F172A] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl"
//             >
//               <div className="flex items-center gap-6">
//                 {/* ICON BOX - FIXED: Icon becomes Champagne and background becomes dark on hover */}
//                 <div className="p-4 rounded-full bg-[#F8FAFC] text-[#0F172A] group-hover:bg-[#1E293B] group-hover:text-[#B38B59] transition-all duration-500">
//                   {s.icon}
//                 </div>
//                 <div>
//                   <h4 className="text-[11px] font-black uppercase tracking-widest text-[#0F172A] group-hover:text-white transition-colors">
//                     {s.title}
//                   </h4>
//                   <p className="text-[9px] font-bold text-[#64748B] group-hover:text-[#B38B59] uppercase tracking-widest transition-colors mt-1">
//                     {s.desc}
//                   </p>
//                 </div>
//               </div>
              
//               <div className="w-8 h-[1px] bg-black/5 group-hover:bg-[#B38B59] transition-all" />
//             </motion.div>
//           ))}
//         </div>

//         {/* LEGAL FOOTNOTE: MINIMAL */}
//         <motion.p 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mt-20 text-[8px] font-bold uppercase tracking-[0.5em] text-[#64748B] text-center opacity-40 max-w-4xl mx-auto leading-relaxed"
//         >
//           SULTAN Travel & Tourism LLC strictly adheres to UAE government quotas and immigration policies. Final approval is subject to document review and ministry verification.
//         </motion.p>

//       </div>
//     </section>
//   );
// }


"use client";

/**
 * @file Eligibility.tsx
 * @description Sovereign Dossier Logic with Multi-Regional Categorization.
 * @architect Ahmed Touqeer
 * @agency Elite Digital Agency
 * 
 * FIX LOG:
 * - Fluid padding logic implemented (Zero static gap error).
 * - Fixed invisible icon bug on mobile hover states.
 * - Enhanced typography spacing for South Asian / Global regions.
 */

import React from "react";
import { motion, Variants } from "framer-motion";
import { Globe, UserCheck, RefreshCcw, MapPin, Check, Shield } from "lucide-react";

const nationalities = [
  {
    cat: "Category 03",
    label: "SOUTH ASIAN SECTOR",
    countries: ["Pakistan", "India", "Bangladesh"],
    desc: "Primary processing hub for South Asian professionals seeking 2-year legal residency.",
    alignment: "left"
  },
  {
    cat: "Category 02",
    label: "GLOBAL SECTOR",
    countries: ["United Kingdom", "Europe", "Worldwide"],
    desc: "Direct government enrollment for all international citizens subject to UAE quota approval.",
    alignment: "right"
  }
];

const scenarios = [
  { title: "Renewal", icon: <RefreshCcw size={18} />, desc: "Visa Extensions" },
  { title: "Status Change", icon: <UserCheck size={18} />, desc: "Already In UAE" },
  { title: "Entry Permit", icon: <Globe size={18} />, desc: "Clients Outside UAE" },
];

export default function Eligibility() {
  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="eligibility" className="relative pt-12 md:pt-24 lg:pt-32 pb-0 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-8 md:gap-10">
          <motion.div variants={itemVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <span className="text-[#B38B59] font-heading font-bold tracking-[0.6em] uppercase text-[9px] mb-4 block">Regional Admission</span>
            <h2 className="text-5xl md:text-8xl font-heading font-black text-[#0F172A] tracking-tighter leading-[0.85] uppercase">
              GLOBAL <br /> <span className="text-[#B38B59]">ACCESS.</span>
            </h2>
          </motion.div>
          <motion.p variants={itemVars} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-[#64748B] font-body text-base md:text-xl max-w-sm border-l border-black/5 pl-8 md:pl-10 opacity-70 leading-relaxed italic">
            Facilitating UAE residency for all citizens worldwide through official channels.
          </motion.p>
        </div>

        {/* DOSSIER SPLIT */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 mb-16 md:mb-32">
          {nationalities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: item.alignment === 'left' ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-black tracking-[0.4em] text-[#B38B59] uppercase">{item.cat}</span>
                <div className="flex-grow h-[1px] bg-black/[0.05]" />
              </div>
              
              <h3 className="text-3xl md:text-5xl font-heading font-black text-[#0F172A] mb-6 tracking-tight group-hover:text-[#B38B59] transition-colors duration-500 uppercase">
                {item.label}
              </h3>

              <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                {item.countries.map((country) => (
                  <div key={country} className="flex items-center gap-2 bg-[#F8FAFC] px-4 py-2 border border-black/[0.03] rounded-sm group-hover:border-[#B38B59]/20 transition-all">
                    <div className="w-1 h-1 rounded-full bg-[#B38B59]" />
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#0F172A]">{country}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#64748B] text-sm md:text-lg leading-relaxed font-body max-w-md opacity-80 mb-10 pr-4">
                {item.desc}
              </p>

              <div className="flex items-center gap-3">
                 <Shield size={14} className="text-[#B38B59]" />
                 <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#0F172A]/40 tracking-widest">Authorized Enrollment Channel</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* STATUS SCENARIOS (TOUCH FIXED) */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {scenarios.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group flex items-center justify-between p-6 md:p-8 bg-white border border-black/[0.05] hover:border-[#0F172A] hover:bg-[#0F172A] transition-all duration-500 cursor-pointer rounded-sm"
            >
              <div className="flex items-center gap-5">
                {/* ICON BOX: FIXED INVISIBILITY */}
                <div className="p-3 md:p-4 rounded-full bg-[#F8FAFC] text-[#0F172A] group-hover:bg-[#1E293B] group-hover:text-[#B38B59] transition-all duration-500">
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-[#0F172A] group-hover:text-white transition-colors">{s.title}</h4>
                  <p className="text-[8px] md:text-[9px] font-bold text-[#64748B] group-hover:text-[#B38B59] uppercase tracking-widest transition-colors mt-1">{s.desc}</p>
                </div>
              </div>
              <div className="w-6 h-[1px] bg-black/5 group-hover:bg-[#B38B59] transition-all" />
            </motion.div>
          ))}
        </div>

        {/* DISCLAIMER */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} className="mt-16 md:mt-24 text-center">
            <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-[#64748B] max-w-4xl mx-auto leading-loose px-4">
              Final approval for all visa categories is subject to UAE government verification and document authentication by SULTAN Travel & Tourism LLC.
            </p>
        </motion.div>

      </div>
    </section>
  );
}