"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


export function ArticleNav() {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-8 flex items-center justify-between pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <Link href="/" className="pointer-events-auto cursor-pointer relative h-[22px] md:h-6 w-32">
        <Image 
          src="/assets/frontierforLight.png" 
          alt="Frontier" 
          fill
          className="object-contain" 
        />
      </Link>

      
      <div className="pointer-events-auto flex items-center gap-8">
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('TOGGLE_MENU'))}
          className="text-carbon font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase hover:text-emerald-600 transition-colors"
        >
          MENU
        </button>
        <a href="/contact" className="px-6 py-2.5 rounded-full border border-carbon/20 bg-carbon/5 backdrop-blur-sm text-carbon text-[10px] md:text-[11px] font-mono tracking-widest uppercase hover:bg-carbon hover:text-white transition-colors duration-300">
          LET&apos;S TALK
        </a>

      </div>
    </motion.header>
  );
}
