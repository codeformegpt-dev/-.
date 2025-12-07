import React from 'react';
import { Camera, Heart, Baby, Star } from 'lucide-react';

interface WhosWatchingProps {
  onSelectProfile: () => void;
}

const WhosWatching: React.FC<WhosWatchingProps> = ({ onSelectProfile }) => {
  const profiles = [
    { name: "משפחה", icon: <Baby size={40} />, color: "bg-blue-500" },
    { name: "זוגות", icon: <Heart size={40} />, color: "bg-netflixRed" },
    { name: "הפקות", icon: <Camera size={40} />, color: "bg-purple-500" },
    { name: "ילדים", icon: <Star size={40} />, color: "bg-yellow-500" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#141414] flex flex-col items-center justify-center animate-in fade-in duration-500">
      <h1 className="text-3xl md:text-5xl font-serif text-white mb-12 tracking-wide text-center">
        מי צופה?
      </h1>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {profiles.map((profile, index) => (
          <div 
            key={index} 
            onClick={onSelectProfile}
            className="group flex flex-col items-center gap-4 cursor-pointer hover:scale-105 transition duration-300"
          >
            <div className={`w-24 h-24 md:w-32 md:h-32 rounded bg-gradient-to-br from-[#222] to-[#111] border-2 border-transparent group-hover:border-white flex items-center justify-center text-gray-400 group-hover:text-white transition overflow-hidden relative`}>
                {/* Simulated Profile Avatar */}
                <div className={`absolute inset-0 opacity-20 ${profile.color}`}></div>
                {profile.icon}
            </div>
            <span className="text-gray-400 group-hover:text-white text-lg md:text-xl font-medium transition">
              {profile.name}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-16 border border-gray-500 text-gray-500 px-6 py-2 tracking-widest hover:border-white hover:text-white transition uppercase text-sm">
        ניהול פרופילים
      </button>
    </div>
  );
};

export default WhosWatching;