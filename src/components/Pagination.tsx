'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  visiblePages?: number;
}

export default function Pagination({ currentPage, totalPages, visiblePages = 5 }: PaginationProps) {
  const { pages, hasLeftDots, hasRightDots } = getVisiblePages(currentPage, totalPages, visiblePages);

  return (
    <div className="join mt-12">
      {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`} className="join-item btn btn-ghost">
          &laquo;
        </Link>
      )}
      {hasLeftDots && <span className="join-item btn btn-disabled">...</span>}
      {pages.map((page) => (
        <Link
          key={page}
          href={`/?page=${page}`}
          className={`join-item btn ${page === currentPage ? 'btn-primary' : 'btn-ghost'}`}
        >
          {page}
        </Link>
      ))}
      {hasRightDots && <span className="join-item btn btn-disabled">...</span>}
      {currentPage < totalPages && (
        <Link href={`/?page=${currentPage + 1}`} className="join-item btn btn-ghost">
          &raquo;
        </Link>
      )}
    </div>
  );
}

// logic dipisah ke bawah atau ke file lain
function getVisiblePages(current: number, total: number, visible: number) {
  const pages: number[] = [];

  const half = Math.floor(visible / 2);
  let start = Math.max(1, current - half);
  let end = Math.min(total, current + half);

  if (end - start + 1 < visible) {
    if (start === 1) {
      end = Math.min(start + visible - 1, total);
    } else if (end === total) {
      start = Math.max(end - visible + 1, 1);
    }
  }

  for (let i = start; i <= end; i++) pages.push(i);

  const hasLeftDots = start > 1;
  const hasRightDots = end < total;

  return { pages, hasLeftDots, hasRightDots };
}
