import React, { useState, useEffect } from 'react';
import './Hero.css';
import { studioInfo, projectsData } from '../data/portfolioData';
import { ArrowDownRight, Compass } from 'lucide-react';

interface HeroProps {
  onSelectProject?: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Desktop mouse movement drift for depth
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroArtwork = projectsData[0];

  const handleScrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const workElem = document.getElementById('work');
    if (workElem) {
      workElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero" aria-label="Hero Showcase">
      <div className="container">
        <div className="hero-grid">
          {/* Typography Column */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              <span>Independent Graphic Designer — {studioInfo.location}</span>
            </div>

            <h1 className="hero-headline">
              <span className="hero-headline-line">
                <span>Posters, campaigns,</span>
              </span>
              <span className="hero-headline-line">
                <span>and visuals built</span>
              </span>
              <span className="hero-headline-line">
                <span>to be <span className="hero-headline-accent">noticed.</span></span>
              </span>
            </h1>

            <p className="hero-tagline">
              {studioInfo.tagline} {studioInfo.biography[0]}
            </p>

            <div className="hero-actions">
              <a 
                href="#work" 
                className="btn-editorial" 
                onClick={handleScrollToWork}
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight size={16} />
              </a>

              <a href="#contact" className="btn-outline">
                <span>Commission Studio</span>
              </a>
            </div>

            <div className="hero-specs-row">
              <div className="hero-spec-item">
                <span className="hero-spec-label">Print Master</span>
                <span className="hero-spec-value">300 DPI // FOGRA39</span>
              </div>
              <div className="hero-spec-item">
                <span className="hero-spec-label">Formats</span>
                <span className="hero-spec-value">Poster / Flex / Social</span>
              </div>
              <div className="hero-spec-item">
                <span className="hero-spec-label">Discipline</span>
                <span className="hero-spec-value">Art Direction & Type</span>
              </div>
            </div>
          </div>

          {/* Media Collage Column with Mouse Drift */}
          <div className="hero-media-wrapper">
            <div 
              className="hero-artwork-card"
              style={{
                transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`
              }}
              onClick={() => onSelectProject && onSelectProject(heroArtwork.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && onSelectProject) onSelectProject(heroArtwork.id);
              }}
              aria-label={`View featured project: ${heroArtwork.title}`}
            >
              <img 
                src={heroArtwork.coverImage} 
                alt={heroArtwork.title} 
                className="hero-artwork-img"
                loading="eager"
              />
              <div className="hero-artwork-overlay" />
              <div className="hero-artwork-badge">
                <span className="hero-artwork-title">{heroArtwork.title}</span>
                <span className="hero-artwork-dim">{heroArtwork.dimensions || 'A0 EXHIBITION'}</span>
              </div>
            </div>

            {/* Floating Editorial Fragment 01 */}
            <div 
              className="hero-floating-fragment"
              style={{
                transform: `translate3d(${-mouseOffset.x * 1.5}px, ${-mouseOffset.y * 1.5}px, 0)`
              }}
            >
              <span style={{ color: 'var(--paper)', fontWeight: 700 }}>+ ARCHIVE_01</span>
              <span>GRID: 12-COL MOD</span>
              <span>COLOR: COBALT/INK</span>
              <span>YEAR: 2026</span>
            </div>

            {/* Floating Editorial Fragment 02 */}
            <div 
              className="hero-floating-badge"
              style={{
                transform: `translate3d(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px, 0)`
              }}
            >
              FEATURED COMMISSIONS // 2026
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-prompt">
          <div className="scroll-line-track">
            <div className="scroll-line-runner" />
          </div>
          <span>SCROLL TO EXPLORE ARCHIVE</span>
          <Compass size={14} style={{ color: 'var(--cobalt)' }} />
        </div>
      </div>

      {/* Typographic Ambient Watermark */}
      <div className="hero-watermark" aria-hidden="true">
        POSTER / STUDIO
      </div>
    </section>
  );
};
