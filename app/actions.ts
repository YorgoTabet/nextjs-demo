'use server';

import { cookies } from 'next/headers';

export async function setSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.set('session', '1', {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
    sameSite: 'lax',
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete('session');
}
