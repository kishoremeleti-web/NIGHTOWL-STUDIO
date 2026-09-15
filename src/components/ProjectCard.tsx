import React from 'react';
import './ProjectCard.css';
import type { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
  featuredHighlight?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  index,
  featuredHighlight = false
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project);
    }
  };

  const aspectClass = project.aspectRatio 
    ? `aspect-${project.aspectRatio}` 
    : 'aspect-portrait';

  return (
    <article
      className={`project-card reveal-init ${featuredHighlight ? 'project-card-featured' : ''}`}
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View project details for ${project.title}, ${project.category}, ${project.year}`}
    >
      <div className={`project-card-media ${aspectClass}`}>
        <img
          src={project.coverImage}
          alt={project.title}
          className="project-card-img"
          loading="lazy"
        />
        <div className="project-card-tint" />

        {/* Technical Print Stamp */}
        <div className="project-card-coords">
          <span style={{ color: 'var(--cobalt)' }}>+</span>
          <span>REF_0{index + 1}</span>
        </div>

        {/* Interactive View Prompt */}
        <div className="project-card-badge">
          <span>VIEW PROJECT</span>
          <ArrowUpRight size={14} />
        </div>

        {/* Dimension Pill */}
        {project.dimensions && (
          <div className="project-card-dim">
            {project.dimensions}
          </div>
        )}
      </div>

      <div className="project-card-body">
        <div className="project-card-meta">
          <span className="project-card-category">{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="project-card-title">
          <span>{project.title}</span>
          <ArrowUpRight size={18} style={{ color: 'var(--muted)', flexShrink: 0 }} />
        </h3>

        <p className="project-card-desc">
          {project.description}
        </p>
      </div>
    </article>
  );
};
