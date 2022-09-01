import create from 'zustand'
import { persist } from 'zustand/middleware'

let useTheme = (set) => ({
  dark: false,
  toggleMode: () => set((state) => ({
    dark: !state.dark
  }))
})

useTheme = persist(useTheme, { name: 'portfolio-theme-1' })
useTheme = create(useTheme)

export default useTheme