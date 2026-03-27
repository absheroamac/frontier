"use client";
import { motion } from "framer-motion";

const archiveArticles = [
  { title: "The Anatomy of a Fast MVP", date: "DEC 12, 2025", image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=600&q=80" },
  { title: "Generative UI in Production", date: "NOV 04, 2025", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
  { title: "Stop Paying for Wireframes", date: "OCT 21, 2025", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80" },
  { title: "Design Systems as Leverage", date: "SEP 15, 2025", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
  { title: "The Aesthetic-Usability Effect", date: "AUG 30, 2025", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" },
  { title: "Why We Use Next.js", date: "JUL 19, 2025", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80" },
];

export function JournalArchiveGrid() {
  return (
    <section className="relative w-full bg-[#161a1d] px-6 md:px-12 lg:px-24 pb-32">
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-24 mt-8">
        
        <div className="mb-16">
          <h3 className="text-sm font-mono tracking-widest text-emerald-500 uppercase">Archive</h3>
        </div>

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
              <div className="w-full aspect-[4/3] bg-white/5 mb-6 overflow-hidden relative border border-white/5">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[0.8s] group-hover:scale-105" 
                />
              </div>
              
              <div className="flex flex-col border-white/5 pb-6 border-b group-hover:border-emerald-500 transition-colors duration-500">
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 mb-4 uppercase">{article.date}</span>
                <h4 className="text-2xl md:text-3xl font-display font-medium tracking-tight group-hover:text-emerald-500 transition-colors duration-500 leading-snug">
                  {article.title}
                </h4>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
