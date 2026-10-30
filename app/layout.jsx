import './globals.css';

export const metadata = {
  "title": "rootforce.dev — идеи обретают форму",
  "description": "rootforce.dev — от первой идеи до цифрового продукта. Дизайн, разработка и внимание к деталям."
};

export default function RootLayout({ children }) {
  return <html lang="ru"><body>{children}</body></html>;
}
