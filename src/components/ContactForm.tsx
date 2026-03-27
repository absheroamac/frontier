"use client";
import { motion } from "framer-motion";

export function ContactForm() {
  return (
    <section className="w-full bg-carbon px-6 md:px-12 lg:px-24 py-32 pt-48 min-h-[90vh] flex items-center border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-12 w-full">
        
        {/* Left Column: Details */}
        <div className="flex flex-col justify-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium tracking-tighter leading-[0.95] text-white/90 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            Reach out<br /> to the team.
          </motion.h2>

          <motion.div 
            className="flex flex-col gap-4 mb-20 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="font-mono text-[10px] tracking-widest text-emerald-500 uppercase mb-2">Inquiries / Projects / Careers</span>
            <div className="flex flex-col gap-3 font-mono text-xs tracking-widest text-white/60 uppercase">
              <a href="mailto:hello@tryfrontier.com" className="group flex items-center gap-3 hover:text-white transition-colors w-max">
                <svg className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@tryfrontier.com
              </a>
              <a href="https://linkedin.com/company/frontier" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-white transition-colors w-max">
                <svg className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                linkedin/frontier
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Form */}
        <motion.div 
          className="flex flex-col w-full h-full justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <form className="flex flex-col gap-10 w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="name" className="font-mono text-[10px] tracking-widest text-[#f4f4f5] uppercase opacity-40 group-focus-within:opacity-100 group-focus-within:text-emerald-500 transition-colors">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white/90 font-body text-xl placeholder:text-white/20 focus:outline-none focus:border-emerald-500 transition-colors rounded-none"
                placeholder="Jane Doe"
              />
            </div>

            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="email" className="font-mono text-[10px] tracking-widest text-[#f4f4f5] uppercase opacity-40 group-focus-within:opacity-100 group-focus-within:text-emerald-500 transition-colors">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white/90 font-body text-xl placeholder:text-white/20 focus:outline-none focus:border-emerald-500 transition-colors rounded-none"
                placeholder="jane@company.com"
              />
            </div>

            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="message" className="font-mono text-[10px] tracking-widest text-[#f4f4f5] uppercase opacity-40 group-focus-within:opacity-100 group-focus-within:text-emerald-500 transition-colors">
                Message & Timeline
              </label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-white/10 py-4 text-white/90 font-body text-xl placeholder:text-white/20 focus:outline-none focus:border-emerald-500 transition-colors resize-none rounded-none"
                placeholder="How can we help scale your infrastructure?"
              />
            </div>

            <button 
              type="submit"
              className="mt-4 px-8 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-mono text-[10px] md:text-[11px] tracking-widest uppercase hover:bg-emerald-500 hover:border-emerald-500 transition-colors duration-300 w-full md:w-max ml-auto group flex items-center gap-3 justify-center"
            >
              Send Dispatch
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
