// "use client";
// import React from "react";
// import { motion, Variants } from "framer-motion";
// import { 
//   ShieldCheck, Users, Building2, FileText, 
//   Landmark, Banknote, LandmarkIcon, Plane, UserX, ArrowRight 
// } from "lucide-react";

// const coreServices = [
//   { id: "0", title: "2-Year Freelance Visa", subtitle: "MAIN RESIDENCY SERVICE", icon: <ShieldCheck size={20} /> },
//   { id: "1", title: "Family Sponsor Visa", subtitle: "WIFE, KIDS & NEWBORN", icon: <Users size={20} /> },
//   { id: "2", title: "Business Setup", subtitle: "NEW & RENEW LICENSES", icon: <Building2 size={20} /> },
//   { id: "3", title: "Ejari Solutions", subtitle: "All Kind Of Ejari Service Available", icon: <FileText size={20} /> },
//   { id: "4", title: "All PRO Services", subtitle: "GOVERNMENT LIAISON", icon: <Landmark size={20} /> },
// ];

// const keyBenefits = [
//   { title: "2-Year Residency", desc: "Live and work legally in the UAE for 24 months.", icon: <ShieldCheck size={24} /> },
//   { title: "Family Sponsorship", desc: "Bring your spouse and children to live in Dubai.", icon: <Users size={24} /> },
//   { title: "Banking Access", desc: "Open personal and business bank accounts easily.", icon: <Banknote size={24} /> },
//   { title: "Tax-Free Income", desc: "Enjoy 100% of what you earn with 0% tax.", icon: <LandmarkIcon size={24} /> },
//   { title: "Travel Freedom", desc: "Multiple entries and exits from the UAE.", icon: <Plane size={24} /> },
//   { title: "No Employer Needed", desc: "Complete freedom to work on your own terms.", icon: <UserX size={24} /> },
// ];

// export default function ServiceBenefits() {
//   const itemVars: Variants = {
//     initial: { opacity: 0, y: 20 },
//     whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
//   };

//   return (
//     <section id="services" className="relative pt-48 pb-24 bg-white px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         {/* MASTER HEADER */}
//         <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-black/5 pb-16">
//           <div>
//             <span className="text-[#B38B59] font-heading font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Executive Portfolio</span>
//             <h2 className="text-5xl md:text-8xl font-heading font-black text-[#0F172A] tracking-tighter uppercase leading-none">
//               SCOPE & <br /> <span className="text-[#B38B59]">STRATEGY.</span>
//             </h2>
//           </div>
//           <p className="text-[#64748B] font-body text-lg max-w-sm leading-relaxed italic opacity-60">
//             "A unified approach to UAE residency, combining legal expertise with unparalleled lifestyle benefits."
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
          
//           {/* LEFT: THE SERVICES (ACTION SIDE) */}
//           <div className="lg:col-span-5">
//             <div className="flex items-center gap-4 mb-10">
//                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#0F172A]">Core Services</h3>
//                <div className="flex-grow h-[1px] bg-black/5" />
//             </div>

//             <div className="space-y-3">
//               {coreServices.map((service, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: i * 0.1 }}
//                   className="group flex items-center justify-between p-7 bg-[#F8FAFC] hover:bg-[#0F172A] transition-all duration-700 rounded-sm cursor-default border border-transparent hover:border-[#B38B59]/30"
//                 >
//                   <div className="flex items-center gap-6">
//                     <div className="text-[#B38B59] group-hover:scale-110 transition-transform duration-500">
//                       {service.icon}
//                     </div>
//                     <div>
//                       <div className="flex items-center gap-2">
//                         <span className="text-[10px] font-black text-[#B38B59] opacity-40 group-hover:opacity-100">{service.id}.</span>
//                         <h4 className="text-[14px] font-heading font-black text-[#0F172A] uppercase tracking-widest group-hover:text-white transition-colors">
//                           {service.title}
//                         </h4>
//                       </div>
//                       <p className="text-[8px] font-bold text-[#64748B] uppercase tracking-[0.2em] mt-1 group-hover:text-[#B38B59]/80 transition-colors">
//                         {service.subtitle}
//                       </p>
//                     </div>
//                   </div>
//                   <ArrowRight size={14} className="text-[#B38B59] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT: THE BENEFITS (VALUE SIDE) */}
//           <div className="lg:col-span-7">
//             <div className="flex items-center gap-4 mb-10">
//                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#0F172A]">Key Benefits</h3>
//                <div className="flex-grow h-[1px] bg-black/5" />
//             </div>

//             <div className="grid md:grid-cols-2 gap-px bg-black/5 border border-black/5">
//               {keyBenefits.map((benefit, i) => (
//                 <motion.div
//                   key={i}
//                   variants={itemVars}
//                   initial="initial"
//                   whileInView="whileInView"
//                   className="bg-white p-10 group hover:bg-[#F8FAFC] transition-colors duration-500"
//                 >
//                   <div className="w-10 h-10 rounded-full border border-[#B38B59]/20 flex items-center justify-center text-[#B38B59] mb-8 group-hover:bg-[#0F172A] group-hover:text-[#B38B59] group-hover:border-[#0F172A] transition-all duration-500">
//                     {benefit.icon}
//                   </div>
//                   <h3 className="text-lg font-heading font-black text-[#0F172A] uppercase tracking-tight mb-3">
//                     {benefit.title}
//                   </h3>
//                   <p className="text-sm text-[#64748B] leading-relaxed font-body group-hover:text-[#0F172A] transition-colors">
//                     {benefit.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
            
