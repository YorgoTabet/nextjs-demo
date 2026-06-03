import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  initialized: boolean;
  setLoggedIn: (value: boolean) => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  initialized: false,
  setLoggedIn: (value: boolean) => set({ isLoggedIn: value }),
  initialize: () => {
    if (typeof document !== 'undefined') {
      const hasSession = document.cookie.split(';').some((c) =>
        c.trim().startsWith('session=')
      );
      set({ isLoggedIn: hasSession, initialized: true });
    }
  },
}));
