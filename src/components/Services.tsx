import { motion } from "motion/react";
import { TrendingUp, Film, UserCheck } from "lucide-react";

const services = [
  {
    title: "Short-Form Mastery",
    icon: TrendingUp,
    description: "TikTok, Reels, and Shorts optimized for the subconscious. We focus on millisecond-precision retention editing, high-octane pacing, and viral hook architecture.",
    features: ["Subconscious Hook Design", "Dynamic Captioning", "Retention Trend Mapping"]
  },
  {
    title: "Long-Form Narrative",
    icon: Film,
    description: "YouTube and Documentary-style editing that keeps viewers glued for 20+ minutes. Cinematic color grading, sound design, and psychological pacing.",
    features: ["Cinematic Color Grading", "Immersive Soundscape", "Story-First Continuity"]
  },
  {
    title: "The Ghost Executive",
    icon: UserCheck,
    description: "Full-scale channel domination. Account management, engagement growth, thumbnail A/B testing, and analytic-driven content strategy.",
    features: ["A/B Thumbnail Dominance", "SEO Metadata Strategy", "Engagement Automation"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="text-neon-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Arsenal</div>
            <h2 className="text-5xl md:text-7xl font-display font-medium leading-none italic tracking-tighter">
              WE DON'T EDIT. <br />
              <span className="text-slate-gray">WE ENGINEER IMPACT.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-gray max-w-sm">
            Our services are designed to remove you from the logistics so you can focus entirely on your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 glass rounded-3xl glitch-border hover:bg-white/10 transition-all cursor-default"
            >
              <div className="w-14 h-14 bg-neon-purple/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-neon-purple group-hover:text-white transition-all transform group-hover:rotate-12">
                <service.icon className="w-8 h-8 text-neon-purple group-hover:text-white" />
              </div>
              
              <h3 className="text-2xl font-display font-medium mb-4 italic italic">{service.title}</h3>
              <p className="text-slate-gray mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 bg-neon-purple rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
