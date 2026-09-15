import React, { useEffect } from 'react';
import './ProjectDetailModal.css';
import type { Project } from '../types';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onNavigate: (newProject: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  projects,
  onClose,
  onNavigate
}) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, projects]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const total = projects.length;

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + total) % total;
    onNavigate(projects[prevIndex]);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % total;
    onNavigate(projects[nextIndex]);
  };

  return (
    <div 
      className={`modal-backdrop ${project ? 'modal-open' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Project Detail: ${project.title}`}
    >
      <div 
        className="modal-panel" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Control Bar */}
        <div className="modal-header">
          <div className="modal-nav-controls">
            <button 
              className="modal-nav-btn" 
              onClick={goToPrev}
              aria-label="Previous Project (Left Arrow)"
              title="Previous Project (Left Arrow)"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="mono-meta">
              {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button 
              className="modal-nav-btn" 
              onClick={goToNext}
              aria-label="Next Project (Right Arrow)"
              title="Next Project (Right Arrow)"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close Project View (Esc)"
          >
            <span>ESC / CLOSE</span>
            <X size={16} />
          </button>
        </div>

        {/* Content Body */}
        <div className="modal-content">
          {/* Hero Media Visual */}
          <div className="modal-hero-visual">
            <img 
              src={project.coverImage} 
              alt={project.title} 
              className="modal-hero-img" 
            />
          </div>

          {/* Title & Metadata */}
          <div className="modal-title-area">
            <div className="mono-meta mono-meta-cobalt">
              <span>{project.category}</span>
              <span>//</span>
              <span>YEAR {project.year}</span>
            </div>
            <h1 className="modal-title">{project.title}</h1>
            <p style={{ fontSize: 'var(--text-lg)', color: 'var(--ice-dim)', lineHeight: 1.5 }}>
              {project.description}
            </p>
          </div>

          {/* Technical Specifications Matrix */}
          <div className="modal-specs-grid">
            <div className="modal-spec-cell">
              <span className="modal-spec-label">Client</span>
              <span className="modal-spec-value">{project.client}</span>
            </div>
            <div className="modal-spec-cell">
              <span className="modal-spec-label">Format / Dimensions</span>
              <span className="modal-spec-value">{project.dimensions || 'Custom Spec'}</span>
            </div>
            <div className="modal-spec-cell">
              <span className="modal-spec-label">Print Calibration</span>
              <span className="modal-spec-value">{project.printSpec || '300 DPI // Press Ready'}</span>
            </div>
            <div className="modal-spec-cell">
              <span className="modal-spec-label">Art Direction</span>
              <span className="modal-spec-value">[DESIGNER NAME]</span>
            </div>
          </div>

          {/* Editorial Challenge & Solution */}
          <div className="modal-narrative-grid">
            <div className="modal-narrative-card">
              <h2 className="modal-narrative-title">
                <span style={{ color: 'var(--cobalt)' }}>[01]</span>
                The Design Brief & Challenge
              </h2>
              <p className="modal-narrative-text">
                {project.challenge || "Balancing monumental typographic hierarchy with immediate street legibility and tactile substrate finishing."}
              </p>
            </div>

            <div className="modal-narrative-card">
              <h2 className="modal-narrative-title">
                <span style={{ color: 'var(--cobalt)' }}>[02]</span>
                The Creative Solution
              </h2>
              <p className="modal-narrative-text">
                {project.solution || "Constructed an asymmetric layout utilizing Swiss typography principles, high-contrast cobalt duotones, and calibrated bleed margins."}
              </p>
            </div>
          </div>

          {/* Deliverables Suite */}
          {project.deliverables && (
            <div>
              <h2 className="modal-narrative-title" style={{ marginBottom: '0.75rem' }}>
                Delivered Assets & Master Specifications
              </h2>
              <div className="deliverables-cloud">
                {project.deliverables.map((item) => (
                  <span key={item} className="deliverable-tag">
                    <CheckCircle2 size={12} style={{ display: 'inline', marginRight: '0.4rem', color: 'var(--cobalt)' }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Gallery */}
          {project.images && project.images.length > 0 && (
            <div>
              <h2 className="modal-gallery-title">Visual Archive & Alternate Angles</h2>
              <div className="modal-gallery-grid">
                {project.images.map((imgSrc, i) => (
                  <div key={i} className="gallery-media-item">
                    <img 
                      src={imgSrc} 
                      alt={`${project.title} - View 0${i + 1}`} 
                      className="gallery-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Commission Callout Banner */}
          <div className="modal-footer-cta">
            <div>
              <h3 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.25rem', color: 'var(--paper)', marginBottom: '0.25rem' }}>
                Commission a similar project
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--ice-dim)' }}>
                Direct consultation for posters, banners, and campaign creative direction.
              </p>
            </div>
            <a 
              href="#contact" 
              className="btn-editorial"
              onClick={() => onClose()}
            >
              <span>Start Discussion</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
