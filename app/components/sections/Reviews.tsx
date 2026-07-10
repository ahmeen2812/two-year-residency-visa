// "use client";

// /**
//  * @file Reviews.tsx
//  * @description Cinematic Evidence Archive with Touch-Friendly Reveal Logic.
//  * @architect Ahmed Touqeer
//  * @agency Elite Digital Agency
//  */

// import React, { useState } from "react";
// import { motion, Variants, AnimatePresence } from "framer-motion";
// import { Quote, Fingerprint, Eye } from "lucide-react";

// // AUTHENTIC CLIENT REVIEWS
// const reviews = [
//   { name: "MOOHSIN KHAN", text: "Finally got my 2-year visa today! Honestly, I was worried about the labour approval but these guys handled it so fast.", img: "/assets/reviews/moohsin.jpg" },
//   { name: "THILINI PRASADIKA P. R.", text: "The medical and fingerprinting was so organized. I didn't have to wait for hours like my friends did. Thank you!", img: "/assets/reviews/thilini.jpg" },
//   { name: "SIVANESHVARY SADASIVAM", text: "I was already inside Dubai on a visit visa. They made the status change look easy. Best service in Deira.", img: "/assets/reviews/sivaneshvary.jpg" },
//   { name: "GEETHIKA SATHSARANI A.", text: "Got my residence card even before the date they promised. The team is very responsive on WhatsApp. 5 stars!", img: "/assets/reviews/geethika.jpg" },
//   { name: "WASIM AKRAM", text: "Very straightforward people. They told me the price upfront and didn't ask for a single extra dirham.", img: "/assets/reviews/wasim.jpg" },
//   { name: "KYAW MIN KHANT", text: "If you need an employment visa in Dubai, just go to Sultan Travel. They know exactly what the government requires.", img: "/assets/reviews/kyaw.jpg" },
//   { name: "NGUYEN THI DAO", text: "I didn't think I could get my E-visa this quickly. Sultan hub is definitely the most trustworthy agency.", img: "/assets/reviews/nguyen-dao.jpg" },
//   { name: "NGUYEN XUAN THANH", text: "Process was very professional. They even helped me with my salary certificate for my bank account.", img: "/assets/reviews/nguyen-thanh.jpg" },
//   { name: "HUU LUONG PHAN", text: "Tawjeeh class was coordinated perfectly. Everything from start to finish was handled by their PRO.", img: "/assets/reviews/huu-luong.jpg" },
//   { name: "VAN DUNG TRAN", text: "A lot of people promised me a visa but only Sultan hub delivered. Truly professional consultancy.", img: "/assets/reviews/van-dung.jpg" },
//   { name: "LEE CHIA YONG", text: "The gold standard for sure. I was guided through every document. Now I have my 2-year residency with zero issues.", img: "/assets/reviews/lee-chia.jpg" }
// ];

// export default function Reviews() {
//   const [activeCard, setActiveCard] = useState<number | null>(null);

//   const containerVars: Variants = {
//     initial: { opacity: 0 },
//     whileInView: { opacity: 1, transition: { staggerChildren: 0.08 } }
//   };

//   const itemVars: Variants = {
//     initial: { opacity: 0, scale: 0.98, y: 20 },
//     whileInView: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   return (
//     <section id="reviews" className="relative py-24 md:py-32 bg-white px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* REFINED MINIMAL HEADER */}
//         <div className="text-center mb-16 md:mb-20">
//           <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[#B38B59] font-heading font-bold tracking-[0.5em] uppercase text-[9px] mb-4 block">
//             Executive Evidence
//           </motion.span>
//           <h2 className="text-4xl md:text-6xl font-heading font-black text-[#0F172A] tracking-tighter leading-none uppercase mb-6">
//             VERIFIED <span className="text-[#B38B59]">RESIDENTS.</span>
//           </h2>
//           <div className="flex flex-col items-center gap-4">
//              <div className="w-10 h-[1px] bg-black/10" />
//              <div className="lg:hidden flex items-center gap-2 text-[#B38B59] animate-pulse">
//                 <Fingerprint size={14} />
//                 <span className="text-[9px] font-black uppercase tracking-widest">Tap card to verify ID</span>
//              </div>
//           </div>
//         </div>

