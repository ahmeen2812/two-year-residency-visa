// "use client";
// import { motion } from "framer-motion";
// import Counter from "../ui/Counter";

// const stats = [
//   { label: "Successful Visas", value: 12500, suffix: "+" },
//   { label: "Days Processing", value: 7, suffix: "" },
//   { label: "Nationalities", value: 200, suffix: "" },
//   { label: "Government Hubs", value: 4, suffix: "" },
// ];

// export default function Stats() {
//   return (
//     <section className="py-20 bg-[#F8FAFC] border-y border-black/5">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
//           {stats.map((stat, i) => (
//             <motion.div 
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="flex flex-col items-center lg:items-start"
//             >
//               <h4 className="text-4xl md:text-6xl font-heading font-black text-[#0F172A] mb-2 tracking-tighter">
//                 <Counter value={stat.value} suffix={stat.suffix} />
//               </h4>
//               <div className="w-8 h-[2px] bg-[#B38B59] mb-4" />
//               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#64748B]">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

/**
 * @file Stats.tsx
 * @description High-impact authority bar with animated counters.
 * @architect Ahmed Touqeer
 * @agency Elite Digital Agency
 * 
 * FIX LOG:
 * - Resolved massive vertical gaps on mobile devices.
 * - Implemented 2x2 grid for mobile viewports.
 * - Fluid typography for counter values.
 */

import { motion, Variants } from "framer-motion";
import Counter from "../ui/Counter";

// REALISTIC INDUSTRY DATA FOR SULTAN HUB
const stats = [
  { label: "Successful Visas", value: 12500, suffix: "+" },
  { label: "Days Processing", value: 7, suffix: "" },
  { label: "Nationalities", value: 200, suffix: "" },
  { label: "Government Hubs", value: 4, suffix: "" },
];

export default function Stats() {
  // Cinematic reveal variants
  const containerVars: Variants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVars: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative bg-[#F8FAFC] border-y border-black/[0.03] overflow-hidden">
      {/* Background Watermark Detail */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
         <span className="absolute -left-10 top-0 text-[100px] font-black text-obsidian uppercase">Elite</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24 relative z-10">
        <motion.div 
          variants={containerVars}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 md:gap-y-16 lg:gap-20"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              variants={itemVars}
              className={`flex flex-col items-center lg:items-start relative ${
                i !== stats.length - 1 ? "lg:after:content-[''] lg:after:absolute lg:after:right-[-40px] lg:after:top-1/4 lg:after:h-1/2 lg:after:w-[1px] lg:after:bg-black/5" : ""
              }`}
            >
              {/* COUNTER VALUE: RESPONSIVE SIZE */}
              <h4 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0F172A] mb-3 tracking-tighter leading-none">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h4>

              {/* BRAND ACCENT */}
              <div className="w-8 h-[2px] bg-[#B38B59] mb-4 opacity-80" />

              {/* LABEL: SPACED TYPOGRAPHY */}
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#64748B] text-center lg:text-left leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}