'use client';

import { useEffect } from 'react';
import { setupAscii } from '@/lib/ascii';

export default function VisualEffects({ labels }) {
  useEffect(() => {
    const cleanup = setupAscii(labels);
    return cleanup;
  }, [labels]);

  useEffect(() => {
    const sun = document.querySelector('.studio-sun');
    if (!sun) return;

    const observer = new IntersectionObserver(([entry]) => {
      sun.toggleAttribute('data-visible', entry.isIntersecting);
    });
    observer.observe(sun);
    return () => observer.disconnect();
  }, []);

  return null;
}
