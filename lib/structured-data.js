import { localePath, messages } from '@/lib/i18n';
import { legalDocuments, legalPath, provider } from '@/lib/legal';
import { servicePages, servicePath } from '@/lib/services';
import { absoluteUrl, homeSeo, siteUrl, serviceSeo } from '@/lib/seo';
import { contentDates } from '@/lib/content-dates';

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const organization = {
  '@type': 'Organization', '@id': organizationId,
  name: 'rootforce', alternateName: 'rootforce.dev', url: siteUrl,
  logo: { '@type': 'ImageObject', url: absoluteUrl('/brand/rootforce-logo.png'), width: 512, height: 512 },
  email: provider.email,
};
const website = { '@type': 'WebSite', '@id': websiteId, url: siteUrl, name: 'rootforce', alternateName: 'rootforce.dev', publisher: { '@id': organizationId }, inLanguage: ['en', 'de', 'ru'] };

function webPage({ locale, path, title, headline, description, dateModified, ...properties }) {
  const url = absoluteUrl(path);
  return {
    '@type': 'WebPage', '@id': `${url}#webpage`, url,
    name: title, headline, description, inLanguage: locale, dateModified,
    isPartOf: { '@id': websiteId }, publisher: { '@id': organizationId },
    ...properties,
  };
}

export function homeStructuredData(locale) {
  const url = absoluteUrl(localePath(locale));
  const services = messages[locale].studio.services.map(service => ({
    '@type': 'Service', '@id': service.slug ? `${absoluteUrl(servicePath(locale, service.slug))}#service` : `${url}#advertising-service`,
    name: service.title, serviceType: service.title, description: service.description,
    url: service.slug ? absoluteUrl(servicePath(locale, service.slug)) : `${url}#advertising`,
    provider: { '@id': organizationId },
  }));
  return { '@context': 'https://schema.org', '@graph': [
    organization, website,
    webPage({
      locale, path: localePath(locale), title: homeSeo[locale].title,
      headline: `${messages[locale].hero.title[0]} ${messages[locale].hero.title.slice(1).join('')}`,
      description: homeSeo[locale].description, dateModified: contentDates.home,
      about: { '@id': organizationId }, mainEntity: { '@id': `${url}#services` },
    }),
    { '@type': 'ItemList', '@id': `${url}#services`, name: messages[locale].studio.servicesLabel, numberOfItems: services.length, itemListElement: services.map((service, index) => ({ '@type': 'ListItem', position: index + 1, item: service })) },
  ] };
}

export function serviceStructuredData(locale, slug) {
  const content = servicePages[locale][slug];
  const url = absoluteUrl(servicePath(locale, slug));
  return { '@context': 'https://schema.org', '@graph': [
    organization, website,
    webPage({
      locale, path: servicePath(locale, slug), title: serviceSeo[locale][slug].title,
      headline: content.headline || content.name, description: content.intro, dateModified: contentDates.services[slug],
      mainEntity: { '@id': `${url}#service` }, breadcrumb: { '@id': `${url}#breadcrumb` },
    }),
    { '@type': 'Service', '@id': `${url}#service`, url, name: content.name, description: content.intro, serviceType: content.name, provider: { '@id': organizationId }, mainEntityOfPage: { '@id': `${url}#webpage` } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: { en: 'Home', de: 'Startseite', ru: 'Главная' }[locale], item: absoluteUrl(localePath(locale)) },
      { '@type': 'ListItem', position: 2, name: content.name, item: url },
    ] },
  ] };
}

export function legalStructuredData(locale, document) {
  const content = legalDocuments[locale][document];
  return { '@context': 'https://schema.org', '@graph': [
    organization, website,
    webPage({
      locale, path: legalPath(locale, document), title: `${content.title} — rootforce.dev`,
      headline: content.title, description: content.description, dateModified: contentDates.legal[document],
      about: { '@id': organizationId },
    }),
  ] };
}
