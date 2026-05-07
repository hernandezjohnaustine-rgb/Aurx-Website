import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Booking() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting lead:', error);
      setFormState('error');
    }
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-blue font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Contact or Book • Global Scale</div>
            <h2 className="text-4xl md:text-7xl font-display font-medium mb-6 uppercase tracking-tighter">
              Let’s structure your content for <span className="italic text-brand-blue">real performance.</span>
            </h2>
            <p className="text-brand-text-dim max-w-2xl mx-auto text-base md:text-lg">
              Book a strategy call or send us a message below. We’ll analyze your content and goals to find the best AURX support for you.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-3xl md:rounded-[40px] overflow-hidden p-8 md:p-12 glass relative"
          >
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-tight">Direct Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue/50 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue/50 transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/50 mb-2">Message (Optional)</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue/50 transition-colors h-32 resize-none"
                  placeholder="How can we help?"
                />
              </div>
              
              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-brand-blue text-white py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-brand-blue/90 transition-all disabled:opacity-50"
              >
                {formState === 'submitting' ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>

              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-green-400 mt-4 text-sm font-medium"
                  >
                    <CheckCircle2 size={18} />
                    Message sent successfully!
                  </motion.div>
                )}
                {formState === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 text-red-400 mt-4 text-sm font-medium"
                  >
                    <AlertCircle size={18} />
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="surface-card rounded-3xl md:rounded-[40px] overflow-hidden p-1 sm:p-2 md:p-6 glass relative"
          >
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/aurxframeworks-official/30min?hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '600px' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="glow-blue w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
    </section>
  );
}
