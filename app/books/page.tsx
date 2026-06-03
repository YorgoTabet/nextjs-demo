import { getAllBooks, getAllAuthors } from '@/lib/data';
import BooksClient from '@/components/BooksClient';
import AuthGuard from '@/components/AuthGuard';
import { Suspense } from 'react';

export default function BooksPage() {
  const books = getAllBooks();
  const authors = getAllAuthors();

  return (
    <AuthGuard>
      <Suspense>
        <BooksClient initialBooks={books} authors={authors} />
      </Suspense>
    </AuthGuard>
  );
}
