import './globals.css';
import type { Metadata } from 'next';
import { Crimson_Pro, Poppins } from 'next/font/google';

const crimsonPro = Crimson_Pro({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Dear Manifestor',
  description: 'Get daily affirmation notes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${crimsonPro.className} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
