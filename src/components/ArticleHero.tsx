"use client";
import { motion, useScroll, useTransform } from "framer-motion";

interface ArticleHeroProps {
  title: string;
  date: string;
  readingTime: string;
  tag: string;
  image: string;
}

export function ArticleHero({ title, date, readingTime, tag, image }: ArticleHeroProps) {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  // Split title to animate word by word
  const words = title.split(" ");

  return (
    <header className="w-full pt-48 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        <motion.div 
          className="flex items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-carbon/50">{date}</span>
          <div className="w-1 h-1 bg-carbon/20 rounded-full" />
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-carbon/50">{readingTime}</span>
          <div className="w-1 h-1 bg-carbon/20 rounded-full" />
          <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-emerald-600">{tag}</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-[7rem] font-display font-medium tracking-tighter leading-[0.95] text-carbon mb-24 max-w-6xl"
          style={{ y: yParallax, opacity: opacityFade }}
        >
          {words.map((word, i) => (
            <motion.span 
              key={i} 
              className="inline-block mr-[2%]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.05, ease: [0.34, 1.56, 0.64, 1] }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

      </div>

      <motion.div 
        className="w-full max-w-7xl mx-auto aspect-[21/9] md:aspect-[21/9] relative overflow-hidden bg-carbon/5"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.img 
          src={image} 
          alt={title}
          className="absolute top-0 left-0 w-full h-[125%] object-cover grayscale mix-blend-multiply opacity-90"
          style={{ y: useTransform(scrollY, [0, 1000], ["0%", "-15%"]) }}
        />
        <div className="absolute top-6 left-6 font-mono text-[10px] tracking-widest px-2 py-1 bg-[#f4f4f5]/80 backdrop-blur-md text-carbon/60 uppercase">
          FIG. 01 — {title}
        </div>
      </motion.div>
    </header>
  );
}
