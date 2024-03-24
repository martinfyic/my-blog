import { ReactNode } from 'react';
import type { Metadata } from 'next';

import { roboto } from '@/config/fonts';

import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Blog Martin Ferreira',
    default: 'Inicio | Blog Martin Ferreira',
  },
  description:
    'Este es un blog personal, el cual ire volcando mi experiencia a los retos enfrentados en este proceso de aprendizaje del desarrollo web',
  keywords: [
    'blog',
    'personal',
    'martin ferreira',
    'martin',
    'ferreira',
    'desarrollo web',
    'next js',
    'next',
    'react js',
    'react',
    'javascript',
    'js',
    'typescript',
    'ts',
    'frontend',
    'backend',
    'fullstack',
    'full-stack',
    'node',
    'nodejs',
    'express',
    'mongo',
    'mongodb',
    'postgresql',
    'postgres',
  ],
  authors: [{ name: 'Martin Ferreira Yic', url: 'https://www.martin-ferreira.com/' }],
  creator: 'Martin Ferreira Yic',
  category: 'Blog',
  publisher: 'Martin Ferreira Yic',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='es'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          roboto.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
