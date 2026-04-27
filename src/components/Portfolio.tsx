import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { MoveLeft, MoveRight } from "lucide-react";

export default function Portfolio() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section id="portfolio" className="py-32 px-6 bg-white/1">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-neon-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">Case Studies</div>
          <h2 className="text-5xl md:text-7xl font-display font-medium italic tracking-tighter mb-6">THE RAW VS. THE <span className="text-gradient underline decoration-neon-purple/30">ENGINEERED</span></h2>
          <p className="text-slate-gray max-w-xl mx-auto text-lg leading-relaxed">
            Drag the slider to witness the transformation from amateur raw footage to high-retention algorithmic dominance.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative aspect-video rounded-[2.5rem] overflow-hidden glitch-border cursor-ew-resize select-none"
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
        >
          {/* After Image */}
          <div className="absolute inset-0 grayscale-0">
            <img 
              src="https://picsum.photos/seed/after-edit/1600/900" 
              alt="Post Production" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Visual Overlays for 'After' */}
            <div className="absolute inset-0 bg-neon-purple/5 mix-blend-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 font-display text-[20vw] opacity-10 pointer-events-none">
              GLITCH
            </div>
          </div>

          {/* Before Image */}
          <div 
            className="absolute inset-0 grayscale brightness-75 transition-none z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://picsum.photos/seed/before-edit/1600/900" 
              alt="Raw Footage" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white z-20 transition-none flex items-center justify-center p-0"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)]">
               <div className="flex gap-1">
                 <MoveLeft className="w-4 h-4 text-obsidian" />
                 <MoveRight className="w-4 h-4 text-obsidian" />
               </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute bottom-10 left-10 z-30 px-6 py-2 glass rounded-full text-xs font-bold tracking-widest uppercase">Raw Footage</div>
          <div className="absolute bottom-10 right-10 z-30 px-6 py-2 glass rounded-full text-xs font-bold tracking-widest uppercase text-neon-purple">Engineered Mastery</div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
           {[1, 2, 3].map((i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="aspect-[4/5] rounded-3xl overflow-hidden relative group cursor-pointer"
             >
                <img 
                  src={`https://picsum.photos/seed/project${i}/600/750`} 
                  alt="Past Project" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8">
                  <div className="text-neon-purple text-xs font-bold tracking-widest uppercase mb-1">YouTube Strategy</div>
                  <div className="text-2xl font-display italic">The $10M Hook.</div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
