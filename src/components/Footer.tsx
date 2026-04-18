import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="py-16 md:py-20 bg-black border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
          <div className="col-span-1 sm:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6 md:mb-8 group">
              <Logo className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
              <span className="font-display font-bold text-xl md:text-2xl tracking-tighter uppercase">
                AURX<span className="text-brand-blue">FRAMEWORKS</span>
              </span>
            </a>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed mb-6 md:mb-8 text-balance">
              AURX Frameworks is a performance-driven video engineering agency. 
              We don't just edit videos—we build attention assets.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Youtube size={18} /></a>
              <a href="#" className="text-white/40 hover:text-white transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          <div className="pt-4 md:pt-0">
            <h4 className="font-display font-bold text-[10px] md:text-sm uppercase tracking-widest mb-6 md:mb-8 text-white">Agency</h4>
            <ul className="flex flex-col gap-3 md:gap-4 text-xs md:text-sm text-white/40">
              <li><a href="#services" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Archives</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div className="pt-4 md:pt-0">
            <h4 className="font-display font-bold text-[10px] md:text-sm uppercase tracking-widest mb-6 md:mb-8 text-white">Legal</h4>
            <ul className="flex flex-col gap-3 md:gap-4 text-xs md:text-sm text-white/40">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
          <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
            © 2026 AURX FRAMEWORKS LLC. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] text-brand-blue font-bold italic tracking-tighter">
            DESIGNED FOR PERFORMANCE.
          </p>
        </div>
      </div>
    </footer>
  );
}
