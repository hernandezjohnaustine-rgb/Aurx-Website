import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Target, TrendingUp, Users, Play } from "lucide-react";
import { MouseEvent } from "react";

const audiences = [
  {
    icon: <Users className="text-brand-blue" />,
    title: "Content creators",
    description: "who want to turn attention into real engagement and growth"
  },
  {
    icon: <Target className="text-brand-blue" />,
    title: "Coaches and course creators",
    description: "who need their message to land clearly and consistently"
  },
  {
    icon: <Play className="text-brand-blue" />,
    title: "YouTubers",
    description: "focused on retention, storytelling, and long-term audience building"
  },
  {
    icon: <TrendingUp className="text-brand-blue" />,
    title: "Content producers and agencies",
    description: "looking to scale output while maintaining high-quality execution"
  }
];

function AudienceCard({ item, i }: { item: typeof audiences[0], i: number; key?: any }) {
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
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="surface-card p-8 md:p-12 rounded-[32px] md:rounded-[48px] border-white/5 flex flex-col gap-6 group hover:border-brand-blue/40 transition-all duration-500 shadow-xl hover:shadow-brand-blue/10 cursor-default relative overflow-hidden"
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

      <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform duration-500 relative z-10">
        {item.icon}
      </div>
      <p className="text-white text-lg md:text-2xl leading-tight tracking-tight relative z-10">
        <span className="font-bold">{item.title}</span>{" "}
        <span className="font-light text-white/70">{item.description}</span>
      </p>
    </motion.div>
  );
}

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
            <AudienceCard key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
