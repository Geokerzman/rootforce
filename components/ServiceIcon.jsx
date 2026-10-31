import RedesignIcon from '@/components/RedesignIcon';

export default function ServiceIcon({ glyph, size = 40 }) {
  if (glyph === 'redesign') return <RedesignIcon size={size} />;
  if (!['design', 'consulting', 'repair'].includes(glyph)) return glyph;

  return <svg
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.15"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ maxWidth: '100%', verticalAlign: 'top' }}
    aria-hidden="true"
    focusable="false"
  >
    {glyph === 'repair' ? <path d="M8 6 2 16l6 10M24 6l6 10-6 10M11 16l4 4 7-8" /> : glyph === 'design'
      ? <path d="M16 3.5v25M3.5 16h25M7.2 7.2l17.6 17.6M7.2 24.8 24.8 7.2" />
      : <path d="M5 27 27 5M12 5h15v15" />}
  </svg>;
}
