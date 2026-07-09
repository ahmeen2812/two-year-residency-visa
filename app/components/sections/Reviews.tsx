"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "MOOHSIN KHAN",
    text: "Finally got my 2-year visa today! Honestly, I was worried about the labour approval but these guys handled it so fast. Highly recommend Sultan hub.",
    img: "/assets/reviews/moohsin.jpg"
  },
  {
    name: "THILINI PRASADIKA P. R.",
    text: "The medical and fingerprinting was so organized. I didn't have to wait for hours like my friends did with other agencies. Thank you for the support!",
    img: "/assets/reviews/thilini.jpg"
  },
  {
    name: "SIVANESHVARY SADASIVAM",
    text: "I was already inside Dubai on a visit visa and was so stressed about the status change. They made it look easy. Best service in Frij Al Murar.",
    img: "/assets/reviews/sivaneshvary.jpg"
  },
  {
    name: "GEETHIKA SATHSARANI A.",
    text: "Got my residence card even before the date they promised. The team is very responsive on WhatsApp. 5 stars from me!",
    img: "/assets/reviews/geethika.jpg"
  },
  {
    name: "WASIM AKRAM",
    text: "Very straightforward people. They told me the price upfront and didn't ask for a single extra dirham. Really happy with my new freelance status.",
    img: "/assets/reviews/wasim.jpg"
  },
  {
    name: "KYAW MIN KHANT",
    text: "If you need an employment visa in Dubai, just go to Sultan Travel. They know exactly what the government requires. Super smooth.",
    img: "/assets/reviews/kyaw.jpg"
  },
  {
    name: "NGUYEN THI DAO",
    text: "I didn't think I could get my E-visa this quickly. Sultan hub is definitely the most trustworthy agency I've used so far.",
    img: "/assets/reviews/nguyen-dao.jpg"
  },
  {
    name: "NGUYEN XUAN THANH",
    text: "Process was very professional. They even helped me with my salary certificate for my bank account. Excellent work team.",
    img: "/assets/reviews/nguyen-thanh.jpg"
  },
  {
    name: "HUU LUONG PHAN",
    text: "Tawjeeh class was coordinated perfectly. Everything from start to finish was handled by their PRO. Much appreciated.",
    img: "/assets/reviews/huu-luong.jpg"
  },
  {
    name: "VAN DUNG TRAN",
    text: "A lot of people promised me a visa but only Sultan hub delivered. Truly professional consultancy for residency.",
    img: "/assets/reviews/van-dung.jpg"
  },
  {
    name: "LEE CHIA YONG",
    text: "The gold standard for sure. I was guided through every document. Now I have my 2-year residency with zero issues. Best in the business.",
    img: "/assets/reviews/lee-chia.jpg"
  }
];

export default function Reviews() {
  const containerVars: Variants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, scale: 0.98 },
    whileInView: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
   <section id="reviews" className="relative pt-12 pb-12 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* REFINED MINIMAL HEADER */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#B38B59] font-heading font-bold tracking-[0.5em] uppercase text-[9px] mb-4 block"
          >
            Client Success
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-heading font-black text-[#0F172A] tracking-tighter leading-none uppercase">
            VERIFIED <span className="text-[#B38B59]">RESIDENTS.</span>
          </h2>
          <div className="mt-8 w-10 h-[1px] bg-black/10 mx-auto" />
        </div>

        {/* 3-COLUMN COMPACT GRID */}
        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={itemVars}
              className="group relative aspect-[4/3] bg-[#F8FAFC] border border-black/[0.04] p-8 overflow-hidden rounded-sm transition-all duration-500 hover:shadow-2xl"
            >
              {/* IMAGE LAYER - SHOWS ONLY ON HOVER */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={review.img} 
                  alt={review.name}
                  className="w-full h-full object-cover scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              {/* TEXT CONTENT LAYER - DISAPPEARS ON HOVER */}
              <div className="relative z-10 h-full flex flex-col justify-between transition-all duration-500 group-hover:opacity-0 group-hover:scale-95 group-hover:blur-sm">
                <div>
                  <Quote size={20} className="text-[#B38B59] opacity-40 mb-6" />
                  <p className="text-[#64748B] font-body text-[15px] leading-relaxed italic">
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

              {/* LUXURY DECORATIVE BORDER */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B38B59]/20 transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* SUBTLE DATABASE TEXT */}
        <div className="mt-16 text-center">
           <p className="text-[9px] font-black uppercase tracking-[0.6em] text-[#0F172A]/20">
              SULTAN HUB GLOBAL ARCHIVE 2026
           </p>
        </div>
      </div>
    </section>
  );
}