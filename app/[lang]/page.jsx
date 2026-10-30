import { notFound } from 'next/navigation';
import Landing from '@/components/Landing';
import { messages, pageMetadata } from '@/lib/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'ru' }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!['de', 'ru'].includes(lang)) notFound();
  return pageMetadata(lang);
}

export default async function LocalizedHome({ params }) {
  const { lang } = await params;
  if (!messages[lang] || !['de', 'ru'].includes(lang)) notFound();
  return <Landing locale={lang} />;
}
