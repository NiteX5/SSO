"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { useTranslations } from "@/lib/i18n"
import { useLanguage } from "@/lib/language-context"

export default function StaffCard() {
  const [totalStaff] = useState(4917)
  const { lang } = useLanguage()
  const t = useTranslations(lang)
  return (
    <Card className="p-6 mb-6">
      <h2 className="text-xl font-medium mb-2">total {t("staff")}</h2>
      <p className="text-4xl font-bold">{totalStaff.toLocaleString()}</p>
    </Card>
  )
}
