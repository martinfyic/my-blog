import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface CalloutProps {
  children?: ReactNode;
  type?: 'default' | 'warning' | 'danger';
}

export const Callout = ({ children, type = 'default', ...props }: CalloutProps) => {
  return (
    <div
      className={cn(
        'my-6 w-full items-start rounded-md border border-l-4 p-4 dark:max-w-none',
        {
          'border-red-900 bg-red-100 dark:prose': type === 'danger',
          'border-yellow-900 bg-yellow-100 dark:prose': type === 'warning',
          'border-green-900 bg-green-100 dark:prose': type === 'default',
        }
      )}
      {...props}
    >
      {children}
    </div>
  );
};
