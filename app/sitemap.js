import { locales, localePath } from '@/lib/i18n';
import { servicePath, serviceSlugs } from '@/lib/services';
import { legalPath } from '@/lib/legal';
import { absoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap() {
  return locales.flatMap(locale => [
    { url: absoluteUrl(localePath(locale)) },
    ...serviceSlugs.map(slug => ({ url: absoluteUrl(servicePath(locale, slug)) })),
    ...['impressum', 'datenschutz'].map(document => ({ url: absoluteUrl(legalPath(locale, document)) })),
  ]);
}
