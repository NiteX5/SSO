"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { useTranslations } from "@/lib/i18n"
import { useLanguage } from "@/lib/language-context"

export default function VehiclesCard() {
  const [vehicleData] = useState({
    trucks: { total: 825, electric: 220, combustion: 605 },
    buses: { total: 42, electric: 12, combustion: 30 },
    minibuses: { total: 157, electric: 30, combustion: 90 },
    operation: { total: 378, electric: 78, combustion: 200 },
  })
  const { lang } = useLanguage()
  const t = useTranslations(lang)
  return (
    <Card className="p-6">
      <h2 className="text-xl font-medium mb-6">{t("Vehicles")}</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-2 font-normal text-gray-500">{t("type")}</th>
              <th className="pb-2 font-normal text-gray-500">{t("trucks")}</th>
              <th className="pb-2 font-normal text-gray-500">{t("buses")}</th>
              <th className="pb-2 font-normal text-gray-500">{t("minibuses")}</th>
              <th className="pb-2 font-normal text-gray-500">{t("operation")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">total</td>
              <td className="py-2">{vehicleData.trucks.total}</td>
              <td className="py-2">{vehicleData.buses.total}</td>
              <td className="py-2">{vehicleData.minibuses.total}</td>
              <td className="py-2">{vehicleData.operation.total}</td>
            </tr>
            <tr>
              <td className="py-2">{t("electric")}</td>
              <td className="py-2">{vehicleData.trucks.electric}</td>
              <td className="py-2">{vehicleData.buses.electric}</td>
              <td className="py-2">{vehicleData.minibuses.electric}</td>
              <td className="py-2">{vehicleData.operation.electric}</td>
            </tr>
            <tr>
              <td className="py-2">{t("combustion")}</td>
              <td className="py-2">{vehicleData.trucks.combustion}</td>
              <td className="py-2">{vehicleData.buses.combustion}</td>
              <td className="py-2">{vehicleData.minibuses.combustion}</td>
              <td className="py-2">{vehicleData.operation.combustion}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  )
}
