import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nishil Anand',
  description: 'Personal website of Nishil Anand',
  keywords: ['Nishil Anand', 'Nishil', 'Anand', 'nishilanand', 'nishoof'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={GeistSans.className}>
      <head>
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'Nishil Anand',
            'url': 'https://nishilanand.com',
          })}
        </script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}