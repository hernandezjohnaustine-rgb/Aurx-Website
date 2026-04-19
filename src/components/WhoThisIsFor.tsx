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
    <section className="py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-medium mb-8 leading-tight">
              Built for those <span className="text-brand-blue italic">serious</span> about how their content performs.
            </h2>
            
            <div className="space-y-6 md:space-y-8 mt-12">
              {audiences.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5"
                >
                  <div className="mt-1">{item.icon}</div>
                  <p className="text-brand-text-dim text-base md:text-lg leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="surface-card p-10 md:p-16 rounded-[40px] relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl -z-10" />
            
            <h3 className="text-brand-blue font-bold uppercase tracking-[0.2em] text-xs mb-8">Identity Layer</h3>
            
            <ul className="space-y-6">
              {[
                "Focused on growth, not just output",
                "Intentional with how content is structured and delivered",
                "Committed to consistency and execution",
                "Not just creating—but building something that lasts"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-4 text-white/80 font-medium">
                  <CheckCircle2 size={20} className="text-brand-blue flex-shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-12 border-t border-white/5">
              <p className="text-white/40 italic text-sm md:text-base leading-relaxed">
                "Not built for quick, one-off edits—this is for those investing in content as a long-term growth asset."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
