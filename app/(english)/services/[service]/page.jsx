import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { serviceMetadata, serviceSlugs } from '@/lib/services';

export const dynamicParams = false;
export function generateStaticParams() {
  return serviceSlugs.map(service => ({ service }));
}
export async function generateMetadata({ params }) {
  const { service } = await params;
  if (!serviceSlugs.includes(service)) notFound();
  return serviceMetadata('en', service);
}
export default async function Page({ params }) {
  const { service } = await params;
  if (!serviceSlugs.includes(service)) notFound();
  return <ServicePage locale="en" slug={service} />;
}
