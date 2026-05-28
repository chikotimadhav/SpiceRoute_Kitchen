/**
 * Lightweight Zustand-style store (works without installing zustand).
 * Swap the internals for zustand/redux if needed.
 */
import { create } from "zustand";

export const useUserStore = create((set) => ({
  user:        null,
  preferences: { darkMode: true, language: "en" },

  setUser:    (user)    => set({ user }),
  clearUser:  ()        => set({ user: null }),
  setDarkMode:(val)     => set((state) => ({
    preferences: { ...state.preferences, darkMode: val },
  })),
}));
