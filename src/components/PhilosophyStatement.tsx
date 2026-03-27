"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PhilosophyStatement() {
  const [particles, setParticles] = useState<{ width: number; left: string; top: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate particles client-side to strictly avoid SSR hydration mismatches
    setParticles(
      Array.from({ length: 40 }).map(() => ({
        width: Math.random() * 2 + 1,
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        delay: Math.random() * 5,
        duration: Math.random() * 15 + 15,
      }))
    );
  }, []);

  return (
    <section className="relative w-full bg-[#0a0f12] px-6 md:px-12 lg:px-24 py-48 lg:py-64 overflow-hidden">
      {/* Deep Antigravity-style particle background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon via-transparent to-carbon z-10" />
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(25,120,83,0.8)]"
            style={{ width: p.width, height: p.width, left: p.left, top: p.top }}
            animate={{ y: ["0vh", "-100vh"], opacity: [0, 1, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        
        <div className="lg:w-1/2">
          <motion.div 
            className="w-16 h-[1px] bg-emerald-500 mb-12"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          />
          <motion.h3 
            className="text-5xl md:text-6xl lg:text-8xl font-display font-medium tracking-tighter leading-[1.05]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            Design.<br />
            Systems.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-white/60">Velocity.</span>
          </motion.h3>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-12 border-l border-white/5 pl-8 md:pl-16">
          <motion.p 
            className="text-2xl md:text-3xl text-white/80 font-display tracking-tight leading-snug"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          >
            AI accelerates execution. Human taste defines the outcome.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-white/40 font-body leading-relaxed"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            We don't do 'digital solutions.' We build products people understand instantly. From 0 to 1, utilizing deep contrast, cinematic motion, and uncompromising craft.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
