import React, { useState, useEffect } from 'react';
import './SiteFooter.css';
import { studioInfo } from '../data/portfolioData';
import { ArrowUp, Clock } from 'lucide-react';

export const SiteFooter: React.FC = () => {
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site Footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand">{studioInfo.studioName}</div>
              <p className="mono-meta" style={{ marginTop: '0.4rem' }}>
                Independent Graphic Design & Visual Direction / {studioInfo.designerName}
              </p>
            </div>

            <button 
              className="footer-back-to-top" 
              onClick={scrollToTop}
              aria-label="Scroll to top of portfolio"
            >
              <span>TOP OF ARCHIVE</span>
              <ArrowUp size={14} />
            </button>
          </div>

          <div className="footer-bottom">
            <div className="footer-colophon">
              <span>{studioInfo.location}</span>
              <span>//</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={12} style={{ color: 'var(--cobalt)' }} />
                <span>LOCAL TIME: {timeString || 'LIVE'}</span>
              </span>
              <span>//</span>
              <span>300 DPI MASTER PRINT STANDARDS</span>
            </div>

            <div>
              © {new Date().getFullYear()} {studioInfo.studioName}. All editorial visual rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