//         {/* 3-COLUMN COMPACT GRID */}
//         <motion.div 
//           variants={containerVars}
//           initial="initial"
//           whileInView="whileInView"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
//         >
//           {reviews.map((review, i) => (
//             <motion.div
//               key={i}
//               variants={itemVars}
//               onClick={() => setActiveCard(activeCard === i ? null : i)}
//               className="group relative aspect-[4/3] bg-[#F8FAFC] border border-black/[0.04] p-6 md:p-8 overflow-hidden rounded-sm transition-all duration-500 shadow-sm active:scale-95 lg:hover:shadow-2xl"
//             >
//               {/* LAYER 1: IMAGE REVEAL (HOVER ON PC, CLICK ON MOBILE) */}
//               <div className="absolute inset-0 z-0">
//                 <img 
//                   src={review.img} 
//                   alt={review.name}
//                   className={`w-full h-full object-cover scale-105 transition-all duration-700 ease-out ${
//                     activeCard === i ? "opacity-100 scale-100" : "opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-100"
//                   }`}
//                   onError={(e) => { e.currentTarget.style.display = 'none'; }}
//                 />
//                 {/* Cinematic Edge Vignette */}
//                 <div className={`absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent transition-opacity ${activeCard === i ? 'opacity-100' : 'opacity-0'}`} />
//               </div>

//               {/* LAYER 2: TEXT CONTENT (HIDES ON INTERACTION) */}
//               <div className={`relative z-10 h-full flex flex-col justify-between transition-all duration-500 ${
//                 activeCard === i ? "opacity-0 scale-95 blur-md" : "opacity-100 lg:group-hover:opacity-0 lg:group-hover:scale-95 lg:group-hover:blur-sm"
//               }`}>
//                 <div>
//                   <div className="flex justify-between items-start mb-6">
//                      <Quote size={20} className="text-[#B38B59] opacity-40" />
//                      <Eye size={16} className="text-[#0F172A]/10" />
//                   </div>
//                   <p className="text-[#64748B] font-body text-[14px] md:text-[15px] leading-relaxed italic pr-4">
//                     "{review.text}"
//                   </p>
//                 </div>

//                 <div className="pt-6 border-t border-black/5">
//                   <h4 className="text-[12px] font-heading font-black text-[#0F172A] uppercase tracking-widest mb-1">
//                     {review.name}
//                   </h4>
//                   <p className="text-[8px] font-bold text-[#B38B59] uppercase tracking-[0.3em]">
//                     Verified Resident
//                   </p>
//                 </div>
//               </div>

//               {/* Decorative Border Glow */}
//               <div className="absolute inset-0 border-2 border-transparent lg:group-hover:border-[#B38B59]/20 transition-all duration-700 pointer-events-none" />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* LOGO FOOTNOTE */}
//         <div className="mt-16 text-center">
//            <p className="text-[9px] font-black uppercase tracking-[0.6em] text-[#0F172A]/20">
//               SULTAN HUB GLOBAL ARCHIVE 2026
//            </p>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

/**
 * @file Reviews.tsx
 * @description Cinematic Evidence Archive with Touch-Friendly Reveal and Official Volume Note.
 * @architect Ahmed Touqeer
 */

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Quote, Fingerprint, Database, CheckSquare } from "lucide-react";

// --- CLIENT DATA ---
const reviews = [
  { name: "MOOHSIN KHAN", text: "Finally got my 2-year visa today! Honestly, I was worried about the labour approval but these guys handled it so fast.", img: "/assets/reviews/moohsin.jpg" },
  { name: "THILINI PRASADIKA P. R.", text: "The medical and fingerprinting was so organized. I didn't have to wait for hours like my friends did. Thank you!", img: "/assets/reviews/thilini.jpg" },
  { name: "SIVANESHVARY SADASIVAM", text: "I was already inside Dubai on a visit visa. They made the status change look easy. Best service in Deira.", img: "/assets/reviews/sivaneshvary.jpg" },
  { name: "GEETHIKA SATHSARANI A.", text: "Got my residence card even before the date they promised. The team is very responsive on WhatsApp. 5 stars!", img: "/assets/reviews/geethika.jpg" },
  { name: "WASIM AKRAM", text: "Very straightforward people. They told me the price upfront and didn't ask for a single extra dirham.", img: "/assets/reviews/wasim.jpg" },
  { name: "KYAW MIN KHANT", text: "If you need an employment visa in Dubai, just go to Sultan Travel. They know exactly what the government requires.", img: "/assets/reviews/kyaw.jpg" },
  { name: "NGUYEN THI DAO", text: "I didn't think I could get my E-visa this quickly. Sultan hub is definitely the most trustworthy agency.", img: "/assets/reviews/nguyen-dao.jpg" },
  { name: "NGUYEN XUAN THANH", text: "Process was very professional. They even helped me with my salary certificate for my bank account.", img: "/assets/reviews/nguyen-thanh.jpg" },
  { name: "HUU LUONG PHAN", text: "Tawjeeh class was coordinated perfectly. Everything from start to finish was handled by their PRO.", img: "/assets/reviews/huu-luong.jpg" },
  { name: "VAN DUNG TRAN", text: "A lot of people promised me a visa but only Sultan hub delivered. Truly professional consultancy.", img: "/assets/reviews/van-dung.jpg" },
  { name: "LEE CHIA YONG", text: "The gold standard for sure. I was guided through every document. Now I have my 2-year residency with zero issues.", img: "/assets/reviews/lee-chia.jpg" }
];

