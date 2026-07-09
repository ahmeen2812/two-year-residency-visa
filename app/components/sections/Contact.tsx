"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare, Navigation, SendHorizontal, Share2 } from "lucide-react";

// CUSTOM HIGH-FIDELITY TIKTOK ICON
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Contact() {
  const itemVars: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const contactMethods = [
    {
      icon: <Phone size={18} />,
      label: "Direct line / Botim",
      value: "+971 58 914 9609",
      href: "tel:+971589149609",
      isTechnical: false // Will stay UPPERCASE for authority
    },
    {
      icon: <SendHorizontal size={18} />,
      label: "Telegram Hub",
      value: "+971 58 914 9609",
      href: "https://t.me/DubaiFreelanceVisa",
      isTechnical: false 
    },
    {
      icon: <MessageSquare size={18} />,
      label: "WhatsApp ID",
      value: "@DubaiFreelanceVisa", // EXACT CASING FROM YOUR IMAGE
      href: "https://wa.me/971589149609",
      isTechnical: true // Will allow the specific casing
    },
    {
      icon: <TikTokIcon size={18} />,
      label: "TikTok Official",
      value: "dubai.pro.service7",
      href: "https://www.tiktok.com/@dubai.pro.service7",
      isTechnical: true
    },
    {
      icon: <Mail size={18} />,
      label: "Executive Email",
      value: "sultanvisahub@gmail.com",
      href: "mailto:sultanvisahub@gmail.com",
      isTechnical: true
    }
  ];

  return (
    <section id="contact" className="relative py-40 bg-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* LEFT: THE CONTACT DOSSIER */}
          <div className="lg:col-span-5">
            <motion.div variants={itemVars} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
              <span className="text-[#B38B59] font-heading font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Global Headquarters</span>
              <h2 className="text-5xl md:text-7xl font-heading font-black text-[#0F172A] tracking-tighter leading-none uppercase mb-10">VISIT THE <br /> <span className="text-[#B38B59]">HUB.</span></h2>
              <p className="text-[#64748B] font-body text-lg leading-relaxed mb-16 opacity-80 italic">
                "Our executive team is available across all digital channels to ensure your residency process never stops."
              </p>
            </motion.div>

            <div className="space-y-10">
              <motion.div variants={itemVars} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0F172A] text-[#B38B59] flex items-center justify-center rounded-sm group-hover:bg-[#B38B59] group-hover:text-[#0F172A] transition-all duration-500 shadow-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0F172A] mb-2">Location</h4>
                  <p className="text-[13px] font-bold text-[#64748B] uppercase tracking-widest leading-loose">
                    Deira Dubai, Frij Al Murar <br /> 
                    <span className="text-[#0F172A] border-b border-[#B38B59]/30">Fazz Super Market</span> <br /> 
                    United Arab Emirates
                  </p>
                </div>
              </motion.div>

              <div className="grid gap-5 pt-10 border-t border-black/5">
                {contactMethods.map((method, i) => (
                  <motion.a 
                    key={i} 
                    href={method.href} 
                    target="_blank"
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ delay: i * 0.05 }} 
                    className="flex items-center justify-between p-4 rounded-sm hover:bg-[#F8FAFC] transition-all duration-300 group border border-transparent hover:border-black/5"
                  >
                    <div className="flex items-center gap-6">
                      <div className="text-[#B38B59] group-hover:text-[#0F172A] transition-colors group-hover:scale-110 transform duration-300">
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#64748B] mb-0.5">{method.label}</p>
                        {/* THE FIX: Logic to allow exact casing for technical IDs */}
                        <p className={`text-[13px] font-bold text-[#0F172A] tracking-wider group-hover:text-[#B38B59] transition-colors ${!method.isTechnical ? 'uppercase' : ''}`}>
                          {method.value}
                        </p>
                      </div>
                    </div>
                    <Share2 size={12} className="text-[#0F172A] opacity-0 group-hover:opacity-20 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: MAP REMAINS THE SAME */}
          <motion.div 
            className="lg:col-span-7 relative h-[700px] bg-[#F8FAFC] border border-black/5 rounded-sm overflow-hidden group shadow-2xl" 
            initial={{ opacity: 0, scale: 0.98 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1754054625296!2d55.3082531753733!3d25.2783038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4340d866a933%3A0x1d4d101d2d0c14f!2sFrij%20Al%20Murar%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
              className="w-full h-full grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000 border-0" 
              allowFullScreen 
              loading="lazy"
            ></iframe>
            <div className="absolute top-10 right-10 bg-[#0F172A] text-white p-8 shadow-2xl border-l-[6px] border-[#B38B59] pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#B38B59] mb-2">Dubai Landmark</p>
               <h4 className="text-xl font-heading font-black uppercase tracking-tighter text-white">Fazz Super Market</h4>
            </div>
            <a href="https://maps.app.goo.gl/uXpXhGf8Y7K3o3Vq9" target="_blank" className="absolute bottom-10 left-10 bg-white text-[#0F172A] px-10 py-5 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 shadow-2xl hover:bg-[#B38B59] hover:text-white transition-all duration-500"><Navigation size={14} />Navigate to Hub</a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}