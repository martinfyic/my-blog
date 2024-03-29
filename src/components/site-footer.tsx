import { siteConfig } from '@/config/site';
import { Mail } from 'lucide-react';
import { Icons } from './icons';

export const SiteFooter = () => {
  return (
    <footer>
      <div className='mb-6 mt-14 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <a href='mailto:martin.f.yic@gmail.com' target='_blank' rel='noreferrer'>
            <span className='sr-only'>Email</span>
            <Mail className='h-6 w-6' />
          </a>
          <a href={siteConfig.links.linkedin} target='_blank' rel='noreferrer'>
            <span className='sr-only'>Linkedin</span>
            <Icons.linkedin className='h-6 w-6' />
          </a>
          <a href={siteConfig.links.github} target='_blank' rel='noreferrer'>
            <span className='sr-only'>GitHub</span>
            <Icons.gitHub className='h-6 w-6' />
          </a>
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-muted-foreground'>
          <a href={siteConfig.links.personalSite} target='_blank' rel='noreferrer'>
            {siteConfig.author} 👨🏻‍💻
          </a>
        </div>
      </div>
    </footer>
  );
};
