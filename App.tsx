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
import WhosWatching from './components/WhosWatching';
import Pricing from './components/Pricing';
import Process from './components/Process';
import BeforeAfter from './components/BeforeAfter';

import { heroProject, rows, testimonials, beforeAfterImages } from './data';
import { Project } from './types';

function App() {
  const [appState, setAppState] = useState<'intro' | 'profile' | 'main'>('intro');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [slideshowProject, setSlideshowProject] = useState<Project | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);

  const handleIntroComplete = () => {
    setAppState('profile');
  };

  const handleProfileSelect = () => {
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
      
      {appState === 'profile' && <WhosWatching onSelectProfile={handleProfileSelect} />}

      {appState === 'main' && (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          
          <Hero 
            project={heroProject} 
            onMoreInfo={() => openModal(heroProject)} 
            onPlay={openShowreel} 
            onPlaySlideshow={() => startSlideshow(heroProject)}
          />

          <div className="relative z-20 -mt-24 md:-mt-48 pb-10 space-y-4 pl-0">
            {rows.map((row, index) => (
              <Row 
                key={index} 
                title={row.title} 
                projects={row.projects} 
                onOpenModal={openModal} 
                onPlay={startSlideshow}
              />
            ))}
            
            <BeforeAfter beforeImage={beforeAfterImages.before} afterImage={beforeAfterImages.after} />

            <div id="process">
              <Process />
            </div>

            <div id="pricing">
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