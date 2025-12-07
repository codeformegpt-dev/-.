import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsRowProps {
  testimonials: Testimonial[];
}

const TestimonialsRow: React.FC<TestimonialsRowProps> = ({ testimonials }) => {
  // Duplicate testimonials to ensure seamless loop
  const displayTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div id="testimonials" className="py-12 relative overflow-hidden space-y-8 bg-gradient-to-b from-[#141414] to-black">
      <div className="px-4 md:px-12 mb-6">
          <h2 className="text-3xl md:text-4xl font-black text-white flex items-center gap-3 drop-shadow-md">
            <Star className="text-yellow-500 fill-yellow-500 animate-pulse" size={32} />
            וואו מהלקוחות
          </h2>
          <p className="text-gray-400 mt-2 text-lg">המילים החמות של המשפחות שלנו</p>
      </div>

      {/* Row 1 - Moving Right */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee-rtl gap-6 px-4">
            {displayTestimonials.map((t, i) => (
                <TestimonialCard key={`${t.id}-1-${i}`} testimonial={t} />
            ))}
        </div>
      </div>

      {/* Row 2 - Moving Left */}
      <div className="relative w-full overflow-hidden mt-8">
        <div className="flex w-max animate-marquee-ltr gap-6 px-4">
            {displayTestimonials.map((t, i) => (
                <TestimonialCard key={`${t.id}-2-${i}`} testimonial={t} />
            ))}
        </div>
      </div>
      
      {/* Side Vignettes to fade edges */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#141414] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#141414] to-transparent z-20 pointer-events-none" />
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="w-[350px] md:w-[450px] bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] group cursor-default">
        <Quote className="text-gray-600 group-hover:text-netflixRed transition duration-300 w-8 h-8 mb-4" />
        <p className="text-gray-200 text-lg leading-relaxed italic mb-6 line-clamp-3">
            "{testimonial.text}"
        </p>
        <div className="flex items-center gap-4 border-t border-white/5 pt-4">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20" />
            <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <span className="text-netflixRed text-sm font-medium tracking-wide">{testimonial.role}</span>
            </div>
            <div className="mr-auto flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
            </div>
        </div>
    </div>
);

export default TestimonialsRow;