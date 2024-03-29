import Link from 'next/link';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn, sortPost } from '@/lib/utils';
import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';

export default function HomeBlog() {
  const latestPosts = sortPost(posts).slice(0, 3);
  return (
    <>
      <section className='space-y-6 pb-8 pt-6 md:mt-10 md:pb-12 lg:py-32'>
        <div className='container flex flex-col gap-4 text-center'>
          <h1 className='text-3xl font-black sm:text-5xl md:text-6xl lg:text-8xl'>
            Hola! Soy <span className='text-[#2ca9bc]'>Martín</span>
          </h1>
          <p className='mx-auto max-w-[42rem] text-balance text-muted-foreground sm:text-xl'>
            Bienvenido a mi blog, creado con tailwind, shadcn, velite y Next.js 14. Aquí
            encontrarás artículos sobre desarrollo web y tecnologías 🚀.
          </p>
          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Link
              href='/blog'
              className={cn(
                buttonVariants({ size: 'lg', className: 'bg-[#2ca9bc]' }),
                'w-full sm:w-fit'
              )}
            >
              Ir al blog
            </Link>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noopener noreferrer'
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'flex w-full flex-row gap-2 sm:w-fit'
              )}
            >
              GitHub
              <Icons.gitHub className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </section>
      <section className='container mt-60 flex max-w-4xl flex-col space-y-6 py-6 lg:py-10'>
        <h2 className='text-center text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl'>
          Últimos artículos
        </h2>
        <ul className='flex flex-col'>
          {latestPosts.map((post) => (
            <li key={post.slug} className='first:border-t first:border-border'>
              <PostItem
                date={post.date}
                slug={post.slug}
                title={post.title}
                description={post.description}
                tags={post.tags}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
