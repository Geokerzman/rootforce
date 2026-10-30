'use client';

import { languageNames, locales, localePath } from '@/lib/i18n';

export default function LanguageSelect({ locale, label, pagePath = '' }) {
  function changeLanguage(event) {
    const page = pagePath ? `${pagePath}/` : '';
    window.location.assign(`${localePath(event.target.value)}${page}${window.location.hash}`);
  }

  return <div className="language-select">
    <select aria-label={label} value={locale} onChange={changeLanguage}>
      {locales.map(language => <option key={language} value={language} lang={language}>{languageNames[language]}</option>)}
    </select>
    <span aria-hidden="true">⌄</span>
  </div>;
}
