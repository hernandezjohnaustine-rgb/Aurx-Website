import { motion } from "motion/react";
import { Zap, Tv, Layers, Sparkles } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-24 md:mb-32">
          <div className="max-w-2xl">
              <div className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-6">What is AURX</div>
              <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8">
                AURX IS A <br /> 
                <span className="italic">PERFORMANCE-DRIVEN</span> <br /> 
                CONTENT SYSTEM.
              </h2>
              <p className="text-white font-medium text-lg md:text-2xl mb-8 leading-relaxed">
                Not just editing—but structured execution designed to capture attention, hold interest, and deliver your message with intent.
              </p>
              <p className="text-brand-text-dim text-base md:text-lg leading-relaxed">
                We approach every project through a system built around attention and retention—combining strategy, pacing, and visual execution to create content that doesn’t just look refined, but performs with purpose.
              </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {[
              { label: "Views Generated", value: "25M+" },
              { label: "Edits Delivered", value: "1,000+" },
              { label: "Client Satisfaction", value: "98%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="surface-card p-8 rounded-3xl text-center lg:text-left border-white/5"
              >
                <div className="text-3xl md:text-5xl font-display font-bold text-brand-blue mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="glow-blue w-[800px] h-[800px] -bottom-[400px] -right-[200px] opacity-20" />
    </section>
  );
}
