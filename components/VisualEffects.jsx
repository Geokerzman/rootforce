'use client';

import { useEffect } from 'react';
import { setupAscii } from '@/lib/ascii';

export default function VisualEffects({ labels }) {
  useEffect(() => {
    const cleanup = setupAscii(labels);
    return cleanup;
  }, [labels]);
  return null;
}
