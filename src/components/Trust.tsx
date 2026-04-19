import { motion } from "motion/react";

const stats = [
  { label: "Views Generated", value: "25M+" },
  { label: "High Retention Edits", value: "1.2k+" },
  { label: "Client Satisfied", value: "98%" },
  { label: "Brand Partners", value: "45+" },
];

export default function Trust() {
  return (
    <section className="py-24 border-y border-brand-border relative bg-brand-surface/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl md:text-5xl font-display font-bold text-brand-blue tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text-dim">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 relative overflow-hidden group">
          {/* Edge Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/80 to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex items-center gap-12 md:gap-32 whitespace-nowrap opacity-30 grayscale hover:grayscale-0 transition-opacity hover:opacity-60 duration-500"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <div className="flex items-center gap-12 md:gap-32 pr-12 md:pr-32">
              <div className="text-2xl md:text-3xl font-bold tracking-tighter">ATO PRODUCTIONS</div>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter italic">GOODLIFE STUDIOS</div>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter">MONSTER</div>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter italic font-display underline">VOGUE</div>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter italic">ADOBE</div>
            </div>
            <div className="flex items-center gap-12 md:gap-32 pr-12 md:pr-32">
              <div className="text-2xl md:text-3xl font-bold tracking-tighter">ATO PRODUCTIONS</div>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter italic">GOODLIFE STUDIOS</div>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter">MONSTER</div>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter italic font-display underline">VOGUE</div>
              <div className="text-2xl md:text-3xl font-bold tracking-tighter italic">ADOBE</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
