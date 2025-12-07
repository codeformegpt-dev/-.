import React from 'react';
import { Play, ArrowDown, Info } from 'lucide-react';
import { Project } from '../types';

interface HeroProps {
  project: Project;
  onMoreInfo: () => void;
  onPlay: () => void;
  onPlaySlideshow: () => void;
}

const Hero: React.FC<HeroProps> = ({ project, onMoreInfo, onPlay }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video - Takes Full Stage */}
      <div className="absolute inset-0 z-0">
        <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster={project.thumbnail}
            className="w-full h-full object-cover"
        >
            <source src="/showreel.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlays for text legibility */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content - Aligned Right/Center Vertical */}
      <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-end px-8 md:px-20 z-10 pointer-events-none">
        
        <div className="text-right pointer-events-auto space-y-6 max-w-xl">
            {/* Name - Subtle */}
            <h3 className="text-white/80 font-serif text-xl md:text-2xl tracking-widest uppercase mb-2">
                Roni Levi
            </h3>
            
            {/* Slogan - Impactful */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl font-serif">
                לתפוס את<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">הרגע</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl font-light pl-10 border-r-2 border-white/30 pr-4 mt-4 leading-relaxed">
                רגעים קטנים של אושר, סיפורים גדולים של אהבה.
            </p>

            {/* Buttons */}
            <div className="flex flex-row-reverse gap-4 pt-8">
                <button 
                    onClick={onPlay}
                    className="bg-white text-black px-8 py-3 rounded text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition flex items-center gap-2 group"
                >
                  <Play size={16} fill="black" /> 
                  <span>נגן שואוריל</span>
                </button>

                 <button 
                    onClick={onMoreInfo}
                    className="bg-gray-500/30 backdrop-blur-md text-white px-8 py-3 rounded text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition flex items-center gap-2"
                >
                  <Info size={16} />
                  <span>עוד פרטים</span>
                </button>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 z-20">
        <ArrowDown size={32} />
      </div>
    </div>
  );
};

export default Hero;