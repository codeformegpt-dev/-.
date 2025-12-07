import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import Thumbnail from './Thumbnail';

interface RowProps {
  title: string;
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

const Row: React.FC<RowProps> = ({ title, projects, onOpenModal }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="h-40 sm:h-52 md:h-72 mb-8 relative group space-y-2 md:space-y-4 px-4 md:px-12 z-20">
      <h2 className="text-sm md:text-xl font-bold text-[#e5e5e5] hover:text-white transition duration-200 cursor-pointer inline-block">
        {title}
      </h2>
      
      <div className="group relative">
        {/* Left Arrow */}
        <div
          className={`absolute top-0 bottom-0 left-0 bg-black/50 z-40 w-12 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:bg-black/70 ${!isMoved && 'hidden'}`}
          onClick={() => handleClick('left')}
        >
          <ChevronRight className="text-white w-8 h-8" />
        </div>

        {/* Scroll Container */}
        <div
          ref={rowRef}
          className="flex items-center gap-2 overflow-x-scroll no-scrollbar scroll-smooth overflow-y-hidden py-4"
        >
          {projects.map((project) => (
            <Thumbnail key={project.id} project={project} onOpenModal={onOpenModal} />
          ))}
        </div>

        {/* Right Arrow */}
        <div
          className="absolute top-0 bottom-0 right-0 bg-black/50 z-40 w-12 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition duration-200 hover:bg-black/70"
          onClick={() => handleClick('right')}
        >
          <ChevronLeft className="text-white w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Row;