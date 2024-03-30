import { Metadata } from 'next';
import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
import { QueryPagination } from '@/components/query-pagination';
import { getAllTags, sortPost, sortTagsByCount } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tag } from '@/components/tags';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'En mi blog, compartiré desafíos y soluciones en mi trayectoria como programador full stack, con la esperanza de ayudar a otros y demostrar mis conocimientos adquiridos.',
};

const POST_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;

  const sortedPosts = sortPost(posts.filter((post) => post.published));

  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);

  const displayPost = sortedPosts.slice(
    (currentPage - 1) * POST_PER_PAGE,
    currentPage * POST_PER_PAGE
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block text-4xl font-black lg:text-5xl'>Blog</h1>
          <p className='text-xl text-muted-foreground'>
            En mi blog, compartiré desafíos y soluciones en mi trayectoria como
            programador full stack, con la esperanza de ayudar a otros y demostrar mis
            conocimientos adquiridos.
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
          <QueryPagination
            totalPages={totalPages}
            className='mt-6 items-center justify-center md:mt-10 lg:mt-12'
          />
        </div>
        <Card className='col-span-12 row-start-3 h-fit sm:col-span-5 sm:col-start-9 sm:row-start-1'>
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {sortedTags?.map((tag) => <Tag key={tag} tag={tag} count={tags[tag]} />)}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
