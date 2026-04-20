/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Reality from "@/components/Reality";

export default function App() {
  return (
    <div className="relative selection:bg-brand-blue/30 selection:text-white overflow-x-hidden">
      {/* Background Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] contrast-150 grayscale mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Trust />
        <Services />
        <WhoThisIsFor />
        <Process />
        <Reality />
        <Portfolio />
        <Pricing />
        <Booking />
      </main>

      <Footer />

      {/* Background Gradients */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[120vh] bg-[radial-gradient(circle_at_50%_0%,_#051025_0%,_#000000_70%)] opacity-70" />
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] bg-brand-blue/5 blur-[120px] rounded-full"
        />
      </div>
    </div>
  );
}
