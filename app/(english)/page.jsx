import Landing from '@/components/Landing';
import { pageMetadata } from '@/lib/i18n';

export const metadata = {
  ...pageMetadata('en'),
  verification: {
    google: '_Z_LNkO4nfa7-mHDiZRo7MRckhXJ0QWiqURrWXBaHWw',
  },
};

export default function Home() {
  return <Landing locale="en" />;
}
