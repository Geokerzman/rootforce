import { notFound } from 'next/navigation';
import LegalPage from '@/components/LegalPage';
import { legalMetadata } from '@/lib/legal';

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'ru' }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!['de', 'ru'].includes(lang)) notFound();
  return legalMetadata(lang, 'impressum');
}

export default async function Impressum({ params }) {
  const { lang } = await params;
  if (!['de', 'ru'].includes(lang)) notFound();
  return <LegalPage locale={lang} document="impressum" />;
}
