import React from 'react';
import { processSteps } from '../data';

const Process: React.FC = () => {
  return (
    <div className="py-24 px-4 md:px-12 bg-black relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-serif text-white">איך זה עובד?</h2>
        </div>

        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div key={step.id} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 group ${index % 2 === 0 ? 'md:flex-row-reverse text-right md:text-left' : 'text-right'}`}>
              
              {/* Text */}
              <div className={`flex-1 space-y-2 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                <h3 className="text-2xl md:text-3xl font-serif text-white group-hover:text-netflixRed transition duration-300">{step.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{step.description}</p>
              </div>

              {/* Number/Dot */}
              <div className="relative flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-black flex items-center justify-center text-xl font-bold text-gray-500 group-hover:border-netflixRed group-hover:text-white transition duration-500 shadow-[0_0_20px_rgba(0,0,0,1)] z-10">
                  {step.number}
                </div>
              </div>
              
              {/* Spacer for layout balance */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;