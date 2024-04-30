import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDark = create(
  persist(
    (set) => ({
      dark: false,
      toggleDark: () => set((state) => ({ dark: !state.dark })),
    }),
    {
      name: "darkMode",
      storage: localStorage,
    }
  )
);
