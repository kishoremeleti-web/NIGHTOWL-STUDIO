import React, { useState, useCallback } from 'react';
import './styles/index.css';
import type { Project } from './types';
import { projectsData } from './data/portfolioData';
import { useScrollReveal } from './hooks/useScrollReveal';

import { IntroReveal } from './components/IntroReveal';
import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { MarqueeDivider } from './components/MarqueeDivider';
import { ServicesList } from './components/ServicesList';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';
import { SiteFooter } from './components/SiteFooter';
import { ProjectDetailModal } from './components/ProjectDetailModal';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [introFinished, setIntroFinished] = useState(false);

  // Initialize scroll-driven IntersectionObserver reveals
  useScrollReveal(introFinished);

  const handleSelectProjectById = useCallback((projectId: string) => {
    const found = projectsData.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  }, []);

  const handleSelectProject = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleNavigateProject = useCallback((newProject: Project) => {
    setSelectedProject(newProject);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Intro Preloader Sequence */}
      <IntroReveal onComplete={() => setIntroFinished(true)} />

      {/* Persistent Sticky Navigation */}
      <SiteHeader />

      <main id="main-content">
        {/* Editorial Hero Section */}
        <Hero onSelectProject={handleSelectProjectById} />

        {/* Selected Work Archive */}
        <FeaturedWork onSelectProject={handleSelectProject} />

        {/* Kinetic Typographical Transition Stream */}
        <MarqueeDivider />

        {/* Services & Technical Print Specifications */}
        <ServicesList />

        {/* Studio Profile, Biography & Credentials */}
        <AboutSection />

        {/* 5-Step Production Workflow */}
        <ProcessSection />

        {/* Expressive Closing Poster & Inquiry Intake */}
        <ContactSection />
      </main>

      {/* Colophon & Live Local Time */}
      <SiteFooter />

      {/* Accessible Project Case Study Overlay */}
      <ProjectDetailModal
        project={selectedProject}
        projects={projectsData}
        onClose={handleCloseModal}
        onNavigate={handleNavigateProject}
      />
    </div>
  );
};

export default App;
