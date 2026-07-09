"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";

// CORE LAYOUT & GLOBAL UI
import Navbar from "./components/layout/Navbar";
import WhatsAppButton from "./components/ui/WhatsAppButton";

// SECTION COMPONENTS
import Hero from "./components/sections/Hero";
import ServiceBenefits from "./components/sections/ServiceBenefits"; 
import Stats from "./components/sections/Stats";
import Processing from "./components/sections/Processing";
import Eligibility from "./components/sections/Eligibility";
import Pricing from "./components/sections/Pricing";
import Reviews from "./components/sections/Reviews";
import FAQ from "./components/sections/FAQ";
import ApplicationForm from "./components/sections/ApplicationForm";
import Contact from "./components/sections/Contact";

/**
 * SULTAN TRAVEL & TOURISM - MASTER PORTAL V2
 * Lead Technical Architect: Ahmed Touqeer
 */

export default function Home() {
  // --- SEO STRUCTURED DATA (JSON-LD) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SULTAN Travel and Tourism Company LLC",
    "image": "https://sultanvisahub.com/assets/images/dubai-hero.jpg",
    "url": "https://sultanvisahub.com",
    "telephone": "+971589149609",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Frij Al Murar, Near Fazz Super Market",
      "addressLocality": "Deira",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2783,
      "longitude": 55.3082
    },
    "sameAs": [
      "https://www.tiktok.com/@dubai.pro.service7",
      "https://t.me/DubaiFreelanceVisa"
    ]
  };

  // --- LOGICAL STATE ---
  const [prefilledData, setPrefilledData] = useState({
    nationality: "Pakistan",
    category: ""
  });

  // --- FUNCTIONS ---
  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectPlan = (nat: string, cat: string) => {
    setPrefilledData({ nationality: nat, category: cat });
    setTimeout(scrollToApply, 100);
  };

  return (
    <>
      {/* SCRIPT TAG FOR GOOGLE SEO SEARCH RESULTS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative bg-white selection:bg-[#B38B59] selection:text-[#0F172A] antialiased">
        
        {/* 00. GLOBAL INTERFACE LAYER */}
        <Navbar />
        <WhatsAppButton />

        {/* 01. THE ENTRY SEQUENCE */}
        <Hero onStartClick={scrollToApply} />
        
        {/* 02. UNIFIED EXCELLENCE SECTION */}
        <ServiceBenefits />

        {/* 03. THE AUTHORITY BAR */}
        <Stats />

        {/* 04. OPERATIONAL ENGINE */}
        <Processing />

        {/* 05. ADMISSION & INVESTMENT CRITERIA */}
        <Eligibility />
        <Pricing onSelect={handleSelectPlan} />

        {/* 06. SOCIAL PROOF & INTELLIGENCE */}
        <Reviews />
        <FAQ />

        {/* 07. LEAD CONVERSION & PHYSICAL FOOTPRINT */}
        <ApplicationForm prefill={prefilledData} />
        <Contact />

        {/* 08. THE EXECUTIVE FOOTER */}
        <footer className="relative bg-[#0F172A] pt-32 pb-12 px-6 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full border-l border-white/20 skew-x-12" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 mb-24">
              <div>
                <div className="flex flex-col mb-10">
                  <span className="text-3xl font-heading font-black tracking-tighter text-white leading-none uppercase">
                    SULTAN
                  </span>
                  <span className="text-[10px] tracking-[0.5em] uppercase text-[#B38B59] font-bold mt-2">
                    Travel and Tourism LLC
                  </span>
                </div>
                <p className="text-white/40 font-body text-sm max-w-sm leading-relaxed mb-10">
                  Dubai's premier residency consultancy, transforming complex government 
                  immigration policies into seamless global mobility solutions since 2024.
                </p>
                <div className="flex gap-8">
                   {['Instagram', 'Telegram', 'Facebook'].map(social => (
                     <a 
                      key={social} 
                      href="#" 
                      className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-[#B38B59] transition-colors"
                     >
                      {social}
                     </a>
                   ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#B38B59]">Headquarters</span>
                  <p className="text-white/60 text-[11px] leading-loose uppercase tracking-widest">
                    Frij Al Murar<br />
                    Deira Dubai<br />
                    United Arab Emirates
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#B38B59]">Executive Inquiries</span>
                  <p className="text-white/60 text-[11px] leading-loose uppercase tracking-widest">
                    +971 58 914 9609<br />
                    sultanvisahub@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* THE ARCHITECT'S SEAL (CREDIT) */}
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-12">
              
              <div className="flex flex-col gap-2">
                 <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/20">
                   Precision in Motion © 2026 SULTAN HUB
                 </span>
                 <span className="text-[8px] uppercase tracking-[0.2em] text-white/10">
                   Licensed Travel & Tourism Agency • Dubai Government Approved
                 </span>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-start md:items-end gap-3 group"
              >
                 <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/20 group-hover:text-[#B38B59] transition-colors">
                   Digital Experience Engineered By
                 </span>
                 
                 <div className="flex items-center gap-6">
                    <a 
                      href="https://www.linkedin.com/in/ahmed-touqeer-4105503a7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-sm border border-white/5 hover:bg-white/10 transition-all group/link shadow-xl"
                    >
                      <span className="text-[11px] font-heading font-black text-white tracking-widest uppercase">
                        Ahmed Touqeer
                      </span>
                      <ExternalLink size={12} className="text-[#B38B59] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>

                    <a 
                      href="https://wa.me/923137047329" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/40 hover:text-white transition-colors"
                    >
                      <MessageCircle size={14} className="text-[#B38B59]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">+92 313 7047329</span>
                    </a>
                 </div>
              </motion.div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}