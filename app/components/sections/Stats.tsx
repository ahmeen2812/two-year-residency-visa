"use client";
import { motion } from "framer-motion";
import Counter from "../ui/Counter";

const stats = [
  { label: "Successful Visas", value: 12500, suffix: "+" },
  { label: "Days Processing", value: 7, suffix: "" },
  { label: "Nationalities", value: 200, suffix: "" },
  { label: "Government Hubs", value: 4, suffix: "" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#F8FAFC] border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center lg:items-start"
            >
              <h4 className="text-4xl md:text-6xl font-heading font-black text-[#0F172A] mb-2 tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h4>
              <div className="w-8 h-[2px] bg-[#B38B59] mb-4" />
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#64748B]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}