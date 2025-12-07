import React, { useRef, useEffect, useState } from 'react';
import { processSteps } from '../data';

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const element = sectionRef.current;
      const { top } = element.getBoundingClientRect();
      const height = element.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how much we've scrolled into the section
      // The section is tall (e.g. 300vh).
      // We map the scroll position to a 0-1 progress value.
      const scrollDistance = height - windowHeight;
      let progress = -top / scrollDistance;
      
      // Clamp between 0 and 1
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Height determines how long the user has to scroll to get through the content
    <div ref={sectionRef} className="relative h-[300vh] bg-[#050505]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Header (Fades out as you scroll) */}
        <div 
          className="absolute top-10 md:top-20 left-0 w-full text-center z-10 transition-opacity duration-500"
          style={{ opacity: 1 - scrollProgress * 3 }} 
        >
           <h2 className="text-4xl md:text-6xl font-serif text-white">התהליך</h2>
           <p className="text-gray-500 mt-2 tracking-widest uppercase text-sm">מחלום למציאות</p>
        </div>

        {/* Horizontal Scroll Track */}
        <div 
          className="flex items-center px-[10vw] gap-[10vw] will-change-transform"
          style={{ transform: `translateX(-${scrollProgress * 75}%)` }} // 75% assumes 4 items roughly
        >
          {/* Intro Card */}
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw]">
             <h3 className="text-5xl md:text-8xl font-black text-white/10 leading-none">
               THE<br/>JOURNEY
             </h3>
          </div>

          {processSteps.map((step) => (
            <div key={step.id} className="flex-shrink-0 w-[80vw] md:w-[35vw] flex flex-col gap-6 group">
              <div className="text-[10rem] md:text-[12rem] font-serif leading-none text-white/5 group-hover:text-white/20 transition-colors duration-500 select-none">
                {step.number}
              </div>
              <div className="border-t border-white/20 pt-6">
                <h4 className="text-3xl md:text-5xl font-serif text-white mb-4">{step.title}</h4>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* Outro Card */}
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw] flex items-center justify-center">
             <div className="text-center">
                <h3 className="text-4xl font-serif text-white mb-6">מוכנים להתחיל?</h3>
                <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition">
                  דברו איתי
                </button>
             </div>
          </div>

        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-10 left-10 right-10 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

      </div>
    </div>
  );
};

export default Process;