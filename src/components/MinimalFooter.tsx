import Image from "next/image";

export function MinimalFooter() {

  return (
    <footer className="w-full bg-[#161a1d] px-6 md:px-12 lg:px-24 py-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center md:items-end gap-12 md:gap-6">
      <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto relative">
        <div className="relative h-[22px] md:h-6 w-32 opacity-50 hover:opacity-100 transition-opacity">
          <Image 
            src="/assets/frontierforDark.png" 
            alt="Frontier Logo" 
            fill
            className="object-contain" 
          />
        </div>

        <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase text-center md:text-left">
          Built at the Frontier
        </span>
      </div>
      
      <div className="flex items-center gap-8 font-mono text-xs tracking-widest text-white/40 uppercase">
        <a href="https://twitter.com/coomarprantik" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">Twitter</a>
        <a href="https://www.linkedin.com/in/coomarprantik/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">LinkedIn</a>
        <a href="mailto:prantik@tryfrontier.com" className="hover:text-emerald-500 transition-colors">Email</a>
        <span className="ml-4">&copy; 2026</span>
      </div>
    </footer>
  );
}
