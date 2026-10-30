import '../globals.css';
import { fontVariables } from '../fonts';

export default function EnglishLayout({ children }) {
  return <html lang="en" className={fontVariables}><body>{children}</body></html>;
}
