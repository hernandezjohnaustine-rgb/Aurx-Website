import { motion } from "motion/react";

const stats = [
  { label: "Views Generated", value: "25M+" },
  { label: "High Retention Edits", value: "1.2k+" },
  { label: "Clients Served", value: "45+" },
];

export default function Trust() {
  return (
    <section className="py-24 border-y border-brand-border relative bg-brand-surface/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
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

        <div className="mt-24 space-y-12">
          <div className="text-center relative py-8">
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <div className="w-64 h-64 bg-brand-blue/5 blur-[100px] rounded-full" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex flex-col items-center"
            >
              <h3 className="text-xl md:text-4xl font-display font-bold tracking-tight text-white mb-4 leading-none uppercase">
                BUILT TO HELP BRANDS <span className="text-brand-blue italic">SCALE.</span>
              </h3>
              <div className="flex items-center gap-4 w-full">
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
                <p className="text-brand-text-dim text-[10px] md:text-xs uppercase tracking-[0.4em] font-black whitespace-nowrap">
                  Trusted by Industry Leaders
                </p>
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />
              </div>
            </motion.div>
          </div>

          <div className="relative overflow-hidden group">
            {/* Edge Fade Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />

            <motion.div 
              className="flex items-center whitespace-nowrap opacity-80"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 40, // Slightly slower for better readability
                repeat: Infinity, 
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center">
                  {[
                    "ATO PRODUCTIONS",
                    "GOODLIFE STUDIOS",
                    "MONSTER",
                    "VOGUE",
                    "ADOBE",
                    "W.E SOLUTIONS GROUP",
                    "LOUISE CARTER",
                    "HARBOR WRAPS",
                    "MOONLIGHT AUDIO",
                    "SHIFT ROOFING",
                  ].map((brand) => (
                    <div 
                      key={brand} 
                      className="text-2xl md:text-5xl font-bold tracking-tighter px-12 md:px-24 transition-transform hover:scale-105 duration-300 text-white"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
