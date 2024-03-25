import { Post } from '#site/content';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number) {
  return new Date(input).toLocaleDateString('es-ES', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function sortPost(posts: Post[]) {
  return posts.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });
}
