import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { MouseEvent } from "react";

const works = [
  { 
    title: "Ads Creative Style", 
    tag: "Engineered for conversion", 
    video: "https://www.youtube.com/watch?v=Jh0a6UvzQHk", 
    link: "#"
  },
  { 
    title: "Short-Form Loop", 
    tag: "Optimized for retention", 
    video: "https://www.youtube.com/shorts/lvxyEd_6n7E",
    link: "#"
  },
  { 
    title: "Motion VFX Showcase", 
    tag: "Elevates visual authority", 
    video: "https://www.youtube.com/shorts/8jQ7iuW5S8E",
    link: "#"
  },
  { 
    title: "Clean Short-form", 
    tag: "Delivery with clarity", 
    video: "https://www.youtube.com/shorts/JY0UqxDF_2s",
    link: "#"
  },
];

function WorkCard({ work, index }: { work: typeof works[0], index: number; key?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isYouTube = work.video.includes('youtube.com') || work.video.includes('youtu.be');
  const isShort = work.video.includes('shorts/');
  const isVertical = isShort || work.title.toLowerCase().includes('ads') || work.title.toLowerCase().includes('short-form');
  
  let videoSrc = work.video;
  if (isYouTube) {
    let videoId = '';
    if (work.video.includes('v=')) {
      videoId = work.video.split('v=')[1]?.split('&')[0];
    } else if (isShort) {
      videoId = work.video.split('shorts/')[1]?.split('?')[0];
    } else {
      videoId = work.video.split('/').pop()?.split('?')[0] || '';
    }
    videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&vq=hd2160`;
  }

  return (
    <motion.div
      key={work.title}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover="hover"
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className="group relative h-[400px] sm:h-[500px] md:h-[600px] rounded-[32px] md:rounded-[40px] overflow-hidden block shadow-2xl hover:shadow-brand-blue/20 transition-all duration-500"
    >
      {/* Background Media */}
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none bg-brand-deep"
        variants={{
          hover: { scale: 1.08 }
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {isYouTube ? (
          <div className="w-full h-full overflow-hidden relative">
            <iframe
              src={videoSrc}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-full min-h-full ${
                isVertical ? 'aspect-[9/16] h-[100%] w-auto' : 'aspect-video w-[100%] h-auto'
              } scale-[1.1]`}
              frameBorder="0"
              allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        ) : (
          <video 
            src={work.video}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
      
      {/* Dynamic Spotlight Effect Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 14, 255, 0.2),
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-20 group-hover:opacity-100 transition-opacity" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 z-30">
        <motion.div
          variants={{
            hover: { y: -10 }
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <span className="text-brand-blue font-black uppercase tracking-[0.25em] text-[8px] md:text-[10px] mb-3 block">
            {work.tag}
          </span>
          <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight leading-tight">
            {work.title}
          </h3>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          variants={{
            hover: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-brand-blue group-hover:border-brand-blue transition-all duration-300">
            <Play size={20} className="text-white fill-white ml-1" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-40 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-5xl md:text-8xl font-display font-medium mb-8 uppercase tracking-tighter">SELECTED WORKS</h2>
          <p className="text-brand-text-dim max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A selection of high-performance content across creators, brands, and agencies—focused on clarity, retention, and conversion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {works.map((work, index) => (
            <WorkCard key={work.title} work={work} index={index} />
          ))}
        </div>
        
        <div className="mt-32 text-center">
            <motion.a 
              href="https://f.io/rySJ1SsU" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#000eff",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-black hover:text-white rounded-full uppercase tracking-[0.25em] text-xs font-black cursor-pointer shadow-2xl shadow-blue-900/40 transition-all duration-500"
            >
                View More
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <ArrowRight size={18} />
                </motion.div>
            </motion.a>
        </div>
      </div>

      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
    </section>
  );
}

