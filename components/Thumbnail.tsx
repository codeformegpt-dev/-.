import React, { useState, useRef, useEffect } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Project } from '../types';

interface ThumbnailProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  onPlay: (project: Project) => void; 
}

const Thumbnail: React.FC<ThumbnailProps> = ({ project, onOpenModal, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovered(true);
      }, 400); // Slightly faster response
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(false);
  };

  useEffect(() => {
    return () => {
        if(hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    }
  }, []);

  return (
    <div
      className="relative w-[160px] sm:w-[240px] md:w-[320px] h-[90px] sm:h-[135px] md:h-[180px] flex-shrink-0 cursor-pointer transition-all duration-300 mx-1 mb-1 z-0 hover:z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(project)}
    >
        <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover rounded-md"
            loading="lazy"
        />

      {/* Hover Popup Card */}
      {isHovered && (
        <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#181818] rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-[100] overflow-hidden animate-in fade-in zoom-in duration-300 origin-center scale-110"
            style={{ 
                width: '140%',
                top: '-180px', // Pulled up higher
                height: '480px', // Fixed tall height
                display: 'flex',
                flexDirection: 'column'
            }}
        >
          {/* Media Top */}
          <div className="relative h-48 w-full shrink-0">
            <img
              src={project.images[1] || project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover animate-ken-burns"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-90" />
             <div className="absolute bottom-3 left-4 w-full pr-4 text-left">
                <h4 className="text-white font-serif font-black text-2xl drop-shadow-md leading-none">{project.title}</h4>
             </div>
          </div>

          {/* Controls & Metadata */}
          <div className="p-4 space-y-3 bg-[#181818] flex-grow flex flex-col">
            {/* Action Bar */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button 
                    onClick={(e) => { e.stopPropagation(); onPlay(project); }}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition text-black shadow-lg"
                >
                  <Play fill="black" size={14} className="ml-0.5" />
                </button>
                <button className="w-8 h-8 rounded-full border border-gray-500 hover:border-white text-gray-300 hover:text-white flex items-center justify-center transition">
                  <Plus size={16} />
                </button>
                <button className="w-8 h-8 rounded-full border border-gray-500 hover:border-white text-gray-300 hover:text-white flex items-center justify-center transition">
                  <ThumbsUp size={14} />
                </button>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
                className="w-8 h-8 rounded-full border border-gray-500 hover:border-white text-white flex items-center justify-center transition ml-auto bg-black/20"
              >
                <ChevronDown size={16} />
              </button>
            </div>

            {/* Info Text */}
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
              <span className="text-green-400 font-bold">{project.match}</span>
              <span className="border border-gray-600 px-1 py-0.5 rounded text-[10px] text-gray-300 uppercase">{project.resolution}</span>
              <span>{project.duration}</span>
            </div>

             {/* Tags */}
             <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-white text-[10px] flex items-center bg-white/10 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="text-sm text-gray-300 leading-relaxed dir-rtl text-right overflow-y-auto pr-1">
                {project.description}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;