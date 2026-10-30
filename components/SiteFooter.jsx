import Brand from '@/components/Brand';
import { localePath, messages } from '@/lib/i18n';
import { legalPath, legalUi } from '@/lib/legal';

export default function SiteFooter({ locale, document }) {
  const t = messages[locale];
  const ui = legalUi[locale];
  const home = document ? localePath(locale) : '#home';

  return <footer className="site-footer">
    <div className="footer-main">
      <Brand label={t.homeLabel} href={home} />
      <span className="footer-tagline">{t.contact.footer}</span>
      <a className="footer-home" href={home}>{document ? `← ${ui.home}` : t.contact.top}</a>
      <span className="mono">© 2026</span>
    </div>
    <nav className="footer-legal" aria-label={ui.navigation}>
      <a href={legalPath(locale, 'impressum')} aria-current={document === 'impressum' ? 'page' : undefined}>{ui.impressum}</a>
      <a href={legalPath(locale, 'datenschutz')} aria-current={document === 'datenschutz' ? 'page' : undefined}>{ui.datenschutz}</a>
    </nav>
  </footer>;
}
