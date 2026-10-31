import { socialMetadata } from '@/lib/seo';
import { localePath } from '@/lib/i18n';

export const provider = {
  name: 'Boris Onofrei',
  project: 'rootforce.dev',
  street: 'St.-Ulrich-Straße 33',
  city: '79189 Bad Krozingen',
  phone: '+49 160 95314627',
  phoneHref: 'tel:+4916095314627',
  email: 'boris.onofrei.design@gmail.com',
};

const links = {
  hetzner: 'https://www.hetzner.com/de/legal/privacy-policy/',
  cloudflare: 'https://www.cloudflare.com/de-de/privacypolicy/',
  cloudflareDpa: 'https://www.cloudflare.com/cloudflare-customer-dpa/',
  cloudflareCookies: 'https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/',
  google: 'https://policies.google.com/privacy',
  googleTransfers: 'https://policies.google.com/privacy/frameworks',
  authority: 'https://www.baden-wuerttemberg.datenschutz.de/kontakt-aufnehmen/',
};

export const legalUi = {
  en: {
    eyebrow: 'ROOTFORCE / LEGAL INFORMATION',
    impressum: 'Legal notice', datenschutz: 'Privacy policy',
    navigation: 'Legal information', contents: 'On this page',
    home: 'Back to home', homeShort: 'Home ↗',
    updated: 'Last updated', date: '31 October 2026', country: 'Germany',
    authority: 'State Commissioner for Data Protection and Freedom of Information Baden-Württemberg',
    summary: 'At a glance',
  },
  de: {
    eyebrow: 'ROOTFORCE / RECHTLICHE INFORMATIONEN',
    impressum: 'Impressum', datenschutz: 'Datenschutz',
    navigation: 'Rechtliche Informationen', contents: 'Auf dieser Seite',
    home: 'Zurück zur Startseite', homeShort: 'Startseite ↗',
    updated: 'Stand', date: '31. Oktober 2026', country: 'Deutschland',
    authority: 'Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg',
    summary: 'Auf einen Blick',
  },
  ru: {
    eyebrow: 'ROOTFORCE / ПРАВОВАЯ ИНФОРМАЦИЯ',
    impressum: 'Правовая информация', datenschutz: 'Конфиденциальность',
    navigation: 'Правовая информация', contents: 'На этой странице',
    home: 'Вернуться на главную', homeShort: 'На главную ↗',
    updated: 'Обновлено', date: '31 октября 2026', country: 'Германия',
    authority: 'Уполномоченный по защите данных и свободе информации земли Баден-Вюртемберг',
    summary: 'Кратко о главном',
  },
};

