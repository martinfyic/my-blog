'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { TransitionLink } from './transition-link';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/tags', label: 'Tags' },
  { href: '/sobre-mi', label: 'Sobre mí' },
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
        <TransitionLink
          key={link.href}
          href={link.href}
          className={cn(
            'hidden text-sm font-semibold transition-colors hover:text-primary sm:inline-block',
            pathname === link.href ? 'text-[#2ca9bc]' : 'text-foreground/60'
          )}
        >
          {link.label}
        </TransitionLink>
      ))}
    </nav>
  );
};
