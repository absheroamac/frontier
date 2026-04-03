"use client";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Link from "next/link";

function AsciiLogo() {
  const ref = useRef<THREE.Group>(null);
  const texture = useTexture("/assets/LogoIcon.png");
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.8; // Rotating like a coin
    }
  });

  // Layered extrusion technique: stack N planes to simulate thickness.
  // Using alphaTest discards transparent pixels, so the mesh perfectly wraps the logo shape.
  const thicknessLayers = 20;
  const zOffset = 0.015;

  return (
    <group ref={ref} scale={2.2}>
      {Array.from({ length: thicknessLayers }).map((_, i) => (
        <mesh key={i} position={[0, 0, (i - thicknessLayers / 2) * zOffset]}>
          <planeGeometry args={[3, 3]} />
          <meshStandardMaterial 
            map={texture} 
            transparent={true} 
            alphaTest={0.5} 
            color="white" 
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export function ContactSection() {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] border-t border-white/5 bg-[#197853] px-6 md:px-12 lg:px-24 overflow-hidden flex items-center">
      
      {/* 3D ASCII Background Canvas - Transparent to let Green bg show through */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen">
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 10]} intensity={2.5} />
          <directionalLight position={[-10, -10, -10]} intensity={1} />
          
          <AsciiLogo />
          {/* Double space guarantees dark/transparent pixels map to pure empty space */}
          <AsciiRenderer 
            fgColor="white" 
            bgColor="transparent" 
            characters="  .:-+*=%@#" 
            invert={false} 
            resolution={0.22} 
          />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full relative z-10 pointer-events-none gap-16 lg:gap-0">
        
        {/* Left Side */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start pointer-events-auto w-full lg:w-auto">
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-[5rem] font-display font-medium tracking-tighter leading-[1.05] text-white/90"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            Build with <br />
            confidence.
          </motion.h2>
        </div>

        {/* Center spacing allocated for ASCII Logo */}
        <div className="hidden lg:block w-[40vw]"></div>

        {/* Right Side */}
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start pointer-events-auto gap-4 w-full lg:w-[400px]">
          <motion.h2 
            className="text-2xl md:text-3xl font-display font-light tracking-tight text-white/80 whitespace-nowrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
          >
            Ship what&apos;s next.
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <Link href="/contact" className="px-8 py-3.5 mt-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-[10px] md:text-[11px] font-mono tracking-widest uppercase hover:bg-white hover:text-emerald-800 transition-colors duration-300">
              Contact us
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
