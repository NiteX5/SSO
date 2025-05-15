"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { useTranslations } from "@/lib/i18n"
import { useLanguage } from "@/lib/language-context"

export default function DisabilityCard() {
  const { lang } = useLanguage()
  const t = useTranslations(lang)
  const [disabilityData] = useState([
    { month: t("december"), value: 15, percentage: 50 },
    { month: t("november"), value: 8, percentage: 27 },
    { month: t("october"), value: 5, percentage: 17 },
    { month: t("september"), value: 12, percentage: 40 },
    { month: t("august"), value: 25, percentage: 83 },
    { month: t("july"), value: 10, percentage: 33 },
    { month: t("june"), value: 8, percentage: 27 },
    { month: t("may"), value: 30, percentage: 100 },
    { month: t("april"), value: 5, percentage: 17 },
    { month: t("march"), value: 28, percentage: 93 },
    { month: t("february"), value: 15, percentage: 50 },
    { month: t("january"), value: 18, percentage: 60 },
  ])

  return (
    <Card className="p-6 mb-6">
      <h2 className="text-xl font-medium mb-6">{t("work Disability")}</h2>
      <div className="space-y-4">
        {disabilityData.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-28 text-sm">{item.month}</div>
            <div className="flex-1 mx-2">
              <div className="h-5 bg-orange-500 rounded" style={{ width: `${item.percentage}%` }}></div>
            </div>
            <div className="w-8 text-right">{item.value}</div>
          </div>
        ))}
      </div>
    </Card>
  )
}
