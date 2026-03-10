import { create } from 'zustand';
import { UserProfile } from '../types';

interface UserState {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    id: 'mock-user-1',
    email: 'explorer@absoon.compass',
    name: 'Explorer',
    createdAt: new Date().toISOString(),
    onboardingCompleted: true,
    compassConfig: {
      north: { id: 'north', label: 'Career & Purpose', description: 'Your professional path and life mission', color: 'var(--gold)', icon: 'briefcase', goalCount: 0, progress: 0 },
      east: { id: 'east', label: 'Relationships', description: 'Connections, family, and community', color: 'var(--emerald)', icon: 'users', goalCount: 0, progress: 0 },
      south: { id: 'south', label: 'Health & Wellness', description: 'Physical and mental well-being', color: 'var(--rose)', icon: 'heart', goalCount: 0, progress: 0 },
      west: { id: 'west', label: 'Personal Growth', description: 'Learning, hobbies, and spirituality', color: 'var(--text-primary)', icon: 'book', goalCount: 0, progress: 0 },
    }
  },
  setUser: (user) => set({ user }),
}));
