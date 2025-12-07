import React, { useEffect, useState } from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import { Project } from '../types';

interface ModalProps {
  project: Project;
  onClose: () => void;
  onPlay: () => void; // New prop
}

const Modal: React.FC<ModalProps> = ({ project, onClose, onPlay }) => {
  const [activeTab, setActiveTab] = useState<'highlights' | 'gallery' | 'info'>('gallery');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/80 backdrop-blur-md p-0 md:p-4 pt-12 md:pt-12">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-5xl bg-[#181818] rounded-none md:rounded-xl shadow-2xl overflow-hidden flex flex-col mb-0 md:mb-10 animate-in fade-in slide-in-from-bottom-10 duration-500 min-h-screen md:min-h-0">
        
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#181818]/50 hover:bg-[#181818] backdrop-blur rounded-full flex items-center justify-center text-white transition"
        >
          <X size={24} />
        </button>

        {/* Hero Section of Modal */}
        <div className="relative w-full h-[35vh] md:h-[55vh]">
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 md:w-2/3 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-xl leading-none">{project.title}</h2>
            <div className="flex items-center gap-4 pt-2">
               <button 
                onClick={onPlay}
                className="bg-white text-black px-6 md:px-8 py-2 md:py-3 rounded font-bold flex items-center gap-2 hover:bg-gray-200 transition shadow-lg hover:scale-105"
               >
                  <Play fill="black" size={24} />
                  <span>נגן אלבום</span>
               </button>
               <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-500 text-gray-300 flex items-center justify-center hover:border-white hover:text-white transition bg-black/30 backdrop-blur-sm">
                  <Plus size={20} />
               </button>
            </div>
          </div>
        </div>

        {/* Info & Tabs */}
        <div className="px-6 md:px-12 py-6 bg-[#181818]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4 text-gray-300">
                    <p className="text-white text-lg leading-relaxed font-light">{project.description}</p>
                </div>

                <div className="text-sm space-y-4 text-gray-400">
                    <div className="flex flex-col"><span className="text-gray-500 text-xs uppercase mb-1">לקוח</span> <span className="text-white">{project.details.client}</span></div>
                    <div className="flex flex-col"><span className="text-gray-500 text-xs uppercase mb-1">לוקיישן</span> <span className="text-white">{project.details.location}</span></div>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-gray-200 bg-gray-800 px-3 py-1 rounded-full text-xs hover:bg-gray-700 transition cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-8 border-t border-gray-800 mt-10 pt-4 mb-6 text-lg font-bold text-gray-400">
                <button 
                    onClick={() => setActiveTab('gallery')}
                    className={`pb-2 border-b-4 transition ${activeTab === 'gallery' ? 'border-netflixRed text-white' : 'border-transparent hover:text-white'}`}
                >
                    תמונות
                </button>
                <button 
                    onClick={() => setActiveTab('highlights')}
                    className={`pb-2 border-b-4 transition ${activeTab === 'highlights' ? 'border-netflixRed text-white' : 'border-transparent hover:text-white'}`}
                >
                    פרטים
                </button>
            </div>

            {/* Gallery Grid */}
            {activeTab === 'gallery' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-12">
                    {project.images.map((img, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded cursor-pointer h-40 sm:h-56 bg-gray-900">
                             <img 
                                src={img} 
                                alt={`Gallery ${idx}`} 
                                loading="lazy"
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                        </div>
                    ))}
                </div>
            )}
             
             {activeTab === 'highlights' && (
                 <div className="pb-12 text-gray-400">
                     <h3 className="text-xl text-white mb-4">פרטים נוספים</h3>
                     <p>כאן יופיע מידע מורחב על תהליך העבודה, הציוד והגישה האומנותית בפרויקט זה.</p>
                 </div>
             )}
        </div>
      </div>
    </div>
  );
};

export default Modal;