import React from 'react';
import './AboutSection.css';
import { studioInfo } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { Check, MapPin, Printer } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="section-pad about-section" id="about" aria-label="About the Designer and Studio">
      <div className="container">
        <SectionHeading
          number="03"
          tag="STUDIO PROFILE & METHODOLOGY"
          title="Author & Vision"
          subtitle={`${studioInfo.designerName} / ${studioInfo.studioName} — Based in ${studioInfo.location}`}
        />

        <div className="about-grid">
          {/* Biography & Strengths */}
          <div className="about-narrative reveal-init">
            <h3 className="about-bio-lead">
              "We design high-stopping-power visuals for cultural festivals, commercial launches, and ambitious brand campaigns."
            </h3>

            {studioInfo.biography.map((paragraph, i) => (
              <p key={i} className="about-bio-body">
                {paragraph}
              </p>
            ))}

            {/* Strengths Breakdown */}
            <div className="strengths-grid">
              {studioInfo.strengths.map((item, idx) => (
                <div key={idx} className="strength-item">
                  <h4 className="strength-title">
                    <Check size={16} style={{ color: 'var(--cobalt)', flexShrink: 0 }} />
                    {item.title}
                  </h4>
                  <p className="strength-desc">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Numbers & Credentials */}
            <div className="stats-strip">
              {studioInfo.stats.map((stat, i) => (
                <div key={i} className="stat-box">
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Print Process Visual Frame */}
          <div className="about-visual-frame reveal-init">
            <div className="about-visual-inner">
              <img
                src="/images/projects/artwork-15.jpg"
                alt="Graphic design campaign and print archive"
                className="about-visual-img"
                loading="lazy"
              />
              <div className="about-visual-stamp">
                <div>
                  <div className="mono-meta mono-meta-cobalt" style={{ marginBottom: '0.2rem' }}>
                    <MapPin size={12} />
                    {studioInfo.location}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--paper)', fontWeight: 700 }}>
                    {studioInfo.studioName} // ARCHIVE
                  </div>
                </div>
                <div className="mono-meta" style={{ textAlign: 'right' }}>
                  <Printer size={12} />
                  <span>300 DPI VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
