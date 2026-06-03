'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/authStore';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, initialized, initialize } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    if (initialized && !isLoggedIn) {
      router.replace(`/login?from=${encodeURIComponent(pathname)}`);
    }
  }, [initialized, isLoggedIn, router, pathname]);

  if (!initialized || !isLoggedIn) {
    return null;
  }

  return <>{children}</>;
}
