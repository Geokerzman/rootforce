import cloudAvif from '@/public/images/cloud-texture.avif';
import cloudWebp from '@/public/images/cloud-texture.webp';
import mobileAvif from '@/public/images/cloud-texture-mobile.avif';
import mobileWebp from '@/public/images/cloud-texture-mobile.webp';

export default function Cloudscape({ priority = false }) {
  return <>
    {priority && <>
      <link rel="preload" as="image" href={cloudAvif.src} type="image/avif" media="(min-width: 701px)" fetchPriority="high" />
      <link rel="preload" as="image" href={mobileAvif.src} type="image/avif" media="(max-width: 700px)" fetchPriority="high" />
    </>}
    <div className="cloudscape" aria-hidden="true" style={{
      '--cloud-desktop': `image-set(url("${cloudAvif.src}") type("image/avif"), url("${cloudWebp.src}") type("image/webp"))`,
      '--cloud-mobile': `image-set(url("${mobileAvif.src}") type("image/avif"), url("${mobileWebp.src}") type("image/webp"))`,
    }} />
  </>;
}
