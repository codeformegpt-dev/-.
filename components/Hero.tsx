import React from 'react';
import { Play, Info } from 'lucide-react';
import { Project } from '../types';

interface HeroProps {
  project: Project;
  onMoreInfo: () => void;
  onPlay: () => void; // New prop
}

const Hero: React.FC<HeroProps> = ({ project, onMoreInfo, onPlay }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image (Parallax could be added but static is fine for stability) */}
      <div className="absolute top-0 left-0 w-full h-full z-0 animate-ken-burns-slow">
        <img 
            src={project.thumbnail} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-100"
        />
         {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col justify-center px-4 md:px-12 pt-20">
        <div className="max-w-3xl space-y-6">
          {/* Logo / Title */}
          <h1 className="text-5xl md:text-8xl font-black text-white drop-shadow-2xl tracking-tight leading-none">
            {project.title}
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-4 text-white text-lg font-medium drop-shadow-md">
            <span className="text-[#46d369] font-bold">99% התאמה ללב</span>
            <span className="text-gray-300">2024</span>
            <span className="border border-gray-400 px-1 text-xs rounded">4K</span>
            <span className="text-gray-300">דוקומנטרי</span>
          </div>
          
          <p className="text-white text-lg md:text-2xl drop-shadow-lg max-w-xl leading-relaxed text-gray-100 font-light">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <button 
                onClick={onPlay}
                className="flex items-center gap-3 bg-white hover:bg-white/90 text-black px-8 py-3 rounded md:rounded-md font-bold text-xl transition duration-200 transform hover:scale-105"
            >
              <Play fill="black" size={28} />
              <span>הפעל מצגת</span>
            </button>
            <button 
                onClick={onMoreInfo}
                className="flex items-center gap-3 bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.5)] text-white px-8 py-3 rounded md:rounded-md font-bold text-xl transition duration-200 backdrop-blur-sm"
            >
              <Info size={28} />
              <span>מידע נוסף</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;