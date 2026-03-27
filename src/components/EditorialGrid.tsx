"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArticleData } from "@/lib/mdx";

export function EditorialGrid({ allArticles }: { allArticles: ArticleData[] }) {
  const [isLight, setIsLight] = useState(false);

  // Split into top 3 featured and the rest as archive
  const articles = allArticles.slice(0, 3);
  const archiveArticles = allArticles.slice(3);

  return (
    <motion.section 
      id="journal"
      onViewportEnter={() => setIsLight(true)}
      onViewportLeave={() => setIsLight(false)}
      viewport={{ margin: "-25% 0px -25% 0px" }}
      className={`relative w-full px-6 md:px-12 lg:px-24 py-32 overflow-hidden border-t transition-colors duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isLight ? 'bg-[#f4f4f5] border-carbon/10 text-carbon' : 'bg-[#161a1d] border-white/5 text-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        
        <div className={`flex items-end justify-between mb-32 border-b pb-8 transition-colors duration-1000 ${isLight ? 'border-carbon/10' : 'border-white/10'}`}>
          <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display tracking-tighter uppercase leading-[0.85]">The<br/>Journal</h2>
          <span className="font-mono text-xs tracking-widest text-emerald-500 hidden md:block uppercase mb-2">Essays & Observations</span>
        </div>

        <div className="flex flex-col gap-32 md:gap-48 relative mb-32 md:mb-48">
          <div className={`hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 transition-colors duration-1000 ${isLight ? 'bg-carbon/5' : 'bg-white/5'}`} />

          {articles.map((article, i) => {
            const isLeft = i % 2 === 0; // Fixed alternating pattern purely by index
            const slug = article.slug;
            
            return (
              <Link key={article.title} href={`/articles/${slug}`} className="block">
                <motion.article 
                  className={`relative flex flex-col gap-12 lg:gap-24 items-center group cursor-pointer ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  
                  <div className={`w-full lg:w-5/12 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden transition-colors duration-1000 ${isLight ? 'bg-carbon/5' : 'bg-white/5'}`}>
                    <motion.img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-[1s]"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className={`absolute top-4 left-4 font-mono text-[10px] tracking-widest px-2 py-1 backdrop-blur-sm transition-colors duration-1000 ${isLight ? 'text-carbon/60 bg-white/50' : 'text-white/50 bg-carbon/50'}`}>FIG. 0{i + 1}</div>
                  </div>

                  <div className="w-full lg:w-7/12 flex flex-col z-10">
                    <span className={`font-mono text-xs md:text-sm tracking-[0.2em] mb-8 uppercase border-b inline-block w-max pb-2 transition-colors duration-1000 ${isLight ? 'text-carbon/40 border-carbon/10' : 'text-white/40 border-white/10'}`}>{article.date}</span>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter leading-[1.05] mb-8 group-hover:text-emerald-500 transition-colors duration-500">
                      {article.title}
                    </h3>
                    <p className={`font-body text-lg md:text-xl leading-relaxed max-w-xl mb-12 transition-colors duration-1000 ${isLight ? 'text-carbon/70' : 'text-white/60'}`}>
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-[1px] group-hover:w-32 group-hover:bg-emerald-500 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isLight ? 'bg-carbon/20' : 'bg-white/20'}`} />
                      <span className={`font-mono text-xs tracking-widest uppercase transition-colors duration-1000 ${isLight ? 'text-carbon/50 group-hover:text-carbon' : 'text-white/40 group-hover:text-white'}`}>Read Essay</span>
                    </div>
                  </div>

                </motion.article>
              </Link>
            );
          })}
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
                    <img 
                      src={article.image} 
                      alt={article.title}
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