export default function Reviews() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const containerVars: Variants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, scale: 0.98, y: 20 },
    whileInView: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="reviews" className="relative py-16 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* REFINED MINIMAL HEADER */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Database size={14} className="text-[#B38B59]" />
            <span className="text-[#B38B59] font-heading font-bold tracking-[0.5em] uppercase text-[9px]">Official Records</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-7xl font-heading font-black text-[#0F172A] tracking-tighter leading-none uppercase mb-8">
            VERIFIED <span className="text-[#B38B59]">RESIDENTS.</span>
          </h2>

          {/* --- REQUESTED OFFICIAL HIGHLIGHT LINE --- */}
          <div className="max-w-3xl mx-auto mb-16 p-8 border border-dashed border-[#B38B59]/20 bg-[#F8FAFC] relative rounded-sm">
             <CheckSquare size={24} className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#B38B59] bg-white px-1" />
             <p className="text-[11px] md:text-[13px] font-bold text-[#64748B] uppercase tracking-[0.2em] leading-relaxed italic">
               Note: The following dossiers represent a curated highlight of our active success stories. While we have processed thousands of 2-year residency cards for global professionals, these select cases serve as a demo of our consistent operational excellence and government liaison speed.
             </p>
          </div>

          <div className="lg:hidden flex items-center justify-center gap-2 text-[#B38B59] mb-8 animate-pulse">
            <Fingerprint size={16} />
            <span className="text-[10px] font-black uppercase tracking-widest">Tap card to verify legal ID</span>
          </div>
        </div>

        {/* 3-COLUMN COMPACT GRID */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={itemVars}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
              className="group relative aspect-[4/3] bg-[#F8FAFC] border border-black/[0.04] p-6 md:p-8 overflow-hidden rounded-sm transition-all duration-500 shadow-sm active:scale-95 lg:hover:shadow-2xl cursor-pointer"
            >
              {/* IMAGE LAYER */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={review.img} 
                  alt={review.name}
                  className={`w-full h-full object-cover scale-105 transition-all duration-700 ease-out ${
                    activeCard === i ? "opacity-100 scale-100" : "opacity-0 lg:group-hover:opacity-100 lg:group-hover:scale-100"
                  }`}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent transition-opacity ${activeCard === i ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              {/* TEXT LAYER */}
              <div className={`relative z-10 h-full flex flex-col justify-between transition-all duration-500 ${
                activeCard === i ? "opacity-0 scale-95 blur-md" : "opacity-100 lg:group-hover:opacity-0 lg:group-hover:scale-95 lg:group-hover:blur-sm"
              }`}>
                <div>
                  <Quote size={24} className="text-[#B38B59] opacity-40 mb-6" />
                  <p className="text-[#64748B] font-body text-[14px] md:text-[15px] leading-relaxed italic pr-4">
                    "{review.text}"
                  </p>
                </div>
                <div className="pt-6 border-t border-black/5">
                  <h4 className="text-[12px] font-heading font-black text-[#0F172A] uppercase tracking-widest mb-1">
                    {review.name}
                  </h4>
                  <p className="text-[8px] font-bold text-[#B38B59] uppercase tracking-[0.3em]">
                    Verified Resident
                  </p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-transparent lg:group-hover:border-[#B38B59]/20 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}