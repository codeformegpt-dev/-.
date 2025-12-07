import React, { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 4500); // Adjust based on video length approx

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 5500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ease-out ${fading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative w-full h-full">
            {/* Overlay to prevent interaction */}
            <div className="absolute inset-0 z-10 bg-transparent"></div>
            
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/6Jg_rkKtJgo?autoplay=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&mute=0" 
                title="Intro" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                className="w-full h-full object-cover pointer-events-none"
                allowFullScreen
            ></iframe>
        </div>
    </div>
  );
};

export default Intro;