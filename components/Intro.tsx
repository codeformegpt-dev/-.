import React, { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade out slightly before video ends or at a fixed time
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 4000); 

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ease-out ${fading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative w-full h-full">
            <video 
                autoPlay 
                muted 
                playsInline
                className="w-full h-full object-cover pointer-events-none"
                onEnded={() => {
                    setFading(true);
                    setTimeout(onComplete, 1000);
                }}
            >
                <source src="/intro.mp4" type="video/mp4" />
                {/* Fallback text if video fails */}
                <div className="flex items-center justify-center h-full text-netflixRed font-black text-6xl tracking-widest animate-pulse">
                    STUDIO
                </div>
            </video>
        </div>
    </div>
  );
};

export default Intro;