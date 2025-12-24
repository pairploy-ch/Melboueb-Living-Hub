"use client"

import { createContext, useContext, useState } from "react"
import { en } from "../locales/en"
import { th } from "../locales/th"

type Language = "en" | "th"

const dictionaries = { en, th }

const LanguageContext = createContext<{
  language: Language
  t: typeof en
  setLanguage: (lang: Language) => void
} | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: dictionaries[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}
