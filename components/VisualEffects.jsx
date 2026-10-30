'use client';

import { useEffect } from 'react';
import { setupAscii } from '@/lib/ascii';
import { paintClouds } from '@/lib/cloud-texture';

export default function VisualEffects() {
  useEffect(() => {
    const cleanup = setupAscii();
    paintClouds();
    return cleanup;
  }, []);
  return null;
}
