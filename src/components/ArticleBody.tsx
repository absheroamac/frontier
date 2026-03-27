"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface ArticleBodyProps {
  content: string; // Accepts HTML string for now
  nextArticle?: { title: string; slug: string };
}

export function ArticleBody({ content, nextArticle }: ArticleBodyProps) {
  return (
    <motion.article 
      className="w-full max-w-3xl mx-auto px-6 md:px-0 py-24 text-carbon"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <div 
        className="w-full text-lg md:text-xl [&>p]:font-body [&>p]:leading-[1.8] [&>p]:text-carbon/90 [&>p]:mb-10 [&>h2]:font-display [&>h2]:font-medium [&>h2]:tracking-tighter [&>h2]:text-carbon [&>h2]:text-4xl md:[&>h2]:text-5xl [&>h2]:mt-24 [&>h2]:mb-8 [&>h3]:text-2xl md:[&>h3]:text-3xl [&>h3]:mt-16 [&>h3]:mb-6 [&>blockquote]:font-display [&>blockquote]:text-3xl md:[&>blockquote]:text-4xl [&>blockquote]:font-light [&>blockquote]:text-carbon [&>blockquote]:border-l-4 [&>blockquote]:border-emerald-500 [&>blockquote]:pl-8 [&>blockquote]:my-16 [&>a]:text-emerald-600 [&>a]:no-underline hover:[&>a]:underline [&>strong]:text-carbon [&>img]:grayscale [&>img]:mix-blend-multiply [&>img]:my-16"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      {nextArticle && (
        <Link href={`/articles/${nextArticle.slug}`} className="block mt-32 pt-16 border-t border-carbon/10 group cursor-pointer">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-carbon/40 uppercase mb-4">Read Next</span>
              <h4 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-carbon group-hover:text-emerald-600 transition-colors duration-500">
                {nextArticle.title}
              </h4>
            </div>
            <div className="w-12 h-12 rounded-full border border-carbon/20 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-all duration-300">
              <svg className="w-4 h-4 text-carbon group-hover:text-emerald-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </Link>
      )}
    </motion.article>
  );
}
