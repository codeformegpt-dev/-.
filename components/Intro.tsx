import React, { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade out after animation duration
    const timer = setTimeout(() => {
      setFading(true);
    }, 2500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3300);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-800 ease-out ${fading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative w-64 h-64 md:w-96 md:h-96">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        >
          {/* Simulated Logo: Initials "DP" or similar geometric shape */}
          <path
            d="M 20 20 L 20 80 L 80 80 L 80 20 L 20 20"
            fill="transparent"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw"
            style={{
              strokeDasharray: 300,
              strokeDashoffset: 300,
              animation: 'draw 2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
            }}
          />
           <path
            d="M 35 35 L 65 65 M 65 35 L 35 65"
             fill="transparent"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
             className="animate-draw"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 100,
              animation: 'draw 1.5s ease-in-out forwards 0.5s'
            }}
           />
        </svg>
        <style>{`
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Intro;