import React, { useEffect, useState, useRef } from 'react';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt to play video
    if (videoRef.current) {
        videoRef.current.play().catch(e => console.log("Auto-play prevented", e));
    }

    // Start fade out slightly before video ends
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 3800); // Adjust based on video length

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-700 ease-out ${fading ? 'opacity-0' : 'opacity-100'}`}>
        <video 
            ref={videoRef}
            muted
            playsInline
            className="w-full h-full object-contain md:object-cover"
        >
            {/* 
               REPLACE THIS SRC WITH YOUR ACTUAL INTRO VIDEO URL.
               For now using a generic cinematic opening effect or keeping a placeholder.
            */}
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            
            {/* Fallback if video fails */}
            <div className="text-netflixRed font-black text-6xl tracking-widest animate-pulse">
                STUDIO
            </div>
        </video>
    </div>
  );
};

export default Intro;