import { localePath, messages } from '@/lib/i18n';
import { provider } from '@/lib/legal';
import { servicePages, servicePath } from '@/lib/services';
import { absoluteUrl, homeSeo, siteUrl, serviceSeo } from '@/lib/seo';

const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;
const organization = {
  '@type': 'Organization', '@id': organizationId,
  name: 'rootforce', alternateName: 'rootforce.dev', url: siteUrl,
  logo: { '@type': 'ImageObject', url: absoluteUrl('/brand/rootforce-logo.png'), width: 512, height: 512 },
  email: provider.email,
};
const website = { '@type': 'WebSite', '@id': websiteId, url: siteUrl, name: 'rootforce', alternateName: 'rootforce.dev', publisher: { '@id': organizationId }, inLanguage: ['en', 'de', 'ru'] };

export function homeStructuredData(locale) {
  const url = absoluteUrl(localePath(locale));
  const services = messages[locale].studio.services.map(service => ({
    '@type': 'Service', '@id': service.slug ? `${absoluteUrl(servicePath(locale, service.slug))}#service` : `${url}#advertising-service`,
    name: service.title, description: service.description,
    url: service.slug ? absoluteUrl(servicePath(locale, service.slug)) : `${url}#advertising`,
    provider: { '@id': organizationId },
  }));
  return { '@context': 'https://schema.org', '@graph': [
    organization, website,
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, description: homeSeo[locale].description, name: homeSeo[locale].title, inLanguage: locale, isPartOf: { '@id': websiteId }, about: { '@id': organizationId }, mainEntity: { '@id': `${url}#services` } },
    { '@type': 'ItemList', '@id': `${url}#services`, name: messages[locale].studio.servicesLabel, numberOfItems: services.length, itemListElement: services.map((service, index) => ({ '@type': 'ListItem', position: index + 1, item: service })) },
  ] };
}

export function serviceStructuredData(locale, slug) {
  const content = servicePages[locale][slug];
  const url = absoluteUrl(servicePath(locale, slug));
  return { '@context': 'https://schema.org', '@graph': [
    organization, website,
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: serviceSeo[locale][slug].title, description: content.intro, inLanguage: locale, isPartOf: { '@id': websiteId }, mainEntity: { '@id': `${url}#service` }, breadcrumb: { '@id': `${url}#breadcrumb` } },
    { '@type': 'Service', '@id': `${url}#service`, url, name: content.name, description: content.intro, serviceType: content.name, provider: { '@id': organizationId } },
    { '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: { en: 'Home', de: 'Startseite', ru: 'Главная' }[locale], item: absoluteUrl(localePath(locale)) },
      { '@type': 'ListItem', position: 2, name: content.name, item: url },
    ] },
  ] };
}
