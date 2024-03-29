import { Metadata } from 'next';

import { posts } from '#site/content';
import { getAllTags, sortTagsByCount } from '@/lib/utils';
import { Tag } from '@/components/tags';

export const metadata: Metadata = {
  title: 'Tags',
  description: 'Temas sobre los que escribí',
};

export default function TagsPage() {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);
  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block text-4xl font-black lg:text-5xl'>Tags</h1>
        </div>
      </div>
      <hr className='my-8' />
      <div className='mx-auto flex max-w-2xl flex-wrap gap-4'>
        {sortedTags?.map((tag) => <Tag key={tag} tag={tag} count={tags[tag]} />)}
      </div>
    </div>
  );
}
