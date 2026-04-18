import { motion } from "motion/react";
import { Play } from "lucide-react";

const works = [
  { 
    title: "Ads Creative", 
    tag: "High Ticket", 
    video: "https://cdn.pixabay.com/video/2023/11/05/187901-881515250_tiny.mp4",
    link: "https://f.io/t157Zd6l"
  },
  { 
    title: "Documentary Style", 
    tag: "Narrative", 
    video: "https://cdn.pixabay.com/video/2021/09/14/88562-605809707_tiny.mp4",
    link: "#"
  },
  { 
    title: "Short-Form Loop", 
    tag: "Viral", 
    video: "https://cdn.pixabay.com/video/2024/01/24/197940-906060136_tiny.mp4",
    link: "#"
  },
  { 
    title: "Motion VFX Showcase", 
    tag: "3D Motion", 
    video: "https://cdn.pixabay.com/video/2021/04/14/71120-538183186_tiny.mp4",
    link: "#"
  },
];

export default function Portfolio() {
  // Duplicate works to create a seamless infinite loop
  const duplicatedWorks = [...works, ...works, ...works];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-brand-deep/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center">
        <h2 className="text-4xl md:text-7xl font-display font-medium mb-6">SELECTED WORKS</h2>
        <p className="text-white/40 max-w-xl mx-auto text-sm md:text-base">
          Our high-performance edits aren't just seen—they're felt. Watch our latest engine executions in real-time.
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Gradients on edges to fade the items */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{
            x: [0, -1800], // Adjust based on content width
          }}
          transition={{
            x: {
              duration: 40, // Slower pace for video visibility
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex gap-6 whitespace-nowrap py-4 pr-6"
        >
          {duplicatedWorks.map((work, index) => (
            <motion.a
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              key={`${work.title}-${index}`}
              whileHover={{ scale: 1.02 }}
              className="group relative w-[280px] h-[500px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer block flex-shrink-0"
            >
              {/* Autoplaying Background Video */}
              <video 
                src={work.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-brand-blue font-bold uppercase tracking-widest text-[10px] mb-2 scale-90 origin-left">
                  {work.tag}
                </span>
                <h3 className="text-xl font-display font-medium text-white mb-2 group-hover:text-brand-blue transition-colors">
                  {work.title}
                </h3>
                
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      <div className="mt-24 text-center px-6">
          <button className="px-8 py-4 glass rounded-full hover:bg-white/10 transition-colors uppercase tracking-[0.2em] text-xs font-bold">
              View Archives
          </button>
      </div>
    </section>
  );
}
