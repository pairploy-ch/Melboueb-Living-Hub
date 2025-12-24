"use client"

import { LanguageProvider } from "@/contexts/LanguageContext"
import BlogDetail from "./BlogDetail"

export default function Page() {
  return (
    <LanguageProvider>
      <BlogDetail />
    </LanguageProvider>
  )
}
