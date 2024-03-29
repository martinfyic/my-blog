import Link from 'next/link';
import { slug } from 'github-slugger';
import { badgeVariants } from './ui/badge';

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export const Tag = ({ tag, count, current }: TagProps) => {
  return (
    <Link
      className={badgeVariants({
        variant: current ? 'default' : 'secondary',
        className: 'rounded-md no-underline',
      })}
      href={`/tags/${slug(tag)}`}
    >
      # {tag}
    </Link>
  );
};
