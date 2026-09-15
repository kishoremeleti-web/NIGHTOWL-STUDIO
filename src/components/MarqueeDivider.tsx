import React from 'react';
import './MarqueeDivider.css';

interface MarqueeDividerProps {
  phrases?: string[];
  reverse?: boolean;
}

const DEFAULT_PHRASES = [
  "MONUMENTAL POSTER DESIGN",
  "OUTDOOR FLEX & HIGHWAY BILLBOARDS",
  "HIGH-STOPPING-POWER SOCIAL CREATIVES",
  "SWISS TYPOGRAPHY & RIGOROUS GRIDS",
  "FESTIVAL BRANDING & SPATIAL GRAPHICS",
  "300 DPI // PRESS MASTER READY"
];

export const MarqueeDivider: React.FC<MarqueeDividerProps> = ({
  phrases = DEFAULT_PHRASES,
  reverse = false
}) => {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div 
        className="marquee-track"
        style={reverse ? { animationDirection: 'reverse' } : {}}
      >
        {[...phrases, ...phrases].map((text, i) => (
          <div key={i} className="marquee-item">
            <span>{text}</span>
            <span className="marquee-symbol">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
