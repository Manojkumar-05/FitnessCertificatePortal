import { create } from 'zustand'

export const useDark = create((set) => ({
    dark : true,
    toggleDark : () => set((state) => ({dark : !state.dark}))
}))
