import React, { useState } from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import TestimonialsRow from './components/TestimonialsRow';
import Contact from './components/Contact';
import Modal from './components/Modal';
import Slideshow from './components/Slideshow';
import VideoModal from './components/VideoModal';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Pricing from './components/Pricing';
import Process from './components/Process';

import { heroProject, rows, testimonials } from './data';
import { Project } from './types';

function App() {
  const [appState, setAppState] = useState<'intro' | 'main'>('intro');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [slideshowProject, setSlideshowProject] = useState<Project | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);

  const handleIntroComplete = () => {
    setAppState('main');
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const startSlideshow = (project: Project) => {
    setSlideshowProject(project);
  };

  const closeSlideshow = () => {
    setSlideshowProject(null);
  };

  const openShowreel = () => {
    setShowreelOpen(true);
  };

  const closeShowreel = () => {
    setShowreelOpen(false);
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white font-sans overflow-x-hidden selection:bg-netflixRed selection:text-white cursor-none">
      <CustomCursor />
      
      {appState === 'intro' && <Intro onComplete={handleIntroComplete} />}

      {appState === 'main' && (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          
          <Hero 
            project={heroProject} 
            onMoreInfo={() => openModal(heroProject)} 
            onPlay={openShowreel} 
            onPlaySlideshow={() => startSlideshow(heroProject)}
          />

          <div className="relative z-20 space-y-4">
            
            {/* Gallery Rows with negative margin to pull up over hero slightly if desired, or keep clean */}
            <div className="relative z-30 -mt-10 md:-mt-20 pb-10 pl-0 bg-gradient-to-b from-transparent via-[#141414] to-[#141414]">
               {rows.map((row, index) => (
                <Row 
                  key={index} 
                  title={row.title} 
                  projects={row.projects} 
                  onOpenModal={openModal} 
                  onPlay={startSlideshow}
                />
              ))}
            </div>

            <div id="process" className="relative z-20">
              <Process />
            </div>

            <div id="pricing" className="relative z-20">
              <Pricing />
            </div>

            <TestimonialsRow testimonials={testimonials} />
          </div>

          <Contact />

          <Footer />

          {selectedProject && (
            <Modal 
                project={selectedProject} 
                onClose={closeModal} 
                onPlay={() => startSlideshow(selectedProject)}
            />
          )}

          {slideshowProject && (
              <Slideshow 
                images={slideshowProject.images.length > 0 ? slideshowProject.images : [slideshowProject.thumbnail]} 
                onClose={closeSlideshow} 
              />
          )}

          {showreelOpen && (
              <VideoModal 
                  videoSrc="/showreel.mp4" 
                  onClose={closeShowreel} 
              />
          )}
        </div>
      )}
    </div>
  );
}

export default App;