'use client';
import React, { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    if (pathname === href) return;

    const body = document.querySelector('body');
    body?.classList.add('page-transition');
    await sleep(300);
    router.push(href);
    await sleep(300);
    body?.classList.remove('page-transition');
  };

  return (
    <Link href={href} className={className} {...props} onClick={handleTransition}>
      {children}
    </Link>
  );
};
