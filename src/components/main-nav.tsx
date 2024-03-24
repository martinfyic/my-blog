'use client';

import Link from 'next/link';

import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export const MainNav = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'text-sm font-semibold transition-colors hover:text-primary',
            pathname === link.href ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
