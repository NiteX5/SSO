import Link from "next/link"
import { Building2, Users } from "lucide-react"
import { useTranslations } from "@/lib/i18n"
import { useLanguage } from "@/lib/language-context"

export function MainNav() {
  const { lang } = useLanguage()
  const t = useTranslations(lang)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">{t("accreditationPlatform")}</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/company/documents"
              className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              {t("companyDocuments")}
            </Link>
            <Link
              href="/company/employees"
              className="transition-colors hover:text-foreground/80 text-foreground/60 flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              {t("employeeDocuments")}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

