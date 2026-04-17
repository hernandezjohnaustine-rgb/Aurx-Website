import { motion } from "motion/react";
import Logo from "@/components/Logo";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="glass px-8 py-4 rounded-full flex items-center gap-12 max-w-7xl w-full justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Logo className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="font-display font-bold text-xl tracking-tighter uppercase">
            AURX<span className="text-brand-blue">FRAMEWORKS</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-4">
          <div className="nav-pill">Agency</div>
          <div className="nav-pill">Content Strategy</div>
          <div className="nav-pill">High-Retention Edits</div>
        </div>

        <a href="#booking" className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-brand-blue hover:text-white transition-all cursor-pointer">
          Book a Call
        </a>
      </div>
    </motion.nav>
  );
}
