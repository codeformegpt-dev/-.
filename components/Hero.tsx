import React from 'react';
import { Play, Info, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

interface HeroProps {
  project: Project;
  onMoreInfo: () => void;
  onPlay: () => void; // Plays Showreel Video (Full screen with sound)
  onPlaySlideshow: () => void; // Plays Slideshow (About the photographer images)
}

const Hero: React.FC<HeroProps> = ({ project, onMoreInfo, onPlay, onPlaySlideshow }) => {
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
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[20s] ease-linear"
        >
            <source src="/showreel.mp4" type="video/mp4" />
        </video>
        
         {/* Gradient Overlay - Optimized for video visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-end pb-32 md:pb-40 px-4 md:px-12">
        <div className="max-w-2xl space-y-5 animate-in slide-in-from-left-10 fade-in duration-1000">
          {/* Logo / Title */}
          <div className="flex flex-col gap-2">
             <span className="text-netflixRed tracking-[0.3em] font-bold text-sm uppercase md:text-base">הסיפור שמאחורי העדשה</span>
             <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl tracking-tight leading-none font-serif italic">
                {project.title}
             </h1>
          </div>

          {/* Subtitle / Meta */}
          <div className="flex items-center gap-4 text-white text-base md:text-lg font-medium drop-shadow-md opacity-90">
            <span className="text-[#46d369] font-bold">100% תשוקה</span>
            <span className="text-gray-300">מאז 2015</span>
            <span className="border border-white/40 px-1.5 py-0.5 text-xs rounded uppercase tracking-wider">Cinematography</span>
          </div>
          
          {/* Short Description */}
          <p className="text-white text-lg md:text-xl drop-shadow-lg leading-relaxed text-gray-100 font-light line-clamp-3 md:line-clamp-none max-w-lg">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
            <button 
                onClick={onPlay}
                className="flex items-center gap-3 bg-white hover:bg-white/90 text-black px-8 py-3 rounded md:rounded-md font-bold text-xl transition duration-200 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <Play fill="black" size={26} />
              <span>נגן סרט מלא</span>
            </button>
            <div className="flex gap-4">
                <button 
                    onClick={onPlaySlideshow}
                    className="flex items-center gap-3 bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.5)] text-white px-6 py-3 rounded md:rounded-md font-bold text-xl transition duration-200 backdrop-blur-sm border border-white/10"
                >
                  <ImageIcon size={24} />
                  <span>מאחורי הקלעים</span>
                </button>
                <button 
                    onClick={onMoreInfo}
                    className="flex items-center gap-3 bg-[rgba(109,109,110,0.4)] hover:bg-[rgba(109,109,110,0.3)] text-white px-4 py-3 rounded md:rounded-md font-bold text-xl transition duration-200 backdrop-blur-sm border border-white/10"
                >
                  <Info size={26} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;