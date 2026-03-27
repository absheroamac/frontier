"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const articles = [
  { 
    title: "The End of Traditional Agencies", 
    date: "MAR 22, 2026", 
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    excerpt: "Why the 6-month product build is dead, and how AI-native sprint studios are replacing the bloated agency model.",
    align: "left"
  },
  { 
    title: "Designing for the Void", 
    date: "FEB 14, 2026", 
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    excerpt: "Exploring minimal aesthetics, the use of deep contrast, and building interactive experiences that command attention without shouting.",
    align: "right"
  },
  { 
    title: "Velocity as a Feature", 
    date: "JAN 08, 2026", 
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    excerpt: "Speed is no longer just an advantage; it is the product. How rapid iteration cycles define the next layer of software.",
    align: "center"
  }
];

const archiveArticles = [
  { title: "The Anatomy of a Fast MVP", date: "DEC 12, 2025", image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=600&q=80" },
  { title: "Generative UI in Production", date: "NOV 04, 2025", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
  { title: "Stop Paying for Wireframes", date: "OCT 21, 2025", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80" },
  { title: "Design Systems as Leverage", date: "SEP 15, 2025", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
  { title: "The Aesthetic-Usability Effect", date: "AUG 30, 2025", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
  { title: "Why We Use Next.js", date: "JUL 19, 2025", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
];

export function EditorialGrid() {
  const [isLight, setIsLight] = useState(false);

  return (
    <motion.section 
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
            const isLeft = article.align === "left" || (article.align === "center" && i % 2 !== 0);
            
            return (
              <motion.article 
                key={article.title}
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
            );
          })}
        </div>
        
        {/* Archive Grid Merged directly after Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {archiveArticles.map((article, i) => (
            <motion.article 
              key={article.title}
              className="group cursor-pointer flex flex-col"
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
          ))}
        </div>

      </div>
    </motion.section>
  );
}
