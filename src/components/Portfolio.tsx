import { motion } from "motion/react";
import { Play } from "lucide-react";

const works = [
  { 
    title: "Ads Creative", 
    tag: "High Ticket", 
    img: "https://drive.google.com/file/d/124ovNksRABW8WLwNwQCD1M7IqkSkZEau/view?usp=drive_link",
    link: "#https://f.io/t157Zd6l"
  },
  { 
    title: "Documentary Style", 
    tag: "Narrative", 
    img: "https://picsum.photos/seed/edit2/800/1000",
    link: "#"
  },
  { 
    title: "Short-Form Loop", 
    tag: "Viral", 
    img: "https://picsum.photos/seed/edit3/800/1000",
    link: "#"
  },
  { 
    title: "Motion VFX Showcase", 
    tag: "3D Motion", 
    img: "https://picsum.photos/seed/edit4/800/1000",
    link: "#"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-brand-deep/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-medium mb-6">SELECTED WORKS</h2>
          <p className="text-white/40 max-w-xl mx-auto">
            A small glimpse into the high-performance edits we deliver to our exclusive roster of clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img 
                src={work.img} 
                alt={work.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 blur-[1px] group-hover:blur-0" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="text-brand-blue font-bold uppercase tracking-widest text-[10px] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  {work.tag}
                </span>
                <h3 className="text-2xl font-display font-medium text-white mb-6 translate-y-4 group-hover:translate-y-0 transition-all">
                  {work.title}
                </h3>
                
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                  <Play size={16} fill="white" className="ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
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
