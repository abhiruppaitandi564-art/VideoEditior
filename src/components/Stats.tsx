import { motion } from "motion/react";

const stats = [
  { label: "Views Generated", value: "50M+", suffix: "Viral Growth" },
  { label: "Hours Edited", value: "10k+", suffix: "Time Reclaimed" },
  { label: "Retention Avg", value: "85%", suffix: "Hook Mastery" },
  { label: "Top 1% Creators", value: "50+", suffix: "The Elite List" },
];

export default function Stats() {
  return (
    <section className="py-24 border-y border-white/5 relative bg-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-sm font-bold text-neon uppercase tracking-widest mb-2">{stat.label}</div>
              <div className="text-5xl md:text-6xl font-display italic mb-2">{stat.value}</div>
              <div className="text-xs text-slate-gray font-medium tracking-widest uppercase">{stat.suffix}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
