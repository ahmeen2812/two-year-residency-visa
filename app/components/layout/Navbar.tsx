"use client";
import { motion, Variants } from "framer-motion";
import { HelpCircle } from "lucide-react";

const SultanLogo = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="30" fill="#0F172A"/>
    <path d="M35 65V35L50 50L65 35V65" stroke="#B38B59" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 55V75" stroke="#B38B59" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  // LOGIC: Cinematic Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className="fixed left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl mt-8"
    >
      <div className="bg-white/80 backdrop-blur-md border border-black/5 rounded-full px-10 py-4 flex items-center justify-between shadow-2xl">
        
        {/* LOGO AREA - NOW INTERACTIVE HOME BUTTON */}
        <motion.div 
          onClick={scrollToTop}
          whileHover={{ opacity: 0.8 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-4 cursor-pointer group"
        >
          <SultanLogo />
          <div className="flex flex-col">
            <span className="text-lg font-heading font-black tracking-tighter text-[#0F172A] leading-none uppercase group-hover:text-[#B38B59] transition-colors duration-300">
              SULTAN
            </span>
            <span className="text-[7px] tracking-[0.15em] uppercase text-[#B38B59] font-bold whitespace-nowrap">
               Travel and Tourism
            </span>
          </div>
        </motion.div>

        {/* NAVIGATION LINKS */}
        <div className="hidden lg:flex items-center gap-10">
          {['Residency', 'Eligibility', 'Pricing', 'Reviews', 'FAQ'].map((item) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="relative text-[11px] font-black uppercase tracking-[0.2em] text-[#0F172A]/60 hover:text-[#0F172A] transition-colors py-1 flex items-center gap-2 group"
            >
              {item === 'FAQ' && <HelpCircle size={12} />}
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B38B59] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </motion.a>
          ))}
        </div>

        {/* CALL HUB BUTTON */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:+971589149609" 
            className="text-[11px] font-black uppercase tracking-widest text-[#0F172A] px-8 py-3.5 border border-[#0F172A]/20 rounded-full transition-all duration-300 hover:bg-[#0F172A] hover:text-white"
          >
            Call Hub
          </a>
        </div>
      </div>
    </motion.nav>
  );
}