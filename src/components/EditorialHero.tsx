"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function EditorialHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-carbon pt-24">
      <div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 z-20 hidden lg:block">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase origin-bottom-left -rotate-90 block">Product Architect</span>
      </div>
      <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 z-20 hidden lg:block">
        <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase origin-bottom-right rotate-90 block">Strategist</span>
      </div>

      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="absolute w-full flex flex-col items-center justify-center select-none z-10 pointer-events-none"
      >
        <span className="text-[17vw] md:text-[18vw] leading-[0.8] font-display font-medium tracking-tighter text-white/5 whitespace-nowrap">
          SYSTEMS
        </span>
        <span className="text-[14vw] md:text-[15vw] leading-[0.8] font-display font-medium tracking-tighter text-white/10 whitespace-nowrap ml-12">
          ARCHITECT
        </span>
      </motion.div>

      <motion.div 
        style={{ y: yImage }}
        className="relative z-20 w-full max-w-2xl h-full flex items-end justify-center pt-16 md:pt-24"
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
      >
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-emerald-500/15 rounded-full blur-[100px]" />
        
        <img 
          src="/assets/founder.png" 
          alt="Founder" 
          className="relative z-10 w-full h-[105%] md:h-[115%] object-cover object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 15%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
        />
      </motion.div>

      <div className="absolute bottom-12 left-6 md:left-12 z-30 max-w-sm hidden md:block">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/60 font-body text-sm leading-relaxed"
        >
          Building systems for the next era of digital. Operating at the intersection of startup strategy, product engineering, and storytelling.
        </motion.p>
      </div>
    </section>
  );
}
