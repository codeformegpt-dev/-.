import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';

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
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <nav 
        className={`pointer-events-auto transition-all duration-500 ease-out 
          ${scrolled ? 'py-3 px-6 bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full' : 'py-4 px-10 bg-black/20 backdrop-blur-sm border border-white/5 rounded-full'}
          hover:bg-black/80 hover:scale-105 group
        `}
      >
        <div className="flex items-center gap-8">
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            className="flex items-center gap-2 cursor-pointer text-white font-serif font-bold text-xl tracking-tight pr-4 border-r border-white/20"
          >
            <Camera size={20} className="text-white" />
            <span>STUDIO</span>
          </div>

          {/* Links */}
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-300">
            <li onClick={() => scrollToSection('process')} className="cursor-pointer hover:text-white transition relative group/link">
                תהליך
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full"></span>
            </li>
            <li onClick={() => scrollToSection('pricing')} className="cursor-pointer hover:text-white transition relative group/link">
                חבילות
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full"></span>
            </li>
            <li onClick={() => scrollToSection('testimonials')} className="cursor-pointer hover:text-white transition relative group/link">
                המלצות
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full"></span>
            </li>
            <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-white transition relative group/link">
                צור קשר
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover/link:w-full"></span>
            </li>
          </ul>

           {/* CTA */}
           <button 
             onClick={() => scrollToSection('contact')}
             className="hidden md:block bg-white text-black px-5 py-1.5 rounded-full text-xs font-bold hover:bg-gray-200 transition ml-2"
           >
             Book Now
           </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;