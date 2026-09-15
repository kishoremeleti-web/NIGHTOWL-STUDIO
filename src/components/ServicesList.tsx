import React, { useState } from 'react';
import './ServicesList.css';
import { servicesData } from '../data/portfolioData';
import { SectionHeading } from './SectionHeading';
import { Plus, ArrowUpRight } from 'lucide-react';

export const ServicesList: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleRow = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section-pad services-section" id="services" aria-label="Services and Capabilities">
      <div className="container">
        <SectionHeading
          number="02"
          tag="CAPABILITIES & SPECIFICATIONS"
          title="Print & Digital Disciplines"
          subtitle="Specialized graphic execution spanning high-touch physical screenprints to high-throughput social campaigns."
        />

        <div className="services-menu" role="list">
          {servicesData.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={service.number}
                className={`service-row reveal-init ${isExpanded ? 'active' : ''}`}
                onClick={() => toggleRow(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleRow(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                aria-label={`${service.title} capabilities, click to expand specs`}
              >
                <div className="service-row-main">
                  <div className="service-row-left">
                    <span className="service-number">{service.number}</span>
                    <h3 className="service-title">{service.title}</h3>
                  </div>

                  <div className="service-row-right">
                    <span className="mono-meta service-spec-badge">
                      {isExpanded ? 'COLLAPSE' : 'SPECIFICATIONS'}
                    </span>
                    <div className={`service-toggle-icon ${isExpanded ? 'expanded' : ''}`}>
                      <Plus size={18} />
                    </div>
                  </div>
                </div>

                {/* Collapsible Content Area */}
                <div className={`service-expanded-panel ${isExpanded ? 'show' : ''}`}>
                  <div className="service-panel-content">
                    <div>
                      <p className="service-desc-text">
                        {service.description}
                      </p>
                      <div className="service-specs-box">
                        <strong>OUTPUT STANDARD:</strong> {service.specs}
                      </div>
                    </div>

                    <div>
                      <h4 className="service-deliverables-title">Deliverables Architecture</h4>
                      <ul className="service-deliverables-list">
                        {service.deliverables.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <div style={{ marginTop: '1.5rem' }}>
                        <a 
                          href="#contact" 
                          className="btn-editorial" 
                          style={{ padding: '0.6rem 1.2rem', fontSize: '0.72rem' }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <span>Commission {service.title}</span>
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
