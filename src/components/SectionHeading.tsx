import React from 'react';

interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'between';
  action?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  subtitle,
  align = 'between',
  action
}) => {
  return (
    <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)', position: 'relative' }}>
      {/* Decorative Drawing Hairline */}
      <div 
        className="reveal-line-init"
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--line)',
          marginBottom: '1.5rem'
        }} 
      />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        ...(align === 'between' ? {
          '@media (min-width: 768px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }
        } : {})
      }}>
        <div>
          {/* Eyebrow and Number Tag */}
          <div className="reveal-init" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem' }}>
            <span className="mono-meta mono-meta-cobalt">{number}</span>
            <span style={{ color: 'var(--line)' }}>//</span>
            <span className="mono-meta">{tag}</span>
          </div>

          {/* Masked Heading */}
          <div className="anim-mask-reveal">
            <h2 style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 600,
              letterSpacing: '-0.02em',
              lineHeight: 1.15
            }}>
              {title}
            </h2>
          </div>

          {subtitle && (
            <p className="reveal-init" style={{
              marginTop: '0.75rem',
              maxWidth: '560px',
              fontSize: 'var(--text-base)',
              color: 'var(--ice-dim)'
            }}>
              {subtitle}
            </p>
          )}
        </div>

        {action && (
          <div className="reveal-init" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
            {action}
          </div>
        )}
      </div>
    </div>
  );
};
