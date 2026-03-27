"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export function MenuOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = () => setIsOpen((prev) => !prev);
    window.addEventListener("TOGGLE_MENU", handleToggle);
    return () => window.removeEventListener("TOGGLE_MENU", handleToggle);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Manifesto", href: "/#manifesto" },
    { name: "Journal", href: "/#journal" },
  ];

  const socials = [
    { name: "Twitter", href: "https://twitter.com/coomarprantik" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/coomarprantik/" },
    { name: "Email", href: "mailto:prantik@tryfrontier.com" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-carbon flex flex-col justify-between px-6 py-8 md:px-12 lg:px-24 md:py-12"
          initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Header */}
          <div className="flex justify-between items-center w-full">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img src="/assets/frontierforDark.png" alt="Frontier Logo" className="h-4 md:h-5 object-contain" />
            </Link>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white font-mono text-xs tracking-widest uppercase hover:text-emerald-500 transition-colors"
            >
              CLOSE
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4 mt-24">
            {links.map((link, i) => (
              <div key={link.name} className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl md:text-7xl lg:text-[7rem] font-display font-medium tracking-tighter text-white hover:text-emerald-500 transition-colors duration-500 leading-none block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Footer Socials */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-24 gap-12 overflow-hidden border-t border-white/10 pt-8">
            <motion.div 
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="font-mono text-[10px] tracking-widest text-emerald-500 uppercase">Start a conversation</span>
              <div className="flex flex-wrap gap-8 font-mono text-xs tracking-widest text-white/50 uppercase">
                {socials.map(social => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.span 
              className="font-mono text-[10px] tracking-widest text-white/30 uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Built at the Frontier &copy; 2026
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
