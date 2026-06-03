'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/authStore';
import { clearSessionCookie } from '@/app/actions';

export default function Navigation() {
  const { isLoggedIn, initialized, setLoggedIn } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    await clearSessionCookie();
    setLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className="bg-zinc-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold hover:text-zinc-300 transition-colors">
              📚 BookHub
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link href="/" className="hover:text-zinc-300 transition-colors font-medium">
              Home
            </Link>
            <Link href="/books" className="hover:text-zinc-300 transition-colors font-medium">
              Books
            </Link>
            <Link href="/authors" className="hover:text-zinc-300 transition-colors font-medium">
              Authors
            </Link>
            <Link href="/publishers" className="hover:text-zinc-300 transition-colors font-medium">
              Publishers
            </Link>
            {initialized && (
              isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="hover:text-zinc-300 transition-colors font-medium cursor-pointer"
                >
                  Logout
                </button>
              ) : (
                <Link href="/login" className="hover:text-zinc-300 transition-colors font-medium">
                  Login
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
