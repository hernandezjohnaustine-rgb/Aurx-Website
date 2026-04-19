import { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Booking() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="booking" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-4">30-minute strategy call • No commitment</div>
            <h2 className="text-4xl md:text-7xl font-display font-medium mb-6 uppercase tracking-tighter">
              Let’s structure your content for <span className="italic text-brand-blue">real performance.</span>
            </h2>
            <p className="text-brand-text-dim max-w-2xl mx-auto text-base md:text-lg">
              In this call, we’ll discuss your content, your goals, and where AURX can best support your editing for stronger performance.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="surface-card rounded-3xl md:rounded-[40px] overflow-hidden p-1 sm:p-2 md:p-6 glass relative"
        >
          {/* Subtle accent glow behind widget */}
          <div className="absolute inset-0 bg-brand-blue/5 blur-3xl rounded-full -z-10" />
          
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/hernandezjohnaustine/30min" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="glow-blue w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
    </section>
  );
}
