'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Pagination from './Pagination';
import { usePagination } from '@/hooks/usePagination';
import { Publisher } from '@/lib/data';

type SortField = 'name' | 'country' | 'founded' | 'bookCount';
type SortDir = 'asc' | 'desc';

const PAGE_SIZE = 4;

interface PublisherRow extends Publisher {
  bookCount: number;
}

interface PublishersClientProps {
  publishers: PublisherRow[];
}

const SortHeader = ({  label, onClick, isAscending }: {  label: string; onClick: () => void; isAscending: boolean }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors font-semibold"
  >
    {label}
    <span className="text-xs">{isAscending ? '↑' : '↓'}</span>
  </button>
);


export default function PublishersClient({ publishers }: PublishersClientProps) {
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const isAscending = sortDir === 'asc';

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDir('asc');
    }
    setCurrentPage(1);
  };

  const sorted = useMemo(() => {
    const q = filter.toLowerCase();
    const filtered = publishers.filter(
      (p) => p.name.toLowerCase().includes(q) || p.country.toLowerCase().includes(q)
    );
    return [...filtered].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [publishers, filter, sortField, sortDir]);

  const { totalPages, currentPage: safePage, pageItems } = usePagination(
    sorted,
    PAGE_SIZE,
    currentPage
  );


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">Publishers</h1>

      <div className="mb-6">
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Filter by name or country..."
          className="w-full md:w-80 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
        />
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Showing {sorted.length} {sorted.length === 1 ? 'publisher' : 'publishers'}
      </p>

      <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="w-full text-sm">
          <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
            <tr>
              <th className="px-6 py-3 text-left">
                <SortHeader  label="Name" onClick={() => toggleSort('name')} isAscending={isAscending} />
              </th>
              <th className="px-6 py-3 text-left">
                <SortHeader  label="Country" onClick={() => toggleSort('country')} isAscending={isAscending} />
              </th>
              <th className="px-6 py-3 text-left">
                <SortHeader  label="Founded" onClick={() => toggleSort('founded')} isAscending={isAscending} />
              </th>
              <th className="px-6 py-3 text-left">
                <SortHeader  label="Books" onClick={() => toggleSort('bookCount')} isAscending={isAscending} />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {pageItems.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-8 text-center text-zinc-500 dark:text-zinc-400"
                >
                  No publishers found.
                </td>
              </tr>
            ) : (
              pageItems.map((publisher) => (
                <tr
                  key={publisher.id}
                  className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <td className="px-6 py-4">
                    <Link
                      href={`/publishers/${publisher.id}`}
                      className="font-medium text-zinc-900 dark:text-zinc-50 hover:underline"
                    >
                      {publisher.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-zinc-700 dark:text-zinc-300">
                    {publisher.country}
                  </td>
                  <td className="px-6 py-4 text-zinc-700 dark:text-zinc-300">
                    {publisher.founded}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-full text-zinc-700 dark:text-zinc-300">
                      {publisher.bookCount}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={safePage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
