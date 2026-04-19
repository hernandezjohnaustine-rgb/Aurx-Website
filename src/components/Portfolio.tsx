import { motion } from "motion/react";
import { Play } from "lucide-react";

const works = [
  { 
    title: "Ads Creative", 
    tag: "High Ticket", 
    video: "https://www.youtube.com/watch?v=Jh0a6UvzQHk", // High-quality 1080p vertical placeholder
    link: "https://www.youtube.com/watch?v=Jh0a6UvzQHk"
  },
  { 
    title: "Documentary Style", 
    tag: "Narrative", 
    video: "https://cdn.pixabay.com/video/2021/09/14/88562-605809707_large.mp4",
    link: "#"
  },
  { 
    title: "Short-Form Loop", 
    tag: "Viral", 
    video: "https://cdn.pixabay.com/video/2024/01/24/197940-906060136_large.mp4",
    link: "#"
  },
  { 
    title: "Motion VFX Showcase", 
    tag: "3D Motion", 
    video: "https://cdn.pixabay.com/video/2021/04/14/71120-538183186_large.mp4",
    link: "#"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-brand-deep/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-medium mb-6">SELECTED WORKS</h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm md:text-base">
            Our high-performance edits aren't just seen—they're felt. Watch our latest engine executions in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {works.map((work, index) => {
            const isYouTube = work.video.includes('youtube.com') || work.video.includes('youtu.be');
            let videoSrc = work.video;

            if (isYouTube) {
              let videoId = '';
              // Handle standard watch URLs
              if (work.video.includes('v=')) {
                videoId = work.video.split('v=')[1]?.split('&')[0];
              } 
              // Handle shorts
              else if (work.video.includes('shorts/')) {
                videoId = work.video.split('shorts/')[1]?.split('?')[0];
              } 
              // Handle direct IDs or youtu.be
              else {
                videoId = work.video.split('/').pop()?.split('?')[0] || '';
              }
              
              videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&vq=hd1080`;
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
                className="group relative h-[350px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer block"
              >
                {/* Background Media */}
                <div className="absolute inset-0 w-full h-full">
                  {isYouTube ? (
                    <iframe
                      src={videoSrc}
                      className="w-full h-full object-cover pointer-events-none scale-[1.5]" // Scale to hide borders/branding
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
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
            <button className="px-8 py-4 glass rounded-full hover:bg-white/10 transition-colors uppercase tracking-[0.2em] text-xs font-bold">
                View Archives
            </button>
        </div>
      </div>
    </section>
  );
}
