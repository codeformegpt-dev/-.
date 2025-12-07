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
    <div className="relative h-screen w-full overflow-hidden flex items-end justify-start bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster={project.thumbnail}
            className="w-full h-full object-cover opacity-70"
        >
            <source src="/showreel.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain"></div>
        {/* Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Content - Bottom Left Editorial Style */}
      <div className="relative z-10 w-full max-w-4xl px-6 md:px-20 pb-20 md:pb-24 space-y-6">
        
        {/* Title */}
        <div className="space-y-2">
            <p className="text-white/70 font-sans tracking-[0.3em] text-xs md:text-sm uppercase animate-in slide-in-from-left-10 duration-700">
                The Portfolio of
            </p>
            <h1 className="text-6xl md:text-9xl font-serif font-black text-white leading-[0.85] tracking-tighter select-none drop-shadow-2xl animate-in slide-in-from-bottom-10 duration-1000 delay-100">
                RONI LEVI
            </h1>
        </div>
        
        {/* Description - Personal & Warm */}
        <p className="text-lg md:text-xl font-light text-gray-300 max-w-lg leading-relaxed animate-in fade-in duration-1000 delay-300">
            לתפוס את הרגעים שבין לבין. החיוך הנבוך, הדמעה השקופה, הצחוק המתגלגל. 
            צילום שמספר את הסיפור האמיתי שלכם.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            <button 
                onClick={onPlay}
                className="group relative px-8 py-4 overflow-hidden rounded bg-white text-black transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <span className="relative flex items-center gap-3 font-bold tracking-widest text-sm uppercase">
                <Play size={16} fill="currentColor" /> Watch Showreel
              </span>
            </button>

             <button 
                onClick={onMoreInfo}
                className="group flex items-center gap-2 text-white/80 text-sm hover:text-white transition tracking-widest uppercase pb-1"
            >
              <span className="border-b border-transparent group-hover:border-white transition-all duration-300">הסיפור שלי</span>
            </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 right-6 md:right-12 animate-bounce text-white/30 hidden md:block">
        <ArrowDown size={24} />
      </div>
    </div>
  );
};

export default Hero;