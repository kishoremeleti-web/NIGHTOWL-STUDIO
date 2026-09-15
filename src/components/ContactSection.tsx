import React, { useState } from 'react';
import './ContactSection.css';
import { studioInfo } from '../data/portfolioData';
import { Mail, Phone, MessageSquare, Send, Globe } from 'lucide-react';

const PROJECT_TYPES = [
  "Poster Design (Screen/Offset)",
  "Flex & Outdoor Billboard",
  "Social Campaign Suite",
  "Event & Festival Branding",
  "Product Packaging / POS",
  "Campaign Key Visual"
];

const TIMELINES = [
  "Immediate (< 2 Weeks)",
  "Standard (3–4 Weeks)",
  "Upcoming Quarter"
];

export const ContactSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINES[1]);
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [copiedStatus, setCopiedStatus] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Project Inquiry: ${selectedType} — via Portfolio`);
    const mailtoBody = encodeURIComponent(
      `Hello ${studioInfo.designerName},\n\n` +
      `I am interested in commissioning a project with ${studioInfo.studioName}.\n\n` +
      `Discipline: ${selectedType}\n` +
      `Timeline: ${selectedTimeline}\n` +
      `Client Contact: ${emailInput || 'Provided via form'}\n\n` +
      `Project Scope:\n${messageInput || 'Looking to discuss campaign requirements and scheduling.'}\n\n` +
      `Best regards`
    );
    window.location.href = `mailto:${studioInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(studioInfo.email);
    setCopiedStatus(true);
    setTimeout(() => setCopiedStatus(false), 2500);
  };

  return (
    <section className="section-pad contact-section" id="contact" aria-label="Contact Studio">
      <div className="container">
        <div className="contact-poster-frame reveal-init">
          {/* Print Registration Markers */}
          <span className="registration-cross contact-reg-tl">+</span>
          <span className="registration-cross contact-reg-tr">+</span>
          <span className="registration-cross contact-reg-bl">+</span>
          <span className="registration-cross contact-reg-br">+</span>

          <div className="mono-meta mono-meta-cobalt" style={{ marginBottom: '1.5rem' }}>
            <span>COMMISSION INTAKE // 2026 OPENING</span>
          </div>

          <h2 className="contact-headline">
            Have a campaign <br />
            worth <span className="accent">stopping for?</span>
          </h2>

          <div className="contact-grid">
            {/* Left: Interactive Brief Builder */}
            <form className="brief-builder" onSubmit={handleSend}>
              <div>
                <label className="brief-label">01 // Select Project Discipline</label>
                <div className="brief-pills-row" role="group" aria-label="Select discipline">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`brief-pill ${selectedType === type ? 'selected' : ''}`}
                      onClick={() => setSelectedType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="brief-label">02 // Target Timeline</label>
                <div className="brief-pills-row" role="group" aria-label="Select timeline">
                  {TIMELINES.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={`brief-pill ${selectedTimeline === time ? 'selected' : ''}`}
                      onClick={() => setSelectedTimeline(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="brief-label" htmlFor="client-email">03 // Your Email Address</label>
                <input
                  id="client-email"
                  type="email"
                  className="brief-input"
                  placeholder="name@organization.com"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="brief-label" htmlFor="client-notes">04 // Project Brief or Concept Notes</label>
                <textarea
                  id="client-notes"
                  className="brief-input"
                  rows={3}
                  placeholder="Outline dimensions, deliverables, or brand direction..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
              </div>

              <div>
                <button type="submit" className="btn-editorial" style={{ width: '100%' }}>
                  <span>Start a project</span>
                  <Send size={15} />
                </button>
              </div>
            </form>

            {/* Right: Direct Contact & Coordinates */}
            <div className="direct-info-box">
              <div className="direct-link-row">
                <div className="direct-link-item">
                  <span className="direct-link-label">Direct Studio Email</span>
                  <a 
                    href={`mailto:${studioInfo.email}`} 
                    className="direct-link-val"
                    title="Send an email"
                  >
                    <Mail size={16} style={{ color: 'var(--cobalt)' }} />
                    <span>{studioInfo.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="mono-meta"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', marginTop: '0.2rem' }}
                  >
                    {copiedStatus ? (
                      <span style={{ color: '#4ade80' }}>✓ COPIED TO CLIPBOARD</span>
                    ) : (
                      <span>[CLICK TO COPY EMAIL]</span>
                    )}
                  </button>
                </div>

                <div className="direct-link-item">
                  <span className="direct-link-label">Studio Direct Line / WhatsApp</span>
                  <a href={`tel:${studioInfo.phone}`} className="direct-link-val">
                    <Phone size={16} style={{ color: 'var(--cobalt)' }} />
                    <span>{studioInfo.phone}</span>
                  </a>
                  <a 
                    href={studioInfo.whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mono-meta mono-meta-cobalt"
                    style={{ marginTop: '0.2rem' }}
                  >
                    <MessageSquare size={12} />
                    <span>CHAT VIA WHATSAPP // {studioInfo.whatsappUrl}</span>
                  </a>
                </div>

                <div className="direct-link-item">
                  <span className="direct-link-label">Studio Base</span>
                  <div className="direct-link-val" style={{ color: 'var(--ice-dim)' }}>
                    <span>{studioInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <span className="direct-link-label" style={{ display: 'block', marginBottom: '0.6rem' }}>
                  Portfolio & Public Archives
                </span>
                <div className="socials-row">
                  <a
                    href={studioInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-link"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a
                    href={studioInfo.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-link"
                  >
                    <Globe size={13} />
                    <span>Behance</span>
                  </a>
                  <a
                    href={studioInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill-link"
                  >
                    <MessageSquare size={13} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
