import { Metadata } from 'next';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'En este espacio, compartiré mis experiencias como programador full stack, explorando los desafíos que he enfrentado y las soluciones que he descubierto a lo largo de mi trayecto. Mi objetivo es no solo documentar mi propio crecimiento, sino también ofrecer insights y consejos que puedan ser útiles para otros desarrolladores que estén en mi misma situación.',
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
        <div className='flex flex-col text-center sm:text-start'>
          <p className='text-balance py-4 text-lg'>
            ¡Hola! Soy Martín Ferreira, originario de Montevideo, Uruguay.{' '}
            <span className='font-semibold text-[#2ca9bc]'>CodeZen</span> es más que un
            blog, es mi viaje personal en el mundo del desarrollo web, donde transformo
            mis desafíos en oportunidades de aprendizaje.
          </p>
          <p className='text-balance py-4 text-lg'>
            En este espacio, compartiré mis experiencias como programador full stack,
            explorando los desafíos que he enfrentado y las soluciones que he descubierto
            a lo largo de mi trayecto. Mi objetivo es no solo documentar mi propio
            crecimiento, sino también ofrecer insights y consejos que puedan ser útiles
            para otros desarrolladores que estén en mi misma situación.
          </p>
          <p className='text-balance py-4 text-lg'>
            <span className='font-semibold text-[#2ca9bc]'>CodeZen </span>
            es un espacio de aprendizaje continuo, donde la pasión por el código se
            encuentra con el deseo de compartir conocimientos y fomentar el crecimiento
            personal y profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
