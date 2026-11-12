import '../globals.css';
import { fontVariables } from '../fonts';
import { siteIcons } from '@/lib/seo';

export const metadata = { icons: siteIcons };

export default async function LanguageLayout({ children, params }) {
  const { lang } = await params;
  return <html lang={lang} className={fontVariables}><body>{children}</body></html>;
}
