import Brief from '@/components/Brief';
import Brand from '@/components/Brand';
import BrandMark from '@/components/BrandMark';
import Cloudscape from '@/components/Cloudscape';
import Flowers from '@/components/Flowers';
import LanguageSelect from '@/components/LanguageSelect';
import ServiceIcon from '@/components/ServiceIcon';
import SunArt from '@/components/SunArt';
import SiteFooter from '@/components/SiteFooter';
import VisualEffects from '@/components/VisualEffects';
import { messages } from '@/lib/i18n';
import { Fragment } from 'react';

function Lines({ lines }) {
  return lines.map((line, index) => <Fragment key={line}>{index > 0 && <br />}{line}</Fragment>);
}

export default function Landing({ locale }) {
  const t = messages[locale];

  return <>
    <header>
      <Brand label={t.homeLabel} />
      <nav aria-label={t.navigation}>
        <a href="#approach">{t.nav.approach}</a>
        <a href="#process">{t.nav.process}</a>
        <a className="nav-cta" href="#contact">{t.nav.contact}</a>
        <LanguageSelect locale={locale} label={t.language} />
      </nav>
    </header>
    <main>
      <section id="home" className="hero">
        <Cloudscape priority />
        <div className="hero-top mono"><span><i className="dot" />{t.hero.studio}</span><span>{t.hero.journey}</span></div>
        <div className="window">
          <div className="window-title mono"><span>~/rootforce — {t.hero.terminal}</span><span aria-hidden="true">− &nbsp; □ &nbsp; ×</span></div>
          <div className="window-body mono"><Lines lines={t.hero.window} /> <span className="blink" aria-hidden="true">▌</span></div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow mono">{t.hero.eyebrow}</p>
          <h1>{t.hero.title[0]}<br />{t.hero.title[1]}<span className="serif">{t.hero.title[2]}</span><BrandMark className="hero-brand-mark" /></h1>
          <div className="hero-bottom"><p><Lines lines={t.hero.description} /></p><a className="button dark" href="#approach">{t.hero.cta}<span>↓</span></a></div>
        </div>
        <div className="hero-footer mono"><span>{t.hero.chapter}</span><span>{t.hero.motto}</span><a href="#approach">{t.hero.scroll}</a></div>
      </section>
      <section id="approach" className="approach studio">
        <Cloudscape />
        <div className="section-label mono"><span>{t.studio.chapter}</span><span>{t.studio.craft}</span></div>
        <div className="studio-intro">
          <div><p className="mono studio-kicker">{t.studio.kicker}</p><h2>{t.studio.title[0]}<br />{t.studio.title[1]}<span>{t.studio.title[2]}</span></h2><p className="studio-lead"><Lines lines={t.studio.lead} /></p></div>
          <div className="seed-art" aria-hidden="true">
            <SunArt />
            <span className="mono">{t.studio.seed}</span>
          </div>
        </div>
        <div className="studio-services">
          <div className="services-label mono">{t.studio.servicesLabel}<span>↓</span></div>
          {t.studio.services.map((service, index) => <article className="service-row" key={service.title}>
            <span className="service-number mono">{String(index + 1).padStart(2, '0')}</span>
            <h3>{service.title}<span className="service-en mono">{service.label}</span></h3>
            <p>{service.description}</p>
            <span className={`service-glyph${service.glyph === '</>' ? ' code-glyph' : ''}`} aria-hidden="true"><ServiceIcon glyph={service.glyph} /></span>
          </article>)}
        </div>
        <div className="studio-process" id="process">
          <div><p className="mono">{t.studio.processLabel}</p><h3><Lines lines={t.studio.processTitle} /></h3></div>
          <ol>{t.studio.steps.map(step => <li key={step.title}><span className="mono">{step.title}</span><p>{step.description}</p></li>)}</ol>
        </div>
        <div className="studio-outro"><p>{t.studio.outro[0]}<br /><span>{t.studio.outro[1]}</span></p><a href="#contact">{t.studio.cta}<span>↗</span></a></div>
      </section>
      <section id="contact" className="garden">
        <Cloudscape />
        <div className="section-label mono"><span>{t.contact.chapter}</span><span>{t.contact.care}</span></div>
        <div className="garden-copy">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title[0]}<br />{t.contact.title[1]}<em>{t.contact.title[2]}</em></h2>
          <p><Lines lines={t.contact.description} /></p>
          <Brief labels={t.brief} />
          <span className="garden-note mono">{t.contact.note}</span>
        </div>
        <Flowers />
        <SiteFooter locale={locale} />
      </section>
    </main>
    <VisualEffects labels={t.motion} />
  </>;
}
