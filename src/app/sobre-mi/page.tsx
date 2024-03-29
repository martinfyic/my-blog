import { Metadata } from 'next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'En esta página encontraras información sobre mí',
};

export default async function AboutPage() {
  return (
    <div className='container max-w-6xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-x-4'>
          <h1 className='inline-block text-4xl font-black lg:text-5xl'>Sobre mí</h1>
        </div>
      </div>
      <hr className='my-8 ' />
      <div className='flex flex-col items-center gap-8 md:flex-row md:items-start'>
        <div className='flex min-w-48 max-w-48 flex-col gap-2'>
          <Avatar className='h-48 w-48'>
            <AvatarImage src='/avatar.png' alt={siteConfig.author} />
            <AvatarFallback>MF</AvatarFallback>
          </Avatar>
          <h2 className='break-words text-center text-2xl font-bold'>
            {siteConfig.author}
          </h2>
          <p className='break-words text-center text-muted-foreground'>
            Programador Full Stack
          </p>
        </div>
        <p className='py-4 text-lg text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus explicabo
          recusandae sunt veritatis harum fugiat enim minima, culpa dolor nisi porro
          quaerat iure, dolorum non earum animi, doloremque aliquam perspiciatis
          dignissimos magni numquam aspernatur totam aliquid. Placeat delectus, alias
          harum accusamus pariatur amet laboriosam, magnam tenetur sequi consequatur
          soluta incidunt inventore iusto quo consectetur libero nam, dolorum impedit
          quaerat! Impedit asperiores sunt iusto ipsum corporis dolor maiores nam optio,
          veniam quod molestias, quidem libero voluptatibus at sit ut fugit, pariatur
          repellat veritatis. Amet, quis aliquam ipsam eveniet odio.
        </p>
      </div>
    </div>
  );
}
