"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { useTranslations } from "@/lib/i18n"
import { useLanguage } from "@/lib/language-context"

export default function OccupationalIllnessCard() {
  const [peakValue] = useState(4545)
  const { lang } = useLanguage()
  const t = useTranslations(lang)

  return (
    <Card className="p-6 mb-6">
      <h2 className="text-xl font-medium mb-2">{t("Occupational illness")}</h2>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-orange-500 mr-2"></span>
          <span>{t("incidence")}</span>
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
          <span>{t("prevalence")}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <span>L.</span>
          <div className="bg-blue-50 px-3 py-1 rounded">1</div>
        </div>
        <div className="flex items-center space-x-2">
          <span>P.</span>
          <div className="bg-blue-50 px-3 py-1 rounded">1</div>
        </div>
      </div>

      <div className="h-64 relative">
        <div className="absolute top-0 left-12 text-xs text-gray-500">5000</div>
        <div className="absolute bottom-0 left-12 text-xs text-gray-500">0</div>
        <div className="absolute top-0 right-0 text-xs text-gray-500">{peakValue}</div>

        <div className="h-full flex items-end pl-16">
          <div className="flex-1 h-full flex items-end">
            {/* Horizontal axis line */}
            <div className="absolute bottom-8 left-16 right-0 h-px bg-gray-300"></div>

            {/* Vertical green line for December */}
            <div className="relative h-full flex items-end justify-around w-full">
              {["Ene", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"].map((month, i) => (
                <div key={i} className="flex flex-col items-center">
                  {i === 11 && <div className="absolute bottom-8 w-1 bg-green-500 h-[80%]"></div>}
                  <span className="text-xs text-gray-500 mt-2">{month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
