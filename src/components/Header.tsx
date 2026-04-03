"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


export function Header() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between pointer-events-none mix-blend-difference"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <Link href="/" className="pointer-events-auto cursor-pointer relative h-[22px] md:h-6 w-32">
        <Image 
          src="/assets/frontierforDark.png" 
          alt="Frontier" 
          fill
          className="object-contain" 
        />
      </Link>

      
      <div className="pointer-events-auto flex items-center gap-8">
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('TOGGLE_MENU'))}
          className="text-white font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase hover:text-emerald-500 transition-colors"
        >
          MENU
        </button>
        <a href="/contact" className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-[10px] md:text-[11px] font-mono tracking-widest uppercase hover:bg-white hover:text-carbon transition-colors duration-300">
          LET&apos;S TALK
        </a>

      </div>
    </motion.header>
  );
}
