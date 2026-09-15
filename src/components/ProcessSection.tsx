import React from 'react';
import './ProcessSection.css';
import { processSteps } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="section-pad process-section" id="process" aria-label="Design Process and Methodology">
      <div className="container">
        <SectionHeading
          number="04"
          tag="WORKFLOW & METHODOLOGY"
          title="From Brief to Press Master"
          subtitle="A disciplined, transparent 5-stage production lifecycle ensuring typographic rigor and flawless print delivery."
        />

        <div className="process-track">
          {processSteps.map((step) => (
            <div key={step.step} className="process-step-card reveal-init">
              <div>
                <div className="process-step-top">
                  <span className="process-step-num">{step.step}</span>
                  <span className="process-step-duration">{step.duration}</span>
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>

              <div className="process-step-action">
                <CheckCircle size={14} style={{ color: 'var(--cobalt)', flexShrink: 0 }} />
                <span>{step.keyAction}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
