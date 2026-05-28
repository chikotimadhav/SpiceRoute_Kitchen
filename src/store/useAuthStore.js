import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null, // { name, phone, email }
  isAuthenticated: false,
  isAuthModalOpen: false,
  authView: "login", // "login" | "signup"

  login: (userData) => set({ user: userData, isAuthenticated: true, isAuthModalOpen: false }),
  logout: () => set({ user: null, isAuthenticated: false }),
  
  openAuthModal: (view = "login") => set({ isAuthModalOpen: true, authView: view }),
  closeAuthModal: () => set({ isAuthModalOpen: false }),
  setAuthView: (view) => set({ authView: view }),
}));

export default useAuthStore;
