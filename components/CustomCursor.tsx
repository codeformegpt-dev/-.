import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide on touch devices via CSS media query logic ideally, but component renders anyway.
  // We will simply hide it if window width is small in CSS usually, but here:
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div
        className={`bg-white rounded-full transition-all duration-300 ease-out ${
          isHovering ? 'w-16 h-16' : 'w-4 h-4'
        }`}
      />
    </div>
  );
};

export default CustomCursor;