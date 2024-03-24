import { defineConfig, defineCollection, s } from 'velite';

// ejemplo de computedFields, /blogs/my-slug-del-blog ==> my-slug-del-blog
// esto agregara el campo slugAsParams a cada post, que seria my-slug-del-blog
const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
});

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(99),
      description: s.string().max(200).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
