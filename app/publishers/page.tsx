import { getAllPublishers, getBooksByPublisherId } from '@/lib/data';
import PublishersClient from '@/components/PublishersClient';
import AuthGuard from '@/components/AuthGuard';

export default function PublishersPage() {
  const publishers = getAllPublishers();
  const publishersWithCount = publishers.map((p) => ({
    ...p,
    bookCount: getBooksByPublisherId(p.id).length,
  }));

  return (
    <AuthGuard>
      <PublishersClient publishers={publishersWithCount} />
    </AuthGuard>
  );
}
