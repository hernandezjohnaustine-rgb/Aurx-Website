import { motion } from "motion/react";
import { Zap, Tv, Layers, Sparkles } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl">
              <div className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-6">What is AURX</div>
              <h2 className="text-4xl md:text-7xl font-display font-medium leading-[1.1] mb-8 uppercase tracking-tighter">
                AURX IS A <br /> 
                <span className="italic text-brand-blue">PERFORMANCE-DRIVEN</span> <br /> 
                CONTENT SYSTEM.
              </h2>
              <p className="text-white font-medium text-lg md:text-3xl mb-10 leading-tight">
                Not just editing—but structured execution designed to capture attention, hold interest, and deliver your message with intent.
              </p>
              <div className="h-px w-24 bg-brand-blue/30 mx-auto mb-10" />
              <p className="text-brand-text-dim text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
                We approach every project through a system built around attention and retention—combining strategy, pacing, and visual execution to create content that doesn’t just look refined, but performs with purpose.
              </p>
          </div>
        </div>
      </div>

      <div className="glow-blue w-[800px] h-[800px] -bottom-[400px] -right-[200px] opacity-20" />
    </section>
  );
}
