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

        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Placeholder logos - using text for branding */}
           <div className="text-2xl font-bold tracking-tighter">NIKE</div>
           <div className="text-2xl font-bold tracking-tighter italic">REDBULL</div>
           <div className="text-2xl font-bold tracking-tighter">MONSTER</div>
           <div className="text-2xl font-bold tracking-tighter italic font-display underline">VOGUE</div>
           <div className="text-2xl font-bold tracking-tighter italic">ADOBE</div>
        </div>
      </div>
    </section>
  );
}
