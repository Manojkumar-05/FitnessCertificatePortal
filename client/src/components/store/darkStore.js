import { create } from 'zustand'

export const useDark = create((set) => ({
    dark : false,
    toggleDark : () => set((state) => ({dark : !state.dark}))
}))
