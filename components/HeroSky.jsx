import sky from '@/public/images/hero-sky.webp';
import mobileSky from '@/public/images/hero-sky-mobile.webp';
import './HeroSky.css';

export default function HeroSky({ priority = false }) {
  return <div className="hero-sky" aria-hidden="true">
    <picture>
      <source media="(max-width: 700px)" srcSet={mobileSky.src} />
      <img src={sky.src} alt="" width={sky.width} height={sky.height} loading={priority ? undefined : 'lazy'}
        fetchPriority={priority ? 'high' : undefined} />
    </picture>
    <video className="hero-sky-video" muted loop playsInline preload="none"
      data-src="/images/hero-sky-clouds.mp4" data-mobile-src="/images/hero-sky-clouds-mobile.mp4" />
  </div>;
}
