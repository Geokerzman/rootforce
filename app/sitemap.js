import { locales, localePath } from '@/lib/i18n';
import { servicePath, serviceSlugs } from '@/lib/services';
import { legalPath } from '@/lib/legal';
import { absoluteUrl } from '@/lib/seo';
import { contentDates } from '@/lib/content-dates';

export const dynamic = 'force-static';

export default function sitemap() {
  return locales.flatMap(locale => [
    { url: absoluteUrl(localePath(locale)), lastModified: contentDates.home },
    ...serviceSlugs.map(slug => ({ url: absoluteUrl(servicePath(locale, slug)), lastModified: contentDates.services[slug] })),
    ...['impressum', 'datenschutz'].map(document => ({ url: absoluteUrl(legalPath(locale, document)), lastModified: contentDates.legal[document] })),
  ]);
}
