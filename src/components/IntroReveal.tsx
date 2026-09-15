import React, { useState, useEffect } from 'react';
import './IntroReveal.css';
import { studioInfo } from '../data/portfolioData';

interface IntroRevealProps {
  onComplete: () => void;
}

export const IntroReveal: React.FC<IntroRevealProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Check reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsMounted(false);
      onComplete();
      return;
    }

    // Auto trigger exit transition after 900ms
    const timer = setTimeout(() => {
      triggerExit();
    }, 900);

    const handleKey = () => triggerExit();
    window.addEventListener('keydown', handleKey);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const triggerExit = () => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      setIsMounted(false);
      onComplete();
    }, 650);
  };

  if (!isMounted) return null;

  return (
    <div 
      className={`intro-curtain ${isExiting ? 'intro-exiting' : ''}`} 
      onClick={triggerExit}
      role="dialog"
      aria-label="Welcome to Graphic Design Portfolio"
    >
      <div className="intro-header-bar">
        <span className="mono-meta">
          <span className="intro-status-dot" />
          SYSTEM // INITIALIZING ARCHIVE
        </span>
        <span className="mono-meta">{studioInfo.location}</span>
      </div>

      <div className="intro-center">
        <div className="intro-title-wrapper">
          <h1 className="intro-title">{studioInfo.studioName}</h1>
        </div>
        <div className="intro-accent-bar" />
        <p className="mono-meta mono-meta-cobalt">
          POSTER // FLEX // SOCIAL // CAMPAIGNS // 2026
        </p>
      </div>

      <div className="intro-footer-bar">
        <span>ARCHIVE_INDEX_01 // 300 DPI READY</span>
        <button 
          className="intro-skip-btn" 
          onClick={(e) => { e.stopPropagation(); triggerExit(); }}
          aria-label="Skip Intro"
        >
          [ESC / CLICK TO ENTER]
        </button>
      </div>
    </div>
  );
};
