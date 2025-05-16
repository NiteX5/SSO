"use client"

import StatCard from "@/components/dashboard/stat-card"
import TrainingCard from "@/components/dashboard/training-card"
import VehiclesCard from "@/components/dashboard/vehicles-card"
import StaffCard from "@/components/dashboard/staff-card"
import DisabilityCard from "@/components/dashboard/disability-card"
import OccupationalIllnessCard from "@/components/dashboard/occupational-illness-card"
import { useLanguage } from "@/lib/language-context"
import { useTranslations } from "@/lib/i18n"
import AccidentProbabilityCard from "@/components/dashboard/accident-probability-card"

export default function Dashboard() {
  const { lang } = useLanguage()
  const t = useTranslations(lang)
  return (
    <div className="min-h-screen bg-white">
      

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">{t("ssoPlatform")}</h1>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard title={t("totalAccidentFreeHours")} initialValue={1001549} suffix={t("hours")} />

          <StatCard title={t("workAccidents")} initialValue={0} />

          <StatCard title={t("fatalAccidents")} initialValue={0} />
        </div>

        {/* Training and Vehicles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TrainingCard />
          <VehiclesCard />
        </div>

        {/* Total Staff */}
        <StaffCard />

        {/* Work Disability */}
        <DisabilityCard />

        {/* Occupational Illness */}
        <OccupationalIllnessCard />

        {/* Accident Probability Ranking */}
        <AccidentProbabilityCard />
      </main>
    </div>
  )
}
