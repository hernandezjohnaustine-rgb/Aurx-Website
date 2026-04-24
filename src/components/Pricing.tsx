import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Check } from "lucide-react";
import { MouseEvent } from "react";

const plans = [
  {
    name: "Standard",
    subtitle: "FOR SCALING CREATORS",
    price: "$1,999",
    period: "/mo",
    features: [
      "10 Short-form Edits",
      "Viral Strategy Hook",
      "3 Rounds of Revisions"
    ],
    buttonText: "BOOK A CALL",
    highlight: false
  },
  {
    name: "Premium",
    subtitle: "OUR MOST POPULAR ENGINE",
    price: "$2,499",
    period: "/mo",
    features: [
      "8 Short-form Edits",
      "Ads Style",
      "Custom Motion Graphics",
      "5-7 Revisions",
      "Dedicated Asset Manager"
    ],
    buttonText: "BOOK A CALL",
    highlight: true,
    badge: "MOST POPULAR"
  },
  {
    name: "Per Video",
    subtitle: "PAY-AS-YOU-GO PERFORMANCE",
    isCustom: true,
    tiers: [
      { name: "Standard", price: "$249", description: "Ideal for consistent content" },
      { name: "Premium", price: "$349", description: "High-end production & editing" }
    ],
    buttonText: "BOOK A CALL",
    highlight: false
  }
];

function PricingCard({ plan, i }: { plan: typeof plans[0], i: number; key?: string }) {
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
      className={`relative p-8 md:p-12 rounded-[40px] border flex flex-col h-full transition-all duration-500 group overflow-hidden ${
        plan.highlight 
        ? "bg-[#001030] border-brand-blue/50 text-white shadow-xl hover:shadow-brand-blue/20" 
        : "bg-[#020617] border-white/5 text-white hover:border-white/10 shadow-xl hover:shadow-white/5"
      }`}
    >
      {/* Spotlight Effect overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 14, 255, ${plan.highlight ? "0.2" : "0.15"}),
              transparent 80%
            )
          `,
        }}
      />

      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-blue text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest z-20">
          {plan.badge}
        </div>
      )}

      <div className="mb-10 relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold uppercase mb-2">{plan.name}</h3>
        <p className={`text-[10px] font-black tracking-[0.2em] uppercase opacity-70`}>
          {plan.subtitle}
        </p>
      </div>

      {!plan.isCustom ? (
        <div className="mb-12 relative z-10" />
      ) : (
        <div className="flex flex-col gap-4 mb-12 relative z-10">
          {plan.tiers?.map((tier) => (
            <div key={tier.name} className="p-6 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-between group/tier transition-colors hover:bg-white/10">
              <div>
                <h4 className="font-bold text-lg">{tier.name}</h4>
                <p className="text-xs opacity-50">{tier.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!plan.isCustom && (
        <ul className="space-y-6 mb-16 flex-grow relative z-10">
          {plan.features?.map((feature) => (
            <li key={feature} className="flex items-center gap-4 text-sm md:text-base">
              <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? "bg-white/20" : "bg-brand-blue/20"}`}>
                <Check size={12} className={plan.highlight ? "text-white" : "text-brand-blue"} />
              </div>
              <span className="opacity-90">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <a 
        href="#booking"
        className={`w-full py-5 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all text-center relative z-10 ${
          plan.highlight 
          ? "bg-white text-brand-blue hover:bg-white/90" 
          : "bg-brand-blue text-white hover:bg-brand-blue/90"
        }`}
      >
        {plan.buttonText}
      </a>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="services-pricing" className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <a href="#services" className="inline-block group">
            <h2 className="text-5xl md:text-8xl font-display font-medium italic text-white mb-8 uppercase tracking-tighter group-hover:text-brand-blue transition-colors">
              SERVICES
            </h2>
          </a>
          <p className="text-brand-text-dim text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Choose the membership tier that fits your growth trajectory. All plans are designed for high-end retention and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} i={i} />
          ))}
        </div>
      </div>
      
      {/* Background decoration matching the vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      </div>
    </section>
  );
}
