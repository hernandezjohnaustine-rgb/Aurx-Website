import { motion } from "motion/react";

export default function Reality() {
  return (
    <section className="py-24 md:py-32 bg-brand-deep/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
            THE REALITY
          </span>
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium mb-12 leading-tight tracking-tighter">
          Attention is <span className="italic">harder to keep</span> <br /> than it is to reach.
        </h2>

        <div className="space-y-8 text-white/50 text-base md:text-xl font-light leading-relaxed">
          <p>
            Most content today is seen—but rarely fully experienced.
          </p>
          
          <div className="py-12 border-y border-white/5 my-12">
            <p className="text-white text-lg md:text-2xl font-medium mb-4">
              A 2026 cross-platform study tracking over 112,000 users across 34 countries found that the average human attention span has dropped to 7.97 seconds—now shorter than a goldfish at 9 seconds.
            </p>
            <p className="text-sm uppercase tracking-widest text-brand-blue font-bold">The Attention Gap</p>
          </div>

          <p>
            This highlights a clear shift: attention is no longer gradual—it’s decided almost instantly. 
          </p>

          <p className="text-white font-medium italic">
            This is why AURX is built around Attention and Retention—structuring content to hold focus long enough for your message to be fully delivered.
          </p>

          <p>
            Without a clear system behind it, even well-produced content can lose its impact.
          </p>
        </div>
      </div>
    </section>
  );
}
