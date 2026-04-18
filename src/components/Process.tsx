import { motion } from "motion/react";

const framework = [
  { char: "A", title: "Attention", desc: "Psychology-based hooks that freeze the scroll." },
  { char: "U", title: "User Focus", desc: "Tailoring every cut to your specific audience's vibe." },
  { char: "R", title: "Retention", desc: "Fast-pacing and storytelling to keep eyes glued to the screen." },
  { char: "X", title: "eXecution", desc: "Final cinematic polish and strategic sound design." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-black border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16 md:mb-32 text-center">
            <div className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-4">The Methodology</div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-medium tracking-tighter">THE AURX FRAMEWORK</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-12">
          {framework.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="text-[80px] md:text-[120px] font-display font-black text-white/5 leading-none absolute -top-8 -left-4 md:-top-12 md:-left-6 group-hover:text-brand-blue/10 transition-colors">
                {step.char}
              </div>
              
              <div className="relative z-10 pt-12 border-t border-brand-border group-hover:border-brand-blue transition-colors h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full border border-brand-blue flex items-center justify-center font-bold text-brand-blue text-sm">
                    {step.char}
                  </div>
                  <h3 className="text-xl font-display font-semibold group-hover:text-brand-blue transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-brand-text-dim leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Flow Line */}
        <div className="mt-32 w-full h-[1px] bg-white/5 relative hidden lg:block">
            <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 2, ease: "easeInOut" }}
               className="absolute top-0 left-0 h-full bg-brand-blue shadow-[0_0_20px_#0066FF]"
            />
        </div>
      </div>
    </section>
  );
}
