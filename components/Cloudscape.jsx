import cloudAvif from '@/public/images/cloud-texture.avif';
import cloudWebp from '@/public/images/cloud-texture.webp';
import mobileAvif from '@/public/images/cloud-texture-mobile.avif';
import mobileWebp from '@/public/images/cloud-texture-mobile.webp';

export default function Cloudscape() {
  return <div className="cloudscape" aria-hidden="true" style={{
    '--cloud-desktop': `image-set(url("${cloudAvif.src}") type("image/avif"), url("${cloudWebp.src}") type("image/webp"))`,
    '--cloud-mobile': `image-set(url("${mobileAvif.src}") type("image/avif"), url("${mobileWebp.src}") type("image/webp"))`,
  }} />;
}
