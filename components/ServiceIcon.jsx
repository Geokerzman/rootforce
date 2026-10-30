import RedesignIcon from '@/components/RedesignIcon';

export default function ServiceIcon({ glyph }) {
  if (glyph === 'redesign') return <RedesignIcon />;
  if (glyph !== 'design' && glyph !== 'consulting') return glyph;

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
    {glyph === 'design'
      ? <path d="M16 3.5v25M3.5 16h25M7.2 7.2l17.6 17.6M7.2 24.8 24.8 7.2" />
      : <path d="M5 27 27 5M12 5h15v15" />}
  </svg>;
}
