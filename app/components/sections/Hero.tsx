"use client";
import { motion, Variants } from "framer-motion";
import { MoveRight } from "lucide-react";

// DEFINE PROPS TYPE
interface HeroProps {
  onStartClick?: () => void;
}

export default function Hero({ onStartClick }: HeroProps) {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 40, rotateX: 8, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <motion.section 
      variants={containerVars}
      initial="initial"
      animate="animate"
      className="relative min-h-screen bg-white pt-32 pb-10 px-6 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center w-full relative z-10 -mt-10">
        
        <div className="lg:col-span-7 z-10" style={{ perspective: "1500px" }}>
          <motion.div variants={itemVars} className="mb-8">
             <h1 className="flex flex-col gap-1">
                <span className="text-2xl md:text-5xl font-semibold tracking-[0.3em] text-[#0F172A]/70 uppercase font-heading">UAE 2-YEAR</span>
                <span className="text-7xl md:text-[115px] font-black italic text-[#B38B59] leading-[0.9] tracking-tighter my-2">FREELANCE</span>
                <span className="text-6xl md:text-[100px] font-extrabold text-[#0F172A] leading-[0.85] tracking-[0.02em] uppercase">RESIDENCY.</span>
             </h1>
          </motion.div>

          <motion.div variants={itemVars} className="w-20 h-[2.5px] bg-[#B38B59] mb-10" />
          <motion.p variants={itemVars} className="text-[#64748B] font-body text-lg md:text-xl max-w-xl leading-relaxed mb-12 opacity-90">
            Secure your future in Dubai with the premier residence visa hub. Elite processing for global professionals.
          </motion.p>

          <motion.div variants={itemVars} className="flex flex-wrap gap-8 items-center">
            {/* ADDED ONCLICK FUNCTIONALITY */}
            <motion.button 
              onClick={onStartClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-6 px-12 py-6 bg-[#0F172A] border-2 border-[#0F172A] rounded-[2px] shadow-2xl cursor-pointer group transition-all duration-500 hover:bg-white"
            >
              <span className="text-[12px] font-black uppercase tracking-[0.3em] text-white group-hover:text-[#0F172A] transition-colors">Start Application</span>
              <MoveRight className="text-white group-hover:text-[#0F172A] group-hover:translate-x-2 transition-all" size={20} />
            </motion.button>
            <div className="flex flex-col">
               <span className="text-[10px] font-black text-[#B38B59] uppercase tracking-[0.5em] mb-1">Status</span>
               <span className="text-[11px] font-heading font-bold text-[#0F172A]/40 uppercase tracking-widest">Processing Open</span>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative h-[450px] md:h-[550px] w-full flex justify-end mt-12 lg:mt-8">
          <div className="relative w-full max-w-[420px] h-full overflow-hidden border-l border-black/5 shadow-2xl">
            <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} className="absolute left-0 top-0 w-[2px] h-full bg-[#B38B59] origin-top z-20" />
            <motion.div initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} className="w-full h-full relative">
              <img src="/assets/images/dubai-hero.jpg" alt="Burj Khalifa Dubai Skyline - SULTAN Travel and Tourism Official Residence Visa Hub" className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-[6s] ease-out" />
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-8 right-0 bg-white/95 backdrop-blur-md p-6 border-l-[4px] border-[#B38B59] shadow-2xl">
                <p className="text-[22px] font-heading font-black text-[#0F172A] leading-none tracking-tighter uppercase">OFFICIAL</p>
                <p className="text-[8px] font-black tracking-[0.5em] uppercase text-[#B38B59]">Residence Hub 2026</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}