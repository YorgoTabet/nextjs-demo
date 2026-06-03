'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  // Use {page} as a placeholder, e.g. "?page={page}" or "/books?page={page}".
  hrefPattern?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  hrefPattern,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getHref = hrefPattern
    ? (page: number) => hrefPattern.replace('{page}', String(page))
    : undefined;

  const activeCls =
    'bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900';
  const inactiveCls =
    'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700';
  const baseCls = 'px-4 py-2 rounded-lg text-sm font-medium transition-colors';
  const disabledCls = `${baseCls} ${inactiveCls} opacity-40 cursor-not-allowed`;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      {/* Prev */}
      {getHref ? (
        currentPage > 1 ? (
          <Link href={getHref(currentPage - 1)} className={`${baseCls} ${inactiveCls}`}>
            ← Prev
          </Link>
        ) : (
          <span className={disabledCls}>← Prev</span>
        )
      ) : (
        <button
          onClick={() => onPageChange?.(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${baseCls} ${inactiveCls} disabled:opacity-40`}
        >
          ← Prev
        </button>
      )}

      {/* Page numbers */}
      {pages.map((page) =>
        getHref ? (
          <Link
            key={page}
            href={getHref(page)}
            className={`${baseCls} ${currentPage === page ? activeCls : inactiveCls}`}
          >
            {page}
          </Link>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            className={`${baseCls} ${currentPage === page ? activeCls : inactiveCls}`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      {getHref ? (
        currentPage < totalPages ? (
          <Link href={getHref(currentPage + 1)} className={`${baseCls} ${inactiveCls}`}>
            Next →
          </Link>
        ) : (
          <span className={disabledCls}>Next →</span>
        )
      ) : (
        <button
          onClick={() => onPageChange?.(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${baseCls} ${inactiveCls} disabled:opacity-40`}
        >
          Next →
        </button>
      )}
    </div>
  );
}
