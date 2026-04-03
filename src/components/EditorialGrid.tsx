"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { ArticleData } from "@/lib/mdx";

export function EditorialGrid({ allArticles }: { allArticles: ArticleData[] }) {
  const [isLight, setIsLight] = useState(false);

  // Split into top 3 featured and the rest as archive
  const articles = allArticles.slice(0, 3);
  const archiveArticles = allArticles.slice(3);

  const targetRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start start", "end end"]
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <motion.section 
      id="journal"
      onViewportEnter={() => setIsLight(true)}
      onViewportLeave={() => setIsLight(false)}
      viewport={{ margin: "-25% 0px -25% 0px" }}
      className={`relative w-full px-6 md:px-12 lg:px-24 py-32 border-t transition-colors duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isLight ? 'bg-[#f4f4f5] border-carbon/10 text-carbon' : 'bg-[#161a1d] border-white/5 text-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        
        <div className={`flex items-end justify-between mb-32 border-b pb-8 transition-colors duration-1000 ${isLight ? 'border-carbon/10' : 'border-white/10'}`}>
          <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display tracking-tighter uppercase leading-[0.85]">The<br/>Journal</h2>
          <span className="font-mono text-xs tracking-widest text-emerald-500 hidden md:block uppercase mb-2">Essays & Observations</span>
        </div>

        {/* Horizontal Scroll Section */}
        <div ref={targetRef} className="relative h-[300vh] w-[100vw] left-1/2 -translate-x-1/2 mb-32 md:mb-48">
          <div ref={stickyRef} className="sticky top-0 h-screen flex items-center overflow-hidden w-full bg-transparent">
            <motion.div style={{ x }} className="flex w-[300vw] h-full items-center">
              {articles.map((article, i) => {
                const slug = article.slug;
                
                return (
                  <div key={article.title} className="w-[100vw] h-full flex items-center justify-center flex-shrink-0 px-6 md:px-12 lg:px-24">
                    <Link href={`/articles/${slug}`} className="block w-full max-w-7xl">
                      <article className={`relative flex flex-col gap-12 lg:gap-24 items-center group cursor-pointer lg:flex-row`}>
                        
                        <motion.div 
                          className={`w-full lg:w-5/12 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden transition-colors duration-1000 ${isLight ? 'bg-carbon/5' : 'bg-white/5'}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ root: stickyRef, amount: 0.4 }}
                          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                          <Image 
                            src={article.image} 
                            alt={article.title}
                            fill
                            className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-[1s]"
                          />

                          <div className={`absolute top-4 left-4 font-mono text-[10px] tracking-widest px-2 py-1 backdrop-blur-sm transition-colors duration-1000 ${isLight ? 'text-carbon/60 bg-white/50' : 'text-white/50 bg-carbon/50'}`}>FIG. 0{i + 1}</div>
                        </motion.div>

                        <motion.div 
                          className="w-full lg:w-7/12 flex flex-col z-10 lg:pl-12"
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ root: stickyRef, amount: 0.4 }}
                          transition={{ duration: 0.8, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                          <span className={`font-mono text-xs md:text-sm tracking-[0.2em] mb-8 uppercase border-b inline-block w-max pb-2 transition-colors duration-1000 ${isLight ? 'text-carbon/40 border-carbon/10' : 'text-white/40 border-white/10'}`}>{article.date}</span>
                          <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium tracking-tighter leading-[1.05] mb-8 group-hover:text-emerald-500 transition-colors duration-500">
                            {article.title}
                          </h3>
                          <p className={`font-body text-base lg:text-xl leading-relaxed max-w-xl mb-12 transition-colors duration-1000 ${isLight ? 'text-carbon/70' : 'text-white/60'}`}>
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center gap-6">
                            <div className={`w-16 h-[1px] group-hover:w-32 group-hover:bg-emerald-500 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isLight ? 'bg-carbon/20' : 'bg-white/20'}`} />
                            <span className={`font-mono text-xs tracking-widest uppercase transition-colors duration-1000 ${isLight ? 'text-carbon/50 group-hover:text-carbon' : 'text-white/40 group-hover:text-white'}`}>Read Essay</span>
                          </div>
                        </motion.div>

                      </article>
                    </Link>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
        
        {/* Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {archiveArticles.map((article, i) => {
            const slug = article.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link key={article.title} href={`/articles/${slug}`} className="block group">
                <motion.article 
                  className="cursor-pointer flex flex-col h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <div className={`w-full aspect-[4/3] mb-6 overflow-hidden relative border transition-colors duration-1000 ${isLight ? 'bg-carbon/5 border-carbon/5' : 'bg-white/5 border-white/5'}`}>
                    <Image 
                      src={article.image} 
                      alt={article.title}
                      fill
                      className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[0.8s] group-hover:scale-105" 
                    />

                  </div>
                  
                  <div className={`flex flex-col pb-6 border-b group-hover:border-emerald-500 transition-colors duration-500 ${isLight ? 'border-carbon/10' : 'border-white/5'}`}>
                    <span className={`font-mono text-[10px] tracking-[0.2em] mb-4 uppercase transition-colors duration-1000 ${isLight ? 'text-carbon/40' : 'text-white/30'}`}>{article.date}</span>
                    <h4 className="text-2xl md:text-3xl font-display font-medium tracking-tight group-hover:text-emerald-500 transition-colors duration-500 leading-snug">
                      {article.title}
                    </h4>
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}
