import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Testimonial } from '../data';

interface TestimonialsRowProps {
  testimonials: Testimonial[];
}

const TestimonialsRow: React.FC<TestimonialsRowProps> = ({ testimonials }) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div id="testimonials" className="mb-12 relative group px-4 md:px-12 space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-[#e5e5e5] mb-4 flex items-center gap-2">
        <Star className="text-yellow-500 fill-yellow-500" size={24} />
        המלצות וביקורות
      </h2>

      <div className="group relative">
        <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-black via-black/50 to-transparent z-40 w-12 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition hover:scale-110" onClick={() => handleClick('left')}>
          <ChevronRight className="text-white w-10 h-10" />
        </div>

        <div ref={rowRef} className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth py-4 pl-4">
          {testimonials.map((t) => (
            <div key={t.id} className="min-w-[300px] md:min-w-[400px] bg-[#181818] p-8 rounded-lg shadow-lg border border-gray-800 relative hover:bg-[#202020] transition duration-300 flex flex-col justify-between h-[250px]">
              <Quote className="absolute top-4 left-4 text-gray-700 w-10 h-10" />
              
              <p className="text-gray-300 text-lg leading-relaxed italic mb-4">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-gray-600" />
                <div>
                  <h4 className="text-white font-bold">{t.name}</h4>
                  <span className="text-gray-500 text-sm">{t.role}</span>
                </div>
                <div className="mr-auto flex">
                    {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-netflixRed fill-netflixRed" />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-black via-black/50 to-transparent z-40 w-12 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition hover:scale-110" onClick={() => handleClick('right')}>
          <ChevronLeft className="text-white w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsRow;