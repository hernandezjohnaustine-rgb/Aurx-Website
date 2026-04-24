import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Zap, Tv, Layers, Sparkles, Target, TrendingUp, Maximize, Play } from "lucide-react";
import { MouseEvent } from "react";

const capabilities = [
  {
    title: "ATTENTION-FIRST EDITING",
    description: "Engineering hooks and visual pacing that stops the scroll and demands engagement from the very first frame.",
    icon: <Zap size={24} />,
    color: "brand-blue"
  },
  {
    title: "RETENTION SYSTEMS",
    description: "Layered structure and narrative momentum designed to keep viewers held until the final message is delivered.",
    icon: <Target size={24} />,
    color: "brand-blue"
  },
  {
    title: "STRATEGIC PACING",
    description: "Calculated timing and rhythm that aligns with current attention spans across every digital touchpoint.",
    icon: <TrendingUp size={24} />,
    color: "brand-blue"
  },
  {
    title: "SCALABLE EXECUTION",
    description: "Framework-based production workflows that maintain premium quality across entire content calendars.",
    icon: <Maximize size={24} />,
    color: "brand-blue"
  }
];

function CapabilityCard({ item, index }: { item: typeof capabilities[0], index: number; key?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group p-8 md:p-10 rounded-[40px] bg-[#020617] border border-white/5 hover:border-brand-blue/40 transition-all duration-500 relative flex flex-col items-start text-left cursor-default shadow-xl hover:shadow-brand-blue/10 overflow-hidden"
    >
      {/* Spotlight Effect overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 14, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
        {item.icon}
      </div>
      <h3 className="text-white font-black text-xs md:text-sm tracking-[0.2em] uppercase mb-4 relative z-10">
        {item.title}
      </h3>
      <p className="text-brand-text-dim text-sm md:text-base leading-relaxed relative z-10">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <div className="max-w-3xl">
              <div className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Capabilities</div>
              <h2 className="text-4xl md:text-7xl font-display font-medium leading-[1.1] mb-8 uppercase tracking-tighter">
                AURX IS A <br /> 
                <span className="italic text-brand-blue">PERFORMANCE-DRIVEN</span> <br /> 
                CONTENT SYSTEM.
              </h2>
              <p className="text-white font-medium text-lg md:text-3xl mb-12 leading-tight">
                Not just editing—but structured execution designed to capture attention, hold interest, and deliver your message with intent.
              </p>
              <div className="h-px w-24 bg-brand-blue/30 mx-auto" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {capabilities.map((item, index) => (
            <CapabilityCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>

      <div className="glow-blue w-[800px] h-[800px] -bottom-[400px] -right-[200px] opacity-20" />
    </section>
  );
}
