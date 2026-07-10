"use client";

/**
 * @file Navbar.tsx
 * @description High-end responsive navigation engine with mobile drawer logic.
 * @architect Ahmed Touqeer
 * @agency Elite Digital Agency
 * 
 * DESIGN SPECIFICATIONS:
 * - Desktop: Floating Island Glassmorphism
 * - Mobile: Minimalist Trigger with Full-Screen Overlay
 * - Interaction: Smooth Scroll + Section Navigation
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { HelpCircle, Menu, X, PhoneCall, ArrowRight } from "lucide-react";

// --- LUXURY BRAND EMBLEM ---
const SultanLogo = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="30" fill="#0F172A"/>
    <path d="M35 65V35L50 50L65 35V65" stroke="#B38B59" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M50 55V75" stroke="#B38B59" strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to adjust navbar density
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOGIC: Cinematic Scroll to Top
  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // LOGIC: Section Navigation
  const navigateTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // --- ANIMATION VARIANTS ---
  const navVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const mobileMenuVariants: Variants = {
    closed: { x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    opened: { x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
  };

  const linkVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" }
    })
  };

  const navLinks = ['Residency', 'Eligibility', 'Pricing', 'Reviews', 'FAQ'];

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="initial"
        animate="animate"
        className={`fixed left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-6xl transition-all duration-500 ${
          scrolled ? "mt-4" : "mt-8"
        }`}
      >
        <div className="bg-white/80 backdrop-blur-md border border-black/5 rounded-full px-6 md:px-10 py-3 md:py-4 flex items-center justify-between shadow-2xl">
          
          {/* LOGO AREA */}
          <motion.div 
            onClick={scrollToTop}
            whileHover={{ opacity: 0.8 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 md:gap-4 cursor-pointer group"
          >
            <SultanLogo />
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-heading font-black tracking-tighter text-[#0F172A] leading-none uppercase group-hover:text-[#B38B59] transition-colors duration-300">
                SULTAN
              </span>
              <span className="text-[6px] md:text-[7px] tracking-[0.15em] uppercase text-[#B38B59] font-bold whitespace-nowrap">
                 Travel and Tourism
              </span>
            </div>
          </motion.div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <motion.a 
                key={item} 
                onClick={() => navigateTo(item)}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer relative text-[11px] font-black uppercase tracking-[0.2em] text-[#0F172A]/60 hover:text-[#0F172A] transition-colors py-1 flex items-center gap-2 group"
              >
                {item === 'FAQ' && <HelpCircle size={12} />}
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#B38B59] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </motion.a>
            ))}
          </div>

          {/* DESKTOP CALL HUB */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+971589149609" 
              className="text-[11px] font-black uppercase tracking-widest text-[#0F172A] px-8 py-3.5 border border-[#0F172A]/20 rounded-full transition-all duration-300 hover:bg-[#0F172A] hover:text-white"
            >
              Call Hub
            </a>
          </div>

          {/* MOBILE TOGGLE TRIGGER */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#0F172A] hover:text-[#B38B59] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 z-[150] bg-[#0F172A] flex flex-col p-10 lg:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <SultanLogo />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item}
                  custom={i}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  onClick={() => navigateTo(item)}
                  className="text-left text-4xl font-heading font-black text-white/40 hover:text-[#B38B59] transition-all uppercase tracking-tighter flex items-center justify-between group"
                >
                  {item}
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-[#B38B59]" size={30} />
                </motion.button>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-white/5">
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-6">Immediate Support</p>
               <a href="tel:+971589149609" className="flex items-center gap-4 text-white text-xl font-bold">
                  <PhoneCall className="text-[#B38B59]" size={20} />
                  +971 58 914 9609
               </a>
               <p className="text-white/20 text-[10px] uppercase tracking-widest mt-8">SULTAN Travel & Tourism LLC • Dubai, UAE</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}