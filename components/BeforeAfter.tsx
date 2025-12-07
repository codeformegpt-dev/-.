import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
      
      let newPos = ((clientX - rect.left) / rect.width) * 100;
      newPos = Math.max(0, Math.min(100, newPos));
      setSliderPosition(newPos);
    }
  };

  return (
    <div className="py-24 px-4 md:px-12 bg-black">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-3xl md:text-5xl font-serif text-white">הקסם שבעריכה</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">גררו את הסליידר כדי לראות איך תמונת גלם הופכת ליצירת אמנות</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] overflow-hidden rounded-sm cursor-col-resize select-none border border-white/10 shadow-2xl"
        onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
        onTouchMove={handleDrag}
        onClick={handleDrag}
      >
        {/* After Image (Full width background) */}
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover grayscale-0" 
        />
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-white text-sm font-bold">אחרי</div>

        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 h-full overflow-hidden border-r-2 border-white"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImage} 
            alt="Before" 
            className="absolute inset-0 w-full max-w-none h-full object-cover filter brightness-75 sepia-[.3]" // Simulating RAW look
            style={{ width: containerRef.current?.offsetWidth }}
          />
           <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-3 py-1 rounded text-white text-sm font-bold">לפני</div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-10 bg-transparent flex items-center justify-center -ml-5 cursor-col-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition">
            <MoveHorizontal size={20} className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;