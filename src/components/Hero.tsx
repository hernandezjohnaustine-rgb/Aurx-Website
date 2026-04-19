import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden px-6">
      {/* Background Decorative Elements */}
      <div className="glow-blue w-[600px] h-[600px] top-[-100px] left-[-100px]" />
      <div className="glow-blue w-[400px] h-[400px] bottom-[100px] right-[-50px] opacity-40" />
      
      <div className="max-w-5xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/60">
            Accepting New Clients for Q2
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.95] mb-8 text-gradient"
        >
          WHERE ATTENTION <br /> 
          <span className="italic flex items-center justify-center gap-2 sm:gap-4">
            MEETS
            <div className="h-[2px] w-8 sm:w-16 md:w-24 lg:w-32 bg-white/20" />
          </span>
          EXECUTION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-brand-text-dim text-sm sm:text-base md:text-xl lg:text-2xl max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-4 sm:px-0"
        >
          We turn raw content into high-retention cinematic assets that drive millions in revenue for top-tier creators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a href="#booking" className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-blue text-white px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-[0_0_40px_rgba(0,102,255,0.4)] transition-all cursor-pointer">
            GET STARTED 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="#portfolio" className="flex items-center justify-center gap-3 text-white/70 hover:text-white transition-colors cursor-pointer px-4 sm:px-6 md:px-8 py-4 md:py-5 text-sm sm:text-base">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group">
              <Play size={12} fill="white" className="ml-0.5 group-hover:scale-110 transition-transform" />
            </div>
            VIEW PORTFOLIO
          </a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] glass p-4 rounded-2xl hidden lg:block transform rotate-6 border-brand-blue/20"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-12 h-2 bg-white/20 rounded-full" />
        </div>
        <div className="w-32 h-20 bg-brand-deep rounded-lg flex items-center justify-center">
           <Play size={24} className="text-white/20" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[15%] left-[5%] glass p-6 rounded-2xl hidden lg:block transform -rotate-12 border-brand-blue/20"
      >
        <div className="text-xs font-bold text-white/40 mb-1">RETENTION RATE</div>
        <div className="text-3xl font-display font-medium">92%</div>
      </motion.div>
    </section>
  );
}
