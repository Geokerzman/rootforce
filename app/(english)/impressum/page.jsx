import LegalPage from '@/components/LegalPage';
import { legalMetadata } from '@/lib/legal';

export const metadata = legalMetadata('en', 'impressum');

export default function Impressum() {
  return <LegalPage locale="en" document="impressum" />;
}
