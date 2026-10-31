import { serviceSeo, socialMetadata, localizedAlternates } from '@/lib/seo';
import { localePath } from '@/lib/i18n';

export const serviceSlugs = ['redesign', 'design', 'development', 'ai-code-repair', 'consulting'];
export const serviceGlyphs = { redesign: 'redesign', design: 'design', development: '</>', 'ai-code-repair': 'repair', consulting: 'consulting' };

export function servicePath(locale, slug) {
  return `${localePath(locale)}services/${slug}/`;
}

export const serviceUi = {
  en: {
    back: 'All services', section: 'ROOTFORCE / SERVICES', discuss: 'Discuss your project', explore: 'See what’s included',
    scope: 'WHAT WE DO', scopeTitle: 'The right work. In the right places.', outcome: 'WHAT YOU TAKE AWAY',
    process: 'HOW WE GET THERE', processTitle: 'A clear path forward.', faq: 'A FEW USEFUL ANSWERS', faqTitle: 'Before we begin.',
    related: 'OTHER WAYS WE CAN HELP', relatedTitle: 'Good work connects.',
    contactTitle: 'Let’s find your next step.', contactText: 'Tell us where you are and what you want to change. We’ll work out the scope together.',
    principles: ['A scope we agree together', 'You stay part of the process', 'A clear handover'], briefTitle: 'Your next chapter starts here.',
  },
  de: {
    back: 'Alle Leistungen', section: 'ROOTFORCE / LEISTUNGEN', discuss: 'Projekt besprechen', explore: 'Leistungsumfang ansehen',
    scope: 'WAS WIR TUN', scopeTitle: 'Die richtige Arbeit. An den richtigen Stellen.', outcome: 'DAS NIMMST DU MIT',
    process: 'UNSER GEMEINSAMER WEG', processTitle: 'Ein klarer Weg nach vorn.', faq: 'GUT ZU WISSEN', faqTitle: 'Bevor wir anfangen.',
    related: 'WEITERE LEISTUNGEN', relatedTitle: 'Gute Arbeit verbindet.',
    contactTitle: 'Finden wir deinen nächsten Schritt.', contactText: 'Erzähl uns, wo du stehst und was du verändern möchtest. Den Umfang klären wir gemeinsam.',
    principles: ['Gemeinsam vereinbarter Umfang', 'Du bleibst im Prozess dabei', 'Eine verständliche Übergabe'], briefTitle: 'Hier beginnt dein nächstes Kapitel.',
  },
  ru: {
    back: 'Все услуги', section: 'ROOTFORCE / УСЛУГИ', discuss: 'Обсудить проект', explore: 'Что входит в работу',
    scope: 'ЧТО МЫ ДЕЛАЕМ', scopeTitle: 'Работаем над тем, что действительно нужно.', outcome: 'ЧТО ВЫ ПОЛУЧИТЕ',
    process: 'КАК ПРИДЁМ К РЕЗУЛЬТАТУ', processTitle: 'Понятный путь вперёд.', faq: 'ПОЛЕЗНО ЗНАТЬ', faqTitle: 'Прежде чем начать.',
    related: 'ЧЕМ ЕЩЁ МОЖЕМ ПОМОЧЬ', relatedTitle: 'Хорошая работа объединяет.',
    contactTitle: 'Найдём ваш следующий шаг.', contactText: 'Расскажите, на каком этапе проект и что хочется изменить. Вместе определим объём работы.',
    principles: ['Согласованный объём работы', 'Вы участвуете в процессе', 'Понятная передача результата'], briefTitle: 'Здесь начинается новая глава.',
  },
};

