import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsRowProps {
  testimonials: Testimonial[];
}

const TestimonialsRow: React.FC<TestimonialsRowProps> = ({ testimonials }) => {
  // We will feature just the top 3 visually striking ones
  const featured = testimonials.slice(0, 3);

  return (
    <div id="testimonials" className="py-32 px-4 md:px-12 bg-white text-black relative">
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 border-b border-black/10 pb-8 flex justify-between items-end">
             <h2 className="text-5xl md:text-8xl font-serif tracking-tight leading-none">
                CLIENT<br/>STORIES
             </h2>
             <span className="hidden md:block text-sm font-bold tracking-widest uppercase mb-2">Read what they say</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-black/10 rtl:divide-x-reverse">
            {featured.map((t) => (
                <div key={t.id} className="pt-8 md:pt-0 md:px-6 flex flex-col justify-between h-full">
                    <div>
                        <Quote size={40} className="mb-6 text-black/20" />
                        <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                            "{t.text}"
                        </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                        <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale object-cover" />
                        <div>
                            <h5 className="font-bold text-sm tracking-wide uppercase">{t.name}</h5>
                            <span className="text-xs text-gray-500">{t.role}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-20 text-center">
            <button className="text-sm font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition uppercase tracking-widest">
                Read All Reviews
            </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsRow;