import React, { useEffect, useState } from 'react';
import { Search, Bell, Menu, Camera } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    <nav
      className={`fixed top-0 w-full z-40 transition-colors duration-500 ease-in-out px-4 md:px-12 py-4 flex items-center justify-between ${
        isScrolled ? 'bg-[#141414]' : 'bg-transparent bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="flex items-center gap-8">
        {/* Logo Area */}
        <div 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          className="flex items-center gap-2 cursor-pointer text-netflixRed font-bold text-2xl tracking-tighter hover:scale-105 transition"
        >
          <Camera size={28} />
          <span>STUDIO</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-200">
          <li onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="cursor-pointer hover:text-white transition">בית</li>
          <li className="cursor-pointer font-bold hover:text-white transition">גלריות</li>
          <li onClick={() => scrollToSection('testimonials')} className="cursor-pointer hover:text-gray-400 transition">המלצות</li>
          <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-gray-400 transition">צור קשר</li>
        </ul>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6 text-white">
        <div className={`flex items-center bg-black/50 border border-white/80 p-1 px-2 gap-2 transition-all duration-300 ${isSearchOpen ? 'w-48 opacity-100' : 'w-0 opacity-0 border-0 p-0 hidden'}`}>
           <input type="text" placeholder="חיפוש..." className="bg-transparent text-sm w-full outline-none placeholder-gray-400" />
        </div>
        <Search 
          className="w-6 h-6 cursor-pointer hover:text-gray-300 transition" 
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        <Bell className="w-6 h-6 cursor-pointer hover:text-gray-300 transition hidden sm:block" />
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-netflixRed hover:bg-red-700 text-white text-sm font-bold px-4 py-1.5 rounded-sm transition shadow-md hover:scale-105"
        >
          הזמן צילום
        </button>
      </div>
    </nav>
  );
};

export default Navbar;