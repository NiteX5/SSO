"use client"

import type React from "react"

import { useLanguage } from "@/lib/language-context"
import { MiningNav } from "@/components/mining-nav"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { usePathname } from "next/navigation"

export default function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLanguage()
  const pathname = usePathname()

  const isMiningCompany = pathname?.startsWith("/mining-company")

  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <MiningNav />
        <Select onValueChange={setLang} defaultValue={lang}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  )
}