export const legalDocuments = {
  en: {
    impressum: {
      title: 'Legal notice',
      description: 'Provider and contact information for rootforce.dev pursuant to § 5 of the German Digital Services Act (DDG).',
      intro: 'Impressum · Information pursuant to § 5 DDG',
      sections: [
        { id: 'provider', title: 'Website provider & contact', paragraphs: ['rootforce.dev is an online offering operated by Boris Onofrei.'], contact: true },
        { id: 'vat', title: 'VAT', paragraphs: ['The small business exemption under § 19 of the German VAT Act (UStG) applies. VAT is not charged.'] },
        { id: 'copyright', title: 'Content & copyright', paragraphs: ['The content and design of this website are protected by applicable copyright law. Third-party rights remain with their respective owners. Any use beyond what is permitted by law requires the permission of the relevant rights holder.'] },
      ],
    },
    datenschutz: {
      title: 'Privacy policy',
      description: 'How rootforce.dev processes data when you visit the website or contact us, and how to exercise your privacy rights.',
      intro: 'Clear information about your data, the services involved and your rights under the GDPR.',
      highlights: ['No analytics or advertising trackers on this website.', 'Fonts and visual assets are served from this website.', 'The contact form sends your request through EmailJS.'],
      sections: [
        { id: 'controller', title: 'Who is responsible?', paragraphs: ['The controller for personal data processed in connection with rootforce.dev is:'], contact: true },
        { id: 'overview', title: 'Scope & legal bases', paragraphs: ['Personal data means information relating to an identified or identifiable person. This notice covers visits to rootforce.dev and enquiries about design, development, advertising and consulting services.', 'Technical access data is processed to deliver and protect the website, based on our legitimate interests under Article 6(1)(f) GDPR. Enquiries relating to a contract or steps before a contract are processed under Article 6(1)(b). Other enquiries are handled under Article 6(1)(f). Where a legal retention obligation applies, the basis is Article 6(1)(c).', 'Contacting us is voluntary. Without the information needed to understand and reply to an enquiry, we may be unable to handle it. We do not use automated decision-making or profiling within the meaning of Article 22 GDPR.'] },
        { id: 'hosting', title: 'Hosting & access logs', paragraphs: ['The website is hosted by Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Germany. Delivering the website involves processing the IP address, requested resource, time of access, browser and operating-system information, referrer where transmitted, and technical status or error information.', 'These data are used for reliable delivery, fault diagnosis and protection against attacks. The legal basis is Article 6(1)(f) GDPR. Technical logs are retained only while required for these purposes; data relevant to a specific security incident may be retained until it is resolved.'], links: [{ label: 'Hetzner privacy information', href: links.hetzner }] },
        { id: 'cloudflare', title: 'Cloudflare delivery & security', paragraphs: ['Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA, provides content delivery and security services. Requests pass through its infrastructure, which can process IP addresses, request and device information, access times and security events.', 'The purpose is to keep the website available, deliver it efficiently and prevent abuse. The legal basis is Article 6(1)(f) GDPR. Information about international processing is provided below.'], links: [{ label: 'Cloudflare privacy policy', href: links.cloudflare }, { label: 'Cloudflare data processing terms', href: links.cloudflareDpa }] },
        { id: 'contact', title: 'Contact form, email & telephone', paragraphs: ["The contact form collects your project name, email address and project description. When you submit it, these details and the website language are sent through EmailJS Pte. Ltd. to our configured contact mailbox. EmailJS also processes technical request data, including IP addresses and browser information, for delivery and abuse prevention. No request is sent to EmailJS merely by opening the form.", "EmailJS processes data on infrastructure in the United States. Its privacy policy describes international transfers, safeguards and request-history retention, which depends on account settings. We use the data to handle and reply to your enquiry.", "If you contact us by email or telephone, we process the contact details, message contents and communication metadata needed to handle your enquiry and any follow-up. The legal bases are Article 6(1)(b) GDPR for contractual enquiries and Article 6(1)(f) for other correspondence."], links: [{ label: "EmailJS privacy policy", href: "https://www.emailjs.com/legal/privacy-policy/" }] },
        { id: 'email-provider', title: 'Email service: Gmail', paragraphs: ['Our contact mailbox uses Gmail. For EEA users, the provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. Email correspondence and its metadata are processed through this service; processing outside the EEA is possible. Google’s privacy information explains its handling of these data.'], links: [{ label: 'Google privacy policy', href: links.google }] },
        { id: 'local-features', title: 'Fonts & visual effects', paragraphs: ['Fonts, images and other visual assets are served from the same website. Visiting the site does not load fonts from Google Fonts or send font requests to Google.', 'The decorative cursor effect processes pointer positions temporarily in browser memory. These positions are not transmitted to our server, stored as interaction histories or used to build profiles.'] },
        { id: 'cookies', title: 'Cookies & browser storage', paragraphs: ['The website itself does not set analytics, advertising or language-preference cookies and does not use localStorage to remember the selected language. The language is part of the page address.', 'Cloudflare may use cookies or similar identifiers for the security functions that are enabled, for example to verify a successful security challenge. Where these are strictly necessary to provide the requested service, access to the device is based on § 25(2)(2) TDDDG; personal-data processing is based on Article 6(1)(f) GDPR. The applicable identifiers and lifetimes depend on the security function, as described in Cloudflare’s documentation.'], links: [{ label: 'Cloudflare cookie information', href: links.cloudflareCookies }] },
        { id: 'recipients', title: 'Recipients & international transfers', paragraphs: ['Data are disclosed only where needed to provide the website, handle correspondence, fulfil legal duties or establish, exercise or defend legal claims. Recipients can include the hosting, security and email providers named above. Processing on our behalf is subject to Article 28 GDPR where applicable.', 'Cloudflare, Google and EmailJS may process data outside the EEA. Their published transfer information describes safeguards, including adequacy decisions for certified recipients under the EU–US Data Privacy Framework and standard contractual clauses where applicable. Details and the relevant safeguards are available through the provider links.'], links: [{ label: 'Cloudflare international transfer information', href: links.cloudflare }, { label: 'Google transfer frameworks', href: links.googleTransfers }] },
        { id: 'retention', title: 'Retention & connection security', paragraphs: ['Enquiry data are kept until the matter is resolved and no further processing is necessary. A longer period can apply where correspondence forms part of business or tax records, or is needed for legal claims. Data kept solely for such purposes are not used for unrelated purposes. They are deleted once the applicable retention reason no longer applies.', 'Technical log retention is governed by the operational and security purposes described above. Any service-specific cookie lifetimes are described in the linked provider information.', 'An HTTPS connection encrypts data in transit between your browser and the website. Email is processed separately by the email services involved and is not automatically end-to-end encrypted.'] },
        { id: 'rights', title: 'Your data protection rights', paragraphs: ['Subject to the legal conditions, you can exercise the following rights by contacting the controller listed above:'], bullets: ['Access to your personal data (Article 15 GDPR).', 'Rectification of inaccurate data (Article 16).', 'Erasure and restriction of processing (Articles 17 and 18).', 'Data portability where applicable (Article 20).', 'Withdrawal of consent at any time, if processing relies on consent, without affecting earlier lawful processing (Article 7(3)).'], callout: { title: 'Right to object', text: 'Where processing is based on Article 6(1)(f) GDPR, you may object on grounds relating to your particular situation under Article 21. We will then stop that processing unless there are overriding compelling legitimate grounds or it is needed for legal claims. You may object to processing for direct marketing at any time.' } },
        { id: 'complaints', title: 'Complaints & supervisory authority', paragraphs: ['Under Article 77 GDPR, you can complain to a supervisory authority, particularly in the country of your habitual residence, workplace or the alleged infringement. The authority for Baden-Württemberg can be reached at:'], authority: true, links: [{ label: 'Contact the supervisory authority', href: links.authority }] },
        { id: 'updates', title: 'Changes to this notice', paragraphs: ['This notice is updated when the website, the services used or the applicable legal requirements change. The date at the top identifies this version.'] },
      ],
    },
  },
  de: {
    impressum: {
      title: 'Impressum',
      description: 'Anbieterkennzeichnung und Kontaktdaten von rootforce.dev gemäß § 5 DDG.',
      intro: 'Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)',
      sections: [
        { id: 'provider', title: 'Anbieter & Kontakt', paragraphs: ['rootforce.dev ist ein Online-Angebot von Boris Onofrei.'], contact: true },
        { id: 'vat', title: 'Umsatzsteuer', paragraphs: ['Es gilt die Kleinunternehmerregelung gemäß § 19 UStG. Es wird keine Umsatzsteuer berechnet.'] },
        { id: 'copyright', title: 'Inhalte & Urheberrecht', paragraphs: ['Die Inhalte und die Gestaltung dieser Website unterliegen dem geltenden Urheberrecht. Rechte Dritter verbleiben bei den jeweiligen Rechteinhabern. Eine Nutzung außerhalb der gesetzlichen Erlaubnisse bedarf der Zustimmung des jeweiligen Rechteinhabers.'] },
      ],
    },
    datenschutz: {
      title: 'Datenschutzerklärung',
      description: 'Informationen zur Datenverarbeitung bei rootforce.dev, zu den eingesetzten Diensten und zu Ihren Datenschutzrechten.',
      intro: 'Verständliche Informationen zu Ihren Daten, den eingesetzten Diensten und Ihren Rechten nach der DSGVO.',
      highlights: ['Keine Analyse- oder Werbetracker auf dieser Website.', 'Schriften und Grafiken werden von dieser Website geladen.', 'Das Kontaktformular sendet Ihre Anfrage über EmailJS.'],
      sections: [
        { id: 'controller', title: 'Wer ist verantwortlich?', paragraphs: ['Verantwortlich für die Verarbeitung personenbezogener Daten im Zusammenhang mit rootforce.dev ist:'], contact: true },
        { id: 'overview', title: 'Geltungsbereich & Rechtsgrundlagen', paragraphs: ['Personenbezogene Daten sind Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen. Diese Erklärung betrifft den Besuch von rootforce.dev und Anfragen zu Design, Entwicklung, Werbung und Beratung.', 'Technische Zugriffsdaten verarbeiten wir zur Bereitstellung und Absicherung der Website auf Grundlage unserer berechtigten Interessen nach Art. 6 Abs. 1 lit. f DSGVO. Vertragsbezogene Anfragen und vorvertragliche Maßnahmen beruhen auf Art. 6 Abs. 1 lit. b DSGVO, sonstige Anfragen auf Art. 6 Abs. 1 lit. f DSGVO. Gesetzliche Aufbewahrungspflichten werden auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO erfüllt.', 'Die Kontaktaufnahme ist freiwillig. Ohne die zur Bearbeitung und Beantwortung erforderlichen Angaben können wir eine Anfrage gegebenenfalls nicht bearbeiten. Eine automatisierte Entscheidungsfindung oder ein Profiling im Sinne von Art. 22 DSGVO findet nicht statt.'] },
        { id: 'hosting', title: 'Hosting & Zugriffsprotokolle', paragraphs: ['Diese Website wird bei der Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland, gehostet. Beim Abruf werden insbesondere IP-Adresse, angeforderte Ressource, Zugriffszeit, Browser- und Betriebssysteminformationen, ein gegebenenfalls übermittelter Referrer sowie technische Status- und Fehlerinformationen verarbeitet.', 'Zwecke sind die zuverlässige Bereitstellung, die Fehleranalyse und der Schutz vor Angriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Technische Protokolle werden nur so lange gespeichert, wie dies für diese Zwecke erforderlich ist. Daten zu einem konkreten Sicherheitsvorfall können bis zu dessen Aufklärung aufbewahrt werden.'], links: [{ label: 'Datenschutzhinweise von Hetzner', href: links.hetzner }] },
        { id: 'cloudflare', title: 'Cloudflare: Auslieferung & Sicherheit', paragraphs: ['Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA, stellt Dienste zur Auslieferung und Absicherung der Website bereit. Anfragen laufen über diese Infrastruktur. Dabei können IP-Adressen, Anfrage- und Geräteinformationen, Zugriffszeiten und Sicherheitsereignisse verarbeitet werden.', 'Dies dient der Verfügbarkeit, einer effizienten Auslieferung und dem Schutz vor Missbrauch. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Hinweise zu einer Verarbeitung außerhalb des EWR finden Sie weiter unten.'], links: [{ label: 'Datenschutzerklärung von Cloudflare', href: links.cloudflare }, { label: 'Datenverarbeitungsbedingungen von Cloudflare', href: links.cloudflareDpa }] },
        { id: 'contact', title: 'Kontaktformular, E-Mail & Telefon', paragraphs: ["Das Kontaktformular erfasst Ihren Projektnamen, Ihre E-Mail-Adresse und Ihre Projektbeschreibung. Beim Absenden werden diese Angaben und die Website-Sprache über EmailJS Pte. Ltd. an unser eingerichtetes Kontaktpostfach gesendet. EmailJS verarbeitet außerdem technische Anfragedaten einschließlich IP-Adresse und Browserinformationen für die Zustellung und Missbrauchsprävention. Das bloße Öffnen des Formulars löst keine Anfrage an EmailJS aus.", "EmailJS verarbeitet Daten auf Infrastruktur in den USA. Die Datenschutzerklärung des Anbieters erläutert internationale Übermittlungen, Schutzmaßnahmen und die von Kontoeinstellungen abhängige Speicherung des Anfrageverlaufs. Wir verwenden die Daten zur Bearbeitung und Beantwortung Ihrer Anfrage.", "Bei einer Kontaktaufnahme per E-Mail oder Telefon verarbeiten wir die Kontaktdaten, Inhalte und Kommunikationsmetadaten, die zur Bearbeitung Ihrer Anfrage und möglicher Rückfragen nötig sind. Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO für vertragsbezogene Anfragen und Art. 6 Abs. 1 lit. f DSGVO für sonstige Korrespondenz."], links: [{ label: "Datenschutzerklärung von EmailJS", href: "https://www.emailjs.com/legal/privacy-policy/" }] },
        { id: 'email-provider', title: 'E-Mail-Dienst: Gmail', paragraphs: ['Unser Kontaktpostfach nutzt Gmail. Anbieter für Nutzer im EWR ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. E-Mail-Korrespondenz und zugehörige Metadaten werden über diesen Dienst verarbeitet; eine Verarbeitung außerhalb des EWR ist möglich. Einzelheiten erläutert Google in seinen Datenschutzhinweisen.'], links: [{ label: 'Datenschutzerklärung von Google', href: links.google }] },
        { id: 'local-features', title: 'Schriftarten & visuelle Effekte', paragraphs: ['Schriftarten, Bilder und weitere Grafiken werden von derselben Website geladen. Beim Besuch werden keine Schriften von Google Fonts abgerufen und keine Schriftanfragen an Google gesendet.', 'Der dekorative Cursoreffekt verarbeitet Zeigerpositionen vorübergehend im Arbeitsspeicher Ihres Browsers. Diese Positionen werden nicht an unseren Server übermittelt, nicht als Interaktionsverlauf gespeichert und nicht zur Profilbildung verwendet.'] },
        { id: 'cookies', title: 'Cookies & Browserspeicher', paragraphs: ['Die Website selbst setzt keine Analyse-, Werbe- oder Sprachpräferenz-Cookies ein und speichert die ausgewählte Sprache nicht in localStorage. Die Sprache ist Bestandteil der Seitenadresse.', 'Cloudflare kann für aktivierte Sicherheitsfunktionen Cookies oder vergleichbare Kennungen verwenden, etwa zur Bestätigung einer bestandenen Sicherheitsprüfung. Soweit dies für den ausdrücklich angeforderten Dienst unbedingt erforderlich ist, beruht der Endgerätezugriff auf § 25 Abs. 2 Nr. 2 TDDDG; die Verarbeitung personenbezogener Daten beruht auf Art. 6 Abs. 1 lit. f DSGVO. Kennungen und Laufzeiten richten sich nach der jeweiligen Sicherheitsfunktion und sind in der Cloudflare-Dokumentation beschrieben.'], links: [{ label: 'Informationen zu Cloudflare-Cookies', href: links.cloudflareCookies }] },
        { id: 'recipients', title: 'Empfänger & internationale Übermittlungen', paragraphs: ['Eine Weitergabe erfolgt nur, soweit dies zur Bereitstellung der Website, zur Bearbeitung von Korrespondenz, zur Erfüllung gesetzlicher Pflichten oder für Rechtsansprüche erforderlich ist. Empfänger können die oben genannten Hosting-, Sicherheits- und E-Mail-Anbieter sein. Für eine Verarbeitung in unserem Auftrag gilt, soweit einschlägig, Art. 28 DSGVO.', 'Cloudflare, Google und EmailJS können Daten außerhalb des EWR verarbeiten. Die veröffentlichten Übermittlungshinweise nennen Schutzmechanismen wie Angemessenheitsbeschlüsse für zertifizierte Empfänger nach dem EU–US Data Privacy Framework und gegebenenfalls Standardvertragsklauseln. Einzelheiten und die einschlägigen Garantien sind über die Anbieterlinks zugänglich.'], links: [{ label: 'Übermittlungshinweise von Cloudflare', href: links.cloudflare }, { label: 'Übermittlungsrahmen von Google', href: links.googleTransfers }] },
        { id: 'retention', title: 'Speicherdauer & Verbindungssicherheit', paragraphs: ['Anfragedaten werden aufbewahrt, bis das Anliegen abgeschlossen ist und keine weitere Verarbeitung erforderlich ist. Längere Fristen können gelten, wenn Korrespondenz zu handels- oder steuerrechtlichen Unterlagen gehört oder für Rechtsansprüche benötigt wird. Ausschließlich hierfür aufbewahrte Daten werden nicht für andere Zwecke verwendet und nach Wegfall des Aufbewahrungsgrunds gelöscht.', 'Für technische Protokolle sind die oben beschriebenen Betriebs- und Sicherheitszwecke maßgeblich. Dienstspezifische Cookie-Laufzeiten ergeben sich aus den verlinkten Anbieterinformationen.', 'Eine HTTPS-Verbindung verschlüsselt den Transport zwischen Ihrem Browser und der Website. E-Mails werden davon getrennt über die beteiligten E-Mail-Dienste verarbeitet und sind nicht automatisch Ende-zu-Ende-verschlüsselt.'] },
        { id: 'rights', title: 'Ihre Datenschutzrechte', paragraphs: ['Unter den gesetzlichen Voraussetzungen können Sie sich zur Ausübung folgender Rechte an die oben genannte verantwortliche Person wenden:'], bullets: ['Auskunft über Ihre personenbezogenen Daten (Art. 15 DSGVO).', 'Berichtigung unrichtiger Daten (Art. 16 DSGVO).', 'Löschung und Einschränkung der Verarbeitung (Art. 17 und 18 DSGVO).', 'Datenübertragbarkeit, soweit anwendbar (Art. 20 DSGVO).', 'Widerruf einer Einwilligung mit Wirkung für die Zukunft, soweit eine Verarbeitung darauf beruht (Art. 7 Abs. 3 DSGVO).'], callout: { title: 'Ihr Widerspruchsrecht', text: 'Bei einer Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO können Sie aus Gründen Ihrer besonderen Situation nach Art. 21 DSGVO widersprechen. Wir beenden die betreffende Verarbeitung, sofern keine überwiegenden zwingenden schutzwürdigen Gründe oder Gründe für Rechtsansprüche vorliegen. Einer Verarbeitung für Direktwerbung können Sie jederzeit widersprechen.' } },
        { id: 'complaints', title: 'Beschwerde & Aufsichtsbehörde', paragraphs: ['Nach Art. 77 DSGVO können Sie sich bei einer Aufsichtsbehörde beschweren, insbesondere am Ort Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des mutmaßlichen Verstoßes. Die Aufsichtsbehörde für Baden-Württemberg erreichen Sie unter:'], authority: true, links: [{ label: 'Kontakt zur Datenschutzaufsicht', href: links.authority }] },
        { id: 'updates', title: 'Änderungen dieser Erklärung', paragraphs: ['Diese Erklärung wird angepasst, wenn sich die Website, die eingesetzten Dienste oder die rechtlichen Anforderungen ändern. Das Datum am Seitenanfang bezeichnet den Stand dieser Fassung.'] },
      ],
    },
  },
  ru: {
    impressum: {
      title: 'Правовая информация',
      description: 'Владелец rootforce.dev и контактные данные согласно § 5 немецкого закона о цифровых услугах (DDG).',
      intro: 'Impressum · Сведения согласно § 5 Digitale-Dienste-Gesetz (DDG)',
      sections: [
        { id: 'provider', title: 'Владелец сайта и контакты', paragraphs: ['rootforce.dev — сайт, который ведёт Boris Onofrei.'], contact: true },
        { id: 'vat', title: 'Налог на добавленную стоимость', paragraphs: ['Применяется режим малого предпринимательства согласно § 19 немецкого закона о НДС (UStG). НДС не начисляется.'] },
        { id: 'copyright', title: 'Материалы и авторские права', paragraphs: ['Материалы и оформление сайта защищены действующим авторским правом. Права на сторонние материалы принадлежат их правообладателям. Использование за пределами разрешённого законом требует согласия соответствующего правообладателя.'] },
      ],
    },
    datenschutz: {
      title: 'Политика конфиденциальности',
      description: 'Как rootforce.dev обрабатывает данные посетителей и обращения, какие сервисы использует и как реализовать права на защиту данных.',
      intro: 'Понятно о ваших данных, используемых сервисах и правах по Общему регламенту ЕС о защите данных (GDPR).',
      highlights: ['На сайте нет аналитических и рекламных трекеров.', 'Шрифты и графика загружаются с этого сайта.', 'Форма отправляет заявку через EmailJS.'],
      sections: [
        { id: 'controller', title: 'Кто отвечает за обработку данных', paragraphs: ['Ответственным за обработку персональных данных в связи с работой rootforce.dev является:'], contact: true },
        { id: 'overview', title: 'Область действия и правовые основания', paragraphs: ['Персональные данные — информация, относящаяся к определённому или определяемому человеку. Эта политика распространяется на посещение rootforce.dev и обращения по вопросам дизайна, разработки, рекламы и консультаций.', 'Технические данные доступа обрабатываются для работы и защиты сайта на основании законных интересов по ст. 6(1)(f) GDPR. Для обращений, связанных с договором или подготовкой к его заключению, применяется ст. 6(1)(b); для прочих обращений — ст. 6(1)(f). Исполнение установленных законом обязанностей хранения основано на ст. 6(1)(c).', 'Обращение добровольно. Без данных, необходимых для понимания вопроса и ответа, мы можем не суметь его обработать. Автоматизированные решения и профилирование в смысле ст. 22 GDPR не применяются.'] },
        { id: 'hosting', title: 'Хостинг и журналы доступа', paragraphs: ['Сайт размещён у Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Германия. При загрузке обрабатываются IP-адрес, запрошенный ресурс, время обращения, сведения о браузере и операционной системе, переданный referrer и технические статусы или ошибки.', 'Цели — надёжная работа сайта, поиск неисправностей и защита от атак. Основание — ст. 6(1)(f) GDPR. Технические журналы хранятся, пока нужны для этих целей; данные о конкретном инциденте безопасности могут сохраняться до его расследования.'], links: [{ label: 'Информация Hetzner о защите данных', href: links.hetzner }] },
        { id: 'cloudflare', title: 'Cloudflare: доставка и защита сайта', paragraphs: ['Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, США, предоставляет доставку контента и защиту сайта. Запросы проходят через эту инфраструктуру, где могут обрабатываться IP-адреса, сведения о запросах и устройствах, время доступа и события безопасности.', 'Цели — доступность сайта, эффективная доставка контента и предотвращение злоупотреблений. Основание — ст. 6(1)(f) GDPR. Об обработке за пределами ЕЭЗ рассказано ниже.'], links: [{ label: 'Политика конфиденциальности Cloudflare', href: links.cloudflare }, { label: 'Условия обработки данных Cloudflare', href: links.cloudflareDpa }] },
        { id: 'contact', title: 'Форма, электронная почта и телефон', paragraphs: ["Форма собирает название проекта, адрес электронной почты и описание задачи. При отправке эти данные и язык сайта передаются через EmailJS Pte. Ltd. в настроенный контактный ящик. EmailJS также обрабатывает технические данные запроса, включая IP-адрес и сведения о браузере, для доставки и предотвращения злоупотреблений. Простое открытие формы не вызывает запросов к EmailJS.", "EmailJS обрабатывает данные на инфраструктуре в США. Политика провайдера описывает международную передачу, меры защиты и хранение истории запросов, зависящее от настроек аккаунта. Мы используем данные для обработки обращения и ответа.", "При обращении по почте или телефону обрабатываются контактные данные, содержание сообщения и метаданные связи, необходимые для ответа и последующей переписки. Для договорных обращений основание — ст. 6(1)(b) GDPR, для прочей переписки — ст. 6(1)(f)."], links: [{ label: "Политика конфиденциальности EmailJS", href: "https://www.emailjs.com/legal/privacy-policy/" }] },
        { id: 'email-provider', title: 'Почтовый сервис Gmail', paragraphs: ['Контактный ящик работает через Gmail. Для пользователей ЕЭЗ провайдер — Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ирландия. Сервис обрабатывает переписку и её метаданные; возможна обработка за пределами ЕЭЗ. Подробности приведены в политике Google.'], links: [{ label: 'Политика конфиденциальности Google', href: links.google }] },
        { id: 'local-features', title: 'Шрифты и визуальные эффекты', paragraphs: ['Шрифты, изображения и другая графика загружаются с этого же сайта. Посещение не вызывает загрузку шрифтов из Google Fonts или отправку запросов к Google за шрифтами.', 'Декоративный эффект курсора временно обрабатывает положения указателя в памяти браузера. Они не передаются нашему серверу, не сохраняются как история взаимодействий и не используются для профилирования.'] },
        { id: 'cookies', title: 'Cookies и хранилище браузера', paragraphs: ['Сам сайт не устанавливает аналитические, рекламные или языковые cookies и не сохраняет выбранный язык в localStorage. Язык определяется адресом страницы.', 'Cloudflare может использовать cookies или сходные идентификаторы для включённых функций защиты, например для подтверждения пройденной проверки безопасности. Если они строго необходимы для запрошенной услуги, доступ к устройству основан на § 25(2)(2) TDDDG, обработка персональных данных — на ст. 6(1)(f) GDPR. Конкретные идентификаторы и сроки зависят от функции защиты и описаны в документации Cloudflare.'], links: [{ label: 'Информация о cookies Cloudflare', href: links.cloudflareCookies }] },
        { id: 'recipients', title: 'Получатели и международная передача', paragraphs: ['Данные раскрываются, когда это необходимо для работы сайта, обработки переписки, выполнения законных обязанностей или предъявления, осуществления и защиты правовых требований. Получателями могут быть перечисленные выше провайдеры хостинга, защиты и почты. К обработке по нашему поручению применяется ст. 28 GDPR, когда это предусмотрено законом.', 'Cloudflare, Google и EmailJS могут обрабатывать данные за пределами ЕЭЗ. В опубликованных условиях они описывают гарантии, включая решения об адекватности защиты для сертифицированных получателей по EU–US Data Privacy Framework и стандартные договорные положения, когда они применимы. Подробности и соответствующие гарантии доступны по ссылкам провайдеров.'], links: [{ label: 'Международная передача данных Cloudflare', href: links.cloudflare }, { label: 'Механизмы передачи данных Google', href: links.googleTransfers }] },
        { id: 'retention', title: 'Хранение и безопасность соединения', paragraphs: ['Данные обращения сохраняются до завершения вопроса и прекращения необходимости обработки. Более длительное хранение возможно, если переписка относится к обязательным коммерческим или налоговым документам либо нужна для правовых требований. Сохранённые только по этим причинам данные не используются для иных целей и удаляются после прекращения основания хранения.', 'Для технических журналов определяющими являются описанные выше эксплуатационные цели и безопасность. Сроки cookies конкретных сервисов приведены в документации провайдеров.', 'HTTPS шифрует передачу данных между браузером и сайтом. Электронная почта обрабатывается отдельно участвующими почтовыми сервисами и не получает сквозное шифрование автоматически.'] },
        { id: 'rights', title: 'Ваши права на защиту данных', paragraphs: ['При соблюдении установленных законом условий вы можете обратиться к указанному выше ответственному лицу для реализации следующих прав:'], bullets: ['Доступ к своим персональным данным — ст. 15 GDPR.', 'Исправление неточных данных — ст. 16.', 'Удаление и ограничение обработки — ст. 17 и 18.', 'Переносимость данных, когда применима, — ст. 20.', 'Отзыв согласия на будущее, если обработка основана на согласии, — ст. 7(3). Ранее законная обработка остаётся законной.'], callout: { title: 'Право на возражение', text: 'Если обработка основана на ст. 6(1)(f) GDPR, вы можете возразить по причинам, связанным с вашей конкретной ситуацией, согласно ст. 21. Такая обработка прекращается, если нет преобладающих веских законных оснований или необходимости для правовых требований. Против обработки для прямого маркетинга можно возразить в любой момент.' } },
        { id: 'complaints', title: 'Жалобы и надзорный орган', paragraphs: ['Согласно ст. 77 GDPR вы можете подать жалобу в надзорный орган, в частности по месту обычного проживания, работы или предполагаемого нарушения. Контакты органа земли Баден-Вюртемберг:'], authority: true, links: [{ label: 'Контакты надзорного органа', href: links.authority }] },
        { id: 'updates', title: 'Изменения политики', paragraphs: ['Политика обновляется при изменении сайта, используемых сервисов или правовых требований. Дата в начале страницы обозначает версию документа.'] },
      ],
    },
  },
};

export function legalPath(locale, document) {
  return `${localePath(locale)}${document}/`;
}

export function legalMetadata(locale, document) {
  const content = legalDocuments[locale][document];
  return {
    metadataBase: new URL('https://rootforce.dev'),
    title: `${content.title} — rootforce.dev`,
    description: content.description,
    ...socialMetadata(locale, legalPath(locale, document), `${content.title} — rootforce.dev`, content.description),
    alternates: {
      canonical: legalPath(locale, document),
      languages: {
        en: legalPath('en', document), de: legalPath('de', document), ru: legalPath('ru', document),
        'x-default': legalPath('en', document),
      },
    },
  };
}
