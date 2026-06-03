import { useMemo } from 'react';

export function usePagination<T>(items: T[], pageSize: number, currentPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);

  const pageItems = useMemo(
    () => items.slice((safePage - 1) * pageSize, safePage * pageSize),
    [items, pageSize, safePage]
  );

  return { totalPages, currentPage: safePage, pageItems };
}
