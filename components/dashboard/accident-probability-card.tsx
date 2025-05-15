"use client"

import { useState } from "react"
import {
  RefreshCw,
  Truck,
  HardHat,
  Building2,
  Fuel,
  Building,
  Warehouse,
  Hotel,
  Hospital,
  Dice1Icon as Dice,
  DoorOpen,
  Bus,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/lib/i18n"
import { useLanguage } from "@/lib/language-context"

export default function AccidentProbabilityCard() {

  const { lang } = useLanguage()
  const t = useTranslations(lang)

  const [accidentProbability, setAccidentProbability] = useState([
    { rank: 1, icon: <Truck className="h-4 w-4" />, area: t("Truck Shop"), count: 850, probability: 25 },
    { rank: 2, icon: <HardHat className="h-4 w-4" />, area: t("Mine"), count: 720, probability: 22 },
    { rank: 3, icon: <Building2 className="h-4 w-4" />, area: t("Plant"), count: 650, probability: 18 },
    { rank: 4, icon: <Fuel className="h-4 w-4" />, area: t("Fuel Area"), count: 450, probability: 12 },
    { rank: 5, icon: <Building className="h-4 w-4" />, area: t("Administrative Offices"), count: 400, probability: 8 },
    { rank: 6, icon: <Warehouse className="h-4 w-4" />, area: t("Warehouse"), count: 350, probability: 5 },
    { rank: 7, icon: <Hotel className="h-4 w-4" />, area: t("Hotel"), count: 300, probability: 4 },
    { rank: 8, icon: <Hospital className="h-4 w-4" />, area: t("Hospital"), count: 250, probability: 3 },
    { rank: 9, icon: <Dice className="h-4 w-4" />, area: t("Casino"), count: 200, probability: 2 },
    { rank: 10, icon: <DoorOpen className="h-4 w-4" />, area: t("Entrance"), count: 150, probability: 1 },
    { rank: 11, icon: <Bus className="h-4 w-4" />, area: t("Transit"), count: 100, probability: 0.5 },
  ])

  const refreshData = () => {
    const newData = accidentProbability.map((item) => {
      const variationFactor = Math.random() * 0.4 + 0.8 // 0.8-1.2 (±20%)
      const newCount = Math.round(item.count * variationFactor)

      // Probability varies more for higher-risk areas
      const probVariation =
        item.rank <= 3
          ? Math.random() * 10 - 5
          : // ±5% for top 3
            Math.random() * 4 - 2 // ±2% for others

      let newProbability = item.probability + probVariation

      // Ensure probability is at least 0.1%
      newProbability = Math.max(0.1, newProbability)

      // Round to 1 decimal for small values, whole numbers for larger values
      newProbability = newProbability < 5 ? Math.round(newProbability * 10) / 10 : Math.round(newProbability)

      return {
        ...item,
        count: newCount,
        probability: newProbability,
      }
    })

    // Sort by probability (descending)
    newData.sort((a, b) => b.probability - a.probability)

    // Update ranks
    const rankedData = newData.map((item, index) => ({
      ...item,
      rank: index + 1,
    }))

    setAccidentProbability(rankedData)
  }

  return (
    <Card className="p-6 relative">
      <div className="absolute top-4 right-4">
        <Button variant="ghost" size="icon" onClick={refreshData}>
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
      <h2 className="text-xl font-medium mb-6">{t("Accident Probability Ranking")}</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2 font-normal text-gray-500">{t("Ranking")}</th>
              <th className="pb-2 font-normal text-gray-500">{t("Area")}</th>
              <th className="pb-2 font-normal text-gray-500">{t("People Count")}</th>
              <th className="pb-2 font-normal text-gray-500">{t("Accident Probability")}</th>
            </tr>
          </thead>
          <tbody>
            {accidentProbability.map((item) => (
              <tr key={item.rank} className="border-b">
                <td className="py-3">{item.rank}</td>
                <td className="py-3">
                  <div className="flex items-center">
                    {item.icon}
                    <span className="ml-2">{item.area}</span>
                  </div>
                </td>
                <td className="py-3">{item.count}</td>
                <td className="py-3">{item.probability}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
