"use client"

import Link from "next/link"
import { HardHat, LayoutDashboard, FileText } from "lucide-react"
import { useTranslations } from "@/lib/i18n"
import { useLanguage } from "@/lib/language-context"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MiningNav() {
  const { lang } = useLanguage()
  const t = useTranslations(lang)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/mining-company" className="mr-6 flex items-center space-x-2">
            <HardHat className="h-6 w-6" />
            <span className="font-bold">{t("miningCompanyView")}</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/mining-company/dashboard"
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-2",
                pathname === "/mining-company/dashboard" && "text-foreground",
              )}
            >
              <LayoutDashboard className="h-4 w-4" />
              {t("dashboard")}
            </Link>
            <Link
              href="/mining-company"
              className={cn(
                "transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-2",
                pathname === "/mining-company" && "text-foreground",
              )}
            >
              <FileText className="h-4 w-4" />
              {t("documentReview")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

