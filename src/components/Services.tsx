import { motion } from "motion/react";
import { Zap, Tv, Layers, Sparkles } from "lucide-react";

const services = [
  {
    title: "Short-Form Dominance",
    desc: "TikToks, Reels, and Shorts designed for the 3-second hook and high-retention rhythms.",
    icon: <Zap className="text-brand-blue" />,
  },
  {
    title: "Cinematic Narratives",
    desc: "Long-form YouTube videos and documentary-style edits that tell a powerful story.",
    icon: <Tv className="text-brand-blue" />,
  },
  {
    title: "Dynamic Motion Graphics",
    desc: "Custom HUDs, call-outs, and seamless 3D tracking that elevate your brand quality.",
    icon: <Layers className="text-brand-blue" />,
  },
  {
    title: "Strategic Storytelling",
    desc: "We don't just cut clips; we engineer emotions and drive viewers toward your CTA.",
    icon: <Sparkles className="text-brand-blue" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
             <div className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Our Expertise</div>
             <h2 className="text-5xl md:text-6xl font-medium leading-tight">
               ELEVATED EDITING <br /> FOR MODERN PLATFORMS
             </h2>
          </div>
          <p className="max-w-sm text-brand-text-dim text-lg leading-relaxed">
            We specialize in performance-driven video editing that looks better and converts faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 surface-card hover:bg-brand-blue/5 transition-all duration-500 flex flex-col gap-6 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-display font-medium">{s.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">{s.desc}</p>
              
              <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                Learn More <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glow-blue w-[800px] h-[800px] -bottom-[400px] -right-[200px] opacity-20" />
    </section>
  );
}
