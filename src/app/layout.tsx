import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { roboto } from '@/config/fonts';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/site-header';
import { siteConfig } from '@/config/site';
import { Providers } from '@/components/providers';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `Inicio | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.links.personalSite }],
  creator: siteConfig.author,
  category: 'Blog',
  publisher: siteConfig.author,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='es' className='scroll-pt-[3.5rem] scroll-smooth'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          roboto.variable
        )}
      >
        <Providers>
          <div className='min-h-dvh relative flex flex-col bg-background'>
            <SiteHeader />
            <main className='flex-1'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
