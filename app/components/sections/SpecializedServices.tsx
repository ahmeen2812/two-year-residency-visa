"use client";
import { motion, Variants } from "framer-motion";
import { Users, Building2, FileText, ShieldCheck, Landmark } from "lucide-react";

const mainServices = [
  {
    id: "00",
    title: "2-YEAR RESIDENCY",
    subtitle: "FREELANCE & EMPLOYMENT",
    desc: "Our flagship legal residence solution for global professionals, providing 24 months of travel and work freedom in the UAE.",
    icon: <ShieldCheck className="text-[#B38B59]" size={32} />,
    gridClass: "md:col-span-8 md:row-span-2", // THE MAIN HERO CARD
  },
  {
    id: "01",
    title: "FAMILY UNION",
    subtitle: "SPOUSE & CHILDREN",
    desc: "Seamless sponsorship for your loved ones and newborn registration.",
    icon: <Users className="text-[#B38B59]" size={22} />,
    gridClass: "md:col-span-4",
  },
  {
    id: "02",
    title: "BUSINESS SETUP",
    subtitle: "LICENSING & RENEWALS",
    desc: "End-to-end formation and renewals for your trade license.",
    icon: <Building2 className="text-[#B38B59]" size={22} />,
    gridClass: "md:col-span-4",
  },
  {
    id: "03", // ASYMMETRIC WIDE CARD
    title: "EJARI SOLUTIONS",
    subtitle: "LEGAL TENANCY CONTRACTS",
    desc: "Instant Ejari registration for residential and commercial requirements to complete your visa file without delay.",
    icon: <FileText className="text-[#B38B59]" size={22} />,
    gridClass: "md:col-span-7", 
  },
  {
    id: "04", // ASYMMETRIC NARROW CARD
    title: "PRO SERVICES",
    subtitle: "GOVERNMENT LIAISON",
    desc: "Complete PRO support for all UAE immigration authorities.",
    icon: <Landmark className="text-[#B38B59]" size={22} />,
    gridClass: "md:col-span-5",
  }
];

export default function SpecializedServices() {
  const itemVars: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
  };

  return (
    <section id="services" className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-[#B38B59] font-heading font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block">Professional Portfolio</span>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-[#0F172A] tracking-tighter uppercase leading-[0.9]">
            Strategic <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F172A] to-[#B38B59]">Legal Services.</span>
          </h2>
        </motion.div>

        {/* REFINED ASYMMETRIC 12-COLUMN BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {mainServices.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVars}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className={`relative bg-[#F8FAFC] border border-black/[0.03] p-10 flex flex-col justify-between group hover:bg-[#0F172A] transition-all duration-700 overflow-hidden rounded-sm ${service.gridClass}`}
            >
              {/* Background ID Accent */}
              <div className="absolute top-[-10%] right-[-5%] text-[150px] font-heading font-black text-black/[0.02] group-hover:text-white/[0.02] transition-colors pointer-events-none select-none">
                {service.id}
              </div>

              <div className="relative z-10">
                <div className="mb-8 p-3 bg-white w-fit rounded-lg shadow-sm group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className={`font-heading font-black tracking-tighter text-[#0F172A] group-hover:text-white transition-colors mb-2 ${service.id === "00" ? "text-5xl" : "text-2xl"}`}>
                  {service.title}
                </h3>
                <p className="text-[#B38B59] text-[9px] font-black uppercase tracking-[0.3em] mb-6">
                  {service.subtitle}
                </p>
              </div>

              <div className="relative z-10">
                <p className={`text-[#64748B] group-hover:text-white/70 transition-colors leading-relaxed ${service.id === "00" ? "text-lg max-w-md" : "text-sm"}`}>
                  {service.desc}
                </p>
              </div>

              {/* Designer Underline */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#B38B59] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}