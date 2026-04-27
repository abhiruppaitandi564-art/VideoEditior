import { motion } from "motion/react";
import { Zap, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto glass rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden glitch-border">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-purple/5 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-display font-medium italic tracking-tighter mb-8 leading-[0.9]">
            STOP EDITING. <br />
            <span className="text-gradient">START DOMINATING.</span>
          </h2>
          <p className="text-xl text-slate-gray mb-12 max-w-xl mx-auto leading-relaxed">
            The algorithm won't wait for your next burnout. Reclaim your time and scale your vision with the world's most elite post-production team.
          </p>
          <button className="bg-white text-obsidian px-12 py-5 rounded-2xl text-xl font-black hover:bg-neon-purple hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            BOOK YOUR AUDIT NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <div className="p-2 bg-neon-purple/20 rounded-lg group-hover:bg-neon-purple/40 transition-colors">
                <Zap className="w-5 h-5 text-neon-purple fill-neon-purple" />
              </div>
              <span className="font-display font-medium tracking-tighter text-2xl">
                GLITCH <span className="text-neon-purple">&</span> GROWTH
              </span>
            </div>
            <p className="text-slate-gray max-w-sm mb-8 leading-relaxed">
              The premium engine behind the world's most influential voices. We specialize in algorithmic dominance and creative freedom.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-neon-purple transition-all group">
                  <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display italic text-lg mb-8">Navigation</h4>
            <ul className="space-y-4 text-slate-gray">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">The Protocol</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display italic text-lg mb-8">Direct Access</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:ops@glitchgrowth.com" className="flex items-center gap-3 text-slate-gray hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:bg-neon-purple/20">
                  <Mail className="w-5 h-5" />
                </div>
                ops@glitchgrowth.com
              </a>
              <div className="mt-4 p-6 glass rounded-2xl">
                 <div className="text-[10px] font-bold text-neon-purple uppercase tracking-[0.2em] mb-2">Systems Status</div>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                   <span className="text-xs font-medium text-white/50 underline decoration-green-500/20">Operational Dominance</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-white/20 font-medium tracking-widest uppercase">
            © 2026 GLITCH & GROWTH • BUILT FOR THE BOLD.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-neon-purple transition-colors">Privacy Ops</a>
            <a href="#" className="hover:text-neon-purple transition-colors">Terms of Dominance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
