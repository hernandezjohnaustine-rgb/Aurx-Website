import { motion } from "motion/react";
import { CheckCircle2, Target, TrendingUp, Users } from "lucide-react";

const audiences = [
  {
    icon: <Users className="text-brand-blue" />,
    text: "Content creators who want to turn attention into real engagement and growth"
  },
  {
    icon: <Target className="text-brand-blue" />,
    text: "Coaches and course creators who need their message to land clearly and consistently"
  },
  {
    icon: <Play className="text-brand-blue" />, // Changed to Play since ArrowRight was used elsewhere
    text: "YouTubers focused on retention, storytelling, and long-term audience building"
  },
  {
    icon: <TrendingUp className="text-brand-blue" />,
    text: "Content producers and agencies looking to scale output while maintaining high-quality execution"
  }
];

import { Play } from "lucide-react";

export default function WhoThisIsFor() {
  return (
    <section className="py-24 md:py-40 bg-black overflow-hidden relative">
      <div className="glow-blue w-[600px] h-[600px] -top-1/4 -right-1/4 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <p className="text-brand-blue text-[10px] md:text-xs uppercase tracking-[0.5em] font-black mb-6">
            Who This Is For
          </p>
          <h2 className="text-4xl md:text-7xl font-display font-medium leading-tight tracking-tighter uppercase mx-auto max-w-4xl">
            Built for those <span className="text-brand-blue italic">serious</span> about how their content performs.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {audiences.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="surface-card p-8 md:p-12 rounded-[32px] md:rounded-[48px] border-white/5 flex flex-col gap-6 group hover:border-brand-blue/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <p className="text-white text-lg md:text-2xl font-bold leading-tight tracking-tight">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
