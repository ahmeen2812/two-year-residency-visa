// "use client";

// /**
//  * @file Hero.tsx
//  * @description Master Entry Section with high-contrast typography and responsive image reveal.
//  * @architect Ahmed Touqeer
//  * @agency Elite Digital Agency
//  */

// import { motion, Variants } from "framer-motion";
// import { MoveRight } from "lucide-react";

// interface HeroProps {
//   onStartClick?: () => void;
// }

// export default function Hero({ onStartClick }: HeroProps) {
//   // Cinematic Orchestration
//   const containerVars: Variants = {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//     },
//   };

//   const itemVars: Variants = {
//     initial: { opacity: 0, y: 40, rotateX: 8, scale: 0.95 },
//     animate: { 
//       opacity: 1, 
//       y: 0, 
//       rotateX: 0,
//       scale: 1,
//       transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
//     },
//   };

//   return (
//     <motion.section 
//       variants={containerVars}
//       initial="initial"
//       animate="animate"
//       className="relative min-h-screen bg-white pt-28 md:pt-32 pb-16 px-6 flex items-center overflow-hidden"
//     >
//       {/* Background Micro-Detail */}
//       <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F8FAFC]/50 -z-10 skew-x-[-12deg] translate-x-20 hidden md:block" />

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-10 items-center w-full relative z-10">
        
//         {/* --- LEFT CONTENT: RESPONSIVE TYPOGRAPHY --- */}
//         <div className="lg:col-span-7 z-10 text-left" style={{ perspective: "1500px" }}>
          
//           <motion.div variants={itemVars} className="mb-8">
//              <h1 className="flex flex-col gap-1 md:gap-2">
//                 <span className="text-xl sm:text-2xl md:text-5xl font-semibold tracking-[0.2em] md:tracking-[0.3em] text-[#0F172A]/70 uppercase font-heading">
//                    UAE 2-YEAR
//                 </span>
//                 <span className="text-5xl sm:text-7xl md:text-[115px] font-black italic text-[#B38B59] leading-[0.9] tracking-tighter my-1 md:my-2">
//                    FREELANCE
//                 </span>
//                 <span className="text-4xl sm:text-6xl md:text-[100px] font-extrabold text-[#0F172A] leading-[0.85] tracking-[0.02em] uppercase">
//                    RESIDENCY.
//                 </span>
//              </h1>
//           </motion.div>

//           {/* Horizontal Anchor */}
//           <motion.div variants={itemVars} className="w-16 md:w-20 h-[2px] md:h-[2.5px] bg-[#B38B59] mb-10" />

//           <motion.p variants={itemVars} className="text-[#64748B] font-body text-base md:text-xl max-w-xl leading-relaxed mb-12 opacity-95">
//             Empowering global professionals with legal autonomy in the United Arab Emirates. 
//             Secure your 24-month residence visa with Dubai's premier executive hub.
//           </motion.p>

//           <motion.div variants={itemVars} className="flex flex-wrap gap-6 md:gap-8 items-center">
//             {/* CTA BUTTON: RESPONSIVE PADDING */}
//             <motion.button 
//               onClick={onStartClick}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="relative inline-flex items-center gap-4 md:gap-6 px-8 md:px-12 py-5 md:py-6 bg-[#0F172A] border-2 border-[#0F172A] rounded-[2px] shadow-2xl cursor-pointer group transition-all duration-500 hover:bg-white"
//             >
//               <span className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.3em] text-white group-hover:text-[#0F172A] transition-colors">
//                 Start Application
//               </span>
//               <MoveRight className="text-white group-hover:text-[#0F172A] group-hover:translate-x-2 transition-all" size={20} />
//             </motion.button>
            
//             <div className="flex flex-col border-l border-black/5 pl-6 md:pl-8">
//                <span className="text-[9px] md:text-[10px] font-black text-[#B38B59] uppercase tracking-[0.5em] mb-1">Status</span>
//                <span className="text-[10px] md:text-[11px] font-heading font-bold text-[#0F172A]/40 uppercase tracking-widest">Active Worldwide</span>
//             </div>
//           </motion.div>
//         </div>

//         {/* --- RIGHT CONTENT: RESPONSIVE REVEAL --- */}
//         <div className="lg:col-span-5 relative w-full h-[350px] sm:h-[450px] md:h-[550px] flex justify-center lg:justify-end mt-12 lg:mt-8">
//           <div className="relative w-full max-w-[420px] h-full overflow-hidden border-l border-black/5 shadow-2xl rounded-sm">
            
//             {/* The Gold reveal line */}
//             <motion.div 
//               initial={{ scaleY: 0 }}
//               animate={{ scaleY: 1 }}
//               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
//               className="absolute left-0 top-0 w-[2px] h-full bg-[#B38B59] origin-top z-20"
//             />