//             {/* TAGLINE */}
//             <div className="mt-12 p-8 bg-[#0F172A] rounded-sm flex items-center justify-between overflow-hidden relative">
//                <div className="relative z-10">
//                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#B38B59]">Legal Status</p>
//                  <h4 className="text-xl font-heading font-black text-white uppercase tracking-tighter mt-1">No Local Sponsor Needed.</h4>
//                </div>
//                <ShieldCheck className="text-white opacity-[0.03] absolute -right-4 top-1/2 -translate-y-1/2" size={120} />
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Users, Building2, FileText, Landmark, Banknote, LandmarkIcon, Plane, UserX, ArrowRight } from "lucide-react";

const coreServices = [
  { id: "0", title: "2-Year Freelance Visa", subtitle: "MAIN RESIDENCY SERVICE", icon: <ShieldCheck size={20} /> },
  { id: "1", title: "Family Sponsor Visa", subtitle: "WIFE, KIDS & NEWBORN", icon: <Users size={20} /> },
  { id: "2", title: "Business Setup", subtitle: "NEW & RENEW LICENSES", icon: <Building2 size={20} /> },
  { id: "3", title: "Ejari Solutions", subtitle: "ALL TENANCY CONTRACTS", icon: <FileText size={20} /> },
  { id: "4", title: "All PRO Services", subtitle: "GOVERNMENT LIAISON", icon: <Landmark size={20} /> },
];

const keyBenefits = [
  { title: "2-Year Residency", desc: "Live and work legally in the UAE for 24 months.", icon: <ShieldCheck size={20} /> },
  { title: "Family Sponsorship", desc: "Bring your spouse and children to live in Dubai.", icon: <Users size={20} /> },
  { title: "Banking Access", desc: "Open personal and business bank accounts easily.", icon: <Banknote size={20} /> },
  { title: "Tax-Free Income", desc: "Enjoy 100% of what you earn with 0% tax.", icon: <LandmarkIcon size={20} /> },
  { title: "Travel Freedom", desc: "Multiple entries and exits from the UAE.", icon: <Plane size={20} /> },
  { title: "No Employer Needed", desc: "Complete freedom to work on your own terms.", icon: <UserX size={20} /> },
];

export default function ServiceBenefits() {
  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="relative py-16 md:py-32 lg:py-48 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: RESPONSIVE PADDING & FONT */}
        <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 border-b border-black/5 pb-10 md:pb-16">
          <motion.div variants={itemVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <span className="text-[#B38B59] font-heading font-bold tracking-[0.5em] uppercase text-[9px] mb-3 block">Strategy Portal</span>
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-heading font-black text-[#0F172A] tracking-tighter uppercase leading-none">
              SCOPE & <br className="hidden md:block" /> <span className="text-[#B38B59]">VALUE.</span>
            </h2>
          </motion.div>
          <motion.p variants={itemVars} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="text-[#64748B] font-body text-base md:text-lg max-w-sm leading-relaxed italic opacity-60">
            A unified approach to UAE residency, combining legal expertise with unparalleled lifestyle benefits.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* ACTION SIDE: SERVICES */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0F172A]">Core Services</h3>
               <div className="flex-grow h-[1px] bg-black/5" />
            </div>

            <div className="space-y-3">
              {coreServices.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-center justify-between p-5 md:p-7 bg-[#F8FAFC] hover:bg-[#0F172A] transition-all duration-500 rounded-sm cursor-default border border-black/[0.02]"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="text-[#B38B59] group-hover:scale-110 transition-transform">{service.icon}</div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black text-[#B38B59] opacity-40">{service.id}.</span>
                        <h4 className="text-[12px] md:text-[14px] font-heading font-black text-[#0F172A] uppercase tracking-widest group-hover:text-white transition-colors">{service.title}</h4>
                      </div>
                      <p className="text-[8px] font-bold text-[#64748B] uppercase tracking-[0.2em] mt-1 group-hover:text-[#B38B59]/80 transition-colors">{service.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-[#B38B59] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* VALUE SIDE: BENEFITS */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-4 mb-8">
               <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0F172A]">Key Benefits</h3>
               <div className="flex-grow h-[1px] bg-black/5" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/5 border border-black/5">
              {keyBenefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={itemVars}
                  initial="initial"
                  whileInView="whileInView"
                  className="bg-white p-8 md:p-10 hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="w-9 h-9 rounded-full border border-[#B38B59]/20 flex items-center justify-center text-[#B38B59] mb-6 group-hover:bg-[#0F172A] transition-all">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-heading font-black text-[#0F172A] uppercase tracking-tight mb-2">{benefit.title}</h3>
                  <p className="text-[13px] md:text-sm text-[#64748B] leading-relaxed font-body">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-6 md:p-8 bg-[#0F172A] rounded-sm flex flex-col sm:flex-row items-center justify-between overflow-hidden relative gap-4">
               <div className="relative z-10 text-center sm:text-left">
                 <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#B38B59]">Legal Status</p>
                 <h4 className="text-lg md:text-xl font-heading font-black text-white uppercase tracking-tighter">No Local Sponsor Required.</h4>
               </div>
               <ShieldCheck className="text-white opacity-[0.05] absolute right-[-10px] top-1/2 -translate-y-1/2 hidden sm:block" size={100} />
               <a href="#contact" className="relative z-10 bg-[#B38B59] text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#0F172A] transition-all">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}