import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-purple/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-slate-gray/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/20 text-xs font-bold tracking-widest text-neon mb-6 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-purple"></span>
            </span>
            Post-Production for Tier-1 Creators
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-medium leading-[0.9] tracking-tighter mb-8 italic">
            YOU FILM. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-neon-purple">WE DOMINATE.</span>
          </h1>
          
          <p className="text-xl text-slate-gray max-w-xl mb-10 leading-relaxed">
            Stop losing 40+ hours a week in the editing dungeon. We turn your raw footage into retention-hacking machines that fuel growth while you reclaim your creative freedom.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-neon-purple text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-[0_0_30px_rgba(188,19,254,0.4)] transition-all transform hover:-translate-y-1">
              Start Your Domination
            </button>
            <button className="glass text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all flex items-center gap-3 group">
              View Showreel
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-neon-purple/20 transition-colors">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/influencer${i}/100/100`}
                  alt="Influencer"
                  className="w-12 h-12 rounded-full border-2 border-obsidian"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm text-slate-gray">
              Trusted by <span className="text-white font-bold">50+ Tier-1 Creators</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          {/* Hero Image Description for AI: 
              "A cinematic, ultra-high-definition close-up of a high-end video editing workstation in a dark studio. 
              The monitor shows a complex editing timeline with vibrant neon waveforms. 
              Layered over the image is a glassmorphism panel representing 'Retention Mastery'. 
              Subtle motion blur effects across the frame suggest speed and high-octane growth. 
              Cyber-luxe aesthetic with Electric Neon Purple accents." 
          */}
          <div className="aspect-square relative rounded-3xl overflow-hidden glitch-border">
            <img
              src="https://picsum.photos/seed/digitalmastery/800/800"
              alt="Cyber-luxe Video Editing Mastery"
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            
            {/* Overlay Glass Elements */}
            <div className="absolute top-10 left-10 p-6 glass rounded-2xl animate-float">
               <div className="text-xs font-bold text-neon-purple uppercase mb-2 tracking-widest">Retention Rate</div>
               <div className="text-4xl font-display italic">89.4%</div>
            </div>

            <div className="absolute bottom-10 right-10 p-6 glass rounded-2xl animate-float-delayed">
               <div className="text-xs font-bold text-white uppercase mb-2 tracking-widest">Views Generated</div>
               <div className="text-4xl font-display italic">50M+</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
