import { slug } from 'github-slugger';
import { badgeVariants } from './ui/badge';
import { TransitionLink } from './transition-link';

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

export const Tag = ({ tag, count, current }: TagProps) => {
  return (
    <TransitionLink
      className={badgeVariants({
        variant: current ? 'default' : 'secondary',
        className: 'rounded-md no-underline',
      })}
      href={`/tags/${slug(tag)}`}
    >
      # {tag} {count ? `(${count})` : null}
    </TransitionLink>
  );
};
