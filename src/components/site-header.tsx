import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { Icons } from './icons';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { ModeToggle } from './mode-toggle';

export const SiteHeader = () => {
  return (
    <header className='sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <MainNav />
        <div className='flex flex-1 items-center justify-end space-x-2'>
          <nav className='flex items-center'>
            <Link href={siteConfig.links.linkedin} target='_blank' rel='noreferrer'>
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'hidden w-10 px-0 sm:inline-flex'
                )}
              >
                <Icons.linkedin className='h-5 w-5' />
                <span className='sr-only'>LinkedIn</span>
              </div>
            </Link>
            <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'hidden w-10 px-0 sm:inline-flex'
                )}
              >
                <Icons.gitHub className='h-5 w-5' />
                <span className='sr-only'>Github</span>
              </div>
            </Link>
            <Link href={siteConfig.links.personalSite} target='_blank' rel='noreferrer'>
              <div
                className={cn(
                  buttonVariants({ variant: 'ghost' }),
                  'hidden w-10 px-0 sm:inline-flex'
                )}
              >
                <Icons.personalSite className='h-5 w-5' />
                <span className='sr-only'>Web Personal</span>
              </div>
            </Link>
            <ModeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
};
