"use client";
import { motion } from "framer-motion";

export function InquirySection() {
  return (
    <section id="contact" className="w-full bg-[#f4f4f5] px-6 md:px-12 lg:px-24 py-32 border-t border-carbon/5 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-12">
        
        {/* Left Column: Details & Socials */}
        <div className="flex flex-col">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-7xl font-display font-medium tracking-tighter leading-[0.95] text-carbon mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            Start a<br /> conversation.
          </motion.h2>

          <motion.div 
            className="flex flex-col gap-4 mb-20 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <span className="font-mono text-[10px] tracking-widest text-carbon/40 uppercase mb-2">Connect</span>
            <div className="flex flex-col gap-3 font-mono text-xs tracking-widest text-carbon/70 uppercase">
              <a href="mailto:prantik@tryfrontier.com" className="group flex items-center gap-3 hover:text-emerald-600 transition-colors w-max">
                <svg className="w-4 h-4 text-carbon/30 group-hover:text-emerald-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                prantik@tryfrontier.com
              </a>
              <a href="https://www.linkedin.com/in/coomarprantik/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-emerald-600 transition-colors w-max">
                <svg className="w-4 h-4 text-carbon/30 group-hover:text-emerald-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                linkedin/coomarprantik
              </a>
              <a href="https://twitter.com/coomarprantik" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-emerald-600 transition-colors w-max">
                <svg className="w-4 h-4 text-carbon/30 group-hover:text-emerald-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                twitter/coomarprantik
              </a>
              <a href="https://instagram.com/coomarprantik" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 hover:text-emerald-600 transition-colors w-max">
                <svg className="w-4 h-4 text-carbon/30 group-hover:text-emerald-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 3H8C5.239 3 3 5.239 3 8v8c0 2.761 2.239 5 5 5h8c2.761 0 5-2.239 5-5V8c0-2.761-2.239-5-5-5zm-4 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.5-7.5a.5.5 0 110-1 .5.5 0 010 1z"/>
                </svg>
                instagram/coomarprantik
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Form */}
        <motion.div 
          className="flex flex-col w-full h-full justify-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <form className="flex flex-col gap-10 w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="name" className="font-mono text-[10px] tracking-widest text-emerald-600 uppercase">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                className="w-full bg-transparent border-b border-carbon/20 py-4 text-carbon font-body text-xl placeholder:text-carbon/30 focus:outline-none focus:border-emerald-500 transition-colors rounded-none"
                placeholder="Michael Scott"
              />
            </div>

            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="email" className="font-mono text-[10px] tracking-widest text-emerald-600 uppercase">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                className="w-full bg-transparent border-b border-carbon/20 py-4 text-carbon font-body text-xl placeholder:text-carbon/30 focus:outline-none focus:border-emerald-500 transition-colors rounded-none"
                placeholder="michael@dundermifflin.com"
              />
            </div>

            <div className="flex flex-col gap-2 relative group">
              <label htmlFor="message" className="font-mono text-[10px] tracking-widest text-emerald-600 uppercase">
                Message
              </label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                className="w-full bg-transparent border-b border-carbon/20 py-4 text-carbon font-body text-xl placeholder:text-carbon/30 focus:outline-none focus:border-emerald-500 transition-colors resize-none rounded-none"
                placeholder="Tell us about the problem you are trying to solve..."
              />
            </div>

            <button 
              type="submit"
              className="mt-4 px-8 py-3.5 rounded-full border border-carbon/20 bg-carbon text-[#f4f4f5] font-mono text-[10px] md:text-[11px] tracking-widest uppercase hover:bg-emerald-600 hover:text-white transition-colors duration-300 w-full md:w-max ml-auto group flex items-center gap-3 justify-center"
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
