'use client';

import { useEffect } from 'react';
import { setupAscii } from '@/lib/ascii';
import { setupHeroSky } from '@/lib/hero-sky';
import { setupSaturn } from '@/lib/saturn';

export default function VisualEffects({ labels }) {
  useEffect(() => {
    const saturn = setupSaturn(document.querySelector('.hero-saturn'));
    const sky = setupHeroSky(document.querySelector('.hero-sky-video'));
    const cleanup = setupAscii(labels, enabled => {
      saturn?.setMotion(enabled);
      sky?.setMotion(enabled);
    });
    return () => {
      cleanup();
      saturn?.disconnect();
      sky?.disconnect();
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
