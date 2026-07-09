"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What exactly is the UAE 2-Year Residence Visa?",
    answer: "It is a legal residency permit provided by SULTAN Travel and Tourism LLC that allows you to live and work in the UAE for 24 months. This includes full processing from the Offer Letter and Labour Approval to your final Emirates ID and Residence Card."
  },
  {
    question: "Which nationalities are eligible to apply?",
    answer: "We provide worldwide service. Currently, we have high-volume processing for Pakistan, India, and Bangladeshi nationals (Category 3). All other nationalities are processed under Category 2, subject to government quota availability."
  },
  {
    question: "What if I am already inside the UAE on a visit visa?",
    answer: "We specialize in 'Inside UAE' clients. We handle your Status Change, Medical Test, and Emirates ID fingerprinting locally in Dubai without you needing to exit the country."
  },
  {
    question: "Why do visa prices vary by nationality?",
    answer: "Visa costs are influenced by UAE government quotas, immigration policies, and specific nationality rules. While our starting rates are 8,000 AED for PK/IN/BD and 6,000 AED for others, the final price is confirmed only after a document review."
  },
  {
    question: "Can I sponsor my family with this visa?",
    answer: "Yes. One of the key benefits of our 2-year residency is the right to family sponsorship. Once your visa is stamped, you can apply to bring your spouse and children to live with you in Dubai."
  },
  {
    question: "How long does the entire process take?",
    answer: "Our standard processing time is approximately 14 days. However, this can vary based on government approval status and the specific steps required for your nationality."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-12 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <HelpCircle size={18} className="text-[#B38B59]" />
            <span className="text-[#B38B59] font-heading font-bold tracking-[0.5em] uppercase text-[10px]">
              Support Intelligence
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-black text-[#0F172A] tracking-tighter uppercase"
          >
            GENERAL <span className="text-[#B38B59]">INQUIRIES.</span>
          </motion.h2>
        </div>

        {/* ACCORDION SYSTEM */}
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-b border-black/5"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left group transition-all"
              >
                <span className={`text-lg md:text-xl font-heading font-bold tracking-tight transition-colors duration-500 ${
                  activeIndex === i ? "text-[#B38B59]" : "text-[#0F172A] group-hover:text-[#B38B59]"
                }`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-500 ${
                  activeIndex === i ? "bg-[#0F172A] text-white rotate-45" : "bg-[#F8FAFC] text-[#0F172A]"
                }`}>
                  <Plus size={20} />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 text-[#64748B] font-body text-lg leading-relaxed max-w-3xl">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* FINAL CONTACT REDIRECT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 p-10 bg-[#F8FAFC] border border-black/5 flex flex-col md:flex-row items-center justify-between gap-8 rounded-sm"
        >
          <div className="flex flex-col gap-1">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#0F172A]">Still have questions?</h4>
            <p className="text-[10px] font-bold text-[#64748B] uppercase tracking-widest">Our PRO team is available 24/7 on WhatsApp.</p>
          </div>
          <a 
            href="https://wa.me/971589149609" 
            className="bg-[#0F172A] text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#B38B59] hover:text-[#0F172A] transition-all"
          >
            Contact Hub
          </a>
        </motion.div>

      </div>
    </section>
  );
}