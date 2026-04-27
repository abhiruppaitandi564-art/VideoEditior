import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Onboarding & Audit",
    description: "We dive deep into your analytics. We identify the 'Ghost Retention' points where you lose viewers and craft a bespoke strategy to plug the leak."
  },
  {
    number: "02",
    title: "The Production Sprints",
    description: "You drop the raw files. Our team of elite editors, sound designers, and colorists tear it apart and rebuild it for maximum psychological impact."
  },
  {
    number: "03",
    title: "Algorithm Domination",
    description: "We deploy the content. Using A/B tested thumbnails and SEO-optimized metadata, we force the algorithm to take notice and push your content to the masses."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 text-[30vw] font-display font-black text-white/2 opacity-[0.02] select-none pointer-events-none leading-none">
        FAST
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="text-neon-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">The Protocol</div>
          <h2 className="text-5xl md:text-7xl font-display font-medium italic tracking-tighter">3 STEPS TO <span className="text-slate-gray">TOTAL FREEDOM.</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border-t border-white/10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group p-12 border-b lg:border-b-0 lg:border-r border-white/10 hover:bg-white/2 transition-colors relative"
            >
              <div className="text-8xl font-display italic text-white/5 group-hover:text-neon-purple/20 transition-colors mb-8 leading-none">
                {step.number}
              </div>
              <h3 className="text-3xl font-display font-medium mb-6 italic">{step.title}</h3>
              <p className="text-slate-gray text-lg leading-relaxed group-hover:text-white/80 transition-colors">
                {step.description}
              </p>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
