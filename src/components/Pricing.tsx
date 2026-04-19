import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "$1,999",
    tagline: "For scaling creators",
    features: ["10 Short-form Edits", "Viral Strategy Hook", "3 Rounds of Revisions"],
    popular: false,
  },
  {
    name: "Premium",
    price: "$2,499",
    tagline: "Our most popular engine",
    features: [
      "8 Short-form Edits", 
      "Ads Style", 
      "Custom Motion Graphics",
      "5-7 Revisions",
      "Dedicated Asset Manager"
    ],
    popular: true,
  },
  {
    name: "Per Video",
    price: "Pricing",
    tagline: "Pay-as-you-go performance",
    features: [
      { name: "Standard", price: "$249", desc: "Ideal for consistent content" },
      { name: "Premium", price: "$349", desc: "High-end production & editing" }
    ],
    isList: true,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-medium mb-6 italic tracking-tighter">SERVICES</h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm md:text-base">
            Choose the membership tier that fits your growth trajectory. 
            All plans are designed for high-end retention and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[40px] flex flex-col ${
                plan.popular ? "bg-brand-blue text-white lg:scale-105 z-10" : "surface-card text-white border border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-blue px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-2 uppercase tracking-tight">{plan.name}</h3>
                <p className={`text-xs md:text-sm font-bold uppercase tracking-wider ${plan.popular ? "text-white/80" : "text-brand-text-dim"}`}>{plan.tagline}</p>
              </div>

              {!plan.isList ? (
                <>
                  <div className="mb-10 md:mb-12">
                    <span className="text-4xl md:text-5xl font-display font-bold tracking-tighter">{plan.price}</span>
                    <span className="opacity-50 text-base md:text-xl ml-1">/mo</span>
                  </div>

                  <div className="flex flex-col gap-4 md:gap-5 mb-10 md:mb-12 flex-grow">
                    {(plan.features as string[]).map((f) => (
                      <div key={f} className="flex items-center gap-3 text-xs md:text-sm">
                        <Check size={16} className={plan.popular ? "text-white" : "text-brand-blue"} />
                        <span className={plan.popular ? "font-medium" : "text-brand-text-dim"}>{f}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex-grow flex flex-col gap-4 mb-10">
                  {(plan.features as any[]).map((feature) => (
                    <div key={feature.name} className="bg-black/40 border border-white/5 p-6 rounded-2xl flex justify-between items-center group hover:border-brand-blue/30 transition-colors">
                      <div>
                        <div className="text-lg md:text-xl font-bold mb-0.5">{feature.name}</div>
                        <div className="text-xs text-white/40">{feature.desc}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-display font-bold text-brand-blue leading-none">{feature.price}</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-40">per video</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <a href="#booking" className={`w-full py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all cursor-pointer text-center ${
                plan.popular ? "bg-white text-brand-blue hover:bg-black hover:text-white" : "bg-brand-blue text-white hover:bg-white hover:text-brand-blue"
              }`}>
                Book a Call
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
