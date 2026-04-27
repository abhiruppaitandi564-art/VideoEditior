import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Alex Rivera",
    handle: "@AlexVlogs",
    content: "Glitch & Growth didn't just edit my videos; they saved my career. My retention shot up from 32% to 68% in the first month. I've gained back 30 hours a week to actually live my life.",
    rating: 5,
    tag: "1M+ Subscribers"
  },
  {
    name: "Sarah Chen",
    handle: "@TechBySarah",
    content: "The Ghost Executive service is insane. They handled my entire short-form strategy and I went from 10k to 500k followers in 90 days. Their hook architecture is pure science.",
    rating: 5,
    tag: "Top 1% Tech Creator"
  },
  {
    name: "Marcus Thorne",
    handle: "@MarcusUncut",
    content: "I've worked with every major agency. None match the aesthetic and psychological precision of G&G. They understand the 'cyber-luxe' vibe better than anyone in the game.",
    rating: 5,
    tag: "Documentary Filmmaker"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-neon-purple font-bold tracking-[0.2em] uppercase text-sm mb-4">Wall of Love</div>
          <h2 className="text-5xl md:text-7xl font-display font-medium italic tracking-tighter">TRUSTED BY THE <span className="text-gradient">TOP 1%.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass rounded-3xl relative hover:-translate-y-2 transition-all duration-500 group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-neon-purple/10 transition-colors" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-neon-purple fill-neon-purple" />
                ))}
              </div>

              <p className="text-xl italic font-medium mb-10 leading-relaxed text-white/90">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/creator${i}/100/100`} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border border-white/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-lg">{review.name}</div>
                  <div className="text-sm text-slate-gray">{review.handle} • <span className="text-neon-purple/80">{review.tag}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
