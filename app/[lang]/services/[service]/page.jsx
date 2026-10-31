import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { serviceMetadata, serviceSlugs } from '@/lib/services';

export const dynamicParams = false;
export function generateStaticParams() {
  return ['de', 'ru'].flatMap(lang => serviceSlugs.map(service => ({ lang, service })));
}
export async function generateMetadata({ params }) {
  const { lang, service } = await params;
  if (!['de', 'ru'].includes(lang) || !serviceSlugs.includes(service)) notFound();
  return serviceMetadata(lang, service);
}
export default async function Page({ params }) {
  const { lang, service } = await params;
  if (!['de', 'ru'].includes(lang) || !serviceSlugs.includes(service)) notFound();
  return <ServicePage locale={lang} slug={service} />;
}
