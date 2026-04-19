import { motion } from "motion/react";
import { Play } from "lucide-react";

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

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-brand-deep/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-medium mb-6 uppercase">SELECTED WORKS</h2>
          <p className="text-white/40 max-w-2xl mx-auto text-sm md:text-base">
            A selection of work across creators, brands, and agencies—focused on clarity, retention, and performance. 
            Each piece follows the AURX Framework—built to guide attention from the first second to the final message.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {works.map((work, index) => {
            const isYouTube = work.video.includes('youtube.com') || work.video.includes('youtu.be');
            const isShort = work.video.includes('shorts/');
            // The "Ads Creative Style" is also vertical
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
              
              // Use hd2160 for maximum bitrate headroom on PC
              videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&vq=hd2160`;
            }

            return (
              <motion.a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                key={work.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer block"
              >
                {/* Background Media */}
                <div className="absolute inset-0 w-full h-full pointer-events-none bg-brand-deep">
                  {isYouTube ? (
                    <div className="w-full h-full overflow-hidden relative">
                      <iframe
                        src={videoSrc}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-full min-h-full ${
                          isVertical ? 'aspect-[9/16] h-[100%] w-auto' : 'aspect-video w-[100%] h-auto'
                        } scale-[1.05]`}
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
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <span className="text-brand-blue font-bold uppercase tracking-widest text-[10px] mb-2">
                    {work.tag}
                  </span>
                  <h3 className="text-xl font-display font-medium text-white">
                    {work.title}
                  </h3>
                </div>
              </motion.a>
            );
          })}
        </div>
        
        <div className="mt-24 text-center">
            <a 
              href="https://f.io/qp_cCP32" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 glass rounded-full hover:bg-white/10 transition-colors uppercase tracking-[0.2em] text-xs font-bold cursor-pointer"
            >
                View More
            </a>
        </div>
      </div>
    </section>
  );
}
