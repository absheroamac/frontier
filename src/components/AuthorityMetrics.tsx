"use client";
import { motion } from "framer-motion";

export function AuthorityMetrics() {
  const metrics = [
    { value: "10+", label: "YEARS BUILDING" },
    { value: "50+", label: "PRODUCTS SHIPPED" },
    { value: "100%", label: "SIGNAL, NO NOISE" },
  ];

  return (
    <section className="relative z-20 w-full bg-carbon px-6 md:px-12 lg:px-24 py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        <motion.div 
          className="lg:w-5/12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display leading-[1.3] tracking-tight">
            Operating at the intersection of <span className="text-emerald-500">startup strategy</span>, product engineering, and interactive storytelling. Turning ambitious ideas into validated realities in days, not months.
          </h2>
        </motion.div>

        <div className="lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 w-full pt-4 md:pt-0">
          {metrics.map((metric, i) => (
            <motion.div 
              key={metric.label}
              className="flex flex-col border-l border-white/10 pl-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <span className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter mb-4 text-white">
                {metric.value}
              </span>
              <span className="font-mono text-[10px] md:text-xs tracking-widest text-white/40 uppercase">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
