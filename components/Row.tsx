import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import Thumbnail from './Thumbnail';

interface RowProps {
  title: string;
  projects: Project[];
  onOpenModal: (project: Project) => void;
  onPlay: (project: Project) => void; 
}

const Row: React.FC<RowProps> = ({ title, projects, onOpenModal, onPlay }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-44 sm:h-52 md:h-80 mb-4 relative group space-y-2 px-4 md:px-12 transition-all hover:z-50 z-20">
      <h2 className="text-lg md:text-2xl font-serif font-bold text-[#e5e5e5] hover:text-white transition duration-200 cursor-pointer inline-block drop-shadow-sm ml-1">
        {title}
      </h2>
      
      <div className="group relative">
        <div
          className={`hidden md:flex absolute top-0 bottom-0 left-0 bg-gradient-to-r from-black/80 to-transparent z-40 w-12 items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-110 ${!isMoved && 'hidden'}`}
          onClick={() => handleClick('left')}
        >
          <ChevronRight className="text-white w-8 h-8 drop-shadow-lg" />
        </div>

        <div
          ref={rowRef}
          className="flex items-center overflow-x-scroll no-scrollbar scroll-smooth overflow-y-visible py-10 -my-10 pl-1 pr-1 gap-1"
          style={{ scrollBehavior: 'smooth' }}
        >
          {projects.map((project) => (
            <Thumbnail 
                key={project.id} 
                project={project} 
                onOpenModal={onOpenModal} 
                onPlay={onPlay}
            />
          ))}
        </div>

        <div
          className="hidden md:flex absolute top-0 bottom-0 right-0 bg-gradient-to-l from-black/80 to-transparent z-40 w-12 items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:scale-110"
          onClick={() => handleClick('right')}
        >
          <ChevronLeft className="text-white w-8 h-8 drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Row;