import React, { useState } from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { heroProject, rows } from './data';
import { Project } from './types';

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleIntroComplete = () => {
    setLoading(false);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-[#141414] min-h-screen text-white font-sans overflow-x-hidden selection:bg-netflixRed selection:text-white">
      {loading && <Intro onComplete={handleIntroComplete} />}

      {!loading && (
        <div className="animate-in fade-in duration-1000">
          <Navbar />
          
          <Hero project={heroProject} onMoreInfo={() => openModal(heroProject)} />

          <div className="relative z-20 -mt-24 md:-mt-48 pb-10 space-y-4 md:space-y-8 pl-4 md:pl-12">
            {rows.map((row, index) => (
              <Row 
                key={index} 
                title={row.title} 
                projects={row.projects} 
                onOpenModal={openModal} 
              />
            ))}
          </div>

          <Footer />

          {selectedProject && (
            <Modal project={selectedProject} onClose={closeModal} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;