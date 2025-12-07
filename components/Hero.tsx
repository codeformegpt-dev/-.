import React from 'react';
import { Play, Info } from 'lucide-react';
import { Project } from '../types';

interface HeroProps {
  project: Project;
  onMoreInfo: () => void;
}

const Hero: React.FC<HeroProps> = ({ project, onMoreInfo }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
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
        <div className="max-w-2xl space-y-4">
          {/* Logo / Title */}
          <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-lg tracking-wide leading-tight">
            {project.title}
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-4 text-white text-lg font-medium drop-shadow-md">
            <span className="text-[#46d369] font-bold">98% התאמה</span>
            <span className="text-gray-300">2024</span>
            <span className="border border-gray-400 px-1 text-xs rounded">4K</span>
            <span className="text-gray-300">אמנותי</span>
          </div>
          
          <p className="text-white text-lg md:text-xl drop-shadow-md max-w-lg leading-relaxed text-gray-100">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-3 pt-4">
            <button className="flex items-center gap-2 bg-white hover:bg-white/90 text-black px-6 md:px-8 py-2 md:py-3 rounded font-bold text-lg transition duration-200">
              <Play fill="black" size={24} />
              <span>נגן שואוריל</span>
            </button>
            <button 
                onClick={onMoreInfo}
                className="flex items-center gap-2 bg-[rgba(109,109,110,0.7)] hover:bg-[rgba(109,109,110,0.5)] text-white px-6 md:px-8 py-2 md:py-3 rounded font-bold text-lg transition duration-200 backdrop-blur-sm">
              <Info size={24} />
              <span>מידע נוסף</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;