import create from 'zustand'
import { persist } from 'zustand/middleware'

let useLanguage = set => ({
  language: 'english',
  toggleLanguage: (language) => set(state => ({
    language: language
  }))
})

useLanguage = persist(useLanguage, { name: 'portfolio-language' })
useLanguage = create(useLanguage)

export default useLanguage
