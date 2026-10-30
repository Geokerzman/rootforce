import '../globals.css';
import { fontVariables } from '../fonts';

export default async function LanguageLayout({ children, params }) {
  const { lang } = await params;
  return <html lang={lang} className={fontVariables}><body>{children}</body></html>;
}
