import Landing from '@/components/Landing';
import { pageMetadata } from '@/lib/i18n';

export const metadata = pageMetadata('en');

export default function Home() {
  return <Landing locale="en" />;
}
