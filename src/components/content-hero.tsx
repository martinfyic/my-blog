import Image from 'next/image';

interface ContentHeroProps {
  src: string;
  alt: string;
  url?: string;
}

export const ContentHero = ({ alt, src, url = '#' }: ContentHeroProps) => {
  return (
    <>
      {url === '#' ? (
        <Image
          src={src}
          alt={alt}
          width={800}
          height={300}
          className='py-4 md:py-8 lg:py-16'
        />
      ) : (
        <a href={url} rel='noreferrer' target='_blank'>
          <Image
            src={src}
            alt={alt}
            width={800}
            height={300}
            className='py-4 md:py-8 lg:py-16'
          />
        </a>
      )}
    </>
  );
};