//             <motion.div
//               initial={{ clipPath: "inset(0 100% 0 0)" }}
//               animate={{ clipPath: "inset(0 0% 0 0)" }}
//               transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
//               className="w-full h-full relative"
//             >
//               <img 
//                 src="/assets/images/dubai-hero.jpg" 
//                 alt="SULTAN UAE Hub"
//                 className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-[6s] ease-out scale-110 hover:scale-100"
//                 onError={(e) => {
//                   e.currentTarget.src = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000";
//                 }}
//               />
              
//               {/* Image floating tag - responsive size */}
//               <motion.div 
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 1.2, duration: 0.8 }}
//                 className="absolute bottom-6 md:bottom-12 right-0 bg-white/95 backdrop-blur-md p-6 md:p-10 border-l-[4px] md:border-l-[6px] border-[#B38B59] shadow-2xl"
//               >
//                 <p className="text-[20px] md:text-[32px] font-heading font-black text-[#0F172A] leading-none tracking-tighter uppercase">OFFICIAL</p>
//                 <p className="text-[8px] md:text-[10px] font-black tracking-[0.5em] uppercase text-[#B38B59]">Residence Hub 2026</p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//       </div>
//     </motion.section>
//   );
// }



"use client";

import { motion, Variants } from "framer-motion";
import { MoveRight, ShieldCheck } from "lucide-react";

interface HeroProps {
  onStartClick?: () => void;
}

export default function Hero({ onStartClick }: HeroProps) {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 30, rotateX: 10 },
    animate: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: "circOut" } }
  };

  return (
    <motion.section 
      variants={containerVars}
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-white pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-20 px-6 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full relative z-10">
        
        {/* TEXT CONTENT: MOBILE-OPTIMIZED TYPOGRAPHY */}
        <div className="lg:col-span-7 z-10 text-left" style={{ perspective: "1500px" }}>
          
          <motion.div variants={itemVars} className="mb-6 md:mb-8">
             <h1 className="flex flex-col gap-1 md:gap-2">
                <span className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-[0.2em] md:tracking-[0.3em] text-[#0F172A]/70 uppercase font-heading">
                   UAE 2-YEAR
                </span>
                <span className="text-5xl sm:text-7xl md:text-9xl lg:text-[115px] font-black italic text-[#B38B59] leading-[0.95] md:leading-[0.9] tracking-tighter my-1 md:my-2">
                   FREELANCE
                </span>
                <span className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] font-extrabold text-[#0F172A] leading-[0.9] md:leading-[0.85] tracking-[0.02em] uppercase">
                   RESIDENCY.
                </span>
             </h1>
          </motion.div>

          <motion.div variants={itemVars} className="w-16 md:w-20 h-[2px] bg-[#B38B59] mb-8 md:mb-10" />

          <motion.p variants={itemVars} className="text-[#64748B] font-body text-base md:text-xl max-w-lg leading-relaxed mb-10 md:mb-12 opacity-95 pr-4 md:pr-0">
            Secure your legal autonomy in Dubai with the premier residence visa hub. 
            Elite processing for global professionals and visionary investors.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-wrap gap-4 md:gap-8 items-center">
            <motion.button 
              onClick={onStartClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-4 md:gap-6 px-8 md:px-12 py-5 md:py-6 bg-[#0F172A] border-2 border-[#0F172A] rounded-[2px] shadow-2xl cursor-pointer group transition-all duration-300 hover:bg-white w-full sm:w-auto justify-center"
            >
              <span className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.3em] text-white group-hover:text-[#0F172A] transition-colors">
                Start Application
              </span>
              <MoveRight className="text-white group-hover:text-[#0F172A] transition-all" size={20} />
            </motion.button>
            
            <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-1 border-l border-black/5 pl-6 md:pl-8">
               <span className="text-[9px] md:text-[10px] font-black text-[#B38B59] uppercase tracking-[0.4em]">Status</span>
               <span className="text-[10px] md:text-[11px] font-heading font-bold text-[#0F172A]/40 uppercase tracking-widest">Active Intake</span>
            </div>
          </motion.div>
        </div>

        {/* IMAGE REVEAL: FIXED HEIGHT ON MOBILE */}
        <div className="lg:col-span-5 relative h-[350px] sm:h-[450px] lg:h-[550px] w-full flex justify-center lg:justify-end mt-6 lg:mt-0">
          <div className="relative w-full max-w-[420px] h-full overflow-hidden border-l border-black/5 shadow-2xl rounded-sm">
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2 }} className="absolute left-0 top-0 w-[2px] h-full bg-[#B38B59] origin-top z-20" />
            <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 1.2, delay: 0.4 }} className="w-full h-full relative">
              <img src="/assets/images/dubai-hero.jpg" alt="Dubai SULTAN Hub" className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-[6s] ease-out" />
              <div className="absolute bottom-6 md:bottom-8 right-0 bg-white/95 backdrop-blur-md p-4 md:p-8 border-l-[4px] border-[#B38B59] shadow-2xl">
                <p className="text-[18px] md:text-[24px] font-heading font-black text-[#0F172A] leading-none uppercase">OFFICIAL</p>
                <p className="text-[7px] md:text-[9px] font-black tracking-[0.4em] uppercase text-[#B38B59]">Residence Hub 2026</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}