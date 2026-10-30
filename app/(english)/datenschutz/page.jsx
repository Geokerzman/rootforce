import LegalPage from '@/components/LegalPage';
import { legalMetadata } from '@/lib/legal';

export const metadata = legalMetadata('en', 'datenschutz');

export default function Privacy() {
  return <LegalPage locale="en" document="datenschutz" />;
}
