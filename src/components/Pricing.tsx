import { motion } from "motion/react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Growth",
    price: "$2,499",
    description: "Perfect for rising stars looking to dominate short-form.",
    features: ["15 Short-Form Reels/mo", "Retention Meta-Analysis", "Custom Hook Strategy", "Viral Trend Alerts"],
    popular: false
  },
  {
    name: "Pro",
    price: "$5,999",
    description: "The full-scale production powerhouse for established creators.",
    features: ["4 Long-Form Videos/mo", "30 Short-Form Reels/mo", "Cinematic Color Grading", "Sound Design Suite", "Thumbnail Mastering"],
    popular: true
  },
  {
    name: "Elite",
    price: "Custom",
    description: "Total channel management for the 0.1% of creators.",
    features: ["Unlimited Editing", "Dedicated Account Manager", "Thumbnail A/B Testing", "SEO & Metadata Dominance", "Engagement Ghost-Ops"],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 text-center">
          <div className="text-neon-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">Investment</div>
          <h2 className="text-5xl md:text-7xl font-display font-medium italic tracking-tighter">PRICED FOR <span className="text-slate-gray">DOMINANCE.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] relative flex flex-col ${
                tier.popular 
                ? "bg-white/5 border-2 border-neon-purple/50 shadow-[0_0_50px_rgba(188,19,254,0.1)]" 
                : "glass border-white/5"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon-purple text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-3xl font-display italic mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-display italic">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-slate-gray font-medium">/mo</span>}
                </div>
              </div>

              <p className="text-slate-gray mb-8 leading-relaxed">
                {tier.description}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-neon-purple/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-neon-purple" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all transform hover:-translate-y-1 active:scale-95 ${
                tier.popular 
                ? "bg-neon-purple text-white shadow-[0_0_30px_rgba(188,19,254,0.4)]" 
                : "glass text-white hover:bg-white/10"
              }`}>
                Secure Your Slot
              </button>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-slate-gray text-sm italic">
          *We only accept 2 new clients per month to maintain Tier-1 production standards.
        </p>
      </div>
    </section>
  );
}
