import React, { useEffect, useState } from 'react';
import { Camera, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out 
        ${scrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}
      `}
    >
      <div className="w-full px-8 md:px-16 flex items-center justify-between">
        
        {/* Left Side: Buttons (Search + Book) */}
        <div className="flex items-center gap-6 order-2 md:order-1">
           <button 
             onClick={() => scrollToSection('contact')}
             className="bg-netflixRed text-white px-6 py-2 rounded text-sm font-bold hover:bg-red-700 transition shadow-lg tracking-wider"
           >
             Book Now
           </button>
           <button className="text-white/80 hover:text-white transition">
             <Search size={20} />
           </button>
        </div>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300 order-3 md:order-2">
            <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-white transition relative group/link pb-1">
                אודות
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-netflixRed transition-all duration-300 group-hover/link:w-full"></span>
            </li>
            <li onClick={() => scrollToSection('testimonials')} className="cursor-pointer hover:text-white transition relative group/link pb-1">
                המלצות
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-netflixRed transition-all duration-300 group-hover/link:w-full"></span>
            </li>
            <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-white transition relative group/link pb-1">
                צור קשר
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-netflixRed transition-all duration-300 group-hover/link:w-full"></span>
            </li>
        </ul>

        {/* Right Side: Logo */}
        <div 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="flex items-center gap-3 cursor-pointer text-white order-1 md:order-3"
        >
            <div className="text-right">
                <span className="block font-serif font-black text-2xl tracking-tight leading-none">STUDIO</span>
                <span className="block text-[10px] tracking-[0.3em] text-gray-400 uppercase">Roni Levi</span>
            </div>
            <Camera size={28} className="text-white" />
        </div>

      </div>
    </div>
  );
};

export default Navbar;