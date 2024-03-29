import { Metadata } from 'next';
import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
import { QueryPagination } from '@/components/query-pagination';
import { sortPost } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'En esta página encontraras todos mis artículos ordenados del mas reciente al mas antiguo',
};

const POST_PER_PAGE = 2;

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

  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block text-4xl font-black lg:text-5xl'>Blog</h1>
          <p className='text-xl text-muted-foreground'>
            Descripción del blog, de que temas tratara, etc
          </p>
        </div>
      </div>
      <hr className='mt-8' />
      {displayPost?.length > 0 ? (
        <ul className='flex flex-col'>
          {displayPost.map((post) => {
            const { date, slug, title, description } = post;
            return (
              <li key={slug}>
                <PostItem
                  date={date}
                  slug={slug}
                  title={title}
                  description={description}
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
  );
}
