import { useUserStore } from '../store/userStore';

export const useAuth = () => {
  const user = useUserStore((state) => state.user);
  
  return {
    user,
    isAuthenticated: !!user,
    login: () => {}, // Stub
    logout: () => {}, // Stub
  };
};
