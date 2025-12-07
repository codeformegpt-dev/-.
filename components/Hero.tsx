import React from 'react';
import { Play, ArrowDown } from 'lucide-react';
import { Project } from '../types';

interface HeroProps {
  project: Project;
  onMoreInfo: () => void;
  onPlay: () => void;
  onPlaySlideshow: () => void;
}

const Hero: React.FC<HeroProps> = ({ project, onMoreInfo, onPlay }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster={project.thumbnail}
            className="w-full h-full object-cover opacity-60"
        >
            <source src="/showreel.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain"></div>
      </div>

      {/* Content - Centered Editorial Style */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 w-full px-4">
        
        {/* Massive Blend Mode Title */}
        <div className="relative mix-blend-overlay">
           <h1 className="text-[15vw] leading-[0.8] font-serif font-bold text-white tracking-tighter opacity-90 select-none">
             RONI LEVI
           </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-light tracking-[0.3em] text-white/80 uppercase">
            Capturing Life's Cinema
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-8">
            <button 
                onClick={onPlay}
                className="group relative px-8 py-3 overflow-hidden rounded-full bg-transparent border border-white/30 text-white transition-all hover:bg-white hover:text-black hover:scale-105"
            >
              <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative flex items-center gap-3 font-bold tracking-widest text-sm uppercase">
                <Play size={14} fill="currentColor" /> Watch Showreel
              </span>
            </button>

             <button 
                onClick={onMoreInfo}
                className="text-white/60 text-sm hover:text-white transition tracking-widest uppercase border-b border-transparent hover:border-white pb-1"
            >
              Discover The Artist
            </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};

export default Hero;