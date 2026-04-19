import { motion } from "motion/react";
import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <div className="glass px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full flex items-center gap-2 sm:gap-4 md:gap-12 max-w-7xl w-full justify-between overflow-hidden">
        <a href="#" className="flex items-center gap-2 group flex-shrink-0">
          <Logo className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
          <span className="font-display font-bold text-[11px] sm:text-base md:text-xl tracking-tighter uppercase whitespace-nowrap">
            AURX<span className="text-brand-blue">FRAMEWORKS</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-4">
          <a href="#services" className="nav-pill">About Us</a>
          <a href="#portfolio" className="nav-pill">Portfolio</a>
          <a href="#pricing" className="nav-pill">Services</a>
        </div>

        <a href="#booking" className="bg-white text-black px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-[10px] sm:text-sm hover:bg-brand-blue hover:text-white transition-all cursor-pointer whitespace-nowrap">
          Book a Call
        </a>
      </div>
    </motion.nav>
  );
}
