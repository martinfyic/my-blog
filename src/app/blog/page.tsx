import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
import { sortPost } from '@/lib/utils';

export default async function BlogPage() {
  const sortedPosts = sortPost(posts.filter((post) => post.published));

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
      {sortedPosts?.length > 0 ? (
        <ul className='flex flex-col'>
          {sortedPosts.map((post) => {
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
    </div>
  );
}
