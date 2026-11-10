import Brand from '@/components/Brand';
import LanguageSelect from '@/components/LanguageSelect';
import SiteFooter from '@/components/SiteFooter';
import StructuredData from '@/components/StructuredData';
import { localePath, messages } from '@/lib/i18n';
import { legalDocuments, legalUi, provider } from '@/lib/legal';
import { legalStructuredData } from '@/lib/structured-data';
import './LegalPage.css';

function Contents({ sections, label }) {
  return <nav aria-label={label} className="legal-contents">
    <ol>{sections.map((section, index) => <li key={section.id}>
      <a href={`#${section.id}`}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{section.title}</a>
    </li>)}</ol>
  </nav>;
}

function Contact({ locale }) {
  return <address className="legal-contact">
    <strong>{provider.name}</strong>
    <span>{provider.project}</span>
    <span>{provider.street}</span>
    <span>{provider.city}</span>
    <span>{legalUi[locale].country}</span>
    <a href={`mailto:${provider.email}`}>{provider.email}</a>
    <a href={provider.phoneHref}>{provider.phone}</a>
  </address>;
}

export default function LegalPage({ locale, document }) {
  const t = messages[locale];
  const ui = legalUi[locale];
  const content = legalDocuments[locale][document];
  const home = localePath(locale);

  return <div className="legal-page">
    <StructuredData data={legalStructuredData(locale, document)} />
    <header className="legal-header">
      <Brand label={t.homeLabel} href={home} />
      <nav className="legal-header-nav" aria-label={t.navigation}>
        <a className="legal-home-link" href={home}>{ui.homeShort}</a>
        <LanguageSelect locale={locale} label={t.language} pagePath={document} />
      </nav>
    </header>
    <main className="legal-main">
      <div className="legal-intro">
        <a className="legal-back" href={home}>← {ui.home}</a>
        <p className="legal-kicker mono">{ui.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className="legal-description">{content.intro}</p>
        <p className="legal-updated">{ui.updated}: <time dateTime="2026-10-30">{ui.date}</time></p>
      </div>
      <div className="legal-layout">
        <div className="legal-sidebar">
          <p className="legal-contents-title mono">{ui.contents}</p>
          <Contents sections={content.sections} label={ui.contents} />
        </div>
        <div className="legal-reading">
          <details className="legal-mobile-contents">
            <summary>{ui.contents}</summary>
            <Contents sections={content.sections} label={ui.contents} />
          </details>
          {content.highlights && <section className="legal-summary" aria-labelledby="legal-summary-title">
            <h2 id="legal-summary-title">{ui.summary}</h2>
            <ul>{content.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
          </section>}
          {content.sections.map((section, index) => <section className="legal-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-heading`}>
            <span className="legal-section-number mono" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h2 id={`${section.id}-heading`}>{section.title}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            {section.contact && <Contact locale={locale} />}
            {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
            {section.callout && <div className="legal-callout"><h3>{section.callout.title}</h3><p>{section.callout.text}</p></div>}
            {section.authority && <address className="legal-authority">
              <strong>{ui.authority}</strong>
              <span lang="de">Heilbronner Straße 35</span>
              <span>70191 Stuttgart</span>
              <span>{ui.country}</span>
            </address>}
            {section.links && <ul className="legal-sources">{section.links.map(link => <li key={link.href}><a href={link.href}>{link.label} <span aria-hidden="true">↗</span></a></li>)}</ul>}
          </section>)}
        </div>
      </div>
    </main>
    <SiteFooter locale={locale} document={document} />
  </div>;
}
