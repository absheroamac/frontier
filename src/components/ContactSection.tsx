"use client";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="relative w-full bg-carbon px-6 md:px-12 lg:px-24 py-32 md:py-48 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full border-[1px] border-emerald-500/20 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.h2 
          className="text-5xl md:text-7xl lg:text-[6rem] font-display font-medium tracking-tighter leading-[1.05] mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        >
          Build something <br className="hidden md:block"/><span className="text-emerald-500 italic">meaningful.</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-white/50 font-body max-w-2xl leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        >
          The only thing standing between you and your startup idea is a weekend of commitment. Let's engineer the frontier.
        </motion.p>
        
        <motion.form 
          className="w-full flex flex-col gap-8 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500 transition-colors font-body" 
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500 transition-colors font-body" 
            />
          </div>
          <textarea 
            placeholder="Message" 
            className="bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-500 transition-colors resize-none h-32 font-body" 
          />
          <div className="mt-8 flex justify-center md:justify-end">
            <motion.button 
              type="button"
              whileHover={{ scale: 0.96 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-white text-carbon py-4 px-12 rounded-sm font-medium tracking-wide uppercase text-xs"
            >
              Submit Inquiry
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
