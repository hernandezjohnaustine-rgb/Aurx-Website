import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="glow-blue w-[1000px] h-[1000px] -top-[500px] left-1/2 -translate-x-1/2 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-16 md:p-32 rounded-[60px] glass relative overflow-hidden group"
        >
          {/* Subtle moving grid background in CTA */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
          
          <h2 className="text-5xl md:text-8xl font-display font-medium tracking-tighter mb-12">
            READY TO <span className="text-brand-blue">SCALE</span> <br /> YOUR CONTENT?
          </h2>
          
          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Stop worrying about editing. Start focusing on creating. 
            Join the AURX ecosystem and dominate your niche.
          </p>

          <a href="#booking" className="group flex items-center gap-3 bg-white text-black px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-blue hover:text-white transition-all mx-auto cursor-pointer">
            Book a Call Now 
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
