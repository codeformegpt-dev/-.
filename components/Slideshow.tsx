import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideshowProps {
  images: string[];
  onClose: () => void;
}

const Slideshow: React.FC<SlideshowProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Auto advance slide every 6 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
    }, 500); // Wait for fade out
  };

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image (Previous/Next Blurring) */}
      <div 
        className="absolute inset-0 bg-cover bg-center blur-3xl opacity-30 scale-110"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

      {/* Main Image Container */}
      <div className="relative w-full h-full overflow-hidden">
        {/* The Image with Ken Burns Effect */}
        <img
          key={currentIndex} // Key change forces re-render for animation reset
          src={images[currentIndex]}
          alt="Slideshow"
          className={`w-full h-full object-contain md:object-cover transition-opacity duration-1000 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'} animate-ken-burns`}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Controls */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition"
      >
        <X size={32} />
      </button>

      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition p-2 z-50"
      >
        <ChevronRight size={48} />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white hover:scale-110 transition p-2 z-50"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;