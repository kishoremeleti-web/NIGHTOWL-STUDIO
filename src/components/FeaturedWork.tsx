import React, { useState, useMemo } from 'react';
import './FeaturedWork.css';
import type { Project, ProjectCategory } from '../types';
import { projectsData } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ArrowUpRight, Maximize2, Layers } from 'lucide-react';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Poster Design",
  "Flex & Banner Design",
  "Social Media Campaign",
  "Event Branding",
  "Product Promotion",
  "Festival Creative",
  "Campaign Visuals"
];

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const dominantProject = filteredProjects[0];
  const panoramicProject = filteredProjects.find(p => p.aspectRatio === 'panoramic') || filteredProjects[1];
  const secondaryProjects = filteredProjects.filter(p => p.id !== dominantProject?.id && p.id !== panoramicProject?.id);

  return (
    <section className="section-pad work-section" id="work" aria-label="Selected Design Projects">
      <div className="container">
        <SectionHeading
          number="01"
          tag="SELECTED WORK // 2025–2026"
          title="Curated Graphic Archive"
          subtitle="Editorial posters, monumental flex banners, identity systems, and high-conversion social campaigns."
          action={
            <div className="mono-meta">
              <Layers size={14} style={{ color: 'var(--cobalt)' }} />
              <span>SHOWING {filteredProjects.length} OF {projectsData.length} WORKS</span>
            </div>
          }
        />

        {/* Category Filter Pills */}
        <div className="filter-bar" role="tablist" aria-label="Project Category Filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="work-editorial-layout">
          {/* 1. Dominant Featured Project Showcase (Editorial Asymmetric Layout) */}
          {dominantProject && (
            <div 
              className="dominant-showcase reveal-init"
              onClick={() => onSelectProject(dominantProject)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectProject(dominantProject);
              }}
              aria-label={`Featured Project: ${dominantProject.title}`}
            >
              <div className="dominant-media">
                <img
                  src={dominantProject.coverImage}
                  alt={dominantProject.title}
                  className="dominant-img"
                  loading="lazy"
                />
              </div>

              <div className="dominant-content">
                <div>
                  <div className="dominant-tag-row">
                    <span className="mono-meta mono-meta-cobalt">
                      ★ LEAD FEATURED COMMISSIONS
                    </span>
                    <span className="mono-meta">{dominantProject.year}</span>
                  </div>

                  <h3 className="dominant-title">{dominantProject.title}</h3>
                  <p className="dominant-desc">{dominantProject.description}</p>
                </div>

                <div>
                  <div className="dominant-specs-list">
                    <div>
                      <div className="mono-meta">CATEGORY</div>
                      <div style={{ color: 'var(--paper)', fontWeight: 700, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                        {dominantProject.category}
                      </div>
                    </div>
                    <div>
                      <div className="mono-meta">CLIENT</div>
                      <div style={{ color: 'var(--paper)', fontWeight: 700, fontSize: '0.9rem', marginTop: '0.2rem' }}>
                        {dominantProject.client}
                      </div>
                    </div>
                    <div>
                      <div className="mono-meta">PRINT SPEC</div>
                      <div style={{ color: 'var(--ice-dim)', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                        {dominantProject.printSpec || '300 DPI // Press Ready'}
                      </div>
                    </div>
                    <div>
                      <div className="mono-meta">SCALE</div>
                      <div style={{ color: 'var(--ice-dim)', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                        {dominantProject.dimensions || 'A0 / 841 x 1189 mm'}
                      </div>
                    </div>
                  </div>

                  <div className="dominant-cta-row">
                    <span className="btn-editorial" style={{ padding: '0.75rem 1.4rem' }}>
                      <span>View Case Study</span>
                      <Maximize2 size={14} />
                    </span>
                    <span className="mono-meta">PRESS [ENTER] TO EXPAND</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Panoramic Flex & Outdoor Billboard Feature Strip */}
          {panoramicProject && (
            <div
              className="panoramic-strip reveal-init"
              onClick={() => onSelectProject(panoramicProject)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectProject(panoramicProject);
              }}
              aria-label={`Panoramic Outdoor Feature: ${panoramicProject.title}`}
            >
              <div className="panoramic-media">
                <img
                  src={panoramicProject.coverImage}
                  alt={panoramicProject.title}
                  className="panoramic-img"
                  loading="lazy"
                />
                <div className="panoramic-overlay">
                  <div className="panoramic-badge">
                    <span>LARGE-FORMAT OUTDOOR // {panoramicProject.category.toUpperCase()}</span>
                  </div>
                  <h3 className="panoramic-title">{panoramicProject.title}</h3>
                  <div className="panoramic-meta">
                    <span>DIMENSIONS: {panoramicProject.dimensions}</span>
                    <span>//</span>
                    <span>CLIENT: {panoramicProject.client}</span>
                    <span>//</span>
                    <span>YEAR: {panoramicProject.year}</span>
                    <ArrowUpRight size={16} style={{ marginLeft: 'auto', color: 'var(--cobalt)' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Staggered Asymmetrical Grid for Remaining Projects */}
          <div className="staggered-grid">
            {secondaryProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx + 2}
                onSelect={onSelectProject}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
