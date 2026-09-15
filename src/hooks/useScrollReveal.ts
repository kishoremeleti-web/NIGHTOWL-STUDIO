import { useEffect } from 'react';

/**
 * useScrollReveal: Efficient IntersectionObserver hook to trigger scroll-driven
 * editorial reveals without heavy scroll listeners. Automatically respects prefers-reduced-motion.
 */
export function useScrollReveal(dependency?: unknown) {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Force all elements to visible immediately
      document.querySelectorAll('.reveal-init, .reveal-mask-init, .reveal-line-init').forEach((el) => {
        el.classList.add('reveal-visible', 'reveal-mask-visible', 'reveal-line-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el.classList.contains('reveal-init')) {
              el.classList.add('reveal-visible');
            }
            if (el.classList.contains('reveal-mask-init')) {
              el.classList.add('reveal-mask-visible');
            }
            if (el.classList.contains('reveal-line-init')) {
              el.classList.add('reveal-line-visible');
            }
            // Unobserve after reveal to save CPU cycles
            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const elements = document.querySelectorAll(
      '.reveal-init:not(.reveal-visible), .reveal-mask-init:not(.reveal-mask-visible), .reveal-line-init:not(.reveal-line-visible)'
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [dependency]);
}
