import Brand from '@/components/Brand';
import LanguageSelect from '@/components/LanguageSelect';
import NavigationMenu from '@/components/NavigationMenu';
import { localePath, messages } from '@/lib/i18n';
import { legalPath, legalUi } from '@/lib/legal';
import { servicePath, serviceUi } from '@/lib/services';
import './SiteHeader.css';

export default function SiteHeader({ locale, service, document, contactAction }) {
  const t = messages[locale];
  const legal = legalUi[locale];
  const home = localePath(locale);
  const pagePath = service ? `services/${service}` : document;
  const variant = service ? 'service' : document ? 'legal' : 'landing';

  return <header className={`site-header ${variant}-header`}>
    <Brand label={t.homeLabel} href={pagePath ? home : undefined} />
    <nav className={document ? 'legal-header-nav' : undefined} aria-label={t.navigation}>
      {service && <a className="service-header-home" href={`${home}#approach`}>{serviceUi[locale].back}</a>}
      {document && <a className="legal-home-link" href={home}>{legal.homeShort}</a>}
      {contactAction}
      <LanguageSelect locale={locale} label={t.language} pagePath={pagePath} />
      <NavigationMenu label={t.nav.menu}>
        <div>
          <p className="site-menu-label mono">{t.nav.services}</p>
          <ul aria-label={t.nav.services}>
            <li><a href={`${home}#approach`}>{serviceUi[locale].back}</a></li>
            {t.studio.services.map(({ slug, title }) => <li key={slug || 'advertising'}>
              <a href={slug ? servicePath(locale, slug) : `${home}#advertising`}
                aria-current={slug && service === slug ? 'page' : undefined}>{title}</a>
            </li>)}
          </ul>
        </div>
        <div>
          <p className="site-menu-label mono">{t.nav.pages}</p>
          <ul aria-label={t.nav.pages}>
            <li><a href={home} aria-current={!pagePath ? 'page' : undefined}>{t.nav.home}</a></li>
            <li><a href={`${home}#process`}>{t.nav.process}</a></li>
            <li><a href={service ? '#contact' : `${home}#contact`}>{t.nav.contact}</a></li>
          </ul>
          <p className="site-menu-label mono">{legal.navigation}</p>
          <ul aria-label={legal.navigation}>
            {['impressum', 'datenschutz'].map(item => <li key={item}>
              <a href={legalPath(locale, item)} aria-current={document === item ? 'page' : undefined}>{legal[item]}</a>
            </li>)}
          </ul>
        </div>
      </NavigationMenu>
    </nav>
  </header>;
}
