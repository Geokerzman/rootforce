import Brand from '@/components/Brand';
import BrandMark from '@/components/BrandMark';
import Brief from '@/components/Brief';
import Cloudscape from '@/components/Cloudscape';
import Flowers from '@/components/Flowers';
import LanguageSelect from '@/components/LanguageSelect';
import ServiceIcon from '@/components/ServiceIcon';
import SiteFooter from '@/components/SiteFooter';
import VisualEffects from '@/components/VisualEffects';
import StructuredData from '@/components/StructuredData';
import { serviceStructuredData } from '@/lib/structured-data';
import { localePath, messages } from '@/lib/i18n';
import { serviceGlyphs, servicePages, servicePath, serviceSlugs, serviceUi } from '@/lib/services';
import './ServicePage.css';

const number = index => String(index + 1).padStart(2, '0');

export default function ServicePage({ locale, slug }) {
  const t = messages[locale];
  const ui = serviceUi[locale];
  const content = servicePages[locale][slug];
  const home = localePath(locale);
  const index = serviceSlugs.indexOf(slug);
  const ServiceName = content.headline ? 'p' : 'h1';
  const HeroTitle = content.headline ? 'h1' : 'p';

  return <div className={`service-page service-page--${slug}`}>
    <StructuredData data={serviceStructuredData(locale, slug)} />
    <header className="service-header">
      <Brand label={t.homeLabel} href={home} />
      <nav aria-label={t.navigation}>
        <a className="service-header-home" href={`${home}#approach`}>{ui.back}</a>
        <a className="nav-cta" href="#contact">{t.nav.contact}</a>
        <LanguageSelect locale={locale} label={t.language} pagePath={`services/${slug}`} />
      </nav>
    </header>
    <main>
      <section className="hero service-hero" id="home">
        <Cloudscape priority />
        <div className="service-hero-inner">
          <nav className="service-breadcrumb mono" aria-label={{ en: 'Breadcrumb', de: 'Brotkrumennavigation', ru: 'Навигационная цепочка' }[locale]}>
            <a href={home}>{{ en: 'Home', de: 'Startseite', ru: 'Главная' }[locale]}</a><span aria-hidden="true">/</span><span aria-current="page">{content.name}</span>
          </nav>
          <div className="service-hero-grid">
            <div className="service-hero-copy">
              <p className="service-kicker mono">{ui.section} / {number(index)}</p>
              <ServiceName className="service-name">{content.name}</ServiceName>
              <HeroTitle className="service-display-title">{content.headline || <>{content.title[0]}<br /><span>{content.title[1]}</span></>}</HeroTitle>
              <p className="service-hero-lead">{content.intro}</p>
              <div className="service-hero-actions">
                <a className="button dark" href="#contact">{ui.discuss}<span aria-hidden="true">↗</span></a>
                <a className="service-text-link" href="#scope">{ui.explore}<span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="service-board" aria-hidden="true">
              <div className="service-board-bar mono"><span>~/rootforce — {slug}</span><span>− &nbsp; □ &nbsp; ×</span></div>
              <div className="service-board-art">
                <div className="service-orbit service-orbit-one" /><div className="service-orbit service-orbit-two" />
                <span className="service-board-symbol"><ServiceIcon glyph={serviceGlyphs[slug]} size={100} /></span>
                <span className="service-board-corner mono">{number(index)} / RF</span>
                <BrandMark className="service-board-brand" />
              </div>
              <div className="service-board-notes">{content.scope.map(([title], i) => <div key={title}><span className="mono">{number(i)}</span><span>{title}</span><span className="service-board-dot" /></div>)}</div>
              <div className="service-board-caption mono">{content.tag}</div>
            </div>
          </div>
          <div className="hero-footer mono service-hero-footer"><span>{content.tag}</span><span>{t.hero.motto}</span><button className="motion-toggle" type="button" aria-pressed="true">{t.motion.active}</button></div>
        </div>
      </section>

      <div className="service-principles mono">{ui.principles.map((text, i) => <span key={text}><span className="service-principle-index">{number(i)}</span>{text}</span>)}</div>

      <section className="approach service-scope" id="scope">
        <div className="service-section-top mono"><span>01 / {ui.scope}</span><span>ROOTFORCE / DIGITAL CRAFT</span></div>
        <div className="service-problem"><p className="service-kicker mono">{content.name}</p><h2>{content.problemTitle}</h2><p>{content.problem}</p></div>
        <div className="service-scope-grid">
          <div className="service-deliverables">
            <h3 className="service-list-title">{ui.scopeTitle}</h3>
            {content.scope.map(([title, description], i) => <article key={title}><span className="mono">{number(i)}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}
          </div>
          <aside className="service-outcomes">
            <BrandMark className="service-outcomes-brand" />
            <h3 className="mono">{ui.outcome}</h3>
            <ul>{content.outcomes.map(item => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="service-process" id="process">
        <p className="service-kicker mono">02 / {ui.process}</p>
        <h2>{ui.processTitle}</h2>
        <ol>{content.steps.map(([title, description], i) => <li key={title}><span className="service-step-number mono">{number(i)}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
      </section>

      <section className="service-faq" aria-labelledby="service-faq-title">
        <div><p className="service-kicker mono">03 / {ui.faq}</p><h2 id="service-faq-title">{ui.faqTitle}</h2></div>
        <div>{content.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="service-related" aria-labelledby="service-related-title">
        <p className="service-kicker mono">{ui.related}</p><h2 id="service-related-title">{ui.relatedTitle}</h2>
        <div>{serviceSlugs.filter(item => item !== slug).map(item => <a key={item} href={servicePath(locale, item)}><span>{servicePages[locale][item].name}</span><span aria-hidden="true"><ServiceIcon glyph="consulting" /></span></a>)}</div>
      </section>

      <section className="garden service-contact" id="contact">
        <Cloudscape />
        <div className="section-label mono"><span>04 / {t.contact.note}</span><span>{t.contact.care}</span></div>
        <div className="garden-copy">
          <p className="eyebrow mono">{ui.briefTitle}</p><h2>{ui.contactTitle}</h2><p>{ui.contactText}</p>
          <Brief labels={t.brief} locale={locale} />
        </div>
        <Flowers />
        <SiteFooter locale={locale} document="service" />
      </section>
    </main>
    <VisualEffects labels={t.motion} />
  </div>;
}
