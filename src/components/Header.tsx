"use client";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between pointer-events-none mix-blend-difference"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div className="pointer-events-auto cursor-pointer">
        {/* Depending on background, difference blend ensures visibility for either logo */}
        <img src="/assets/frontierforDark.png" alt="Frontier" className="h-[22px] md:h-6 object-contain" />
      </div>
      
      <div className="pointer-events-auto">
        <button className="text-white font-mono text-xs tracking-[0.2em] uppercase hover:text-emerald-500 transition-colors">
          Menu
        </button>
      </div>
    </motion.header>
  );
}
