"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

import { useRef } from "react";

export function EditorialHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({ target: containerRef, offset: ["start start", "end start"] });


  return (
    <section ref={containerRef} className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-carbon pt-24">
      {/* 4 Center Tags */}
      <div className="absolute top-[40%] md:top-[38%] left-0 w-full -translate-y-1/2 z-20 px-6 md:px-12 flex justify-between items-center pointer-events-none">
        <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-white/80 uppercase">Product Architect</span>
        <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-white/80 uppercase mr-[12vw] md:mr-[15vw]">Strategist</span>
        <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-white/80 uppercase ml-[12vw] md:ml-[15vw]">Engineer</span>
        <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-white/80 uppercase">Storyteller</span>
      </div>

      {/* Huge Bottom Name Overlapping Image */}
      <motion.h1 
        className="absolute bottom-[2%] w-full text-center text-[13.5vw] leading-none font-display font-medium tracking-tighter text-white z-30 pointer-events-none whitespace-nowrap mix-blend-difference"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      >
        Coomar Prantik
      </motion.h1>

      <motion.div 
        className="relative z-20 w-full max-w-2xl h-[105%] flex items-end justify-center pb-[10vh] md:pb-[15vh]"

        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
      >
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-emerald-500/15 rounded-full blur-[100px]" />
        
        <Image 
          src="/assets/founder.png" 
          alt="Founder" 
          fill
          priority
          className="relative z-10 w-full h-[105%] md:h-[115%] object-cover object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
        />

      </motion.div>

      <div className="absolute bottom-[16vw] right-6 md:right-12 z-30 max-w-xs md:max-w-sm hidden md:block text-right">
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/70 font-body text-sm leading-relaxed"
        >
          Building systems for the next era of digital. Operating at the intersection of startup strategy, product engineering, and storytelling.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-carbon/10 pt-8" style={{ borderTop: '1px solid rgba(10,10,10,0.1)' }}>
          <a href="#archive" className="px-8 py-3.5 rounded-full border border-carbon/20 bg-transparent text-carbon text-[10px] md:text-[11px] font-mono tracking-widest uppercase hover:bg-carbon/5 transition-colors duration-300 shrink-0">
            VIEW THE ARCHIVE
          </a>
        </div>
      </div>
    </section>
  );
}