export const servicePages = {
  en: {
    redesign: {
      name: 'Website & product redesign', tag: 'AUDIT / UX / REDESIGN', title: ['A fresh start.', 'With strong roots.'],
      intro: 'Your website or digital product has grown. Its design should keep up. We rethink the structure, user journeys and interface around what your business needs today.',
      problemTitle: 'Keep what works. Rethink what gets in the way.',
      problem: 'A confusing navigation, inconsistent screens or an outdated visual direction can make a good product harder to use. We start by understanding the friction, then redesign the parts that need attention.',
      scope: [
        ['Experience audit', 'We review the current interface, key journeys and available feedback to identify what needs to change.'],
        ['Structure & interaction', 'We simplify navigation, organise content and prototype the important paths before polishing individual screens.'],
        ['A coherent visual system', 'We redesign the agreed screens and define reusable components, responsive states and implementation notes.'],
      ],
      outcomes: ['Prioritised findings and an agreed redesign scope', 'Designs for the agreed screens and responsive layouts', 'Reusable components and a handover for development'],
      steps: [['Understand the starting point', 'You share the current product, business goals and known problems. We review the experience together.'], ['Explore a better direction', 'We agree on structure and visual direction, then refine the key screens with your feedback.'], ['Prepare the next version', 'We complete the agreed designs and organise the files for implementation. Development can be scoped separately.']],
      faqs: [['Do we have to change everything?', 'No. A redesign can focus on a landing page, a key product flow or a wider interface. We define the useful changes before starting.'], ['Can you also build the redesign?', 'Yes. We can scope implementation alongside the design or hand the files to your development team.']],
    },
    design: {
      name: 'Website & product design from scratch', tag: 'ART DIRECTION / UX / UI', title: ['Your first idea.', 'Its own visual language.'],
      intro: 'A new website or digital product needs more than a collection of screens. We give your idea a clear structure, a distinctive direction and an interface people can understand.',
      problemTitle: 'Make the idea clear before you build it.',
      problem: 'When a product is still taking shape, design helps turn assumptions into something you can discuss and test. We connect your audience, content and goals in one considered experience.',
      scope: [
        ['Direction & references', 'We explore your audience, positioning and visual references to agree on a direction that fits the project.'],
        ['User journeys & wireframes', 'We map the key tasks, define page structure and work through the experience before adding visual detail.'],
        ['Interface & design system', 'We create the agreed screens, responsive layouts and reusable components so the design can grow consistently.'],
      ],
      outcomes: ['A shared visual direction for your website or product', 'Wireframes and designs for the agreed journeys', 'An organised design file ready for development'],
      steps: [['Define the idea', 'We discuss the audience, the purpose of the product and what the first version needs to do.'], ['Give it a direction', 'We move from references and wireframes to a visual concept, with feedback at the important decisions.'], ['Bring the screens together', 'We finish the agreed interface and document the components and states your developers need.']],
      faqs: [['Can we start with only an idea?', 'Yes. A brief, a conversation and a few references are enough to begin defining the direction and scope.'], ['Does this include development or a full brand identity?', 'This service focuses on website and product interface design. Development and broader brand work are discussed and scoped separately.']],
    },
    development: {
      name: 'App & web product development', tag: 'FRONTEND / BACKEND / INTEGRATIONS', title: ['Beyond the prototype.', 'Built to work.'],
      intro: 'We develop applications and web products that connect the interface, business logic and the services behind them. From an early MVP to the next stage of an existing product.',
      problemTitle: 'The useful part starts when everything works together.',
      problem: 'A promising interface is only one piece of a product. User accounts, data, integrations and everyday edge cases need the same attention. We define a realistic first release and build towards it.',
      scope: [
        ['Product & technical scope', 'We turn the requirements into a practical feature list, choose an approach and agree on the boundaries of the release.'],
        ['Interface, logic & integrations', 'We build the agreed frontend and backend, connect external services and handle the states users encounter along the way.'],
        ['Verification & launch preparation', 'We check the core journeys, review responsive behaviour and prepare deployment and handover for the agreed environment.'],
      ],
      outcomes: ['Working functionality within an agreed release scope', 'Source code and relevant setup documentation', 'An agreed deployment and handover plan'],
      steps: [['Make the release concrete', 'We agree on the users, core tasks, requirements and what can wait until a later version.'], ['Build in reviewable stages', 'We implement the product in manageable steps, so you can review progress and make informed decisions.'], ['Check & hand over', 'We verify the agreed flows, prepare the release and explain how to run and maintain the delivered work.']],
      faqs: [['Can you build an MVP for a startup?', 'Yes. We help identify the smallest useful release and scope it around the main problem your product needs to solve.'], ['Can you work with our existing product?', 'Yes, after reviewing the codebase and infrastructure. We first establish which changes are practical and what dependencies need attention.']],
    },
    'ai-code-repair': {
      name: 'AI website repair & code cleanup', tag: 'VIBE CODING / DEBUGGING / REFACTORING', title: ['Vibe-coded fast?', 'Let’s make it work.'],
      intro: 'A site built with AI can look finished while the code behind it is fragile. We diagnose bugs, repair broken behaviour and bring structure to code that grew through rushed prompts and patches.',
      problemTitle: 'A working preview is a starting point.',
      problem: 'Broken forms, mobile layout issues, tangled components or integrations that only work in a demo: we investigate the actual causes and agree on a repair plan. We preserve useful work wherever practical.',
      scope: [
        ['Code & behaviour review', 'We reproduce the reported issues and inspect the relevant code, dependencies and data flows before proposing fixes.'],
        ['Targeted repairs & refactoring', 'We fix the agreed bugs, simplify problematic components and address fragile interactions or integrations.'],
        ['Checks & a usable handover', 'We verify the repaired journeys, document the changes and identify any remaining limitations or follow-up work.'],
      ],
      outcomes: ['A clear diagnosis and prioritised repair scope', 'Agreed fixes with focused checks of the affected behaviour', 'Readable changes and practical guidance for the next steps'],
      steps: [['Show us what breaks', 'Share the repository, reproduction steps and what you expected to happen. We establish the current state.'], ['Agree on the repairs', 'We explain the causes, distinguish local fixes from deeper problems and agree on what to tackle first.'], ['Fix, verify & explain', 'We make the agreed changes, check the affected flows and hand over the result with any remaining caveats.']],
      faqs: [['Do you work with code generated by different AI tools?', 'Yes. What matters is access to the project and the ability to run and review its code. We assess the actual implementation rather than the tool used.'], ['Will you need to rebuild the entire site?', 'Not necessarily. We prefer focused repairs when they are practical. If a section needs rebuilding, we explain why and agree on that scope before proceeding.']],
    },
    consulting: {
      name: 'Consulting for businesses & startups', tag: 'DESIGN / DEVELOPMENT / PRODUCT DIRECTION', title: ['A second perspective.', 'A clearer next step.'],
      intro: 'For businesses, founders and teams deciding what to build, redesign or improve. We help you work through design, development and advertising questions with your actual project in view.',
      problemTitle: 'Progress starts with a decision you understand.',
      problem: 'You may have several possible directions, an uncertain brief or a product that is not moving forward. We examine the context, explain the trade-offs and turn the discussion into practical next steps.',
      scope: [
        ['Project & goal review', 'We look at the relevant materials, your audience, constraints and the decision you need to make.'],
        ['Focused working session', 'We discuss options for design, development or advertising, challenge assumptions and clarify dependencies.'],
        ['Recommendations & priorities', 'We summarise the findings, explain the reasoning and outline a realistic sequence of next actions.'],
      ],
      outcomes: ['An outside perspective on your specific project', 'A summary of recommendations and trade-offs', 'Prioritised next steps you can use with your own team'],
      steps: [['Bring the question', 'Tell us what you need to decide and share any useful materials before the session.'], ['Work through the options', 'We examine the situation together and make the important assumptions and trade-offs explicit.'], ['Leave with a direction', 'We capture the conclusions and next steps. If implementation is useful, we can discuss it separately.']],
      faqs: [['Is this useful before we have a finished brief?', 'Yes. Consulting can help define the problem, first release or redesign priorities before you commit to implementation.'], ['Do we have to commission further work?', 'No. The recommendations are yours to use with your team or another partner. Any implementation is a separate decision.']],
    },
  },
  de: {
    redesign: {
      name: 'Website- & Produkt-Redesign', tag: 'ANALYSE / UX / REDESIGN', title: ['Ein neuer Anfang.', 'Mit starken Wurzeln.'],
      intro: 'Deine Website oder dein digitales Produkt hat sich weiterentwickelt. Das Design sollte mithalten. Wir überdenken Struktur, Nutzerwege und Interface mit Blick auf deine heutigen Geschäftsziele.',
      problemTitle: 'Bewahren, was funktioniert. Verbessern, was im Weg steht.',
      problem: 'Unklare Navigation, uneinheitliche Ansichten oder eine veraltete Gestaltung erschweren die Nutzung. Wir verstehen zuerst die Reibungspunkte und gestalten dann gezielt die Bereiche neu, die Aufmerksamkeit brauchen.',
      scope: [['Analyse der Nutzung', 'Wir prüfen das bestehende Interface, wichtige Nutzerwege und verfügbares Feedback, um den Änderungsbedarf zu erkennen.'], ['Struktur & Interaktion', 'Wir vereinfachen Navigation, ordnen Inhalte und entwickeln Prototypen für die wichtigen Abläufe.'], ['Ein stimmiges Designsystem', 'Wir gestalten die vereinbarten Ansichten und definieren wiederverwendbare Komponenten, responsive Zustände und Hinweise zur Umsetzung.']],
      outcomes: ['Priorisierte Erkenntnisse und ein vereinbarter Umfang', 'Designs für die vereinbarten Ansichten und Bildschirmgrößen', 'Wiederverwendbare Komponenten und eine Übergabe an die Entwicklung'],
      steps: [['Ausgangspunkt verstehen', 'Du teilst das aktuelle Produkt, deine Ziele und bekannte Probleme. Gemeinsam betrachten wir die Nutzung.'], ['Eine bessere Richtung finden', 'Wir stimmen Struktur und Gestaltung ab und verfeinern die wichtigen Ansichten mit deinem Feedback.'], ['Die nächste Version vorbereiten', 'Wir vervollständigen die vereinbarten Designs und ordnen die Dateien für die Umsetzung. Entwicklung kann separat vereinbart werden.']],
      faqs: [['Muss alles neu gestaltet werden?', 'Nein. Das Redesign kann eine Landingpage, einen wichtigen Produktablauf oder ein größeres Interface umfassen. Den sinnvollen Umfang klären wir vorab.'], ['Könnt ihr das Redesign auch entwickeln?', 'Ja. Wir können die technische Umsetzung gemeinsam mit dem Design planen oder die Dateien an dein Entwicklungsteam übergeben.']],
    },
    design: {
      name: 'Webdesign & Produktdesign von Grund auf', tag: 'ART DIRECTION / UX / UI', title: ['Deine erste Idee.', 'Eine eigene visuelle Sprache.'],
      intro: 'Eine neue Website oder ein digitales Produkt braucht mehr als einzelne Ansichten. Wir geben deiner Idee eine klare Struktur, eine passende Richtung und ein verständliches Interface.',
      problemTitle: 'Die Idee klären, bevor sie entwickelt wird.',
      problem: 'Wenn ein Produkt erst entsteht, macht Design Annahmen sichtbar und besprechbar. Wir verbinden Zielgruppe, Inhalte und Ziele zu einer durchdachten Nutzungserfahrung.',
      scope: [['Richtung & Referenzen', 'Wir betrachten Zielgruppe, Positionierung und visuelle Referenzen, um eine passende gestalterische Richtung abzustimmen.'], ['Nutzerwege & Wireframes', 'Wir definieren wichtige Aufgaben, Seitenstruktur und Abläufe, bevor wir visuelle Details ausarbeiten.'], ['Interface & Designsystem', 'Wir gestalten die vereinbarten Ansichten, responsiven Layouts und wiederverwendbaren Komponenten für eine konsistente Weiterentwicklung.']],
      outcomes: ['Eine abgestimmte visuelle Richtung für Website oder Produkt', 'Wireframes und Designs für die vereinbarten Nutzerwege', 'Eine organisierte Designdatei für die Entwicklung'],
      steps: [['Die Idee definieren', 'Wir besprechen Zielgruppe, Zweck des Produkts und die Aufgaben der ersten Version.'], ['Eine Richtung entwickeln', 'Von Referenzen und Wireframes gelangen wir zum visuellen Konzept. An wichtigen Punkten holen wir dein Feedback ein.'], ['Das Interface zusammenführen', 'Wir vervollständigen die vereinbarten Ansichten und dokumentieren die benötigten Komponenten und Zustände.']],
      faqs: [['Reicht eine erste Idee für den Start?', 'Ja. Ein Gespräch, ein kurzer Überblick und einige Referenzen genügen, um Richtung und Umfang gemeinsam zu entwickeln.'], ['Sind Entwicklung und ein vollständiges Branding enthalten?', 'Diese Leistung konzentriert sich auf Website- und Produktinterfaces. Entwicklung und umfassendere Markenarbeit werden separat besprochen und vereinbart.']],
    },
    development: {
      name: 'App- & Webprodukt-Entwicklung', tag: 'FRONTEND / BACKEND / INTEGRATIONEN', title: ['Mehr als ein Prototyp.', 'Gebaut, um zu funktionieren.'],
      intro: 'Wir entwickeln Anwendungen und Webprodukte, in denen Interface, Geschäftslogik und angebundene Dienste zusammenpassen. Vom ersten MVP bis zum nächsten Schritt eines bestehenden Produkts.',
      problemTitle: 'Der Nutzen entsteht, wenn alles zusammenarbeitet.',
      problem: 'Ein überzeugendes Interface ist nur ein Teil des Produkts. Nutzerkonten, Daten, Integrationen und Sonderfälle im Alltag brauchen genauso viel Aufmerksamkeit. Wir definieren eine realistische erste Veröffentlichung und arbeiten darauf hin.',
      scope: [['Produkt & technischer Umfang', 'Wir übersetzen Anforderungen in eine konkrete Funktionsliste, wählen den Ansatz und grenzen die Veröffentlichung ab.'], ['Interface, Logik & Integrationen', 'Wir entwickeln das vereinbarte Frontend und Backend, verbinden externe Dienste und berücksichtigen die verschiedenen Nutzungszustände.'], ['Prüfung & Startvorbereitung', 'Wir prüfen zentrale Abläufe und responsive Ansichten und bereiten Bereitstellung und Übergabe für die vereinbarte Umgebung vor.']],
      outcomes: ['Funktionierende Umsetzung im vereinbarten Umfang', 'Quellcode und relevante Einrichtungsdokumentation', 'Ein abgestimmter Plan für Bereitstellung und Übergabe'],
      steps: [['Die erste Version konkret machen', 'Wir klären Nutzer, Kernaufgaben und Anforderungen sowie Funktionen, die später folgen können.'], ['In überschaubaren Etappen entwickeln', 'Wir setzen das Produkt schrittweise um, damit du Fortschritte prüfen und fundierte Entscheidungen treffen kannst.'], ['Prüfen & übergeben', 'Wir verifizieren die vereinbarten Abläufe, bereiten den Start vor und erklären Betrieb und Pflege der übergebenen Arbeit.']],
      faqs: [['Entwickelt ihr MVPs für Startups?', 'Ja. Wir helfen, eine möglichst kleine, sinnvolle erste Version zu definieren, die das zentrale Problem des Produkts löst.'], ['Arbeitet ihr an bestehenden Produkten?', 'Ja, nach einer Prüfung von Code und Infrastruktur. Zuerst klären wir, welche Änderungen sinnvoll sind und welche Abhängigkeiten berücksichtigt werden müssen.']],
    },
    'ai-code-repair': {
      name: 'KI-Websites & Code reparieren', tag: 'VIBE CODING / FEHLERBEHEBUNG / REFACTORING', title: ['Schnell mit KI gebaut?', 'Machen wir es stabil.'],
      intro: 'Eine mit KI erstellte Website kann fertig aussehen, während der Code dahinter fragil ist. Wir finden Fehler, reparieren defekte Abläufe und bringen Struktur in Code, der durch hastige Prompts und Korrekturen gewachsen ist.',
      problemTitle: 'Eine funktionierende Vorschau ist erst der Anfang.',
      problem: 'Defekte Formulare, mobile Darstellungsfehler, unübersichtliche Komponenten oder Integrationen, die nur in der Demo funktionieren: Wir untersuchen die Ursachen und stimmen einen Reparaturplan ab. Brauchbare Arbeit erhalten wir, wo es sinnvoll ist.',
      scope: [['Code & Verhalten prüfen', 'Wir reproduzieren gemeldete Fehler und untersuchen relevanten Code, Abhängigkeiten und Datenflüsse, bevor wir Lösungen vorschlagen.'], ['Gezielt reparieren & aufräumen', 'Wir beheben die vereinbarten Fehler, vereinfachen problematische Komponenten und überarbeiten fragile Abläufe oder Integrationen.'], ['Prüfen & verständlich übergeben', 'Wir verifizieren die reparierten Abläufe, dokumentieren Änderungen und benennen verbleibende Grenzen oder Folgeaufgaben.']],
      outcomes: ['Eine klare Diagnose und priorisierte Reparaturen', 'Vereinbarte Korrekturen mit gezielten Funktionsprüfungen', 'Nachvollziehbare Änderungen und konkrete nächste Schritte'],
      steps: [['Zeigen, was nicht funktioniert', 'Teile das Repository, Schritte zum Nachstellen und das erwartete Verhalten. Wir erfassen den aktuellen Stand.'], ['Die Reparaturen abstimmen', 'Wir erklären Ursachen, unterscheiden lokale Fehler von tieferen Problemen und vereinbaren die Prioritäten.'], ['Beheben, prüfen & erklären', 'Wir setzen die Änderungen um, prüfen betroffene Abläufe und übergeben das Ergebnis mit Hinweisen zu verbleibenden Einschränkungen.']],
      faqs: [['Spielt das verwendete KI-Tool eine Rolle?', 'Wir arbeiten mit Code aus unterschiedlichen Tools. Entscheidend sind Projektzugang und die Möglichkeit, den Code auszuführen und zu prüfen.'], ['Muss die ganze Website neu gebaut werden?', 'Nicht unbedingt. Wo sinnvoll, reparieren wir gezielt. Wenn ein Bereich neu aufgebaut werden muss, erläutern wir den Grund und stimmen den Umfang vorher ab.']],
    },
    consulting: {
      name: 'Beratung für Unternehmen & Startups', tag: 'DESIGN / ENTWICKLUNG / PRODUKTRICHTUNG', title: ['Ein zweiter Blick.', 'Ein klarer nächster Schritt.'],
      intro: 'Für Unternehmen, Gründer und Teams, die entscheiden, was sie entwickeln, neu gestalten oder verbessern möchten. Wir klären Fragen zu Design, Entwicklung und Werbung anhand deines konkreten Projekts.',
      problemTitle: 'Fortschritt beginnt mit einer verständlichen Entscheidung.',
      problem: 'Vielleicht gibt es mehrere Richtungen, ein unscharfes Briefing oder ein Produkt, das nicht vorankommt. Wir betrachten den Kontext, erklären Abwägungen und machen aus dem Gespräch konkrete nächste Schritte.',
      scope: [['Projekt & Ziele betrachten', 'Wir prüfen relevante Unterlagen, Zielgruppe, Rahmenbedingungen und die Entscheidung, die du treffen möchtest.'], ['Gemeinsam Optionen erarbeiten', 'Wir diskutieren Ansätze für Design, Entwicklung oder Werbung, hinterfragen Annahmen und klären Abhängigkeiten.'], ['Empfehlungen & Prioritäten', 'Wir fassen Erkenntnisse zusammen, erläutern die Gründe und skizzieren eine realistische Reihenfolge der nächsten Aufgaben.']],
      outcomes: ['Eine unabhängige Perspektive auf dein Projekt', 'Eine Zusammenfassung der Empfehlungen und Abwägungen', 'Priorisierte nächste Schritte für dein eigenes Team'],
      steps: [['Die Frage mitbringen', 'Erzähl uns, was du entscheiden möchtest, und teile vor dem Gespräch hilfreiche Unterlagen.'], ['Optionen durchgehen', 'Wir analysieren die Situation gemeinsam und machen wichtige Annahmen und Abwägungen deutlich.'], ['Mit einer Richtung weitergehen', 'Wir halten Ergebnisse und nächste Schritte fest. Eine mögliche Umsetzung besprechen wir separat.']],
      faqs: [['Ist Beratung ohne fertiges Briefing sinnvoll?', 'Ja. Sie kann helfen, das Problem, die erste Version oder Redesign-Prioritäten zu klären, bevor du die Umsetzung beauftragst.'], ['Müssen wir anschließend weitere Leistungen buchen?', 'Nein. Du kannst die Empfehlungen mit deinem Team oder einem anderen Partner umsetzen. Weitere Arbeit ist eine separate Entscheidung.']],
    },
  },
  ru: {
    redesign: {
      name: 'Редизайн сайтов и продуктов', tag: 'АУДИТ / UX / РЕДИЗАЙН', title: ['Новый этап.', 'С крепкими корнями.'],
      intro: 'Сайт или цифровой продукт вырос, а дизайн остался прежним? Переосмыслим структуру, пользовательские сценарии и интерфейс под сегодняшние задачи вашего бизнеса.',
      problemTitle: 'Сохраним полезное. Изменим то, что мешает.',
      problem: 'Запутанная навигация, разрозненные экраны и устаревшее оформление усложняют использование даже хорошего продукта. Сначала найдём точки трения, затем обновим те части, которым действительно нужно внимание.',
      scope: [['Аудит пользовательского опыта', 'Изучим текущий интерфейс, основные сценарии и доступную обратную связь, чтобы определить, что стоит изменить.'], ['Структура и взаимодействие', 'Упростим навигацию, организуем контент и соберём прототипы важных сценариев до детальной отрисовки экранов.'], ['Цельная визуальная система', 'Обновим согласованные экраны и опишем переиспользуемые компоненты, адаптивные состояния и детали для разработки.']],
      outcomes: ['Приоритеты изменений и согласованный объём редизайна', 'Макеты согласованных экранов и адаптивных версий', 'Переиспользуемые компоненты и материалы для разработки'],
      steps: [['Разберём исходную точку', 'Вы покажете текущий продукт, расскажете о целях и известных проблемах. Вместе разберём пользовательский опыт.'], ['Найдём новое направление', 'Согласуем структуру и визуальный подход, затем доработаем ключевые экраны с учётом вашей обратной связи.'], ['Подготовим следующую версию', 'Завершим согласованные макеты и организуем файлы для реализации. Разработку можно обсудить отдельно.']],
      faqs: [['Обязательно менять всё?', 'Нет. Можно обновить лендинг, важный сценарий внутри продукта или интерфейс целиком. Полезный объём изменений определим до начала работы.'], ['Вы можете реализовать новый дизайн?', 'Да. Можем согласовать разработку вместе с дизайном или передать макеты вашей команде.']],
    },
    design: {
      name: 'Дизайн сайтов и продуктов с нуля', tag: 'АРТ-ДИРЕКШН / UX / UI', title: ['Первая идея.', 'Свой визуальный язык.'],
      intro: 'Новому сайту или цифровому продукту нужен не просто набор экранов. Поможем найти понятную структуру, выразительное направление и интерфейс, в котором легко разобраться.',
      problemTitle: 'Проясним идею до начала разработки.',
      problem: 'Пока продукт только формируется, дизайн помогает превратить предположения в то, что можно обсудить и проверить. Свяжем аудиторию, контент и цели в продуманный пользовательский опыт.',
      scope: [['Направление и референсы', 'Изучим аудиторию, позиционирование и визуальные ориентиры, чтобы согласовать подходящее проекту направление.'], ['Сценарии и прототипы', 'Определим ключевые задачи пользователя, структуру страниц и логику взаимодействия до работы над визуальными деталями.'], ['Интерфейс и дизайн-система', 'Создадим согласованные экраны, адаптивные макеты и переиспользуемые компоненты для последовательного развития продукта.']],
      outcomes: ['Согласованное визуальное направление сайта или продукта', 'Прототипы и дизайн основных пользовательских сценариев', 'Организованный файл с макетами для разработки'],
      steps: [['Сформулируем идею', 'Обсудим аудиторию, назначение продукта и задачи, которые должна решать первая версия.'], ['Зададим направление', 'От референсов и прототипов перейдём к визуальной концепции, сверяясь с вами в ключевых точках.'], ['Соберём цельный интерфейс', 'Завершим согласованные экраны и опишем компоненты и состояния, которые понадобятся разработчикам.']],
      faqs: [['Можно прийти только с идеей?', 'Да. Разговора, короткого описания и нескольких ориентиров достаточно, чтобы начать определять направление и объём работы.'], ['Включены ли разработка и полноценный брендинг?', 'Эта услуга посвящена дизайну интерфейса сайта или продукта. Разработку и расширенную работу над брендом обсуждаем и согласуем отдельно.']],
    },
    development: {
      name: 'Разработка приложений и веб-продуктов', tag: 'FRONTEND / BACKEND / ИНТЕГРАЦИИ', title: ['Больше, чем прототип.', 'Продукт, который работает.'],
      intro: 'Разрабатываем приложения и веб-продукты, в которых интерфейс, бизнес-логика и внешние сервисы работают вместе. От первого MVP до нового этапа существующего продукта.',
      problemTitle: 'Польза появляется, когда всё связано.',
      problem: 'Хороший интерфейс — только часть продукта. Аккаунты, данные, интеграции и повседневные нестандартные ситуации требуют не меньшего внимания. Определим реалистичный первый релиз и будем двигаться к нему.',
      scope: [['Продукт и технический план', 'Превратим требования в конкретный список функций, выберем подход и согласуем границы релиза.'], ['Интерфейс, логика и интеграции', 'Разработаем согласованные клиентскую и серверную части, подключим внешние сервисы и обработаем состояния, с которыми сталкиваются пользователи.'], ['Проверка и подготовка к запуску', 'Проверим основные сценарии, адаптивность и подготовим развёртывание и передачу проекта для согласованного окружения.']],
      outcomes: ['Работающие функции в рамках согласованного релиза', 'Исходный код и необходимые инструкции по настройке', 'Понятный план развёртывания и передачи проекта'],
      steps: [['Определим первую версию', 'Согласуем пользователей, основные задачи, требования и функции, которые можно отложить.'], ['Разработаем по этапам', 'Будем показывать результат небольшими частями, чтобы вы могли оценивать прогресс и принимать решения.'], ['Проверим и передадим', 'Проверим согласованные сценарии, подготовим релиз и объясним, как запускать и поддерживать результат работы.']],
      faqs: [['Вы разрабатываете MVP для стартапов?', 'Да. Поможем определить минимальную полезную версию, которая решает основную задачу вашего продукта.'], ['Можете работать с существующим продуктом?', 'Да, после изучения кода и инфраструктуры. Сначала определим, какие изменения целесообразны и какие зависимости нужно учесть.']],
    },
    'ai-code-repair': {
      name: 'Исправление AI-сайтов и кода', tag: 'VIBE CODING / ОТЛАДКА / РЕФАКТОРИНГ', title: ['Собрали сайт с AI?', 'Доведём до ума.'],
      intro: 'Сайт, созданный с AI, может выглядеть готовым, а внутри оставаться хрупким. Найдём ошибки, исправим сломанные сценарии и приведём в порядок код, выросший из поспешных промптов и правок.',
      problemTitle: 'Работа в предпросмотре — только начало.',
      problem: 'Формы не отправляются, мобильная версия ломается, компоненты запутаны, а интеграция работает только в демо? Разберёмся в причинах и согласуем план исправлений. По возможности сохраним полезные части проекта.',
      scope: [['Разбор кода и поведения', 'Воспроизведём ошибки, изучим связанный с ними код, зависимости и потоки данных, прежде чем предлагать решение.'], ['Исправления и рефакторинг', 'Устраним согласованные ошибки, упростим проблемные компоненты и доработаем ненадёжные сценарии и интеграции.'], ['Проверка и понятная передача', 'Проверим исправленные сценарии, опишем изменения и укажем оставшиеся ограничения и дальнейшие задачи.']],
      outcomes: ['Понятная диагностика и приоритетный план исправлений', 'Согласованные исправления с проверкой затронутых сценариев', 'Читаемые изменения и рекомендации по следующим шагам'],
      steps: [['Покажите, что сломалось', 'Передайте репозиторий, шаги воспроизведения и ожидаемый результат. Мы разберём текущее состояние.'], ['Согласуем исправления', 'Объясним причины, отделим локальные ошибки от системных проблем и определим, с чего начать.'], ['Исправим, проверим и объясним', 'Внесём согласованные изменения, проверим затронутые сценарии и передадим результат с описанием оставшихся ограничений.']],
      faqs: [['Имеет значение, каким AI-инструментом создан код?', 'Работаем с кодом из разных инструментов. Важны доступ к проекту и возможность запустить и изучить реализацию.'], ['Придётся полностью переписывать сайт?', 'Не обязательно. Там, где это разумно, делаем точечные исправления. Если часть проекта нужно пересобрать, объясним причины и заранее согласуем объём.']],
    },
    consulting: {
      name: 'Консультации для бизнеса и стартапов', tag: 'ДИЗАЙН / РАЗРАБОТКА / ПРОДУКТОВЫЕ РЕШЕНИЯ', title: ['Взгляд со стороны.', 'Понятный следующий шаг.'],
      intro: 'Для бизнеса, основателей и команд, которые решают, что создавать, обновлять или улучшать. Разберём вопросы дизайна, разработки и рекламы на примере вашего проекта.',
      problemTitle: 'Движение начинается с понятного решения.',
      problem: 'Несколько возможных направлений, размытая задача или продукт, который перестал развиваться? Изучим контекст, объясним компромиссы и превратим обсуждение в конкретные следующие шаги.',
      scope: [['Разбор проекта и целей', 'Изучим нужные материалы, аудиторию, ограничения и решение, которое вам предстоит принять.'], ['Совместная рабочая сессия', 'Обсудим варианты по дизайну, разработке или рекламе, проверим предположения и проясним зависимости.'], ['Рекомендации и приоритеты', 'Соберём выводы, объясним логику рекомендаций и наметим реалистичную последовательность действий.']],
      outcomes: ['Независимый взгляд на конкретную задачу проекта', 'Итоги с рекомендациями и объяснением компромиссов', 'Приоритетные шаги для работы с вашей командой'],
      steps: [['Сформулируйте вопрос', 'Расскажите, какое решение нужно принять, и заранее поделитесь полезными материалами.'], ['Разберём варианты', 'Вместе изучим ситуацию и явно обозначим важные предположения и компромиссы.'], ['Зафиксируем направление', 'Соберём выводы и следующие шаги. Если нужна реализация, обсудим её отдельно.']],
      faqs: [['Есть смысл обращаться без готового ТЗ?', 'Да. Консультация поможет определить задачу, первую версию или приоритеты редизайна до начала реализации.'], ['Обязательно заказывать дальнейшую работу?', 'Нет. Рекомендации можно использовать со своей командой или другим подрядчиком. Реализация — отдельное решение.']],
    },
  },
};

export function serviceMetadata(locale, slug) {
  const path = servicePath(locale, slug);
  const { title, description } = serviceSeo[locale][slug];
  return {
    metadataBase: new URL('https://rootforce.dev'), title, description,
    alternates: localizedAlternates(locale, language => servicePath(language, slug)),
    ...socialMetadata(locale, path, title, description),
  };
}
