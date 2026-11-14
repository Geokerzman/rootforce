import BrandMark from '@/components/BrandMark';

export default function Brand({ label, href = '#home' }) {
  return <a className="brand" href={href} aria-label={label}>
    <BrandMark className="brand-symbol" />
    <span className="brand-wordmark">rootforce<small>.dev</small></span>
  </a>;
}
