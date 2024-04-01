import { Metadata } from 'next';
import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
import { Tag } from '@/components/tags';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTags, getPostByTagSlug, sortTagsByCount } from '@/lib/utils';
import { slug } from 'github-slugger';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  const title = tag.split('-').join(' ');

  return {
    title: title,
    description: `Artículo sobre el tópico de ${tag}`,
    keywords: [`${tag}`, 'blog', 'artículo', 'desarrollo web'],
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const path = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return path;
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split('-').join(' ');

  const displayPost = getPostByTagSlug(posts, tag);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block text-4xl font-black capitalize lg:text-5xl'>
            {title}
          </h1>
          <p className='text-xl text-muted-foreground'>
            Aquí encontraras todos los artículos relacionados con {title}.
          </p>
        </div>
      </div>
      <div className='mt-8 grid grid-cols-12 gap-3'>
        <div className='col-span-12 col-start-1 sm:col-span-7'>
          <hr />
          {displayPost?.length > 0 ? (
            <ul className='flex flex-col'>
              {displayPost.map((post) => {
                const { date, slug, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      date={date}
                      slug={slug}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Aún no hay blogs</p>
          )}
        </div>
        <Card className='col-span-12 row-start-3 h-fit sm:col-span-5 sm:col-start-9 sm:row-start-1'>
          <CardHeader>
            <CardTitle># Tags</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {sortedTags?.map((sortTag) => (
              <Tag
                key={sortTag}
                tag={sortTag}
                count={tags[sortTag]}
                current={slug(sortTag) === tag}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
