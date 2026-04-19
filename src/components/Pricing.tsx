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
    name: "Legacy",
    price: "Custom",
    tagline: "Full-scale brand takeover",
    features: ["Agency White Label", "Full YouTube Channel Mgmt", "On-site Directing", "Full Narrative Overhaul"],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-medium mb-6 italic tracking-tighter">INVESTMENT</h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm md:text-base">
            Choose the membership tier that fits your growth trajectory. 
            All plans are subscription-based with no long-term contracts.
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
              } ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-brand-blue px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-2">{plan.name}</h3>
                <p className={`text-xs md:text-sm ${plan.popular ? "text-white/80" : "text-brand-text-dim"}`}>{plan.tagline}</p>
              </div>

              <div className="mb-10 md:mb-12">
                <span className="text-4xl md:text-5xl font-display font-bold tracking-tighter">{plan.price}</span>
                {plan.price !== "Custom" && <span className="opacity-50 text-base md:text-xl ml-1">/mo</span>}
              </div>

              <div className="flex flex-col gap-4 md:gap-5 mb-10 md:mb-12 flex-grow">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-xs md:text-sm">
                    <Check size={16} className={plan.popular ? "text-white" : "text-brand-blue"} />
                    <span className={plan.popular ? "font-medium" : "text-brand-text-dim"}>{f}</span>
                  </div>
                ))}
              </div>

              <a href="#booking" className={`w-full py-5 rounded-full font-black text-xs uppercase tracking-widest transition-all cursor-pointer text-center ${
                plan.popular ? "bg-white text-brand-blue hover:bg-black hover:text-white" : "bg-brand-blue text-white hover:bg-white hover:text-brand-blue"
              }`}>
                Become a Member
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
