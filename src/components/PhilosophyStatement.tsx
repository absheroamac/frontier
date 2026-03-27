"use client";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
];

export function PhilosophyStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<{ width: number; left: string; top: string; delay: number; duration: number }[]>([]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Bind animation explicitly to scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center center"], // start animating when top of section crosses 85% of screen, finish at center
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.1, 1], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.2, 1], ["100%", "0%"]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }).map(() => ({
        width: Math.random() * 2 + 1,
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        delay: Math.random() * 5,
        duration: Math.random() * 15 + 15,
      }))
    );
    
    const imgInterval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % galleryImages.length);
    }, 350); 
    
    return () => clearInterval(imgInterval);
  }, []);

  return (
    <section 
      id="manifesto"
      ref={containerRef}
      className="relative w-full bg-[#0a0f12] px-6 md:px-12 lg:px-24 py-24 lg:py-0 lg:h-screen lg:min-h-[850px] lg:max-h-[1200px] flex flex-col justify-center overflow-hidden"
    >
      
      {/* Deep Antigravity-style particle background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon via-transparent to-carbon z-10" />
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(25,120,83,0.8)]"
            style={{ width: p.width, height: p.width, left: p.left, top: p.top }}
            animate={{ y: ["0vh", "-100vh"], opacity: [0, 1, 0] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col justify-between h-full py-12 lg:py-24">
        
        {/* Top: Staggered Typography scrubbed via scroll with text masking */}
        <div className="flex flex-col text-5xl md:text-7xl lg:text-[7.5rem] font-display font-medium tracking-tighter leading-[0.95] md:leading-[1.0]">
          
          <div className="overflow-hidden w-full">
            <motion.div 
              style={{ y: y1 }}
              className="text-white pb-2"
            >
              Design.
            </motion.div>
          </div>

          <div className="overflow-hidden w-full pl-8 md:pl-32 lg:pl-56">
            <motion.div 
              style={{ y: y2 }}
              className="text-white pb-2"
            >
              Systems.
            </motion.div>
          </div>

          <div className="overflow-hidden w-full pl-16 md:pl-56 lg:pl-[28rem]">
            <motion.div 
              style={{ y: y3 }}
              className="text-emerald-500 pb-2"
            >
              Velocity.
            </motion.div>
          </div>

        </div>

        {/* Bottom: Gallery Box and Right-aligned Text */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-16 w-full mt-24 lg:mt-auto">
          
          <div className="overflow-hidden">
            <motion.div 
              className="w-full max-w-[320px] lg:w-[360px] aspect-square bg-white/5 relative flex-shrink-0"
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <AnimatePresence mode="popLayout">
                <motion.img 
                  key={currentImgIndex}
                  src={galleryImages[currentImgIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-luminosity"
                />
              </AnimatePresence>
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-emerald-500 px-3 py-1 bg-carbon/80 border border-emerald-500/20 uppercase backdrop-blur-sm shadow-md">
                REC {currentImgIndex + 1}/{galleryImages.length}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-5/12 flex flex-col gap-6 lg:gap-8 pb-2">
            <motion.p 
              className="text-2xl md:text-3xl text-white/90 font-display tracking-tight leading-[1.3] m-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            >
              AI accelerates execution. Human taste defines the outcome.
            </motion.p>
            
            <motion.p 
              className="text-base md:text-lg text-white/50 font-body leading-relaxed max-w-lg m-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              We don't do 'digital solutions.' We build products people understand instantly. From 0 to 1, utilizing deep contrast, cinematic motion, and uncompromising craft.
            </motion.p>
          </div>

        </div>

      </div>
    </section>
  );
}
