import React, { useState, useRef, useEffect } from 'react';
import { Plus, Heart, ChevronDown } from 'lucide-react';
import { Project } from '../types';

interface ThumbnailProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  onPlay: (project: Project) => void; 
}

const Thumbnail: React.FC<ThumbnailProps> = ({ project, onOpenModal, onPlay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slideshowIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const imagesToCycle = project.images && project.images.length > 0 ? project.images : [project.thumbnail];

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsHovered(true);
      }, 500); 
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (slideshowIntervalRef.current) clearInterval(slideshowIntervalRef.current);
    setIsHovered(false);
    setCurrentImgIndex(0); // Reset slideshow
  };

  useEffect(() => {
    if (isHovered && imagesToCycle.length > 1) {
        slideshowIntervalRef.current = setInterval(() => {
            setCurrentImgIndex(prev => (prev + 1) % imagesToCycle.length);
        }, 1500); // Change image every 1.5s
    }
    return () => {
        if (slideshowIntervalRef.current) clearInterval(slideshowIntervalRef.current);
    };
  }, [isHovered, imagesToCycle.length]);

  return (
    <div
      className="relative w-[160px] sm:w-[240px] md:w-[320px] h-[90px] sm:h-[135px] md:h-[180px] flex-shrink-0 cursor-pointer transition-all duration-300 mx-1 mb-1 z-0 hover:z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(project)}
    >
        {/* Static Thumbnail */}
        <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover rounded-sm"
            loading="lazy"
        />

      {/* Hover Popup Card */}
      {isHovered && (
        <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#181818] rounded-md shadow-2xl z-[100] overflow-hidden animate-in fade-in zoom-in duration-300 origin-center"
            style={{ 
                width: '120%', // Slightly wider
                top: '-40%', // Grow upwards/centered
                height: '180%', // Much taller
                display: 'flex',
                flexDirection: 'column'
            }}
        >
          {/* Slideshow Image Area - Takes most space */}
          <div className="relative flex-grow w-full overflow-hidden">
             {imagesToCycle.map((img, idx) => (
                 <img
                    key={idx}
                    src={img}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === currentImgIndex ? 'opacity-100' : 'opacity-0'}`}
                 />
             ))}
             {/* Gradient for text protection */}
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#181818] to-transparent"></div>
             
             {/* Title overlaid on image bottom */}
             <div className="absolute bottom-3 left-0 w-full px-4 text-center">
                 <h4 className="text-white font-serif font-bold text-lg drop-shadow-md">{project.title}</h4>
             </div>
          </div>

          {/* Minimal Controls & Text */}
          <div className="h-auto p-3 bg-[#181818] flex items-center justify-between">
            {/* Left: Down Arrow (More Info) */}
            <button 
                onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
                className="w-8 h-8 rounded-full border border-gray-600 hover:border-white text-gray-300 hover:text-white flex items-center justify-center transition"
            >
                <ChevronDown size={16} />
            </button>

             {/* Right: Actions */}
             <div className="flex gap-2">
                <button className="text-gray-400 hover:text-white transition p-1">
                  <Plus size={20} />
                </button>
                <button className="text-gray-400 hover:text-netflixRed transition p-1">
                  <Heart size={20} />
                </button>
            </div>
          </div>
          
          {/* Minimal Description */}
          <div className="px-4 pb-3 bg-[#181818]">
              <p className="text-xs text-gray-400 line-clamp-2 text-center leading-relaxed">
                  {project.description}
              </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;