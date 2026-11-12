export const siteUrl = 'https://rootforce.dev';
export const absoluteUrl = path => new URL(path, siteUrl).href;

export const siteIcons = {
  icon: [
    { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
    { url: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
  ],
};

export function localizedAlternates(locale, pagePath) {
  const languages = Object.fromEntries(['en', 'de', 'ru'].map(language => [language, absoluteUrl(pagePath(language))]));
  return { canonical: languages[locale], languages: { ...languages, 'x-default': languages.en } };
}

export const homeSeo = {
  en: { title: 'Web Design, App Development & AI Code Repair | rootforce', description: 'Website and product design, redesign, app development, AI code repair, ad setup and consulting for businesses and startups. Work with rootforce in EN, DE or RU.' },
  de: { title: 'Webdesign, App-Entwicklung & KI-Code-Reparatur | rootforce', description: 'Design und Redesign für Websites und digitale Produkte, App-Entwicklung, KI-Code-Reparatur, Werbeeinrichtung und Beratung. Zusammenarbeit auf Deutsch, Englisch und Russisch.' },
  ru: { title: 'Дизайн сайтов, разработка и исправление AI-кода | rootforce', description: 'Дизайн и редизайн сайтов и продуктов, разработка приложений, исправление AI-кода, настройка рекламы и консультации для бизнеса и стартапов. EN, DE и RU.' },
};

export const serviceSeo = {
  en: {
    redesign: { title: 'Website & Digital Product Redesign | rootforce', description: 'Redesign your website or digital product with rootforce: UX audit, clearer navigation, responsive UI and reusable components. Discuss your redesign scope.' },
    design: { title: 'Website & Product UI/UX Design from Scratch | rootforce', description: 'Website and digital product design from scratch: visual direction, UX wireframes, responsive UI and design systems. Turn your idea into a clear interface.' },
    development: { title: 'App, MVP & Web Product Development | rootforce', description: 'Build an app, MVP or web product with rootforce. Frontend, backend, integrations, testing and launch preparation within an agreed development scope.' },
    'ai-code-repair': { title: 'Fix AI-Generated Websites & Code | RootForce', description: 'Fix broken AI-generated websites and apps with RootForce. We debug code, repair features, resolve integration issues and help finish unfinished projects.' },
    consulting: { title: 'Design & Development Consulting for Startups | rootforce', description: 'Practical design, development and advertising consulting for businesses and startups. Review your project, compare options and define prioritised next steps.' },
  },
  de: {
    redesign: { title: 'Website- & Produkt-Redesign mit UX-Audit | rootforce', description: 'Website oder digitales Produkt neu gestalten: UX-Audit, klare Navigation, responsive Interfaces und wiederverwendbare Komponenten. Redesign mit rootforce.' },
    design: { title: 'Webdesign & UI/UX-Design von Grund auf | rootforce', description: 'Design für neue Websites und digitale Produkte: visuelle Richtung, UX-Wireframes, responsive Interfaces und Designsysteme. Gemeinsam mit rootforce gestalten.' },
    development: { title: 'App-, MVP- & Webprodukt-Entwicklung | rootforce', description: 'Apps, MVPs und Webprodukte entwickeln: Frontend, Backend, Integrationen, Tests und Vorbereitung für den Start. Mit klar vereinbartem Umfang bei rootforce.' },
    'ai-code-repair': { title: 'KI-generierte Websites & Code reparieren | RootForce', description: 'RootForce repariert KI-generierte Websites und Apps: Fehler im Code beheben, defekte Funktionen reparieren, Integrationen korrigieren und Projekte fertigstellen.' },
    consulting: { title: 'Design- & Entwicklungsberatung für Startups | rootforce', description: 'Beratung zu Design, Entwicklung und Werbung für Unternehmen und Startups. Projekt prüfen, Optionen abwägen und konkrete nächste Schritte mit rootforce planen.' },
  },
  ru: {
    redesign: { title: 'Редизайн сайтов и цифровых продуктов — rootforce', description: 'Редизайн сайта или цифрового продукта: UX-аудит, понятная навигация, адаптивный интерфейс и переиспользуемые компоненты. Обсудите проект с rootforce.' },
    design: { title: 'Дизайн сайтов и UI/UX продуктов с нуля — rootforce', description: 'Дизайн нового сайта или цифрового продукта: визуальное направление, UX-прототипы, адаптивные интерфейсы и дизайн-система. Создадим понятный дизайн с rootforce.' },
    development: { title: 'Разработка приложений, MVP и веб-продуктов — rootforce', description: 'Разработка приложений, MVP и веб-продуктов: frontend, backend, интеграции, проверки и подготовка к запуску. Согласуем объём работы с rootforce.' },
    'ai-code-repair': { title: 'Исправление сайтов и кода, созданных с AI | RootForce', description: 'Исправляем сайты и приложения, созданные с AI: ошибки в коде, неработающие функции и интеграции. Помогаем завершить проект и сделать его надёжным с RootForce.' },
    consulting: { title: 'Консультации по дизайну и разработке для стартапов — rootforce', description: 'Консультации по дизайну, разработке и рекламе для бизнеса и стартапов. Разберём проект, сравним варианты и определим следующие шаги вместе с rootforce.' },
  },
};

export function socialMetadata(locale, path, title, description) {
  const images = [{ url: absoluteUrl('/brand/rootforce-social.png'), width: 1200, height: 630, alt: 'rootforce — Strong roots. Bold ideas.' }];
  return {
    applicationName: 'rootforce',
    openGraph: { title, description, url: absoluteUrl(path), siteName: 'rootforce', type: 'website', locale: { en: 'en_US', de: 'de_DE', ru: 'ru_RU' }[locale], alternateLocale: ['en_US', 'de_DE', 'ru_RU'].filter(value => value !== { en: 'en_US', de: 'de_DE', ru: 'ru_RU' }[locale]), images },
    twitter: { card: 'summary_large_image', title, description, images: [images[0].url] },
  };
}
