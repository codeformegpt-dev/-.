import React, { useEffect, useState } from 'react';
import { X, Play, Plus, ThumbsUp } from 'lucide-react';
import { Project } from '../types';

interface ModalProps {
  project: Project;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'highlights' | 'gallery' | 'info'>('gallery');

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/70 backdrop-blur-sm p-4 md:pt-12">
        {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-[#181818] rounded-xl shadow-2xl overflow-hidden flex flex-col mb-10 animate-in fade-in slide-in-from-bottom-10 duration-500">
        
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-[#181818] rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition"
        >
          <X size={24} />
        </button>

        {/* Hero Section of Modal */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          
          <div className="absolute bottom-10 left-10 md:w-2/3 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">{project.title}</h2>
            <div className="flex items-center gap-4">
               <button className="bg-white text-black px-8 py-2 rounded font-bold flex items-center gap-2 hover:bg-gray-200 transition">
                  <Play fill="black" size={20} />
                  <span>נגן</span>
               </button>
               <button className="w-10 h-10 rounded-full border-2 border-gray-500 text-gray-300 flex items-center justify-center hover:border-white hover:text-white transition">
                  <Plus size={20} />
               </button>
               <button className="w-10 h-10 rounded-full border-2 border-gray-500 text-gray-300 flex items-center justify-center hover:border-white hover:text-white transition">
                  <ThumbsUp size={20} />
               </button>
            </div>
          </div>
        </div>

        {/* Info & Tabs */}
        <div className="px-8 md:px-12 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column (Main Info) - RTL -> Actually Right visually in Hebrew */}
                <div className="md:col-span-2 space-y-4 text-gray-300">
                    <div className="flex items-center gap-3 text-lg">
                        <span className="text-[#46d369] font-bold">{project.match}</span>
                        <span>2024</span>
                        <span className="border border-gray-500 px-1 text-sm rounded">{project.resolution}</span>
                    </div>
                    <p className="text-white text-lg leading-relaxed">{project.description}</p>
                </div>

                {/* Right Column (Meta) */}
                <div className="text-sm space-y-3 text-gray-400">
                    <div><span className="text-gray-500">לקוח:</span> {project.details.client}</div>
                    <div><span className="text-gray-500">לוקיישן:</span> {project.details.location}</div>
                    <div><span className="text-gray-500">ציוד:</span> {project.details.gear}</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-gray-200 border border-gray-700 px-2 py-0.5 rounded-full text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-8 border-t border-gray-700 mt-8 pt-4 mb-6 text-lg font-bold text-gray-400">
                <button 
                    onClick={() => setActiveTab('gallery')}
                    className={`pb-2 border-b-4 transition ${activeTab === 'gallery' ? 'border-netflixRed text-white' : 'border-transparent hover:text-white'}`}
                >
                    גלריה מלאה
                </button>
                <button 
                    onClick={() => setActiveTab('highlights')}
                    className={`pb-2 border-b-4 transition ${activeTab === 'highlights' ? 'border-netflixRed text-white' : 'border-transparent hover:text-white'}`}
                >
                    היילייטס
                </button>
                 <button 
                    onClick={() => setActiveTab('info')}
                    className={`pb-2 border-b-4 transition ${activeTab === 'info' ? 'border-netflixRed text-white' : 'border-transparent hover:text-white'}`}
                >
                    פרטים טכניים
                </button>
            </div>

            {/* Gallery Grid (Masonry-ish) */}
            {activeTab === 'gallery' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-12">
                    {project.images.map((img, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded cursor-pointer h-48 sm:h-64 bg-gray-900">
                             <img 
                                src={img} 
                                alt={`Gallery ${idx}`} 
                                loading="lazy"
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                        </div>
                    ))}
                </div>
            )}
             
             {activeTab === 'highlights' && (
                 <div className="flex items-center justify-center h-64 text-gray-500">
                     <p>הצגת היילייטס נבחרים מהפרויקט...</p>
                 </div>
             )}

             {activeTab === 'info' && (
                 <div className="flex items-center justify-center h-64 text-gray-500">
                     <p>מידע טכני נוסף על הציוד והעריכה...</p>
                 </div>
             )}

        </div>
      </div>
    </div>
  );
};

export default Modal;