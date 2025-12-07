import React from 'react';
import { Play, Info } from 'lucide-react';
import { Project } from '../types';

interface HeroProps {
  project: Project;
  onMoreInfo: () => void;
  onPlay: () => void; // Plays Showreel Video (Full screen with sound)
  onPlaySlideshow: () => void; // Plays Slideshow (About the photographer images) - kept for compatibility but secondary button calls onMoreInfo
}

const Hero: React.FC<HeroProps> = ({ project, onMoreInfo, onPlay }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden font-sans group">
      {/* Background Video (Muted Loop) */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster={project.thumbnail}
            className="w-full h-full object-cover scale-105 transition-transform duration-[20s] ease-linear"
        >
            <source src="/showreel.mp4" type="video/mp4" />
        </video>
        
         {/* Gradient Overlay - Lighter to show more video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-end pb-24 md:pb-32 px-4 md:px-12">
        <div className="max-w-xl space-y-6 animate-in slide-in-from-left-10 fade-in duration-1000">
          
          {/* Logo / Title - Minimalist */}
          <h1 className="text-6xl md:text-9xl font-black text-white drop-shadow-2xl tracking-tight leading-none font-serif italic opacity-95">
            {project.title}
          </h1>
          
          {/* Short Description */}
          <p className="text-white text-lg md:text-2xl drop-shadow-lg leading-relaxed text-gray-100 font-light max-w-lg">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-4 pt-2">
            <button 
                onClick={onPlay}
                className="flex items-center gap-3 bg-white hover:bg-white/90 text-black px-6 py-2.5 md:px-8 md:py-3 rounded md:rounded-md font-bold text-lg md:text-xl transition duration-200 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <Play fill="black" size={24} />
              <span>נגן שואוריל</span>
            </button>
            
            <button 
                onClick={onMoreInfo}
                className="flex items-center gap-3 bg-[rgba(109,109,110,0.6)] hover:bg-[rgba(109,109,110,0.4)] text-white px-6 py-2.5 md:px-8 md:py-3 rounded md:rounded-md font-bold text-lg md:text-xl transition duration-200 backdrop-blur-md border border-white/20"
            >
              <Info size={24} />
              <span>הכר את הצלם</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;