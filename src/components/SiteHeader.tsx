import React, { useState, useEffect } from 'react';
import './SiteHeader.css';
import { studioInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const SiteHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Work', href: '#work', num: '01' },
    { label: 'Services', href: '#services', num: '02' },
    { label: 'About', href: '#about', num: '03' },
    { label: 'Process', href: '#process', num: '04' },
    { label: 'Contact', href: '#contact', num: '05' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            <a href="#" className="header-brand" aria-label={`${studioInfo.studioName} Home`}>
              <span className="brand-symbol" />
              <span className="brand-text">{studioInfo.studioName}</span>
              <span className="brand-role">/ {studioInfo.designerName}</span>
            </a>

            <nav className="header-nav" aria-label="Main Navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="header-actions">
              <div className="availability-pill">
                <span className="status-dot-pulse" />
                <span>{studioInfo.availability}</span>
              </div>

              <a 
                href="#contact" 
                className="btn-editorial"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.72rem' }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
              >
                <span>Initiate Project</span>
                <ArrowUpRight size={14} />
              </a>

              <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <span className="mono-meta">
            <span className="status-dot-pulse" />
            {studioInfo.studioName} // MENU
          </span>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              <span>{item.label}</span>
              <span className="number">{item.num}</span>
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <div className="mono-meta">
            <span>LOCATION: {studioInfo.location}</span>
          </div>
          <div className="mono-meta mono-meta-cobalt">
            <span>DIRECT: {studioInfo.email}</span>
          </div>
        </div>
      </div>
    </>
  );
};
