"use client";
import { motion } from "framer-motion";

export function GenerativeCircleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full border-[1px] border-emerald-500/20"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-30%] left-[-15%] w-[100vw] h-[100vw] rounded-full border-[1px] border-white/5 border-t-emerald-500/10"
        animate={{ rotate: -360, scale: [1, 1.02, 1] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-emerald-500/5 blur-[120px]" />
    </div>
  );
}
