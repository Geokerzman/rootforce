import '../globals.css';
import { fontVariables } from '../fonts';
import { siteIcons } from '@/lib/seo';

export const metadata = { icons: siteIcons };

export default function EnglishLayout({ children }) {
  return <html lang="en" className={fontVariables}><body>{children}</body></html>;
}
