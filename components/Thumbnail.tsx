import React, { useState, useRef, useEffect } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Project } from '../types';

interface ThumbnailProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ project, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 500); // 500ms delay to simulate "intent"
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(false);
  };

  // Ensure cleanup on unmount
  useEffect(() => {
    return () => {
        if(hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    }
  }, []);

  return (
    <div
      className="relative w-[280px] sm:w-[320px] md:w-[380px] h-[160px] sm:h-[180px] md:h-[215px] flex-shrink-0 cursor-pointer transition-all duration-300 mx-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        {/* Placeholder for Layout Stability */}
        <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover rounded-md"
        />

      {/* Hover Popup Card */}
      {isHovered && (
        <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-auto bg-[#181818] rounded-md shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in duration-300 origin-center"
            style={{ top: '-40%', boxShadow: '0 10px 40px rgba(0,0,0,0.7)' }}
        >
          {/* Media Top */}
          <div className="relative h-48">
            <img
              src={project.images[1] || project.thumbnail} // Swap image on hover to simulate motion
              alt={project.title}
              className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent opacity-80" />
             <div className="absolute bottom-4 left-4">
                <h4 className="text-white font-bold drop-shadow-md">{project.title}</h4>
             </div>
          </div>

          {/* Controls & Metadata */}
          <div className="p-4 space-y-3">
            {/* Action Bar */}
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button 
                    onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition">
                  <Play fill="black" size={14} className="ml-0.5" />
                </button>
                <button className="w-8 h-8 rounded-full border-2 border-gray-500 hover:border-white text-white flex items-center justify-center transition">
                  <Plus size={16} />
                </button>
                <button className="w-8 h-8 rounded-full border-2 border-gray-500 hover:border-white text-white flex items-center justify-center transition">
                  <ThumbsUp size={16} />
                </button>
              </div>
              <button 
                onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
                className="w-8 h-8 rounded-full border-2 border-gray-500 hover:border-white text-white flex items-center justify-center transition ml-auto"
              >
                <ChevronDown size={18} />
              </button>
            </div>

            {/* Info Text */}
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
              <span className="text-[#46d369]">98% התאמה</span>
              <span className="border border-gray-500 px-1 rounded text-[10px]">4K</span>
              <span>{project.duration}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-white text-[11px] flex items-center">
                  {i > 0 && <span className="w-1 h-1 bg-gray-500 rounded-full mx-1.5" />}
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;