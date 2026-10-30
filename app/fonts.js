import { Golos_Text, IBM_Plex_Mono } from 'next/font/google';

const golos = Golos_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-golos',
});

const mono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin', 'cyrillic'],
  preload: false,
  display: 'swap',
  variable: '--font-mono',
});

export const fontVariables = `${golos.variable} ${mono.variable}`;
