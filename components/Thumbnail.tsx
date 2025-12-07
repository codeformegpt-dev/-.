import React, { useState, useRef, useEffect } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Project } from '../types';

interface ThumbnailProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  onPlay: (project: Project) => void; // New prop
}

const Thumbnail: React.FC<ThumbnailProps> = ({ project, onOpenModal, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovered(true);
      }, 500);
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
      className="relative w-[160px] sm:w-[240px] md:w-[320px] h-[90px] sm:h-[135px] md:h-[180px] flex-shrink-0 cursor-pointer transition-all duration-300 mx-1 mb-1"
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
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#181818] rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.9)] z-50 overflow-hidden animate-in fade-in zoom-in duration-300 origin-center scale-110"
            style={{ 
                width: '150%',
                top: '-150px', // Pull it up significantly to show description
                minHeight: '400px'
            }}
        >
          {/* Media Top */}
          <div className="relative h-48 w-full group-hover:h-52 transition-all">
            <img
              src={project.images[1] || project.thumbnail} 
              alt={project.title}
              className="w-full h-full object-cover animate-ken-burns"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-90" />
             <div className="absolute bottom-2 left-4 w-full pr-4 text-right">
                <h4 className="text-white font-black text-2xl drop-shadow-md">{project.title}</h4>
             </div>
          </div>

          {/* Controls & Metadata */}
          <div className="p-5 space-y-4 bg-[#181818]">
            {/* Action Bar */}
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <button 
                    onClick={(e) => { e.stopPropagation(); onPlay(project); }}
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition text-black shadow-lg"
                >
                  <Play fill="black" size={18} className="ml-1" />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-gray-500 hover:border-white text-gray-300 hover:text-white flex items-center justify-center transition">
                  <Plus size={20} />
                </button>
                <button className="w-10 h-10 rounded-full border-2 border-gray-500 hover:border-white text-gray-300 hover:text-white flex items-center justify-center transition">
                  <ThumbsUp size={18} />
                </button>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
                className="w-10 h-10 rounded-full border-2 border-gray-500 hover:border-white text-white flex items-center justify-center transition ml-auto bg-black/20"
              >
                <ChevronDown size={20} />
              </button>
            </div>

            {/* Info Text */}
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-400">
              <span className="text-[#46d369] font-bold">{project.match}</span>
              <span className="border border-gray-500 px-1.5 py-0.5 rounded text-xs text-white uppercase">{project.resolution}</span>
              <span>{project.duration}</span>
            </div>

             {/* Tags */}
             <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-white text-xs flex items-center">
                  {i > 0 && <span className="w-1 h-1 bg-gray-500 rounded-full mx-2" />}
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="text-sm text-gray-300 leading-relaxed dir-rtl opacity-90">
                {project.description}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;