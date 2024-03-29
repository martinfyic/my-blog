'use client';

import { ReactNode, useState } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button, buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='w-10 px-0 sm:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <MobileLink href='/' onOpenChange={setOpen} className='flex items-center'>
          <Icons.logo className='mr-2 h-6 w-6' />
          <span className='font-bold'>{siteConfig.name}</span>
        </MobileLink>
        <div className='mt-3 flex flex-col gap-3'>
          <MobileLink href='/blog' onOpenChange={setOpen}>
            Blog
          </MobileLink>
          <MobileLink href='/tags' onOpenChange={setOpen}>
            Tags
          </MobileLink>
          <MobileLink href='/sobre-mi' onOpenChange={setOpen}>
            Sobre mí
          </MobileLink>
          <hr className='my-6' />
          <div className='flex flex-row items-center justify-around'>
            <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
              <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-10 px-0')}>
                <Icons.gitHub className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.linkedin} target='_blank' rel='noreferrer'>
              <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-10 px-0')}>
                <Icons.linkedin className='h-5 w-5' />
                <span className='sr-only'>LinkedIn</span>
              </div>
            </Link>
            <Link href={siteConfig.links.personalSite} target='_blank' rel='noreferrer'>
              <div className={cn(buttonVariants({ variant: 'ghost' }), 'w-10 px-0')}>
                <Icons.personalSite className='h-5 w-5' />
                <span className='sr-only'>Web Personal</span>
              </div>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

interface MobileLinkProps extends LinkProps {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const MobileLink = ({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};
