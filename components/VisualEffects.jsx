'use client';

import { useEffect } from 'react';
import { setupAscii } from '@/lib/ascii';
import { setupSaturn } from '@/lib/saturn';

export default function VisualEffects({ labels }) {
  useEffect(() => {
    const saturn = setupSaturn(document.querySelector('.hero-saturn'));
    const cleanup = setupAscii(labels, saturn?.setMotion);
    return () => {
      cleanup();
      saturn?.disconnect();
    };
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
