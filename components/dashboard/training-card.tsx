"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { useTranslations } from "@/lib/i18n"

export default function TrainingCard() {
  const [efficiency] = useState(75)
  const [compliance] = useState(60)
  const [coverage] = useState(70)
  const { lang } = useLanguage()
  const t = useTranslations(lang)
  return (
    <Card className="p-6">
      <h2 className="text-xl font-medium mb-6">{t("training")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <div className="relative h-32 w-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">{efficiency}%</span>
            </div>
            <svg className="h-32 w-32" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e6e6e6" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#22c55e"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * efficiency) / 100}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
          <span className="mt-2 text-gray-600">{t("efficiency")}</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative h-32 w-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">{compliance}%</span>
            </div>
            <svg className="h-32 w-32" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e6e6e6" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * compliance) / 100}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
          <span className="mt-2 text-gray-600">{t("compliance")}</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative h-32 w-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">{coverage}%</span>
            </div>
            <svg className="h-32 w-32" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e6e6e6" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#eab308"
                strokeWidth="10"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * coverage) / 100}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>
          <span className="mt-2 text-gray-600">{t("coverage")}</span>
        </div>
      </div>
    </Card>
  )
}
