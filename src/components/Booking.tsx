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
    <section id="booking" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Final Step</div>
            <h2 className="text-5xl md:text-7xl font-display font-medium mb-6 uppercase tracking-tighter">
              BOOK YOUR <span className="italic">STRATEGY</span> CALL
            </h2>
            <p className="text-brand-text-dim max-w-xl mx-auto text-lg">
              Select a time for your onboarding consultation. We'll discuss your brand, your goals, and how the AURX framework can scale your retention.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="surface-card rounded-[40px] overflow-hidden p-2 md:p-6 glass relative"
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
