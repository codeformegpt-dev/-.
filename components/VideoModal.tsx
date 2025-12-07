import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  videoSrc: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-black/50 hover:bg-white/10 p-2 rounded-full transition"
      >
        <X size={32} />
      </button>

      <div className="w-full h-full max-w-7xl max-h-[90vh] px-4 flex items-center justify-center">
        <video 
            src={videoSrc} 
            className="w-full h-full object-contain max-h-screen shadow-2xl"
            controls 
            autoPlay
        />
      </div>
    </div>
  );
};

export default VideoModal;