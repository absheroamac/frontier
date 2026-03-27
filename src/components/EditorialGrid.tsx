"use client";
import { motion } from "framer-motion";

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

export function EditorialGrid() {
  return (
    <section className="relative w-full bg-[#161a1d] px-6 md:px-12 lg:px-24 py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-end justify-between mb-32 border-b border-white/10 pb-8">
          <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-display tracking-tighter uppercase leading-[0.85]">The<br/>Journal</h2>
          <span className="font-mono text-xs tracking-widest text-emerald-500 hidden md:block uppercase mb-2">Essays & Observations</span>
        </div>

        <div className="flex flex-col gap-32 md:gap-48 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />

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
                
                <div className="w-full lg:w-5/12 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-white/5 transition-colors duration-500">
                  <motion.img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-[1s]"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute top-4 left-4 font-mono text-[10px] text-white/50 tracking-widest bg-carbon/50 backdrop-blur-sm px-2 py-1">FIG. 0{i + 1}</div>
                </div>

                <div className="w-full lg:w-7/12 flex flex-col z-10">
                  <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/40 mb-8 uppercase border-b border-white/10 inline-block w-max pb-2">{article.date}</span>
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter leading-[1.05] mb-8 group-hover:text-emerald-500 transition-colors duration-500">
                    {article.title}
                  </h3>
                  <p className="text-white/60 font-body text-lg md:text-xl leading-relaxed max-w-xl mb-12">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-[1px] bg-white/20 group-hover:w-32 group-hover:bg-emerald-500 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]" />
                    <span className="font-mono text-xs tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">Read Essay</span>
                  </div>
                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
