'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from './ui/pagination';

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

export const QueryPagination = ({ totalPages, className }: QueryPaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination className={className}>
      <PaginationContent>
        {previousPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={createPageURL(previousPage)} />
          </PaginationItem>
        ) : null}

        {Array(totalPages)
          .fill('')
          .map((_, index) => (
            <PaginationItem
              key={`pagination-button-${index + 1}`}
              className='hidden sm:inline-block'
            >
              <PaginationLink
                isActive={currentPage === index + 1}
                href={createPageURL(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageURL(nextPage)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
};
