import { motion } from "motion/react";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center glass px-6 py-3 rounded-full">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-neon-purple/20 rounded-lg group-hover:bg-neon-purple/40 transition-colors">
            <Zap className="w-5 h-5 text-neon-purple fill-neon-purple" />
          </div>
          <span className="font-display font-medium tracking-tighter text-xl">
            GLITCH <span className="text-neon">&</span> GROWTH
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-gray">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <button className="bg-white text-obsidian px-6 py-2 rounded-full text-sm font-bold hover:bg-neon-purple hover:text-white transition-all transform hover:scale-105 active:scale-95">
          RECLAIM YOUR TIME
        </button>
      </div>
    </motion.nav>
  );
}
